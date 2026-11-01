export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  description: string;
  repository: string;
  stack: string[];
  highlights: string[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "gmu-crm",
    title: "GMU CRM",
    category: "Management - Web",
    status: "DOCUMENTED",
    summary: "A university-focused CRM and workflow management platform concept.",
    description: "A university-oriented platform concept focused on organizing student interactions, institutional workflows, and administrative records with clean relational modeling.",
    repository: "https://github.com/Karunpoojari7/GMU-LEAD",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: ["Institutional workflow management", "Lead tracking and administrative records", "Modular component architecture"],
    note: "Repository association verified with GMU-LEAD source."
  },
  {
    slug: "jewellery-website",
    title: "MGS Jewellery",
    category: "E-Commerce - Web",
    status: "DOCUMENTED",
    summary: "A digital storefront and customer management experience for a jewellery business.",
    description: "A customer-facing jewellery storefront featuring filterable product collections, live gold price calculations, EMI estimate tools, WhatsApp inquiry flows, and an administration dashboard.",
    repository: "https://github.com/Karunpoojari7/MGS-Jewellary",
    stack: ["HTML5", "CSS3", "JavaScript", "Admin CMS"],
    highlights: ["Filterable jewellery product catalogue", "Live gold valuation and EMI calculator", "Direct WhatsApp customer inquiry flow", "Admin inventory and offer management"]
  },
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection",
    category: "AI · Deep Learning · Medical",
    status: "VERIFIED",
    summary: "An AI-powered system for detecting diabetic retinopathy from retinal images using deep learning.",
    description: "A specialized computer vision diagnostic prototype that analyzes fundus photography images using convolutional neural networks (CNNs) to classify diabetic retinopathy severity stages.",
    repository: "https://github.com/Karunpoojari7/Diabetic-Retinopathy-Detection",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    highlights: ["Retinal image preprocessing with OpenCV", "Deep CNN feature extraction and classification", "Diagnostic severity staging", "RESTful Flask model serving endpoint"]
  },
  {
    slug: "urban-sky-ai",
    title: "Urban Sky AI Service",
    category: "AI · Automation",
    status: "DOCUMENTED",
    summary: "An AI-enabled modern web service platform built with Next.js.",
    description: "A responsive Next.js application designed for intelligent service automation, responsive scheduling, and customer interface management.",
    repository: "https://github.com/Karunpoojari7/URBAN-SKY-",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    highlights: ["Next.js App Router architecture", "Modular UI components with Tailwind CSS", "Responsive service portal"]
  },
  {
    slug: "doctor-portfolio",
    title: "Doctor Personal Portfolio",
    category: "Web · Personal",
    status: "DOCUMENTED",
    summary: "A professional web presence and patient portal for a healthcare practitioner.",
    description: "A clean, accessible medical portfolio website providing healthcare background, clinical specializations, consultation scheduling, and patient guidance.",
    repository: "https://github.com/Karunpoojari7/DOCTOR-WEBSITE-1",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: ["Accessible clinical profile presentation", "Appointment inquiry integration", "Responsive cross-device styling"]
  },
  {
    slug: "gmu-connect",
    title: "GMU Connect App",
    category: "Student App",
    status: "PROTOTYPE",
    summary: "A student ERP prototype spanning mobile, admin web and backend microservices.",
    description: "An integrated campus prototype combining a React Native mobile application for students, a web admin portal, a Spring Boot REST API, PostgreSQL storage, and Redis caching.",
    repository: "https://github.com/Karunpoojari7/GMU-CONNECT-APP",
    stack: ["React Native", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    highlights: ["Student mobile client in React Native", "Spring Boot backend architecture", "PostgreSQL database with Redis cache", "Docker containerization"]
  },
  {
    slug: "intern-management",
    title: "Intern Management System",
    category: "Management Platform",
    status: "DOCUMENTED",
    summary: "A platform for managing internship cohorts, task evaluation and supervisor workflows.",
    description: "An internship coordination system designed to track student progress, milestone deliverables, task evaluations, and administrative approvals.",
    repository: "https://github.com/Karunpoojari7/Prodhee_Intern",
    stack: ["React", "Node.js", "Express", "REST API"],
    highlights: ["Cohort task tracking and milestone reviews", "Supervisor evaluation workflow", "Structured REST API endpoints"]
  },
  {
    slug: "resume-gap-ai",
    title: "Resume Gap AI",
    category: "AI · Productivity",
    status: "DOCUMENTED",
    summary: "An AI-powered tool for resume and skill-gap analysis.",
    description: "An intelligent document evaluation tool designed to parse professional resumes, identify missing technical competencies against target job descriptions, and generate actionable optimization reports.",
    repository: "https://github.com/Karunpoojari7/Resume_Gap_AI",
    stack: ["Python", "FastAPI", "NLP", "LLM Integration"],
    highlights: ["Automated resume text parsing", "Targeted skill-gap identification", "Structured report generation"]
  },
  {
    slug: "bayora-sec",
    title: "Bayora Sec",
    category: "AI Security",
    status: "VERIFIED",
    summary: "Zero-trust infrastructure for controlled AI safety evaluation.",
    description: "A defensive AI safety testing environment featuring isolated red-team, target-model, and blue-team test runners, cryptographic SHA-256 evidence tracking, canary contamination checks, and verifiable test-integrity reporting.",
    repository: "https://github.com/Karunpoojari7/Bayora_Sec",
    stack: ["React", "FastAPI", "Docker", "Ollama", "SHA-256"],
    highlights: ["Isolated execution sandbox", "Cryptographic SHA-256 evidence chain", "Canary leakage and prompt injection checks", "Local LLM evaluation with Ollama"]
  }
];
