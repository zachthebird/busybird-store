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
//   2. Notify — Telegram message to the owner when ORDER_TELEGRAM_BOT_TOKEN +
//      ORDER_TELEGRAM_CHAT_ID are set; the order summary is always written to
//      the server log either way. A failed configured notification returns 500
//      so Stripe retries — never silently drop a paid order.
//   3. Mark — set the flag only after a successful notification. If marking
//      fails we still return 200: a duplicate Telegram ping on some later
//      manual redelivery is better than a retry loop.
// Stripe itself is the order store (sessions + line items are retrievable
// indefinitely); a database earns its keep only when fulfillment needs state.

const NOTIFIED_KEY = "busybird_order_notified";

function formatOrderSummary(
  session: Stripe.Checkout.Session,
  lineItems: Stripe.LineItem[]
): string {
  const amount = ((session.amount_total ?? 0) / 100).toFixed(2);
  const currency = (session.currency ?? "usd").toUpperCase();
  const customer = session.customer_details;
  const address = session.collected_information?.shipping_details?.address;

  const lines = [
    `New BusyBird order — $${amount} ${currency}`,
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

async function sendTelegram(
  token: string,
  chatId: string,
  text: string
): Promise<boolean> {
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Plain text on purpose — parse_mode would require escaping order data.
      body: JSON.stringify({ chat_id: chatId, text }),
    });
    if (!res.ok) {
      console.error("[order] telegram send failed:", res.status, await res.text());
    }
    return res.ok;
  } catch (err) {
    console.error("[order] telegram send failed:", err);
    return false;
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

  // `completed` can fire before funds settle for async payment methods, so it
  // only counts with payment_status === "paid"; async settlements arrive later
  // as `async_payment_succeeded`.
  const session = event.data.object as Stripe.Checkout.Session;
  const isPaidOrder =
    (event.type === "checkout.session.completed" &&
      session.payment_status === "paid") ||
    event.type === "checkout.session.async_payment_succeeded";
  if (!isPaidOrder) {
    return NextResponse.json({ received: true });
  }

  // Idempotency check. The event payload is a snapshot from event-creation
  // time, so the flag must be read fresh from the PaymentIntent.
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
  // The server log is the audit trail regardless of notification config.
  console.log("[order] paid\n" + summary);

  const token = process.env.ORDER_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.ORDER_TELEGRAM_CHAT_ID;
  if (token && chatId) {
    const sent = await sendTelegram(token, chatId, summary);
    if (!sent) {
      // Notification is configured and is the point — make Stripe retry.
      return NextResponse.json({ error: "Retry" }, { status: 500 });
    }
  }

  if (paymentIntentId) {
    try {
      await stripe.paymentIntents.update(paymentIntentId, {
        metadata: { [NOTIFIED_KEY]: new Date().toISOString() },
      });
    } catch (err) {
      // Deliberate 200 despite the failure — see flow note above.
      console.error("[order] could not mark order notified:", err);
    }
  }

  return NextResponse.json({ received: true });
}
