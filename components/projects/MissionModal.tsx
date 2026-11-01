"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Target,
  UserCheck,
  Cpu,
  Camera,
  AlertTriangle,
} from "lucide-react";
import { Project } from "@/lib/projects";

interface MissionModalProps {
  project: Project | null;
  missionNumber: number;
  onClose: () => void;
}

export default function MissionModal({
  project,
  missionNumber,
  onClose,
}: MissionModalProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Lock background body scroll while dialog is open and bind Escape key
  useEffect(() => {
    if (!project) return;

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
  }, [project, onClose]);

  if (!project) return null;

  const numStr = String(missionNumber).padStart(2, "0");
  const thumbSrc = `/assets/projects/mission-${numStr}.jpg`;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100000] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mission-dossier-title"
      >
        {/* 1. Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
        />

        {/* 2. Engineering Case Study Dossier Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0c0507] border border-red-500/80 rounded-lg shadow-[0_0_70px_rgba(225,29,46,0.28)] overflow-hidden z-10 my-auto flex flex-col select-none"
        >
          {/* Top Subtle Red Energy Line */}
          <div className="w-full h-1 bg-gradient-to-r from-red-950 via-red-500 to-red-950" />

          {/* Dossier Header Bar */}
          <div className="px-4 sm:px-7 py-4 border-b border-red-950/80 bg-red-950/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-8 h-8 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-500 font-serif text-sm shadow-[0_0_10px_rgba(225,29,46,0.4)] shrink-0">
                月
              </span>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] text-red-400 font-bold uppercase truncate">
                    PROJECT DOSSIER // MISSION {numStr}
                  </p>
                  <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-red-500" />
                  <span className="hidden sm:inline-block font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  <span className="font-mono text-[9px] tracking-wider text-neutral-300 uppercase">
                    STATUS: {project.status}
                  </span>
                  <span className="text-neutral-600">·</span>
                  <span className="font-mono text-[9px] tracking-wider text-neutral-400 truncate">
                    {project.projectType}
                  </span>
                </div>
              </div>
            </div>

            {/* Accessible Close Button */}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close Project Dossier"
              className="p-1.5 sm:p-2 rounded-full text-neutral-400 hover:text-white bg-black/50 hover:bg-red-950/70 border border-red-950/80 hover:border-red-500 transition-all duration-200 shrink-0 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Dossier Body — Scrollable Case Study Container */}
          <div
            ref={scrollContainerRef}
            className="p-4 sm:p-7 md:p-8 space-y-6 max-h-[68vh] sm:max-h-[72vh] overflow-y-auto custom-scrollbar"
          >
            {/* Title Block & Preview */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-red-950/50 border border-red-900/60 font-mono text-[10px] tracking-wider text-red-400">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-neutral-900/80 border border-neutral-700/60 font-mono text-[10px] tracking-wider text-neutral-300">
                    {project.projectType}
                  </span>
                </div>

                <h2
                  id="mission-dossier-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {project.title}
                </h2>

                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Mission Visual Banner */}
              <div className="relative w-full h-36 sm:h-48 rounded-md overflow-hidden border border-red-950/80 bg-black">
                <Image
                  src={thumbSrc}
                  alt={project.title}
                  fill
                  sizes="700px"
                  className="object-cover filter contrast-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0507] via-transparent to-black/30" />
              </div>
            </div>

            {/* 1. Project Overview */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                <Terminal size={14} />
                <span>1. PROJECT OVERVIEW</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans bg-black/50 p-3.5 sm:p-4 rounded border border-red-950/70">
                {project.description}
              </p>
            </div>

            {/* 2. Problem Addressed & My Role (Responsive Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-black/50 p-3.5 sm:p-4 rounded border border-red-950/70 space-y-2">
                <h4 className="font-mono text-[11px] text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <Target size={13} /> Problem Addressed
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="bg-black/50 p-3.5 sm:p-4 rounded border border-red-950/70 space-y-2">
                <h4 className="font-mono text-[11px] text-red-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <UserCheck size={13} /> My Role & Contributions
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>

            {/* 3. System Architecture & Engineering */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                <Cpu size={14} />
                <span>2. SYSTEM ARCHITECTURE & DESIGN</span>
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans bg-black/50 p-3.5 sm:p-4 rounded border border-red-950/70">
                {project.architecture}
              </p>
            </div>

            {/* 4. Key Highlights & Capabilities */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2.5">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <ShieldCheck size={14} />
                  <span>3. KEY FEATURES & CAPABILITIES</span>
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-sans">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 bg-red-950/20 p-2.5 sm:p-3 rounded border border-red-950/50"
                    >
                      <CheckCircle2 size={14} className="text-red-400 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. Technical Challenges & Solutions */}
            {project.challenges && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <AlertTriangle size={14} className="text-amber-400" />
                  <span>4. CHALLENGES & SOLUTIONS</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans bg-black/50 p-3.5 sm:p-4 rounded border border-red-950/70">
                  {project.challenges}
                </p>
              </div>
            )}

            {/* 6. Authentic Interface Evidence Slot (Ready for Genuine Screenshots) */}
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-red-950/70 pb-1.5">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <Camera size={14} />
                  <span>5. INTERFACE EVIDENCE & TEST CAPTURES</span>
                </h3>
                <span className="font-mono text-[9px] text-neutral-400">
                  AUTHENTIC VERIFICATION
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.screenshotSlots.map((slot, idx) => (
                  <div
                    key={slot.title}
                    className="p-3.5 rounded bg-black/60 border border-dashed border-red-900/60 flex flex-col justify-between space-y-2.5"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-red-400 uppercase tracking-wider block mb-1">
                        CAPTURE SLOT 0{idx + 1}
                      </span>
                      <h5 className="font-serif text-xs sm:text-sm font-semibold text-white">
                        {slot.title}
                      </h5>
                      <p className="text-[11px] text-neutral-400 font-sans mt-1 leading-relaxed">
                        {slot.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 py-1.5 px-2.5 rounded bg-[#120406] border border-red-950/70 font-mono text-[9px] text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                      <span className="truncate">{slot.placeholder}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Verified Tech Stack */}
            {project.stack && project.stack.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase font-semibold">
                  6. VERIFIED TECHNOLOGY STACK
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-black/70 border border-red-950/80 text-[11px] font-mono text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Note */}
            {project.note && (
              <div className="text-[11px] font-mono text-amber-300/90 bg-amber-950/25 border border-amber-900/40 p-3 rounded">
                ℹ {project.note}
              </div>
            )}
          </div>

          {/* Dossier Footer Actions Bar */}
          <div className="px-4 sm:px-7 py-3.5 bg-black/80 border-t border-red-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <Link
                href={`/projects/${project.slug}`}
                onClick={onClose}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded border border-red-500/80 bg-red-950/50 text-white font-mono text-xs tracking-wider hover:bg-red-900/70 transition-colors w-full sm:w-auto cursor-pointer"
              >
                <span>OPEN FULL DOSSIER</span>
                <ExternalLink size={12} className="text-red-400" />
              </Link>

              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded border border-neutral-700/80 bg-black/60 text-neutral-200 font-mono text-xs tracking-wider hover:text-white hover:border-neutral-500 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  <Github size={13} className="text-red-400" />
                  <span>GITHUB</span>
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded border border-emerald-600/70 bg-emerald-950/30 text-emerald-300 font-mono text-xs tracking-wider hover:bg-emerald-950/50 transition-colors w-full sm:w-auto cursor-pointer"
                >
                  <span>LIVE DEMO</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 font-mono text-xs tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              CLOSE [ESC]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
