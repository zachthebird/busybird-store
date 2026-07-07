import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-accent",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://busybirdaustin.com"
  ),
  title: {
    default: "BusyBird — Austin-Made 3D Printed Jewelry",
    template: "%s | BusyBird",
  },
  description:
    "Playful, handcrafted 3D-printed resin jewelry made in Austin, Texas. Cute, colorful pieces inspired by Texas culture — from bluebonnets to grackles.",
  keywords: [
    "3D printed jewelry",
    "Austin jewelry",
    "Texas jewelry",
    "handmade earrings",
    "resin jewelry",
    "BusyBird",
  ],
  authors: [{ name: "BusyBird" }],
  openGraph: {
    title: "BusyBird — Austin-Made 3D Printed Jewelry",
    description:
      "Playful, handcrafted 3D-printed resin jewelry made in Austin, Texas.",
    type: "website",
    siteName: "BusyBird",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "BusyBird — Austin-Made 3D-Printed Jewelry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BusyBird — Austin-Made 3D Printed Jewelry",
    description:
      "Playful, handcrafted 3D-printed resin jewelry made in Austin, Texas.",
    images: ["/og.png"],
  },
};

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://busybirdaustin.com";

// Site-wide entity graph. Organization establishes the brand entity;
// WebSite links back to it via publisher. No SearchAction — there is no
// on-site search endpoint to point one at, and an invalid one would be
// flagged by Google. Uses the same SITE_URL expression as the product
// page's Product JSON-LD so the two never drift.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "BusyBird",
      url: SITE_URL,
      // Stand-in logo: og.png is a branded share card, not a dedicated
      // logo mark. Replace with a square/transparent logo asset when one
      // exists, then this URL can stay or point at the new file.
      logo: `${SITE_URL}/og.png`,
      image: `${SITE_URL}/og.png`,
      description:
        "Playful, handcrafted 3D-printed resin jewelry made in East Austin, Texas — colorful pieces inspired by Texas culture, from bluebonnets to grackles.",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Greater Austin, Texas",
      },
      sameAs: ["https://busybird.etsy.com", "https://x.com/busybirdatx"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "BusyBird",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
