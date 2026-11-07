import { articles } from "@/content/articles";
import { giftGuides } from "@/content/gift-guides";
import { siteUrl } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/christmas-decor",
    "/festive-fashion",
    "/gift-guides",
    "/home-living",
    "/inspiration",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/affiliate-disclosure",
    "/terms",
    "/editorial-policy",
    "/search",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: siteUrl(path || "/"),
      lastModified: new Date("2025-11-13"),
    })),
    ...giftGuides.map((guide) => ({
      url: siteUrl(`/gift-guides/${guide.slug}`),
      lastModified: new Date("2025-11-13"),
    })),
    ...articles.map((article) => ({
      url: siteUrl(`/inspiration/${article.slug}`),
      lastModified: new Date(article.updatedAt),
    })),
  ];
}
