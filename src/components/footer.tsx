import { site } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-foreground/60 sm:flex-row sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <MailIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
