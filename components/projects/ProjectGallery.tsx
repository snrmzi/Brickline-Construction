"use client";

import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard";
import { categories, projects, type Category } from "@/data/projects";

type Filter = "All" | Category;
const filters: Filter[] = ["All", ...categories];

export default function ProjectGallery() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by type"
        className="flex flex-wrap gap-2"
      >
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={active === f}
            onClick={() => setActive(f)}
            className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
              active === f
                ? "border-charcoal bg-charcoal text-white"
                : "border-line bg-surface text-foreground hover:border-charcoal"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm text-muted" aria-live="polite">
        Showing {visible.length} of {projects.length} projects
      </p>

      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
