export type Project = {
  slug: string; title: string; category: string; status: string;
  summary: string; description: string; repository: string;
  stack: string[]; highlights: string[]; note?: string;
};

export const projects: Project[] = [
  {
    slug: "gmu-crm", title: "GMU CRM", category: "Web Platform",
    status: "Details to verify", summary: "A university-focused CRM and management experience.",
    description: "A university-oriented product concept focused on organizing institutional workflows. The exact feature set, implementation status and technologies will be updated after reviewing the source repository.",
    repository: "https://github.com/Karunpoojari7/GMU-LEAD",
    stack: ["To be verified"],
    highlights: ["Institutional workflow focus", "Project architecture and features to be documented"],
    note: "Repository association needs confirmation before publishing this as the definitive GMU CRM project."
  },
  {
    slug: "jewellery-website", title: "MGS Jewellery", category: "E-commerce",
    status: "Repository documented",
    summary: "A digital storefront and management experience for a jewellery business.",
    description: "The repository README describes a customer-facing jewellery website with collections, promotional offers, calculators, WhatsApp inquiry flows and an administration area.",
    repository: "https://github.com/Karunpoojari7/MGS-Jewellary",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Filterable product catalogue", "Gold value and EMI calculators", "Festival offer management", "Admin CMS and lead workflows", "WhatsApp inquiry experience"]
  },
  {
    slug: "diabetic-retinopathy", title: "Diabetic Retinopathy Detection", category: "AI / Healthcare",
    status: "Repository available",
    summary: "An AI-oriented retinal image analysis project.",
    description: "A project focused on diabetic retinopathy detection. Model architecture, dataset, evaluation metrics and current implementation status must be confirmed from the repository before making performance claims.",
    repository: "https://github.com/Karunpoojari7/Diabetic-Retinopathy-Detection",
    stack: ["To be verified"],
    highlights: ["Medical image analysis problem", "Model and evaluation details pending verification"]
  },
  {
    slug: "urban-sky-ai", title: "Urban Sky AI Service", category: "AI / Web",
    status: "Implementation to verify",
    summary: "An AI-enabled urban services concept.",
    description: "A Next.js repository is available under URBAN-SKY-. The exact product functionality and AI capabilities need to be documented from the implementation.",
    repository: "https://github.com/Karunpoojari7/URBAN-SKY-",
    stack: ["Next.js"],
    highlights: ["Next.js application repository", "Product scope and AI features to be verified"]
  },
  {
    slug: "doctor-portfolio", title: "Doctor Personal Portfolio", category: "Web Design",
    status: "Implementation to verify",
    summary: "A professional web presence for a healthcare practitioner.",
    description: "A Next.js repository is available. The final page structure, implemented features and design decisions will be added after reviewing the source.",
    repository: "https://github.com/Karunpoojari7/DOCTOR-WEBSITE-1",
    stack: ["Next.js"],
    highlights: ["Professional healthcare web presence", "Detailed feature list pending source review"]
  },
  {
    slug: "gmu-connect", title: "GMU Connect 2.0", category: "Student ERP",
    status: "Prototype / demo",
    summary: "A student ERP prototype spanning mobile, admin and backend components.",
    description: "The repository documentation describes a prototype with a React Native student app, admin portal, Spring Boot API, PostgreSQL, Redis, object storage, notifications and Docker-based infrastructure. Its README explicitly states it is not connected to the university's live ERP or production data.",
    repository: "https://github.com/Karunpoojari7/GMU-CONNECT-APP",
    stack: ["React Native", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    highlights: ["Student mobile application", "Admin web portal", "Backend API architecture", "Prototype uses fictional demonstration data"]
  },
  {
    slug: "intern-management", title: "Intern Management System", category: "Management Platform",
    status: "Details to verify",
    summary: "A platform concept for managing internship workflows.",
    description: "The project scope, repository mapping, implemented modules and technologies need confirmation before the case study is finalized.",
    repository: "https://github.com/Karunpoojari7/Prodhee_Intern",
    stack: ["To be verified"],
    highlights: ["Internship-related repository identified", "Feature and ownership details pending verification"]
  },
  {
    slug: "resume-gap-ai", title: "Resume Gap AI", category: "Artificial Intelligence",
    status: "Repository documented",
    summary: "An AI-powered tool for resume and skill-gap analysis.",
    description: "The repository README describes an AI-powered SkillForge application intended to analyze resume gaps and generate professional optimization reports.",
    repository: "https://github.com/Karunpoojari7/Resume_Gap_AI",
    stack: ["To be verified"],
    highlights: ["Resume gap analysis", "Professional optimization reports"]
  },
  {
    slug: "bayora-sec", title: "Bayora Sec", category: "AI Security",
    status: "Technical documentation available",
    summary: "Zero-trust infrastructure for AI safety evaluation.",
    description: "Bayora's documentation describes an environment for controlled adversarial AI testing with isolated red-team, target-model and blue-team environments, confidential payload handling, cryptographic evidence and test-integrity reporting.",
    repository: "https://github.com/Karunpoojari7/Bayora_Sec",
    stack: ["React", "Tailwind CSS", "FastAPI", "Docker", "Ollama"],
    highlights: ["Isolated testing environments", "SHA-256 evidence hash chain", "Canary contamination checks", "Test Integrity Passport", "Local model and mock-provider support"]
  }
];