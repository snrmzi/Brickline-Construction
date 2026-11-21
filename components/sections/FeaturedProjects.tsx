import Link from "next/link";
import Container from "@/components/ui/Container";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-heading text-4xl font-bold uppercase md:text-5xl">
            Recent work
          </h2>
          <Link href="/projects" className="font-semibold text-accent hover:underline">
            View all projects
          </Link>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((p) => (
            <li key={p.slug}>
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
