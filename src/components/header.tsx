"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart";
import { Button } from "./button";

export function Header() {
  const totalItems = useCartStore((s) => s.totalItems);
  const openCart = useCartStore((s) => s.openCart);

  return (
    <header className="sticky top-0 z-40 bg-neutral/95 backdrop-blur-sm border-b border-dark/5">
      <nav className="container-page flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="font-accent text-3xl text-primary hover:text-primary-hover transition-colors"
        >
          BusyBird
        </Link>

        {/* Nav links */}
        <div className="hidden sm:flex items-center gap-8">
          <Link
            href="/shop"
            className="text-sm font-medium text-dark/70 hover:text-primary transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-dark/70 hover:text-primary transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-dark/70 hover:text-primary transition-colors"
          >
            About
          </Link>
        </div>

        {/* Cart button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={openCart}
          aria-label={`Shopping cart, ${totalItems()} items`}
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
            className="mr-1"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {totalItems() > 0 && (
            <span className="ml-1 bg-primary text-white text-xs rounded-full w-5 h-5 inline-flex items-center justify-center font-bold">
              {totalItems()}
            </span>
          )}
        </Button>
      </nav>
    </header>
  );
}
