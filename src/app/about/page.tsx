import { Heading, Container, Section } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section bg="neutral">
        <Container className="max-w-3xl text-center">
          <p className="font-accent text-2xl text-primary mb-4">
            Hello from Austin
          </p>
          <Heading as="h1" className="mb-6">
            We&apos;re BusyBird — a tiny jewelry studio with a 3D printer and a
            lot of Texas pride
          </Heading>
          <p className="text-lg text-dark/50 leading-relaxed">
            We make playful, colorful resin jewelry that celebrates the people,
            places, and idiosyncrasies of Texas. From bluebonnet blooms to
            grackle wings, mahjong tiles to lone stars — every piece is designed
            and printed right here in East Austin.
          </p>
        </Container>
      </Section>

      {/* Story */}
      <Section bg="white">
        <Container className="max-w-3xl">
          <div className="space-y-8 text-dark/60 leading-relaxed">
            <div>
              <Heading as="h3" className="mb-3 text-dark">
                The Origin Story
              </Heading>
              <p>
                BusyBird started in 2025 with a 3D printer, a love of jewelry,
                and a desire to make something that felt different. Not luxury.
                Not fast fashion. Just{" "}
                <em>cute, colorful, and crafted with care</em> — the kind of
                piece that makes someone ask &ldquo;where did you get that?&rdquo;
              </p>
            </div>

            <div>
              <Heading as="h3" className="mb-3 text-dark">
                The Process
              </Heading>
              <p>
                Every piece starts as a digital model, designed in-house using
                3D sculpting software. We print in small batches using
                high-quality resin, then hand-finish each piece — sanding,
                painting, and assembling by hand. The result is something that
                feels both precise (because it is) and human (because we touched
                it).
              </p>
              <p className="mt-4">
                Because we print to order and in small batches, our designs are
                always evolving. Some pieces are one-and-done. Some stick around
                because people love them. If you see something you like, grab
                it — it might not come back.
              </p>
            </div>

            <div>
              <Heading as="h3" className="mb-3 text-dark">
                The Name
              </Heading>
              <p>
                &ldquo;BusyBird&rdquo; comes from the energy of Austin itself —
                always moving, always making, always a little bit chaotic in the
                best way. We&apos;re a small operation by design. No investors,
                no growth-at-all-costs. Just someone making things they love and
                hoping you love them too.
              </p>
            </div>

            <div>
              <Heading as="h3" className="mb-3 text-dark">
                Sustainability
              </Heading>
              <p>
                We take sustainability seriously for a small studio. Our resin
                is plant-based where possible. We print to order to minimize
                inventory waste. Packaging is recycled and recyclable. Failed
                prints get ground down and reused as texture material. We&apos;re
                not perfect, but we&apos;re trying.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section bg="accent-1/10">
        <Container className="max-w-xl text-center">
          <p className="font-accent text-2xl text-primary mb-2">
            Want to say hi?
          </p>
          <Heading className="mb-4">We&apos;d love to hear from you</Heading>
          <p className="text-dark/50 mb-6">
            Questions, custom requests, or just want to chat about 3D-printed
            jewelry? Drop us a line.
          </p>
          <a
            href="mailto:hello@busybirdaustin.com"
            className="inline-block text-primary font-medium hover:text-primary-hover transition-colors underline underline-offset-4"
          >
            hello@busybirdaustin.com
          </a>
        </Container>
      </Section>
    </>
  );
}
