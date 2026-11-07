import { LegalPage } from "@/components/legal/LegalPage";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: "Cookie policy template for Merry wears., including placeholders for analytics and affiliate cookies.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy" updated="November 2025">
      <p>
        This template describes cookie categories that may be used once you configure
        them. It is not a complete consent solution and does not by itself make the
        site compliant with any cookie law.
      </p>
      <h2 className="font-serif text-2xl text-forest">Essential</h2>
      <p>
        Cookies required to deliver the site, remember a cookie banner choice, or
        protect forms. [List actual cookies after launch.]
      </p>
      <h2 className="font-serif text-2xl text-forest">Analytics</h2>
      <p>
        [ANALYTICS PROVIDER] may set cookies to understand which stories are read.
        Leave this section as “not in use” until a tool is installed.
      </p>
      <h2 className="font-serif text-2xl text-forest">Affiliate and advertising</h2>
      <p>
        Amazon and other retailers may set cookies if you follow a product link. Those
        cookies are governed by the retailer, not by Merry wears.
      </p>
      <h2 className="font-serif text-2xl text-forest">How to change your mind</h2>
      <p>
        Use your browser settings to block or delete cookies. A dedicated preference
        centre can be added when you install a consent tool.
      </p>
    </LegalPage>
  );
}
