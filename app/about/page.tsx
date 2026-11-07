import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { photos } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Merry wears. is an independent editorial project helping people discover seasonal decoration ideas, festive clothing inspiration and thoughtful gifts.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[50vh]">
        <Image
          src={photos.cozyInterior}
          alt="A quietly styled living room"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest/50" />
        <Container className="relative flex min-h-[50vh] flex-col justify-end pb-12 pt-24 text-cream">
          <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "About" }]} />
          <h1 className="mt-6 font-serif text-5xl">About Merry wears.</h1>
        </Container>
      </section>
      <Container className="grid gap-12 py-16 lg:grid-cols-2">
        <div className="space-y-5 text-base leading-8 text-muted">
          <p>
            {site.wordmark} is the wordmark. {site.name} is the publication. The purpose is
            simple: help people discover seasonal decoration ideas, festive clothing
            inspiration and thoughtful gifts without turning the house into a catalogue.
          </p>
          <p>
            This is an affiliate recommendation and editorial website. It is not a store.
            We do not take checkout, hold inventory or ship products. When a product is
            mentioned, it is because it supports a decorating or gifting idea we have
            actually written about.
          </p>
          <p>
            The first collection is Christmas, with winter living beside it. The site is
            built so Valentine&apos;s Day, Easter, autumn and later winters can be introduced
            as editorial seasons — not as a redesign.
          </p>
          <p>
            We write for readers in the United States, roughly aged 20–45, who care about
            atmosphere: families matching for a photograph, couples dressing for dinner,
            anyone trying to make a rental living room feel like December.
          </p>
        </div>
        <aside className="h-fit border border-forest/15 p-8">
          <p className="font-serif text-2xl text-forest">{site.tagline}</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Independent of Amazon branding. Product links, when present, are labelled.
            Amazon Associates status is not claimed until the programme has approved the
            site.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/editorial-policy">Editorial policy</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact
            </ButtonLink>
          </div>
        </aside>
      </Container>
    </>
  );
}
