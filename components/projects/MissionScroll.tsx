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
      onClick={isActive ? onOpenDossier : onSelect}
      className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 select-none ${
        isActive ? "z-40 scale-100" : "hover:brightness-125"
      }`}
      style={{
        width: isActive ? "min(280px, 78vw)" : "min(220px, 60vw)",
      }}
    >
      {/* TOP SCROLL ROLLER */}
      <div className="relative w-full h-3.5 flex items-center justify-between z-10">
        {/* Left metallic roller cap */}
        <div className="w-2.5 h-4.5 -ml-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#250306] border border-red-500 shadow-[0_0_8px_#ff263b]" />
        {/* Central wooden scroll cylinder */}
        <div className="flex-1 h-3 bg-gradient-to-r from-[#200508] via-[#520d15] to-[#200508] border-y border-red-600/70 shadow-[0_0_10px_rgba(255,38,59,0.4)]" />
        {/* Right metallic roller cap */}
        <div className="w-2.5 h-4.5 -mr-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#250306] border border-red-500 shadow-[0_0_8px_#ff263b]" />
      </div>

      {/* SCROLL PARCHMENT BODY */}
      <div
        className={`relative w-[96%] flex flex-col p-3 sm:p-3.5 bg-[#0b0305]/95 border transition-all duration-300 backdrop-blur-md ${
          isActive
            ? "border-red-500 shadow-[0_0_35px_rgba(255,38,59,0.65),inset_0_0_20px_rgba(255,38,59,0.25)]"
            : "border-red-900/60 shadow-[0_0_15px_rgba(0,0,0,0.8)] opacity-85 group-hover:border-red-600 group-hover:opacity-100"
        }`}
      >
        {/* Corner Accents on Active Scroll */}
        {isActive && (
          <>
            <span className="absolute top-0.5 left-0.5 w-2 h-2 border-t-2 border-l-2 border-red-400" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 border-t-2 border-r-2 border-red-400" />
            <span className="absolute bottom-0.5 left-0.5 w-2 h-2 border-b-2 border-l-2 border-red-400" />
            <span className="absolute bottom-0.5 right-0.5 w-2 h-2 border-b-2 border-r-2 border-red-400" />
          </>
        )}

        {/* Scroll Header */}
        <div className="flex items-center justify-between pb-1.5 border-b border-red-900/40">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-red-500 font-semibold uppercase">
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
        <div className="relative w-full h-20 sm:h-24 my-2 overflow-hidden rounded-sm border border-red-900/50 bg-black">
          <Image
            src={thumbSrc}
            alt={project.title}
            fill
            sizes="280px"
            className="object-cover filter contrast-110 group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle crimson scanline & vignette */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(255,38,59,0.25)]" />
        </div>

        {/* Project Title */}
        <h3
          className={`font-serif font-bold text-center tracking-tight leading-tight transition-colors line-clamp-1 ${
            isActive
              ? "text-white text-sm sm:text-base drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
              : "text-neutral-200 text-xs sm:text-sm group-hover:text-white"
          }`}
        >
          {project.title}
        </h3>

        {/* Category & Status */}
        <p className="font-mono text-[9px] sm:text-[10px] text-red-400 tracking-wider text-center mt-1 truncate">
          {project.category}
        </p>

        {/* Action Prompt on Active Scroll */}
        {isActive ? (
          <div className="mt-2.5 pt-1.5 border-t border-red-900/50 flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-mono tracking-widest text-red-400 group-hover:text-red-300">
            <span>INSPECT DOSSIER</span>
            <ArrowUpRight size={12} />
          </div>
        ) : (
          <div className="mt-1.5 text-center text-[8px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-300">
            CLICK TO ROTATE
          </div>
        )}
      </div>

      {/* BOTTOM SCROLL ROLLER */}
      <div className="relative w-full h-3.5 flex items-center justify-between z-10">
        <div className="w-2.5 h-4.5 -ml-1 rounded-sm bg-gradient-to-b from-[#250306] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_8px_#ff263b]" />
        <div className="flex-1 h-3 bg-gradient-to-r from-[#200508] via-[#520d15] to-[#200508] border-y border-red-600/70 shadow-[0_0_10px_rgba(255,38,59,0.4)]" />
        <div className="w-2.5 h-4.5 -mr-1 rounded-sm bg-gradient-to-b from-[#250306] via-[#8a121c] to-[#ff3b4d] border border-red-500 shadow-[0_0_8px_#ff263b]" />
      </div>
    </div>
  );
}

