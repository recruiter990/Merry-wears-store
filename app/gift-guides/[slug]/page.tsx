import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getArticle } from "@/content/articles";
import { giftGuides, getGiftGuide } from "@/content/gift-guides";
import { AffiliateNote } from "@/components/product/AffiliateNote";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return giftGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps<"/gift-guides/[slug]">) {
  const { slug } = await params;
  const guide = getGiftGuide(slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/gift-guides/${guide.slug}`,
    image: guide.image,
    imageAlt: guide.imageAlt,
  });
}

export default async function GiftGuidePage({ params }: PageProps<"/gift-guides/[slug]">) {
  const { slug } = await params;
  const guide = getGiftGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <section className="relative min-h-[55vh]">
        <Image src={guide.image} alt={guide.imageAlt} fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-forest/55" />
        <Container className="relative flex min-h-[55vh] flex-col justify-end pb-12 pt-24 text-cream">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/gift-guides", label: "Gift Guides" },
              { label: guide.title },
            ]}
          />
          <h1 className="mt-6 max-w-3xl font-serif text-5xl">{guide.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-cream/85">{guide.excerpt}</p>
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.24em] text-burgundy">How to shop this brief</p>
          <ul className="mt-6 space-y-4 text-base leading-8 text-charcoal">
            {guide.advice.map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>
        <aside className="h-fit border border-forest/15 bg-beige/40 p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-forest">Audience</p>
          <p className="mt-2 text-sm leading-6">{guide.audience}</p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.2em] text-forest">Budget note</p>
          <p className="mt-2 text-sm leading-6">{guide.budgetNote}</p>
          <div className="mt-6">
            <AffiliateNote compact />
          </div>
        </aside>
      </Container>
      <Container className="pb-16">
        <ProductGrid ids={guide.productIds} title="Selected recommendations" />
      </Container>
      <Container className="pb-20">
        <h2 className="font-serif text-3xl text-forest">Related reading</h2>
        <ul className="mt-6 space-y-2">
          {guide.relatedArticleSlugs.map((articleSlug) => {
            const article = getArticle(articleSlug);
            if (!article) return null;
            return (
              <li key={articleSlug}>
                <Link href={`/inspiration/${article.slug}`} className="text-forest hover:text-burgundy">
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </>
  );
}
