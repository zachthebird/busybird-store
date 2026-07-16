"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

type FormState = "idle" | "sending" | "done" | "error";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (state === "sending") return;
    setState("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setState("done");
        trackEvent("generate_lead", { source: "site_footer" });
      } else {
        setState("error");
        setMessage(data.error ?? "Something went wrong — please try again.");
      }
    } catch {
      setState("error");
      setMessage("Something went wrong — please try again.");
    }
  };

  if (state === "done") {
    return (
      <p className="text-sm text-neutral/70">
        You&apos;re in the flock! We&apos;ll email you when new pieces land.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="flex-1 min-w-0 rounded-button bg-white/10 border border-neutral/20 px-4 py-2 text-sm text-neutral placeholder:text-neutral/40 focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          disabled={state === "sending"}
          className="rounded-button bg-primary text-white text-sm font-medium px-4 py-2 hover:bg-primary-hover transition-colors disabled:opacity-60 cursor-pointer"
        >
          {state === "sending" ? "Joining…" : "Join"}
        </button>
      </div>
      {state === "error" && (
        <p className="text-xs text-primary">{message}</p>
      )}
    </form>
  );
}
