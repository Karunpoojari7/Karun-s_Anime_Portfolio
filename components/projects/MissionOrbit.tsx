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
  const getSlotTransform = (offset: number) => {
    if (viewportWidth >= 1280) {
      // Desktop
      const desktopSlots: Record<number, { x: number; y: number; scale: number; zIndex: number; opacity: number }> = {
        0: { x: 0, y: 55, scale: 1.08, zIndex: 50, opacity: 1.0 },
        [-1]: { x: -225, y: 25, scale: 0.82, zIndex: 40, opacity: 0.90 },
        [1]: { x: 225, y: 25, scale: 0.82, zIndex: 40, opacity: 0.90 },
        [-2]: { x: -400, y: -35, scale: 0.74, zIndex: 30, opacity: 0.80 },
        [2]: { x: 400, y: -35, scale: 0.74, zIndex: 30, opacity: 0.80 },
        [-3]: { x: -555, y: -15, scale: 0.68, zIndex: 20, opacity: 0.72 },
        [3]: { x: 555, y: -15, scale: 0.68, zIndex: 20, opacity: 0.72 },
        [-4]: { x: -685, y: 40, scale: 0.62, zIndex: 10, opacity: 0.62 },
        [4]: { x: 685, y: 40, scale: 0.62, zIndex: 10, opacity: 0.62 },
      };
      return desktopSlots[offset] || desktopSlots[0];
    } else if (viewportWidth >= 1024) {
      // Laptop
      const laptopSlots: Record<number, { x: number; y: number; scale: number; zIndex: number; opacity: number }> = {
        0: { x: 0, y: 45, scale: 1.0, zIndex: 50, opacity: 1.0 },
        [-1]: { x: -185, y: 18, scale: 0.76, zIndex: 40, opacity: 0.88 },
        [1]: { x: 185, y: 18, scale: 0.76, zIndex: 40, opacity: 0.88 },
        [-2]: { x: -330, y: -28, scale: 0.68, zIndex: 30, opacity: 0.78 },
        [2]: { x: 330, y: -28, scale: 0.68, zIndex: 30, opacity: 0.78 },
        [-3]: { x: -460, y: -10, scale: 0.60, zIndex: 20, opacity: 0.70 },
        [3]: { x: 460, y: -10, scale: 0.60, zIndex: 20, opacity: 0.70 },
        [-4]: { x: -560, y: 32, scale: 0.54, zIndex: 10, opacity: 0.55 },
        [4]: { x: 560, y: 32, scale: 0.54, zIndex: 10, opacity: 0.55 },
      };
      return laptopSlots[offset] || laptopSlots[0];
    } else if (viewportWidth >= 640) {
      // Tablet
      const tabletSlots: Record<number, { x: number; y: number; scale: number; zIndex: number; opacity: number }> = {
        0: { x: 0, y: 30, scale: 0.94, zIndex: 50, opacity: 1.0 },
        [-1]: { x: -150, y: 10, scale: 0.70, zIndex: 40, opacity: 0.85 },
        [1]: { x: 150, y: 10, scale: 0.70, zIndex: 40, opacity: 0.85 },
        [-2]: { x: -275, y: -20, scale: 0.58, zIndex: 30, opacity: 0.65 },
        [2]: { x: 275, y: -20, scale: 0.58, zIndex: 30, opacity: 0.65 },
        [-3]: { x: -375, y: -5, scale: 0.48, zIndex: 20, opacity: 0.45 },
        [3]: { x: 375, y: -5, scale: 0.48, zIndex: 20, opacity: 0.45 },
        [-4]: { x: -445, y: 25, scale: 0.40, zIndex: 10, opacity: 0.30 },
        [4]: { x: 445, y: 25, scale: 0.40, zIndex: 10, opacity: 0.30 },
      };
      return tabletSlots[offset] || tabletSlots[0];
    } else {
      // Mobile (< 640px)
      const mobileSlots: Record<number, { x: number; y: number; scale: number; zIndex: number; opacity: number }> = {
        0: { x: 0, y: 15, scale: 1.0, zIndex: 50, opacity: 1.0 },
        [-1]: { x: -150, y: 5, scale: 0.65, zIndex: 30, opacity: 0.40 },
        [1]: { x: 150, y: 5, scale: 0.65, zIndex: 30, opacity: 0.40 },
        [-2]: { x: -260, y: -10, scale: 0.48, zIndex: 20, opacity: 0.15 },
        [2]: { x: 260, y: -10, scale: 0.48, zIndex: 20, opacity: 0.15 },
        [-3]: { x: -330, y: -5, scale: 0.35, zIndex: 10, opacity: 0.05 },
        [3]: { x: 330, y: -5, scale: 0.35, zIndex: 10, opacity: 0.05 },
        [-4]: { x: -380, y: 10, scale: 0.25, zIndex: 5, opacity: 0.0 },
        [4]: { x: 380, y: 10, scale: 0.25, zIndex: 5, opacity: 0.0 },
      };
      return mobileSlots[offset] || mobileSlots[0];
    }
  };

  return (
    <div className="relative w-full h-[430px] sm:h-[480px] lg:h-[530px] flex items-center justify-center overflow-visible select-none my-1">
      {/* 1. GLOWING CRIMSON CHAKRA LASER ENERGY RING & BEAMS (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-15"
        viewBox="-750 -300 1500 600"
      >
        <defs>
          <filter id="laserBeamGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer subtle orbital energy guide */}
        <ellipse
          cx="0"
          cy="45"
          rx="680"
          ry="155"
          fill="none"
          stroke="#700d18"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          opacity="0.5"
        />

        {/* Primary glowing crimson orbital laser beam passing through scrolls */}
        <ellipse
          cx="0"
          cy="45"
          rx="650"
          ry="145"
          fill="none"
          stroke="#ff263b"
          strokeWidth="2.5"
          strokeDasharray="16 8"
          filter="url(#laserBeamGlow)"
          className="animate-pulse"
          opacity="0.85"
        />

        {/* Vertical Chakra Beam connecting Itachi's hand to active front scroll */}
        <g>
          <line
            x1="0"
            y1="-90"
            x2="0"
            y2="38"
            stroke="#ff263b"
            strokeWidth="3.5"
            opacity="0.6"
            filter="url(#laserBeamGlow)"
          />
          <line
            x1="0"
            y1="-90"
            x2="0"
            y2="38"
            stroke="#ffffff"
            strokeWidth="1.2"
            opacity="0.95"
          />
          {/* Energy spark at Itachi's hand */}
          <circle cx="0" cy="-90" r="5" fill="#ff263b" filter="url(#laserBeamGlow)" />
          <circle cx="0" cy="-90" r="2.5" fill="#ffffff" />
          {/* Energy spark at active scroll anchor */}
          <circle cx="0" cy="38" r="5" fill="#ff263b" filter="url(#laserBeamGlow)" />
          <circle cx="0" cy="38" r="2.5" fill="#ffffff" />
        </g>
      </svg>

      {/* 2. THE NINE FLOATING MISSION SCROLLS */}
      <div className="relative w-0 h-0 flex items-center justify-center">
        {missions.map((project, i) => {
          let offset = (i - activeIndex + total) % total;
          if (offset > 4) offset -= total;

          const slot = getSlotTransform(offset);
          const isActive = offset === 0;

          return (
            <motion.div
              key={project.slug}
              className="absolute pointer-events-auto"
              style={{
                zIndex: slot.zIndex,
              }}
              animate={{
                x: slot.x,
                y: slot.y,
                scale: slot.scale,
                opacity: slot.opacity,
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.8,
              }}
            >
              <MissionScroll
                project={project}
                index={i}
                isActive={isActive}
                onSelect={() => onSelect(i)}
                onOpenDossier={() => onOpenDossier(project)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
