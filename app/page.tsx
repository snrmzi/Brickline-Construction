import Link from "next/link";
import Container from "@/components/ui/Container";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import CtaBanner from "@/components/sections/CtaBanner";
import { bricksPattern } from "@/lib/patterns";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: bricksPattern,
            backgroundSize: "64px 32px",
            maskImage: "linear-gradient(to left, black, transparent 70%)",
            WebkitMaskImage: "linear-gradient(to left, black, transparent 70%)",
          }}
        />
        <Container className="relative py-24 md:py-36">
          <h1 className="max-w-3xl font-heading text-5xl font-bold uppercase leading-[1.05] md:text-7xl">
            Built right. Built to last.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            New homes, commercial builds, and renovations, delivered at the
            price we quote and on the date we promise.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-accent px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Get a free quote
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-white/30 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              View our projects
            </Link>
          </div>
        </Container>
      </section>

      <ServicesSection />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
