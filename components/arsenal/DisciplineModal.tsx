"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Shield, Cpu, Code2, CheckCircle, ArrowUpRight, BookOpen } from "lucide-react";
import { Discipline, SkillEvidence } from "./disciplinesData";

interface DisciplineModalProps {
  discipline: Discipline | null;
  onClose: () => void;
}

export default function DisciplineModal({ discipline, onClose }: DisciplineModalProps) {
  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!discipline) return null;

  const getStatusBadge = (status: SkillEvidence["status"]) => {
    switch (status) {
      case "USED IN PROJECTS":
        return (
          <span className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
            USED IN PROJECTS
          </span>
        );
      case "PRACTISED IN LABS":
        return (
          <span className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-red-950/40 text-red-400 border border-red-800/50">
            PRACTISED IN LABS
          </span>
        );
      case "CURRENTLY LEARNING":
        return (
          <span className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-800/50">
            CURRENTLY LEARNING
          </span>
        );
      case "EXPLORING":
        return (
          <span className="font-mono text-[9px] tracking-wider px-2 py-0.5 rounded bg-blue-950/40 text-blue-400 border border-blue-800/50">
            EXPLORING
          </span>
        );
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Scroll Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0c0507] border border-red-500/80 rounded-md shadow-[0_0_60px_rgba(255,38,59,0.35)] overflow-hidden z-10 my-8"
        >
          {/* Top Wooden Rod Accent */}
          <div className="w-full h-2.5 bg-gradient-to-r from-[#200508] via-[#8a121c] to-[#200508] border-b border-red-600/70" />

          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-red-950/70 bg-red-950/20">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-500 font-serif text-base shadow-[0_0_12px_#ff263b]">
                {discipline.kanji}
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-red-400 font-semibold uppercase">
                  TRAINING SCROLL // PATH {discipline.pathNumber} : {discipline.shinobiTitle}
                </p>
                <span className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                  CATEGORY: {discipline.category} // MOTTO: {discipline.motto}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close Scroll"
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-red-950/50 border border-transparent hover:border-red-500/50 transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Title & Philosophy */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {discipline.disciplineName}
              </h2>
              <div className="mt-3 p-3.5 bg-red-950/20 border-l-2 border-red-500 rounded-r">
                <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase block mb-1">
                  CORE PHILOSOPHY
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 italic font-serif">
                  &ldquo;{discipline.philosophy}&rdquo;
                </p>
              </div>
            </div>

            {/* In-depth Scope Description */}
            <div className="space-y-1.5">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                SPECIALIZATION OVERVIEW
              </span>
              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed bg-black/40 p-3.5 rounded border border-red-950/60">
                {discipline.description}
              </p>
            </div>

            {/* Verified Technologies with Evidence Badges (No arbitrary percentages!) */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase block">
                TECHNICAL CAPABILITIES & PRACTICAL EVIDENCE
              </span>
              <div className="grid grid-cols-1 gap-2">
                {discipline.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2.5 rounded bg-black/60 border border-red-950/60 hover:border-red-900/80 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="font-mono text-xs font-semibold text-white">
                        {skill.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pl-3 sm:pl-0">
                      <span className="text-[11px] font-sans text-neutral-400 truncate max-w-[280px]">
                        {skill.context}
                      </span>
                      {getStatusBadge(skill.status)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Real Projects */}
            <div className="space-y-2.5">
              <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
                CONNECTED MISSIONS & LAB EVIDENCE
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {discipline.connectedProjects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group flex flex-col p-3 rounded bg-red-950/20 border border-red-950/50 hover:border-red-600 hover:bg-red-950/40 transition-all duration-200"
                  >
                    <div className="flex items-center justify-between text-xs font-serif font-bold text-white group-hover:text-red-400">
                      <span>{p.title}</span>
                      <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <span className="font-mono text-[9px] text-neutral-400 mt-1">
                      {p.role}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-black/60 border-t border-red-950/70 flex items-center justify-between">
            <span className="font-mono text-[10px] text-neutral-500">
              SHINOBI KNOWLEDGE ARCHIVE // VERIFIED DATA ONLY
            </span>
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-1.5 rounded font-mono text-xs text-neutral-300 hover:text-white bg-red-950/40 border border-red-900/60 hover:border-red-600 transition-colors"
            >
              CLOSE SCROLL ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

