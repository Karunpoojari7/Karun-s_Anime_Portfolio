"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Laptop, Terminal, Database, Code, Shield, Cpu, ExternalLink } from "lucide-react";
import { SkillDiscipline } from "./skillsData";

interface DisciplinePanelProps {
  discipline: SkillDiscipline;
}

export default function DisciplinePanel({ discipline }: DisciplinePanelProps) {
  // Helper for technology badge icon
  const getTechIcon = (iconType?: string) => {
    switch (iconType) {
      case "react":
        return <span className="text-[#00d8ff] font-bold text-xs">⚛</span>;
      case "next":
        return <span className="text-white font-bold text-xs">N</span>;
      case "ts":
        return <span className="text-[#3178c6] font-bold text-[10px] bg-white/10 px-1 py-0.5 rounded">TS</span>;
      case "node":
        return <span className="text-[#539e43] font-bold text-xs">⬡</span>;
      case "spring":
        return <span className="text-[#6db33f] font-bold text-xs">🍃</span>;
      case "postgres":
        return <Database size={13} className="text-[#336791]" />;
      case "python":
        return <span className="text-[#3776ab] font-bold text-xs">🐍</span>;
      case "fastapi":
        return <span className="text-[#009688] font-bold text-xs">⚡</span>;
      case "docker":
        return <span className="text-[#2496ed] font-bold text-xs">🐳</span>;
      case "git":
        return <span className="text-[#f05032] font-bold text-xs">⎇</span>;
      case "wireshark":
        return <Shield size={13} className="text-[#1e6fba]" />;
      case "linux":
        return <Terminal size={13} className="text-amber-400" />;
      case "redis":
        return <Database size={13} className="text-[#dc382d]" />;
      default:
        return <Code size={13} className="text-red-400" />;
    }
  };

  return (
    <div className="relative w-full max-w-[460px] mx-auto">
      {/* Ambient Red Glow behind panel */}
      <div
        className="pointer-events-none absolute -inset-2 rounded-2xl opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(225, 29, 46, 0.4) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Main Rounded Rectangular Detail Panel */}
      <div className="relative w-full rounded-2xl bg-[#090305]/90 border border-red-500/50 backdrop-blur-xl p-6 sm:p-7 shadow-[0_0_40px_rgba(225,29,46,0.25),inset_0_0_30px_rgba(0,0,0,0.85)] overflow-hidden">
        {/* Decorative Akatsuki Cloud Outline Motif (Top-Right) */}
        <div className="pointer-events-none absolute top-4 right-4 opacity-30">
          <svg width="74" height="42" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
              stroke="#ff263b"
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill="rgba(255, 38, 59, 0.08)"
            />
            {/* Inner decorative swirls */}
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
            className="space-y-6"
          >
            {/* Header: Discipline Number & Title */}
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-semibold uppercase mb-1 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
                DISCIPLINE {discipline.number}
              </div>

              <h3
                className="text-2xl sm:text-[26px] font-serif font-bold text-white tracking-tight leading-snug"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {discipline.panelTitle}
              </h3>

              <p className="text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                {discipline.description}
              </p>
            </div>

            {/* Section 1: Technologies */}
            <div className="space-y-2.5">
              <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase font-semibold">
                TECHNOLOGIES
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {discipline.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-black/60 border border-red-950/70 hover:border-red-600/60 hover:bg-red-950/20 transition-all duration-200 group"
                  >
                    <div className="w-5 h-5 rounded flex items-center justify-center shrink-0">
                      {getTechIcon(tech.iconType)}
                    </div>
                    <span className="text-xs font-sans text-neutral-200 group-hover:text-white transition-colors truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 2: Applied In */}
            <div className="space-y-2.5 pt-1 border-t border-red-950/60">
              <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase font-semibold">
                APPLIED IN
              </div>

              <div className="space-y-2">
                {discipline.appliedIn.map((proj) => {
                  const Content = (
                    <div className="flex items-center justify-between p-3 rounded-md bg-black/60 border border-red-950/70 hover:border-red-500/60 hover:bg-red-950/30 transition-all duration-200 group cursor-pointer">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded bg-red-950/40 border border-red-900/60 flex items-center justify-center text-red-400 shrink-0 group-hover:text-white group-hover:border-red-500 transition-colors">
                          <Laptop size={15} />
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-xs font-serif font-bold text-white group-hover:text-red-400 transition-colors truncate">
                            {proj.title}
                          </h4>
                          <p className="text-[11px] text-neutral-400 truncate">
                            {proj.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="text-neutral-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2">
                        {proj.isExternal ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
