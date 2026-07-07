import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults to WebP only; prefer AVIF (smaller) with a WebP
    // fallback. Order matters — the first format the browser's Accept
    // header supports is used. Falls back to the original for non-supporting
    // browsers, so this is safe.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
