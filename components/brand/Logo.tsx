import { cx } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cx("inline-flex flex-col leading-none", className)}>
      <svg
        viewBox="0 0 420 72"
        aria-hidden="true"
        className={cx("h-9 w-auto sm:h-10", markClassName)}
      >
        <text
          x="0"
          y="52"
          fill="currentColor"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="44"
          letterSpacing="-1.2"
        >
          Merry &amp; Cozy
        </text>
      </svg>
      <span className="mt-1 font-serif text-[11px] tracking-[0.28em] uppercase text-current/70">
        Merry wears.
      </span>
    </span>
  );
}
