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
  Database,
  Terminal,
  Shield,
  Code,
  Sparkles,
} from "lucide-react";
import { projects, Project } from "@/lib/projects";
import MissionOrbit from "./MissionOrbit";
import MissionModal from "./MissionModal";
import ClassifiedArchive from "./ClassifiedArchive";
import CrowParticles from "./CrowParticles";

interface TsukuyomiProjectsProps {
  isDedicatedPage?: boolean;
}

export default function TsukuyomiProjects({ isDedicatedPage = false }: TsukuyomiProjectsProps) {
  // Default to Mission 09 (Bayora Sec as shown in visual Reference Image 2)
  const [currentIndex, setCurrentIndex] = useState(8);
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

  // Keyboard navigation for mission orbit (Arrow keys, Enter, 1-9)
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

  // Helper for technology brand icon with authentic colors
  const getTechIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes("react")) return <span className="text-[#00d8ff] font-bold text-xs">⚛</span>;
    if (t.includes("next")) return <span className="text-white font-bold text-[10px] bg-white/10 px-1 py-0.5 rounded">N</span>;
    if (t.includes("typescript") || t.includes("ts")) return <span className="text-[#3178c6] font-bold text-[9px] bg-[#3178c6]/20 px-1 py-0.5 rounded">TS</span>;
    if (t.includes("node")) return <span className="text-[#539e43] font-bold text-xs">⬡</span>;
    if (t.includes("python")) return <span className="text-[#3776ab] font-bold text-xs">🐍</span>;
    if (t.includes("tensor")) return <span className="text-[#ff6f00] font-bold text-xs">◈</span>;
    if (t.includes("opencv")) return <span className="text-[#5c8cee] font-bold text-xs">◎</span>;
    if (t.includes("flask")) return <span className="text-white font-bold text-xs">🧪</span>;
    if (t.includes("fastapi")) return <span className="text-[#009688] font-bold text-xs">⚡</span>;
    if (t.includes("docker")) return <span className="text-[#2496ed] font-bold text-xs">🐳</span>;
    if (t.includes("postgres") || t.includes("sql")) return <Database size={11} className="text-[#336791]" />;
    if (t.includes("tailwind")) return <span className="text-[#38bdf8] font-bold text-xs">≋</span>;
    if (t.includes("ollama")) return <span className="text-white font-bold text-xs">🦙</span>;
    if (t.includes("kali") || t.includes("linux")) return <Terminal size={11} className="text-amber-400" />;
    return <Sparkles size={11} className="text-red-400" />;
  };

  return (
    <section
      id="projects"
      className={`relative w-full bg-black text-white selection:bg-red-900 selection:text-white overflow-hidden flex flex-col justify-between select-none ${
        isDedicatedPage
          ? "min-h-[calc(100vh-72px)] lg:h-[calc(100vh-72px)] lg:overflow-hidden pt-2 pb-3"
          : "min-h-[920px] md:min-h-[960px] py-8"
      }`}
    >
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Giant Blood Moon, Itachi Reaching Forward, Torii Gates, Reflective Floor) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/itachi/tsukuyomi-stage-bg.jpg"
          alt="Itachi Tsukuyomi Mission Dimension"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_32%]"
        />

        {/* Subtle Stage Floor Crimson Ambience (Preserves 100% facial and sky clarity) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 75% 30% at 50% 95%, rgba(225, 29, 46, 0.35) 0%, transparent 70%)",
          }}
        />

        {/* Subtle Top & Bottom seamless blending gradients */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#070708] to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#070708] to-transparent z-10" />
      </div>

      {/* 2. ATMOSPHERIC CROWS & DRIFTING FEATHERS */}
      <CrowParticles />

      {/* 3. FOREGROUND CONTENT */}
      <div className="relative z-20 w-full flex-1 flex flex-col justify-between max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP EDITORIAL HEADER & MODE SWITCHER MATCHING REFERENCE IMAGE 2 */}
        <header className="w-full text-center space-y-1.5 shrink-0 pt-1">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.25em] text-red-500 uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
            PROJECTS // THE TSUKUYOMI DIMENSION
          </div>

          {/* Section Heading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Tsukuyomi <em className="text-red-500 italic">Dimension.</em>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-neutral-300 font-sans max-w-xl mx-auto">
            Nine missions. Verified projects. Real engineering solutions.
          </p>

          {/* Dual View Mode Switcher Pills */}
          <div className="inline-flex items-center p-1 rounded-full bg-black/80 border border-red-950/80 shadow-[0_0_20px_rgba(0,0,0,0.8)] mt-0.5">
            <button
              type="button"
              onClick={() => setViewMode("dimension")}
              className={`flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                viewMode === "dimension"
                  ? "bg-red-950/80 border border-red-500 text-white shadow-[0_0_15px_rgba(225,29,46,0.5)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Eye size={13} className={viewMode === "dimension" ? "text-red-400" : ""} />
              <span>Tsukuyomi Dimension</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode("archive")}
              className={`flex items-center gap-2 px-3.5 py-1 rounded-full font-mono text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                viewMode === "archive"
                  ? "bg-red-950/80 border border-red-500 text-white shadow-[0_0_15px_rgba(225,29,46,0.5)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Folder size={13} className={viewMode === "archive" ? "text-red-400" : ""} />
              <span>Classified Archive</span>
            </button>
          </div>
        </header>

        {/* 4. MAIN INTERACTIVE EXPERIENCE (ORBIT OR ARCHIVE) */}
        {viewMode === "dimension" ? (
          <div className="w-full flex-1 flex flex-col justify-between my-auto">
            {/* 3D Elliptical Orbit Carousel */}
            <MissionOrbit
              missions={projects}
              activeIndex={currentIndex}
              onSelect={setCurrentIndex}
              onOpenDossier={(p) => handleOpenDossier(p, currentIndex)}
            />

            {/* 5. PROJECT INFORMATION DOSSIER PANEL MATCHING REFERENCE IMAGE 2 */}
            <div className="w-full max-w-5xl mx-auto shrink-0 pt-2 pb-1">
              <div className="relative rounded-2xl bg-[#090204]/96 border border-red-500/60 shadow-[0_0_35px_rgba(225,29,46,0.3),inset_0_0_20px_rgba(0,0,0,0.9)] p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-5 overflow-hidden">
                {/* Subtle Ambient Red Glow inside Dossier */}
                <div
                  className="pointer-events-none absolute -inset-2 opacity-25"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(225, 29, 46, 0.4) 0%, transparent 70%)",
                  }}
                />

                {/* Left: Mission Number & Title */}
                <div className="flex items-center gap-5 w-full lg:w-auto border-b lg:border-b-0 lg:border-r border-red-950/80 pb-3 lg:pb-0 lg:pr-6 shrink-0">
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <span className="font-serif text-3xl sm:text-4xl font-bold text-red-500 tracking-tight leading-none drop-shadow-[0_0_12px_rgba(225,29,46,0.6)]">
                      {activeNumStr}{" "}
                      <span className="text-neutral-500 text-lg sm:text-xl font-normal">
                        / {totalNumStr}
                      </span>
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.25em] text-red-500 font-semibold uppercase mt-1">
                      MISSION DOSSIER
                    </span>
                  </div>

                  {/* Vertical Divider for Mobile */}
                  <div className="w-px h-10 bg-red-950/80 lg:hidden" />

                  {/* Title & Summary */}
                  <div className="min-w-0">
                    <h3
                      className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight truncate drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {currentProject.title}
                    </h3>
                    <p className="font-sans text-xs text-neutral-300 mt-1 max-w-md line-clamp-2 leading-relaxed">
                      {currentProject.summary}
                    </p>
                  </div>
                </div>

                {/* Center / Right: Technologies Pill Badges */}
                <div className="flex-1 w-full lg:w-auto flex flex-col items-start lg:items-center px-1">
                  <div className="font-mono text-[9px] tracking-[0.25em] text-red-500 uppercase font-semibold mb-2">
                    TECHNOLOGIES
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 justify-start lg:justify-center">
                    {currentProject.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/85 border border-red-950/80 text-[11px] font-sans text-neutral-200 shadow-[0_0_8px_rgba(0,0,0,0.6)] hover:border-red-500/60 transition-colors"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Far Right: Stacked Action Buttons */}
                <div className="flex flex-row lg:flex-col gap-2.5 w-full lg:w-auto shrink-0">
                  <button
                    type="button"
                    onClick={() => handleOpenDossier(currentProject, currentIndex)}
                    className="flex-1 lg:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-[#ff263b] hover:from-red-500 hover:to-red-600 text-white font-mono text-xs font-semibold shadow-[0_0_15px_rgba(255,38,59,0.5)] transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>Inspect Detailed Dossier</span>
                    <ArrowUpRight size={13} />
                  </button>

                  <a
                    href={currentProject.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-black/80 hover:bg-red-950/40 border border-neutral-700 hover:border-red-500 text-neutral-300 hover:text-white font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Github size={13} />
                    <span>View GitHub Source</span>
                  </a>
                </div>
              </div>

              {/* 6. BOTTOM CAROUSEL CONTROLS (Arrows & 9 Dots) */}
              <div className="flex items-center justify-center gap-4 mt-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous Mission"
                  className="w-7 h-7 rounded-full border border-red-900/70 bg-black/80 flex items-center justify-center text-red-400 hover:border-red-500 hover:text-white transition-all cursor-pointer focus:outline-none"
                >
                  <ChevronLeft size={16} />
                </button>

                <div className="flex items-center gap-2">
                  {projects.map((_, dotIdx) => {
                    const isDotActive = dotIdx === currentIndex;
                    return (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={() => setCurrentIndex(dotIdx)}
                        aria-label={`Jump to Mission ${dotIdx + 1}`}
                        className={`transition-all duration-300 cursor-pointer rounded-full focus:outline-none ${
                          isDotActive
                            ? "w-3 h-3 bg-red-500 shadow-[0_0_10px_#ff263b]"
                            : "w-2 h-2 bg-neutral-700 hover:bg-neutral-500"
                        }`}
                      />
                    );
                  })}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next Mission"
                  className="w-7 h-7 rounded-full border border-red-900/70 bg-black/80 flex items-center justify-center text-red-400 hover:border-red-500 hover:text-white transition-all cursor-pointer focus:outline-none"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* CLASSIFIED ARCHIVE VIEW */
          <div className="w-full flex-1 flex flex-col justify-start my-auto py-4">
            <ClassifiedArchive
              missions={projects}
              onSelectAndSwitch={handleSelectAndSwitch}
              onOpenDossier={(p, idx) => handleOpenDossier(p, idx)}
            />
          </div>
        )}
      </div>

      {/* 7. FULL PROJECT MISSION DOSSIER MODAL */}
      <MissionModal
        project={selectedProject}
        missionNumber={
          selectedProject
            ? projects.findIndex((p) => p.slug === selectedProject.slug) + 1
            : 1
        }
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
