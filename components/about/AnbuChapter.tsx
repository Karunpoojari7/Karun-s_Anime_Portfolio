"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ShieldAlert, Cpu, Database, Code2, ArrowRight } from "lucide-react";

interface AnbuPillar {
  id: string;
  codename: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  practicalProof: string;
}

const anbuPillars: AnbuPillar[] = [
  {
    id: "frontend",
    codename: "OPS // 01",
    category: "FRONTEND CRAFTSMANSHIP",
    title: "UI Ergonomics & State Architecture",
    description: "Engineering fluid, pixel-accurate web applications with strict type safety, modular component hierarchies, and responsive motion ergonomics.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    practicalProof: "Built customer-facing catalogs, gold calculators, and inquiry funnels in MGS Jewellery with zero layout shifts.",
  },
  {
    id: "backend",
    codename: "OPS // 02",
    category: "DISTRIBUTED BACKEND",
    title: "API Design & Relational Persistence",
    description: "Designing RESTful services, scalable data schemas, and in-memory caching to eliminate latency bottlenecks across institutional software.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    practicalProof: "Architected student ERP prototype services and cached session states in the GMU Connect 2.0 multi-tier application.",
  },
  {
    id: "ai",
    codename: "OPS // 03",
    category: "APPLIED MACHINE INTELLIGENCE",
    title: "Cognitive Pipelines & Vision Models",
    description: "Deploying machine learning models for structured document extraction, medical image diagnostics, and secure local LLM evaluation.",
    tech: ["Python", "Computer Vision", "FastAPI", "Ollama"],
    practicalProof: "Engineered deep learning retinal image diagnostic workflows and automated resume-gap extraction in Resume Gap AI.",
  },
  {
    id: "sec",
    codename: "OPS // 04",
    category: "DEFENSIVE CYBERSECURITY",
    title: "Packet Inspection & Zero-Trust Defense",
    description: "Analyzing raw network telemetry, dissecting protocol anomalies, evaluating threat vectors, and testing AI systems for prompt injection vulnerabilities.",
    tech: ["Wireshark", "TShark", "TCP/IP Analysis", "SHA-256 Hashing"],
    practicalProof: "Implemented cryptographic evidence chains (SHA-256) and adversarial red/blue team isolation in Bayora Sec.",
  },
];

export default function AnbuChapter() {
  const [activePillar, setActivePillar] = useState<string>("frontend");

  const current = anbuPillars.find((p) => p.id === activePillar) || anbuPillars[0];

  return (
    <section className="relative w-full py-16 border-t border-red-950/60">
      {/* Chapter Label Bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded bg-red-950/50 text-red-400 border border-red-800/60 font-semibold">
          CHAPTER 02
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          THE ANBU MINDSET // DISCIPLINE · PRECISION · ENGINEERING
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Context Narrative */}
        <div className="lg:col-span-5 space-y-4">
          <h2
            className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tactical precision over brute force.
          </h2>
          <p className="text-sm text-neutral-300 font-sans leading-relaxed">
            In shinobi lore, the ANBU operates in shadows with absolute discipline, precision, and focus. In software engineering, this is the mindset of disciplined craftsmanship: writing code that is clean, secure, and architected to endure under pressure.
          </p>
          <p className="text-xs text-neutral-400 font-mono">
            SELECT A TACTICAL PILLAR TO INSPECT REAL-WORLD IMPLEMENTATION EVIDENCE:
          </p>

          {/* Tactical Pillar Selector Buttons */}
          <div className="space-y-2 pt-2">
            {anbuPillars.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePillar(p.id)}
                className={`w-full text-left p-3 rounded-sm border transition-all duration-200 flex items-center justify-between ${
                  activePillar === p.id
                    ? "border-red-500 bg-red-950/30 shadow-[0_0_20px_rgba(255,38,59,0.3)] text-white"
                    : "border-red-950/60 bg-black/50 text-neutral-400 hover:border-red-800 hover:text-neutral-200"
                }`}
              >
                <div>
                  <span className="font-mono text-[9px] tracking-wider text-red-400 uppercase block">
                    {p.codename} // {p.category}
                  </span>
                  <span className="font-serif font-bold text-sm tracking-wide">
                    {p.title}
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className={`transition-transform ${
                    activePillar === p.id ? "text-red-400 translate-x-1" : "text-neutral-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive ANBU Tactical Terminal */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-7 rounded-sm border border-red-500/80 bg-[#090507] shadow-[0_0_40px_rgba(255,38,59,0.2)] space-y-6"
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-red-950/70">
                <div className="flex items-center gap-2">
                  <Terminal size={15} className="text-red-500" />
                  <span className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase font-semibold">
                    TACTICAL DOSSIER // {current.codename}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-emerald-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PRACTICAL EVIDENCE VERIFIED
                </span>
              </div>

              {/* Title & Overview */}
              <div>
                <span className="font-mono text-[10px] tracking-wider text-neutral-400 uppercase block mb-1">
                  TACTICAL DISCIPLINE
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Technologies Applied */}
              <div>
                <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase block mb-2">
                  TECHNICAL ARSENAL APPLIED
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wider bg-black/80 border border-red-900/60 text-white px-2.5 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified Real-World Implementation Evidence */}
              <div className="p-4 rounded bg-red-950/20 border-l-2 border-red-500 space-y-1">
                <span className="font-mono text-[9px] tracking-widest text-red-400 uppercase block">
                  REAL-WORLD IMPLEMENTATION EVIDENCE
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">
                  {current.practicalProof}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

