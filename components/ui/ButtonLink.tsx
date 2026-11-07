import Link from "next/link";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "gold";

const styles: Record<Variant, string> = {
  primary:
    "bg-forest text-cream hover:bg-forest-deep border border-forest",
  secondary:
    "bg-transparent text-forest border border-forest/30 hover:border-forest hover:bg-forest hover:text-cream",
  ghost: "bg-transparent text-forest underline-offset-4 hover:underline",
  gold: "bg-gold text-forest-deep border border-gold hover:bg-cream",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = cx(
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-[13px] tracking-[0.16em] uppercase transition-colors duration-300",
    styles[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer sponsored">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
