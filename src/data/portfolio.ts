export const site = {
  name: "J. Townsend",
  role: "Software Engineer",
  tagline:
    "I build enterprise software, automation pipelines, and the occasional quant trading system.",
  location: "Dayton, OH",
  // TODO: confirm jey@jeybrieltownsend.com forwarding is live before relying on this publicly
  email: "jey@jeybrieltownsend.com",
  socials: {
    github: "https://github.com/townsendjt19",
    linkedin: "https://linkedin.com/in/jeybrieltownsend",
  },
  resumeUrl: "/resume.pdf",
};

export const about = {
  summary: [
    "I'm a software engineer at the University of Dayton Research Institute, where I build enterprise software for data migrations, cybersecurity, and cloud-based storage pipelines using Java, Python, and MongoDB. Before that, I worked as an EHR developer, hardening a healthcare records system and supporting the clinical staff who relied on it every day.",
    "I have a B.S. in Computer Science from Virginia Military Institute and a full-stack web development certificate from Talent Tech South. Outside of work I build things I'm curious about — from a quantitative forex research system with a pluggable strategy engine and live paper-trading bots, to a machine learning model that tries to detect deception from EEG brain waves instead of a heart rate.",
  ],
  photo: "/images/profile.jpg",
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
    slug: "jobhunter",
    title: "Job Search Automation Pipeline",
    description:
      "A local pipeline that parses a resume into a structured profile, searches multiple job-board APIs, dedupes and scores postings in SQLite, and prints a human-review queue — nothing is ever auto-submitted. Runs isolated tracks per role type so matching stays relevant to each.",
    stack: ["Python", "SQLite", "Claude API", "Adzuna API", "USAJobs API"],
    image: "/images/projects/jobhunter.jpg",
    featured: true,
  },
  {
    slug: "oanda-journal",
    title: "Trading Journal Auto-Sync",
    description:
      "Pulls closed trades from the OANDA API and writes them directly into an Excel trading journal — prices, lot sizes, direction, and P&L — with automatic trading-session, style, and exit-reason detection.",
    stack: ["Python", "OANDA API", "openpyxl"],
    image: "/images/projects/oanda-journal.jpg",
    repoUrl: "https://github.com/townsendjt19/oanda_journal",
    featured: true,
  },
  {
    slug: "fx-strategy-engine",
    title: "FX Strategy Backtesting & Paper-Trading Engine",
    description:
      "A quantitative forex research system with a pluggable strategy architecture (AVWAP fade, Donchian channel, Fibonacci retracement, COT positioning), a historical backtester, and always-on paper-trading bots running live against a broker API with governance and audit logging.",
    stack: ["Python", "Pandas", "OANDA API", "SQLite"],
    image: "/images/projects/fx-strategy-engine.jpg",
    featured: true,
  },
  {
    slug: "jeygpt",
    title: "JeyGPT — ChatGPT Clone",
    description:
      "A ChatGPT-style chat client built with React and Tailwind CSS, backed by a serverless API wrapping a hosted LLM completion endpoint, deployed on Vercel.",
    stack: ["React", "Tailwind CSS", "Node.js", "Vercel"],
    image: "/images/projects/jeygpt.jpg",
    repoUrl: "https://github.com/townsendjt19/JeyGPT",
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "C++", "JavaScript", "HTML/CSS3", "SQL"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "Microsoft SQL Server"],
  },
  {
    category: "Tools",
    items: [
      "React.js",
      "Bootstrap",
      "Docker",
      "jQuery",
      "Git",
      "GitHub",
      "Java Web Services API",
      "Salesforce",
    ],
  },
];

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "University of Dayton Research Institute",
    role: "Software Engineer",
    period: "Jun 2023 — Present",
    bullets: [
      "Deliver software solutions for enterprise applications including data migrations, cybersecurity, and cloud-based storage pipelines using Java, Python, and MongoDB.",
      "Follow the SaaS engineering process end-to-end: comprehensive test cases, development, and manual testing to ensure system robustness.",
      "Perform code reviews and generate development tasks to maintain team workflow efficiency and uphold code quality and readability standards.",
      "Manage the full development lifecycle, from gathering requirements to technical design discussions and presenting prototypes to clients.",
    ],
  },
  {
    company: "Path Integrated Healthcare",
    role: "Electronic Healthcare Records Developer",
    period: "Dec 2020 — Oct 2022",
    bullets: [
      "Facilitated an electronic health records (EHR) system enabling digital creation, updates, and record-keeping of patient data; supported and configured new services.",
      "Assessed the Computerized Patient Record System (CPRS) database for completeness, identifying and documenting deficiencies.",
      "Provided direct IT support and troubleshooting for EHR-related inquiries, and developed training for system administration and reporting functions.",
    ],
  },
  {
    company: "Systecon",
    role: "Data Analyst Intern",
    period: "Dec 2018 — Jan 2019",
    bullets: [
      "Wrote technical reports on classified (NDA) documentation for aircraft part logistics analysis.",
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
