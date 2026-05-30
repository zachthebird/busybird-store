import { Heading, Container, Section } from "@/components/ui";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about BusyBird jewelry.",
};

const faqs = [
  {
    q: "What are your earrings made of?",
    a: "Our jewelry is 3D-printed using high-quality resin, then hand-finished with painting, sanding, and assembly. Earring posts are hypoallergenic stainless steel.",
  },
  {
    q: "How long does shipping take?",
    a: "Each piece is made to order. Please allow 3-5 business days for production, plus shipping time. See our Shipping page for details.",
  },
  {
    q: "Do you accept returns?",
    a: "Yes! If you're not happy with your purchase, you can return it within 30 days for a full refund. Items must be unworn and in original condition.",
  },
  {
    q: "Can I request a custom design?",
    a: "Absolutely — we love custom work. Email us at hello@busybird.com with your idea and we'll chat about what's possible.",
  },
  {
    q: "Are your pieces waterproof?",
    a: "Our resin jewelry is water-resistant but not waterproof. We recommend removing your pieces before swimming, showering, or exercising.",
  },
  {
    q: "What if my piece breaks?",
    a: "We stand behind our work. If anything breaks due to a manufacturing defect within 60 days, we'll repair or replace it for free. Just reach out.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Section bg="neutral">
        <Container className="max-w-2xl">
          <p className="font-accent text-xl text-primary mb-1">Help Center</p>
          <Heading as="h1" className="mb-8">
            Frequently Asked Questions
          </Heading>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-card border border-dark/5">
                <h3 className="font-heading font-semibold text-dark mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-dark/50 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
