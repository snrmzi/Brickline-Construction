import Link from "next/link";
import Container from "@/components/ui/Container";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="font-heading text-4xl font-bold uppercase leading-tight md:text-5xl">
            What we build
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            New homes, commercial spaces, and renovations, all run by one
            team from first site visit to final handover.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-block font-semibold text-accent hover:underline"
          >
            See all services
          </Link>
        </div>

        <ul className="border-t border-charcoal">
          {services.map((s) => (
            <li key={s.slug} className="border-b border-line py-5">
              <h3 className="font-heading text-2xl font-semibold">{s.title}</h3>
              <p className="mt-1 text-muted">{s.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
