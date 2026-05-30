"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { toast } from "./toast";
import { useCartStore } from "@/lib/cart";
import { Button } from "./button";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast(`Added "${product.name}" to cart`);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-card overflow-hidden bg-white border border-dark/5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-neutral/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority={priority}
        />
        {/* Coming Soon badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-block font-accent text-lg px-4 py-1.5 rounded-full bg-accent-1 text-dark rotate-3 shadow-lg border-2 border-dark/10">
              {product.badge}
            </span>
          </div>
        )}
        {/* Quick add overlay */}
        <div className="absolute inset-0 flex items-end justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button size="sm" onClick={handleAdd}>
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading text-base sm:text-lg font-semibold text-dark group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-dark/50 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-3 font-heading text-lg font-bold text-primary">
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
