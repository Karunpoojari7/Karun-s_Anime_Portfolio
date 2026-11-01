"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Shield, Sparkles } from "lucide-react";
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
      whileHover={{ y: -3 }}
      className={`group relative rounded-xl p-5 sm:p-6 transition-all duration-300 cursor-pointer select-none ${
        isActive
          ? "bg-[#0c0407]/95 border border-red-400 shadow-[0_0_30px_rgba(225,29,46,0.45),inset_0_0_15px_rgba(255,38,59,0.2)]"
          : "bg-[#080204]/88 border border-red-950/80 hover:border-red-500/70 shadow-[0_0_20px_rgba(0,0,0,0.85)] hover:shadow-[0_0_25px_rgba(225,29,46,0.3)]"
      } backdrop-blur-xl`}
    >
      {/* Decorative Akatsuki Cloud Outline (Top-Right) */}
      <div className="pointer-events-none absolute top-3.5 right-3.5 opacity-25 group-hover:opacity-40 transition-opacity">
        <svg width="50" height="28" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
            stroke="#ff263b"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="rgba(255, 38, 59, 0.08)"
          />
        </svg>
      </div>

      <div className="space-y-3">
        {/* Stage Header */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
            {milestone.stage}
          </span>
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3
            className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight group-hover:text-red-400 transition-colors"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {milestone.title}
          </h3>
          <p className="text-xs text-neutral-300 font-sans mt-0.5">
            {milestone.subtitle}
          </p>
        </div>

        {/* Short Description */}
        <p className="text-xs text-neutral-300/90 font-sans leading-relaxed line-clamp-2">
          {milestone.description}
        </p>

        {/* Footer Metadata: Duration & Status Badge */}
        <div className="flex items-center justify-between pt-2 border-t border-red-950/60 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-neutral-400">
            <Calendar size={13} className="text-red-400" />
            <span>{milestone.duration}</span>
          </div>

          <div
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider ${
              milestone.isCompleted
                ? "bg-emerald-950/60 border border-emerald-500/50 text-emerald-400"
                : "bg-emerald-950/40 border border-emerald-400/40 text-emerald-300"
            }`}
          >
            {milestone.isCompleted ? (
              <>
                <span>Completed</span>
                <span>✓</span>
              </>
            ) : (
              <>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Ongoing</span>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
