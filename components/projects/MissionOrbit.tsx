"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const updateWidth = () => setViewportWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const total = missions.length;

  // Calculate coordinates matching the amphitheater crescent arc of Reference Image 1
  // z-indexes are strictly contained between 10 and 40 (below global header z-50)
  const getSlotTransform = (offset: number) => {
    if (viewportWidth >= 1280) {
      // Desktop
      const desktopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 35, scale: 1.05, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -215, y: 15, scale: 0.82, zIndex: 30, opacity: 0.94 },
        [1]: { x: 215, y: 15, scale: 0.82, zIndex: 30, opacity: 0.94 },
        [-2]: { x: -390, y: -25, scale: 0.74, zIndex: 25, opacity: 0.88 },
        [2]: { x: 390, y: -25, scale: 0.74, zIndex: 25, opacity: 0.88 },
        [-3]: { x: -545, y: -10, scale: 0.68, zIndex: 20, opacity: 0.82 },
        [3]: { x: 545, y: -10, scale: 0.68, zIndex: 20, opacity: 0.82 },
        [-4]: { x: -680, y: 35, scale: 0.62, zIndex: 15, opacity: 0.76 },
        [4]: { x: 680, y: 35, scale: 0.62, zIndex: 15, opacity: 0.76 },
      };
      return desktopSlots[offset] || desktopSlots[0];
    } else if (viewportWidth >= 1024) {
      // Laptop
      const laptopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 30, scale: 1.0, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -180, y: 12, scale: 0.78, zIndex: 30, opacity: 0.92 },
        [1]: { x: 180, y: 12, scale: 0.78, zIndex: 30, opacity: 0.92 },
        [-2]: { x: -325, y: -22, scale: 0.70, zIndex: 25, opacity: 0.85 },
        [2]: { x: 325, y: -22, scale: 0.70, zIndex: 25, opacity: 0.85 },
        [-3]: { x: -455, y: -8, scale: 0.62, zIndex: 20, opacity: 0.78 },
        [3]: { x: 455, y: -8, scale: 0.62, zIndex: 20, opacity: 0.78 },
        [-4]: { x: -560, y: 28, scale: 0.56, zIndex: 15, opacity: 0.70 },
        [4]: { x: 560, y: 28, scale: 0.56, zIndex: 15, opacity: 0.70 },
      };
      return laptopSlots[offset] || laptopSlots[0];
    } else if (viewportWidth >= 640) {
      // Tablet
      const tabletSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 20, scale: 0.95, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -145, y: 8, scale: 0.72, zIndex: 30, opacity: 0.88 },
        [1]: { x: 145, y: 8, scale: 0.72, zIndex: 30, opacity: 0.88 },
        [-2]: { x: -265, y: -18, scale: 0.60, zIndex: 25, opacity: 0.75 },
        [2]: { x: 265, y: -18, scale: 0.60, zIndex: 25, opacity: 0.75 },
        [-3]: { x: -360, y: -5, scale: 0.50, zIndex: 20, opacity: 0.60 },
        [3]: { x: 360, y: -5, scale: 0.50, zIndex: 20, opacity: 0.60 },
        [-4]: { x: -435, y: 20, scale: 0.42, zIndex: 15, opacity: 0.45 },
        [4]: { x: 435, y: 20, scale: 0.42, zIndex: 15, opacity: 0.45 },
      };
      return tabletSlots[offset] || tabletSlots[0];
    } else {
      // Mobile (< 640px)
      const mobileSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 10, scale: 1.0, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -140, y: 5, scale: 0.68, zIndex: 25, opacity: 0.55 },
        [1]: { x: 140, y: 5, scale: 0.68, zIndex: 25, opacity: 0.55 },
        [-2]: { x: -245, y: -8, scale: 0.50, zIndex: 20, opacity: 0.25 },
        [2]: { x: 245, y: -8, scale: 0.50, zIndex: 20, opacity: 0.25 },
        [-3]: { x: -315, y: -5, scale: 0.38, zIndex: 15, opacity: 0.10 },
        [3]: { x: 315, y: -5, scale: 0.38, zIndex: 15, opacity: 0.10 },
        [-4]: { x: -365, y: 10, scale: 0.28, zIndex: 10, opacity: 0.0 },
        [4]: { x: 365, y: 10, scale: 0.28, zIndex: 10, opacity: 0.0 },
      };
      return mobileSlots[offset] || mobileSlots[0];
    }
  };

  return (
    <div className="relative w-full h-[390px] sm:h-[430px] lg:h-[470px] flex items-center justify-center overflow-visible select-none my-auto">
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

          <filter id="chakraBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient Glow Arc */}
        <path
          d="M -690 35 Q -550 -40, -390 -30 T 0 35 T 390 -30 Q 550 -40, 690 35"
          fill="none"
          stroke="rgba(225, 29, 46, 0.4)"
          strokeWidth="6"
          filter="url(#chakraBlur)"
        />

        {/* Crisp Laser Arc Connecting all 9 Scrolls */}
        <path
          d="M -690 35 Q -550 -40, -390 -30 T 0 35 T 390 -30 Q 550 -40, 690 35"
          fill="none"
          stroke="url(#laserGrad)"
          strokeWidth="2"
        />

        {/* Energy Pulse Sparkles */}
        <path
          d="M -690 35 Q -550 -40, -390 -30 T 0 35 T 390 -30 Q 550 -40, 690 35"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeDasharray="12 180"
          className="animate-pulse"
        />

        {/* Central Energy Focus Point directly below Itachi's outstretched hand */}
        <circle
          cx="0"
          cy="35"
          r="8"
          fill="#ff263b"
          className="animate-ping opacity-60"
        />
        <circle cx="0" cy="35" r="4" fill="#ffffff" />
      </svg>

      {/* 2. THE 9 MISSION SCROLLS POSITIONED ALONG THE AMPHITHEATER CRESCENT */}
      {missions.map((mission, index) => {
        // Offset relative to the active mission: -4 to +4
        let offset = index - activeIndex;
        if (offset > 4) offset -= total;
        if (offset < -4) offset += total;

        const isActive = offset === 0;
        const slot = getSlotTransform(offset);

        return (
          <motion.div
            key={mission.slug}
            initial={false}
            animate={{
              x: slot.x,
              y: slot.y,
              scale: slot.scale,
              opacity: slot.opacity,
            }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
            }}
            style={{
              position: "absolute",
              zIndex: slot.zIndex,
            }}
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
    </div>
  );
}
