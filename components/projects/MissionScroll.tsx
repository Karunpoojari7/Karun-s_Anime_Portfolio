"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface MissionScrollProps {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onOpenDossier: () => void;
}

export default function MissionScroll({
  project,
  index,
  isActive,
  onSelect,
  onOpenDossier,
}: MissionScrollProps) {
  const missionNumber = String(index + 1).padStart(2, "0");
  const thumbSrc = `/assets/projects/mission-${missionNumber}.jpg`;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Mission ${missionNumber}: ${project.title} (${isActive ? "Selected - click to inspect dossier" : "Click to select"})`}
      onClick={isActive ? onOpenDossier : onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (isActive) onOpenDossier();
          else onSelect();
        }
      }}
      className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 select-none ${
        isActive
          ? "z-50"
          : "hover:brightness-125 opacity-85 hover:opacity-100"
      }`}
      style={{
        width: isActive ? "min(310px, 86vw)" : "min(220px, 62vw)",
      }}
    >
      {/* Active Chakra Beam Target Anchor (Top Center) */}
      {isActive && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
          <span className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-[0_0_16px_#ff263b] animate-ping" />
          <span className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
        </div>
      )}

      {/* TOP SCROLL ROLLER (Lacquered Wood & Crimson Metallic Endcaps) */}
      <div className="relative w-full h-3.5 sm:h-4 flex items-center justify-between z-10">
        <div className="w-3.5 sm:w-4 h-5 sm:h-6 -ml-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#200508] border border-red-500 shadow-[0_0_10px_#ff263b]" />
        <div className="flex-1 h-3.5 sm:h-4 bg-gradient-to-r from-[#200508] via-[#650e18] to-[#200508] border-y border-red-500/70 shadow-[0_0_12px_rgba(255,38,59,0.4)]" />
        <div className="w-3.5 sm:w-4 h-5 sm:h-6 -mr-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#200508] border border-red-500 shadow-[0_0_10px_#ff263b]" />
      </div>

      {/* SCROLL PARCHMENT BODY */}
      <div
        className={`relative w-[96%] flex flex-col p-3.5 sm:p-4 bg-[#0a0305]/95 border transition-all duration-300 backdrop-blur-md ${
          isActive
            ? "border-2 border-red-500 shadow-[0_0_40px_rgba(255,38,59,0.7),inset_0_0_25px_rgba(255,38,59,0.25)] bg-gradient-to-b from-[#150408] to-[#080204]"
            : "border border-red-900/60 shadow-[0_0_20px_rgba(0,0,0,0.85)] group-hover:border-red-600/80"
        }`}
      >
        {/* Corner Accents on Active Scroll */}
        {isActive && (
          <>
            <span className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-400" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-red-400" />
            <span className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-red-400" />
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-400" />
          </>
        )}

        {/* Scroll Header: Mission Number */}
        <div className="flex items-center justify-between pb-1.5 border-b border-red-900/40">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
            MISSION {missionNumber}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive ? "bg-red-500 shadow-[0_0_8px_#ff263b] animate-ping" : "bg-neutral-600"
              }`}
            />
            <span className="font-mono text-[8px] tracking-wider text-neutral-400 uppercase">
              {isActive ? "ACTIVE" : "SEALED"}
            </span>
          </div>
        </div>

        {/* Project Thumbnail Preview */}
        <div
          className={`relative w-full my-2.5 overflow-hidden rounded-sm border bg-black ${
            isActive ? "h-28 sm:h-32 border-red-500/80" : "h-20 sm:h-24 border-red-950/70"
          }`}
        >
          <Image
            src={thumbSrc}
            alt={project.title}
            fill
            sizes="320px"
            className="object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
          {isActive && (
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_25px_rgba(255,38,59,0.35)]" />
          )}
        </div>

        {/* Project Title */}
        <h3
          className={`font-serif font-bold text-center tracking-tight leading-snug transition-colors line-clamp-1 ${
            isActive
              ? "text-white text-base sm:text-lg drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              : "text-neutral-200 text-xs sm:text-sm group-hover:text-white"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>

        {/* Category */}
        <p className="font-mono text-[9px] sm:text-[10px] text-red-400 tracking-wider text-center mt-1 truncate">
          {project.category}
        </p>

        {/* Bottom Seal / Prompt */}
        {isActive ? (
          <div className="mt-2.5 pt-2 border-t border-red-900/50 flex items-center justify-between text-[9px] font-mono tracking-widest text-red-400">
            <span className="w-5 h-5 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-400 text-[10px] font-serif shadow-[0_0_8px_rgba(225,29,46,0.5)]">
              月
            </span>
            <div className="flex items-center gap-1 group-hover:text-red-300">
              <span>INSPECT DOSSIER</span>
              <ArrowUpRight size={12} />
            </div>
            <span className="w-5 h-5 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-400 text-[10px] font-serif shadow-[0_0_8px_rgba(225,29,46,0.5)]">
              忍
            </span>
          </div>
        ) : (
          <div className="mt-1.5 text-center text-[8px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300">
            CLICK TO FOCUS
          </div>
        )}
      </div>

      {/* BOTTOM SCROLL ROLLER */}
      <div className="relative w-full h-3.5 sm:h-4 flex items-center justify-between z-10">
        <div className="w-3.5 sm:w-4 h-5 sm:h-6 -ml-1 rounded-sm bg-gradient-to-b from-[#200508] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_10px_#ff263b]" />
        <div className="flex-1 h-3.5 sm:h-4 bg-gradient-to-r from-[#200508] via-[#650e18] to-[#200508] border-y border-red-500/70 shadow-[0_0_12px_rgba(255,38,59,0.4)]" />
        <div className="w-3.5 sm:w-4 h-5 sm:h-6 -mr-1 rounded-sm bg-gradient-to-b from-[#200508] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_10px_#ff263b]" />
      </div>
    </div>
  );
}
