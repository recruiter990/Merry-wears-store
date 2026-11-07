import { ContactForm } from "@/components/forms/ContactForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Merry wears. about editorial questions, corrections, collaborations or affiliate disclosures. No physical office is listed because none is claimed.",
  path: "/contact",
});

export default function ContactPage() {
  const email = process.env.CONTACT_EMAIL;

  return (
    <Container className="py-16">
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Contact" }]} />
      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl text-forest">Contact</h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
            Write with a correction, a collaboration idea, or a question about a
            recommendation. We do not list a telephone number, registration number or
            street address, because inventing one would be dishonest.
          </p>
          {email ? (
            <p className="mt-6 text-sm">
              Email:{" "}
              <a className="text-forest underline" href={`mailto:${email}`}>
                {email}
              </a>
            </p>
          ) : (
            <p className="mt-6 text-sm text-muted">
              A public contact email will appear here once <code>CONTACT_EMAIL</code> is
              set in the site environment.
            </p>
          )}
        </div>
        <ContactForm />
      </div>
    </Container>
  );
}
