import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { giftGuides } from "@/content/gift-guides";
import { photos } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Christmas Gift Guides",
  description:
    "Editorial Christmas gift guides for her, him, couples, parents, children, budgets and stockings — with buying advice and placeholder product recommendations.",
  path: "/gift-guides",
  image: photos.gifts,
  imageAlt: "Wrapped Christmas gifts with ribbon",
});

export default function GiftGuidesPage() {
  return (
    <>
      <section className="relative min-h-[60vh]">
        <Image src={photos.gifts} alt="Wrapped Christmas gifts" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-forest/55" />
        <Container className="relative flex min-h-[60vh] flex-col justify-end pb-14 pt-24 text-cream">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Gift Guides" }]} />
          <h1 className="mt-6 font-serif text-5xl sm:text-6xl">Gift Guides</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/85">
            Ten ways to give something that will still make sense in January. No fake reviews,
            no invented prices — just buying advice you can act on.
          </p>
        </Container>
      </section>
      <Container className="grid gap-8 py-16 md:grid-cols-2">
        {giftGuides.map((guide) => (
          <Link key={guide.slug} href={`/gift-guides/${guide.slug}`} className="group border border-forest/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={guide.image}
                alt={guide.imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                sizes="50vw"
              />
            </div>
            <div className="p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-burgundy">{guide.audience}</p>
              <h2 className="mt-2 font-serif text-3xl text-forest">{guide.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{guide.excerpt}</p>
            </div>
          </Link>
        ))}
      </Container>
    </>
  );
}
