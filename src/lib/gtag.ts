import type { Product } from "./types";

// GA4 event helpers. gtag is only present when Analytics rendered (the
// NEXT_PUBLIC_GA_MEASUREMENT_ID env var is set) and the script has loaded;
// every call no-ops safely otherwise, so callers never need to guard.
type GtagFn = (...args: unknown[]) => void;

function gtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { gtag?: GtagFn }).gtag;
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  gtag()?.("event", name, params);
}

export function productToGaItem(product: Product, quantity = 1) {
  return {
    item_id: product.slug,
    item_name: product.name,
    item_category: product.category,
    price: product.price,
    quantity,
  };
}

export function trackViewItem(product: Product): void {
  trackEvent("view_item", {
    currency: "USD",
    value: product.price,
    items: [productToGaItem(product)],
  });
}

export function trackAddToCart(product: Product): void {
  trackEvent("add_to_cart", {
    currency: "USD",
    value: product.price,
    items: [productToGaItem(product)],
  });
}

export function trackBeginCheckout(
  items: { product: Product; quantity: number }[],
  value: number
): void {
  trackEvent("begin_checkout", {
    currency: "USD",
    value,
    items: items.map((i) => productToGaItem(i.product, i.quantity)),
  });
}
