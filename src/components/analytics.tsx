import Script from "next/script";

// Google Analytics 4, dormant until NEXT_PUBLIC_GA_MEASUREMENT_ID is set
// (a public G-XXXXXXXXXX identifier, not a secret). NEXT_PUBLIC_ vars are
// inlined at build time, so activating this means: set the var in Vercel,
// redeploy. With the var unset this renders nothing and ships no bytes.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  if (!GA_ID) return null;
  return (
    <>
      {/* The gtag stub + config MUST be a plain inline script (executed
          during document parse) so window.gtag exists before hydration
          effects fire events. next/script "afterInteractive" injects from
          a useEffect that runs AFTER page islands' effects, which silently
          dropped every event fired on a hard load — including purchase on
          the Stripe redirect and view_item on ad/search landings. The
          remote library loads async below and drains the dataLayer queue. */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
        }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
    </>
  );
}
