import { Product } from "./types";

export const products: Product[] = [
  {
    slug: "joker-tile-earrings",
    name: "Mahjong Joker Tile Earrings",
    price: 36,
    // Consolidates the two original mahjong listings (both hidden below;
    // their old URLs 308 here via next.config.ts).
    description:
      "The tile every seat at the table is hoping for. A matched pair of jokers in creamy 3D-printed resin — red lettering arched over the green dragon medallion in its blue ring — hung from stainless steel ear wires. Wear the wild cards and let your luck know it's optional.",
    details: [
      "3D-printed resin tiles with crisp red, green, and blue detailing",
      "Stainless steel ear wires",
      "Approximately 1.5\" tile drop",
      "Each pair is slightly unique due to hand-finishing",
    ],
    image: "/products/joker-tile-earrings.png",
    altText:
      "Mahjong Joker Tile Earrings — 3D-printed cream resin mahjong joker tiles with red JOKER lettering above a green dragon medallion in a blue ring, on silver-tone stainless steel ear wires",
    gallery: [
      {
        src: "/products/joker-tile-earrings-styled.png",
        alt: "Mahjong Joker Tile Earrings laid on warm sandstone with dried florals, showing the crisp red JOKER lettering and green dragon medallion",
      },
      {
        src: "/products/joker-tile-earrings-model.png",
        alt: "Mahjong Joker Tile Earring worn, showing the roughly 1.5-inch tile in golden evening light",
      },
    ],
    category: "earrings",
    inStock: true,
    available: true,
    badge: "New",
  },
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
    // Retired July 2026: consolidated into joker-tile-earrings (old URL 308s
    // there). Entry kept for persisted-cart slug resolution.
    available: false,
    hidden: true,
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
    // Retired July 2026: consolidated into joker-tile-earrings (old URL 308s
    // there). Entry kept for persisted-cart slug resolution.
    available: false,
    hidden: true,
  },
  {
    slug: "texas-sun-earrings",
    name: "Texas Sun Earrings",
    price: 48,
    description:
      "A deliberately mismatched pair for the whole drive: golden hour on one ear, midnight on the other. The Texas Sun side stacks sunset waves in burnt orange under a low amber sun; the Texas Moon side answers in midnight blue and violet with a cream moon and a teal star — each with its own swinging title tag. Layered, lettered, hand-finished, and best worn with the windows down and the right record on.",
    details: [
      "Deliberately mismatched pair — sunset on one ear, moonrise on the other",
      "Layered 3D-printed resin with raised lettering and wave relief",
      "Hammered gold-tone stud tops with hinged title tags",
      "Approximately 2.5\" total drop length",
      "Named for the feeling of a westbound drive at golden hour",
    ],
    image: "/products/texas-sun-earrings.png",
    altText:
      "Texas Sun Earrings — mismatched pair of layered 3D-printed resin earrings: an arched sunset tag in burnt orange waves reading TEXAS SUN, beside its midnight-blue companion with a cream moon and teal star reading TEXAS MOON, both on hammered gold stud tops",
    gallery: [
      {
        src: "/products/texas-sun-earrings-sunburst.png",
        alt: "Alternate sculptural version of the Texas Sun pair — a scalloped burnt-orange sunburst with concentric arcs beside a midnight-blue crescent moon with a dangling teal star, hung from hammered gold arches",
      },
    ],
    category: "earrings",
    inStock: true,
    available: false,
    hidden: true,
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
    slug: "texas-red-white-blue-earrings",
    name: "Red, White & Blue Texas Earrings",
    price: 38,
    description:
      "The whole state, flying its own colors. A Texas silhouette color-blocked like the Lone Star flag — deep blue behind a raised white star, cream and red riding east — 3D-printed in resin with a subtle contour texture that reads like a topographic map. The gold hooks thread straight through the Panhandle: no chain, no fuss, just Texas.",
    details: [
      "3D-printed resin color-blocked like the Texas flag, with a raised lone star",
      "Subtle contoured print texture, like a topographic map",
      "Gold-tone stainless steel ear wires, attached directly through the Panhandle",
      "Approximately 1.75\" across",
      "Each pair varies slightly with hand-finishing",
    ],
    image: "/products/texas-red-white-blue-earrings.png",
    altText:
      "Red, White & Blue Texas Earrings — 3D-printed resin Texas silhouettes color-blocked like the state flag, deep blue with a raised white star beside cream and red panels, on gold-tone ear wires threaded directly through the Panhandle",
    gallery: [
      {
        src: "/products/texas-red-white-blue-earrings-styled.png",
        alt: "Red, White & Blue Texas Earrings laid on warm limestone with dried florals, showing the contoured print texture and raised star",
      },
      {
        src: "/products/texas-red-white-blue-earrings-model.png",
        alt: "Red, White & Blue Texas Earring worn, showing the roughly 1.75-inch Texas silhouette in golden evening light",
      },
    ],
    category: "earrings",
    inStock: true,
    available: true,
    badge: "New",
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
    badge: "Coming Soon",
  },

  // ---------------------------------------------------------------------
  // JULY 2026 EXPANSION. Entries flagged `hidden: true` (here and above)
  // are deprecated from the storefront pending production — several still
  // carry generated "photo coming soon" placeholder images, and their
  // prices and physical details are provisional. Confirm both with the
  // maker before relaunching one (hidden: false, available: true).
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
    hidden: true,
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
    hidden: true,
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
    hidden: true,
    badge: "Coming Soon",
  },
  {
    slug: "prickly-pear-cactus-earrings",
    name: "Prickly Pear Cactus Earrings",
    price: 35,
    description:
      "Texas's favorite cactus, minus the spines. Two green prickly pear paddles — dimpled just like the real thing — stack beneath a sculpted hot-pink bloom, 3D-printed in resin with a soft matte finish. A little desert garden that goes with denim, dresses, and everything in between.",
    details: [
      "Layered 3D-printed resin with a soft matte finish",
      "Sculpted hot-pink prickly pear bloom",
      "Stainless steel ear wires",
      "Approximately 2.25\" drop length",
      "Each pair varies slightly with hand-finishing",
    ],
    image: "/products/prickly-pear-cactus-earrings.png",
    altText:
      "Prickly Pear Cactus Earrings — two stacked green 3D-printed prickly pear paddles with dimpled texture, topped with a sculpted hot-pink bloom",
    gallery: [
      {
        src: "/products/prickly-pear-cactus-earrings-styled.png",
        alt: "Prickly Pear Cactus Earrings arranged on sun-washed stone beside dried grasses, showing the dimpled paddle texture and layered pink bloom",
      },
      {
        src: "/products/prickly-pear-cactus-earrings-model.png",
        alt: "Prickly Pear Cactus Earring worn, showing the roughly 2.25-inch drop against a Hill Country sunset",
      },
    ],
    category: "earrings",
    inStock: true,
    available: true,
    badge: "New",
  },
  {
    slug: "candy-corn-earrings",
    name: "Candy Corn Earrings",
    price: 35,
    description:
      "The most argued-about candy in America, now in earring form. Oversized kernels in the classic cream, orange, and yellow stripes, 3D-printed in resin with a soft matte finish — sweet enough for October, divisive enough to be fun year-round.",
    details: [
      "3D-printed resin in classic tri-color stripes",
      "Stainless steel ear wires",
      "Approximately 1.5\" drop length",
      "Part of the BusyBird Halloween collection",
    ],
    image: "/products/candy-corn-earrings.png",
    altText:
      "Candy Corn Earrings — 3D-printed resin drop earrings shaped like oversized candy corn kernels with cream, orange, and yellow stripes",
    gallery: [
      {
        src: "/products/candy-corn-earrings-styled.png",
        alt: "Candy Corn Earrings laid on warm sandstone with dried florals, showing the rounded kernel shape and crisp stripe transitions",
      },
      {
        src: "/products/candy-corn-earrings-model.png",
        alt: "Candy Corn Earring worn, showing the roughly 1.5-inch drop in golden evening light",
      },
    ],
    category: "earrings",
    inStock: true,
    available: true,
    badge: "New",
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
    hidden: true,
    badge: "Coming Soon",
  },
  {
    slug: "austin-bat-earrings",
    name: "Austin Bat Earrings",
    price: 44,
    // Renders show gold hooks; the physical piece ships on stainless wires.
    // Flip available when production wraps (~mid-Aug target).
    description:
      "Every evening in summer, over a million bats pour out from under the Congress Avenue Bridge — Austin's spookiest and most beloved residents. These are theirs: wing-spread bats in deep midnight resin, each wing built from layered, veined segments with a whisper of purple at the tips. Halloween for everyone else — hometown pride for us.",
    details: [
      "3D-printed resin in deep midnight with a subtle purple sheen at the wing tips",
      "Layered, veined wing segments with hand-finished edges",
      "Stainless steel ear wires",
      "Approximately 2.5\" wingspan",
      "Part of the BusyBird Halloween collection — and Austin canon",
    ],
    image: "/products/austin-bat-earrings.png",
    altText:
      "Austin Bat Earrings — wing-spread bats in deep midnight 3D-printed resin with layered, veined wing segments and a subtle purple sheen at the tips",
    gallery: [
      {
        src: "/products/austin-bat-earrings-styled.png",
        alt: "Austin Bat Earrings arranged on warm stone beside dried grass in dusk light, showing the layered wing detail and purple sheen",
      },
      {
        src: "/products/austin-bat-earrings-model.png",
        alt: "Austin Bat Earring worn, showing the roughly 2.5-inch wingspan in golden evening light",
      },
    ],
    category: "earrings",
    inStock: true,
    available: false,
    hidden: true,
    badge: "Coming Soon",
  },
];

/**
 * The storefront catalog: what grids, featured sections, related items, and
 * the sitemap render. Hidden (deprecated) products stay in `products` so
 * their slugs still resolve for persisted carts and an easy relaunch.
 */
export const visibleProducts = products.filter((p) => !p.hidden);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return visibleProducts.filter((p) => p.category === category);
}

export const categories = [
  { slug: "earrings", name: "Earrings" },
  { slug: "necklaces", name: "Necklaces" },
  { slug: "bracelets", name: "Bracelets" },
];
