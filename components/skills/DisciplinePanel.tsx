"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Folder,
  ArrowUpRight,
  ExternalLink,
  Laptop,
  Database,
  Terminal,
  Shield,
  Code,
} from "lucide-react";
import { SkillDiscipline } from "./skillsData";

interface DisciplinePanelProps {
  discipline: SkillDiscipline;
}

// Technology icon map — returns a JSX element
function TechIcon({ iconType }: { iconType: string }) {
  switch (iconType) {
    case "react":      return <span className="text-[#00d8ff] font-bold text-xs leading-none">⚛</span>;
    case "next":       return <span className="text-white font-bold text-xs leading-none">N</span>;
    case "ts":         return <span className="text-[#3178c6] font-bold text-[9px] bg-[#3178c6]/15 px-0.5 rounded leading-none">TS</span>;
    case "node":       return <span className="text-[#539e43] font-bold text-xs leading-none">⬡</span>;
    case "tailwind":   return <span className="text-[#38bdf8] font-bold text-xs leading-none">≋</span>;
    case "postgres":   return <Database size={12} className="text-[#336791]" />;
    case "git":        return <span className="text-[#f05032] font-bold text-xs leading-none">⎇</span>;
    case "docker":     return <span className="text-[#2496ed] text-xs leading-none">🐳</span>;
    case "redis":      return <Database size={12} className="text-[#dc382d]" />;
    case "python":     return <span className="text-[#3776ab] text-xs leading-none">🐍</span>;
    case "tensorflow": return <span className="text-[#ff6f00] font-bold text-xs leading-none">◈</span>;
    case "opencv":     return <span className="text-[#5c8cee] font-bold text-xs leading-none">◎</span>;
    case "fastapi":    return <span className="text-[#009688] font-bold text-xs leading-none">⚡</span>;
    case "pytorch":    return <span className="text-[#ee4c2c] text-xs leading-none">🔥</span>;
    case "scikit":     return <span className="text-[#f89939] font-bold text-xs leading-none">⚝</span>;
    case "ollama":     return <span className="text-white text-xs leading-none">🦙</span>;
    case "pandas":     return <span className="text-[#150458] text-xs leading-none">🐼</span>;
    case "flask":      return <span className="text-white text-xs leading-none">🧪</span>;
    case "wireshark":  return <Shield size={12} className="text-[#1e6fba]" />;
    case "linux":      return <Terminal size={12} className="text-amber-400" />;
    case "terminal":   return <Terminal size={12} className="text-neutral-300" />;
    case "network":    return <span className="text-emerald-400 text-xs leading-none">🌐</span>;
    case "dns":        return <span className="text-cyan-400 text-xs leading-none">📡</span>;
    case "soc":        return <Shield size={12} className="text-red-400" />;
    case "lock":       return <span className="text-red-500 text-xs leading-none">🔒</span>;
    case "nmap":       return <span className="text-indigo-400 text-xs leading-none">🔍</span>;
    case "burp":       return <span className="text-orange-500 text-xs leading-none">🛡</span>;
    case "github":     return <span className="text-white text-xs leading-none">🐙</span>;
    case "vscode":     return <span className="text-[#007acc] text-xs leading-none">💻</span>;
    case "postman":    return <span className="text-[#ff6c37] text-xs leading-none">📮</span>;
    case "vercel":     return <span className="text-white font-bold text-xs leading-none">▲</span>;
    default:           return <Code size={12} className="text-red-400" />;
  }
}

const panelVariants = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut", delay: 0.4 } },
};

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit:   { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const techVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export default function DisciplinePanel({ discipline }: DisciplinePanelProps) {
  const [activeTab, setActiveTab] = useState<"technologies" | "evidence">("technologies");

  return (
    <motion.div
      className="relative w-full max-w-[420px] mx-auto select-none"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Soft outer glow behind panel */}
      <div
        className="pointer-events-none absolute -inset-4 rounded-2xl opacity-15"
        style={{
          background: "radial-gradient(circle at center, rgba(225,29,46,0.5) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />

      {/* Main Panel */}
      <div className="relative rounded-2xl bg-[#07020a]/95 border border-red-500/55 p-5 sm:p-6 shadow-[0_0_50px_rgba(225,29,46,0.25),inset_0_0_40px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Corner bracket accents */}
        <div className="pointer-events-none absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500/80" />
        <div className="pointer-events-none absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-red-500/80" />
        <div className="pointer-events-none absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-red-500/80" />
        <div className="pointer-events-none absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500/80" />

        {/* Akatsuki cloud motif (top-right decorative) */}
        <div className="pointer-events-none absolute top-4 right-4 opacity-25">
          <svg width="62" height="36" viewBox="0 0 100 58" fill="none">
            <path
              d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
              stroke="#ff263b"
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill="rgba(255,38,59,0.07)"
            />
            <path
              d="M36 28 C34 22 40 16 48 18 C52 19 56 24 54 28"
              stroke="#ff263b"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={discipline.id}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="space-y-4"
          >
            {/* Header */}
            <div>
              <div className="font-mono text-[9px] tracking-[0.28em] text-red-500 font-semibold uppercase mb-1 flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_6px_#ff263b]" />
                DISCIPLINE {discipline.number}
              </div>
              <h2
                className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight leading-tight mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {discipline.title}
              </h2>
              <p className="text-[12px] text-neutral-300 leading-relaxed">
                {discipline.description}
              </p>
            </div>

            {/* Tab switcher */}
            <div className="flex items-center rounded-lg bg-black/70 border border-red-950/70 p-0.5 gap-0.5">
              <button
                type="button"
                onClick={() => setActiveTab("technologies")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-mono text-[10px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "technologies"
                    ? "bg-gradient-to-r from-[#8e101e] to-[#e11d2e] text-white shadow-[0_0_14px_rgba(225,29,46,0.55)]"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Layers size={11} />
                Technologies
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("evidence")}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-md font-mono text-[10px] font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "evidence"
                    ? "bg-gradient-to-r from-[#8e101e] to-[#e11d2e] text-white shadow-[0_0_14px_rgba(225,29,46,0.55)]"
                    : "text-neutral-400 hover:text-neutral-200"
                }`}
              >
                <Folder size={11} />
                Project Evidence
              </button>
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              {activeTab === "technologies" ? (
                <motion.div
                  key="tech"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-3.5"
                >
                  {/* 3×3 tech grid */}
                  <motion.div
                    className="grid grid-cols-3 gap-1.5"
                    variants={techVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {discipline.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        variants={techItemVariants}
                        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-black/60 border border-red-950/70 hover:border-red-500/60 hover:bg-red-950/25 transition-all duration-200 group"
                      >
                        <div className="w-4 h-4 flex items-center justify-center shrink-0">
                          <TechIcon iconType={tech.iconType} />
                        </div>
                        <span className="text-[10px] font-sans text-neutral-300 group-hover:text-white transition-colors truncate">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Applied In Projects */}
                  <div className="space-y-2 pt-2 border-t border-red-950/60">
                    <div className="font-mono text-[8px] tracking-[0.28em] text-red-400/90 uppercase font-semibold">
                      APPLIED IN PROJECTS
                    </div>
                    <div className="space-y-1.5">
                      {discipline.appliedIn.slice(0, 2).map((proj) => {
                        const Inner = (
                          <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-black/60 border border-red-950/70 hover:border-red-500/60 hover:bg-red-950/25 transition-all duration-200 group cursor-pointer">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-6 h-6 rounded bg-red-950/40 border border-red-900/50 flex items-center justify-center text-red-400 shrink-0 group-hover:text-white group-hover:border-red-500/80 transition-colors">
                                <Laptop size={12} />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-[11px] font-serif font-bold text-white group-hover:text-red-300 transition-colors truncate">
                                  {proj.title}
                                </h4>
                                <p className="text-[9px] text-neutral-500 truncate">{proj.subtitle}</p>
                              </div>
                            </div>
                            <div className="text-neutral-600 group-hover:text-red-400 transition-all shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                              {proj.isExternal ? (
                                <ExternalLink size={11} />
                              ) : (
                                <ArrowUpRight size={12} />
                              )}
                            </div>
                          </div>
                        );
                        return proj.isExternal ? (
                          <a
                            key={proj.title}
                            href={proj.link}
                            target="_blank"
                            rel="noreferrer"
                            className="block"
                          >
                            {Inner}
                          </a>
                        ) : (
                          <Link key={proj.title} href={proj.link} className="block">
                            {Inner}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="evidence"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-2.5"
                >
                  {discipline.evidence.map((item) => (
                    <div
                      key={item.title}
                      className="p-3 rounded-lg bg-black/60 border border-red-950/70 hover:border-red-500/60 transition-all duration-200 space-y-2 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-[11px] font-serif font-bold text-white group-hover:text-red-300 transition-colors">
                          {item.title}
                        </h4>
                        <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-red-950/60 border border-red-900/50 text-red-300 shrink-0 whitespace-nowrap">
                          {item.role}
                        </span>
                      </div>
                      <p className="text-[10px] text-neutral-400 leading-relaxed">{item.summary}</p>
                      <div className="flex items-center justify-between pt-1 border-t border-neutral-900/80">
                        <div className="flex flex-wrap gap-1">
                          {item.technologies.map((t) => (
                            <span
                              key={t}
                              className="font-mono text-[8px] text-neutral-500 bg-neutral-900/70 px-1 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {item.isExternal ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 font-mono text-[9px] text-red-400 hover:text-white transition-colors"
                          >
                            Repository <ExternalLink size={9} />
                          </a>
                        ) : (
                          <Link
                            href={item.link}
                            className="inline-flex items-center gap-1 font-mono text-[9px] text-red-400 hover:text-white transition-colors"
                          >
                            View Dossier <ArrowUpRight size={10} />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
