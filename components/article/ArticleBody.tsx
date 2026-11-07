import Image from "next/image";
import type { ContentBlock } from "@/content/types";
import { ProductGrid } from "@/components/product/ProductGrid";

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return (
            <p key={index} className="text-[1.05rem] leading-8 text-charcoal">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2 key={index} className="pt-6 font-serif text-3xl text-forest">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="font-serif text-2xl text-forest">
              {block.text}
            </h3>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="space-y-2 text-[1.05rem] leading-8 text-charcoal">
              {block.items.map((item) => (
                <li key={item} className="pl-1">
                  — {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="border-l-2 border-gold py-2 pl-5 font-serif text-2xl leading-snug text-forest"
            >
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "callout") {
          return (
            <aside key={index} className="border border-forest/15 bg-beige/60 p-6">
              <p className="text-[11px] uppercase tracking-[0.24em] text-burgundy">
                {block.title}
              </p>
              <p className="mt-2 leading-7 text-charcoal">{block.text}</p>
            </aside>
          );
        }
        if (block.type === "image") {
          return (
            <figure key={index} className="py-2">
              <div className={block.vertical ? "relative mx-auto aspect-[2/3] max-w-md" : "relative aspect-[16/10]"}>
                <Image
                  src={block.src}
                  alt={block.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 720px, 100vw"
                />
              </div>
              {block.caption ? (
                <figcaption className="mt-3 text-sm italic text-muted">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "products") {
          return <ProductGrid key={index} ids={block.ids} title="Related recommendations" />;
        }
        return null;
      })}
    </div>
  );
}
