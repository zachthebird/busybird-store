import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Stripe posts raw event JSON here. We verify the signature so only genuine
// Stripe events are ever trusted as proof of payment.
//
// This route is DORMANT until STRIPE_WEBHOOK_SECRET is set: without it we just
// acknowledge (200) so Stripe doesn't retry-storm, and no order is recorded.
// To activate: register https://busybirdaustin.com/api/webhook in the Stripe
// dashboard for the `checkout.session.completed` event, then put the signing
// secret (whsec_...) in the STRIPE_WEBHOOK_SECRET env var.
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

  if (
    event.type === "checkout.session.completed" &&
    (event.data.object as Stripe.Checkout.Session).payment_status === "paid"
  ) {
    const session = event.data.object as Stripe.Checkout.Session;
    // Verified source of truth for a paid order. `completed` can fire before
    // funds settle for async payment methods, so we also require payment_status
    // === "paid". There's no order store yet, so this records to the server log;
    // swap for real persistence + fulfillment (email, print queue) when an order
    // database exists — and add idempotency on session.id (Stripe retries).
    console.log("[order] paid", {
      id: session.id,
      email: session.customer_details?.email ?? null,
      amount_total: session.amount_total,
      currency: session.currency,
    });
  }

  return NextResponse.json({ received: true });
}
