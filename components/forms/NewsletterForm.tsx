"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          name: data.get("name"),
        }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("ok");
      setMessage(json.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to subscribe.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <label className="block">
        <span className="sr-only">First name</span>
        <input
          name="name"
          autoComplete="given-name"
          placeholder="First name"
          className="w-full border border-forest/20 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
        />
      </label>
      <label className="block">
        <span className="sr-only">Email</span>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email address"
          className="w-full border border-forest/20 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-forest px-4 py-3 text-[12px] tracking-[0.18em] uppercase text-cream disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Join the list"}
      </button>
      {message ? (
        <p className={status === "error" ? "text-sm text-burgundy" : "text-sm text-forest"}>
          {message}
        </p>
      ) : (
        <p className="text-xs leading-5 text-muted">
          Seasonal notes, not daily noise. You can unsubscribe at any time.
        </p>
      )}
    </form>
  );
}
