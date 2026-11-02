"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Shield, Layers } from "lucide-react";
import { SKILL_DISCIPLINES, SkillDiscipline, DisciplineId } from "./skillsData";

interface SkillPathwayProps {
  activeId: DisciplineId;
  onSelect: (id: DisciplineId) => void;
}

// Reference positions: Development=top-right, AI&ML=right-mid, Cybersecurity=left-mid, DevOps=bottom-left
// Matching the reference image: nodes sit ON the ring at 4 cardinal/diagonal positions
// Ring center ~50% 52%, radius ~42% of container
// top (Dev): 12% top, 58% left
// right (AI): 38% top, 88% left
// left (Cyber): 60% top, 12% left
// bottom-right (DevOps): 82% top, 62% left
const NODE_POSITIONS: Record<DisciplineId, { top: string; left: string; labelSide: "right" | "left" }> = {
  development:   { top: "10%",  left: "62%", labelSide: "right" },
  "ai-ml":       { top: "38%",  left: "88%", labelSide: "right" },
  cybersecurity: { top: "62%",  left: "12%", labelSide: "left"  },
  "devops-tools":{ top: "84%",  left: "62%", labelSide: "right" },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.5 } },
};

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] } },
};

const ringVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: { opacity: 1, pathLength: 1, transition: { duration: 1.4, delay: 0.3, ease: "easeInOut" } },
};

function NodeIcon({
  type,
  isActive,
}: {
  type: SkillDiscipline["iconType"];
  isActive: boolean;
}) {
  const cls = isActive
    ? "text-white"
    : "text-neutral-300 group-hover:text-red-400 transition-colors duration-200";
  const size = 20;
  switch (type) {
    case "code":   return <Code2 size={size} className={cls} />;
    case "brain":  return <Brain size={size} className={cls} />;
    case "shield": return <Shield size={size} className={cls} />;
    case "layers": return <Layers size={size} className={cls} />;
  }
}

export default function SkillPathway({ activeId, onSelect }: SkillPathwayProps) {
  return (
    <div className="relative w-full max-w-[520px] h-[480px] sm:h-[520px] mx-auto select-none">
      {/* SVG Ring Layer — single clean orbital circle */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradient for the animated arc sparkle */}
            <linearGradient id="skillArcGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(225,29,46,0)" />
              <stop offset="40%" stopColor="#e11d2e" />
              <stop offset="100%" stopColor="rgba(255,60,80,0)" />
            </linearGradient>
          </defs>

          {/* Base dashed ring — subtle */}
          <motion.circle
            cx="250"
            cy="260"
            r="195"
            stroke="rgba(225,29,46,0.22)"
            strokeWidth="1.2"
            strokeDasharray="5 9"
            variants={ringVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Solid thin ring behind */}
          <motion.circle
            cx="250"
            cy="260"
            r="195"
            stroke="rgba(180,20,36,0.15)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />

          {/* Animated arc — energy moving around ring */}
          <circle
            cx="250"
            cy="260"
            r="195"
            stroke="url(#skillArcGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="50 1180"
            className="animate-spin"
            style={{ animationDuration: "12s", transformOrigin: "250px 260px" }}
          />
        </svg>
      </div>

      {/* Four Discipline Nodes */}
      <motion.div
        className="absolute inset-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SKILL_DISCIPLINES.map((discipline) => {
          const isActive = discipline.id === activeId;
          const pos = NODE_POSITIONS[discipline.id];
          const isLeft = pos.labelSide === "left";

          return (
            <motion.div
              key={discipline.id}
              variants={nodeVariants}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: pos.top, left: pos.left }}
            >
              <button
                type="button"
                onClick={() => onSelect(discipline.id)}
                aria-label={`Select ${discipline.title}`}
                aria-pressed={isActive}
                className={`group relative flex ${
                  isLeft ? "flex-row-reverse" : "flex-row"
                } items-center gap-2.5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-xl`}
              >
                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.92 }}
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-14 h-14 bg-gradient-to-br from-[#a51020] to-[#e11d2e] border-2 border-white/85 shadow-[0_0_28px_rgba(225,29,46,0.85),0_0_60px_rgba(225,29,46,0.3)]"
                      : "w-12 h-12 bg-[#0c0305]/90 border border-red-900/70 hover:border-red-500/90 hover:bg-red-950/40 hover:shadow-[0_0_20px_rgba(225,29,46,0.4)]"
                  }`}
                >
                  {/* Pulse ring for active */}
                  {isActive && (
                    <span className="absolute -inset-1.5 rounded-full border border-red-400/50 animate-ping opacity-60" />
                  )}
                  <NodeIcon type={discipline.iconType} isActive={isActive} />
                </motion.div>

                {/* Label Pill */}
                <div
                  className={`flex flex-col transition-all duration-300 ${
                    isLeft ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  <span
                    className={`font-serif text-[13px] font-bold leading-tight transition-colors ${
                      isActive
                        ? "text-white drop-shadow-[0_0_10px_rgba(255,60,80,0.6)]"
                        : "text-neutral-200 group-hover:text-white"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {discipline.title}
                  </span>
                  <span className="font-mono text-[9px] text-neutral-500 tracking-wider group-hover:text-neutral-400 transition-colors">
                    {discipline.subtitle}
                  </span>
                </div>
              </button>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
