import { getProducts } from "@/content/products";
import { AffiliateNote } from "./AffiliateNote";
import { ProductCard } from "./ProductCard";

export function ProductGrid({
  ids,
  title = "Editorial recommendations",
}: {
  ids: string[];
  title?: string;
}) {
  const items = getProducts(ids);
  if (!items.length) return null;

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-serif text-3xl text-forest">{title}</h2>
        <div className="max-w-md">
          <AffiliateNote compact />
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
