import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProjectCover from "@/components/projects/ProjectCover";
import CtaBanner from "@/components/sections/CtaBanner";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    ["Type", project.category],
    ["Location", project.location],
    ["Completed", String(project.year)],
    ["Duration", project.duration],
    ["Floor area", project.area],
    ["Budget", project.budget],
  ];

  return (
    <>
      <ProjectCover category={project.category} className="h-56 md:h-80" />

      <Container className="py-14">
        <Link href="/projects" className="text-sm font-medium text-accent hover:underline">
          Back to all projects
        </Link>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold uppercase leading-tight md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.summary}</p>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-10">
            <section>
              <h2 className="font-heading text-2xl font-semibold">The challenge</h2>
              <p className="mt-3 max-w-prose leading-relaxed">{project.challenge}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl font-semibold">The result</h2>
              <p className="mt-3 max-w-prose leading-relaxed">{project.result}</p>
            </section>
            <section>
              <h2 className="font-heading text-2xl font-semibold">Scope of work</h2>
              <ul className="mt-3 space-y-2">
                {project.scope.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-0.5 w-4 shrink-0 bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Styled like the title block on a construction drawing. */}
          <aside aria-label="Project details" className="self-start border-2 border-charcoal bg-surface">
            <dl>
              {facts.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[7rem_1fr] border-b border-charcoal/30 last:border-b-0"
                >
                  <dt className="border-r border-charcoal/30 bg-background px-4 py-3 text-sm text-muted">
                    {label}
                  </dt>
                  <dd className="px-4 py-3 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <nav
          aria-label="More projects"
          className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2"
        >
          <Link href={`/projects/${prev.slug}`} className="group">
            <span className="text-sm text-muted">Previous project</span>
            <span className="block font-heading text-xl font-semibold group-hover:text-accent">
              {prev.title}
            </span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group sm:text-right">
            <span className="text-sm text-muted">Next project</span>
            <span className="block font-heading text-xl font-semibold group-hover:text-accent">
              {next.title}
            </span>
          </Link>
        </nav>
      </Container>

      <CtaBanner />
    </>
  );
}
