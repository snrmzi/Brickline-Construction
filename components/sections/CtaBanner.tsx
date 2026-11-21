import Link from "next/link";
import Container from "@/components/ui/Container";

export default function CtaBanner() {
  return (
    <section className="bg-accent text-white">
      <Container className="flex flex-wrap items-center justify-between gap-6 py-14">
        <div>
          <h2 className="font-heading text-3xl font-bold uppercase md:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-2 max-w-xl text-white/90">
            Tell us what you want to build. We reply within one business day.
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-md bg-charcoal px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Request a free quote
        </Link>
      </Container>
    </section>
  );
}
