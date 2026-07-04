import Image from "next/image";
import type { Project } from "@/data/portfolio";
import { getProjectGradient } from "@/lib/gradient";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-foreground/10 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-36 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div
            className={`flex h-full items-center justify-center bg-gradient-to-br ${getProjectGradient(
              project.slug
            )}`}
          >
            <span className="text-5xl font-semibold text-foreground/20">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-foreground/70">{project.description}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-foreground/10 px-2.5 py-1 text-xs text-foreground/60"
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-4 pt-3 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 hover:underline"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
