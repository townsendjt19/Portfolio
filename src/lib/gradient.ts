const GRADIENTS = [
  "from-indigo-500/30 to-sky-400/20",
  "from-rose-500/30 to-orange-400/20",
  "from-emerald-500/30 to-teal-400/20",
  "from-violet-500/30 to-fuchsia-400/20",
  "from-amber-500/30 to-yellow-400/20",
];

export function getProjectGradient(slug: string) {
  const hash = [...slug].reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return GRADIENTS[hash % GRADIENTS.length];
}
