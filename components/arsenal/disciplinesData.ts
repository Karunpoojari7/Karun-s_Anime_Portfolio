export interface SkillEvidence {
  name: string;
  status: "USED IN PROJECTS" | "PRACTISED IN LABS" | "CURRENTLY LEARNING" | "EXPLORING";
  context: string;
}

export interface Discipline {
  id: string;
  pathNumber: string;
  shinobiTitle: string;
  disciplineName: string;
  category: string;
  motto: string;
  kanji: string;
  tagline: string;
  description: string;
  philosophy: string;
  primaryTags: string[];
  skills: SkillEvidence[];
  connectedProjects: {
    title: string;
    slug: string;
    role: string;
  }[];
  accentColor: string;
}

export const disciplines: Discipline[] = [
  {
    id: "ninjutsu",
    pathNumber: "01",
    shinobiTitle: "PATH 01 · DEVELOPMENT",
    disciplineName: "Development: Web & Full-Stack",
    category: "DEVELOPMENT & WEB CRAFT",
    motto: "BUILD.",
    kanji: "忍",
    tagline: "Building responsive websites, web applications and useful software.",
    description:
      "Engineering responsive web systems using modern React, Next.js, and TypeScript architectures. Focusing on clean code, reliable backend connections, and modern user interfaces.",
    philosophy:
      "Write clean code, structure reliable components, and deliver useful software with precision.",
    primaryTags: ["REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "POSTGRESQL"],
    skills: [
      { name: "React", status: "USED IN PROJECTS", context: "MGS Jewellery, GMU Connect, Bayora Sec" },
      { name: "Next.js (App Router)", status: "USED IN PROJECTS", context: "Doctor Portfolio, Urban Sky AI" },
      { name: "TypeScript", status: "USED IN PROJECTS", context: "Portfolio & Enterprise App Architecture" },
      { name: "JavaScript (ES6+)", status: "USED IN PROJECTS", context: "MGS Jewellery Storefront & Calculations" },
      { name: "Tailwind CSS", status: "USED IN PROJECTS", context: "Bayora Sec & Modern UI Engineering" },
      { name: "Node.js & Express", status: "PRACTISED IN LABS", context: "RESTful Service & Microservice Endpoints" },
      { name: "PostgreSQL & Redis", status: "PRACTISED IN LABS", context: "GMU Connect Prototype Data Layer" },
      { name: "Docker Containerization", status: "PRACTISED IN LABS", context: "Multi-Service Container Orchestration" },
    ],
    connectedProjects: [
      { title: "MGS Jewellery", slug: "jewellery-website", role: "E-Commerce Customer & Admin Portal" },
      { title: "GMU Connect 2.0", slug: "gmu-connect", role: "Student ERP Prototype Architecture" },
      { title: "Doctor Personal Portfolio", slug: "doctor-portfolio", role: "Professional Healthcare Web Presence" },
    ],
    accentColor: "#ff263b",
  },
  {
    id: "genjutsu",
    pathNumber: "02",
    shinobiTitle: "PATH 02 · ARTIFICIAL INTELLIGENCE",
    disciplineName: "Artificial Intelligence: Applied Machine Learning",
    category: "APPLIED AI & MACHINE LEARNING",
    motto: "THINK.",
    kanji: "幻",
    tagline: "Exploring machine learning, AI applications and intelligent systems.",
    description:
      "Exploring applied machine learning workflows, deep learning for medical image analysis (Diabetic Retinopathy Detection), and practical LLM integration within web applications.",
    philosophy:
      "Understand data patterns, test models carefully, and integrate intelligent systems responsibly.",
    primaryTags: ["PYTHON", "APPLIED ML", "COMPUTER VISION", "LLM INTEGRATION", "AI SAFETY"],
    skills: [
      { name: "Python", status: "USED IN PROJECTS", context: "Diabetic Retinopathy & AI Modeling" },
      { name: "Medical Image Analysis (CNN)", status: "PRACTISED IN LABS", context: "Diabetic Retinopathy Detection" },
      { name: "Machine Learning (Scikit-Learn)", status: "PRACTISED IN LABS", context: "Data Preprocessing & Evaluation" },
      { name: "LLM Orchestration & Prompting", status: "EXPLORING", context: "Resume Gap AI Skill Analysis" },
      { name: "Adversarial AI Evaluation", status: "USED IN PROJECTS", context: "Bayora Sec Red/Blue Team Framework" },
      { name: "FastAPI Model Serving", status: "USED IN PROJECTS", context: "Bayora Sec Backend Endpoints" },
      { name: "Ollama / Local LLMs", status: "PRACTISED IN LABS", context: "Air-gapped AI Testing Environments" },
    ],
    connectedProjects: [
      { title: "Diabetic Retinopathy Detection", slug: "diabetic-retinopathy", role: "Deep Learning Retinal Scan Diagnostic" },
      { title: "Resume Gap AI", slug: "resume-gap-ai", role: "SkillForge Document Analysis Engine" },
      { title: "Bayora Sec", slug: "bayora-sec", role: "Adversarial AI Evaluation Infrastructure" },
    ],
    accentColor: "#e61938",
  },
  {
    id: "dojutsu",
    pathNumber: "03",
    shinobiTitle: "PATH 03 · CYBERSECURITY",
    disciplineName: "Cybersecurity: Defensive Security & Analysis",
    category: "DEFENSIVE CYBERSECURITY",
    motto: "DEFEND.",
    kanji: "瞳",
    tagline: "Learning network security, security monitoring and application security.",
    description:
      "Pursuing MCA Cybersecurity at GM University. Studying network security, Wireshark packet capture analysis, DNS protocol scrutiny, and secure software practices.",
    philosophy:
      "Analyze network traffic carefully, understand security fundamentals, and build defensible systems.",
    primaryTags: ["WIRESHARK", "TSHARK", "TCP/IP PROTOCOLS", "DNS SCRUTINY", "SOC OPERATIONS"],
    skills: [
      { name: "Wireshark Packet Analysis", status: "PRACTISED IN LABS", context: "MCA Lab Deep Packet Capture Scrutiny" },
      { name: "TShark Command Line", status: "PRACTISED IN LABS", context: "Automated Network Stream Parsing" },
      { name: "TCP/IP & OSI Diagnostics", status: "PRACTISED IN LABS", context: "Handshake, Reassembly & Latency Checks" },
      { name: "DNS Protocol Inspection", status: "PRACTISED IN LABS", context: "Tunneling & Query Anomaly Detection" },
      { name: "SOC Fundamentals", status: "CURRENTLY LEARNING", context: "Defensive Operations & Incident Workflow" },
      { name: "SIEM Concepts & Log Auditing", status: "EXPLORING", context: "Security Event Log Correlation" },
      { name: "Zero-Trust Integrity (SHA-256)", status: "USED IN PROJECTS", context: "Bayora Sec Evidence Hash Chains" },
    ],
    connectedProjects: [
      { title: "Bayora Sec", slug: "bayora-sec", role: "Zero-Trust AI Security Evaluation Framework" },
      { title: "Academic SOC & Packet Labs", slug: "skills", role: "MCA Cybersecurity Diagnostic Sessions" },
    ],
    accentColor: "#d9142e",
  },
];

