import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/content/types";
import { formatDate } from "@/lib/utils";

export function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  return (
    <article className={featured ? "grid gap-6 md:grid-cols-2" : "flex flex-col"}>
      <Link href={`/inspiration/${article.slug}`} className="group overflow-hidden">
        <div className={featured ? "relative aspect-[4/5] md:aspect-[3/4]" : "relative aspect-[2/3]"}>
          <Image
            src={article.heroImage}
            alt={article.heroAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes={featured ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[11px] uppercase tracking-[0.24em] text-burgundy">
          {article.category.replaceAll("-", " ")} · {article.readingMinutes} min
        </p>
        <h3 className="mt-2 font-serif text-2xl text-forest md:text-[1.7rem]">
          <Link href={`/inspiration/${article.slug}`} className="hover:text-burgundy">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{article.excerpt}</p>
        <p className="mt-auto pt-4 text-xs uppercase tracking-[0.16em] text-forest/60">
          {formatDate(article.publishedAt)}
        </p>
      </div>
    </article>
  );
}
