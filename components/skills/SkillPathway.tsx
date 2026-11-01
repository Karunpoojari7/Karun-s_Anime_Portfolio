"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Brain, Shield, Layers } from "lucide-react";
import { SKILL_DISCIPLINES, SkillDiscipline } from "./skillsData";

interface SkillPathwayProps {
  activeId: string;
  onSelect: (id: SkillDiscipline["id"]) => void;
}

export default function SkillPathway({ activeId, onSelect }: SkillPathwayProps) {
  // Mapping icons to nodes
  const getNodeIcon = (type: SkillDiscipline["iconType"], isActive: boolean) => {
    const iconSize = 18;
    const iconClass = isActive ? "text-white" : "text-neutral-400 group-hover:text-red-400 transition-colors";

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

  // Node positions along the curved arc for desktop view (percentage or pixel based)
  // Arc spans smoothly from top-left curving outward to the right and back
  const nodeLayouts = [
    { top: "12%", left: "40px" },
    { top: "35%", left: "80px" },
    { top: "58%", left: "80px" },
    { top: "80%", left: "40px" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-center">
      {/* 1. DESKTOP CURVED SVG PATHWAY */}
      <div className="hidden lg:block relative w-[320px] h-[520px] mx-auto">
        {/* Background SVG curved spine */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 320 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Ambient Red Glow for Path */}
          <path
            d="M 20 20 Q 150 260 20 480"
            stroke="rgba(225, 29, 46, 0.25)"
            strokeWidth="6"
            strokeLinecap="round"
            className="filter blur-[4px]"
          />

          {/* Crisp Primary Crimson Connection Path */}
          <path
            d="M 20 20 Q 150 260 20 480"
            stroke="rgba(225, 29, 46, 0.6)"
            strokeWidth="1.75"
            strokeLinecap="round"
          />

          {/* Flowing Chakra Energy Particle Pulse */}
          <path
            d="M 20 20 Q 150 260 20 480"
            stroke="#ff3b4d"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="16 140"
            className="animate-pulse"
            style={{
              animation: "chakraPulse 3.5s linear infinite",
            }}
          />

          {/* Top Arc Anchor Dot */}
          <circle cx="20" cy="20" r="3" fill="#ff263b" className="shadow-[0_0_8px_#ff263b]" />
        </svg>

        {/* 4 Interactive Nodes positioned along the curve */}
        {SKILL_DISCIPLINES.map((discipline, idx) => {
          const isActive = discipline.id === activeId;
          const pos = nodeLayouts[idx];

          return (
            <div
              key={discipline.id}
              className="absolute z-20 flex items-center gap-3.5 select-none"
              style={{
                top: pos.top,
                left: pos.left,
                transform: "translateY(-50%)",
              }}
            >
              {/* Circular Node Button */}
              <button
                type="button"
                onClick={() => onSelect(discipline.id)}
                aria-label={`Select ${discipline.japaneseTitle}: ${discipline.englishCategory}`}
                className={`group relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 focus:outline-none ${
                  isActive
                    ? "scale-110 bg-gradient-to-br from-[#800d17] to-[#e11d2e] border-2 border-red-400 shadow-[0_0_25px_rgba(255,38,59,0.85),inset_0_0_12px_rgba(255,255,255,0.3)]"
                    : "bg-black/80 hover:bg-neutral-900 border border-neutral-700/70 hover:border-red-500/80 hover:shadow-[0_0_18px_rgba(225,29,46,0.45)] hover:scale-105"
                }`}
              >
                {/* Active Outer Chakra Ripple */}
                {isActive && (
                  <span className="pointer-events-none absolute -inset-1.5 rounded-full border border-red-500/50 animate-ping opacity-60" />
                )}

                {/* Node Icon */}
                <div className="relative z-10">
                  {getNodeIcon(discipline.iconType, isActive)}
                </div>
              </button>

              {/* Node Title & Subtitle Labels */}
              <div
                onClick={() => onSelect(discipline.id)}
                className="cursor-pointer transition-transform duration-200 hover:translate-x-1"
              >
                <div
                  className={`font-serif text-sm tracking-wide font-bold transition-colors ${
                    isActive ? "text-white" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {discipline.japaneseTitle}
                </div>
                <div
                  className={`font-mono text-[9px] tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "text-red-400 font-semibold" : "text-neutral-500"
                  }`}
                >
                  {discipline.englishCategory}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. MOBILE / TABLET HORIZONTAL / COMPACT SELECTOR */}
      <div className="lg:hidden w-full flex flex-col gap-2.5 py-4">
        <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase text-center mb-1">
          SELECT DISCIPLINE
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {SKILL_DISCIPLINES.map((discipline) => {
            const isActive = discipline.id === activeId;
            return (
              <button
                key={discipline.id}
                type="button"
                onClick={() => onSelect(discipline.id)}
                className={`p-3 rounded-md flex flex-col items-center text-center gap-1.5 transition-all duration-200 border ${
                  isActive
                    ? "bg-red-950/40 border-red-500 shadow-[0_0_20px_rgba(225,29,46,0.4)]"
                    : "bg-black/60 border-red-950/50 hover:border-red-800/60"
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    isActive
                      ? "bg-red-600 text-white shadow-[0_0_12px_#ff263b]"
                      : "bg-neutral-900 border border-neutral-800 text-neutral-400"
                  }`}
                >
                  {getNodeIcon(discipline.iconType, isActive)}
                </div>
                <span className="font-serif text-xs font-bold text-white">
                  {discipline.japaneseTitle}
                </span>
                <span className="font-mono text-[8px] text-neutral-400 tracking-wider">
                  {discipline.shortTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* SVG Animation Keyframes inlined */}
      <style jsx>{`
        @keyframes chakraPulse {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -320;
          }
        }
      `}</style>
    </div>
  );
}
