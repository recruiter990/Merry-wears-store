import { LegalPage } from "@/components/legal/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Editorial Policy",
  description:
    "How Merry wears. researches, selects and updates product recommendations and seasonal stories.",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <LegalPage title="Editorial Policy" updated="November 2025">
      <p>
        Merry wears. publishes original decorating, fashion and gifting advice. Product
        cards are editorial recommendations, not items sold by this site.
      </p>
      <h2 className="font-serif text-2xl text-forest">How ideas are chosen</h2>
      <p>
        Stories start from a problem a reader might actually have: a tree that looks
        busy, a gift budget of thirty dollars, a family photograph. We do not write
        ten thin variations of the same list.
      </p>
      <h2 className="font-serif text-2xl text-forest">How products are selected</h2>
      <p>
        A product is listed when it supports a method in the article — lighting, ribbon,
        fibre, a better mug. We describe what to look for (wired edges, warm white
        light, named fibres) so you can judge a listing yourself.
      </p>
      <h2 className="font-serif text-2xl text-forest">What we will not invent</h2>
      <p>
        We do not invent prices, star ratings, stock levels, discounts, sales ranks or
        customer reviews. We do not scrape Amazon. Images on product cards are original
        editorial placeholders until you add approved product photography.
      </p>
      <h2 className="font-serif text-2xl text-forest">Updates</h2>
      <p>
        Articles carry an updated date. Seasonal stories should be reviewed at least
        once a year, or when a recommendation is no longer honest. Affiliate URLs live
        in <code>content/products.ts</code> so they can be changed without rewriting
        the essay.
      </p>
      <h2 className="font-serif text-2xl text-forest">Corrections</h2>
      <p>
        If something is wrong, use the contact form. Material corrections will be
        reflected in the article and, where needed, in the updated date.
      </p>
    </LegalPage>
  );
}
