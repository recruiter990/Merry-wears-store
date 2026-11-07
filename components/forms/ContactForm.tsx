"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
        }),
      });
      const json = await response.json();
      if (!response.ok) throw new Error(json.error || "Unable to send.");
      setStatus("ok");
      setMessage(json.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <label className="block text-sm">
        Name
        <input
          name="name"
          required
          className="mt-1 w-full border border-forest/20 bg-cream px-4 py-3 outline-none focus:border-forest"
        />
      </label>
      <label className="block text-sm">
        Email
        <input
          name="email"
          type="email"
          required
          className="mt-1 w-full border border-forest/20 bg-cream px-4 py-3 outline-none focus:border-forest"
        />
      </label>
      <label className="block text-sm">
        Topic
        <select
          name="topic"
          className="mt-1 w-full border border-forest/20 bg-cream px-4 py-3 outline-none focus:border-forest"
        >
          <option>Editorial question</option>
          <option>Collaboration</option>
          <option>Affiliate or correction</option>
          <option>Something else</option>
        </select>
      </label>
      <label className="block text-sm">
        Message
        <textarea
          name="message"
          required
          rows={6}
          className="mt-1 w-full border border-forest/20 bg-cream px-4 py-3 outline-none focus:border-forest"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-forest px-6 py-3 text-[12px] tracking-[0.18em] uppercase text-cream disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
      {message ? (
        <p className={status === "error" ? "text-sm text-burgundy" : "text-sm text-forest"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
