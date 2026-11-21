import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse recent residential, commercial, and renovation projects completed by Brickline Construction.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="A selection of recent work. Filter by type to see what is closest to what you have in mind."
      />
      <Container className="py-16">
        <ProjectGallery />
      </Container>
    </>
  );
}
