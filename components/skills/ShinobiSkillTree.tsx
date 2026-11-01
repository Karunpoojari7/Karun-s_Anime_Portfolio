"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SKILL_DISCIPLINES, SkillDiscipline } from "./skillsData";
import SkillsIntro from "./SkillsIntro";
import SkillPathway from "./SkillPathway";
import DisciplinePanel from "./DisciplinePanel";
import DriftingLeaves from "./DriftingLeaves";

export default function ShinobiSkillTree() {
  const [activeId, setActiveId] = useState<SkillDiscipline["id"]>("ninjutsu");

  const activeDiscipline =
    SKILL_DISCIPLINES.find((d) => d.id === activeId) || SKILL_DISCIPLINES[0];

  // Keyboard navigation between disciplines (1-4 or Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const ids: SkillDiscipline["id"][] = ["ninjutsu", "genjutsu", "dojutsu", "kugutsu"];
      const currentIndex = ids.indexOf(activeId);

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        const nextIndex = (currentIndex + 1) % ids.length;
        setActiveId(ids[nextIndex]);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        const prevIndex = (currentIndex - 1 + ids.length) % ids.length;
        setActiveId(ids[prevIndex]);
      } else if (["1", "2", "3", "4"].includes(e.key)) {
        setActiveId(ids[parseInt(e.key) - 1]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeId]);

  return (
    <section className="relative w-full min-h-[920px] lg:min-h-[100vh] bg-black overflow-hidden flex flex-col justify-center py-12 lg:py-20 select-none">
      {/* 1. CINEMATIC BACKGROUND ARTWORK */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/shinobi-skill-tree-backdrop.jpg"
          alt="Itachi Uchiha - Shinobi Skill Tree"
          fill
          priority
          className="object-cover object-center filter contrast-[1.06] brightness-[0.96]"
        />

        {/* Subtle Ambient Red Glow on Central Uchiha Fan & Horizon */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 35% 45%, rgba(255, 38, 59, 0.3) 0%, transparent 65%)",
          }}
        />

        {/* Ambient Dark Vignette Edge Mask */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 opacity-60" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES PARTICLE LAYER */}
      <DriftingLeaves />

      {/* 3. MAIN INTERACTIVE CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* DESKTOP 3-COLUMN COMPOSITION MATCHING REFERENCE */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-center min-h-[640px]">
          {/* Left Column: Title & 4 Category Tiles */}
          <div className="lg:col-span-4 flex items-center">
            <SkillsIntro activeId={activeId} onSelect={setActiveId} />
          </div>

          {/* Center-Right Column: Curved Skill Pathway around Itachi */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <SkillPathway activeId={activeId} onSelect={setActiveId} />
          </div>

          {/* Right Column: Discipline Detail Panel */}
          <div className="lg:col-span-4 flex items-center justify-end">
            <DisciplinePanel discipline={activeDiscipline} />
          </div>
        </div>

        {/* TABLET / MOBILE STACKED LAYOUT */}
        <div className="lg:hidden flex flex-col gap-8 py-6">
          {/* Top: Introduction */}
          <SkillsIntro activeId={activeId} onSelect={setActiveId} />

          {/* Middle: Discipline Selector */}
          <SkillPathway activeId={activeId} onSelect={setActiveId} />

          {/* Bottom: Detailed Panel */}
          <DisciplinePanel discipline={activeDiscipline} />
        </div>
      </div>
    </section>
  );
}
