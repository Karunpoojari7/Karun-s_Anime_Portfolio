"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SKILL_DISCIPLINES, DisciplineId, SkillDiscipline } from "./skillsData";
import SkillsIntro from "./SkillsIntro";
import SkillPathway from "./SkillPathway";
import DisciplinePanel from "./DisciplinePanel";
import SkillTrainingPath from "./SkillTrainingPath";
import DriftingLeaves from "./DriftingLeaves";

export default function ShinobiSkillTree() {
  const [activeId, setActiveId] = useState<DisciplineId>("development");

  const activeDiscipline: SkillDiscipline =
    SKILL_DISCIPLINES.find((d) => d.id === activeId) || SKILL_DISCIPLINES[0];

  const handleSelect = useCallback((id: DisciplineId) => {
    setActiveId(id);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const ids: DisciplineId[] = [
      "development",
      "ai-ml",
      "cybersecurity",
      "devops-tools",
    ];
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentIndex = ids.indexOf(activeId);
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setActiveId(ids[(currentIndex + 1) % ids.length]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setActiveId(ids[(currentIndex - 1 + ids.length) % ids.length]);
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        setActiveId(ids[parseInt(e.key) - 1]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId]);

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-black overflow-hidden flex flex-col justify-between py-5 sm:py-7 lg:py-5 select-none">
      {/* ━━━ 1. CINEMATIC BACKGROUND ━━━ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/itachi/shinobi-skill-tree-backdrop.jpg"
          alt="Shinobi training grounds backdrop with blood moon"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_42%]"
        />

        {/* Very light top vignette — preserves moon visibility */}
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

        {/* Bottom floor fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Subtle side darkening only — keeps centre artwork visible */}
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-56 bg-gradient-to-l from-black/60 to-transparent" />

        {/* Gentle red moon atmosphere — positioned at sky, not over character face */}
        <div
          className="absolute animate-red-pulse opacity-20"
          style={{
            top: "-5%",
            left: "25%",
            right: "25%",
            height: "55%",
            background:
              "radial-gradient(ellipse 60% 55% at 50% 20%, rgba(225,29,46,0.38) 0%, rgba(120,10,20,0.12) 55%, transparent 80%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ━━━ 2. DRIFTING MAPLE LEAVES ━━━ */}
      <DriftingLeaves />

      {/* ━━━ 3. MAIN CONTENT LAYER ━━━ */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between gap-5">

        {/* ── DESKTOP: 3-column composition ── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 xl:gap-6 items-center min-h-[560px] my-auto">
          {/* Left: Intro */}
          <motion.div
            className="lg:col-span-3 flex items-center"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SkillsIntro />
          </motion.div>

          {/* Center: Orbital Discipline Selector */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SkillPathway activeId={activeId} onSelect={handleSelect} />
          </div>

          {/* Right: Discipline Info Panel */}
          <div className="lg:col-span-4 flex items-center justify-end">
            <DisciplinePanel discipline={activeDiscipline} />
          </div>
        </div>

        {/* ── TABLET/MOBILE: Stacked layout ── */}
        <div className="lg:hidden flex flex-col gap-8 py-4">
          <SkillsIntro />
          <SkillPathway activeId={activeId} onSelect={handleSelect} />
          <DisciplinePanel discipline={activeDiscipline} />
        </div>

        {/* ── BOTTOM: Training Path ── */}
        <div className="w-full pt-1 pb-2">
          <SkillTrainingPath activeId={activeId} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
}
