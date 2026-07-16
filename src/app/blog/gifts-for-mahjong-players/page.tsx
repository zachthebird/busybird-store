import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";
import { getProductBySlug } from "@/lib/products";
import type { Product } from "@/lib/types";
import { Heading, Container, Section } from "@/components/ui";
import { PostJsonLd } from "../post-jsonld";

const post = getPostBySlug("gifts-for-mahjong-players")!;

// Pull live catalog data so names, prices, images, and availability never
// drift from the shop. Retired slugs stay listed here — the available
// filter drops them, so the guide always shows the current mahjong lineup.
const mahjongPicks = [
  getProductBySlug("joker-tile-earrings"),
  getProductBySlug("mahjong-tile-earrings"),
  getProductBySlug("gamenight-mahjong-tile-earrings"),
].filter((p): p is Product => p !== undefined && p.available);

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  // Page openGraph replaces the layout's wholesale (no deep merge), so
  // siteName and an image fallback must be restated here.
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    siteName: "BusyBird",
    images: [mahjongPicks[0]?.image ?? "/og.png"],
  },
};

export default function MahjongGiftGuidePage() {
  return (
    <>
      <PostJsonLd post={post} image={mahjongPicks[0]?.image} />

      <Section bg="neutral">
        <Container className="max-w-3xl">
          <p className="font-accent text-xl text-primary mb-2">
            Gift Guide &middot; July 2026
          </p>
          <Heading as="h1" className="mb-6">
            Gifts for Mahjong Players: A Game-Night Gift Guide
          </Heading>
          <p className="text-lg text-dark/50 leading-relaxed">
            Mahjong is having a moment, and if someone in your life hosts game
            night, you already know: they have opinions about tiles. We make
            mahjong tile earrings in our East Austin studio, so we&apos;ve met
            a lot of players — here&apos;s what actually lands as a gift.
          </p>
        </Container>
      </Section>

      <Section bg="white">
        <Container className="max-w-3xl">
          <div className="space-y-10 text-dark/60 leading-relaxed">
            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                Something they can wear to the table
              </Heading>
              <p className="mb-6">
                The best mahjong gifts nod to the game without being a
                novelty. Full disclosure: the earrings below are ours —
                3D-printed resin tiles with stainless steel findings, made to
                order in Austin.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mahjongPicks.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group block rounded-card overflow-hidden bg-white border border-dark/5 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative aspect-square overflow-hidden bg-neutral/30">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-heading text-base font-semibold text-dark group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 font-heading text-lg font-bold text-primary">
                        ${product.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                Gifts for the player who hosts
              </Heading>
              <p>
                If your mahjong player runs the game, gift the table, not the
                player. A few ideas that consistently go over well:
              </p>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong className="text-dark">A quality tile set upgrade.</strong>{" "}
                  Serious players eventually outgrow the starter set. If they
                  learned on hand-me-down tiles, a set they picked out —
                  or a gift card toward one — is the big-swing gift.
                </li>
                <li>
                  <strong className="text-dark">A proper table mat.</strong>{" "}
                  Quiets the shuffle, saves the dining table, and makes every
                  game feel a little more official.
                </li>
                <li>
                  <strong className="text-dark">Score cards and a nice rack.</strong>{" "}
                  The unglamorous gear nobody buys for themselves and everybody
                  uses every single game.
                </li>
                <li>
                  <strong className="text-dark">A lessons book for their style of play.</strong>{" "}
                  American, Hong Kong, and Riichi mahjong are different games —
                  check which one they play before you buy.
                </li>
                <li>
                  <strong className="text-dark">Game-night provisions.</strong>{" "}
                  A snack tray or a favorite tea does more for a weekly game
                  than any gadget.
                </li>
              </ul>
            </div>

            <div>
              <Heading as="h2" className="mb-3 text-dark text-2xl sm:text-3xl">
                When to order (the part people miss)
              </Heading>
              <p>
                Handmade gifts need lead time. Our jewelry is made to order —
                allow <strong>3&ndash;5 business days of production</strong>{" "}
                before it ships, plus 5&ndash;7 business days for standard US
                shipping. Translation: order about three weeks before you
                need it, and earlier around holidays. Standard shipping is free on
                orders over $60, and the fine print lives on our{" "}
                <Link
                  href="/shipping"
                  className="text-primary hover:text-primary-hover underline underline-offset-4"
                >
                  shipping page
                </Link>
                . (We currently ship within the US only.)
              </p>
            </div>

            <div className="bg-neutral p-6 sm:p-8 rounded-card border border-dark/5">
              <p className="font-heading font-semibold text-dark mb-2">
                The cheat sheet
              </p>
              <ul className="space-y-2 text-sm">
                <li>&bull; Wearable: mahjong tile earrings they&apos;ll get asked about</li>
                <li>&bull; For the host: tile set upgrade, table mat, racks &amp; score cards</li>
                <li>&bull; Know their game: American, Hong Kong, and Riichi differ</li>
                <li>&bull; Made-to-order = order ~3 weeks ahead</li>
              </ul>
            </div>

            <p>
              More designs are always in progress in the studio —{" "}
              <Link
                href="/shop"
                className="text-primary hover:text-primary-hover underline underline-offset-4"
              >
                see what&apos;s available now
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
