import Image from "next/image";
import Link from "next/link";
import { getArticle } from "@/content/articles";
import type { CategoryPage } from "@/content/types";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CategoryView({ page }: { page: CategoryPage }) {
  const related = page.articleSlugs
    .map((slug) => getArticle(slug))
    .filter((article): article is NonNullable<typeof article> => Boolean(article));

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src={page.heroImage}
          alt={page.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/55" />
        <Container className="relative flex min-h-[70vh] flex-col justify-end pb-16 pt-28 text-cream">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: page.title },
            ]}
          />
          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-gold">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-tight sm:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-cream/85">{page.description}</p>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="Look closer"
          title="Editorial chapters"
          description="Each chapter is a decorating or dressing idea, not a department of a shop."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {page.subcategories.map((item, index) => (
            <article
              key={item.name}
              className={index === 0 ? "relative min-h-80 sm:col-span-2" : "relative min-h-72"}
            >
              <Image src={item.image} alt={item.imageAlt} fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-forest/45" />
              <div className="relative flex h-full flex-col justify-end p-6 text-cream">
                <h2 className="font-serif text-3xl">{item.name}</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-cream/85">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>

      <Container className="grid gap-10 py-10 md:grid-cols-3">
        {page.guides.map((guide) => (
          <article key={guide.title} className="border-t border-forest/20 pt-6">
            <h2 className="font-serif text-2xl text-forest">{guide.title}</h2>
            <p className="mt-3 text-sm leading-7 text-muted">{guide.text}</p>
          </article>
        ))}
      </Container>

      <Container className="py-16">
        <ProductGrid ids={page.productIds} title="Pieces we would actually use" />
      </Container>

      <Container className="py-16">
        <div className="mb-10 flex items-end justify-between">
          <SectionHeading eyebrow="Keep reading" title="Related stories" />
          <Link href="/inspiration" className="hidden text-[12px] uppercase tracking-[0.18em] text-forest sm:inline">
            All inspiration
          </Link>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {related.slice(0, 3).map((article) =>
            article ? <ArticleCard key={article.slug} article={article} /> : null,
          )}
        </div>
      </Container>
    </>
  );
}
