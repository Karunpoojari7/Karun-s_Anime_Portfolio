"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Settings, Shield } from "lucide-react";

export default function SkillsIntro() {
  const stats = [
    {
      icon: <Code2 size={18} className="text-red-500" />,
      value: "4",
      label: "Core Domains",
    },
    {
      icon: <Settings size={18} className="text-red-500" />,
      value: "15+",
      label: "Technologies",
    },
    {
      icon: <Shield size={18} className="text-red-500" />,
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
        SHINOBI ARSENAL
      </motion.div>

      {/* 2. MAIN EDITORIAL HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.08]"
      >
        My Technical<br />
        <span
          className="text-red-500 italic drop-shadow-[0_0_20px_rgba(255,42,42,0.45)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Disciplines.
        </span>
      </motion.h1>

      {/* 3. EDITORIAL PARAGRAPH MATCHING EXACT USER PROMPT */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-sm"
      >
        A practical skill set built through projects, internships and continuous learning.
      </motion.p>

      {/* 4. THREE STACKED GLASSMORPHIISM METRIC CARDS */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col space-y-3 pt-2 w-full max-w-xs"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3.5 px-4 py-3 rounded-xl bg-black/60 border border-red-950/70 hover:border-red-500/50 backdrop-blur-md transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] group cursor-default"
          >
            <div className="shrink-0 text-red-500 group-hover:scale-110 transition-transform">
              {stat.icon}
            </div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight">
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
