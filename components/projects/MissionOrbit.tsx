"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Project } from "@/lib/projects";
import MissionScroll from "./MissionScroll";

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

  // 3D Elliptical Orbit slot coordinates matching Reference Image 1
  // All inactive cards maintain 100% text/image sharpness (no opacity fading or blur)
  const getSlotTransform = (offset: number) => {
    if (viewportWidth >= 1280) {
      // Desktop: 9 scrolls forming a true tilted 3D elliptical orbit around central Itachi
      const desktopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 32, scale: 1.10, zIndex: 40, visible: true },
        [-1]: { x: -245, y: 12, scale: 0.86, zIndex: 35, visible: true },
        [1]: { x: 245, y: 12, scale: 0.86, zIndex: 35, visible: true },
        [-2]: { x: -445, y: -20, scale: 0.77, zIndex: 28, visible: true },
        [2]: { x: 445, y: -20, scale: 0.77, zIndex: 28, visible: true },
        [-3]: { x: -320, y: -64, scale: 0.68, zIndex: 22, visible: true },
        [3]: { x: 320, y: -64, scale: 0.68, zIndex: 22, visible: true },
        [-4]: { x: -160, y: -88, scale: 0.62, zIndex: 18, visible: true },
        [4]: { x: 160, y: -88, scale: 0.62, zIndex: 18, visible: true },
      };
      return desktopSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    } else if (viewportWidth >= 1024) {
      // Laptop: 9 scrolls
      const laptopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 26, scale: 1.02, zIndex: 40, visible: true },
        [-1]: { x: -210, y: 10, scale: 0.82, zIndex: 35, visible: true },
        [1]: { x: 210, y: 10, scale: 0.82, zIndex: 35, visible: true },
        [-2]: { x: -385, y: -18, scale: 0.72, zIndex: 28, visible: true },
        [2]: { x: 385, y: -18, scale: 0.72, zIndex: 28, visible: true },
        [-3]: { x: -275, y: -56, scale: 0.64, zIndex: 22, visible: true },
        [3]: { x: 275, y: -56, scale: 0.64, zIndex: 22, visible: true },
        [-4]: { x: -138, y: -76, scale: 0.58, zIndex: 18, visible: true },
        [4]: { x: 138, y: -76, scale: 0.58, zIndex: 18, visible: true },
      };
      return laptopSlots[offset] || { x: 0, y: 0, scale: 0, zIndex: 0, visible: false };
    } else if (viewportWidth >= 640) {
      // Tablet: 5 visible scrolls with prominent center
      const tabletSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 18, scale: 0.95, zIndex: 40, visible: true },
        [-1]: { x: -175, y: 6, scale: 0.75, zIndex: 35, visible: true },
        [1]: { x: 175, y: 6, scale: 0.75, zIndex: 35, visible: true },
        [-2]: { x: -310, y: -14, scale: 0.62, zIndex: 28, visible: true },
        [2]: { x: 310, y: -14, scale: 0.62, zIndex: 28, visible: true },
      };
      return tabletSlots[offset] || { x: offset > 0 ? 400 : -400, y: -20, scale: 0.4, zIndex: 10, visible: false };
    } else {
      // Mobile (< 640px): Dedicated focus on readable active central card with smooth swipe
      const mobileSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; visible: boolean }
      > = {
        0: { x: 0, y: 6, scale: 1.0, zIndex: 40, visible: true },
        [-1]: { x: -160, y: 0, scale: 0.75, zIndex: 30, visible: true },
        [1]: { x: 160, y: 0, scale: 0.75, zIndex: 30, visible: true },
      };
      return mobileSlots[offset] || { x: offset > 0 ? 300 : -300, y: 0, scale: 0.4, zIndex: 10, visible: false };
    }
  };

  // Laser SVG ellipse coordinates matching viewport
  const laserRx = viewportWidth >= 1280 ? 445 : viewportWidth >= 1024 ? 385 : viewportWidth >= 640 ? 300 : 210;
  const laserRy = viewportWidth >= 1280 ? 74 : viewportWidth >= 1024 ? 64 : viewportWidth >= 640 ? 50 : 36;
  const laserCy = viewportWidth >= 1280 ? -26 : viewportWidth >= 1024 ? -24 : viewportWidth >= 640 ? -20 : -15;

  // Star flare diamond coordinates along the ellipse
  const flarePoints = [
    { x: 0, y: laserCy + laserRy },
    { x: -laserRx * 0.55, y: laserCy + laserRy * 0.83 },
    { x: laserRx * 0.55, y: laserCy + laserRy * 0.83 },
    { x: -laserRx, y: laserCy },
    { x: laserRx, y: laserCy },
    { x: -laserRx * 0.72, y: laserCy - laserRy * 0.7 },
    { x: laserRx * 0.72, y: laserCy - laserRy * 0.7 },
    { x: -laserRx * 0.36, y: laserCy - laserRy * 0.93 },
    { x: laserRx * 0.36, y: laserCy - laserRy * 0.93 },
  ];

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[390px] sm:h-[430px] lg:h-[470px] flex items-center justify-center overflow-visible select-none my-auto"
    >
      {/* 1. GLOWING CRIMSON CHAKRA LASER ENERGY RING & BEAMS (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-15"
        viewBox="-750 -300 1500 600"
      >
        <defs>
          <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(225, 29, 46, 0.2)" />
            <stop offset="30%" stopColor="#ff263b" />
            <stop offset="50%" stopColor="#ff5263" />
            <stop offset="70%" stopColor="#ff263b" />
            <stop offset="100%" stopColor="rgba(225, 29, 46, 0.2)" />
          </linearGradient>
        </defs>

        {/* Ambient Outer Vector Stroke (Clean vector line, NO Gaussian raster blur) */}
        <ellipse
          cx="0"
          cy={laserCy}
          rx={laserRx}
          ry={laserRy}
          fill="none"
          stroke="rgba(225, 29, 46, 0.3)"
          strokeWidth="4"
        />

        {/* Crisp Laser Ellipse Connecting all 9 Scrolls around Itachi */}
        <ellipse
          cx="0"
          cy={laserCy}
          rx={laserRx}
          ry={laserRy}
          fill="none"
          stroke="url(#laserGrad)"
          strokeWidth="2.2"
        />

        {/* 4-Point Chakra Diamond Sparkles along the Ellipse Matching Reference Image 1 */}
        {flarePoints.map((pt, i) => (
          <g key={i}>
            <circle
              cx={pt.x}
              cy={pt.y}
              r="2.5"
              fill="#ffffff"
              className="filter drop-shadow-[0_0_6px_#ff263b]"
            />
            <path
              d={`M ${pt.x} ${pt.y - 7} L ${pt.x + 2} ${pt.y - 1} L ${pt.x + 7} ${pt.y} L ${pt.x + 2} ${pt.y + 1} L ${pt.x} ${pt.y + 7} L ${pt.x - 2} ${pt.y + 1} L ${pt.x - 7} ${pt.y} L ${pt.x - 2} ${pt.y - 1} Z`}
              fill="#ff4055"
              className="opacity-80"
            />
          </g>
        ))}
      </svg>

      {/* 2. THE 9 ORBITAL MISSION SCROLLS */}
      {missions.map((mission, index) => {
        let offset = (index - activeIndex) % total;
        if (offset > 4) offset -= total;
        if (offset < -4) offset += total;

        const slot = getSlotTransform(offset);
        const isActive = offset === 0;

        if (!slot.visible) return null;

        return (
          <motion.div
            key={mission.slug}
            initial={false}
            animate={{
              x: slot.x,
              y: slot.y,
              scale: slot.scale,
              zIndex: slot.zIndex,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 24,
              mass: 0.85,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer origin-center"
            style={{ zIndex: slot.zIndex }}
          >
            <MissionScroll
              project={mission}
              index={index}
              isActive={isActive}
              onSelect={() => onSelect(index)}
              onOpenDossier={() => onOpenDossier(mission)}
            />
          </motion.div>
        );
      })}

      {/* 3. FLANKING ORBIT NAVIGATION ARROWS (Left & Right) */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous Mission"
        className="absolute left-2 sm:left-4 lg:left-8 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/85 border border-red-500/70 text-red-400 hover:text-white hover:border-red-400 hover:scale-110 shadow-[0_0_18px_rgba(225,29,46,0.45)] transition-all flex items-center justify-center cursor-pointer focus:outline-none"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        type="button"
        onClick={handleNext}
        aria-label="Next Mission"
        className="absolute right-2 sm:right-4 lg:right-8 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/85 border border-red-500/70 text-red-400 hover:text-white hover:border-red-400 hover:scale-110 shadow-[0_0_18px_rgba(225,29,46,0.45)] transition-all flex items-center justify-center cursor-pointer focus:outline-none"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}
