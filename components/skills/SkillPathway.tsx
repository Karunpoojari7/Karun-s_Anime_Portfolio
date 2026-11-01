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

  // 4 Node layout positions aligned with the central Shinobi atmosphere
  // Top-Left (10 o'clock), Top-Right (2 o'clock), Bottom-Left (8 o'clock), Bottom-Right (4 o'clock)
  const nodePositions: Record<DisciplineId, { top: string; left: string }> = {
    development: { top: "24%", left: "12%" },
    "ai-ml": { top: "24%", left: "88%" },
    cybersecurity: { top: "72%", left: "14%" },
    "devops-tools": { top: "72%", left: "86%" },
  };

  return (
    <div className="relative w-full max-w-[560px] h-[500px] sm:h-[540px] mx-auto flex items-center justify-center select-none">
      {/* 1. SINGLE CLEAN CONNECTING ENERGY ORBIT FOR THE 4 DISCIPLINE NODES */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 520 520"
          className="w-full h-full max-w-[520px] max-h-[520px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="activeEnergyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff263b" />
              <stop offset="50%" stopColor="#e11d2e" />
              <stop offset="100%" stopColor="#870a16" />
            </linearGradient>
          </defs>

          {/* Single Subtle Connection Ring Linking the Four Disciplines */}
          <circle
            cx="260"
            cy="260"
            r="195"
            stroke="rgba(225, 29, 46, 0.3)"
            strokeWidth="1.5"
            strokeDasharray="6 10"
          />

          {/* Focused Active Energy Arc */}
          <circle
            cx="260"
            cy="260"
            r="195"
            stroke="url(#activeEnergyGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="30 200"
            className="animate-spin"
            style={{ animationDuration: "14s" }}
          />
        </svg>
      </div>

      {/* 2. THE FOUR FUNCTIONAL INTERACTIVE DISCIPLINE NODES */}
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
                  ? "bg-gradient-to-br from-[#9e101f] to-[#e11d2e] border-2 border-white/90 shadow-[0_0_25px_rgba(255,38,59,0.8)]"
                  : "bg-[#0b0305]/95 border border-red-900/80 hover:border-red-500 hover:bg-red-950/40 hover:shadow-[0_0_18px_rgba(225,29,46,0.4)]"
              }`}
            >
              {/* Subtle pulsing indicator ring for active node */}
              {isActive && (
                <span className="absolute -inset-1.5 rounded-full border border-red-500/70 animate-pulse opacity-70" />
              )}

              {/* Icon */}
              {getNodeIcon(discipline.iconType, isActive)}
            </motion.button>

            {/* Discipline Label Pill Beneath Node */}
            <div
              className={`mt-2 px-3 py-1 rounded-md text-center backdrop-blur-md transition-all duration-300 border ${
                isActive
                  ? "bg-[#180307]/95 border-red-500 shadow-[0_0_15px_rgba(225,29,46,0.45)]"
                  : "bg-black/85 border-neutral-800/80 group-hover:border-red-900/80"
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
