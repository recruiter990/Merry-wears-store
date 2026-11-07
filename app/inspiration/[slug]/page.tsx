import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/ArticleBody";
import { ArticleCard } from "@/components/article/ArticleCard";
import { PinBoard } from "@/components/article/PinBoard";
import { ShareBar } from "@/components/article/ShareBar";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { site } from "@/content/site";
import { formatDate, siteUrl } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps<"/inspiration/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return createMetadata({
    title: article.seoTitle,
    description: article.seoDescription,
    path: `/inspiration/${article.slug}`,
    image: article.heroImage,
    imageAlt: article.heroAlt,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
  });
}

export default async function ArticlePage({ params }: PageProps<"/inspiration/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = relatedArticles(article);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          image: article.heroImage,
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: siteUrl(`/inspiration/${article.slug}`),
        }}
      />
      <Container className="py-10">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/inspiration", label: "Inspiration" },
            { label: article.title },
          ]}
        />
      </Container>
      <Container className="grid gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <header>
          <p className="text-[11px] uppercase tracking-[0.24em] text-burgundy">
            {article.category.replaceAll("-", " ")} · {article.readingMinutes} minute read
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-forest sm:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{article.excerpt}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-forest/60">
            Updated {formatDate(article.updatedAt)}
          </p>
        </header>
        <div className="hidden lg:block">
          <PinBoard title={article.title} kicker="Pinterest-ready 2:3" />
        </div>
      </Container>
      <div className="relative aspect-[16/9] w-full lg:aspect-[21/9]">
        <Image
          src={article.heroImage}
          alt={article.heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <Container className="grid gap-12 py-16 lg:grid-cols-[minmax(0,720px)_1fr]">
        <article>
          <div className="mb-8">
            <ShareBar
              path={`/inspiration/${article.slug}`}
              title={article.title}
              media={article.heroImage}
            />
          </div>
          <ArticleBody blocks={article.body} />
        </article>
        <aside className="space-y-8">
          <div className="lg:sticky lg:top-28">
            <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy">Save this story</p>
            <div className="mt-4 max-w-xs">
              <PinBoard title={article.title} kicker={site.wordmark} />
            </div>
            <p className="mt-3 text-xs leading-5 text-muted">
              Original pin artwork for saving. Use the Pinterest button to share with a
              descriptive caption — we do not auto-publish duplicate pins.
            </p>
            <ul className="mt-8 space-y-2 text-sm">
              {article.tags.map((tag) => (
                <li key={tag} className="text-muted">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </Container>
      <Container className="pb-20">
        <h2 className="font-serif text-3xl text-forest">Related stories</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
        <Link
          href="/inspiration"
          className="mt-8 inline-block text-[12px] uppercase tracking-[0.18em] text-forest"
        >
          Back to the journal
        </Link>
      </Container>
    </>
  );
}
