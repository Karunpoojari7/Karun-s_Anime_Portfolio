"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Shield, CheckCircle2, Terminal } from "lucide-react";
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
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const numStr = String(missionNumber).padStart(2, "0");
  const thumbSrc = `/assets/projects/mission-${numStr}.jpg`;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#0c0507] border border-red-500/80 rounded-md shadow-[0_0_60px_rgba(255,38,59,0.35)] overflow-hidden z-10 my-8"
        >
          {/* Top Wooden Rod Accent */}
          <div className="w-full h-2.5 bg-gradient-to-r from-[#200508] via-[#8a121c] to-[#200508] border-b border-red-600/70" />

          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-red-950/70 bg-red-950/20">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-500 font-serif text-sm">
                月
              </span>
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] text-red-400 font-semibold uppercase">
                  PROJECT DOSSIER // FILE 0{missionNumber}
                </p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  <span className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase">
                    STATUS: {project.status || "DOCUMENTED"}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              aria-label="Close Project Modal"
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-red-950/50 border border-transparent hover:border-red-500/50 transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Title & Preview Image */}
            <div className="space-y-4">
              <div>
                <span className="inline-block px-2.5 py-1 rounded bg-red-950/40 border border-red-900/60 font-mono text-[10px] tracking-wider text-red-400 mb-2">
                  {project.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-sans text-neutral-300 mt-2 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Mission Thumbnail Banner */}
              <div className="relative w-full h-44 sm:h-52 rounded-sm overflow-hidden border border-red-900/60 bg-black">
                <Image
                  src={thumbSrc}
                  alt={project.title}
                  fill
                  className="object-cover filter contrast-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
                <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_35px_rgba(255,38,59,0.3)]" />
              </div>
            </div>

            {/* In-Depth Description */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5">
                <Terminal size={14} />
                <span>PROJECT OVERVIEW</span>
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans bg-black/40 p-3.5 rounded border border-red-950/60">
                {project.description}
              </p>
            </div>

            {/* Key Implementation Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5">
                  <Shield size={14} />
                  <span>KEY HIGHLIGHTS</span>
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 font-sans">
                  {project.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 bg-red-950/20 p-2.5 rounded border border-red-950/40"
                    >
                      <CheckCircle2 size={13} className="text-red-400 mt-0.5 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Verified */}
            {project.stack && project.stack.length > 0 && (
              <div className="space-y-2">
                <h4 className="font-mono text-xs tracking-wider text-red-400 uppercase">
                  TECHNOLOGIES USED
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] tracking-wider bg-black/60 border border-red-900/40 text-neutral-300 px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Note if available */}
            {project.note && (
              <div className="text-[11px] font-mono text-amber-400/90 bg-amber-950/20 border border-amber-900/40 p-3 rounded">
                ℹ {project.note}
              </div>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="px-6 py-4 bg-black/60 border-t border-red-950/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded border border-red-600 bg-red-950/50 text-white font-mono text-xs tracking-wider hover:bg-red-900/60 hover:shadow-[0_0_15px_rgba(255,38,59,0.5)] transition-all duration-200"
                >
                  <Github size={14} />
                  <span>VIEW ON GITHUB</span>
                  <ExternalLink size={12} className="text-red-400" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 font-mono text-xs tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

