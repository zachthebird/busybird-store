import { Heading, Container, Section } from "@/components/ui";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl">
        <p className="font-accent text-xl text-primary mb-1">Legal</p>
        <Heading as="h1" className="mb-8">
          Privacy Policy
        </Heading>
        <div className="space-y-6 text-dark/60 leading-relaxed text-sm">
          <div className="bg-white p-6 rounded-card border border-dark/5">
            <p>
              BusyBird (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This policy describes how we collect, use, and share your personal information.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Information We Collect</h3>
            <p>
              When you place an order, we collect your name, email address, shipping address, and payment information. Payment processing is handled by our payment processor — we do not store your full credit card details.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">How We Use Your Information</h3>
            <p>
              We use your information to fulfill orders, communicate about your order status, and (with your consent) send you occasional emails about new products or promotions. We never sell or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Cookies</h3>
            <p>
              Our site uses essential cookies for cart functionality. We do not use tracking cookies or third-party analytics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-card border border-dark/5">
            <h3 className="font-heading font-semibold text-dark mb-2">Your Rights</h3>
            <p>
              You can request access to, correction of, or deletion of your personal data at any time by contacting us. We will respond within 30 days.
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
