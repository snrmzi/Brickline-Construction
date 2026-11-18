import Link from "next/link";

export default function Home() {
  return (
    <section className="bg-charcoal text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-24 md:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
          Residential · Commercial · Renovation
        </p>
        <h1 className="max-w-3xl font-heading text-5xl font-bold uppercase leading-tight md:text-7xl">
          Built right. Built to last.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80">
          From new builds to full renovations, Brickline delivers on time, on
          budget, and to a standard you can see.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
          >
            View Our Projects
          </Link>
        </div>
      </div>
    </section>
  );
}