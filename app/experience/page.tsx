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
    category: "EDUCATION",
    title: "Master of Computer Applications — Cybersecurity",
    organization: "GM University",
    period: "Postgraduate Degree · Ongoing",
    summary:
      "Pursuing specialized master's studies focused on foundational computing, defensive security systems, advanced database concepts, and secure application architecture.",
    details: [
      "Specializing in cybersecurity operations, cryptography fundamentals, and secure software engineering.",
      "Hands-on coursework covering operating systems, computer networking, data structures, and database systems.",
      "Bridging application development with proactive security testing and vulnerability identification.",
    ],
    skills: ["Cybersecurity", "Network Architecture", "Database Systems", "Software Engineering"],
    icon: <GraduationCap className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "02",
    category: "PROFESSIONAL EXPERIENCE",
    title: "Frontend Development Internship",
    organization: "Industry Experience",
    period: "Development Internship · Completed",
    summary:
      "Applied modern frontend engineering principles to build real-world web interfaces, ensuring cross-device responsiveness, component modularity, and smooth user experiences.",
    details: [
      "Engineered reusable UI components with responsive layouts and fluid interactions.",
      "Collaborated on frontend codebase architecture, asset optimization, and state management.",
      "Gained practical experience adhering to production development standards and version control practices.",
    ],
    skills: ["React", "JavaScript", "Responsive Design", "Component Architecture", "Git"],
    icon: <Briefcase className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "03",
    category: "PRACTICAL LABS & TRAINING",
    title: "SOC Analyst Learning Journey",
    organization: "Self-Directed Security Labs & Hands-On Analysis",
    period: "Defensive Security Training · Active",
    summary:
      "Deep diving into Security Operations Center (SOC) fundamentals, investigating real network packet captures, and understanding threat detection mechanisms.",
    details: [
      "Analyzing PCAP captures with Wireshark and TShark to inspect TCP/UDP streams, DNS tunneling attempts, and HTTP headers.",
      "Investigating network handshake protocols, suspicious beaconing patterns, and abnormal connection behavior.",
      "Studying SIEM log ingestion, event correlation rules, and incident triage workflows using sanitized lab data.",
    ],
    skills: ["Wireshark", "TShark", "TCP/IP Protocol Suite", "DNS Inspection", "SIEM Fundamentals", "Network Forensics"],
    icon: <ShieldCheck className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "04",
    category: "PROJECT ENGINEERING",
    title: "Software & AI Systems Engineering",
    organization: "Personal & Academic Research Missions",
    period: "9 Documented Missions · 2024 – Present",
    summary:
      "Building practical applications spanning intelligent document analysis, AI safety infrastructure, medical imaging prototypes, and full-stack web platforms.",
    details: [
      "Architected Bayora Sec: zero-trust AI safety testing environment with SHA-256 evidence verification.",
      "Built GMU Connect 2.0 student ERP prototype with Spring Boot backend, PostgreSQL, and React Native client.",
      "Explored applied AI in medical diagnostics (Diabetic Retinopathy) and resume skill-gap extraction.",
    ],
    skills: ["Next.js", "FastAPI", "Python", "PostgreSQL", "Docker", "Applied AI"],
    icon: <Terminal className="timeline-icon" size={20} />,
    verified: true,
  },
  {
    chapter: "05",
    category: "COMMUNITY & LEADERSHIP",
    title: "Technical Community & Event Coordination",
    organization: "University & Peer Tech Initiatives",
    period: "Active Engagement",
    summary:
      "Participating in student hackathons, organizing university technical sessions, and fostering collaborative learning around coding and cyber awareness.",
    details: [
      "Assisting fellow students in setting up development environments and understanding web development workflows.",
      "Advocating for cyber hygiene, secure password management, and online threat awareness among student peers.",
      "Collaborating on multi-disciplinary engineering initiatives and prototype pitch presentations.",
    ],
    skills: ["Team Leadership", "Cyber Hygiene Advocacy", "Technical Presentations", "Mentorship"],
    icon: <Award className="timeline-icon" size={20} />,
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
            <span className="pulse-dot" /> FIELD HISTORY / TRAINING LOG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="page-title"
          >
            The journey <em>so far.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="page-lead"
          >
            A disciplined chronicle of education, hands-on engineering, security operations training, and practical software creation. Every milestone verified through actual code and lab practice.
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
