"use client";

import React, { useState, useEffect, useCallback } from "react";
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

  // Keyboard navigation between disciplines (1-4 or Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const ids: DisciplineId[] = [
        "development",
        "ai-ml",
        "cybersecurity",
        "devops-tools",
      ];
      const currentIndex = ids.indexOf(activeId);

      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        const nextIndex = (currentIndex + 1) % ids.length;
        setActiveId(ids[nextIndex]);
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
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
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-black overflow-hidden flex flex-col justify-between py-6 sm:py-8 lg:py-6 select-none">
      {/* 1. DRIFTING MAPLE LEAVES PARTICLE LAYER */}
      <DriftingLeaves />

      {/* 2. MAIN INTERACTIVE CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between space-y-6">
        {/* DESKTOP 3-COLUMN COMPOSITION */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-center min-h-[580px] my-auto">
          {/* Left Column: Editorial Intro & 3 Statistics */}
          <div className="lg:col-span-3 flex items-center">
            <SkillsIntro />
          </div>

          {/* Center Column: Signature Circular Chakra Ring */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SkillPathway activeId={activeId} onSelect={handleSelect} />
          </div>

          {/* Right Column: Detailed Obsidian Discipline Panel */}
          <div className="lg:col-span-4 flex items-center justify-end">
            <DisciplinePanel discipline={activeDiscipline} />
          </div>
        </div>

        {/* TABLET / MOBILE STACKED LAYOUT */}
        <div className="lg:hidden flex flex-col gap-8 py-4">
          {/* Top: Introduction */}
          <SkillsIntro />

          {/* Middle: Interactive Circular Selector */}
          <SkillPathway activeId={activeId} onSelect={handleSelect} />

          {/* Bottom: Detailed Panel */}
          <DisciplinePanel discipline={activeDiscipline} />
        </div>

        {/* 3. BOTTOM HORIZONTAL DISCIPLINE NAVIGATION TIMELINE */}
        <div className="w-full pt-2 pb-2">
          <SkillTrainingPath activeId={activeId} onSelect={handleSelect} />
        </div>
      </div>
    </section>
  );
}
