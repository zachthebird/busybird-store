import { Heading, Container, Section } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Our commitment to digital accessibility.",
};

export default function AccessibilityPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl">
        <p className="font-accent text-xl text-primary mb-1">Info</p>
        <Heading as="h1" className="mb-8">
          Accessibility
        </Heading>
        <div className="space-y-6 text-dark/60 leading-relaxed text-sm">
          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Our Commitment</h3>
            <p>
              BusyBird is committed to making our website accessible to everyone, including people with disabilities. We strive to meet WCAG 2.1 Level AA standards.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">What We&apos;ve Done</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Semantic HTML structure for screen reader navigation</li>
              <li>Keyboard-navigable interface with visible focus indicators</li>
              <li>Sufficient color contrast across all content</li>
              <li>Descriptive alt text on all product images</li>
              <li>ARIA labels on interactive elements</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Feedback</h3>
            <p>
              We&apos;re always working to improve. If you encounter any accessibility barriers, please let us know and we&apos;ll fix it as quickly as we can.
            </p>
          </div>
        </div>
        <p className="mt-8 text-sm text-dark/30">
          Report an issue:{" "}
          <Link href="/contact" className="text-primary hover:text-primary-hover underline underline-offset-4">Contact us</Link>.
        </p>
      </Container>
    </Section>
  );
}
