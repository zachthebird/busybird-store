import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Heading, Container } from "@/components/ui";
import { Button } from "@/components/button";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-neutral overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #C75B39 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <Container className="relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="font-accent text-2xl sm:text-3xl text-primary mb-4">
              Handcrafted in Austin, Texas
            </p>
            <Heading as="h1" className="text-dark mb-6">
              3D-printed jewelry
              <br />
              with Texas soul
            </Heading>
            <p className="text-lg text-dark/60 leading-relaxed mb-8 max-w-lg">
              Playful, colorful resin jewelry inspired by the people, places,
              and quirks of the Lone Star State. From bluebonnets to grackles,
              each piece is designed and printed in our Austin studio.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/shop">
                <Button size="lg">Shop the Collection</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg">
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured products */}
      <section className="section-padding bg-white">
        <Container>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-accent text-xl text-primary mb-1">
                Fresh from the studio
              </p>
              <Heading>Featured Pieces</Heading>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-block text-sm font-medium text-primary hover:text-primary-hover transition-colors"
            >
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/shop">
              <Button variant="outline">View All Products</Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Values / vibe */}
      <section className="section-padding bg-accent-1/10">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="font-accent text-xl text-primary mb-1">
              Why BusyBird
            </p>
            <Heading>Small-batch, big personality</Heading>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Made in Austin",
                desc: "Every piece is designed and 3D-printed in our East Austin studio. No factories, no mass production — just us and our printers.",
                icon: "🤠",
              },
              {
                title: "Playful Design",
                desc: "We make jewelry that makes you smile. Colorful, slightly toy-like, and elevated — like wearing a tiny piece of art.",
                icon: "🎨",
              },
              {
                title: "Small Batches",
                desc: "We print in limited runs to minimize waste and keep things special. When a design is gone, it might not come back.",
                icon: "✨",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="text-center p-6 rounded-card bg-white border border-dark/5"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="font-heading text-lg font-semibold mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-dark/50 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-neutral text-center">
        <Container className="max-w-xl">
          <p className="font-accent text-2xl text-accent-1 mb-2">
            Ready to add some Texas flair?
          </p>
          <Heading className="text-white mb-4">
            Handcrafted just for you
          </Heading>
          <p className="text-neutral/50 mb-8">
            Free shipping on orders over $75. Each piece is made to order in
            3-5 business days.
          </p>
          <Link href="/shop">
            <Button size="lg">Browse the Collection</Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
