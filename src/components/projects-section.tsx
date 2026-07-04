import { projects } from "@/data/portfolio";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
