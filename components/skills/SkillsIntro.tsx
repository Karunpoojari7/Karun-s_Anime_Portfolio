"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Layers, FlaskConical } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stats = [
  { icon: <Code2 size={15} className="text-red-500 shrink-0" />, value: "4", label: "Core Domains" },
  { icon: <Layers size={15} className="text-red-500 shrink-0" />, value: "15+", label: "Technologies" },
  { icon: <FlaskConical size={15} className="text-red-500 shrink-0" />, value: "9", label: "Project Applications" },
];

export default function SkillsIntro() {
  return (
    <motion.div
      className="flex flex-col justify-center space-y-5 select-none"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow */}
      <motion.div
        variants={itemVariants}
        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-red-500 uppercase font-semibold"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
        SHINOBI ARSENAL
      </motion.div>

      {/* Main Heading */}
      <motion.h1
        variants={itemVariants}
        className="font-serif font-bold text-white leading-[1.06] tracking-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(38px, 4.2vw, 58px)",
        }}
      >
        My Technical
        <br />
        <em className="not-italic text-red-500 drop-shadow-[0_0_24px_rgba(225,29,46,0.45)]">
          Disciplines.
        </em>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-[13px] text-neutral-300 font-sans leading-relaxed max-w-[280px]"
      >
        A practical skill set built through projects, internships and continuous
        learning.
      </motion.p>

      {/* Stat Cards */}
      <motion.div variants={itemVariants} className="space-y-3 pt-1">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/50 border border-red-950/60 hover:border-red-800/70 transition-colors duration-200 group cursor-default max-w-[240px]"
          >
            <div className="w-7 h-7 rounded-md bg-red-950/50 border border-red-900/50 flex items-center justify-center shrink-0 group-hover:border-red-600/70 transition-colors">
              {stat.icon}
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-base font-bold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
