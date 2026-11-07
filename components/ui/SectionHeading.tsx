import { cx } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx(align === "center" && "text-center mx-auto max-w-2xl")}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-burgundy">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl text-forest sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
