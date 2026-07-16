"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export interface PurchaseItem {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
}

interface PurchaseTrackerProps {
  sessionId: string;
  value: number;
  currency: string;
  items: PurchaseItem[];
}

// Fires the GA4 purchase event exactly once per Stripe session. The page
// only mounts this after server-verifying payment_status === "paid".
// The dedupe flag is written only AFTER a successful dispatch — if the
// event couldn't be sent (gtag missing), a refresh gets to retry.
export function PurchaseTracker({
  sessionId,
  value,
  currency,
  items,
}: PurchaseTrackerProps) {
  useEffect(() => {
    const key = `busybird_ga_purchase_${sessionId}`;
    try {
      if (localStorage.getItem(key)) return;
    } catch {
      // Private mode etc. — better a rare duplicate than a missed purchase.
    }
    const sent = trackEvent("purchase", {
      transaction_id: sessionId,
      value,
      currency,
      items,
    });
    if (sent) {
      try {
        localStorage.setItem(key, "1");
      } catch {
        // Same trade-off as above.
      }
    }
    // Props are per-session constants serialized by the server component;
    // the session id captures the event's identity.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  return null;
}
