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

  // Accept genuine project screenshot when provided; fallback to curated mission preview
  const thumbSrc =
    project.screenshotSlots?.[0]?.imagePath ||
    `/assets/projects/mission-${missionNumber}.jpg`;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Mission ${missionNumber}: ${project.title} (${
        isActive ? "Selected - click to inspect dossier" : "Click to select"
      })`}
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
          ? "z-40"
          : "hover:brightness-110 opacity-90 hover:opacity-100"
      }`}
      style={{
        width: isActive ? "min(300px, 84vw)" : "min(215px, 60vw)",
      }}
    >
      {/* Active Chakra Beam Target Anchor (Top Center) */}
      {isActive && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none">
          <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_14px_#ff263b] animate-pulse" />
          <span className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
        </div>
      )}

      {/* TOP SCROLL ROLLER (Lacquered Dark Wood & Crimson Metallic Endcaps) */}
      <div className="relative w-full h-3.5 flex items-center justify-between z-10">
        <div className="w-3.5 h-5 -ml-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#1a0406] border border-red-500/90 shadow-[0_0_8px_#ff263b]" />
        <div className="flex-1 h-3.5 bg-gradient-to-r from-[#180306] via-[#520a13] to-[#180306] border-y border-red-500/60 shadow-[0_0_10px_rgba(225,29,46,0.3)]" />
        <div className="w-3.5 h-5 -mr-1 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#1a0406] border border-red-500/90 shadow-[0_0_8px_#ff263b]" />
      </div>

      {/* SCROLL PARCHMENT BODY (High contrast deep obsidian background) */}
      <div
        className={`relative w-[96%] flex flex-col p-3 sm:p-3.5 bg-[#0c0407]/98 border transition-all duration-300 ${
          isActive
            ? "border-2 border-red-500 shadow-[0_0_30px_rgba(225,29,46,0.55),inset_0_0_15px_rgba(225,29,46,0.2)] bg-gradient-to-b from-[#140306] to-[#080204]"
            : "border border-red-900/70 shadow-[0_0_18px_rgba(0,0,0,0.9)] group-hover:border-red-500/80"
        }`}
      >
        {/* Corner Accents on Active Scroll */}
        {isActive && (
          <>
            <span className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-red-400" />
            <span className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-red-400" />
            <span className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-red-400" />
            <span className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-red-400" />
          </>
        )}

        {/* Scroll Header: Mission Number */}
        <div className="flex items-center justify-between pb-1 border-b border-red-900/40">
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
            MISSION {missionNumber}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isActive
                  ? "bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse"
                  : "bg-neutral-600"
              }`}
            />
            <span className="font-mono text-[8px] tracking-wider text-neutral-400 uppercase">
              {isActive ? "ACTIVE" : "SEALED"}
            </span>
          </div>
        </div>

        {/* Project Thumbnail Preview */}
        <div
          className={`relative w-full my-2 overflow-hidden rounded-sm border bg-black ${
            isActive
              ? "h-26 sm:h-28 border-red-500/80"
              : "h-20 sm:h-22 border-red-950/80"
          }`}
        >
          <Image
            src={thumbSrc}
            alt={project.title}
            fill
            sizes="300px"
            className="object-cover filter contrast-[1.08] brightness-[0.95] group-hover:scale-105 transition-transform duration-500"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />
          {isActive && (
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_20px_rgba(225,29,46,0.3)]" />
          )}
        </div>

        {/* Project Title */}
        <h3
          className={`font-serif font-bold text-center tracking-tight leading-snug transition-colors line-clamp-1 ${
            isActive
              ? "text-white text-base sm:text-[17px] drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]"
              : "text-neutral-200 text-xs sm:text-[13px] group-hover:text-white"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {project.title}
        </h3>

        {/* Category */}
        <p className="font-mono text-[9px] sm:text-[10px] text-red-400 tracking-wider text-center mt-0.5 truncate">
          {project.category}
        </p>

        {/* Bottom Seal / Prompt */}
        {isActive ? (
          <div className="mt-2 pt-1.5 border-t border-red-900/50 flex items-center justify-between text-[9px] font-mono tracking-widest text-red-400">
            <span className="w-4.5 h-4.5 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-400 text-[9px] font-serif shadow-[0_0_6px_rgba(225,29,46,0.4)]">
              月
            </span>
            <div className="flex items-center gap-1 group-hover:text-red-300">
              <span>INSPECT DOSSIER</span>
              <ArrowUpRight size={11} />
            </div>
            <span className="w-4.5 h-4.5 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-400 text-[9px] font-serif shadow-[0_0_6px_rgba(225,29,46,0.4)]">
              忍
            </span>
          </div>
        ) : (
          <div className="mt-1 text-center text-[8px] font-mono tracking-widest text-neutral-400 group-hover:text-neutral-200">
            CLICK TO FOCUS
          </div>
        )}
      </div>

      {/* BOTTOM SCROLL ROLLER */}
      <div className="relative w-full h-3.5 flex items-center justify-between z-10">
        <div className="w-3.5 h-5 -ml-1 rounded-sm bg-gradient-to-b from-[#1a0406] via-[#8a121c] to-[#ff3b4d] border border-red-500/90 shadow-[0_0_8px_#ff263b]" />
        <div className="flex-1 h-3.5 bg-gradient-to-r from-[#180306] via-[#520a13] to-[#180306] border-y border-red-500/60 shadow-[0_0_10px_rgba(225,29,46,0.3)]" />
        <div className="w-3.5 h-5 -mr-1 rounded-sm bg-gradient-to-b from-[#1a0406] via-[#8a121c] to-[#ff3b4d] border border-red-500/90 shadow-[0_0_8px_#ff263b]" />
      </div>
    </div>
  );
}
