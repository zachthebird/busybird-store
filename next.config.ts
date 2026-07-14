import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults to WebP only; prefer AVIF (smaller) with a WebP
    // fallback. Order matters — the first format the browser's Accept
    // header supports is used. Falls back to the original for non-supporting
    // browsers, so this is safe.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // The gamenight source file was a JPEG mislabeled .png and got renamed.
      // Old URL survives in persisted carts (localStorage), OG scrapes, and
      // image indexes — redirect instead of 404ing them.
      {
        source: "/products/gamenight-mahjong-tile.png",
        destination: "/products/gamenight-mahjong-tile.jpg",
        permanent: true,
      },
      // Grackle launch: prototype image replaced by final product photos
      // under new names. Old URL was already ingested by Merchant Center
      // and may live in caches/persisted carts.
      {
        source: "/products/grackle-wing.png",
        destination: "/products/grackle-wing-earrings.png",
        permanent: true,
      },
      // Terracotta Sunset rethemed as Texas Sun: page slug and image both
      // renamed; old URLs are in the sitemap Google already read and in
      // Merchant Center's ingested feed.
      {
        source: "/products/terracotta-sunset-earrings",
        destination: "/products/texas-sun-earrings",
        permanent: true,
      },
      {
        source: "/products/terracotta-sunset.png",
        destination: "/products/texas-sun-earrings.png",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
