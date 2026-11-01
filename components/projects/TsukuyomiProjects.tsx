"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Folder, ChevronLeft, ChevronRight, LogOut, Sparkles } from "lucide-react";
import { projects, Project } from "@/lib/projects";
import MissionOrbit from "./MissionOrbit";
import MissionModal from "./MissionModal";
import MissionArchiveDrawer from "./MissionArchiveDrawer";
import CrowParticles from "./CrowParticles";

export default function TsukuyomiProjects() {
  // Active mission index (default to 2: Diabetic Retinopathy Detection as in reference)
  const [activeIndex, setActiveIndex] = useState(2);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);

  const total = projects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handleExit = () => {
    const nextSection = document.getElementById("technical-arsenal");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: 600, behavior: "smooth" });
    }
  };

  // Keyboard navigation for mission orbit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject || isArchiveOpen) return; // Ignore when modal is open
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "Enter" || e.key === " ") {
        setSelectedProject(projects[activeIndex]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, activeIndex, selectedProject, isArchiveOpen]);

  return (
    <section
      id="projects"
      className="relative w-full min-h-[960px] md:min-h-[1020px] bg-black overflow-hidden py-14 flex flex-col justify-between select-none"
    >
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Itachi, Blood Moon, Torii Gates, Reflective Floor) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/tsukuyomi-stage-bg.jpg"
          alt="Itachi Tsukuyomi Mission Dimension"
          fill
          priority
          className="object-cover object-center filter contrast-[1.08] brightness-[0.95]"
        />

        {/* Ambient Red Glow Pulse on floor & moon */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 40%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.15) 50%, transparent 75%)",
          }}
        />

        {/* Top & Bottom seamless blending gradients */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#070708] to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070708] to-transparent z-10" />

        {/* Atmospheric Vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.92)] z-10" />
      </div>

      {/* 2. ATMOSPHERIC CROWS & DRIFTING FEATHERS */}
      <CrowParticles />

      {/* 3. TOPBAR OF TSUKUYOMI DIMENSION */}
      <div className="relative z-20 w-full px-6 sm:px-12 flex items-center justify-between">
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-500 font-serif text-sm shadow-[0_0_15px_rgba(255,38,59,0.5)]">
            月
          </div>
          <div>
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-white">
              KARUN.DEV
            </span>
            <span className="block font-mono text-[9px] tracking-[0.2em] text-neutral-400">
              THE SHINOBI DEVELOPER
            </span>
          </div>
        </div>

        {/* Dimension Title */}
        <div className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-red-400 font-medium uppercase drop-shadow-[0_0_12px_rgba(255,38,59,0.5)]">
          THE TSUKUYOMI DIMENSION
        </div>
      </div>

      {/* 4. SECTION HEADING */}
      <div className="relative z-20 text-center px-4 my-2 sm:my-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] sm:text-[11px] tracking-[0.3em] text-red-500 uppercase mb-1"
        >
          CLASSIFIED PROJECT FILES // ENTER THE TSUKUYOMI
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight drop-shadow-lg"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Select Your <em>Mission.</em>
        </motion.h2>
      </div>

      {/* 5. THE 3D MISSION ORBIT (9 FLOATING SCROLLS) */}
      <div className="relative z-30 w-full my-auto">
        <MissionOrbit
          missions={projects}
          activeIndex={activeIndex}
          onSelect={(i) => setActiveIndex(i)}
          onOpenDossier={(p) => setSelectedProject(p)}
        />
      </div>

      {/* 6. BOTTOM CONTROL BAR (MATCHING REFERENCE EXACTLY) */}
      <div className="relative z-30 w-full px-6 sm:px-12 flex flex-wrap items-center justify-between gap-4 mt-4">
        {/* Left: MISSION ARCHIVE BUTTON */}
        <button
          onClick={() => setIsArchiveOpen(true)}
          type="button"
          aria-label="Open Mission Archive"
          className="flex items-center gap-2.5 px-4 py-2 rounded-sm border border-red-500/50 bg-black/75 backdrop-blur-md font-mono text-[11px] tracking-[0.2em] text-neutral-200 hover:border-red-500 hover:text-white hover:bg-red-950/40 hover:shadow-[0_0_20px_rgba(255,38,59,0.5)] transition-all duration-300 cursor-pointer"
        >
          <Folder size={14} className="text-red-500" />
          <span>MISSION ARCHIVE</span>
        </button>

        {/* Center: NAVIGATION CONTROLS & MISSION COUNTER */}
        <div className="flex items-center gap-4 bg-black/75 backdrop-blur-md px-5 py-2 rounded-full border border-red-950/80 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <button
            onClick={handlePrev}
            type="button"
            aria-label="Previous Mission"
            className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-950/60 transition-colors cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>

          <span className="font-mono text-xs sm:text-sm tracking-widest text-white font-semibold min-w-[70px] text-center">
            <span className="text-red-400 font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="text-neutral-500 mx-1.5">/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </span>

          <button
            onClick={handleNext}
            type="button"
            aria-label="Next Mission"
            className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-400 hover:text-white hover:bg-red-950/60 transition-colors cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Right: EXIT TSUKUYOMI BUTTON */}
        <button
          onClick={handleExit}
          type="button"
          aria-label="Exit Tsukuyomi and continue portfolio"
          className="flex items-center gap-2 px-4 py-2 rounded-sm border border-red-500/50 bg-black/75 backdrop-blur-md font-mono text-[11px] tracking-[0.2em] text-neutral-200 hover:border-red-500 hover:text-white hover:bg-red-950/40 hover:shadow-[0_0_20px_rgba(255,38,59,0.5)] transition-all duration-300 cursor-pointer"
        >
          <LogOut size={13} className="text-red-400" />
          <span>EXIT TSUKUYOMI</span>
        </button>
      </div>

      {/* 7. FULL MISSION DOSSIER MODAL */}
      {selectedProject && (
        <MissionModal
          project={selectedProject}
          missionNumber={activeIndex + 1}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* 8. MISSION ARCHIVE INDEX DRAWER */}
      <MissionArchiveDrawer
        isOpen={isArchiveOpen}
        missions={projects}
        activeIndex={activeIndex}
        onSelectMission={(idx) => setActiveIndex(idx)}
        onClose={() => setIsArchiveOpen(false)}
      />
    </section>
  );
}

