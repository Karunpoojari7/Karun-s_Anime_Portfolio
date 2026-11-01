"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Github,
  Sparkles,
  Folder,
} from "lucide-react";
import { projects, Project } from "@/lib/projects";
import MissionOrbit from "@/components/projects/MissionOrbit";
import MissionModal from "@/components/projects/MissionModal";
import ClassifiedArchive from "@/components/projects/ClassifiedArchive";
import CrowParticles from "@/components/projects/CrowParticles";

export default function ProjectsPage() {
  // Default to Mission 03 (Diabetic Retinopathy Detection as shown in visual reference)
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
      if (selectedProject) return; // Modal open

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
    <main className="relative min-h-screen bg-black text-white selection:bg-red-900 selection:text-white overflow-x-hidden">
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Giant Blood Moon, Torii Gates, Reflective Lake) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/itachi/tsukuyomi-stage-bg.jpg"
          alt="The Tsukuyomi Dimension"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on floor & moon */}
        <div
          className="absolute inset-0 animate-red-pulse opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.15) 50%, transparent 75%)",
          }}
        />

        {/* Crisp Edge Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 opacity-30" />
      </div>

      {/* 2. ATMOSPHERIC DRIFTING CROWS AND FEATHERS */}
      <CrowParticles />

      {/* 3. FOREGROUND PAGE CONTENT */}
      <div className="relative z-20 w-full min-h-screen flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-12">
        {/* TOP EDITORIAL HEADER & MODE SWITCHER */}
        <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 pt-4">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-red-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
            PROJECTS // THE TSUKUYOMI DIMENSION
          </div>

          {/* Page Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Tsukuyomi <em className="text-red-500 italic">Dimension.</em>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-sm sm:text-base text-neutral-300 font-sans max-w-xl mx-auto">
            Nine missions. Verified projects. Real engineering solutions.
          </p>

          {/* Dual View Mode Switcher Pills */}
          <div className="inline-flex items-center p-1 rounded-full bg-black/80 border border-red-950/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.8)] mt-2">
            <button
              type="button"
              onClick={() => setViewMode("dimension")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                viewMode === "dimension"
                  ? "bg-red-950/80 border border-red-500 text-white shadow-[0_0_18px_rgba(225,29,46,0.6)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Eye size={14} className={viewMode === "dimension" ? "text-red-400" : ""} />
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
              <Folder size={14} className={viewMode === "archive" ? "text-red-400" : ""} />
              <span>Classified Archive</span>
            </button>
          </div>
        </header>

        {/* ============================================================
            VIEW A: TSUKUYOMI 3D ORBITAL DIMENSION
           ============================================================ */}
        {viewMode === "dimension" ? (
          <div className="w-full flex-1 flex flex-col justify-between my-2">
            {/* The 9 Floating Scrolls around Itachi with Energy Laser */}
            <div className="w-full flex-1 flex items-center justify-center">
              <MissionOrbit
                missions={projects}
                activeIndex={currentIndex}
                onSelect={(idx) => setCurrentIndex(idx)}
                onOpenDossier={(project) => handleOpenDossier(project, currentIndex)}
              />
            </div>

            {/* BOTTOM DOSSIER BAR & CAROUSEL CONTROLS */}
            <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mt-4 space-y-4">
              {/* Bottom Active Mission Dossier Bar */}
              <div className="rounded-xl bg-[#090305]/92 border border-red-500/50 backdrop-blur-xl p-4 sm:p-5 shadow-[0_0_35px_rgba(225,29,46,0.25),inset_0_0_20px_rgba(0,0,0,0.85)] flex flex-col lg:flex-row items-center justify-between gap-5">
                {/* Left: Mission Number Block */}
                <div className="flex items-center gap-3 shrink-0 border-b lg:border-b-0 lg:border-r border-red-950/80 pb-3 lg:pb-0 lg:pr-5 w-full lg:w-auto justify-between lg:justify-start">
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
                      <span className="text-red-500">{activeNumStr}</span>
                      <span className="text-neutral-600 text-lg mx-1.5">/</span>
                      <span className="text-neutral-400 text-lg">{totalNumStr}</span>
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.2em] text-red-400 font-semibold uppercase mt-0.5">
                      MISSION DOSSIER
                    </div>
                  </div>
                </div>

                {/* Center-Left: Project Title & Summary */}
                <div className="flex-1 min-w-0 space-y-1 text-center lg:text-left">
                  <h3
                    className="text-lg sm:text-xl font-serif font-bold text-white tracking-tight truncate"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans line-clamp-2 max-w-xl">
                    {currentProject.summary}
                  </p>
                </div>

                {/* Center-Right: Technologies */}
                <div className="shrink-0 space-y-1.5 hidden md:block">
                  <div className="font-mono text-[9px] tracking-[0.2em] text-red-400 uppercase font-semibold">
                    TECHNOLOGIES
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentProject.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-black/60 border border-red-950/80 font-mono text-[10px] text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0 justify-center w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => handleOpenDossier(currentProject, currentIndex)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-[0_0_18px_rgba(225,29,46,0.5)] cursor-pointer"
                  >
                    <span>Inspect Detailed Dossier</span>
                    <ArrowUpRight size={15} />
                  </button>

                  {currentProject.repository && (
                    <a
                      href={currentProject.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded border border-neutral-700 hover:border-red-500/60 bg-black/70 hover:bg-neutral-900 text-neutral-300 hover:text-white font-mono text-xs tracking-wider transition-all duration-200"
                    >
                      <Github size={14} />
                      <span className="hidden sm:inline">View GitHub Source</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Bottom Carousel Controls: Prev, 9 Dots, Next */}
              <div className="flex items-center justify-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Mission"
                  className="w-8 h-8 rounded-full border border-red-950/80 bg-black/60 hover:border-red-500/80 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
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
                            ? "w-6 h-2 rounded-full bg-red-500 shadow-[0_0_10px_#ff263b]"
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
                  className="w-8 h-8 rounded-full border border-red-950/80 bg-black/60 hover:border-red-500/80 flex items-center justify-center text-neutral-400 hover:text-white transition-all cursor-pointer"
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
    </main>
  );
}
