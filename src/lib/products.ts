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
    reviews: [
      {
        id: "r1",
        author: "Sarah M.",
        rating: 5,
        text: "I get so many compliments on these! They're so unique and really well made. Light enough to wear all day.",
        date: "2026-04-15",
      },
      {
        id: "r2",
        author: "Jen L.",
        rating: 5,
        text: "Bought these as a gift for my mahjong-obsessed friend and she absolutely loved them. The tile details are spot on.",
        date: "2026-03-22",
      },
      {
        id: "r3",
        author: "Taylor R.",
        rating: 4,
        text: "Super cute and great quality. I wish they came in more color variations!",
        date: "2026-05-01",
      },
    ],
    category: "earrings",
    inStock: true,
    // No badge — this is the only currently available product
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
    reviews: [
      {
        id: "r4",
        author: "Maya K.",
        rating: 5,
        text: "These earrings are STUNNING. The color is so warm and rich — they go with everything in my fall wardrobe.",
        date: "2026-04-28",
      },
      {
        id: "r5",
        author: "Rachel D.",
        rating: 5,
        text: "Beautiful craftsmanship. I love that they're 3D printed but look so polished. Very Austin vibe.",
        date: "2026-04-10",
      },
    ],
    category: "earrings",
    inStock: true,
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
    reviews: [
      {
        id: "r6",
        author: "Jordan C.",
        rating: 5,
        text: "LOVE these. The iridescence is incredible — they shift colors in different lighting. Definitely a statement piece.",
        date: "2026-05-10",
      },
      {
        id: "r7",
        author: "Alex N.",
        rating: 4,
        text: "Really unique design. They're a bit larger than I expected but I've grown to love the drama. Get tons of questions about them.",
        date: "2026-04-05",
      },
      {
        id: "r8",
        author: "Sam T.",
        rating: 5,
        text: "As a bird nerd, these are perfect. The grackle reference is hilarious and accurate. Quality is fantastic.",
        date: "2026-03-18",
      },
    ],
    category: "earrings",
    inStock: true,
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
    reviews: [
      {
        id: "r9",
        author: "Emily W.",
        rating: 5,
        text: "This necklace makes me so happy. The bluebonnets are beautifully detailed and it's so lightweight. My new favorite piece.",
        date: "2026-04-20",
      },
      {
        id: "r10",
        author: "Laura H.",
        rating: 5,
        text: "Gorgeous Texas pride piece without being tacky. The flowers are delicate and the gold chain is good quality. Highly recommend.",
        date: "2026-03-30",
      },
    ],
    category: "necklaces",
    inStock: true,
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
    reviews: [
      {
        id: "r11",
        author: "Chris B.",
        rating: 5,
        text: "Perfect everyday piece. The brushed finish is really nice — not shiny, just warm. The leather cord is comfortable and the magnetic clasp is genius.",
        date: "2026-05-05",
      },
      {
        id: "r12",
        author: "Dana M.",
        rating: 4,
        text: "Great quality and design. I do wish the star was a tiny bit smaller, but overall really happy with it.",
        date: "2026-04-12",
      },
      {
        id: "r13",
        author: "Pat J.",
        rating: 5,
        text: "Bought this for my son who moved out of state — he wears it every day. The Texas connection means a lot.",
        date: "2026-03-25",
      },
    ],
    category: "necklaces",
    inStock: true,
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
    reviews: [
      {
        id: "r14",
        author: "Morgan S.",
        rating: 5,
        text: "This cuff is beautiful. The gold tone is really warm and the sunburst detail is so well done. Adjustable fit is perfect.",
        date: "2026-05-08",
      },
      {
        id: "r15",
        author: "Casey L.",
        rating: 5,
        text: "I've worn this every day since I got it. It goes with everything and I love the Texas sunset vibe. Great quality for the price.",
        date: "2026-04-18",
      },
    ],
    category: "bracelets",
    inStock: true,
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
