import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/products";
import { Heading, Container, Section, Divider } from "@/components/ui";
import { Button } from "@/components/button";
import { AddToCartButton } from "./add-to-cart-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://busybird-store.vercel.app";

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  // Find related products (same category, excluding current)
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${SITE_URL}${product.image}`,
    description: product.description,
    brand: { "@type": "Brand", name: "BusyBird" },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: product.available
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      url: `${SITE_URL}/products/${product.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-neutral border-b border-dark/5">
        <Container>
          <nav className="py-3 text-sm text-dark/40" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark/70">{product.name}</span>
          </nav>
        </Container>
      </div>

      {/* Product detail */}
      <Section bg="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image gallery — single image for now */}
            <div className="relative aspect-square rounded-card overflow-hidden bg-neutral/30 border border-dark/5">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {product.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-block font-accent text-xl px-5 py-2 rounded-full bg-accent-1 text-dark rotate-3 shadow-lg border-2 border-dark/10">
                    {product.badge}
                  </span>
                </div>
              )}
            </div>

            {/* Product info */}
            <div>
              <p className="font-accent text-xl text-primary mb-1">
                {product.category}
              </p>
              <Heading as="h1" className="mb-2">
                {product.name}
              </Heading>
              <p className="font-heading text-3xl font-bold text-primary mb-6">
                ${product.price}
              </p>

              <p className="text-dark/60 leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Details */}
              <div className="mb-8">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-dark/40 mb-3">
                  Details
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-dark/60"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">
                        &bull;
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Add to cart */}
              <AddToCartButton product={product} />

              <Divider className="my-6" />

              {/* Shipping note */}
              <p className="text-xs text-dark/30">
                Free shipping on orders over $75. Made to order — ships in 3-5
                business days.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Reviews */}
      {product.reviews.length > 0 && (
        <Section bg="neutral">
          <Container>
            <Heading className="mb-8">Customer Reviews</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-white p-6 rounded-card border border-dark/5"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill={i < review.rating ? "#F4C542" : "none"}
                        stroke={i < review.rating ? "#F4C542" : "#D1D5DB"}
                        strokeWidth="2"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-dark/60 leading-relaxed mb-3">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-dark">
                      {review.author}
                    </span>
                    <span className="text-xs text-dark/30">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related products */}
      {related.length > 0 && (
        <Section bg="white">
          <Container>
            <Heading className="mb-8">You Might Also Like</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="group block rounded-card overflow-hidden bg-white border border-dark/5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral/30">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {p.badge && (
                      <div className="absolute top-2 right-2 z-10">
                        <span className="inline-block font-accent text-sm px-3 py-1 rounded-full bg-accent-1 text-dark rotate-3 shadow border border-dark/10">
                          {p.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-heading text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-1 font-heading text-base font-bold text-primary">
                      ${p.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
