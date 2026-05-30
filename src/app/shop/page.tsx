import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { Heading, Container, Badge } from "@/components/ui";

export default function ShopPage() {
  return (
    <>
      <section className="section-padding bg-neutral">
        <Container>
          <p className="font-accent text-xl text-primary mb-1">
            The Collection
          </p>
          <Heading as="h1">Shop All</Heading>
          <p className="mt-3 text-dark/50 max-w-lg">
            Every piece is designed and 3D-printed in our Austin studio.
            Small-batch, playful, and made with love.
          </p>

          {/* Category filter buttons */}
          <div className="flex flex-wrap gap-2 mt-6">
            <Badge variant="accent">All</Badge>
            {categories.map((cat) => (
              <Badge key={cat.slug}>{cat.name}</Badge>
            ))}
          </div>
        </Container>
      </section>

      {/* Product grid */}
      <section className="section-padding bg-white">
        <Container>
          {products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-dark/30 text-lg">No products yet — check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
