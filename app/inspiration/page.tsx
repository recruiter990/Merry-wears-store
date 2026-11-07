import Link from "next/link";
import { ArticleCard } from "@/components/article/ArticleCard";
import { SearchForm } from "@/components/forms/SearchForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { articleCategories, articlesByCategory } from "@/content/articles";
import { photos } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { paginate } from "@/lib/utils";
import { Suspense } from "react";

export const metadata = createMetadata({
  title: "Inspiration Journal",
  description:
    "Editorial Christmas and seasonal stories: tree decorating, festive fashion, gift advice and cozy home styling.",
  path: "/inspiration",
  image: photos.treeWhite,
  imageAlt: "A softly lit Christmas tree",
});

export default function InspirationPage({ searchParams }: PageProps<"/inspiration">) {
  return (
    <Suspense fallback={<Container className="py-20">Loading stories…</Container>}>
      <InspirationIndex searchParams={searchParams} />
    </Suspense>
  );
}

async function InspirationIndex({
  searchParams,
}: {
  searchParams: PageProps<"/inspiration">["searchParams"];
}) {
  const params = await searchParams;
  const category = typeof params.category === "string" ? params.category : "all";
  const page = Number(params.page || "1");
  const filtered = articlesByCategory(
    articleCategories.some((item) => item.value === category)
      ? (category as (typeof articleCategories)[number]["value"])
      : "all",
  );
  const paged = paginate(filtered, page, 6);

  return (
    <Container className="py-16">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Inspiration" }]} />
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.32em] text-burgundy">The journal</p>
          <h1 className="mt-3 font-serif text-5xl text-forest">Inspiration</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">
            Original decorating, dressing and gifting notes. Filter by desk, or search the archive.
          </p>
        </div>
        <SearchForm />
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {articleCategories.map((item) => {
          const active = item.value === category;
          const href =
            item.value === "all" ? "/inspiration" : `/inspiration?category=${item.value}`;
          return (
            <Link
              key={item.value}
              href={href}
              className={
                active
                  ? "bg-forest px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-cream"
                  : "border border-forest/20 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-forest"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {paged.items.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      {paged.totalPages > 1 ? (
        <nav className="mt-12 flex gap-3" aria-label="Pagination">
          {Array.from({ length: paged.totalPages }, (_, index) => {
            const number = index + 1;
            const query = new URLSearchParams();
            if (category !== "all") query.set("category", category);
            query.set("page", String(number));
            return (
              <Link
                key={number}
                href={`/inspiration?${query.toString()}`}
                className={
                  number === paged.page
                    ? "bg-forest px-3 py-2 text-cream"
                    : "border border-forest/20 px-3 py-2 text-forest"
                }
              >
                {number}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </Container>
  );
}
