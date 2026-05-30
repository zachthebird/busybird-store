import { Heading, Container, Section } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BusyBird.",
};

export default function ContactPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-2xl text-center">
        <p className="font-accent text-2xl text-primary mb-4">Say Hello</p>
        <Heading as="h1" className="mb-6">
          Get in Touch
        </Heading>
        <p className="text-dark/50 leading-relaxed mb-8 max-w-md mx-auto">
          Questions about a product? Want to discuss a custom piece? Just want
          to say hi? We&apos;d love to hear from you.
        </p>
        <div className="bg-white p-8 rounded-card border border-dark/5 inline-block">
          <p className="text-sm text-dark/40 mb-1">Email us at</p>
          <a
            href="mailto:hello@busybird.com"
            className="font-heading text-xl text-primary hover:text-primary-hover transition-colors"
          >
            hello@busybird.com
          </a>
        </div>
        <p className="mt-8 text-sm text-dark/30">
          We typically respond within 24 hours.
        </p>
      </Container>
    </Section>
  );
}
