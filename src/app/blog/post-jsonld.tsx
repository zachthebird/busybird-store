import type { Post } from "@/lib/posts";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://busybirdaustin.com";

// BlogPosting + BreadcrumbList for a Journal post. The publisher is inlined
// (not an @id reference) so the markup stays valid regardless of what other
// schema exists on the page or elsewhere on the site.
export function PostJsonLd({ post, image }: { post: Post; image?: string }) {
  const url = `${SITE_URL}/blog/${post.slug}`;
  const org = {
    "@type": "Organization",
    name: "BusyBird",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/og.png` },
  };

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    url,
    mainEntityOfPage: url,
    image: `${SITE_URL}${image ?? "/og.png"}`,
    author: org,
    publisher: org,
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
    </>
  );
}
