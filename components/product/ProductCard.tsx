import type { Product } from "@/content/types";
import { AffiliateNote } from "./AffiliateNote";
import { ProductArt } from "./ProductArt";

export function ProductCard({ product }: { product: Product }) {
  const hasLink = Boolean(product.amazonUrl);

  return (
    <article className="flex h-full flex-col border border-forest/15 bg-cream">
      <div className="aspect-[4/5] overflow-hidden border-b border-forest/10 bg-beige">
        <ProductArt id={product.id} title={product.name} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy">
          {product.category.replaceAll("-", " ")}
        </p>
        <h3 className="mt-2 font-serif text-2xl text-forest">{product.name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{product.shortDescription}</p>
        <ul className="mt-4 space-y-1 text-sm text-charcoal">
          {product.features.map((feature) => (
            <li key={feature}>— {feature}</li>
          ))}
        </ul>
        {product.editorialNote ? (
          <p className="mt-4 border-l border-gold pl-3 text-sm italic text-forest">
            {product.editorialNote}
          </p>
        ) : null}
        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-muted">
          {product.priceNote || "Live price is shown on Amazon when a link is added."}
        </p>
        <div className="mt-auto pt-5">
          {hasLink ? (
            <a
              href={product.amazonUrl!}
              className="inline-flex w-full items-center justify-center bg-forest px-4 py-3 text-[12px] tracking-[0.16em] uppercase text-cream hover:bg-forest-deep"
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              View Product on Amazon
            </a>
          ) : (
            <p className="border border-dashed border-forest/30 px-4 py-3 text-center text-[12px] tracking-[0.14em] uppercase text-muted">
              Amazon link coming soon
            </p>
          )}
          <div className="mt-3">
            <AffiliateNote compact />
          </div>
        </div>
      </div>
    </article>
  );
}
