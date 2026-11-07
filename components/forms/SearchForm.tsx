"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function SearchForm({ defaultValue = "" }: { defaultValue?: string }) {
  const router = useRouter();
  const [value, setValue] = useState(defaultValue);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const params = new URLSearchParams();
        if (value.trim()) params.set("q", value.trim());
        router.push(`/search?${params.toString()}`);
      }}
      className="flex gap-2"
    >
      <label className="sr-only" htmlFor="site-search">
        Search articles
      </label>
      <input
        id="site-search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search decorating, fashion, gifts…"
        className="w-full border border-forest/20 bg-cream px-4 py-3 text-sm outline-none focus:border-forest"
      />
      <button
        type="submit"
        className="bg-forest px-5 py-3 text-[12px] tracking-[0.16em] uppercase text-cream"
      >
        Search
      </button>
    </form>
  );
}
