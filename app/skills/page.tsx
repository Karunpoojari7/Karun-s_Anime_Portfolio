"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit, ShieldAlert, Wrench, CheckCircle, Flame, BookOpen, Sparkles, ArrowUpRight } from "lucide-react";

interface SkillItem {
  name: string;
  stage: "Used in Projects" | "Practised in Labs" | "Currently Learning" | "Exploring";
  context: string;
}

interface DomainArsenal {
  id: string;
  title: string;
  kanji: string;
  tag: string;
  overview: string;
  icon: React.ReactNode;
  skills: SkillItem[];
  exerciseBrief: string;
}

const ARSENAL_DOMAINS: DomainArsenal[] = [
  {
    id: "dev",
    title: "Full-Stack Development",
    kanji: "術",
    tag: "DISCIPLINE 01 // CLIENT & SERVER SYSTEMS",
    overview:
      "Crafting resilient, high-speed digital products with modern TypeScript frameworks, server components, relational databases, and modular component design.",
    icon: <Code2 size={22} />,
    exerciseBrief: "Validated through production architectures in GMU Connect 2.0, Bayora Sec, and MGS Jewellery.",
    skills: [
      { name: "TypeScript", stage: "Used in Projects", context: "Strong typing across full Next.js application trees" },
      { name: "React & Next.js", stage: "Used in Projects", context: "App Router, server actions, SSR/SSG workflows" },
      { name: "JavaScript (ES6+)", stage: "Used in Projects", context: "DOM APIs, async/await streams, modular patterns" },
      { name: "HTML5 & Modern CSS", stage: "Used in Projects", context: "Semantic web standards, CSS keyframe animation" },
      { name: "Tailwind CSS", stage: "Used in Projects", context: "Design token systems, custom theme configuration" },
      { name: "Node.js & Express", stage: "Used in Projects", context: "RESTful backend endpoints and middleware" },
      { name: "PostgreSQL", stage: "Used in Projects", context: "Relational modeling, indexing, parameterized queries" },
      { name: "Redis", stage: "Practised in Labs", context: "In-memory caching and session store concepts" },
      { name: "Spring Boot", stage: "Exploring", context: "Studied through GMU Connect backend microservice prototype" },
    ],
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    kanji: "知",
    tag: "DISCIPLINE 02 // APPLIED MACHINE LEARNING & LLMs",
    overview:
      "Bridging machine learning techniques with real-world applications: automated document parsing, computer vision medical diagnostics, and model inference.",
    icon: <BrainCircuit size={22} />,
    exerciseBrief: "Applied in Resume Gap AI, Diabetic Retinopathy Detection, and Ollama integration in Bayora Sec.",
    skills: [
      { name: "Python", stage: "Used in Projects", context: "Data manipulation, model scripting, API integration" },
      { name: "Applied Machine Learning", stage: "Used in Projects", context: "Feature extraction, preprocessing, classification" },
      { name: "LLM Orchestration", stage: "Used in Projects", context: "Structured output prompting and API tool calling" },
      { name: "Prompt Engineering", stage: "Used in Projects", context: "Chain-of-thought and few-shot formatting" },
      { name: "Local Inference (Ollama)", stage: "Practised in Labs", context: "Running local lightweight models in Bayora Sec" },
      { name: "Model Evaluation Concepts", stage: "Currently Learning", context: "Precision/Recall, F1 scoring, confusion matrices" },
      { name: "AI Safety & Prompt Injection", stage: "Currently Learning", context: "Investigating defensive filters and test harnesses" },
    ],
  },
  {
    id: "cyber",
    title: "Defensive Cybersecurity",
    kanji: "護",
    tag: "DISCIPLINE 03 // PACKET FORENSICS & SOC OPERATIONS",
    overview:
      "Deepening practical understanding of network protocols, packet inspection, incident triage, and cryptographic verification to safeguard interconnected software.",
    icon: <ShieldAlert size={22} />,
    exerciseBrief: "Grounded in postgraduate coursework at GM University and continuous hands-on PCAP packet labs.",
    skills: [
      { name: "Network Packet Analysis", stage: "Practised in Labs", context: "Dissecting PCAP captures, session handshakes" },
      { name: "Wireshark & TShark", stage: "Practised in Labs", context: "Display filters, protocol hierarchies, stream chasing" },
      { name: "TCP/IP Protocol Suite", stage: "Practised in Labs", context: "Flag analysis, sequence tracking, window size logic" },
      { name: "DNS Investigation", stage: "Practised in Labs", context: "Query structure, suspicious tunneling patterns" },
      { name: "SOC Fundamentals", stage: "Currently Learning", context: "Event triage, alert correlation, incident response" },
      { name: "SIEM Concepts", stage: "Currently Learning", context: "Rule triggering, telemetry ingestion, log normalization" },
      { name: "Linux / Kali Linux", stage: "Practised in Labs", context: "Command line utilities, permissions, network tools" },
      { name: "Defensive Security Design", stage: "Exploring", context: "Zero-trust principles, cryptographic hashing (SHA-256)" },
    ],
  },
  {
    id: "tools",
    title: "Engineering Tools & DevOps",
    kanji: "具",
    tag: "DISCIPLINE 04 // WORKFLOW & INFRASTRUCTURE",
    overview:
      "The practical instruments that enable consistent, reproducible software development, source control, and containerized deployment.",
    icon: <Wrench size={22} />,
    exerciseBrief: "Essential daily toolchain across academic and private development repositories.",
    skills: [
      { name: "Git & GitHub", stage: "Used in Projects", context: "Branch workflows, atomic commits, pull requests" },
      { name: "VS Code & Terminals", stage: "Used in Projects", context: "Custom keybindings, debugging extensions, PowerShell" },
      { name: "Docker Fundamentals", stage: "Used in Projects", context: "Containerizing services in Bayora Sec & GMU Connect" },
      { name: "FastAPI", stage: "Used in Projects", context: "High-performance Python backend API development" },
      { name: "Postman / Thunder Client", stage: "Practised in Labs", context: "API contract testing and payload validation" },
      { name: "Technical Documentation", stage: "Used in Projects", context: "Architectural RFCs, READMEs, security reports" },
    ],
  },
];

export default function Skills() {
  const [activeDomainId, setActiveDomainId] = useState<string>("dev");
  const activeDomain = ARSENAL_DOMAINS.find((d) => d.id === activeDomainId) || ARSENAL_DOMAINS[0];

  const getStageBadgeClass = (stage: SkillItem["stage"]) => {
    switch (stage) {
      case "Used in Projects":
        return "badge-projects";
      case "Practised in Labs":
        return "badge-labs";
      case "Currently Learning":
        return "badge-learning";
      case "Exploring":
        return "badge-exploring";
      default:
        return "";
    }
  };

  const getStageIcon = (stage: SkillItem["stage"]) => {
    switch (stage) {
      case "Used in Projects":
        return <CheckCircle size={12} />;
      case "Practised in Labs":
        return <Flame size={12} />;
      case "Currently Learning":
        return <BookOpen size={12} />;
      case "Exploring":
        return <Sparkles size={12} />;
    }
  };

  return (
    <div className="skills-page-root">
      {/* Background Ambience */}
      <div className="skills-ambient-glow" />

      <div className="section-wrap skills-container">
        {/* Header */}
        <header className="skills-header">
          <div className="eyebrow">
            <span className="pulse-dot" /> SHINOBI TRAINING GROUNDS // ARSENAL
          </div>
          <h1 className="page-title">
            Mastery is a <em>continuous discipline.</em>
          </h1>
          <p className="page-lead">
            No arbitrary percentage bars or fabricated expertise. A transparent inventory of technologies, categorized by actual application: implemented in projects, verified in hands-on labs, or currently under active study.
          </p>
        </header>

        {/* Domain Navigation Tabs */}
        <div className="training-ground-tabs">
          {ARSENAL_DOMAINS.map((domain) => {
            const isSelected = domain.id === activeDomainId;
            return (
              <button
                key={domain.id}
                type="button"
                className={`training-tab-card ${isSelected ? "is-selected" : ""}`}
                onClick={() => setActiveDomainId(domain.id)}
              >
                <div className="tab-icon-row">
                  <div className="tab-icon">{domain.icon}</div>
                  <span className="tab-kanji">{domain.kanji}</span>
                </div>
                <h3>{domain.title}</h3>
                <span className="tab-skill-count">{domain.skills.length} Verified Disciplines</span>
                <div className="tab-active-indicator" />
              </button>
            );
          })}
        </div>

        {/* Active Domain Training Ground Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDomain.id}
            className="training-ground-stage"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Domain Overview Topbar */}
            <div className="domain-overview-panel">
              <div>
                <span className="domain-tag-label">{activeDomain.tag}</span>
                <h2>{activeDomain.title}</h2>
                <p className="domain-desc">{activeDomain.overview}</p>
              </div>
              <div className="domain-exercise-proof">
                <span className="proof-label">PRACTICAL EVIDENCE</span>
                <p>{activeDomain.exerciseBrief}</p>
              </div>
            </div>

            {/* Skills Matrix Grid */}
            <div className="skills-matrix-grid">
              {activeDomain.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="skill-matrix-card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <div className="skill-card-topbar">
                    <h4>{skill.name}</h4>
                    <span className={`skill-stage-badge ${getStageBadgeClass(skill.stage)}`}>
                      {getStageIcon(skill.stage)} {skill.stage}
                    </span>
                  </div>
                  <p className="skill-context-desc">{skill.context}</p>
                </motion.div>
              ))}
            </div>

            {/* Stage Legend */}
            <div className="skill-legend-bar">
              <span className="legend-title">VERIFICATION CRITERIA:</span>
              <div className="legend-items">
                <span>
                  <CheckCircle size={13} className="text-emerald" /> <b>Used in Projects:</b> Verified in public Git repos
                </span>
                <span>
                  <Flame size={13} className="text-amber" /> <b>Practised in Labs:</b> Hands-on packet or container exercises
                </span>
                <span>
                  <BookOpen size={13} className="text-blue" /> <b>Currently Learning:</b> Active postgraduate coursework
                </span>
                <span>
                  <Sparkles size={13} className="text-purple" /> <b>Exploring:</b> Conceptual prototypes and research
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation */}
        <div className="skills-footer-links">
          <Link href="/projects" className="button button-primary">
            Inspect Mission Implementations <ArrowUpRight size={16} />
          </Link>
          <Link href="/experience" className="button button-ghost">
            View Chronological Training Log
          </Link>
        </div>
      </div>
    </div>
  );
}
