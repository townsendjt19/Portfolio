import { site } from "@/data/portfolio";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading eyebrow="Contact" title="Let's work together" />
      <Reveal>
        <p className="mb-8 max-w-lg text-foreground/70">
          Have a role, project, or question in mind? Send a message below, or
          reach me directly at{" "}
          <a href={`mailto:${site.email}`} className="underline underline-offset-4">
            {site.email}
          </a>
          .
        </p>
        <div className="max-w-lg">
          <ContactForm />
        </div>
      </Reveal>
    </section>
  );
}
