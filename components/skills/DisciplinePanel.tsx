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
  ChevronsRight,
} from "lucide-react";
import { SkillDiscipline } from "./skillsData";

interface DisciplinePanelProps {
  discipline: SkillDiscipline;
}

export default function DisciplinePanel({ discipline }: DisciplinePanelProps) {
  const [activeTab, setActiveTab] = useState<"technologies" | "evidence">("technologies");

  // Helper for technology brand icon with authentic colors
  const getTechIcon = (iconType: string) => {
    switch (iconType) {
      case "react":
        return <span className="text-[#00d8ff] font-bold text-sm">⚛</span>;
      case "next":
        return <span className="text-white font-bold text-xs bg-white/10 px-1 py-0.5 rounded">N</span>;
      case "ts":
        return (
          <span className="text-[#3178c6] font-bold text-[10px] bg-[#3178c6]/15 border border-[#3178c6]/40 px-1 py-0.5 rounded">
            TS
          </span>
        );
      case "node":
        return <span className="text-[#539e43] font-bold text-xs">⬡</span>;
      case "tailwind":
        return <span className="text-[#38bdf8] font-bold text-sm">≋</span>;
      case "postgres":
        return <Database size={13} className="text-[#336791]" />;
      case "git":
        return <span className="text-[#f05032] font-bold text-xs">⎇</span>;
      case "docker":
        return <span className="text-[#2496ed] font-bold text-xs">🐳</span>;
      case "redis":
        return <Database size={13} className="text-[#dc382d]" />;
      case "python":
        return <span className="text-[#3776ab] font-bold text-xs">🐍</span>;
      case "tensorflow":
        return <span className="text-[#ff6f00] font-bold text-xs">◈</span>;
      case "opencv":
        return <span className="text-[#5c8cee] font-bold text-xs">◎</span>;
      case "fastapi":
        return <span className="text-[#009688] font-bold text-xs">⚡</span>;
      case "pytorch":
        return <span className="text-[#ee4c2c] font-bold text-xs">🔥</span>;
      case "scikit":
        return <span className="text-[#f89939] font-bold text-xs">⚝</span>;
      case "ollama":
        return <span className="text-white font-bold text-xs">🦙</span>;
      case "pandas":
        return <span className="text-[#150458] font-bold text-xs">🐼</span>;
      case "flask":
        return <span className="text-white font-bold text-xs">🧪</span>;
      case "wireshark":
        return <Shield size={13} className="text-[#1e6fba]" />;
      case "linux":
        return <Terminal size={13} className="text-amber-400" />;
      case "network":
        return <span className="text-emerald-400 font-bold text-xs">🌐</span>;
      case "dns":
        return <span className="text-cyan-400 font-bold text-xs">📡</span>;
      case "soc":
        return <Shield size={13} className="text-red-400" />;
      case "lock":
        return <span className="text-red-500 font-bold text-xs">🔒</span>;
      case "nmap":
        return <span className="text-indigo-400 font-bold text-xs">🔍</span>;
      case "burp":
        return <span className="text-orange-500 font-bold text-xs">🛡</span>;
      case "github":
        return <span className="text-white font-bold text-xs">🐙</span>;
      case "vscode":
        return <span className="text-[#007acc] font-bold text-xs">💻</span>;
      case "postman":
        return <span className="text-[#ff6c37] font-bold text-xs">📮</span>;
      case "vercel":
        return <span className="text-white font-bold text-xs">▲</span>;
      default:
        return <Code size={13} className="text-red-400" />;
    }
  };

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* 1. SOFT AMBIENT CRIMSON GLOW BEHIND PANEL */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 42, 42, 0.35) 0%, transparent 75%)",
          filter: "blur(30px)",
        }}
      />

      {/* 2. MAIN OBSIDIAN SCI-FI TECH PANEL WITH CORNER ACCENTS */}
      <div className="relative w-full rounded-2xl bg-[#080204]/94 border border-red-500/70 backdrop-blur-xl p-6 sm:p-7 shadow-[0_0_35px_rgba(255,42,42,0.25),inset_0_0_25px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Sci-Fi Angular Corner Brackets */}
        <div className="pointer-events-none absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-red-500" />
        <div className="pointer-events-none absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-red-500" />
        <div className="pointer-events-none absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-red-500" />
        <div className="pointer-events-none absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-red-500" />

        {/* Decorative Akatsuki Cloud Outline Motif (Top-Right) */}
        <div className="pointer-events-none absolute top-4 right-5 opacity-40">
          <svg width="68" height="38" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
              stroke="#ff263b"
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill="rgba(255, 38, 59, 0.08)"
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="space-y-5"
          >
            {/* Header: Discipline Number & Title */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-semibold uppercase mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
                DISCIPLINE {discipline.number}
              </div>

              <h2
                className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {discipline.title}
              </h2>

              <p className="text-xs sm:text-[13px] text-neutral-300 font-sans mt-2 leading-relaxed">
                {discipline.description}
              </p>
            </div>

            {/* Dual Mode Switcher Tabs */}
            <div className="inline-flex items-center p-1 rounded-xl bg-black/80 border border-red-950/80 backdrop-blur-md w-full">
              <button
                type="button"
                onClick={() => setActiveTab("technologies")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "technologies"
                    ? "bg-gradient-to-r from-red-600 to-[#ff263b] text-white shadow-[0_0_16px_rgba(255,38,59,0.5)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Layers size={13} />
                <span>Technologies</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("evidence")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                  activeTab === "evidence"
                    ? "bg-gradient-to-r from-red-600 to-[#ff263b] text-white shadow-[0_0_16px_rgba(255,38,59,0.5)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                <Folder size={13} />
                <span>Project Evidence</span>
              </button>
            </div>

            {/* TAB CONTENT A: TECHNOLOGIES & APPLIED IN PROJECTS */}
            {activeTab === "technologies" ? (
              <div className="space-y-4">
                {/* 3x3 Grid of Technologies */}
                <div className="grid grid-cols-3 gap-2">
                  {discipline.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-2 px-2.5 py-2 rounded-lg bg-black/75 border border-red-950/80 hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-200 group shadow-[0_0_8px_rgba(0,0,0,0.6)]"
                    >
                      <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                        {getTechIcon(tech.iconType)}
                      </div>
                      <span className="text-[11px] font-sans text-neutral-200 group-hover:text-white transition-colors truncate">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Section: Applied in Projects */}
                <div className="space-y-2 pt-2 border-t border-red-950/70">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-400 uppercase font-semibold">
                    APPLIED IN PROJECTS
                  </div>

                  <div className="space-y-2">
                    {discipline.appliedIn.slice(0, 2).map((proj) => {
                      const Content = (
                        <div className="flex items-center justify-between p-3 rounded-xl bg-black/75 border border-red-950/80 hover:border-red-500/80 hover:bg-red-950/30 transition-all duration-200 group cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.7)]">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-900/60 flex items-center justify-center text-red-400 shrink-0 group-hover:text-white group-hover:border-red-500 transition-colors">
                              <Laptop size={14} />
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-xs font-serif font-bold text-white group-hover:text-red-400 transition-colors truncate">
                                {proj.title}
                              </h4>
                              <p className="text-[10px] text-neutral-400 truncate">
                                {proj.subtitle}
                              </p>
                            </div>
                          </div>

                          <div className="text-red-500 group-hover:translate-x-1 transition-transform shrink-0 ml-2">
                            <ChevronsRight size={15} />
                          </div>
                        </div>
                      );

                      return proj.isExternal ? (
                        <a
                          key={proj.title}
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="block focus:outline-none"
                        >
                          {Content}
                        </a>
                      ) : (
                        <Link key={proj.title} href={proj.link} className="block focus:outline-none">
                          {Content}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              /* TAB CONTENT B: DETAILED PROJECT EVIDENCE */
              <div className="space-y-3">
                {discipline.evidence.map((item) => (
                  <div
                    key={item.title}
                    className="p-3.5 rounded-xl bg-black/75 border border-red-950/80 hover:border-red-500/70 transition-all duration-200 space-y-2 group shadow-[0_0_10px_rgba(0,0,0,0.6)]"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-serif font-bold text-white group-hover:text-red-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-red-950/60 border border-red-900/60 text-red-300">
                        {item.role}
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-300 font-sans leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-neutral-900">
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[9px] text-neutral-400 bg-neutral-900/80 px-1.5 py-0.5 rounded"
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
                          className="inline-flex items-center gap-1 font-mono text-[10px] text-red-400 hover:text-white transition-colors"
                        >
                          <span>Repository</span>
                          <ExternalLink size={11} />
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1 font-mono text-[10px] text-red-400 hover:text-white transition-colors"
                        >
                          <span>View Dossier</span>
                          <ArrowUpRight size={12} />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
