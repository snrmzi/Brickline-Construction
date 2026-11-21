import Link from "next/link";
import ProjectCover from "@/components/projects/ProjectCover";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-md border border-line bg-surface"
    >
      <ProjectCover category={project.category} className="aspect-[4/3]" />
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-heading text-2xl font-semibold leading-tight group-hover:text-accent">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-muted">{project.category}</span>
        </div>
        <p className="mt-1 text-sm text-muted">
          {project.location}, {project.year}
        </p>
        <p className="mt-3 text-sm leading-relaxed">{project.summary}</p>
      </div>
    </Link>
  );
}
