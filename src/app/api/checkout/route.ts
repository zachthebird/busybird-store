import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductBySlug } from "@/lib/products";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://busybirdaustin.com";

// Shipping rates must match the promises on /shipping — update both together.
// US-only for now: Stripe shows the same fixed shipping_options to every
// session regardless of the address chosen, so offering an "International"
// rate next to a free/cheap US rate let a non-US buyer select the US rate.
// Ship US-only until per-country rate logic exists; keep /shipping in sync.
const STANDARD_SHIPPING_CENTS = 495;
const EXPRESS_SHIPPING_CENTS = 1495;
// Lowered from $75 on 2026-07-15 (owner call): the old threshold sat above
// 2x AOV, so it motivated nobody. Merchant Center's shipping config still
// says free-over-$75 — charging LESS than configured is policy-safe, but
// update MC to match when next in the dashboard.
const FREE_SHIPPING_THRESHOLD_CENTS = 6000;

const MAX_QUANTITY_PER_ITEM = 20;
const MAX_CART_LINES = 50;

interface CheckoutItem {
  slug: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("placeholder")) {
    return NextResponse.json(
      { error: "Online checkout isn't available quite yet." },
      { status: 503 }
    );
  }

  let items: CheckoutItem[];
  try {
    ({ items } = await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!Array.isArray(items) || items.length === 0 || items.length > MAX_CART_LINES) {
    return NextResponse.json({ error: "Invalid cart." }, { status: 400 });
  }

  // Prices and availability always come from the catalog, never the client.
  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  let subtotalCents = 0;
  for (const item of items) {
    const product =
      typeof item?.slug === "string" ? getProductBySlug(item.slug) : undefined;
    const quantity = Number.isInteger(item?.quantity) ? item.quantity : 0;
    if (!product || !product.available) {
      return NextResponse.json(
        {
          error: product
            ? `"${product.name}" isn't available yet — please remove it from your cart.`
            : "Your cart contains an item that isn't available.",
        },
        { status: 400 }
      );
    }
    if (quantity < 1 || quantity > MAX_QUANTITY_PER_ITEM) {
      return NextResponse.json(
        {
          error: `Please choose a quantity between 1 and ${MAX_QUANTITY_PER_ITEM} for "${product.name}".`,
        },
        { status: 400 }
      );
    }
    const unitAmount = Math.round(product.price * 100);
    subtotalCents += unitAmount * quantity;
    lineItems.push({
      quantity,
      price_data: {
        currency: "usd",
        unit_amount: unitAmount,
        product_data: {
          name: product.name,
          images: [`${SITE_URL}${product.image}`],
          metadata: { slug: product.slug },
        },
      },
    });
  }

  const freeStandard = subtotalCents >= FREE_SHIPPING_THRESHOLD_CENTS;
  const origin = request.nextUrl.origin;
  const stripe = new Stripe(key);

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      shipping_address_collection: { allowed_countries: ["US"] },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: freeStandard
              ? "Standard US shipping — free over $60"
              : "Standard US shipping",
            fixed_amount: {
              amount: freeStandard ? 0 : STANDARD_SHIPPING_CENTS,
              currency: "usd",
            },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 5 },
              maximum: { unit: "business_day", value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            display_name: "Express US shipping",
            fixed_amount: { amount: EXPRESS_SHIPPING_CENTS, currency: "usd" },
            delivery_estimate: {
              minimum: { unit: "business_day", value: 2 },
              maximum: { unit: "business_day", value: 3 },
            },
          },
        },
      ],
      allow_promotion_codes: true,
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/shop`,
    });

    if (!session.url) throw new Error("Stripe session has no redirect URL");
    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json(
      { error: "We couldn't start checkout. Please try again in a moment." },
      { status: 500 }
    );
  }
}
