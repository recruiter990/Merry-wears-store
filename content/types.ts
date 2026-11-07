export type Season = "christmas" | "winter" | "valentines" | "easter" | "autumn";

export type ArticleCategory =
  | "christmas-decor"
  | "festive-fashion"
  | "gift-guides"
  | "home-living";

export type ProductCategory =
  | "tree-decorations"
  | "home-decor"
  | "festive-fashion"
  | "gifts"
  | "winter-essentials"
  | "lighting";

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string; vertical?: boolean }
  | { type: "products"; ids: string[] };

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  features: string[];
  editorialNote?: string;
  image: string;
  imageAlt: string;
  amazonUrl: string | null;
  priceNote?: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  heroImage: string;
  heroAlt: string;
  pinImage: string;
  pinAlt: string;
  seoTitle: string;
  seoDescription: string;
  relatedProductIds: string[];
  relatedArticleSlugs: string[];
  body: ContentBlock[];
};

export type CategoryPage = {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  heroImage: string;
  heroAlt: string;
  subcategories: { name: string; description: string; image: string; imageAlt: string }[];
  guides: { title: string; text: string }[];
  productIds: string[];
  articleSlugs: string[];
};

export type GiftGuide = {
  slug: string;
  title: string;
  excerpt: string;
  audience: string;
  budgetNote: string;
  advice: string[];
  productIds: string[];
  relatedArticleSlugs: string[];
  image: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
};

export type Collection = {
  slug: string;
  season: Season;
  title: string;
  description: string;
  active: boolean;
  image: string;
  imageAlt: string;
  href: string;
};

export type NavItem = {
  href: string;
  label: string;
};
