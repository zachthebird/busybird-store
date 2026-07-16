import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Newsletter capture with zero new infrastructure: signups live as Stripe
// Customers (metadata.newsletter = "true") under the account that already
// holds order data. Export/import into an ESP later; until then the list
// is queryable from the Stripe dashboard (Customers, filtered by metadata).
export async function POST(request: NextRequest) {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key || key.includes("placeholder")) {
    return NextResponse.json(
      { error: "Signups aren't available quite yet." },
      { status: 503 }
    );
  }

  let body: { email?: unknown; nickname?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never see or fill the "nickname" field.
  if (typeof body.nickname === "string" && body.nickname.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  // Light shape check — Stripe validates for real on its side.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "That email doesn't look right — mind checking it?" },
      { status: 400 }
    );
  }

  const stripe = new Stripe(key);
  try {
    const existing = await stripe.customers.list({ email, limit: 1 });
    if (existing.data.length > 0) {
      const customer = existing.data[0];
      if (customer.metadata?.newsletter !== "true") {
        await stripe.customers.update(customer.id, {
          metadata: { ...customer.metadata, newsletter: "true" },
        });
      }
    } else {
      await stripe.customers.create({
        email,
        description: "Newsletter signup (busybirdaustin.com)",
        metadata: { newsletter: "true", source: "site_footer" },
      });
    }
  } catch {
    return NextResponse.json(
      { error: "Something hiccuped on our end — please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
