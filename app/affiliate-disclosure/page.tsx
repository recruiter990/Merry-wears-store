import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Affiliate Disclosure",
  description:
    "How Merry wears. handles affiliate links, including the Amazon Associates statement when membership is active.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage title="Affiliate Disclosure" updated="November 2025">
      <p>
        Some links on {site.name} may generate a commission if you buy something. That
        commission comes from the retailer, at no additional cost to you. It does not
        change the editorial standard described in our Editorial Policy.
      </p>
      <p>
        This website is independent. It is not an Amazon store, does not use Amazon
        branding as its logo, and does not claim to be an official Amazon partner.
      </p>
      {site.amazonAssociatesActive ? (
        <p>{site.amazonAssociateStatement}</p>
      ) : (
        <p>
          Amazon Associates membership is not active on this deployment. When it is
          approved, set <code>NEXT_PUBLIC_AMAZON_ASSOCIATES_ACTIVE=true</code> so the
          following statement appears next to relevant links: “{site.amazonAssociateStatement}”
        </p>
      )}
      <p>
        Product cards that say “Amazon link coming soon” have no affiliate destination
        yet. Do not treat them as live offers, prices or availability.
      </p>
    </LegalPage>
  );
}
