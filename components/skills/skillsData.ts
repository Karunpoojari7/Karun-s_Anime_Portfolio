export interface TechnologyItem {
  name: string;
  category?: string;
  iconType?: "react" | "next" | "ts" | "node" | "spring" | "postgres" | "python" | "fastapi" | "docker" | "git" | "wireshark" | "linux" | "redis" | "code";
}

export interface AppliedProject {
  title: string;
  subtitle: string;
  link: string;
  isExternal?: boolean;
}

export interface SkillDiscipline {
  id: "ninjutsu" | "genjutsu" | "dojutsu" | "kugutsu";
  number: string;
  japaneseTitle: string;
  englishCategory: string;
  shortTitle: string;
  shortSubtitle: string;
  panelTitle: string;
  description: string;
  iconType: "code" | "brain" | "shield" | "layers";
  technologies: TechnologyItem[];
  appliedIn: AppliedProject[];
}

export const SKILL_DISCIPLINES: SkillDiscipline[] = [
  {
    id: "ninjutsu",
    number: "01",
    japaneseTitle: "Ninjutsu",
    englishCategory: "FULL-STACK DEVELOPMENT",
    shortTitle: "Development",
    shortSubtitle: "Web · Full-Stack",
    panelTitle: "Ninjutsu: Full-Stack Development",
    description:
      "Building responsive web applications, scalable systems and practical digital solutions.",
    iconType: "code",
    technologies: [
      { name: "React", iconType: "react" },
      { name: "Next.js", iconType: "next" },
      { name: "TypeScript", iconType: "ts" },
      { name: "Node.js", iconType: "node" },
      { name: "Spring Boot", iconType: "spring" },
      { name: "PostgreSQL", iconType: "postgres" },
    ],
    appliedIn: [
      {
        title: "GMU Connect 2.0",
        subtitle: "Student ERP web application",
        link: "/projects",
      },
      {
        title: "MGS Jewellery",
        subtitle: "E-commerce platform",
        link: "/projects",
      },
      {
        title: "Doctor Portfolio",
        subtitle: "Personal portfolio web app",
        link: "/projects",
      },
    ],
  },
  {
    id: "genjutsu",
    number: "02",
    japaneseTitle: "Genjutsu",
    englishCategory: "ARTIFICIAL INTELLIGENCE",
    shortTitle: "AI",
    shortSubtitle: "ML · DL · LLMs",
    panelTitle: "Genjutsu: Artificial Intelligence",
    description:
      "Exploring applied machine learning, computer vision for medical diagnostics and intelligent application integration.",
    iconType: "brain",
    technologies: [
      { name: "Python", iconType: "python" },
      { name: "Applied ML", iconType: "code" },
      { name: "Computer Vision", iconType: "code" },
      { name: "FastAPI", iconType: "fastapi" },
      { name: "LLM Integration", iconType: "code" },
      { name: "Ollama", iconType: "code" },
    ],
    appliedIn: [
      {
        title: "Diabetic Retinopathy Detection",
        subtitle: "Deep learning medical imaging prototype",
        link: "/projects",
      },
      {
        title: "Resume Gap AI",
        subtitle: "Skill analysis & resume optimization",
        link: "/projects",
      },
      {
        title: "Bayora Sec",
        subtitle: "Adversarial AI evaluation environment",
        link: "/projects",
      },
    ],
  },
  {
    id: "dojutsu",
    number: "03",
    japaneseTitle: "Dojutsu",
    englishCategory: "DEFENSIVE CYBERSECURITY",
    shortTitle: "Cybersecurity",
    shortSubtitle: "Network · AppSec",
    panelTitle: "Dojutsu: Defensive Cybersecurity",
    description:
      "Investigating network protocols, packet inspection, incident triage and secure software defense.",
    iconType: "shield",
    technologies: [
      { name: "Wireshark", iconType: "wireshark" },
      { name: "TShark", iconType: "code" },
      { name: "TCP/IP Protocols", iconType: "code" },
      { name: "DNS Forensics", iconType: "code" },
      { name: "SOC Fundamentals", iconType: "code" },
      { name: "SHA-256 Hashing", iconType: "code" },
    ],
    appliedIn: [
      {
        title: "Bayora Sec",
        subtitle: "Zero-trust AI safety testing framework",
        link: "/projects",
      },
      {
        title: "Packet Analysis Labs",
        subtitle: "Hands-on Wireshark traffic inspection",
        link: "/skills",
      },
      {
        title: "GMU Cybersecurity Studies",
        subtitle: "Defensive systems & cryptography",
        link: "/experience",
      },
    ],
  },
  {
    id: "kugutsu",
    number: "04",
    japaneseTitle: "Kugutsu",
    englishCategory: "ENGINEERING TOOLS & DEVOPS",
    shortTitle: "DevOps & Tools",
    shortSubtitle: "Build · Deploy · Manage",
    panelTitle: "Kugutsu: Engineering Tools & DevOps",
    description:
      "Essential developer tooling, containerization, reproducible environments and version control workflows.",
    iconType: "layers",
    technologies: [
      { name: "Git & GitHub", iconType: "git" },
      { name: "Docker", iconType: "docker" },
      { name: "Linux / Kali", iconType: "linux" },
      { name: "VS Code", iconType: "code" },
      { name: "Postman", iconType: "code" },
      { name: "Redis", iconType: "redis" },
    ],
    appliedIn: [
      {
        title: "Bayora Sec Architecture",
        subtitle: "Multi-container Docker orchestration",
        link: "/projects",
      },
      {
        title: "GMU Connect Infrastructure",
        subtitle: "PostgreSQL & Redis container deployment",
        link: "/projects",
      },
      {
        title: "GitHub Repositories",
        subtitle: "Version control & collaborative branch hygiene",
        link: "https://github.com/Karunpoojari7",
        isExternal: true,
      },
    ],
  },
];
