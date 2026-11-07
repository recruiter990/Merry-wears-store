import type { Article, ArticleCategory } from "./types";
import { articlesPartA } from "./articles-part-a";
import { articlesPartB } from "./articles-part-b";

export const articles: Article[] = [...articlesPartA, ...articlesPartB].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesByCategory(category?: ArticleCategory | "all") {
  if (!category || category === "all") return articles;
  return articles.filter((article) => article.category === category);
}

export function relatedArticles(article: Article) {
  return article.relatedArticleSlugs
    .map((slug) => getArticle(slug))
    .filter((item): item is Article => Boolean(item));
}

export function searchArticles(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return articles;
  return articles.filter((article) => {
    const haystack = [
      article.title,
      article.excerpt,
      article.seoDescription,
      article.tags.join(" "),
      article.body
        .map((block) => {
          if ("text" in block) return block.text;
          if (block.type === "list") return block.items.join(" ");
          return "";
        })
        .join(" "),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}

export const articleCategories: { value: ArticleCategory | "all"; label: string }[] = [
  { value: "all", label: "All stories" },
  { value: "christmas-decor", label: "Christmas Decor" },
  { value: "festive-fashion", label: "Festive Fashion" },
  { value: "gift-guides", label: "Gift Guides" },
  { value: "home-living", label: "Home & Living" },
];
