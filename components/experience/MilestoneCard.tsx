"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Shield, CheckCircle2 } from "lucide-react";
import { Milestone } from "./experienceData";

interface MilestoneCardProps {
  milestone: Milestone;
  isActive: boolean;
  onHover: (id: string | null) => void;
}

export default function MilestoneCard({
  milestone,
  isActive,
  onHover,
}: MilestoneCardProps) {
  return (
    <motion.div
      onMouseEnter={() => onHover(milestone.id)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -2, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`group relative rounded-2xl p-4 sm:p-4.5 transition-all duration-300 cursor-pointer select-none border ${
        isActive
          ? "bg-[#0d0407]/95 border-red-500 shadow-[0_0_25px_rgba(225,29,46,0.35),inset_0_0_12px_rgba(255,38,59,0.12)]"
          : "bg-[#090305]/88 border-red-500/40 hover:border-red-500/75 shadow-[0_0_16px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(225,29,46,0.22)]"
      } backdrop-blur-xl w-full`}
    >
      {/* Decorative Akatsuki Cloud Outline (Top-Right) */}
      <div className="pointer-events-none absolute top-3 right-3 opacity-25 group-hover:opacity-45 transition-opacity">
        <svg width="38" height="22" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
            stroke="#ff263b"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="rgba(255, 38, 59, 0.12)"
          />
        </svg>
      </div>

      <div className="space-y-1.5 pr-8">
        {/* Category Eyebrow */}
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] font-bold text-red-400 uppercase block">
          {milestone.category}
        </span>

        {/* Title */}
        <h3
          className="text-base sm:text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-red-300 transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {milestone.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs text-neutral-300 font-sans leading-relaxed">
          {milestone.subtitle}
        </p>
      </div>

      {/* Footer Metadata: Duration & Status Badge */}
      <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-red-950/60 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 text-neutral-400">
          <Calendar size={13} className="text-red-400" />
          <span>{milestone.duration}</span>
        </div>

        <div
          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide ${
            milestone.isCompleted
              ? "border border-emerald-500/50 bg-emerald-950/40 text-emerald-300"
              : "border border-emerald-500/50 bg-emerald-950/40 text-emerald-300"
          }`}
        >
          {milestone.isCompleted ? (
            <>
              <CheckCircle2 size={11} className="text-emerald-400" />
              <span>Completed ✓</span>
            </>
          ) : (
            <>
              <Shield size={11} className="text-emerald-400" />
              <span>Ongoing</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
