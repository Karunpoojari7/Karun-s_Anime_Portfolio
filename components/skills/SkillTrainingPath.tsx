"use client";

import React from "react";
import { motion } from "framer-motion";
import { SKILL_DISCIPLINES, DisciplineId } from "./skillsData";

interface SkillTrainingPathProps {
  activeId: DisciplineId;
  onSelect: (id: DisciplineId) => void;
}

const barVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, delay: 0.7, ease: "easeOut" } },
};

export default function SkillTrainingPath({ activeId, onSelect }: SkillTrainingPathProps) {
  const activeIndex = SKILL_DISCIPLINES.findIndex((d) => d.id === activeId);
  const progressPct = activeIndex / (SKILL_DISCIPLINES.length - 1);

  return (
    <motion.div
      className="w-full max-w-5xl mx-auto px-2 select-none"
      variants={barVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative w-full rounded-xl bg-[#060109]/96 border border-red-500/45 px-5 sm:px-7 py-3.5 shadow-[0_0_40px_rgba(225,29,46,0.2)] overflow-hidden flex flex-col md:flex-row items-center gap-4">
        {/* Subtle inner glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(225,29,46,0.35) 0%, transparent 70%)",
          }}
        />

        {/* Left section: label + shuriken */}
        <div className="flex items-center gap-3 shrink-0 border-b md:border-b-0 md:border-r border-red-950/70 pb-3 md:pb-0 md:pr-6 w-full md:w-auto justify-center md:justify-start">
          {/* Shuriken icon */}
          <div className="relative w-8 h-8 rounded-lg bg-red-950/50 border border-red-500/60 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(255,38,59,0.45)] shrink-0">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-spin"
              style={{ animationDuration: "18s" }}
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <div>
            <div className="font-mono text-[10px] font-bold tracking-[0.2em] text-red-400 uppercase">
              SKILL TRAINING PATH
            </div>
            <div className="font-mono text-[8px] text-neutral-500 tracking-wider mt-0.5">
              My learning &amp; application progress
            </div>
          </div>
        </div>

        {/* Timeline steps */}
        <div className="relative flex-1 w-full max-w-2xl flex items-center justify-between">
          {/* Background track line */}
          <div className="absolute top-[18px] left-4 right-4 h-px bg-neutral-800 -translate-y-1/2 z-0" />

          {/* Active progress line */}
          <motion.div
            className="absolute top-[18px] left-4 h-px bg-gradient-to-r from-red-700 to-red-400 -translate-y-1/2 z-0 shadow-[0_0_8px_rgba(255,38,59,0.7)]"
            style={{ width: `calc(${progressPct * 100}% * (1 - 8px / 100%))` }}
            animate={{ width: `calc(${progressPct} * (100% - 8px))` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {SKILL_DISCIPLINES.map((discipline, idx) => {
            const isActive = discipline.id === activeId;
            const isPast = idx <= activeIndex;

            return (
              <button
                key={discipline.id}
                type="button"
                onClick={() => onSelect(discipline.id)}
                className="relative z-10 flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md px-1"
              >
                {/* Step circle */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-[#c01427] to-[#ff263b] text-white border-2 border-white/85 shadow-[0_0_20px_rgba(255,38,59,0.8)] scale-110"
                      : isPast
                      ? "bg-red-950/60 border border-red-700/70 text-red-300 group-hover:border-red-500"
                      : "bg-black/80 border border-neutral-700 text-neutral-500 group-hover:border-neutral-500 group-hover:text-neutral-300"
                  }`}
                >
                  {discipline.number}
                </div>

                {/* Label */}
                <span
                  className={`font-mono text-[10px] font-semibold tracking-wider transition-colors ${
                    isActive
                      ? "text-red-400 drop-shadow-[0_0_6px_rgba(255,38,59,0.5)]"
                      : "text-neutral-500 group-hover:text-neutral-300"
                  }`}
                >
                  {discipline.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
