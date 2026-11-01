"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowUpRight, Sparkles, BookOpen, Layers, CheckCircle2 } from "lucide-react";
import { Discipline, SkillEvidence } from "./disciplinesData";

interface DisciplineModalProps {
  discipline: Discipline | null;
  onClose: () => void;
}

export default function DisciplineModal({ discipline, onClose }: DisciplineModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll while dialog is open and bind Escape key
  useEffect(() => {
    if (!discipline) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [discipline, onClose]);

  if (!discipline) return null;

  const getStatusBadge = (status: SkillEvidence["status"]) => {
    switch (status) {
      case "USED IN PROJECTS":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-600/40">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            USED IN PROJECTS
          </span>
        );
      case "PRACTISED IN LABS":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-red-950/60 text-red-300 border border-red-600/40">
            <span className="w-1 h-1 rounded-full bg-red-400" />
            PRACTISED IN LABS
          </span>
        );
      case "CURRENTLY LEARNING":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-600/40">
            <span className="w-1 h-1 rounded-full bg-amber-400" />
            CURRENTLY LEARNING
          </span>
        );
      case "EXPLORING":
        return (
          <span className="inline-flex items-center gap-1 font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-sky-950/60 text-sky-300 border border-sky-600/40">
            <span className="w-1 h-1 rounded-full bg-sky-400" />
            EXPLORING
          </span>
        );
    }
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="training-scroll-title"
      >
        {/* 1. Backdrop Overlay with gentle red ambient vignette */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* 2. Scroll Container with Unfolding Entrance Motion */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.82, scaleX: 0.96, y: 15 }}
          animate={{ opacity: 1, scaleY: 1, scaleX: 1, y: 0 }}
          exit={{ opacity: 0, scaleY: 0.85, scaleX: 0.96, y: 10 }}
          transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl flex flex-col z-10 my-auto shadow-[0_0_80px_rgba(225,29,46,0.35)] select-none"
        >
          {/* Top Lacquered Wooden Roller Rod with Metallic Caps */}
          <div className="relative w-full h-4 sm:h-5 flex items-center justify-between z-20">
            <div className="w-3.5 sm:w-5 h-6 sm:h-7 -ml-1 sm:-ml-2 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#1a0205] border border-red-500 shadow-[0_0_12px_#ff263b]" />
            <div className="flex-1 h-4 sm:h-5 bg-gradient-to-r from-[#180306] via-[#6a0f1b] to-[#180306] border-y border-red-500/80 shadow-[0_0_16px_rgba(225,29,46,0.5)] flex items-center justify-center">
              <span className="w-24 sm:w-48 h-[1px] bg-red-400/80 shadow-[0_0_8px_#ff263b]" />
            </div>
            <div className="w-3.5 sm:w-5 h-6 sm:h-7 -mr-1 sm:-mr-2 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#1a0205] border border-red-500 shadow-[0_0_12px_#ff263b]" />
          </div>

          {/* Parchment Body Wrapper with Edge Energy Line */}
          <div className="relative w-[98%] mx-auto bg-[#0a0305] border-x-2 border-red-600/80 shadow-[inset_0_0_35px_rgba(225,29,46,0.2)] overflow-hidden">
            {/* Ambient Watermark Kanji in Background */}
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-serif text-[130px] sm:text-[220px] text-red-950/15 font-bold select-none z-0">
              {discipline.kanji}
            </div>

            {/* Scroll Header Bar */}
            <div className="relative z-10 px-4 sm:px-7 py-4 bg-gradient-to-b from-red-950/40 via-red-950/20 to-transparent border-b border-red-950/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-red-500/90 bg-red-950/70 flex items-center justify-center text-red-400 font-serif text-base sm:text-lg shadow-[0_0_14px_rgba(225,29,46,0.6)] shrink-0">
                  {discipline.kanji}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-red-400 font-bold uppercase truncate">
                      TRAINING SCROLL // PATH {discipline.pathNumber}
                    </span>
                    <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-red-500" />
                    <span className="hidden sm:inline-block font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                      {discipline.category}
                    </span>
                  </div>
                  <p className="font-mono text-[9px] text-neutral-400 tracking-wider uppercase mt-0.5 truncate">
                    SHINOBI CODE: <span className="text-red-400 font-semibold">{discipline.motto}</span>
                  </p>
                </div>
              </div>

              {/* Accessible Close Button */}
              <button
                onClick={onClose}
                type="button"
                aria-label="Close Training Scroll"
                className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white bg-black/50 hover:bg-red-950/70 border border-red-950/80 hover:border-red-500 transition-all duration-200 shrink-0 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scroll Reading Content (Vertical Scroll Container with comfortable padding) */}
            <div
              ref={scrollContainerRef}
              className="relative z-10 p-4 sm:p-7 md:p-8 space-y-6 max-h-[68vh] sm:max-h-[72vh] overflow-y-auto custom-scrollbar"
            >
              {/* 1. Header Title & Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.35 }}
                className="space-y-2.5"
              >
                <h2
                  id="training-scroll-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {discipline.disciplineName}
                </h2>

                {/* Core Philosophy Banner */}
                <div className="p-3.5 sm:p-4 rounded-r-md bg-gradient-to-r from-red-950/35 via-red-950/15 to-transparent border-l-2 border-red-500 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                    <Sparkles size={11} /> CORE PHILOSOPHY
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-200 font-serif italic leading-relaxed">
                    &ldquo;{discipline.philosophy}&rdquo;
                  </p>
                </div>
              </motion.div>

              {/* 2. Specialization Overview */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.35 }}
                className="space-y-2"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-1.5">
                  <BookOpen size={13} className="text-red-400" />
                  <span>SPECIALIZATION ARCHIVE OVERVIEW</span>
                </span>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed bg-[#0e0407]/80 p-3.5 sm:p-4 rounded border border-red-950/70">
                  {discipline.description}
                </p>
              </motion.div>

              {/* 3. Technical Capabilities & Practical Evidence */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.35 }}
                className="space-y-3"
              >
                <div className="flex items-center justify-between border-b border-red-950/70 pb-2">
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                    <Layers size={13} />
                    <span>TECHNICAL CAPABILITIES & PRACTICAL EVIDENCE</span>
                  </span>
                  <span className="font-mono text-[9px] text-neutral-400">
                    {discipline.skills.length} VERIFIED ENTRIES
                  </span>
                </div>

                <div className="space-y-2">
                  {discipline.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded bg-black/60 border border-red-950/70 hover:border-red-600/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ff263b] shrink-0" />
                        <span className="font-mono text-xs sm:text-[13px] font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 pl-4 sm:pl-0">
                        <span className="text-[11px] sm:text-xs font-sans text-neutral-300">
                          {skill.context}
                        </span>
                        {getStatusBadge(skill.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 4. Connected Real Projects */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.35 }}
                className="space-y-3 pt-2"
              >
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <CheckCircle2 size={13} />
                  <span>CONNECTED MISSIONS & DIRECT LAB EVIDENCE</span>
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {discipline.connectedProjects.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      onClick={onClose}
                      className="group p-3 rounded bg-gradient-to-b from-[#140407] to-black/80 border border-red-950/80 hover:border-red-500 transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs font-serif font-bold text-white group-hover:text-red-400 transition-colors">
                          <span className="truncate pr-1">{p.title}</span>
                          <ArrowUpRight size={13} className="shrink-0 text-red-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                        <span className="font-mono text-[9px] text-neutral-400 mt-1 block line-clamp-2">
                          {p.role}
                        </span>
                      </div>
                      <span className="font-mono text-[8px] text-red-400/90 tracking-wider uppercase mt-2 pt-1 border-t border-red-950/50 flex items-center gap-1">
                        VIEW DOSSIER <ExternalLink size={9} />
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Scroll Archive Footer Bar */}
            <div className="relative z-10 px-4 sm:px-7 py-3 bg-black/80 border-t border-red-950/80 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <span className="font-mono text-[9px] text-neutral-400 tracking-wider">
                SHINOBI TRAINING ARCHIVE // KARUN H G // DISCIPLINE & CODE
              </span>

              <button
                onClick={onClose}
                type="button"
                className="w-full sm:w-auto px-4 py-1.5 rounded font-mono text-xs tracking-wider text-neutral-200 hover:text-white bg-red-950/50 hover:bg-red-900/70 border border-red-900/80 hover:border-red-500 transition-colors cursor-pointer"
              >
                CLOSE ARCHIVE [ESC]
              </button>
            </div>
          </div>

          {/* Bottom Lacquered Wooden Roller Rod with Metallic Caps */}
          <div className="relative w-full h-4 sm:h-5 flex items-center justify-between z-20">
            <div className="w-3.5 sm:w-5 h-6 sm:h-7 -ml-1 sm:-ml-2 rounded-sm bg-gradient-to-b from-[#1a0205] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_12px_#ff263b]" />
            <div className="flex-1 h-4 sm:h-5 bg-gradient-to-r from-[#180306] via-[#6a0f1b] to-[#180306] border-y border-red-500/80 shadow-[0_0_16px_rgba(225,29,46,0.5)] flex items-center justify-center">
              <span className="w-24 sm:w-48 h-[1px] bg-red-400/80 shadow-[0_0_8px_#ff263b]" />
            </div>
            <div className="w-3.5 sm:w-5 h-6 sm:h-7 -mr-1 sm:-mr-2 rounded-sm bg-gradient-to-b from-[#1a0205] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_12px_#ff263b]" />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
