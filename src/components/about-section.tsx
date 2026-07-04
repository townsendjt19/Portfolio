import Image from "next/image";
import { about } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="About" title="A bit about me" />
      <div className="grid grid-cols-1 items-start gap-10 sm:grid-cols-[200px_1fr]">
        <Image
          src={about.photo}
          alt="Profile photo"
          width={200}
          height={200}
          className="rounded-2xl border border-foreground/10"
        />
        <div className="flex flex-col gap-4 text-foreground/80">
          {about.summary.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
