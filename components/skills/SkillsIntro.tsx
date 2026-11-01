"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, FlaskConical } from "lucide-react";

export default function SkillsIntro() {
  const stats = [
    {
      icon: <Code2 size={16} className="text-red-500" />,
      value: "4",
      label: "Core Domains",
    },
    {
      icon: <Layers size={16} className="text-red-500" />,
      value: "15+",
      label: "Technologies",
    },
    {
      icon: <FlaskConical size={16} className="text-red-500" />,
      value: "9",
      label: "Project Applications",
    },
  ];

  return (
    <div className="flex flex-col justify-center space-y-6 max-w-md select-none">
      {/* 1. TOP EYEBROW TAG MATCHING REFERENCE */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-red-500 uppercase font-semibold"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
        SKILLS // THE SHINOBI ARSENAL
      </motion.div>

      {/* 2. MAIN EDITORIAL HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.08]"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        My Technical<br />
        <em className="text-red-500 italic drop-shadow-[0_0_20px_rgba(225,29,46,0.4)]">
          Disciplines.
        </em>
      </motion.h1>

      {/* 3. EDITORIAL PARAGRAPH */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-sm"
      >
        A focused set of technical skills, sharpened through real projects, hands-on
        practice, and continuous learning.
      </motion.p>

      {/* 4. COMPACT FACTUAL STATS */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-3.5 pt-2"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-lg bg-red-950/40 border border-red-900/60 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(225,29,46,0.15)] group-hover:border-red-500 transition-colors">
              {stat.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-xs text-neutral-400 tracking-wider">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
