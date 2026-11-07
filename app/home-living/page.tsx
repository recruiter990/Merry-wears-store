import { CategoryView } from "@/components/category/CategoryView";
import { getCategory } from "@/content/categories";
import { createMetadata } from "@/lib/seo";

const page = getCategory("home-living")!;

export const metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/home-living",
  image: page.heroImage,
  imageAlt: page.heroAlt,
});

export default function HomeLivingPage() {
  return <CategoryView page={page} />;
}
