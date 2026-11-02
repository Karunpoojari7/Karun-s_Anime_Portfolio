export type DisciplineId = "development" | "ai-ml" | "cybersecurity" | "devops-tools";

export interface TechnologyItem {
  name: string;
  iconType:
    | "react"
    | "next"
    | "ts"
    | "node"
    | "tailwind"
    | "postgres"
    | "git"
    | "docker"
    | "redis"
    | "python"
    | "tensorflow"
    | "opencv"
    | "fastapi"
    | "pytorch"
    | "scikit"
    | "ollama"
    | "pandas"
    | "flask"
    | "wireshark"
    | "terminal"
    | "network"
    | "dns"
    | "soc"
    | "lock"
    | "linux"
    | "nmap"
    | "burp"
    | "github"
    | "vscode"
    | "postman"
    | "vercel"
    | "code";
}

export interface AppliedProject {
  title: string;
  subtitle: string;
  link: string;
  isExternal?: boolean;
}

export interface ProjectEvidenceItem {
  title: string;
  role: string;
  summary: string;
  technologies: string[];
  link: string;
  isExternal?: boolean;
}

export interface SkillDiscipline {
  id: DisciplineId;
  number: string;
  title: string;
  subtitle: string;
  ninjaArt: string;
  description: string;
  iconType: "code" | "brain" | "shield" | "layers";
  technologies: TechnologyItem[];
  appliedIn: AppliedProject[];
  evidence: ProjectEvidenceItem[];
}

export const SKILL_DISCIPLINES: SkillDiscipline[] = [
  {
    id: "development",
    number: "01",
    title: "Development",
    subtitle: "Web · Full-Stack",
    ninjaArt: "Ninjutsu",
    description:
      "Building responsive web applications, scalable systems and real-world digital solutions.",
    iconType: "code",
    technologies: [
      { name: "React", iconType: "react" },
      { name: "Next.js", iconType: "next" },
      { name: "TypeScript", iconType: "ts" },
      { name: "Node.js", iconType: "node" },
      { name: "Tailwind CSS", iconType: "tailwind" },
      { name: "PostgreSQL", iconType: "postgres" },
      { name: "Git", iconType: "git" },
      { name: "Docker", iconType: "docker" },
      { name: "Redis", iconType: "redis" },
    ],
    appliedIn: [
      {
        title: "MGS Jewellery",
        subtitle: "E-commerce Web Platform",
        link: "/projects/jewellery-website",
      },
      {
        title: "GMU Connect 2.0",
        subtitle: "Student ERP Prototype",
        link: "/projects/gmu-crm",
      },
      {
        title: "Doctor Portfolio",
        subtitle: "Personal Web Application",
        link: "/projects/doctor-portfolio",
      },
    ],
    evidence: [
      {
        title: "MGS Jewellery Platform",
        role: "Frontend Engineer & UI Lead",
        summary:
          "Engineered a high-performance luxury e-commerce catalog, dynamic cart management, and fluid responsive checkout interface with Next.js and Tailwind.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        link: "/projects/jewellery-website",
      },
      {
        title: "GMU Connect Student ERP",
        role: "Full-Stack Developer",
        summary:
          "Developed student profile management, course navigation, and responsive administration portals with Node.js and PostgreSQL backend services.",
        technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
        link: "/projects/gmu-crm",
      },
    ],
  },
  {
    id: "ai-ml",
    number: "02",
    title: "AI & ML",
    subtitle: "ML · DL · LLMs",
    ninjaArt: "Genjutsu",
    description:
      "Exploring applied machine learning, computer vision for medical diagnostics and intelligent application integration.",
    iconType: "brain",
    technologies: [
      { name: "Python", iconType: "python" },
      { name: "TensorFlow", iconType: "tensorflow" },
      { name: "OpenCV", iconType: "opencv" },
      { name: "FastAPI", iconType: "fastapi" },
      { name: "PyTorch", iconType: "pytorch" },
      { name: "Scikit-Learn", iconType: "scikit" },
      { name: "Ollama / LLMs", iconType: "ollama" },
      { name: "Pandas", iconType: "pandas" },
      { name: "Flask", iconType: "flask" },
    ],
    appliedIn: [
      {
        title: "Diabetic Retinopathy Detection",
        subtitle: "AI · Deep Learning · Medical",
        link: "/projects/diabetic-retinopathy",
      },
      {
        title: "Resume Gap AI",
        subtitle: "AI · Productivity Analysis",
        link: "/projects/resume-gap-ai",
      },
      {
        title: "Bayora Sec",
        subtitle: "AI Security & Adversarial Safety",
        link: "/projects/bayora-sec",
      },
    ],
    evidence: [
      {
        title: "Diabetic Retinopathy Detection",
        role: "Deep Learning Researcher",
        summary:
          "Built a CNN deep learning classifier to diagnose retinopathy severity stages from retinal photography with OpenCV image preprocessing and TensorFlow pipelines.",
        technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
        link: "/projects/diabetic-retinopathy",
      },
      {
        title: "Resume Gap AI Analysis System",
        role: "Full-Stack AI Developer",
        summary:
          "Integrated LLM semantic parsing and career gap identification to automatically recommend targeted upskilling roadmaps for candidates.",
        technologies: ["Python", "FastAPI", "React", "Ollama"],
        link: "/projects/resume-gap-ai",
      },
    ],
  },
  {
    id: "cybersecurity",
    number: "03",
    title: "Cybersecurity",
    subtitle: "Network · AppSec",
    ninjaArt: "Dojutsu",
    description:
      "Investigating network protocols, packet inspection, incident triage and secure software defense architectures.",
    iconType: "shield",
    technologies: [
      { name: "Wireshark", iconType: "wireshark" },
      { name: "TShark", iconType: "terminal" },
      { name: "TCP/IP Protocols", iconType: "network" },
      { name: "DNS Forensics", iconType: "dns" },
      { name: "SOC Fundamentals", iconType: "soc" },
      { name: "SHA-256 Hashing", iconType: "lock" },
      { name: "Kali Linux", iconType: "linux" },
      { name: "Nmap", iconType: "nmap" },
      { name: "Burp Suite", iconType: "burp" },
    ],
    appliedIn: [
      {
        title: "Bayora Sec",
        subtitle: "Zero-Trust AI Safety Framework",
        link: "/projects/bayora-sec",
      },
      {
        title: "Packet Analysis Labs",
        subtitle: "Hands-on Traffic Inspection",
        link: "/skills",
      },
      {
        title: "GMU Cybersecurity Studies",
        subtitle: "Defensive Systems & Cryptography",
        link: "/experience",
      },
    ],
    evidence: [
      {
        title: "Bayora Sec Zero-Trust Framework",
        role: "Security Engineer",
        summary:
          "Constructed adversarial prompt-injection mitigation boundaries, input sanitation filters, and isolated container execution environments for AI tools.",
        technologies: ["Docker", "Python", "Kali Linux", "AppSec"],
        link: "/projects/bayora-sec",
      },
      {
        title: "Network Traffic & Packet Forensics",
        role: "Shinobi Analyst",
        summary:
          "Conducted deep packet inspection using Wireshark and TShark to detect anomalous DNS beaconing, malformed TCP packets, and unauthorized port scan attempts.",
        technologies: ["Wireshark", "TShark", "TCP/IP", "Kali Linux"],
        link: "/experience",
      },
    ],
  },
  {
    id: "devops-tools",
    number: "04",
    title: "DevOps & Tools",
    subtitle: "Build · Deploy · Manage",
    ninjaArt: "Kugutsu",
    description:
      "Essential developer tooling, containerization, reproducible deployment environments and version control workflows.",
    iconType: "layers",
    technologies: [
      { name: "Git", iconType: "git" },
      { name: "Docker", iconType: "docker" },
      { name: "Linux / Kali", iconType: "linux" },
      { name: "GitHub Actions", iconType: "github" },
      { name: "VS Code", iconType: "vscode" },
      { name: "Postman", iconType: "postman" },
      { name: "Redis", iconType: "redis" },
      { name: "Vercel", iconType: "vercel" },
      { name: "Bash Scripting", iconType: "terminal" },
    ],
    appliedIn: [
      {
        title: "Bayora Sec Architecture",
        subtitle: "Multi-Container Docker Deployment",
        link: "/projects/bayora-sec",
      },
      {
        title: "GMU Connect Infrastructure",
        subtitle: "PostgreSQL & Redis Container Stack",
        link: "/projects/gmu-crm",
      },
      {
        title: "GitHub Repositories",
        subtitle: "Git Hygiene & Release Management",
        link: "https://github.com/Karunpoojari7",
        isExternal: true,
      },
    ],
    evidence: [
      {
        title: "Containerized Microservices Setup",
        role: "DevOps Engineer",
        summary:
          "Constructed isolated multi-container Docker environments orchestrating FastAPI endpoints, Redis cache queues, and PostgreSQL databases.",
        technologies: ["Docker", "PostgreSQL", "Redis", "Linux"],
        link: "/projects/bayora-sec",
      },
      {
        title: "Continuous Delivery & Git Hygiene",
        role: "Maintainer",
        summary:
          "Maintained strict version control practices, automated deployment pipelines with Vercel, and repeatable cross-platform configuration scripts.",
        technologies: ["Git", "GitHub Actions", "Vercel", "Bash"],
        link: "https://github.com/Karunpoojari7",
        isExternal: true,
      },
    ],
  },
];
