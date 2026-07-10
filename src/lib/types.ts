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
  category: string;
  inStock: boolean;
  /** Whether this product can be purchased. Coming Soon products are not available. */
  available: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
