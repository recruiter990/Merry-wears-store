import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/article/ArticleCard";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/content/articles";
import { collections } from "@/content/collections";
import { site } from "@/content/site";
import { photos } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: site.defaultTitle,
  description: site.description,
  path: "/",
  image: photos.treeLit,
  imageAlt: "A warmly lit Christmas tree in a dark living room",
});

const featuredCategories = [
  {
    title: "Christmas Tree Decorations",
    href: "/christmas-decor",
    image: photos.ornaments,
    alt: "Christmas ornaments styled for a tree",
  },
  {
    title: "Christmas Home Decor",
    href: "/christmas-decor",
    image: photos.livingChristmas,
    alt: "A living room decorated for Christmas",
  },
  {
    title: "Festive Sweatshirts",
    href: "/festive-fashion",
    image: photos.knit,
    alt: "A cream knit sweater",
  },
  {
    title: "Matching Family Outfits",
    href: "/festive-fashion",
    image: photos.familyTable,
    alt: "A family gathered at a holiday table",
  },
  {
    title: "Christmas Gifts",
    href: "/gift-guides",
    image: photos.gifts,
    alt: "Wrapped Christmas gifts",
  },
  {
    title: "Cozy Winter Essentials",
    href: "/home-living",
    image: photos.cozyInterior,
    alt: "A cozy winter living room",
  },
];

export default function Home() {
  const featuredStory = articles.find(
    (article) => article.slug === "luxury-christmas-tree-on-a-budget",
  )!;
  const giftStory = articles.find(
    (article) => article.slug === "thoughtful-christmas-gifts-for-her",
  )!;
  const moreStories = articles.filter(
    (article) =>
      article.slug !== featuredStory.slug && article.slug !== giftStory.slug,
  ).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src={photos.treeLit}
          alt="A glowing indoor Christmas tree with warm white lights"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest/55 to-transparent" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-20 pt-32 text-cream">
          <p className="text-[12px] uppercase tracking-[0.34em] text-gold">{site.wordmark}</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">
            Make Every Corner a Little More Magical.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cream/85">
            Discover beautiful Christmas decorations, cozy festive fashion, thoughtful gifts
            and inspiration for creating unforgettable holiday moments.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/christmas-decor">Explore Christmas Decor</ButtonLink>
            <ButtonLink href="/gift-guides" variant="secondary" className="border-cream/40 text-cream hover:bg-cream hover:text-forest">
              Discover Gift Ideas
            </ButtonLink>
          </div>
        </Container>
      </section>

      <Container className="py-20">
        <SectionHeading
          eyebrow="The winter house"
          title="Featured categories"
          description="Six ways into the season, written as a magazine would file them — not as a shop navigation."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {featuredCategories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className={
                index === 0
                  ? "group relative min-h-80 md:col-span-3 md:row-span-2"
                  : index === 1
                    ? "group relative min-h-52 md:col-span-3"
                    : "group relative min-h-52 md:col-span-3 lg:col-span-1 lg:min-h-64 md:min-h-64"
              }
            >
              <Image
                src={category.image}
                alt={category.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-forest/40 transition-colors group-hover:bg-forest/30" />
              <span className="absolute bottom-5 left-5 font-serif text-2xl text-cream md:text-3xl">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
      </Container>

      <section className="bg-forest text-cream">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="relative aspect-[3/4]">
            <Image
              src={featuredStory.heroImage}
              alt={featuredStory.heroAlt}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">Editorial feature</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              The Art of a Beautiful Christmas Tree
            </h2>
            <p className="mt-6 text-lg leading-8 text-cream/80">
              Luxury on a tree is not a designer ornament set. It is light, scale, repetition
              and the discipline to stop shopping once the palette is set. Start here if you
              want the room to feel considered after dark.
            </p>
            <div className="mt-8">
              <ButtonLink href={`/inspiration/${featuredStory.slug}`} variant="gold">
                Read the feature
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="This season"
            title="A gift guide with a point of view"
            description="Start with how someone actually spends their evenings. Then upgrade one daily object, wrap it as if it cost more, and resist the filler set."
          />
          <div className="mt-10">
            <ButtonLink href="/gift-guides">Open the gift guides</ButtonLink>
          </div>
        </div>
        <ArticleCard article={giftStory} />
      </Container>

      <Container className="py-10">
        <ProductGrid
          ids={["velvet-tree-bows", "warm-white-lights", "family-sweatshirts"]}
          title="Featured recommendations"
        />
      </Container>

      <Container className="py-20">
        <SectionHeading eyebrow="The journal" title="Christmas inspiration" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {moreStories.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/inspiration" variant="secondary">
            Visit the journal
          </ButtonLink>
        </div>
      </Container>

      <section className="bg-beige/70">
        <Container className="py-20">
          <SectionHeading
            eyebrow="The year ahead"
            title="Seasonal collections"
            description="Christmas opens the house. Winter living stays. Valentine's Day, Easter and autumn are reserved for later editorial drops — the structure is already here."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {collections.map((collection) => (
              <Link
                key={collection.slug}
                href={collection.active ? collection.href : "/inspiration"}
                className="group border border-forest/10 bg-cream"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={collection.image}
                    alt={collection.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="33vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-burgundy">
                    {collection.active ? "Now showing" : "Coming later"}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-forest">{collection.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{collection.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Container className="grid items-center gap-12 py-20 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The list"
            title="Notes from the house"
            description="Short seasonal dispatches: tree palettes, dressing notes, a gift worth wrapping. No daily noise."
          />
        </div>
        <div className="border border-forest/15 p-8">
          <NewsletterForm />
        </div>
      </Container>

      <section className="border-t border-forest/10">
        <Container className="grid gap-10 py-20 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-burgundy">The house</p>
            <h2 className="mt-3 font-serif text-4xl text-forest">Why Merry wears. exists</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-muted">
            <p>
              {site.wordmark} is the masthead. {site.name} is the site. Together they are an
              independent editorial project for people who want Christmas — and the quieter
              seasons around it — to feel considered rather than crowded.
            </p>
            <p>
              We do not sell inventory, take orders or ship parcels. We write decorating
              advice, clothing notes and gift frameworks, then point to products when a
              recommendation is useful. When Amazon links are added, they will be labelled
              clearly. Until then, the cards remain honest placeholders.
            </p>
            <Link href="/about" className="inline-block text-[12px] uppercase tracking-[0.18em] text-forest">
              Read the full story
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
