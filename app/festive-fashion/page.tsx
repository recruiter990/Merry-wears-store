import { CategoryView } from "@/components/category/CategoryView";
import { getCategory } from "@/content/categories";
import { createMetadata } from "@/lib/seo";

const page = getCategory("festive-fashion")!;

export const metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/festive-fashion",
  image: page.heroImage,
  imageAlt: page.heroAlt,
});

export default function FestiveFashionPage() {
  return <CategoryView page={page} />;
}
