"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

interface PurchaseTrackerProps {
  sessionId: string;
  value: number;
  currency: string;
}

// Fires the GA4 purchase event exactly once per Stripe session. The page
// only mounts this after server-verifying payment_status === "paid", and
// refreshes/revisits are deduped via localStorage.
export function PurchaseTracker({
  sessionId,
  value,
  currency,
}: PurchaseTrackerProps) {
  useEffect(() => {
    const key = `busybird_ga_purchase_${sessionId}`;
    try {
      if (localStorage.getItem(key)) return;
      localStorage.setItem(key, "1");
    } catch {
      // Private mode etc. — better a rare duplicate than a missed purchase.
    }
    trackEvent("purchase", {
      transaction_id: sessionId,
      value,
      currency,
    });
  }, [sessionId, value, currency]);

  return null;
}
