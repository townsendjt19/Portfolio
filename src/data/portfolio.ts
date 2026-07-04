export const site = {
  // TODO: replace with your real name
  name: "Jordan Rivera",
  role: "Software Engineer",
  // TODO: replace with your one-line value prop
  tagline:
    "I build fast, reliable web applications and the systems behind them.",
  // TODO: replace with your city/country
  location: "Austin, TX",
  // TODO: replace with your real email
  email: "jordan@example.com",
  socials: {
    // TODO: replace with your real GitHub URL
    github: "https://github.com/your-username",
    // TODO: replace with your real LinkedIn URL
    linkedin: "https://linkedin.com/in/your-username",
  },
  // TODO: replace with a link to your real resume PDF (e.g. hosted in /public)
  resumeUrl: "#",
};

export const about = {
  // TODO: replace with your real bio (2-3 short paragraphs)
  summary: [
    "I'm a software engineer with a few years of experience building web applications, from customer-facing UIs to the APIs and data layers behind them. I care about writing code that's easy for the next person (often future me) to understand and change.",
    "Most recently I've been working across the stack in TypeScript, React, and Node, with a growing interest in developer tooling and performance. Outside of work I enjoy contributing to small open-source projects and learning how things break.",
  ],
  // TODO: replace with a real photo in public/images/
  photo: "/images/profile-placeholder.svg",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "task-tracker",
    title: "Task Tracker",
    // TODO: replace with a real project description
    description:
      "A collaborative task management app with real-time updates, built with Next.js and WebSockets. Supports boards, filters, and team permissions.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "WebSockets"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "api-gateway",
    title: "Lightweight API Gateway",
    // TODO: replace with a real project description
    description:
      "A small, self-hosted API gateway with request routing, rate limiting, and auth middleware, designed for internal microservices.",
    stack: ["Node.js", "Express", "Redis"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    slug: "expense-splitter",
    title: "Expense Splitter",
    // TODO: replace with a real project description
    description:
      "A mobile-friendly app for splitting shared expenses among groups, with support for multiple currencies and settlement suggestions.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

// TODO: replace with your real skills
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Express"],
  },
  {
    category: "Data & Infra",
    items: ["PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub Actions", "Jest", "Figma"],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

// TODO: replace with your real work experience
export const experience: ExperienceItem[] = [
  {
    company: "Acme Corp",
    role: "Software Engineer",
    period: "2023 — Present",
    bullets: [
      "Built and maintained customer-facing features used by 50k+ monthly active users.",
      "Reduced API response times by 40% through query optimization and caching.",
      "Mentored two junior engineers and led code reviews for the web team.",
    ],
  },
  {
    company: "Startup Studio",
    role: "Junior Software Engineer",
    period: "2021 — 2023",
    bullets: [
      "Shipped a full-stack internal tools dashboard from scratch using React and Node.js.",
      "Wrote integration tests that caught regressions before they reached production.",
      "Collaborated directly with design and product to scope and ship new features.",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
