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
    const iconSize = 20;
    const iconClass = isActive
      ? "text-red-500"
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

  return (
    <div className="relative w-full max-w-[500px] mx-auto min-h-[460px] flex items-center justify-end select-none">
      {/* VERTICAL STACK OF 4 DISCIPLINE SELECTOR CARDS (MATCHING REFERENCE IMAGE 2) */}
      <div className="relative z-20 flex flex-col space-y-3.5 w-full max-w-[270px] sm:max-w-[290px]">
        {SKILL_DISCIPLINES.map((discipline) => {
          const isActive = discipline.id === activeId;

          return (
            <motion.div
              key={discipline.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(discipline.id)}
              className={`relative flex items-center gap-3.5 px-4 py-3 rounded-2xl transition-all duration-300 cursor-pointer group ${
                isActive
                  ? "bg-gradient-to-r from-[#1c0307]/95 via-[#2c050c]/95 to-[#160205]/95 border-2 border-red-500 shadow-[0_0_25px_rgba(255,42,42,0.45),inset_0_0_15px_rgba(255,42,42,0.15)]"
                  : "bg-black/60 border border-neutral-800/80 hover:border-red-950/70 hover:bg-black/80"
              }`}
            >
              {/* Left Circular Icon Badge */}
              <div
                className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isActive
                    ? "bg-black/90 border border-red-500/80 shadow-[0_0_15px_rgba(255,42,42,0.6)]"
                    : "bg-black/80 border border-neutral-800 group-hover:border-red-900/60 group-hover:bg-red-950/30"
                }`}
              >
                {getNodeIcon(discipline.iconType, isActive)}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-serif text-base font-bold tracking-tight transition-colors truncate ${
                    isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                  }`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {discipline.title}
                </span>
                <span className="font-mono text-[10.5px] text-neutral-400 tracking-wider truncate">
                  {discipline.subtitle}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
