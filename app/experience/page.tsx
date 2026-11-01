"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Briefcase, ShieldCheck, Terminal, Award, CheckCircle2 } from "lucide-react";

interface TimelineEntry {
  chapter: string;
  category: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  details: string[];
  skills: string[];
  icon: React.ReactNode;
  verified: boolean;
}

const TIMELINE_CHAPTERS: TimelineEntry[] = [
  {
    chapter: "01",
    category: "EDUCATION (POSTGRADUATE)",
    title: "Master of Computer Applications — Cybersecurity",
    organization: "GM University",
    period: "Postgraduate Degree · Ongoing",
    summary:
      "Pursuing master's studies focused on computing fundamentals, network defense, database systems, and secure software development.",
    details: [
      "Specializing in cybersecurity operations, network protocols, and secure software engineering.",
      "Coursework covering operating systems, computer networks, data structures, and relational databases.",
      "Hands-on labs in network packet inspection, vulnerability assessment, and defensive security.",
    ],
    skills: ["Cybersecurity", "Network Architecture", "Database Systems", "Software Engineering"],
    icon: <GraduationCap className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "02",
    category: "EDUCATION (UNDERGRADUATE)",
    title: "Bachelor of Science (BSc)",
    organization: "Sindhi College, Bengaluru",
    period: "Undergraduate Degree · Completed",
    summary:
      "Completed undergraduate science education with a solid grounding in mathematics, analytical thinking, and computing principles.",
    details: [
      "Built core analytical and problem-solving foundations through scientific coursework.",
      "Learned programming basics, structured algorithms, and computer science concepts.",
      "Participated in academic projects and technical activities.",
    ],
    skills: ["Computer Fundamentals", "Problem Solving", "Analytical Thinking", "Mathematics"],
    icon: <GraduationCap className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "03",
    category: "PROFESSIONAL INTERNSHIP",
    title: "Frontend Development Internship",
    organization: "Industry Experience",
    period: "Development Internship · Completed",
    summary:
      "Applied frontend development practices to build responsive web interfaces, ensure component modularity, and improve user experiences.",
    details: [
      "Developed responsive UI components using React, JavaScript, and modern CSS.",
      "Collaborated on codebase improvements, state management, and asset optimization.",
      "Gained practical experience working with version control (Git) in a team setting.",
    ],
    skills: ["React", "JavaScript", "Responsive Design", "Component Architecture", "Git"],
    icon: <Briefcase className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "04",
    category: "PRACTICAL LABS & SELF-LEARNING",
    title: "Defensive Cybersecurity & Network Analysis",
    organization: "Hands-on Packet Analysis & Security Labs",
    period: "Self-Directed Practical Learning · Active",
    summary:
      "Practicing network packet analysis, inspecting traffic protocols, and understanding defensive security workflows.",
    details: [
      "Analyzing network packet captures (PCAP) with Wireshark and TShark to inspect TCP/UDP handshakes and DNS queries.",
      "Studying Security Operations Center (SOC) fundamentals, alert triage, and incident response workflows.",
      "Experimenting with secure coding principles and cryptographic hashing (SHA-256).",
    ],
    skills: ["Wireshark", "TShark", "TCP/IP Protocols", "DNS Inspection", "SOC Fundamentals"],
    icon: <ShieldCheck className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "05",
    category: "SOFTWARE PROJECTS",
    title: "Full-Stack Web & AI Projects",
    organization: "Personal & Academic Projects",
    period: "2024 – Present",
    summary:
      "Building practical applications spanning full-stack web platforms, machine learning diagnostics, and security testing tools.",
    details: [
      "Developed Bayora Sec: an AI safety evaluation environment with SHA-256 evidence tracking.",
      "Built GMU Connect 2.0: student ERP prototype with Spring Boot backend and React Native client.",
      "Explored applied deep learning in medical image analysis (Diabetic Retinopathy Detection).",
    ],
    skills: ["Next.js", "Python", "React", "PostgreSQL", "FastAPI", "Docker"],
    icon: <Terminal className="timeline-icon" size={20} />,
    verified: true,
  },
];

export default function Experience() {
  const [activeChapter, setActiveChapter] = useState<string>("01");

  return (
    <div className="experience-page-root">
      {/* Background Ambience */}
      <div className="experience-bg-glow" />

      <div className="section-wrap experience-container">
        {/* Header */}
        <header className="experience-header">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="pulse-dot" /> EXPERIENCE & BACKGROUND // TIMELINE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="page-title"
          >
            Education & <em>Experience.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="page-lead"
          >
            A clear timeline covering my formal education, development internship, personal projects, and hands-on cybersecurity learning.
          </motion.p>
        </header>

        {/* Wide Interactive Timeline Layout */}
        <div className="shinobi-timeline-wrapper">
          {/* Continuous Glowing Crimson Spine */}
          <div className="timeline-spine-line" />

          {TIMELINE_CHAPTERS.map((item, idx) => {
            const isActive = activeChapter === item.chapter;

            return (
              <motion.article
                key={item.chapter}
                className={`timeline-entry-card ${isActive ? "is-focused" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onClick={() => setActiveChapter(item.chapter)}
              >
                {/* Node on Spine */}
                <div className="spine-node">
                  <div className="spine-node-inner">{item.icon}</div>
                  <span className="spine-node-number">{item.chapter}</span>
                </div>

                {/* Content Box */}
                <div className="entry-content-box">
                  <div className="entry-topbar">
                    <div className="entry-meta">
                      <span className="entry-category-badge">{item.category}</span>
                      <span className="entry-period">{item.period}</span>
                    </div>
                    {item.verified && (
                      <span className="entry-verified-badge" title="Verified experience">
                        <CheckCircle2 size={13} /> VERIFIED RECORD
                      </span>
                    )}
                  </div>

                  <h2 className="entry-title">{item.title}</h2>
                  <h3 className="entry-organization">{item.organization}</h3>

                  <p className="entry-summary">{item.summary}</p>

                  <div className="entry-details-list">
                    {item.details.map((bullet, i) => (
                      <div key={i} className="entry-detail-item">
                        <span className="detail-bullet-mark">卍</span>
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>

                  <div className="entry-skills-row">
                    {item.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Verification Note & Link */}
        <div className="timeline-footer-panel">
          <p className="fine-print">
            All records are anchored in documented repositories, academic enrollments, and reproducible lab captures. No fabricated company positions or unverified claims.
          </p>
          <div className="timeline-actions">
            <Link href="/projects" className="button button-primary">
              Explore Mission Files <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="button button-ghost">
              Inquire About Background
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
