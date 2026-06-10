import { Product } from "./types";

export const products: Product[] = [
  {
    slug: "mahjong-tile-earrings",
    name: "Mahjong Tile Earrings",
    price: 36,
    description:
      "Playful 3D-printed tile-shaped drops inspired by classic mahjong tiles. Lightweight and conversation-starting — perfect for game night or everyday whimsy.",
    details: [
      "3D-printed resin with hand-painted details",
      "Hypoallergenic stainless steel posts",
      "Approximately 1.25\" drop length",
      "Each pair is slightly unique due to hand-finishing",
    ],
    image: "/products/mahjong-tile.png",
    category: "earrings",
    inStock: true,
    available: true,
    // No badge — this is the only currently available product
  },
  {
    slug: "gamenight-mahjong-tile-earrings",
    name: "Gamenight Mahjong Tile Earrings",
    price: 36,
    description:
      "Playful 3D-printed tile-shaped drops inspired by classic mahjong tiles. Lightweight and conversation-starting — perfect for game night or everyday whimsy.",
    details: [
      "3D-printed resin with hand-painted details",
      "Hypoallergenic stainless steel posts",
      "Approximately 1.25\" drop length",
      "Each pair is slightly unique due to hand-finishing",
    ],
    image: "/products/gamenight-mahjong-tile.png",
    category: "earrings",
    inStock: true,
    available: true,
  },
  {
    slug: "terracotta-sunset-earrings",
    name: "Terracotta Sunset Earrings",
    price: 48,
    description:
      "Warm orange-brown drops that capture the glow of a Texas Hill Country sunset. Hand-finished with a subtle gradient that catches the light beautifully.",
    details: [
      "3D-printed resin with hand-applied gradient finish",
      "Hypoallergenic stainless steel posts",
      "Approximately 1.5\" drop length",
      "Inspired by Austin skyline silhouettes at dusk",
    ],
    image: "/products/terracotta-sunset.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "grackle-wing-earrings",
    name: "Grackle Wing Earrings",
    price: 52,
    description:
      "Dramatic wing-shaped drops with an iridescent finish that shifts from deep purple to teal green — just like a grackle's feathers in the Texas sun. Bold, unexpected, and impossible to ignore.",
    details: [
      "3D-printed resin with iridescent multi-chrome finish",
      "Hypoallergenic stainless steel posts",
      "Approximately 2\" drop length",
      "Each pair has a unique iridescent pattern",
    ],
    image: "/products/grackle-wing.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "bluebonnet-chain-necklace",
    name: "Bluebonnet Chain Necklace",
    price: 72,
    description:
      "Delicate blue flower charms strung along a fine gold chain — a wearable Texas spring. Each bluebonnet bloom is individually 3D-printed and hand-painted in soft blue hues.",
    details: [
      "3D-printed resin flower charms with hand-painted details",
      "14k gold-plated brass chain, 18\" with 2\" extender",
      "Lobster clasp closure",
      "Five bluebonnet charms spaced along the chain",
    ],
    image: "/products/bluebonnet-chain.png",
    category: "necklaces",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "lone-star-pendant",
    name: "Lone Star Pendant",
    price: 68,
    description:
      "A brushed brass lone star suspended on a rich leather cord. Understated Texas pride — the star has a soft, matte finish that feels warm and timeworn, like it's been yours for years.",
    details: [
      "3D-printed resin star with brushed brass finish",
      "Genuine leather cord, adjustable 20-24\"",
      "Magnetic clasp for easy on/off",
      "Star measures approximately 1.5\" across",
    ],
    image: "/products/lone-star-pendant.png",
    category: "necklaces",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "golden-hour-cuff",
    name: "Golden Hour Cuff",
    price: 56,
    description:
      "A warm gold open cuff with a hand-engraved sunburst pattern radiating from the center. Designed to catch the golden hour light all day long — an everyday reminder of Texas magic.",
    details: [
      "3D-printed resin with warm gold finish and engraved details",
      "Open cuff design, adjustable to fit most wrists",
      "Sunburst pattern radiates from center",
      "Approximately 0.5\" wide at center",
    ],
    image: "/products/golden-hour-cuff.png",
    category: "bracelets",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [
  { slug: "earrings", name: "Earrings" },
  { slug: "necklaces", name: "Necklaces" },
  { slug: "bracelets", name: "Bracelets" },
];
