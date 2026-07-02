import { Heading, Container, Section } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping",
  description: "Shipping information for BusyBird jewelry orders.",
};

export default function ShippingPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl">
        <p className="font-accent text-xl text-primary mb-1">Info</p>
        <Heading as="h1" className="mb-8">
          Shipping
        </Heading>
        <div className="space-y-6 text-dark/60 leading-relaxed text-sm">
          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Production Time</h3>
            <p>Each piece is made to order. Please allow 3-5 business days for production before your order ships.</p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Domestic Shipping (US)</h3>
            <p>Standard shipping (5-7 business days): $4.95 or FREE on orders over $75. Express shipping (2-3 business days): $14.95.</p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">International Shipping</h3>
            <p>We currently ship within the United States only. International shipping is coming soon — <Link href="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4">reach out</Link> if you&apos;d like to be notified.</p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Tracking</h3>
            <p>You will receive a tracking number via email once your order ships.</p>
          </div>
        </div>
        <p className="mt-8 text-sm text-dark/30">
          Questions? <Link href="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4">Contact us</Link>.
        </p>
      </Container>
    </Section>
  );
}
