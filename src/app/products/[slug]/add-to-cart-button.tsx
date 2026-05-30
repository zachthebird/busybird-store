"use client";

import type { Product } from "@/lib/types";
import { useCartStore } from "@/lib/cart";
import { Button } from "@/components/button";
import { toast } from "@/components/toast";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);

  const handleAdd = () => {
    addItem(product);
    toast(`Added "${product.name}" to cart`);
  };

  return (
    <Button size="lg" className="w-full sm:w-auto" onClick={handleAdd}>
      Add to Cart — ${product.price}
    </Button>
  );
}
