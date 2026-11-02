"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/lib/projects";
import MissionCard from "./MissionCard";

interface MissionOrbitProps {
  missions: Project[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onOpenDossier: (project: Project) => void;
}

export default function MissionOrbit({
  missions,
  activeIndex,
  onSelect,
  onOpenDossier,
}: MissionOrbitProps) {
  const [viewportWidth, setViewportWidth] = useState<number>(1440);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const total = missions.length;

  const handlePrev = () => {
    onSelect((activeIndex - 1 + total) % total);
  };

  const handleNext = () => {
    onSelect((activeIndex + 1) % total);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // 3D Elliptical Orbit slot coordinates matching Reference Image 2
  // Symmetrical orbital formation around central Itachi character
  const getSlotTransform = (offset: number) => {
    if (viewportWidth >= 1280) {
      // Desktop: 9 cards forming a balanced 3D elliptical orbit around central Itachi
      const desktopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 35, scale: 1.15, zIndex: 40, visible: true },
        [-1]: { x: -260, y: 15, scale: 0.88, zIndex: 35, visible: true },
        [1]: { x: 260, y: 15, scale: 0.88, zIndex: 35, visible: true },
        [-2]: { x: -480, y: -16, scale: 0.78, zIndex: 30, visible: true },
        [2]: { x: 480, y: -16, scale: 0.78, zIndex: 30, visible: true },
        [-3]: { x: -340, y: -62, scale: 0.68, zIndex: 25, visible: true },
        [3]: { x: 340, y: -62, scale: 0.68, zIndex: 25, visible: true },
        [-4]: { x: -170, y: -84, scale: 0.60, zIndex: 20, visible: true },
        [4]: { x: 170, y: -84, scale: 0.60, zIndex: 20, visible: true },
      };
      return desktopSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    } else if (viewportWidth >= 1024) {
      // Laptop: 9 cards scaled to container
      const laptopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 28, scale: 1.05, zIndex: 40, visible: true },
        [-1]: { x: -220, y: 12, scale: 0.84, zIndex: 35, visible: true },
        [1]: { x: 220, y: 12, scale: 0.84, zIndex: 35, visible: true },
        [-2]: { x: -400, y: -14, scale: 0.74, zIndex: 30, visible: true },
        [2]: { x: 400, y: -14, scale: 0.74, zIndex: 30, visible: true },
        [-3]: { x: -285, y: -52, scale: 0.64, zIndex: 25, visible: true },
        [3]: { x: 285, y: -52, scale: 0.64, zIndex: 25, visible: true },
        [-4]: { x: -142, y: -72, scale: 0.58, zIndex: 20, visible: true },
        [4]: { x: 142, y: -72, scale: 0.58, zIndex: 20, visible: true },
      };
      return laptopSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    } else if (viewportWidth >= 640) {
      // Tablet: 5 visible cards with prominent center
      const tabletSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 20, scale: 1.0, zIndex: 40, visible: true },
        [-1]: { x: -185, y: 8, scale: 0.80, zIndex: 35, visible: true },
        [1]: { x: 185, y: 8, scale: 0.80, zIndex: 35, visible: true },
        [-2]: { x: -330, y: -15, scale: 0.68, zIndex: 25, visible: true },
        [2]: { x: 330, y: -15, scale: 0.68, zIndex: 25, visible: true },
      };
      return tabletSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    } else {
      // Mobile: Swipeable centered view
      const mobileSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 0, scale: 1.0, zIndex: 40, visible: true },
        [-1]: { x: -160, y: 0, scale: 0.78, zIndex: 30, visible: true },
        [1]: { x: 160, y: 0, scale: 0.78, zIndex: 30, visible: true },
      };
      return mobileSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    }
  };

  return (
    <div
      className="relative w-full max-w-[1440px] mx-auto h-[380px] sm:h-[420px] lg:h-[450px] flex items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. CONTINUOUS RED CHAKRA ORBITAL RING SVG (Connecting cards with 3D tilted depth) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <svg
          viewBox="0 0 1200 420"
          className="w-full h-full max-w-[1240px] max-h-[420px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="orbitGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff263b" stopOpacity="0.1" />
              <stop offset="25%" stopColor="#ff263b" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#ff4455" stopOpacity="1" />
              <stop offset="75%" stopColor="#ff263b" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ff263b" stopOpacity="0.1" />
            </linearGradient>
            <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Elliptical Glowing Red Laser Path */}
          <ellipse
            cx="600"
            cy="210"
            rx="530"
            ry="115"
            stroke="url(#orbitGlow)"
            strokeWidth="2.2"
            filter="url(#laserGlow)"
          />

          {/* Symmetrical Chakra Diamond Flare Nodes along the orbit curve */}
          {[
            { cx: 70, cy: 210 },
            { cx: 160, cy: 155 },
            { cx: 330, cy: 110 },
            { cx: 870, cy: 110 },
            { cx: 1040, cy: 155 },
            { cx: 1130, cy: 210 },
          ].map((pt, i) => (
            <g key={i}>
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="3.5"
                fill="#ffffff"
                className="animate-pulse"
              />
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r="8"
                fill="#ff263b"
                opacity="0.6"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* 2. THE 9 ORBITAL PROJECT CARDS */}
      <div className="relative w-full h-full flex items-center justify-center">
        {missions.map((project, idx) => {
          let offset = idx - activeIndex;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          const slot = getSlotTransform(offset);
          if (!slot.visible) return null;

          const isActive = offset === 0;

          return (
            <motion.div
              key={project.slug}
              initial={false}
              animate={{
                x: slot.x,
                y: slot.y,
                scale: slot.scale,
                zIndex: slot.zIndex,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 28,
                mass: 0.8,
              }}
              className="absolute flex items-center justify-center will-change-transform"
              style={{ zIndex: slot.zIndex }}
            >
              <MissionCard
                project={project}
                index={idx}
                isActive={isActive}
                onSelect={() => onSelect(idx)}
                onOpenDossier={() => onOpenDossier(project)}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 3. ORBIT NAVIGATION BUTTONS (Left & Right Flanking) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Project Mission"
        className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/85 border border-red-500/60 hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer shadow-[0_0_18px_rgba(255,38,59,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronLeft size={22} className="text-red-400 -ml-0.5" />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Project Mission"
        className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/85 border border-red-500/60 hover:border-red-500 text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer shadow-[0_0_18px_rgba(255,38,59,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <ChevronRight size={22} className="text-red-400 -mr-0.5" />
      </button>
    </div>
  );
}
