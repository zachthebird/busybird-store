import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";
import { Heading, Container, Section } from "@/components/ui";
import { PostJsonLd } from "../post-jsonld";

const post = getPostBySlug("how-to-care-for-resin-jewelry")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  // Page openGraph replaces the layout's wholesale (no deep merge), so
  // siteName and the share image must be restated here.
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    siteName: "BusyBird",
    images: ["/og.png"],
  },
};

export default function ResinCarePage() {
  return (
    <>
      <PostJsonLd post={post} />

      <Section bg="neutral">
        <Container className="max-w-3xl">
          <p className="font-accent text-xl text-primary mb-2">
            Care Guide &middot; July 2026
          </p>
          <Heading as="h1" className="mb-6">
            How to Care for Resin Jewelry (From the Makers Who Print It)
          </Heading>
          <p className="text-lg text-dark/50 leading-relaxed">
            We 3D-print and hand-finish resin jewelry in our East Austin
            studio, which means we also field every question about how to keep
            it looking new. Here are the honest answers — no fearmongering, no
            fluff.
          </p>
        </Container>
      </Section>

      <Section bg="white">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-dark/60 leading-relaxed">
            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                What is 3D-printed resin jewelry, exactly?
              </Heading>
              <p>
                Each of our pieces starts as a digital model, gets printed in
                high-quality resin, and is then sanded, painted, and assembled
                by hand. The result is lightweight and surprisingly tough for
                everyday wear — but like any resin jewelry, it&apos;s not
                indestructible. Treat it like you&apos;d treat a favorite pair
                of sunglasses: worn constantly, thrown around never.
              </p>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                Is resin jewelry waterproof?
              </Heading>
              <p>
                No — and anyone who tells you otherwise is selling something.
                Resin jewelry is <strong>water-resistant, not waterproof</strong>.
                A surprise drizzle or washing your hands with a ring on
                won&apos;t hurt it, but take your pieces off before swimming,
                showering, or exercising. Prolonged soaking and sweat are hard
                on the hand-painted finishes, and chlorine is hard on
                everything.
              </p>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                How do I clean resin jewelry?
              </Heading>
              <p>
                Gently. A soft, slightly damp cloth handles almost everything;
                for grime, add a drop of mild dish soap, then wipe dry.
                <strong> Never use alcohol, acetone, or harsh cleaners</strong> —
                solvents can cloud resin and lift painted details. Skip
                ultrasonic jewelry cleaners too; they&apos;re made for metal
                and stones, not resin.
              </p>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                Everyday wear: the two rules that matter
              </Heading>
              <p>
                <strong>Last on, first off.</strong> Put jewelry on after
                perfume, hairspray, and sunscreen have dried, and take it off
                before workouts and water. That one habit prevents most wear
                you&apos;d ever notice.
              </p>
              <p className="mt-4">
                <strong>Keep it out of the heat.</strong> Heat is resin&apos;s
                real enemy. A jewelry dish on the dresser is perfect; the
                dashboard of a Texas car in July is not. Don&apos;t leave
                pieces baking in direct sun or a hot car.
              </p>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                How should I store it?
              </Heading>
              <p>
                Somewhere dry, out of direct sunlight, ideally in a pouch or
                lined box so pieces don&apos;t scratch each other or tangle.
                Our earrings hang happily on an earring stand; necklaces
                prefer to be clasped before they&apos;re put away — future you
                will be grateful.
              </p>
              <p className="mt-4">
                The metal parts — our findings are stainless steel — mostly
                just want to stay dry. If they get wet, a quick wipe is all
                it takes.
              </p>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                What if a piece breaks?
              </Heading>
              <p>
                We stand behind our work. If anything breaks because of a
                manufacturing defect within 60 days, we&apos;ll repair or
                replace it free — just{" "}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary-hover underline underline-offset-4"
                >
                  reach out
                </Link>
                . And if a piece isn&apos;t right for you, unworn items can be
                returned within 30 days for a full refund. The details live on
                our{" "}
                <Link
                  href="/faq"
                  className="text-primary hover:text-primary-hover underline underline-offset-4"
                >
                  FAQ
                </Link>
                .
              </p>
            </div>

            <div className="bg-neutral p-6 sm:p-8 rounded-card border border-dark/5">
              <p className="font-heading font-semibold text-dark mb-2">
                The short version
              </p>
              <ul className="space-y-2 text-sm">
                <li>&bull; Water-resistant, not waterproof — off before swimming and showers</li>
                <li>&bull; Clean with a damp cloth and mild soap; never solvents</li>
                <li>&bull; Jewelry goes on last, comes off first</li>
                <li>&bull; Store dry, cool, and out of the Texas sun</li>
                <li>&bull; Manufacturing defect? 60 days, we fix it free</li>
              </ul>
            </div>

            <p>
              Curious what all this care protects?{" "}
              <Link
                href="/shop"
                className="text-primary hover:text-primary-hover underline underline-offset-4"
              >
                See what&apos;s currently in the studio
              </Link>{" "}
              — every piece is 3D-printed and hand-finished in East Austin.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
