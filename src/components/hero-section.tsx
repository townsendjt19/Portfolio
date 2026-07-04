import { site } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32"
    >
      <p className="text-sm font-medium uppercase tracking-wider text-foreground/50">
        {site.role} · {site.location}
      </p>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
        Hi, I&apos;m {site.name}.
      </h1>
      <p className="max-w-xl text-lg text-foreground/70">{site.tagline}</p>
      <div className="flex flex-wrap gap-4 pt-2">
        <a
          href="#projects"
          className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          View Projects
        </a>
        <a
          href={site.resumeUrl}
          className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          Resume
        </a>
        <a
          href="#contact"
          className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/5"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
