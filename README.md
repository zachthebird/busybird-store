# BusyBird Store

Storefront for [BusyBird](https://busybirdaustin.com) — playful, handcrafted 3D-printed resin jewelry made in Austin, TX.

## Stack

- [Next.js](https://nextjs.org) (App Router) + React + TypeScript
- Tailwind CSS 4
- [zustand](https://github.com/pmndrs/zustand) for the persisted cart
- [Stripe Checkout](https://stripe.com/payments/checkout) for payments

## Development

```bash
npm install
npm run dev   # http://localhost:3000
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `STRIPE_SECRET_KEY` | Enables checkout. Without it, the Checkout button shows a friendly "coming soon" message. Use a `sk_test_...` key for test mode, `sk_live_...` for real payments. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, sitemap, and Stripe product images. Defaults to `https://busybirdaustin.com`. |

## How checkout works

The cart drawer posts `{ items: [{ slug, quantity }] }` to `POST /api/checkout`
([src/app/api/checkout/route.ts](src/app/api/checkout/route.ts)). Prices and
availability are validated server-side against the catalog in
[src/lib/products.ts](src/lib/products.ts) — the client never sets prices.
The route creates a Stripe Checkout Session (shipping to US/CA/UK, rates
mirroring the [/shipping](src/app/shipping/page.tsx) page) and redirects to
Stripe. On success, customers land on `/checkout/success` and the cart clears.

Orders appear in the [Stripe dashboard](https://dashboard.stripe.com/payments).

## Catalog

Products live in [src/lib/products.ts](src/lib/products.ts). Set
`available: true` to make a product purchasable; `badge: "Coming Soon"` items
display but can't be bought. Product images go in `public/products/`.

## Deploy

Deployed on Vercel; pushes to `main` deploy to production.
