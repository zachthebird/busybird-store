import { Heading, Container, Section } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl">
        <p className="font-accent text-xl text-primary mb-1">Legal</p>
        <Heading as="h1" className="mb-8">
          Terms of Service
        </Heading>
        <div className="space-y-6 text-dark/60 leading-relaxed text-sm">
          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Overview</h3>
            <p>
              By placing an order with BusyBird, you agree to these terms. We reserve the right to update these terms at any time.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Products</h3>
            <p>
              All products are made to order and may have slight variations from product photos due to the handcrafted nature of our process. Colors may vary slightly from screen to print.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Pricing &amp; Payment</h3>
            <p>
              All prices are in USD. We reserve the right to change prices without notice. Payment is due at time of order. We accept major credit cards and other payment methods as displayed at checkout.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Returns &amp; Refunds</h3>
            <p>
              We accept returns within 30 days of delivery. Items must be unworn and in original condition. Refunds are processed within 5-10 business days after we receive the return. See our FAQ for more details.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-dark/30">
          Questions? <Link href="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4">Contact us</Link>.
        </p>
      </Container>
    </Section>
  );
}
