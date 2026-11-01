export type ProjectType =
  | "Completed Project"
  | "Working Prototype"
  | "Research & Development"
  | "Under Active Development"
  | "Documented Project";

export type ScreenshotSlot = {
  title: string;
  description: string;
  placeholder: string;
  imagePath?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  status: string;
  projectType: ProjectType;
  summary: string;
  description: string;
  problemStatement: string;
  role: string;
  architecture: string;
  challenges: string;
  repository: string;
  liveDemo?: string;
  stack: string[];
  highlights: string[];
  note?: string;
  screenshotSlots: ScreenshotSlot[];
};

export const projects: Project[] = [
  {
    slug: "gmu-crm",
    title: "GMU CRM",
    category: "Management · Web",
    status: "DOCUMENTED",
    projectType: "Under Active Development",
    summary: "A university-focused CRM and workflow management platform concept.",
    description: "A university-oriented platform concept focused on organizing student interactions, institutional workflows, and administrative records with clean relational modeling.",
    problemStatement: "Academic institutions frequently suffer from fragmented query handling, disconnected departmental communications, and a lack of centralized student inquiry workflows.",
    role: "Full-Stack Developer & Relational Data Modeling",
    architecture: "Component-driven frontend built with React and TypeScript, communicating with a Node.js backend and PostgreSQL relational schema.",
    challenges: "Designing normalized institutional data relationships while preserving a fast, straightforward workflow for administrative staff.",
    repository: "https://github.com/Karunpoojari7/GMU-LEAD",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    highlights: ["Institutional workflow management", "Lead tracking and administrative records", "Modular component architecture"],
    note: "Repository association verified with GMU-LEAD source.",
    screenshotSlots: [
      {
        title: "Administrative CRM Dashboard",
        description: "Primary interface for managing student inquiries, status tags, and counselor allocations.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      },
      {
        title: "Workflow & Status Tracking View",
        description: "Structured lifecycle view tracking student communications from first contact to enrollment.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "jewellery-website",
    title: "MGS Jewellery",
    category: "E-Commerce · Web",
    status: "DOCUMENTED",
    projectType: "Completed Project",
    summary: "A digital storefront and customer management experience for a jewellery business.",
    description: "A customer-facing jewellery storefront featuring filterable product collections, live gold price calculations, EMI estimate tools, WhatsApp inquiry flows, and an administration dashboard.",
    problemStatement: "Traditional retail jewellery businesses need digital storefronts that dynamically reflect changing precious metal rates and provide customers with immediate price transparency.",
    role: "Frontend Developer & UI Designer",
    architecture: "Lightweight client-side architecture with modular calculation scripts, dynamic DOM manipulation, and direct WhatsApp Business API dispatch.",
    challenges: "Updating dynamic gold rate calculations instantly across multiple weight units without client-side lag.",
    repository: "https://github.com/Karunpoojari7/MGS-Jewellary",
    stack: ["HTML5", "CSS3", "JavaScript", "Admin CMS"],
    highlights: ["Filterable jewellery product catalogue", "Live gold valuation and EMI calculator", "Direct WhatsApp customer inquiry flow", "Admin inventory and offer management"],
    screenshotSlots: [
      {
        title: "Product Showcase & Filtering",
        description: "Filterable product gallery organized by metal purity, weight, and jewellery categories.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      },
      {
        title: "Live Valuation & Calculator",
        description: "Real-time pricing estimation modal and direct WhatsApp conversation link.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "diabetic-retinopathy",
    title: "Diabetic Retinopathy Detection",
    category: "AI · Deep Learning · Medical",
    status: "VERIFIED",
    projectType: "Working Prototype",
    summary: "An AI-powered system for detecting diabetic retinopathy from retinal images using deep learning.",
    description: "A specialized computer vision diagnostic prototype that analyzes fundus photography images using convolutional neural networks (CNNs) to classify diabetic retinopathy severity stages.",
    problemStatement: "Early identification of diabetic retinopathy prevents preventable blindness, but clinical evaluation requires manual specialist examination that is scarce in rural healthcare facilities.",
    role: "Machine Learning Engineer & Pipeline Architect",
    architecture: "Computer vision image preprocessing with OpenCV (contrast equalization, crop, normalization), followed by a convolutional neural network classifier in TensorFlow served via a Flask REST API.",
    challenges: "Handling image variability across lighting conditions, pupil dilation disparities, and resolution differences in fundus photography.",
    repository: "https://github.com/Karunpoojari7/Diabetic-Retinopathy-Detection",
    stack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    highlights: ["Retinal image preprocessing with OpenCV", "Deep CNN feature extraction and classification", "Diagnostic severity staging", "RESTful Flask model serving endpoint"],
    screenshotSlots: [
      {
        title: "Fundus Upload & Diagnostic Staging",
        description: "Clinical evaluation screen displaying uploaded retinal photograph, predicted severity level, and confidence score.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      },
      {
        title: "Preprocessing & Vessel Extraction",
        description: "Visual step-through of contrast enhancement and optical disc localization.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "urban-sky-ai",
    title: "Urban Sky AI Service",
    category: "AI · Automation",
    status: "DOCUMENTED",
    projectType: "Under Active Development",
    summary: "An AI-enabled modern web service platform built with Next.js.",
    description: "A responsive Next.js application designed for intelligent service automation, responsive scheduling, and customer interface management.",
    problemStatement: "Service-oriented organizations require high-performance, modern web portals that handle automated appointment flows with zero layout shifts.",
    role: "Frontend Engineer & Next.js Specialist",
    architecture: "Next.js App Router with server-side rendered pages, Tailwind CSS design system, and client-side animated state transitions.",
    challenges: "Maintaining accessible, keyboard-navigable scheduling flows across diverse mobile screen dimensions.",
    repository: "https://github.com/Karunpoojari7/URBAN-SKY-",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    highlights: ["Next.js App Router architecture", "Modular UI components with Tailwind CSS", "Responsive service portal"],
    screenshotSlots: [
      {
        title: "Service Discovery & Scheduling",
        description: "Primary client-facing booking interface with dynamic slot selection.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "doctor-portfolio",
    title: "Doctor Personal Portfolio",
    category: "Web · Personal",
    status: "DOCUMENTED",
    projectType: "Completed Project",
    summary: "A professional web presence and patient portal for a healthcare practitioner.",
    description: "A clean, accessible medical portfolio website providing healthcare background, clinical specializations, consultation scheduling, and patient guidance.",
    problemStatement: "Medical practitioners require an authoritative, accessible web identity that inspires confidence in patients seeking clinical consultations.",
    role: "Frontend Developer",
    architecture: "Next.js with Tailwind CSS, semantic HTML structure, and integrated patient inquiry action forms.",
    challenges: "Balancing dignified, calm visual aesthetics with high-contrast accessibility compliance for older patients.",
    repository: "https://github.com/Karunpoojari7/DOCTOR-WEBSITE-1",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: ["Accessible clinical profile presentation", "Appointment inquiry integration", "Responsive cross-device styling"],
    screenshotSlots: [
      {
        title: "Clinical Specialties & Profile",
        description: "Medical credential presentation, clinical practice areas, and patient guidance documentation.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "gmu-connect",
    title: "GMU Connect App",
    category: "Student App",
    status: "PROTOTYPE",
    projectType: "Working Prototype",
    summary: "A student ERP prototype spanning mobile, admin web and backend microservices.",
    description: "An integrated campus prototype combining a React Native mobile application for students, a web admin portal, a Spring Boot REST API, PostgreSQL storage, and Redis caching.",
    problemStatement: "Students, faculty, and administrative staff often must navigate multiple disconnected portals for academic records, attendance, and official communications.",
    role: "Full-Stack & Mobile Developer",
    architecture: "React Native client communicating with a Spring Boot Java REST backend, backed by PostgreSQL for persistence and Redis for token/session caching, containerized in Docker.",
    challenges: "Synchronizing mobile client offline state and caching student schedule data reliably.",
    repository: "https://github.com/Karunpoojari7/GMU-CONNECT-APP",
    stack: ["React Native", "Spring Boot", "PostgreSQL", "Redis", "Docker"],
    highlights: ["Student mobile client in React Native", "Spring Boot backend architecture", "PostgreSQL database with Redis cache", "Docker containerization"],
    screenshotSlots: [
      {
        title: "Mobile Student Dashboard",
        description: "React Native interface showing student schedule, attendance indicators, and notifications.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      },
      {
        title: "Campus Admin Console",
        description: "Administrative console for managing course registries and faculty announcements.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "intern-management",
    title: "Intern Management System",
    category: "Management Platform",
    status: "DOCUMENTED",
    projectType: "Documented Project",
    summary: "A platform for managing internship cohorts, task evaluation and supervisor workflows.",
    description: "An internship coordination system designed to track student progress, milestone deliverables, task evaluations, and administrative approvals.",
    problemStatement: "Organizations managing student internship batches frequently struggle to track task deliverables, supervisor sign-offs, and structured performance reviews.",
    role: "Full-Stack Developer",
    architecture: "React frontend with clean component state management connecting to a Node.js Express REST API.",
    challenges: "Establishing an intuitive multi-level review permission hierarchy for students and supervisors.",
    repository: "https://github.com/Karunpoojari7/Prodhee_Intern",
    stack: ["React", "Node.js", "Express", "REST API"],
    highlights: ["Cohort task tracking and milestone reviews", "Supervisor evaluation workflow", "Structured REST API endpoints"],
    screenshotSlots: [
      {
        title: "Intern Task Board",
        description: "Sprint-style task assignment and milestone submission interface for interns.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "resume-gap-ai",
    title: "Resume Gap AI",
    category: "AI · Productivity",
    status: "DOCUMENTED",
    projectType: "Working Prototype",
    summary: "An AI-powered tool for resume and skill-gap analysis.",
    description: "An intelligent document evaluation tool designed to parse professional resumes, identify missing technical competencies against target job descriptions, and generate actionable optimization reports.",
    problemStatement: "Candidates struggle to recognize specific technical skill deficiencies that cause resume filtering in automated Applicant Tracking Systems (ATS).",
    role: "AI Developer & Backend Engineer",
    architecture: "FastAPI Python backend with PDF/text extraction parsing, semantic token comparison, and structured LLM prompt chains.",
    challenges: "Eliminating hallucinated skill matches while identifying subtle semantic equivalencies across programming frameworks.",
    repository: "https://github.com/Karunpoojari7/Resume_Gap_AI",
    stack: ["Python", "FastAPI", "NLP", "LLM Integration"],
    highlights: ["Automated resume text parsing", "Targeted skill-gap identification", "Structured report generation"],
    screenshotSlots: [
      {
        title: "Skill Gap Comparison Matrix",
        description: "Interactive report breaking down candidate qualifications versus targeted technical job requirements.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  },
  {
    slug: "bayora-sec",
    title: "Bayora Sec",
    category: "AI Security",
    status: "VERIFIED",
    projectType: "Research & Development",
    summary: "Zero-trust infrastructure for controlled AI safety evaluation.",
    description: "A defensive AI safety testing environment featuring isolated red-team, target-model, and blue-team test runners, cryptographic SHA-256 evidence tracking, canary contamination checks, and verifiable test-integrity reporting.",
    problemStatement: "Evaluating generative AI safety and adversarial prompt injection vulnerabilities requires isolated environments with tamper-evident execution logging.",
    role: "Security Engineer & Systems Developer",
    architecture: "Dockerized execution runners communicating with local Ollama LLMs, verified via SHA-256 cryptographic hashes and structured test suites.",
    challenges: "Preventing jailbreak canary contamination between red-team probe runners and evaluated models while preserving auditable verification chains.",
    repository: "https://github.com/Karunpoojari7/Bayora_Sec",
    stack: ["React", "FastAPI", "Docker", "Ollama", "SHA-256"],
    highlights: ["Isolated execution sandbox", "Cryptographic SHA-256 evidence chain", "Canary leakage and prompt injection checks", "Local LLM evaluation with Ollama"],
    screenshotSlots: [
      {
        title: "Adversarial Runner Console",
        description: "Isolated execution console displaying test run status, prompt evaluation telemetry, and model responses.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      },
      {
        title: "Cryptographic Evidence Ledger",
        description: "SHA-256 hash verification log ensuring tamper-evident test integrity across evaluation runs.",
        placeholder: "Authentic interface capture in progress. Genuine screenshot will be published upon test completion."
      }
    ]
  }
];
