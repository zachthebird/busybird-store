import { Heading, Container, Section } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

// Terms on this page must stay in lockstep with three places: the FAQ, the
// Merchant Center return policy (account 5823867940 points its policy URL
// here), and offers.hasMerchantReturnPolicy if that schema is ever added.
// Update all together.
export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description:
    "BusyBird's return policy: 30-day returns on unworn items, free repair or replacement for manufacturing defects within 60 days, and easy exchanges by email.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl">
        <p className="font-accent text-xl text-primary mb-1">Info</p>
        <Heading as="h1" className="mb-8">
          Returns &amp; Exchanges
        </Heading>
        <div className="space-y-6 text-dark/60 leading-relaxed text-sm">
          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">
              30-Day Returns
            </h3>
            <p>
              If a piece isn&apos;t right for you, return it within 30 days of
              delivery for a full refund. Items must be unworn and in their
              original condition. There&apos;s no restocking fee.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">
              How to Start a Return
            </h3>
            <p>
              Email{" "}
              <a
                href="mailto:hello@busybirdaustin.com"
                className="text-primary hover:text-primary-hover underline underline-offset-4"
              >
                hello@busybirdaustin.com
              </a>{" "}
              with your order number and we&apos;ll confirm the return address.
              Returns are by mail; you arrange and cover the return shipping.
              We recommend a tracked service — the piece is your responsibility
              until it reaches us.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">
              Refunds
            </h3>
            <p>
              Once your return arrives, we&apos;ll inspect it and issue your
              refund to the original payment method within 5 business days.
              Original shipping charges aren&apos;t refunded unless the return
              is due to our error.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">
              Exchanges
            </h3>
            <p>
              Want a different piece instead? Email us and we&apos;ll arrange
              an exchange. Since everything is made to order, your replacement
              goes into the production queue as soon as we hear from you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">
              Damaged or Defective Pieces
            </h3>
            <p>
              We stand behind our work. If anything breaks due to a
              manufacturing defect within 60 days, we&apos;ll repair or replace
              it for free — just{" "}
              <Link
                href="/contact"
                className="text-primary hover:text-primary-hover underline underline-offset-4"
              >
                reach out
              </Link>{" "}
              with a photo and your order number. If your order arrives
              damaged, tell us within 7 days and we&apos;ll make it right at no
              cost to you.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-dark/30">
          Questions?{" "}
          <Link
            href="/contact"
            className="text-primary hover:text-primary-hover underline underline-offset-4"
          >
            Contact us
          </Link>{" "}
          — we typically respond within 24 hours.
        </p>
      </Container>
    </Section>
  );
}
