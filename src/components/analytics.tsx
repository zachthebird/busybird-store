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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
