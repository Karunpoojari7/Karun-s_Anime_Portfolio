"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Eye,
  Folder,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Github,
} from "lucide-react";
import { projects, Project } from "@/lib/projects";
import MissionOrbit from "./MissionOrbit";
import MissionModal from "./MissionModal";
import ClassifiedArchive from "./ClassifiedArchive";
import CrowParticles from "./CrowParticles";

export default function TsukuyomiProjects() {
  // Default to Mission 03 (Diabetic Retinopathy Detection as shown in visual Reference Image 1)
  const [currentIndex, setCurrentIndex] = useState(2);
  const [viewMode, setViewMode] = useState<"dimension" | "archive">("dimension");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const total = projects.length;
  const currentProject = projects[currentIndex];

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleOpenDossier = (project: Project, index?: number) => {
    if (typeof index === "number") {
      setCurrentIndex(index);
    }
    setSelectedProject(project);
  };

  const handleSelectAndSwitch = (index: number) => {
    setCurrentIndex(index);
    setViewMode("dimension");
  };

  // Keyboard navigation for mission orbit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) return; // Ignore when modal is open
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Enter") {
        setSelectedProject(currentProject);
      } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key)) {
        const targetIndex = parseInt(e.key) - 1;
        if (targetIndex < total) {
          setCurrentIndex(targetIndex);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, currentProject, selectedProject, total]);

  const activeNumStr = String(currentIndex + 1).padStart(2, "0");
  const totalNumStr = String(total).padStart(2, "0");

  return (
    <section
      id="projects"
      className="relative w-full min-h-[960px] md:min-h-[1020px] bg-black text-white selection:bg-red-900 selection:text-white overflow-hidden py-10 flex flex-col justify-between select-none"
    >
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Giant Blood Moon, Itachi, Torii Gates, Reflective Floor) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/itachi/tsukuyomi-stage-bg.jpg"
          alt="Itachi Tsukuyomi Mission Dimension"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.08] brightness-[0.95]"
        />

        {/* Ambient Red Glow Pulse on floor & moon */}
        <div
          className="absolute inset-0 animate-red-pulse opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.12) 50%, transparent 75%)",
          }}
        />

        {/* Top & Bottom seamless blending gradients */}
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#070708] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070708] to-transparent z-10" />

        {/* Atmospheric Vignette */}
        <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.92)] z-10" />
      </div>

      {/* 2. ATMOSPHERIC CROWS & DRIFTING FEATHERS */}
      <CrowParticles />

      {/* 3. FOREGROUND CONTENT */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-between max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP EDITORIAL HEADER & MODE SWITCHER MATCHING REFERENCE IMAGE 1 */}
        <header className="w-full text-center space-y-2 pt-2">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-red-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
            PROJECTS // THE TSUKUYOMI DIMENSION
          </div>

          {/* Section Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Tsukuyomi <em className="text-red-500 italic">Dimension.</em>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl mx-auto">
            Nine missions. Verified projects. Real engineering solutions.
          </p>

          {/* Dual View Mode Switcher Pills */}
          <div className="inline-flex items-center p-1 rounded-full bg-black/80 border border-red-950/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.8)] mt-1">
            <button
              type="button"
              onClick={() => setViewMode("dimension")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                viewMode === "dimension"
                  ? "bg-red-950/80 border border-red-500 text-white shadow-[0_0_18px_rgba(225,29,46,0.6)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Eye size={13} className={viewMode === "dimension" ? "text-red-400" : ""} />
              <span>Tsukuyomi Dimension</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("archive")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                viewMode === "archive"
                  ? "bg-red-950/80 border border-red-500 text-white shadow-[0_0_18px_rgba(225,29,46,0.6)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Folder size={13} className={viewMode === "archive" ? "text-red-400" : ""} />
              <span>Classified Archive</span>
            </button>
          </div>
        </header>

        {/* ============================================================
            VIEW A: TSUKUYOMI 3D AMPHITHEATER DIMENSION (REFERENCE IMAGE 1)
           ============================================================ */}
        {viewMode === "dimension" ? (
          <div className="w-full flex-1 flex flex-col justify-between my-2">
            {/* The 9 Floating Scrolls in Crescent Stage around Itachi */}
            <div className="w-full flex-1 flex items-center justify-center">
              <MissionOrbit
                missions={projects}
                activeIndex={currentIndex}
                onSelect={(idx) => setCurrentIndex(idx)}
                onOpenDossier={(project) => handleOpenDossier(project, currentIndex)}
              />
            </div>

            {/* BOTTOM DOSSIER BAR & CAROUSEL CONTROLS */}
            <div className="w-full max-w-6xl mx-auto space-y-3">
              {/* Bottom Active Mission Dossier Bar Matching Reference Image 1 */}
              <div className="rounded-xl bg-[#080204]/94 border border-red-500/50 backdrop-blur-xl p-4 sm:p-5 shadow-[0_0_35px_rgba(225,29,46,0.25)] flex flex-col lg:flex-row items-center justify-between gap-5">
                {/* Left: Mission Number Block */}
                <div className="flex items-center gap-3 shrink-0 border-b lg:border-b-0 lg:border-r border-red-950/80 pb-3 lg:pb-0 lg:pr-6 w-full lg:w-auto justify-between lg:justify-start">
                  <div>
                    <div className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                      <span className="text-red-500 drop-shadow-[0_0_10px_#ff263b]">{activeNumStr}</span>
                      <span className="text-neutral-500 text-xl mx-1.5">/</span>
                      <span className="text-neutral-400 text-xl">{totalNumStr}</span>
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.25em] text-red-400 font-semibold uppercase mt-0.5">
                      MISSION DOSSIER
                    </div>
                  </div>
                </div>

                {/* Center: Title & Description */}
                <div className="flex-1 min-w-0 space-y-1 text-center lg:text-left">
                  <h3
                    className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {currentProject.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-neutral-300 font-sans leading-relaxed line-clamp-2 max-w-2xl">
                    {currentProject.summary}
                  </p>
                </div>

                {/* Center-Right: Technologies with Badges */}
                <div className="shrink-0 space-y-1.5 hidden xl:block border-l border-red-950/80 pl-6">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-400 uppercase font-semibold">
                    TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#100306] border border-red-900/60 font-mono text-[11px] text-neutral-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ff263b]" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0 w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenDossier(currentProject, currentIndex)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-[#9e101f] to-[#e11d2e] hover:from-[#ba1425] hover:to-[#ff263b] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(225,29,46,0.5)] cursor-pointer"
                  >
                    <span>Inspect Detailed Dossier</span>
                    <ArrowUpRight size={15} />
                  </button>

                  {currentProject.repository && (
                    <a
                      href={currentProject.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded border border-neutral-700/80 hover:border-red-500/70 bg-black/60 hover:bg-neutral-900 text-neutral-300 hover:text-white font-mono text-xs tracking-wider transition-colors cursor-pointer"
                    >
                      <Github size={14} className="text-red-400" />
                      <span>View GitHub Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Carousel Controls: Prev, 9 Dots, Next */}
              <div className="flex items-center justify-center gap-4 pt-1 pb-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Mission"
                  className="w-8 h-8 rounded-full border border-red-950/80 bg-black/70 hover:border-red-500/80 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* 9 Pagination Dots */}
                <div className="flex items-center gap-2">
                  {projects.map((_, dotIdx) => {
                    const isDotActive = dotIdx === currentIndex;
                    return (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentIndex(dotIdx)}
                        aria-label={`Jump to Mission ${dotIdx + 1}`}
                        className={`transition-all duration-300 cursor-pointer ${
                          isDotActive
                            ? "w-7 h-2 rounded-full bg-red-500 shadow-[0_0_12px_#ff263b]"
                            : "w-2 h-2 rounded-full bg-neutral-700 hover:bg-neutral-500"
                        }`}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Mission"
                  className="w-8 h-8 rounded-full border border-red-950/80 bg-black/70 hover:border-red-500/80 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* ============================================================
              VIEW B: CLASSIFIED ARCHIVE RESPONSIVE GRID
             ============================================================ */
          <div className="w-full flex-1 my-4">
            <ClassifiedArchive
              missions={projects}
              onOpenDossier={handleOpenDossier}
              onSelectAndSwitch={handleSelectAndSwitch}
            />
          </div>
        )}
      </div>

      {/* 4. MODAL DETAILED DOSSIER VIEW */}
      <MissionModal
        project={selectedProject}
        missionNumber={currentIndex + 1}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
