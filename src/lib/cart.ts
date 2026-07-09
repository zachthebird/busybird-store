"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product, CartItem } from "./types";
import { getProductBySlug } from "./products";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  totalItems: () => number;
  subtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (product, quantity = 1) => {
        const { items } = get();
        const existing = items.find((i) => i.product.slug === product.slug);

        if (existing) {
          set({
            items: items.map((i) =>
              i.product.slug === product.slug
                ? { ...i, quantity: i.quantity + quantity }
                : i
            ),
            isOpen: true,
          });
        } else {
          set({
            items: [...items, { product, quantity }],
            isOpen: true,
          });
        }
      },

      removeItem: (slug) => {
        set({ items: get().items.filter((i) => i.product.slug !== slug) });
      },

      updateQuantity: (slug, quantity) => {
        if (quantity <= 0) {
          get().removeItem(slug);
          return;
        }
        set({
          items: get().items.map((i) =>
            i.product.slug === slug ? { ...i, quantity } : i
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      toggleCart: () => set({ isOpen: !get().isOpen }),

      openCart: () => set({ isOpen: true }),

      closeCart: () => set({ isOpen: false }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),

      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    {
      name: "busybird-cart",
      partialize: (state) => ({ items: state.items }),
      // Persisted carts snapshot the full Product, so image paths, prices,
      // and availability go stale between deploys (e.g. a renamed image file
      // would 404 in the drawer). Re-resolve each item against the live
      // catalog on rehydrate; drop items whose slug no longer exists.
      merge: (persisted, current) => {
        const stored = (persisted as { items?: CartItem[] } | undefined)?.items;
        const items = (Array.isArray(stored) ? stored : [])
          .map((i) => {
            const live = i?.product?.slug
              ? getProductBySlug(i.product.slug)
              : undefined;
            return live && Number.isInteger(i.quantity) && i.quantity > 0
              ? { product: live, quantity: i.quantity }
              : null;
          })
          .filter((i): i is CartItem => i !== null);
        return { ...current, items };
      },
    }
  )
);
