// Registry for the Journal (/blog). Each post's content lives in its own
// static page at src/app/blog/<slug>/page.tsx; this list drives the blog
// index and the sitemap. Adding a post = create the page dir + add an entry
// here (newest first).
export interface Post {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-07-09" — also used as sitemap lastModified. */
  datePublished: string;
  readMinutes: number;
}

export const posts: Post[] = [
  {
    slug: "gifts-for-mahjong-players",
    title: "Gifts for Mahjong Players: A Game-Night Gift Guide",
    description:
      "Gift ideas for the mahjong lover in your life, from the Austin makers of 3D-printed mahjong tile earrings — plus what to order when, so it arrives in time.",
    datePublished: "2026-07-09",
    readMinutes: 5,
  },
  {
    slug: "how-to-care-for-resin-jewelry",
    title: "How to Care for Resin Jewelry (From the Makers Who Print It)",
    description:
      "Honest care advice for 3D-printed resin jewelry: water, cleaning, storage, and what to do if a piece breaks — from the East Austin studio that makes it.",
    datePublished: "2026-07-09",
    readMinutes: 4,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
