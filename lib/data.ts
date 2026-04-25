export type AccentColor =
  | "blue"
  | "cyan"
  | "green"
  | "yellow"
  | "orange"
  | "pink"
  | "purple"
  | "red";

export const profile = {
  name: "Zuhaib Akhtar",
  role: "software engineering student",
  bio: "software engineering student at giki, building full-stack and ai projects, organizing hackathons and speaker sessions on campus.",
  tinkering: [
    { label: "langchain", color: "green" as AccentColor },
    { label: "langgraph", color: "purple" as AccentColor },
    { label: "rag pipelines", color: "red" as AccentColor },
    { label: "relational databases", color: "blue" as AccentColor },
    { label: "backend frameworks", color: "cyan" as AccentColor },
    { label: "api integrations", color: "blue" as AccentColor },
    { label: "linux", color: "yellow" as AccentColor },
    { label: "competitive programming", color: "pink" as AccentColor },
    { label: "hackathons", color: "orange" as AccentColor },
  ],
  socials: {
    github: "https://github.com/zuhaibakhtarkhan",
    linkedin: "https://linkedin.com/in/izuhaibakhtar/",
    email: "mailto:u2024691@giki.edu.pk",
    resume: "/ZuhaibAkhtarFinalResume.pdf",
  },
};

export const education = [
  {
    school: "Ghulam Ishaq Khan Institute of Technology (GIKI)",
    degree: "Bachelor of Engineering in Software Engineering",
    period: "Sep 2024 — Jul 2028",
    location: "Topi, Pakistan",
    coursework: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming",
      "Database Management (SQL)",
      "Software Requirements Engineering",
      "Computer Organization & Architecture",
      "DevOps",
    ],
  },
];

export const experience = [
  {
    role: "Core Team Member",
    company: "Google Developers Group on Campus (GDGoC) GIKI",
    period: "Dec 2024 — Present",
    location: "Topi, Pakistan",
    bullets: [
      "Spearheaded industry–academia integration initiatives for 100+ students, bridging technical knowledge gaps through official Google community support.",
      "Orchestrated 10+ industry-led speaker sessions featuring firms like Vyro.ai and Vector.ai, facilitating internships for 10+ students via networking sessions.",
      "Executed 3 high-scale hackathons sponsored by GitHub, Base Technologies and Vyro’s ImagineArt — managing 20+ teams and securing USD 5,000 in prize pools.",
    ],
    color: "blue" as AccentColor,
  },
  {
    role: "Core Team Member",
    company: "Microsoft Learn Student Ambassadors Club GIKI",
    period: "Nov 2024 — Present",
    location: "Topi, Pakistan",
    bullets: [
      "Coordinated 5+ technical seminars and 2 hackathons with partners like CursorAI and Devsinc, securing PKR 200K+ in competitive prize pools.",
    ],
    color: "cyan" as AccentColor,
  },
];

export const projects = [
  {
    name: "MiniJira",
    tagline: "Project management software",
    period: "Apr 2026 — Present",
    description:
      "Architecting a full-stack Jira clone — PostgreSQL schema design for user auth, ticket states, and role-based permissions.",
    bullets: [
      "Optimizing data retrieval for 100+ entries via strategic indexing and SQL joins for performant state management.",
      "Collaborating in a 4-person team mirroring enterprise-level Scrum workflows and project tracking.",
    ],
    stack: [
      { label: "PostgreSQL", color: "blue" as AccentColor },
      { label: "Flask", color: "green" as AccentColor },
      { label: "React.js", color: "cyan" as AccentColor },
    ],
    color: "blue" as AccentColor,
    link: "https://github.com/shahmeerabdul/micathon-26",
  },
  {
    name: "KhataV2",
    tagline: "Voice-first ledger",
    period: "Apr 2026",
    description:
      "Engineered a voice-first financial ledger using Google Gemini LLMs to process Urdu/English natural language commands into structured JSON.",
    bullets: [
      "Architected a high-performance system with Zustand for zero-latency, offline-ready tracking — accommodating 5,000+ potential daily users.",
      "Integrated Twilio WhatsApp API to automate receipts and summaries, reducing literacy-based friction for small business owners.",
    ],
    stack: [
      { label: "Gemini", color: "purple" as AccentColor },
      { label: "MongoDB Atlas", color: "green" as AccentColor },
      { label: "Next.js 16", color: "cyan" as AccentColor },
      { label: "Twilio", color: "red" as AccentColor },
    ],
    color: "purple" as AccentColor,
    link: null,
  },
  {
    name: "3Bins",
    tagline: "AI smart waste separator",
    period: "Feb 2026",
    description:
      "Developed an AI-powered smart waste separator using a custom YOLOv8 model — achieving 0.60 mAP (60%) for real-time classification.",
    bullets: [
      "Implemented serial communication between model outputs and an Arduino Mega to automate physical sorting via a multi-servo mechanism.",
    ],
    stack: [
      { label: "Python", color: "yellow" as AccentColor },
      { label: "YOLOv8", color: "orange" as AccentColor },
      { label: "Arduino Mega", color: "cyan" as AccentColor },
      { label: "C++", color: "blue" as AccentColor },
    ],
    color: "orange" as AccentColor,
    link: "https://github.com/ZuhaibAkhtarKhan/3Bins-HackGitV2",
  },
  {
    name: "MedAi",
    tagline: "Disease diagnosis system",
    period: "Oct 2025 — Nov 2025",
    description:
      "Engineered a diagnostic engine achieving O(log N) search efficiency for N diseases via a hybrid Binary Search Tree + HashMap structure.",
    bullets: [
      "Optimized symptom-to-disease mapping to O(1) average-case complexity, reducing latency for real-time diagnostic queries.",
      "Used Linked Lists for dynamic symptom storage — memory-efficient data management for 100+ medical profiles.",
    ],
    stack: [
      { label: "C++", color: "blue" as AccentColor },
      { label: "BST", color: "green" as AccentColor },
      { label: "HashMap", color: "yellow" as AccentColor },
      { label: "Linked List", color: "pink" as AccentColor },
    ],
    color: "green" as AccentColor,
    link: "https://github.com/asadiv/Disease-Diagnosis-through-Data-structures-and-algorithms",
  },
];

export type SkillItem = {
  name: string;
  /** key resolved in components/Skills.tsx -> ICONS map */
  icon: string;
  /** brand color for the icon (any valid CSS color) */
  color?: string;
};

export const skills: { title: string; items: SkillItem[] }[] = [
  {
    title: "Languages",
    items: [
      { name: "Python",           icon: "python",      color: "#FFD43B" },
      { name: "C/C++",            icon: "cplusplus",   color: "#7aa6ff" },
      { name: "SQL (PostgreSQL)", icon: "postgresql",  color: "#7ee7ff" },
      { name: "JavaScript",       icon: "javascript",  color: "#F7DF1E" },
      { name: "Tailwind CSS",     icon: "tailwindcss", color: "#38BDF8" },
      { name: "HTML/CSS",         icon: "html5",       color: "#E34F26" },
    ],
  },
  {
    title: "Core Competencies",
    items: [
      { name: "DSA",                  icon: "binary",     color: "#9ee493" },
      { name: "OOP",                  icon: "boxes",      color: "#c79bff" },
      { name: "Relational Databases", icon: "database",   color: "#7aa6ff" },
      { name: "SDLC",                 icon: "workflow",   color: "#ffa86b" },
      { name: "DevOps",               icon: "infinity",   color: "#7ee7ff" },
    ],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git/GitHub",  icon: "github",  color: "#e8e8ee" },
      { name: "Docker",      icon: "docker",  color: "#2496ED" },
      { name: "Linux",       icon: "linux",   color: "#FCC624" },
      { name: "Jira",        icon: "jira",    color: "#0052CC" },
      { name: "VS Code",     icon: "vscode",  color: "#007ACC" },
      { name: "CursorAI",    icon: "cursor",  color: "#e8e8ee" },
      { name: "Arduino IDE", icon: "arduino", color: "#00979D" },
    ],
  },
  {
    title: "Libraries / Frameworks",
    items: [
      { name: "LangChain",     icon: "langchain", color: "#1c3c3c" },
      { name: "LangGraph",     icon: "network",   color: "#9ee493" },
      { name: "RAG Pipelines", icon: "layers",    color: "#c79bff" },
      { name: "Flask",         icon: "flask",     color: "#e8e8ee" },
      { name: "Node.js",       icon: "nodejs",    color: "#5FA04E" },
      { name: "NumPy",         icon: "numpy",     color: "#4D77CF" },
      { name: "Pandas",        icon: "pandas",    color: "#150458" },
    ],
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "students reached" },
  { value: 10, suffix: "+", label: "speaker sessions" },
  { value: 5, suffix: "+", label: "hackathons run" },
  { value: 5000, suffix: " USD", label: "prize pools secured" },
];

export const accentClass: Record<AccentColor, { text: string; bg: string; ring: string; dot: string }> = {
  blue:   { text: "text-accent-blue",   bg: "bg-accent-blue/10",   ring: "ring-accent-blue/30",   dot: "bg-accent-blue" },
  cyan:   { text: "text-accent-cyan",   bg: "bg-accent-cyan/10",   ring: "ring-accent-cyan/30",   dot: "bg-accent-cyan" },
  green:  { text: "text-accent-green",  bg: "bg-accent-green/10",  ring: "ring-accent-green/30",  dot: "bg-accent-green" },
  yellow: { text: "text-accent-yellow", bg: "bg-accent-yellow/10", ring: "ring-accent-yellow/30", dot: "bg-accent-yellow" },
  orange: { text: "text-accent-orange", bg: "bg-accent-orange/10", ring: "ring-accent-orange/30", dot: "bg-accent-orange" },
  pink:   { text: "text-accent-pink",   bg: "bg-accent-pink/10",   ring: "ring-accent-pink/30",   dot: "bg-accent-pink" },
  purple: { text: "text-accent-purple", bg: "bg-accent-purple/10", ring: "ring-accent-purple/30", dot: "bg-accent-purple" },
  red:    { text: "text-accent-red",    bg: "bg-accent-red/10",    ring: "ring-accent-red/30",    dot: "bg-accent-red" },
};
