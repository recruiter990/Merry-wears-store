import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <Container className="py-16">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: title }]} />
      <h1 className="mt-8 font-serif text-5xl text-forest">{title}</h1>
      <p className="mt-3 text-xs uppercase tracking-[0.16em] text-muted">Updated {updated}</p>
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-charcoal">{children}</div>
    </Container>
  );
}
