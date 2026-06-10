import type { Metadata } from "next";
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

export default async function CheckoutSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const { session_id } = await searchParams;
  const orderRef = session_id ? session_id.slice(-8).toUpperCase() : null;

  return (
    <Section bg="white">
      <Container>
        <div className="max-w-xl mx-auto text-center py-16">
          <p className="font-accent text-3xl text-primary mb-4">Thank you!</p>
          <Heading as="h1" className="mb-4">
            Your order is confirmed
          </Heading>
          <p className="text-dark/60 leading-relaxed mb-2">
            We&apos;re warming up the 3D printers. Each piece is made to order,
            so please allow 3-5 business days for production before your order
            ships. A receipt and tracking number will land in your inbox.
          </p>
          {orderRef && (
            <p className="text-sm text-dark/40 mb-8">
              Order reference: <span className="font-mono">{orderRef}</span>
            </p>
          )}
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-button font-medium bg-primary text-white hover:bg-primary-hover shadow-sm px-8 py-3 text-lg transition-all duration-200"
          >
            Continue Shopping
          </Link>
        </div>
        <ClearCartOnArrival />
      </Container>
    </Section>
  );
}
