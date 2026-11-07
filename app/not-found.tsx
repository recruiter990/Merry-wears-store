import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-20">
      <p className="text-[11px] uppercase tracking-[0.28em] text-burgundy">404</p>
      <h1 className="mt-3 font-serif text-5xl text-forest">This page has been packed away.</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
        The address does not match a story, guide or policy in this house. Head back to the
        journal, or start with Christmas decor.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/inspiration" variant="secondary">
          Inspiration
        </ButtonLink>
      </div>
    </Container>
  );
}
