import type { Category } from "@/data/projects";
import { bricksPattern } from "@/lib/patterns";

const tones: Record<Category, string> = {
  Residential: "from-[#2c3e4c] to-[#46657d]",
  Commercial: "from-[#1f2933] to-[#3a4856]",
  Renovation: "from-[#4a3a2e] to-[#8a5a3a]",
};

export default function ProjectCover({
  category,
  className = "",
}: {
  category: Category;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden bg-linear-to-br ${tones[category]} ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundImage: bricksPattern, backgroundSize: "64px 32px" }}
      />
      <div className="absolute bottom-0 left-0 h-1.5 w-full bg-accent" />
    </div>
  );
}
