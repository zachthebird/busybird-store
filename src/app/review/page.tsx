import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section, Heading } from "@/components/ui";

// Destination for the QR code on the care/review card packed with every
// order. Kept as an on-site page (rather than printing external URLs on
// cards) so the targets can change without reprinting — e.g. swapping the
// Google link to a direct write-a-review deep link once we have the
// Business Profile place ID.
export const metadata: Metadata = {
  title: "Leave a Review",
  description:
    "Loving your BusyBird piece? A quick review helps our small Austin studio more than you know.",
  robots: { index: false },
};

const GOOGLE_REVIEW_URL =
  "https://www.google.com/maps/search/?api=1&query=Busy+Bird+Austin";
const ETSY_URL = "https://busybird.etsy.com";

export default function ReviewPage() {
  return (
    <Section bg="white">
      <Container>
        <div className="max-w-xl mx-auto text-center py-16">
          <p className="font-accent text-3xl text-primary mb-4">
            Thanks for supporting our little studio!
          </p>
          <Heading as="h1" className="mb-4">
            Loving your BusyBird piece?
          </Heading>
          <p className="text-dark/60 leading-relaxed mb-8">
            Reviews are how a two-printer Austin studio gets found. If your
            new piece made you smile, a minute of your time would mean the
            world — and if something&apos;s not right,{" "}
            <Link
              href="/contact"
              className="text-primary hover:text-primary-hover underline underline-offset-4"
            >
              tell us first
            </Link>{" "}
            so we can fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-button font-medium bg-primary text-white hover:bg-primary-hover shadow-sm px-8 py-3 text-lg transition-all duration-200"
            >
              Review us on Google
            </a>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-button font-medium border border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg transition-all duration-200"
            >
              Find us on Etsy
            </a>
          </div>
          <p className="text-sm text-dark/40">
            New here? Learn how to keep resin jewelry looking its best in our{" "}
            <Link
              href="/blog/how-to-care-for-resin-jewelry"
              className="text-primary hover:text-primary-hover underline underline-offset-4"
            >
              care guide
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
