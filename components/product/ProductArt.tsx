const palettes: Record<string, { bg: string; ink: string; accent: string }> = {
  default: { bg: "#F8F3E9", ink: "#173B32", accent: "#8E2637" },
  gold: { bg: "#E8DDCC", ink: "#173B32", accent: "#C5A46D" },
  deep: { bg: "#173B32", ink: "#F8F3E9", accent: "#C5A46D" },
};

export function ProductArt({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  const tone =
    id.includes("light") || id.includes("lantern")
      ? palettes.deep
      : id.includes("gold") || id.includes("journal")
        ? palettes.gold
        : palettes.default;

  return (
    <svg viewBox="0 0 640 800" className="h-full w-full" role="img" aria-label={title}>
      <rect width="640" height="800" fill={tone.bg} />
      <rect x="36" y="36" width="568" height="728" fill="none" stroke={tone.ink} strokeOpacity="0.25" />
      <circle cx="320" cy="330" r="118" fill="none" stroke={tone.accent} strokeWidth="2" />
      <path
        d="M250 330c20-70 120-70 140 0  -20 70-120 70-140 0z"
        fill={tone.accent}
        fillOpacity="0.85"
      />
      <path d="M320 210v240" stroke={tone.ink} strokeWidth="1.5" />
      <text
        x="320"
        y="560"
        textAnchor="middle"
        fill={tone.ink}
        fontFamily="Georgia, serif"
        fontSize="22"
      >
        Merry &amp; Cozy
      </text>
      <text
        x="320"
        y="600"
        textAnchor="middle"
        fill={tone.ink}
        fontSize="11"
        letterSpacing="3"
        opacity="0.7"
      >
        EDITORIAL PLACEHOLDER
      </text>
    </svg>
  );
}
