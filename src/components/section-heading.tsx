export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-sm font-medium uppercase tracking-wider text-foreground/50">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
