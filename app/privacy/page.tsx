import { LegalPage } from "@/components/legal/LegalPage";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy template for Merry wears., with placeholders for the site owner, analytics, cookies and third-party services.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="November 2025">
      <p>
        This is a structured privacy notice template for {site.name}. It is not a claim
        of GDPR, CCPA or any other legal compliance. Have it reviewed before you treat
        it as final.
      </p>
      <h2 className="font-serif text-2xl text-forest">Who we are</h2>
      <p>
        Site name: {site.name}. Operator: [SITE OWNER NAME]. Contact: [CONTACT EMAIL].
        No physical office is listed.
      </p>
      <h2 className="font-serif text-2xl text-forest">What we collect</h2>
      <p>
        If you use the contact or newsletter forms, we collect the details you submit
        (typically name, email and message). Server logs may include IP address and
        browser type as part of ordinary hosting.
      </p>
      <h2 className="font-serif text-2xl text-forest">Analytics and cookies</h2>
      <p>
        Analytics tool: [ANALYTICS PROVIDER, OR “none configured”]. Cookie tool:
        [COOKIE TOOL, OR “none configured”]. See the Cookie Policy for categories.
      </p>
      <h2 className="font-serif text-2xl text-forest">Affiliate and third parties</h2>
      <p>
        Product links may lead to Amazon or other retailers. Those sites have their own
        privacy policies. We do not control their cookies or account data.
      </p>
      <h2 className="font-serif text-2xl text-forest">How long we keep information</h2>
      <p>
        Contact messages: [RETENTION PERIOD]. Newsletter records: until you unsubscribe
        or we close the list. [Adjust after you choose a provider.]
      </p>
      <h2 className="font-serif text-2xl text-forest">Your choices</h2>
      <p>
        You may email [CONTACT EMAIL] to ask what we hold, or to request deletion of a
        newsletter record. Rights under specific privacy laws depend on your location
        and on how this site is actually configured.
      </p>
    </LegalPage>
  );
}
