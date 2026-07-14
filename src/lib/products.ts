import { Product } from "./types";

export const products: Product[] = [
  {
    slug: "mahjong-tile-earrings",
    name: "Mahjong Tile Earrings",
    price: 36,
    description:
      "Crisp white 3D-printed mahjong tiles stamped with the game's most iconic faces — the red dragon character and green bamboo — hung from silver-tone stainless steel ear wires. Lightweight, graphic, and guaranteed to start a conversation at the table.",
    details: [
      "3D-printed resin tiles with hand-painted red and green detailing",
      "Stainless steel ear wires",
      "Approximately 1.25\" drop length",
      "Each pair is slightly unique due to hand-finishing",
    ],
    image: "/products/mahjong-tile.png",
    altText:
      "Mahjong Tile Earrings — 3D-printed cream resin drop earrings with embossed red Chinese character and vibrant green bamboo motifs, inspired by classic mahjong tiles",
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
      "A deliberately mismatched pair for the serious player — a green bamboo tile paired with the hand-illustrated 'one bamboo' bird tile, each 3D-printed and painted by hand. A little more detailed, a little more eclectic — made for game night.",
    details: [
      "3D-printed resin with hand-painted multi-color detail",
      "Stainless steel ear wires",
      "Intentionally mismatched left and right tile designs",
      "Approximately 1.25\" drop length; each pair varies with hand-finishing",
    ],
    image: "/products/gamenight-mahjong-tile.jpg",
    altText:
      "Gamenight Mahjong Tile Earrings — deliberately mismatched pair of 3D-printed ivory resin tiles, one with green bamboo stalks and one with the hand-illustrated ‘one bamboo’ bird beneath a red bloom",
    category: "earrings",
    inStock: true,
    available: true,
  },
  {
    slug: "texas-sun-earrings",
    name: "Texas Sun Earrings",
    price: 48,
    description:
      "Burnt-orange drops that hold the last hour of a Texas evening — that slow, hazy golden light on a two-lane highway heading west. Each teardrop is hand-finished with a sun-fade gradient that glows amber when the light catches it. Best worn with the windows down and the right song on.",
    details: [
      "3D-printed resin with hand-applied sun-fade gradient",
      "Teardrops suspended from hammered gold-tone arches",
      "Stainless steel posts",
      "Approximately 1.5\" drop length",
      "Named for the feeling of a westbound drive at golden hour",
    ],
    image: "/products/texas-sun-earrings.png",
    altText:
      "Texas Sun Earrings — 3D-printed burnt orange resin teardrop earrings suspended from hammered gold-tone arches, finished with a warm sun-fade gradient like a Texas golden hour",
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
      "Gold-tone stainless steel ear wires",
      "Approximately 2\" drop length",
      "Each pair has a unique iridescent pattern",
    ],
    image: "/products/grackle-wing-earrings.png",
    altText:
      "Grackle Wing Earrings — 3D-printed iridescent wing-shaped resin earrings on gold-tone ear wires, with a multi-chrome finish shifting from deep purple to teal green like a grackle’s feathers in the Texas sun",
    gallery: [
      {
        src: "/products/grackle-wing-earrings-styled.png",
        alt: "Grackle Wing Earrings styled flat on a stone surface with dried flowers, showing the layered feather detail",
      },
      {
        src: "/products/grackle-wing-earrings-model.png",
        alt: "Grackle Wing Earring worn, showing the roughly 2-inch drop length and iridescent shimmer in sunlight",
      },
    ],
    category: "earrings",
    inStock: true,
    available: true,
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
    altText:
      "Bluebonnet Chain Necklace — 3D-printed bluebonnet flower pendant with rich blue petals and green enamel leaves on a delicate gold chain necklace, a wearable Texas spring",
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
    altText:
      "Lone Star Pendant — 3D-printed antiqued brass five-pointed star pendant with faceted ridges and a brushed matte finish, suspended on a rich dark leather cord necklace",
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
      "A warm brushed-gold open cuff with a hand-engraved sunburst radiating out from a small Texas state outline at its center. Designed to catch the golden-hour light all day long — understated Lone Star pride you can wear with anything.",
    details: [
      "3D-printed resin with warm gold finish and engraved details",
      "Open cuff design, adjustable to fit most wrists",
      "Engraved Texas state outline with a sunburst radiating from center",
      "Approximately 0.5\" wide at center",
    ],
    image: "/products/golden-hour-cuff.png",
    altText:
      "Golden Hour Cuff — 3D-printed warm gold open cuff bracelet with a hand-engraved Texas state outline and sunburst pattern radiating across a brushed brass finish",
    category: "bracelets",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },

  // ---------------------------------------------------------------------
  // PLACEHOLDER LISTINGS (added July 2026). Images are generated "photo
  // coming soon" cards — swap for real product photos 1:1 at the same path.
  // Prices and physical details (drop lengths, finishes) are provisional;
  // maker confirms both before flipping `available: true`.
  // ---------------------------------------------------------------------
  {
    slug: "gecko-dangle-earrings",
    name: "Gecko Dangle Earrings",
    price: 35,
    description:
      "A little porch gecko for your ears — the tiny roommate who patrols every Texas porch light, 3D-printed in resin and hand-painted so its curled tail and toes catch the light. Charming, slightly weird, entirely BusyBird.",
    details: [
      "3D-printed resin with hand-painted details",
      "Stainless steel ear wires",
      "Approximately 1.75\" drop length",
      "Each gecko varies slightly with hand-finishing",
    ],
    image: "/products/gecko-dangle-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "lobster-dangle-earrings",
    name: "Lobster Dangle Earrings",
    price: 35,
    description:
      "Bright red lobsters, claws up, ready for the boil. 3D-printed resin with a glossy hand-painted finish — beach-shack kitsch done just elevated enough to wear anywhere. Guaranteed to start at least one conversation per outing.",
    details: [
      "3D-printed resin with glossy hand-painted finish",
      "Stainless steel ear wires",
      "Approximately 1.5\" drop length",
      "Each pair varies slightly with hand-finishing",
    ],
    image: "/products/lobster-dangle-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "corndog-earrings",
    name: "Corndog Earrings",
    price: 35,
    description:
      "An ode to the corny dog — golden-battered, mustard-striped, and worn with the confidence of someone who knows the State Fair food line is worth it. 3D-printed resin, hand-painted down to the stick.",
    details: [
      "3D-printed resin with hand-painted batter and mustard detail",
      "Stainless steel ear wires",
      "Approximately 1.75\" drop length",
      "Each pair varies slightly with hand-finishing",
    ],
    image: "/products/corndog-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "prickly-pear-cactus-earrings",
    name: "Prickly Pear Cactus Earrings",
    price: 35,
    description:
      "Texas's favorite cactus, minus the spines that hurt. Green prickly pear paddles topped with a hot-pink bloom, 3D-printed in resin and hand-painted — a little desert garden that goes with denim, dresses, and everything between.",
    details: [
      "3D-printed resin with hand-painted paddle and bloom details",
      "Stainless steel ear wires",
      "Approximately 1.5\" drop length",
      "Each pair varies slightly with hand-finishing",
    ],
    image: "/products/prickly-pear-cactus-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "candy-corn-earrings",
    name: "Candy Corn Earrings",
    price: 35,
    description:
      "The most argued-about candy in America, now in earring form. Classic tri-color stripes, 3D-printed in resin with a soft glossy finish — sweet enough for October, divisive enough to be fun year-round.",
    details: [
      "3D-printed resin with hand-painted tri-color stripes",
      "Stainless steel ear wires",
      "Approximately 1\" drop length",
      "Part of the BusyBird Halloween collection",
    ],
    image: "/products/candy-corn-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "ghost-earrings",
    name: "Little Ghost Earrings",
    price: 35,
    description:
      "Two small, extremely friendly ghosts — soft white resin with hand-painted faces that land closer to 'aww' than 'boo.' Light enough to haunt your ears all day through spooky season and beyond.",
    details: [
      "3D-printed resin with hand-painted faces",
      "Stainless steel ear wires",
      "Approximately 1.25\" drop length",
      "Part of the BusyBird Halloween collection",
    ],
    image: "/products/ghost-earrings.png",
    category: "earrings",
    inStock: true,
    available: false,
    badge: "Coming Soon",
  },
  {
    slug: "austin-bat-earrings",
    name: "Austin Bat Earrings",
    price: 35,
    description:
      "Every evening in summer, over a million bats pour out from under the Congress Avenue Bridge — Austin's spookiest and most beloved residents. Wing-spread silhouettes in deep midnight resin: Halloween for everyone else, hometown pride for us.",
    details: [
      "3D-printed resin in a deep midnight finish",
      "Stainless steel ear wires",
      "Approximately 1.5\" wingspan",
      "Part of the BusyBird Halloween collection — and Austin canon",
    ],
    image: "/products/austin-bat-earrings.png",
    category: "earrings",
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
