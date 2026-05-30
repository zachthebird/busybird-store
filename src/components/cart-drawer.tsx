"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/lib/cart";
import { Button } from "./button";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } =
    useCartStore();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-dark/30 backdrop-blur-sm transition-opacity"
          onClick={closeCart}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark/5">
            <h2 className="font-heading text-lg font-semibold">
              Cart ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button
              onClick={closeCart}
              className="p-2 -mr-2 text-dark/50 hover:text-dark transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Items or empty state */}
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-dark/20 mb-4"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p className="text-dark/40 font-medium">Your cart is empty</p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <>
              {/* Item list */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.slug}
                    className="flex gap-4 py-4 border-b border-dark/5 last:border-b-0"
                  >
                    <div className="relative w-20 h-20 rounded-md overflow-hidden bg-neutral/30 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="text-sm font-medium text-dark hover:text-primary transition-colors"
                        onClick={closeCart}
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-sm text-primary font-medium mt-0.5">
                        ${item.product.price}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        {/* Quantity */}
                        <div className="flex items-center border border-dark/10 rounded-full">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.slug,
                                item.quantity - 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-sm text-dark/50 hover:text-dark transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.slug,
                                item.quantity + 1
                              )
                            }
                            className="w-7 h-7 flex items-center justify-center text-sm text-dark/50 hover:text-dark transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.product.slug)}
                          className="text-xs text-dark/30 hover:text-primary transition-colors cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-dark/5 bg-neutral/30">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-dark/60">Subtotal</span>
                  <span className="font-heading text-lg font-bold text-dark">
                    ${subtotal().toFixed(2)}
                  </span>
                </div>
                <p className="text-xs text-dark/30 mb-4">
                  Shipping &amp; taxes calculated at checkout
                </p>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
