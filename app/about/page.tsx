import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brickline Construction is a family-run builder focused on honest pricing, clear communication, and work that lasts.",
};

const numbers = [
  ["Years in business", "18"],
  ["Projects completed", "120+"],
  ["Finished on schedule", "96%"],
  ["Staff on our own payroll", "42"],
];

const values = [
  {
    title: "Fixed prices",
    text: "You sign one price. If the scope changes, we write down the cost and you approve it before we start.",
  },
  {
    title: "One point of contact",
    text: "A named site manager answers your calls and sends a photo report every week.",
  },
  {
    title: "Clean, safe sites",
    text: "Tidy every evening, tools secured, neighbors informed. It is cheaper and kinder to do it right the first time.",
  },
];

const credentials = [
  "Licensed general contractor",
  "Fully insured, with $5M liability cover",
  "Safety-certified site supervisors",
  "10-year structural and 2-year workmanship warranty",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Brickline"
        intro="A family-run builder that grew by finishing what it started."
      />

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="max-w-prose space-y-4 leading-relaxed">
            <p>
              Brickline started in 2008 with two carpenters and a borrowed
              truck. Our first customers were neighbors who wanted a deck
              rebuilt, and they sent us the next ten jobs.
            </p>
            <p>
              Today we build homes, clinics, shops, and warehouses, but we run
              every job the same way: agree the price, agree the plan, tell
              the client what is happening, and fix anything that is not right.
            </p>
            <p>
              Most of our work comes from people who have hired us before, or
              from people they told about us. We would like to keep it that way.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-start border-t-2 border-charcoal pt-6">
            {numbers.map(([label, value]) => (
              <div key={label}>
                <dd className="font-heading text-4xl font-bold">{value}</dd>
                <dt className="mt-1 text-sm text-muted">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <section className="bg-surface py-16">
        <Container>
          <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">
            How we work
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <li key={v.title} className="border-t-2 border-charcoal pt-4">
                <h3 className="font-heading text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="py-16">
        <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">
          Licenses and cover
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {credentials.map((c) => (
            <li key={c} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 h-0.5 w-4 shrink-0 bg-accent" />
              {c}
            </li>
          ))}
        </ul>
      </Container>

      <Testimonials />
      <CtaBanner />
    </>
  );
}
