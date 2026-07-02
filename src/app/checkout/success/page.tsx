import type { Metadata } from "next";
import Stripe from "stripe";
import { Container, Section, Heading } from "@/components/ui";
import { ClearCartOnArrival } from "./clear-cart";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false },
};

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

// Ask Stripe whether this session was actually paid. A hand-crafted
// ?session_id= can't fake a confirmation, and a genuine-but-unpaid/expired
// session won't either. Any error falls back to "not paid" (never throws).
async function getPaymentStatus(
  sessionId: string | undefined
): Promise<{ paid: boolean; ref: string | null }> {
  if (!sessionId) return { paid: false, ref: null };
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("placeholder")) return { paid: false, ref: null };
  try {
    const stripe = new Stripe(key);
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paid = session.payment_status === "paid";
    return { paid, ref: paid ? sessionId.slice(-8).toUpperCase() : null };
  } catch {
    return { paid: false, ref: null };
  }
}

export default async function CheckoutSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;
  const { paid, ref } = await getPaymentStatus(session_id);

  return (
    <Section bg="white">
      <Container>
        <div className="max-w-xl mx-auto text-center py-16">
          <p className="font-accent text-3xl text-primary mb-4">Thank you!</p>
          <Heading as="h1" className="mb-4">
            {paid ? "Your order is confirmed" : "Finalizing your order"}
          </Heading>
          {paid ? (
            <p className="text-dark/60 leading-relaxed mb-2">
              We&apos;re warming up the 3D printers. Each piece is made to order,
              so please allow 3-5 business days for production before your order
              ships. A receipt and tracking number will land in your inbox.
            </p>
          ) : (
            <p className="text-dark/60 leading-relaxed mb-2">
              We&apos;re confirming your payment with our processor. If you just
              completed checkout, your emailed receipt is the confirmation —
              there&apos;s no need to pay again. If you landed here without
              checking out, your cart is still saved for you.
            </p>
          )}
          {ref && (
            <p className="text-sm text-dark/40 mb-8">
              Order reference: <span className="font-mono">{ref}</span>
            </p>
          )}
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-button font-medium bg-primary text-white hover:bg-primary-hover shadow-sm px-8 py-3 text-lg transition-all duration-200"
          >
            Continue Shopping
          </Link>
        </div>
        {/* Only clear the cart once Stripe confirms the payment succeeded. */}
        {paid && <ClearCartOnArrival />}
      </Container>
    </Section>
  );
}
