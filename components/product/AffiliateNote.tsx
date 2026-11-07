import { site } from "@/content/site";

export function AffiliateNote({ compact = false }: { compact?: boolean }) {
  return (
    <p className={compact ? "text-xs leading-5 text-muted" : "text-sm leading-6 text-muted"}>
      Some links on this page may be affiliate links. If you buy through them,{" "}
      {site.name} may earn a commission at no additional cost to you.{" "}
      {site.amazonAssociatesActive
        ? site.amazonAssociateStatement
        : "Amazon Associates membership is not claimed until the programme has approved this site."}{" "}
      Recommendations are editorial. This site does not sell or ship these products.
    </p>
  );
}
