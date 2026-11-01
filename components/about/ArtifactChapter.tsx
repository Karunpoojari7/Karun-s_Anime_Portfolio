"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Code2, BrainCircuit, ShieldCheck, Layers, ExternalLink, LucideIcon } from "lucide-react";
import { projects } from "@/lib/projects";

interface ThemeDossier {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  description: string;
  projectSlugs: string[];
}

const artifactThemes: ThemeDossier[] = [
  {
    id: "software",
    index: "01",
    title: "Software Development",
    subtitle: "FULL-STACK & WEB PLATFORMS",
    icon: Code2,
    description: "Designing end-to-end applications with modular React architectures, Next.js server components, relational data models, and fluid responsive design.",
    projectSlugs: ["jewellery-website", "doctor-portfolio", "gmu-crm"],
  },
  {
    id: "ai",
    index: "02",
    title: "Artificial Intelligence",
    subtitle: "APPLIED MACHINE INTELLIGENCE",
    icon: BrainCircuit,
    description: "Deploying machine learning models for computer vision medical diagnostics, automated document skill-gap extraction, and intelligent service concepts.",
    projectSlugs: ["diabetic-retinopathy", "resume-gap-ai", "urban-sky-ai"],
  },
  {
    id: "cyber",
    index: "03",
    title: "Cybersecurity Learning",
    subtitle: "PACKET & PROTOCOL SCRUTINY",
    icon: ShieldCheck,
    description: "Analyzing network traffic with Wireshark and TShark, dissecting TCP/IP anomalies, auditing DNS query streams, and mastering defensive SOC operations.",
    projectSlugs: ["bayora-sec"],
  },
  {
    id: "systems",
    index: "04",
    title: "Systems & Security Engineering",
    subtitle: "MULTI-TIER INFRASTRUCTURE",
    icon: Layers,
    description: "Designing zero-trust AI testbeds with SHA-256 evidence verification, multi-service Docker configurations, and multi-tier institutional ERP prototypes.",
    projectSlugs: ["bayora-sec", "gmu-connect"],
  },
];

export default function ArtifactChapter() {
  const [activeThemeId, setActiveThemeId] = useState<string>("software");

  const currentTheme = artifactThemes.find((t) => t.id === activeThemeId) || artifactThemes[0];
  const relatedProjects = projects.filter((p) => currentTheme.projectSlugs.includes(p.slug));

  return (
    <section className="relative w-full py-16 border-t border-red-950/60">
      {/* Chapter Label Bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded bg-red-950/50 text-red-400 border border-red-800/60 font-semibold">
          CHAPTER 04
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          TANGIBLE ARTIFACTS // TRANSLATING THEORY INTO PRODUCTION
        </span>
      </div>

      <div className="max-w-3xl mb-10">
        <h2
          className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Translating theory into tangible artifacts.
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 font-sans mt-3 leading-relaxed">
          Knowledge is hollow until it is tested in production code. Rather than following generic tutorials, each of my projects explores a specific engineering hypothesis across four core disciplines.
        </p>
      </div>

      {/* 4 Theme Selector Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {artifactThemes.map((theme) => {
          const Icon = theme.icon;
          const isActive = theme.id === activeThemeId;

          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => setActiveThemeId(theme.id)}
              className={`p-3.5 rounded-sm border text-left transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-red-500 bg-red-950/40 shadow-[0_0_20px_rgba(255,38,59,0.3)] text-white"
                  : "border-red-950/60 bg-black/60 text-neutral-400 hover:border-red-800 hover:text-neutral-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-red-400 font-semibold">
                  {theme.index} // THEME
                </span>
                <Icon size={16} className={isActive ? "text-red-400" : "text-neutral-500"} />
              </div>
              <h4 className="font-serif font-bold text-sm text-white truncate">
                {theme.title}
              </h4>
              <span className="font-mono text-[8px] text-neutral-400 tracking-wider truncate block mt-0.5">
                {theme.subtitle}
              </span>
            </button>
          );
        })}
      </div>

      {/* Theme Detail Panel with Real Connected Projects */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-8 rounded-sm border border-red-500/80 bg-[#090507] shadow-[0_0_40px_rgba(255,38,59,0.2)] space-y-6"
        >
          <div>
            <span className="font-mono text-[10px] tracking-wider text-red-400 uppercase block mb-1">
              THEMATIC SCOPE // {currentTheme.subtitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
              {currentTheme.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2 max-w-3xl leading-relaxed">
              {currentTheme.description}
            </p>
          </div>

          {/* Connected Real Projects Cards */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
              VERIFIED MISSIONS UNDER THIS THEME ({relatedProjects.length})
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {relatedProjects.map((p) => (
                <div
                  key={p.slug}
                  className="p-4 rounded bg-black/60 border border-red-950/60 hover:border-red-600/80 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-1 mb-2 border-b border-red-950/50">
                      <span className="font-mono text-[9px] text-red-400 tracking-wider uppercase">
                        {p.category}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>

                    <h4 className="font-serif font-bold text-base text-white">
                      {p.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                      {p.summary}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-3">
                      {p.stack.slice(0, 3).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[8px] tracking-wider bg-red-950/30 border border-red-900/40 text-neutral-300 px-1.5 py-0.5 rounded"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-red-950/50 flex items-center justify-between">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-[11px] font-mono text-red-400 hover:text-white flex items-center gap-1"
                    >
                      <span>Inspect Dossier</span>
                      <ArrowUpRight size={13} />
                    </Link>

                    {p.repository && (
                      <a
                        href={p.repository}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1"
                      >
                        <Github size={12} />
                        <span>Source ↗</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
