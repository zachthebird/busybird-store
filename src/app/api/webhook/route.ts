import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Stripe posts raw event JSON here. We verify the signature so only genuine
// Stripe events are ever trusted as proof of payment.
//
// This route is DORMANT until STRIPE_WEBHOOK_SECRET is set: without it we just
// acknowledge (200) so Stripe doesn't retry-storm, and no order is recorded.
// To activate: register https://busybirdaustin.com/api/webhook in the Stripe
// dashboard for `checkout.session.completed` and
// `checkout.session.async_payment_succeeded`, then put the signing secret
// (whsec_...) in the STRIPE_WEBHOOK_SECRET env var.
//
// Order flow once active:
//   1. Idempotency — Stripe redelivers events, so we keep a flag in the
//      PaymentIntent's metadata (PaymentIntents stay updatable after payment;
//      completed Checkout Sessions don't). Flag set -> acknowledge and stop.
//      Fully-discounted sessions (payment_status "no_payment_required") have
//      no PaymentIntent; they're still orders and are notified every delivery
//      rather than dropped.
//   2. Notify — Telegram message to the owner when ORDER_TELEGRAM_BOT_TOKEN +
//      ORDER_TELEGRAM_CHAT_ID are BOTH set; the order summary is always
//      written to the server log first (note: Vercel runtime logs are
//      short-lived — add a log drain if the log itself must be durable;
//      Stripe's dashboard remains the permanent record either way).
//      Telegram failures are split: transient (429/5xx/network) returns 500
//      so Stripe retries; permanent (other 4xx: bad token/chat id) returns
//      200 WITHOUT marking, so retries don't hammer a dead config — fix the
//      config, then redeliver the event from the Stripe dashboard.
//   3. Mark — the notified flag is set ONLY after a Telegram message actually
//      sent. Unconfigured/half-configured runs never mark, so configuring
//      later + manual redelivery still produces the notification.
// Stripe itself is the order store (sessions + line items are retrievable
// indefinitely); a database earns its keep only when fulfillment needs state.

const NOTIFIED_KEY = "busybird_order_notified";
// Telegram sendMessage caps text at 4096 chars.
const TELEGRAM_MAX = 4000;

function formatOrderSummary(
  session: Stripe.Checkout.Session,
  lineItems: Stripe.LineItem[]
): string {
  const amount = ((session.amount_total ?? 0) / 100).toFixed(2);
  const currency = (session.currency ?? "usd").toUpperCase();
  const customer = session.customer_details;
  const address = session.collected_information?.shipping_details?.address;

  const lines = [
    `New BusyBird order — $${amount} ${currency}` +
      (session.payment_status === "no_payment_required"
        ? " (fully discounted — no payment required)"
        : ""),
    ...lineItems.map((li) => `• ${li.description} ×${li.quantity ?? 1}`),
  ];
  if (customer?.name || customer?.email) {
    lines.push(`Customer: ${[customer.name, customer.email].filter(Boolean).join(" — ")}`);
  }
  if (address) {
    const place = [address.city, address.state, address.postal_code]
      .filter(Boolean)
      .join(", ");
    if (place) lines.push(`Ship to: ${place}`);
  }
  lines.push(`Stripe session: ${session.id}`);
  return lines.join("\n");
}

type SendResult = "sent" | "permanent-failure" | "transient-failure";

async function sendTelegram(
  token: string,
  chatId: string,
  text: string
): Promise<SendResult> {
  const body =
    text.length > TELEGRAM_MAX ? `${text.slice(0, TELEGRAM_MAX)}\n…` : text;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Plain text on purpose — parse_mode would require escaping order data.
      body: JSON.stringify({ chat_id: chatId, text: body }),
    });
    if (res.ok) return "sent";
    console.error("[order] telegram send failed:", res.status, await res.text());
    // 429 and 5xx are worth retrying; other 4xx (bad token, bad chat id)
    // won't get better on Stripe's retry schedule.
    return res.status === 429 || res.status >= 500
      ? "transient-failure"
      : "permanent-failure";
  } catch (err) {
    console.error("[order] telegram send failed:", err);
    return "transient-failure";
  }
}

export async function POST(request: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!key || key.includes("placeholder") || !webhookSecret) {
    return NextResponse.json({ received: true, configured: false });
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const stripe = new Stripe(key);
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Fulfill unless payment is actually outstanding (Stripe's own guidance):
  // "paid" is the normal card flow; "no_payment_required" is a legitimately
  // $0 session (e.g. a 100%-off promo code with free shipping); async
  // payment methods complete later via async_payment_succeeded. Only
  // "unpaid" waits.
  const session = event.data.object as Stripe.Checkout.Session;
  const isPaidOrder =
    (event.type === "checkout.session.completed" &&
      session.payment_status !== "unpaid") ||
    event.type === "checkout.session.async_payment_succeeded";
  if (!isPaidOrder) {
    return NextResponse.json({ received: true });
  }

  // Idempotency check. The event payload is a snapshot from event-creation
  // time, so the flag must be read fresh from the PaymentIntent. $0 sessions
  // have no PaymentIntent — those skip the check (a duplicate ping on
  // redelivery beats dropping the order).
  const paymentIntentId =
    typeof session.payment_intent === "string"
      ? session.payment_intent
      : session.payment_intent?.id ?? null;

  if (paymentIntentId) {
    let paymentIntent: Stripe.PaymentIntent;
    try {
      paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    } catch (err) {
      // Can't tell whether this order was already handled — have Stripe retry
      // rather than risk dropping or duplicating it.
      console.error("[order] payment intent retrieve failed, retrying:", err);
      return NextResponse.json({ error: "Retry" }, { status: 500 });
    }
    if (paymentIntent.metadata?.[NOTIFIED_KEY]) {
      return NextResponse.json({ received: true, duplicate: true });
    }
  }

  // Best-effort line items for the summary; the order is still notified
  // without them.
  let lineItems: Stripe.LineItem[] = [];
  try {
    lineItems = (
      await stripe.checkout.sessions.listLineItems(session.id, { limit: 100 })
    ).data;
  } catch (err) {
    console.error("[order] line item fetch failed (continuing):", err);
  }

  const summary = formatOrderSummary(session, lineItems);
  console.log("[order] paid\n" + summary);

  const token = process.env.ORDER_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.ORDER_TELEGRAM_CHAT_ID;

  if (!token !== !chatId) {
    // Exactly one of the pair is set — a misconfiguration, not a choice.
    // Don't mark, so a dashboard redelivery after fixing the env re-notifies.
    console.error(
      "[order] Telegram misconfigured: set BOTH ORDER_TELEGRAM_BOT_TOKEN and ORDER_TELEGRAM_CHAT_ID. Order logged above but NOT notified."
    );
    return NextResponse.json({ received: true, notified: false });
  }

  if (!token || !chatId) {
    // Notifications deliberately not configured. Logged above; not marked,
    // so configuring later + manual redelivery still notifies.
    return NextResponse.json({ received: true, notified: false });
  }

  const result = await sendTelegram(token, chatId, summary);
  if (result === "transient-failure") {
    // Worth retrying — never silently drop a paid order.
    return NextResponse.json({ error: "Retry" }, { status: 500 });
  }
  if (result === "permanent-failure") {
    // Retrying a dead config just risks Stripe disabling the endpoint.
    // Logged above; fix the config, then redeliver from the dashboard.
    return NextResponse.json({ received: true, notified: false });
  }

  if (paymentIntentId) {
    try {
      await stripe.paymentIntents.update(paymentIntentId, {
        metadata: { [NOTIFIED_KEY]: new Date().toISOString() },
      });
    } catch (err) {
      // Deliberate 200 despite the failure: a duplicate ping on a later
      // redelivery beats a retry loop that re-notifies immediately.
      console.error("[order] could not mark order notified:", err);
    }
  }

  return NextResponse.json({ received: true, notified: true });
}
