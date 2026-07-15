export interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  hoverImage?: string;
  /** Descriptive image alt text; components fall back to the product name. */
  altText?: string;
  /** Additional product photos shown below the main image on the detail page. */
  gallery?: { src: string; alt: string }[];
  category: string;
  inStock: boolean;
  /** Whether this product can be purchased. Coming Soon products are not available. */
  available: boolean;
  /**
   * Deprecated from the storefront: excluded from grids, featured, related,
   * and the sitemap; the product page 404s. Entry is kept (not deleted) so
   * relaunching is a one-word flip and persisted carts still resolve slugs.
   */
  hidden?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
