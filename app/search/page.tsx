import { Suspense } from "react";
import { ArticleCard } from "@/components/article/ArticleCard";
import { SearchForm } from "@/components/forms/SearchForm";
import { Container } from "@/components/ui/Container";
import { searchArticles } from "@/content/articles";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Search",
  description: "Search Merry wears. stories about Christmas decorating, festive fashion and gifts.",
  path: "/search",
});

export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <Suspense fallback={<Container className="py-20">Loading search…</Container>}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}

async function SearchResults({
  searchParams,
}: {
  searchParams: PageProps<"/search">["searchParams"];
}) {
  const params = await searchParams;
  const query = typeof params.q === "string" ? params.q : "";
  const results = query ? searchArticles(query) : [];

  return (
    <Container className="py-16">
      <h1 className="font-serif text-5xl text-forest">Search</h1>
      <div className="mt-8 max-w-2xl">
        <SearchForm defaultValue={query} />
      </div>
      {query ? (
        <p className="mt-6 text-sm text-muted">
          {results.length} {results.length === 1 ? "story" : "stories"} for “{query}”
        </p>
      ) : (
        <p className="mt-6 text-sm text-muted">Try “velvet bows”, “gifts for her”, or “living room”.</p>
      )}
      <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {results.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </Container>
  );
}
