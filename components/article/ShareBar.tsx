"use client";

import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";

export function ShareBar({
  path,
  title,
  media,
}: {
  path: string;
  title: string;
  media: string;
}) {
  const url = siteUrl(path);
  const pin = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(title)}`;
  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em]">
      <span className="text-muted">Share</span>
      <a
        href={pin}
        className="border border-forest/20 px-3 py-2 text-forest hover:border-burgundy hover:text-burgundy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Save to Pinterest
      </a>
      <a
        href={facebook}
        className="border border-forest/20 px-3 py-2 text-forest hover:border-forest"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      {site.pinterestProfile ? (
        <a
          href={site.pinterestProfile}
          className="text-forest underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on Pinterest
        </a>
      ) : null}
    </div>
  );
}
