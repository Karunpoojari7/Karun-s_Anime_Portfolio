"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Shield, Sparkles, Database, Terminal, Code, Laptop } from "lucide-react";
import { Project } from "@/lib/projects";

interface MissionCardProps {
  project: Project;
  index: number;
  isActive: boolean;
  onSelect: () => void;
  onOpenDossier: () => void;
}

export default function MissionCard({
  project,
  index,
  isActive,
  onSelect,
  onOpenDossier,
}: MissionCardProps) {
  const missionNumber = String(index + 1).padStart(2, "0");

  const thumbSrc =
    project.screenshotSlots?.[0]?.imagePath ||
    `/assets/projects/mission-${missionNumber}.jpg`;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Mission ${missionNumber}: ${project.title} (${
        isActive ? "Active - click to inspect dossier" : "Click to select"
      })`}
      onClick={isActive ? onOpenDossier : onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (isActive) onOpenDossier();
          else onSelect();
        }
      }}
      className={`group relative flex flex-col rounded-2xl cursor-pointer transition-all duration-300 select-none overflow-hidden ${
        isActive
          ? "z-40 border-2 border-red-500 bg-gradient-to-b from-[#180307]/95 via-[#100204]/95 to-[#080102]/95 shadow-[0_0_35px_rgba(255,38,59,0.7),inset_0_0_20px_rgba(255,38,59,0.2)] scale-100"
          : "border border-red-900/60 bg-[#090204]/90 hover:border-red-500/80 hover:bg-[#120306]/95 shadow-[0_0_20px_rgba(0,0,0,0.85)]"
      }`}
      style={{
        width: isActive ? "min(300px, 82vw)" : "min(215px, 60vw)",
      }}
    >
      {/* 1. CARD HEADER: MISSION NUMBER & STATUS INDICATOR */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2 border-b border-red-950/80">
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
          MISSION {missionNumber}
        </span>
        {isActive ? (
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#ff1e38] text-white shadow-[0_0_10px_rgba(255,30,56,0.7)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] font-bold tracking-wider uppercase">ACTIVE</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
            <span className="font-mono text-[8px] tracking-wider text-neutral-400 uppercase">SELECT</span>
          </div>
        )}
      </div>

      {/* 2. CARD VISUAL THUMBNAIL (100% Crisp, authentic project preview image) */}
      <div className="relative w-full aspect-[16/10] bg-black/90 overflow-hidden border-b border-red-950/70">
        <Image
          src={thumbSrc}
          alt={`Mission ${missionNumber} - ${project.title}`}
          fill
          sizes={isActive ? "320px" : "220px"}
          quality={95}
          className={`object-cover object-center transition-transform duration-500 ${
            isActive ? "group-hover:scale-105" : "group-hover:scale-102"
          }`}
        />
        {/* Subtle Bottom Gradient on thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3. CARD BODY: TITLE & CATEGORY */}
      <div className="flex flex-col p-3 sm:p-3.5 space-y-1.5 flex-1 justify-between text-center">
        <div>
          <h3
            className={`font-serif font-bold tracking-tight text-white transition-colors truncate ${
              isActive
                ? "text-base sm:text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                : "text-xs sm:text-sm text-neutral-200 group-hover:text-white"
            }`}
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {project.title}
          </h3>
          <p className="font-sans text-[10px] sm:text-[11px] text-neutral-400 truncate mt-0.5">
            {project.category}
          </p>
        </div>

        {/* 4. ACTIVE CARD ACTION BUTTON */}
        {isActive && (
          <div className="pt-2 border-t border-red-950/70">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onOpenDossier();
              }}
              className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg border border-red-500/70 bg-red-950/30 text-red-400 hover:text-white hover:bg-red-600 hover:border-red-500 font-mono text-[10px] tracking-wider transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(255,38,59,0.3)]"
            >
              <span>INSPECT DOSSIER</span>
              <ArrowUpRight size={12} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
