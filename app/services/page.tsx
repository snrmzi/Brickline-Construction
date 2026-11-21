import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial construction, renovation, roofing, interior fit-out, and project management from Brickline Construction.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services"
        intro="Everything from groundworks to final finishes, with one team accountable for the result."
      />
      <Container className="py-16">
        <ul className="border-t border-charcoal">
          {services.map((s) => (
            <li
              key={s.slug}
              id={s.slug}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-[1fr_1.4fr]"
            >
              <div>
                <h2 className="font-heading text-3xl font-semibold">{s.title}</h2>
                <p className="mt-2 text-muted">{s.summary}</p>
              </div>
              <ul className="space-y-2">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-0.5 w-4 shrink-0 bg-accent"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
      <CtaBanner />
    </>
  );
}
