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
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
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
  },
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
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
