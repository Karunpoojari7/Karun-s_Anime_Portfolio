"use client";

import React from "react";
import { SKILL_DISCIPLINES, DisciplineId } from "./skillsData";

interface SkillTrainingPathProps {
  activeId: DisciplineId;
  onSelect: (id: DisciplineId) => void;
}

export default function SkillTrainingPath({
  activeId,
  onSelect,
}: SkillTrainingPathProps) {
  const activeIndex = SKILL_DISCIPLINES.findIndex((d) => d.id === activeId);

  return (
    <div className="w-full max-w-5xl mx-auto px-2 sm:px-4 select-none">
      <div className="relative w-full rounded-2xl bg-[#080204]/94 border border-red-500/50 backdrop-blur-xl px-5 sm:px-8 py-3.5 sm:py-4 shadow-[0_0_35px_rgba(225,29,46,0.25)] flex flex-col md:flex-row items-center justify-between gap-4 overflow-hidden">
        {/* Subtle Ambient Red Glow inside bar */}
        <div
          className="pointer-events-none absolute -inset-2 opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(225, 29, 46, 0.4) 0%, transparent 70%)",
          }}
        />

        {/* 1. LEFT: TITLE & SUBTITLE WITH SHURIKEN ICON */}
        <div className="flex items-center gap-3.5 shrink-0 w-full md:w-auto justify-center md:justify-start border-b md:border-b-0 md:border-r border-red-950/80 pb-3 md:pb-0 md:pr-6">
          {/* Stylized Japanese 4-Point Shuriken Icon */}
          <div className="w-8 h-8 rounded-lg bg-red-950/50 border border-red-500/70 flex items-center justify-center text-red-500 shadow-[0_0_12px_rgba(255,38,59,0.5)] shrink-0">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="animate-spin"
              style={{ animationDuration: "16s" }}
            >
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>

          <div>
            <div className="font-mono text-xs font-bold tracking-[0.2em] text-white uppercase flex items-center gap-2">
              SKILL TRAINING PATH
            </div>
            <div className="font-mono text-[9px] text-neutral-400 tracking-wider mt-0.5">
              My learning & application progress
            </div>
          </div>
        </div>

        {/* 2. CENTER / RIGHT: 4-STEP CONNECTED HORIZONTAL TIMELINE */}
        <div className="relative flex-1 w-full max-w-xl flex items-center justify-between px-2 sm:px-6">
          {/* Background Connecting Line */}
          <div className="absolute top-4 left-6 right-6 h-0.5 bg-neutral-800 -translate-y-1/2 z-0" />

          {/* Active Progress Line */}
          <div
            className="absolute top-4 left-6 h-0.5 bg-gradient-to-r from-red-600 to-[#ff263b] -translate-y-1/2 z-0 transition-all duration-500 shadow-[0_0_8px_#ff263b]"
            style={{
              width: `${(activeIndex / (SKILL_DISCIPLINES.length - 1)) * 88}%`,
            }}
          />

          {/* The 4 Steps */}
          {SKILL_DISCIPLINES.map((discipline, idx) => {
            const isActive = discipline.id === activeId;
            const isCompleted = idx <= activeIndex;

            return (
              <button
                key={discipline.id}
                type="button"
                onClick={() => onSelect(discipline.id)}
                className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
              >
                {/* Step Circle */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-mono text-[11px] font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-br from-[#ba1425] to-[#ff263b] text-white border-2 border-white/90 shadow-[0_0_18px_#ff263b] scale-110"
                      : isCompleted
                      ? "bg-red-950/80 border border-red-700/80 text-red-300 group-hover:border-red-400"
                      : "bg-black border border-neutral-700 text-neutral-500 group-hover:border-neutral-500 group-hover:text-neutral-300"
                  }`}
                >
                  {discipline.number}
                </div>

                {/* Step Label Beneath */}
                <span
                  className={`font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider mt-1.5 transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-red-400 drop-shadow-[0_0_6px_rgba(255,38,59,0.6)]"
                      : "text-neutral-400 group-hover:text-neutral-200"
                  }`}
                >
                  {discipline.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
