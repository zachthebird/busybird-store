export interface Review {
  id: string;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  description: string;
  details: string[];
  image: string;
  hoverImage?: string;
  reviews: Review[];
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
