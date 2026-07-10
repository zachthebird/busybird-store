import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/posts";
import { Heading, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Journal — Resin Jewelry Guides & Gift Ideas",
  description:
    "Care guides, gift ideas, and studio notes from BusyBird — 3D-printed resin jewelry made in East Austin, Texas.",
  alternates: { canonical: "/blog" },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  return (
    <Section bg="neutral">
      <Container className="max-w-3xl">
        <p className="font-accent text-2xl text-primary mb-2">The Journal</p>
        <Heading as="h1" className="mb-4">
          Guides, gift ideas &amp; studio notes
        </Heading>
        <p className="text-dark/50 leading-relaxed mb-10 max-w-xl">
          Honest answers about 3D-printed resin jewelry, gift guides we
          actually stand behind, and what&apos;s happening in our East Austin
          studio.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white p-6 sm:p-8 rounded-card border border-dark/5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <p className="text-xs text-dark/30 mb-2">
                {formatDate(post.datePublished)} &middot; {post.readMinutes} min
                read
              </p>
              <h2 className="font-heading text-xl sm:text-2xl font-semibold text-dark mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-dark/50 leading-relaxed mb-4">
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
              >
                Read the post &rarr;
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
