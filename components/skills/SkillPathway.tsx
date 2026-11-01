"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Shield, Layers } from "lucide-react";
import { SKILL_DISCIPLINES, SkillDiscipline, DisciplineId } from "./skillsData";

interface SkillPathwayProps {
  activeId: DisciplineId;
  onSelect: (id: DisciplineId) => void;
}

export default function SkillPathway({ activeId, onSelect }: SkillPathwayProps) {
  const getNodeIcon = (type: SkillDiscipline["iconType"], isActive: boolean) => {
    const iconSize = 22;
    const iconClass = isActive
      ? "text-white"
      : "text-neutral-400 group-hover:text-red-400 transition-colors";

    switch (type) {
      case "code":
        return <Code2 size={iconSize} className={iconClass} />;
      case "brain":
        return <Brain size={iconSize} className={iconClass} />;
      case "shield":
        return <Shield size={iconSize} className={iconClass} />;
      case "layers":
        return <Layers size={iconSize} className={iconClass} />;
    }
  };

  // 4 Node layout positions on the circular ring (percentages relative to the central 520x520 arena)
  // Top-Left (10 o'clock), Top-Right (2 o'clock), Bottom-Left (8 o'clock), Bottom-Right (4 o'clock)
  const nodePositions: Record<DisciplineId, { top: string; left: string; anchor: string }> = {
    development: { top: "24%", left: "12%", anchor: "top-left" },
    "ai-ml": { top: "24%", left: "88%", anchor: "top-right" },
    cybersecurity: { top: "72%", left: "14%", anchor: "bottom-left" },
    "devops-tools": { top: "72%", left: "86%", anchor: "bottom-right" },
  };

  return (
    <div className="relative w-full max-w-[560px] h-[520px] sm:h-[560px] mx-auto flex items-center justify-center select-none">
      {/* 1. CENTRAL CHAKRA RING SVG LAYER */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 520 520"
          className="w-full h-full max-w-[520px] max-h-[520px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="rgba(225, 29, 46, 0.25)" />
              <stop offset="100%" stopColor="rgba(225, 29, 46, 0)" />
            </radialGradient>
            <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff263b" />
              <stop offset="50%" stopColor="#e11d2e" />
              <stop offset="100%" stopColor="#870a16" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Ambient Glow Ring */}
          <circle
            cx="260"
            cy="260"
            r="200"
            stroke="rgba(225, 29, 46, 0.35)"
            strokeWidth="8"
            className="filter blur-[6px]"
          />

          {/* Primary Crimson Circular Chakra Ring */}
          <circle
            cx="260"
            cy="260"
            r="200"
            stroke="rgba(225, 29, 46, 0.75)"
            strokeWidth="2.5"
            strokeDasharray="4 8"
          />

          {/* Inner Chakra Ring with Tomoe Accents */}
          <circle
            cx="260"
            cy="260"
            r="175"
            stroke="rgba(255, 38, 59, 0.4)"
            strokeWidth="1.5"
          />

          {/* Animated Flowing Chakra Circuit */}
          <circle
            cx="260"
            cy="260"
            r="200"
            stroke="url(#laserBeam)"
            strokeWidth="3"
            strokeDasharray="40 180"
            strokeLinecap="round"
            className="animate-spin"
            style={{ animationDuration: "20s" }}
          />

          {/* Connecting Laser Beams between Opposite Disciplines */}
          <line
            x1="120"
            y1="160"
            x2="400"
            y2="360"
            stroke="rgba(225, 29, 46, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <line
            x1="400"
            y1="160"
            x2="120"
            y2="360"
            stroke="rgba(225, 29, 46, 0.25)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
        </svg>

        {/* 2. TOP SHRINE MEDALLION WITH KANJI '忍' (SHINOBI) */}
        <div className="absolute top-[3%] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          <div className="w-12 h-12 rounded-lg border-2 border-red-500/90 bg-[#120306]/90 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,38,59,0.7)] text-red-400 font-serif text-xl font-bold">
            忍
          </div>
          <div className="w-0.5 h-4 bg-gradient-to-b from-red-500 to-transparent" />
        </div>
      </div>

      {/* 3. THE FOUR INTERACTIVE DISCIPLINE NODES */}
      {SKILL_DISCIPLINES.map((discipline) => {
        const isActive = discipline.id === activeId;
        const pos = nodePositions[discipline.id];

        return (
          <div
            key={discipline.id}
            className="absolute z-20 flex flex-col items-center -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ top: pos.top, left: pos.left }}
            onClick={() => onSelect(discipline.id)}
          >
            {/* Circular Icon Node Button */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label={`Select ${discipline.title}`}
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-br from-[#9e101f] to-[#e11d2e] border-2 border-white/90 shadow-[0_0_30px_rgba(255,38,59,0.9)]"
                  : "bg-[#0b0305]/90 border border-red-900/80 hover:border-red-500 hover:bg-red-950/40 hover:shadow-[0_0_20px_rgba(225,29,46,0.5)]"
              }`}
            >
              {/* Outer pulsing ring for active node */}
              {isActive && (
                <span className="absolute -inset-2 rounded-full border border-red-500/70 animate-ping opacity-60" />
              )}

              {/* Icon */}
              {getNodeIcon(discipline.iconType, isActive)}
            </motion.button>

            {/* Discipline Label Pill Beneath Node */}
            <div
              className={`mt-2.5 px-3 py-1 rounded-md text-center backdrop-blur-md transition-all duration-300 border ${
                isActive
                  ? "bg-[#180307]/95 border-red-500 shadow-[0_0_18px_rgba(225,29,46,0.5)]"
                  : "bg-black/80 border-neutral-800/80 group-hover:border-red-900/80"
              }`}
            >
              <div
                className={`font-serif text-xs font-bold transition-colors ${
                  isActive ? "text-white" : "text-neutral-300 group-hover:text-red-400"
                }`}
              >
                {discipline.title}
              </div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-wider">
                {discipline.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
