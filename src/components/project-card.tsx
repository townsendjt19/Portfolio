import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-foreground/10">
      <div className="flex h-36 items-center justify-center bg-foreground/5">
        <span className="text-sm font-medium text-foreground/40">
          {project.title}
        </span>
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
