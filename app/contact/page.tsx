import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import QuoteForm from "@/components/forms/QuoteForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote from Brickline Construction. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Request a free quote"
        intro="Tell us about your project. We reply within one business day."
      />
      <Container className="grid gap-12 py-16 md:grid-cols-[1.5fr_1fr]">
        <QuoteForm />

        <aside className="space-y-8 self-start">
          <div>
            <h2 className="font-heading text-xl font-semibold">Call or email</h2>
            <p className="mt-2 text-muted">+1 (555) 010-2030</p>
            <p className="text-muted">hello@brickline.example</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold">Office hours</h2>
            <p className="mt-2 text-muted">Monday to Friday, 8am to 5pm</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-semibold">What happens next</h2>
            <p className="mt-2 text-muted">
              We call to understand the project, visit the site, and send a
              written quote within five working days.
            </p>
          </div>
        </aside>
      </Container>
    </>
  );
}
