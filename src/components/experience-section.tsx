import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've worked" />
      <div className="flex flex-col gap-10">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.period}`}
            className="grid grid-cols-1 gap-2 sm:grid-cols-[200px_1fr]"
          >
            <div>
              <p className="font-medium">{item.role}</p>
              <p className="text-sm text-foreground/60">{item.company}</p>
              <p className="text-sm text-foreground/40">{item.period}</p>
            </div>
            <ul className="flex flex-col gap-2 text-sm text-foreground/70">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="list-disc marker:text-foreground/30 ml-4">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
