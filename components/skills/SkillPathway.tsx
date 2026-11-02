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

  // 4 Node layout positions aligned with the central stone ring of the backdrop
  // Top-Left (10 o'clock), Top-Right (2 o'clock), Bottom-Left (8 o'clock), Bottom-Right (4 o'clock)
  const nodePositions: Record<DisciplineId, { top: string; left: string }> = {
    development: { top: "20%", left: "22%" },
    "ai-ml": { top: "20%", left: "78%" },
    cybersecurity: { top: "74%", left: "22%" },
    "devops-tools": { top: "74%", left: "78%" },
  };

  return (
    <div className="relative w-full max-w-[540px] h-[480px] sm:h-[520px] mx-auto flex items-center justify-center select-none">
      {/* 1. SINGLE AUTHENTIC CHAKRA GLOW (Only on the Active Selected Node, No Extra SVG Circles) */}
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
                  ? "bg-gradient-to-br from-[#9e101f] to-[#e11d2e] border-2 border-white/90 shadow-[0_0_28px_rgba(255,38,59,0.85)]"
                  : "bg-[#0b0305]/95 border border-red-900/80 hover:border-red-500 hover:bg-red-950/40 hover:shadow-[0_0_18px_rgba(225,29,46,0.4)]"
              }`}
            >
              {/* Subtle pulsing indicator ring for active node */}
              {isActive && (
                <span className="absolute -inset-1.5 rounded-full border border-red-500/80 animate-pulse opacity-80" />
              )}

              {/* Icon */}
              {getNodeIcon(discipline.iconType, isActive)}
            </motion.button>

            {/* Discipline Label Pill Beneath Node */}
            <div
              className={`mt-2 px-3 py-1 rounded-md text-center transition-all duration-300 border ${
                isActive
                  ? "bg-[#180307]/95 border-red-500 shadow-[0_0_15px_rgba(225,29,46,0.5)]"
                  : "bg-black/90 border-neutral-800/80 group-hover:border-red-900/80"
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
