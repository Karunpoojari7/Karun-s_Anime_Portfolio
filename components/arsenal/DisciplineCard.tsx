"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Discipline } from "./disciplinesData";

interface DisciplineCardProps {
  discipline: Discipline;
  index: number;
  onOpen: () => void;
}

export default function DisciplineCard({ discipline, index, onOpen }: DisciplineCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActivating, setIsActivating] = useState(false);

  const handleActivate = () => {
    if (isActivating) return;
    setIsActivating(true);
    setTimeout(() => {
      onOpen();
      setIsActivating(false);
    }, 160);
  };

  // Custom emblem based on discipline id
  const renderEmblem = () => {
    if (discipline.id === "ninjutsu") {
      // Geometric Architectural Shuriken / Scroll Seal
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#ff263b"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            className={isHovered ? "animate-spin" : ""}
            style={{ animationDuration: "16s" }}
          />
          <polygon
            points="50,15 85,50 50,85 15,50"
            fill="rgba(255, 38, 59, 0.08)"
            stroke="#ff263b"
            strokeWidth="1.2"
          />
          <polygon
            points="50,22 78,50 50,78 22,50"
            fill="none"
            stroke="#8a101b"
            strokeWidth="1"
            transform="rotate(45 50 50)"
          />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="24"
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
          >
            {discipline.kanji}
          </text>
        </svg>
      );
    } else if (discipline.id === "genjutsu") {
      // Neural Vortex / Concentric Cognitive Rings
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#ff263b"
            strokeWidth="1.5"
            strokeDasharray="12 4"
            className={isHovered ? "animate-spin" : ""}
            style={{ animationDuration: "20s" }}
          />
          <circle
            cx="50"
            cy="50"
            r="32"
            fill="rgba(255, 38, 59, 0.06)"
            stroke="#e61938"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <line x1="50" y1="12" x2="50" y2="88" stroke="#8a101b" strokeWidth="1" />
          <line x1="12" y1="50" x2="88" y2="50" stroke="#8a101b" strokeWidth="1" />
          <circle cx="50" cy="18" r="3" fill="#ff263b" />
          <circle cx="50" cy="82" r="3" fill="#ff263b" />
          <circle cx="18" cy="50" r="3" fill="#ff263b" />
          <circle cx="82" cy="50" r="3" fill="#ff263b" />
          <text
            x="50"
            y="58"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="24"
            fontFamily="'Playfair Display', serif"
            fontWeight="bold"
          >
            {discipline.kanji}
          </text>
        </svg>
      );
    } else {
      // Dojutsu: Mangekyo Eye / Tomoe Defense Crest
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="44"
            fill="none"
            stroke="#ff263b"
            strokeWidth="1.5"
            className={isHovered ? "animate-pulse" : ""}
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="rgba(255, 38, 59, 0.12)"
            stroke="#8a101b"
            strokeWidth="1.2"
          />
          <path
            d="M50,22 C58,22 64,30 60,38 C56,46 50,48 50,50"
            fill="none"
            stroke="#ff263b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M50,22 C58,22 64,30 60,38 C56,46 50,48 50,50"
            fill="none"
            stroke="#ff263b"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform="rotate(120 50 50)"
          />
          <path
            d="M50,22 C58,22 64,30 60,38 C56,46 50,48 50,50"
            fill="none"
            stroke="#ff263b"
            strokeWidth="2.5"
            strokeLinecap="round"
            transform="rotate(240 50 50)"
          />
          <circle cx="50" cy="50" r="5" fill="#ffffff" />
          <text
            x="50"
            y="78"
            textAnchor="middle"
            fill="#ff8591"
            fontSize="12"
            fontFamily="'DM Mono', monospace"
            fontWeight="bold"
          >
            {discipline.kanji}
          </text>
        </svg>
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleActivate}
      role="button"
      tabIndex={0}
      aria-label={`Open Training Scroll for ${discipline.disciplineName}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleActivate();
        }
      }}
      className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-sm border transition-all duration-300 cursor-pointer overflow-hidden ${
        isHovered || isActivating
          ? "border-red-500 bg-[#12070a] shadow-[0_0_35px_rgba(255,38,59,0.35)]"
          : "border-red-950/60 bg-[#0e0a0c] hover:border-red-600/80"
      }`}
      style={{
        minHeight: "440px",
      }}
    >
      {/* Subtle Crimson Energy Pulse on Open */}
      {isActivating && (
        <span className="pointer-events-none absolute inset-0 bg-red-600/25 animate-pulse z-30" />
      )}

      {/* Top Wooden Rod Scroll Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#200508] via-red-600 to-[#200508] opacity-80" />

      {/* Corner Brackets on Hover */}
      <span className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-red-500/60 group-hover:border-red-400 transition-colors" />
      <span className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-red-500/60 group-hover:border-red-400 transition-colors" />
      <span className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-red-500/60 group-hover:border-red-400 transition-colors" />
      <span className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-red-500/60 group-hover:border-red-400 transition-colors" />

      {/* TOP HEADER: PATH & CATEGORY */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-red-950/60">
          <span className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
            PATH {discipline.pathNumber} // {discipline.shinobiTitle}
          </span>
          <span className="font-mono text-[9px] tracking-wider text-neutral-400 uppercase bg-black/60 px-2 py-0.5 rounded border border-red-950/50">
            {discipline.category}
          </span>
        </div>

        {/* EMBLEM & DISCIPLINE MOTTO */}
        <div className="flex items-center justify-between my-5">
          <div className="w-16 h-16 rounded-full p-1 bg-black/70 border border-red-900/60 shadow-[0_0_15px_rgba(255,38,59,0.2)] group-hover:shadow-[0_0_25px_rgba(255,38,59,0.5)] transition-shadow">
            {renderEmblem()}
          </div>
          <div className="text-right">
            <span className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase block">
              SHINOBI MOTTO
            </span>
            <span className="text-xl font-serif font-bold text-red-500 tracking-wider">
              {discipline.motto}
            </span>
          </div>
        </div>

        {/* TITLE & DESCRIPTION */}
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight group-hover:text-red-400 transition-colors">
          {discipline.disciplineName}
        </h3>

        <p className="text-xs sm:text-[13px] text-neutral-300 font-sans mt-2.5 leading-relaxed line-clamp-3">
          {discipline.tagline}
        </p>
      </div>

      {/* BOTTOM SECTION: PRIMARY TECH TAGS & CTA */}
      <div className="mt-6 pt-4 border-t border-red-950/60 space-y-4">
        {/* Technology Pills */}
        <div className="flex flex-wrap gap-1.5">
          {discipline.primaryTags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] tracking-wider text-neutral-300 bg-black/60 border border-red-950/70 px-2 py-1 rounded group-hover:border-red-900 group-hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
          {discipline.primaryTags.length > 4 && (
            <span className="font-mono text-[9px] tracking-wider text-red-400 px-1.5 py-1">
              +{discipline.primaryTags.length - 4} MORE
            </span>
          )}
        </div>

        {/* Activation Button Bar */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-red-400 group-hover:text-red-300 transition-colors pt-1">
          <span className="flex items-center gap-1.5 font-semibold">
            <Sparkles size={12} className={isHovered || isActivating ? "animate-pulse" : ""} />
            <span>OPEN TRAINING SCROLL</span>
          </span>
          <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
