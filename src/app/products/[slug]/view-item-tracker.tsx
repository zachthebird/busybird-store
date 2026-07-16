"use client";

import { useEffect } from "react";
import type { Product } from "@/lib/types";
import { trackViewItem } from "@/lib/gtag";

// The product page is a server component, so the GA4 view_item event fires
// from this tiny client island instead.
export function ViewItemTracker({ product }: { product: Product }) {
  useEffect(() => {
    trackViewItem(product);
    // Fire once per PDP visit; product identity is captured by the slug.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.slug]);

  return null;
}
