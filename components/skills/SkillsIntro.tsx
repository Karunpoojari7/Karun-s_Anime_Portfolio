"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Shield, Layers } from "lucide-react";
import { SKILL_DISCIPLINES, SkillDiscipline } from "./skillsData";

interface SkillsIntroProps {
  activeId: string;
  onSelect: (id: SkillDiscipline["id"]) => void;
}

export default function SkillsIntro({ activeId, onSelect }: SkillsIntroProps) {
  const getTileIcon = (type: SkillDiscipline["iconType"], isActive: boolean) => {
    const size = 16;
    const color = isActive ? "text-red-400" : "text-red-500/80 group-hover:text-red-400";

    switch (type) {
      case "code":
        return <Code2 size={size} className={color} />;
      case "brain":
        return <Brain size={size} className={color} />;
      case "shield":
        return <Shield size={size} className={color} />;
      case "layers":
        return <Layers size={size} className={color} />;
    }
  };

  return (
    <div className="flex flex-col justify-center space-y-6 max-w-sm">
      {/* Top Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[11px] tracking-[0.25em] text-red-500 font-semibold uppercase flex items-center gap-2"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
        NINJUTSU ARSENAL // SKILLS
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-[1.08]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        My<br />
        Technical<br />
        <em className="text-red-500 italic">Disciplines.</em>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm text-neutral-300 font-sans leading-relaxed max-w-xs"
      >
        A practical skill set built through projects, internships and continuous learning.
      </motion.p>

      {/* 4 Compact Category Tiles (2x2 Grid) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-2 gap-2.5 pt-2"
      >
        {SKILL_DISCIPLINES.map((disc) => {
          const isActive = disc.id === activeId;

          return (
            <button
              key={disc.id}
              type="button"
              onClick={() => onSelect(disc.id)}
              className={`group p-3 rounded-md text-left transition-all duration-200 cursor-pointer border ${
                isActive
                  ? "bg-red-950/40 border-red-500/80 shadow-[0_0_20px_rgba(225,29,46,0.35)] scale-[1.02]"
                  : "bg-black/60 border-red-950/60 hover:border-red-600/60 hover:bg-red-950/20"
              }`}
            >
              <div className="mb-2">{getTileIcon(disc.iconType, isActive)}</div>
              <div className="font-serif text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                {disc.shortTitle}
              </div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-wider mt-0.5">
                {disc.shortSubtitle}
              </div>
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
