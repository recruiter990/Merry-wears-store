import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Terms of use for the Merry wears. editorial website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" updated="November 2025">
      <p>
        By using {site.name}, you agree to these terms. The site provides editorial
        information and optional product links. It does not sell goods to you.
      </p>
      <h2 className="font-serif text-2xl text-forest">No store, no fulfilment</h2>
      <p>
        Any purchase you make happens on a third-party site, under that site&apos;s terms.
        We are not responsible for stock, shipping, returns or product safety claims
        made by retailers.
      </p>
      <h2 className="font-serif text-2xl text-forest">Content</h2>
      <p>
        Original articles, illustrations and layout are provided for personal reading.
        Do not copy the journal wholesale. Product names remain the retailers&apos; or
        manufacturers&apos;.
      </p>
      <h2 className="font-serif text-2xl text-forest">Accuracy</h2>
      <p>
        We aim to keep decorating advice useful. Product details can change. Confirm
        size, materials and price on the retailer page before you buy.
      </p>
      <h2 className="font-serif text-2xl text-forest">Operator</h2>
      <p>Operator: [SITE OWNER NAME]. Contact: [CONTACT EMAIL].</p>
    </LegalPage>
  );
}
