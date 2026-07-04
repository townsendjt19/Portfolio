import { skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Skills" title="What I work with" />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold text-foreground/50">
              {group.category}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-foreground/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
