import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, site, social } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/15 bg-forest text-cream">
      <Container className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo className="text-cream" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-cream/75">
            {site.tagline} An independent editorial guide to seasonal decorating,
            festive dressing and thoughtful gifts.
          </p>
        </div>
        <FooterColumn title="Explore" items={footerNav.explore} />
        <FooterColumn title="The house" items={footerNav.house} />
        <FooterColumn title="Policies" items={footerNav.legal} />
      </Container>
      <Container className="flex flex-col gap-3 border-t border-cream/15 py-6 text-xs tracking-[0.14em] uppercase text-cream/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {site.name} Editorial recommendations only.</p>
        <p className="flex gap-4">
          {social.pinterest ? (
            <a href={social.pinterest} className="hover:text-cream">
              Pinterest
            </a>
          ) : (
            <span>Pinterest profile coming soon</span>
          )}
          <Link href="/affiliate-disclosure" className="hover:text-cream">
            Disclosures
          </Link>
          <Link href="/contact" className="hover:text-cream">
            Contact
          </Link>
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-gold">{title}</p>
      <ul className="space-y-2 text-sm text-cream/80">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="hover:text-cream">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
