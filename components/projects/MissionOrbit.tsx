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

  // Calculate coordinates matching the 3D perspective orbital ellipse of Reference Image 1
  // z-indexes are strictly contained between 15 and 40 (below global header z-50)
  const getSlotTransform = (offset: number) => {
    if (viewportWidth >= 1280) {
      // Desktop: 9 scrolls forming a true tilted 3D elliptical orbit around central Itachi
      const desktopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 32, scale: 1.10, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -240, y: 12, scale: 0.86, zIndex: 35, opacity: 0.95 },
        [1]: { x: 240, y: 12, scale: 0.86, zIndex: 35, opacity: 0.95 },
        [-2]: { x: -440, y: -18, scale: 0.77, zIndex: 28, opacity: 0.90 },
        [2]: { x: 440, y: -18, scale: 0.77, zIndex: 28, opacity: 0.90 },
        [-3]: { x: -315, y: -62, scale: 0.68, zIndex: 22, opacity: 0.84 },
        [3]: { x: 315, y: -62, scale: 0.68, zIndex: 22, opacity: 0.84 },
        [-4]: { x: -155, y: -86, scale: 0.62, zIndex: 18, opacity: 0.80 },
        [4]: { x: 155, y: -86, scale: 0.62, zIndex: 18, opacity: 0.80 },
      };
      return desktopSlots[offset] || desktopSlots[0];
    } else if (viewportWidth >= 1024) {
      // Laptop
      const laptopSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 26, scale: 1.02, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -205, y: 10, scale: 0.82, zIndex: 35, opacity: 0.95 },
        [1]: { x: 205, y: 10, scale: 0.82, zIndex: 35, opacity: 0.95 },
        [-2]: { x: -380, y: -16, scale: 0.72, zIndex: 28, opacity: 0.88 },
        [2]: { x: 380, y: -16, scale: 0.72, zIndex: 28, opacity: 0.88 },
        [-3]: { x: -270, y: -54, scale: 0.64, zIndex: 22, opacity: 0.82 },
        [3]: { x: 270, y: -54, scale: 0.64, zIndex: 22, opacity: 0.82 },
        [-4]: { x: -135, y: -74, scale: 0.58, zIndex: 18, opacity: 0.76 },
        [4]: { x: 135, y: -74, scale: 0.58, zIndex: 18, opacity: 0.76 },
      };
      return laptopSlots[offset] || laptopSlots[0];
    } else if (viewportWidth >= 640) {
      // Tablet
      const tabletSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 18, scale: 0.95, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -165, y: 6, scale: 0.74, zIndex: 35, opacity: 0.92 },
        [1]: { x: 165, y: 6, scale: 0.74, zIndex: 35, opacity: 0.92 },
        [-2]: { x: -295, y: -14, scale: 0.62, zIndex: 28, opacity: 0.82 },
        [2]: { x: 295, y: -14, scale: 0.62, zIndex: 28, opacity: 0.82 },
        [-3]: { x: -210, y: -45, scale: 0.52, zIndex: 22, opacity: 0.72 },
        [3]: { x: 210, y: -45, scale: 0.52, zIndex: 22, opacity: 0.72 },
        [-4]: { x: -105, y: -62, scale: 0.45, zIndex: 18, opacity: 0.62 },
        [4]: { x: 105, y: -62, scale: 0.45, zIndex: 18, opacity: 0.62 },
      };
      return tabletSlots[offset] || tabletSlots[0];
    } else {
      // Mobile (< 640px)
      const mobileSlots: Record<
        number,
        { x: number; y: number; scale: number; zIndex: number; opacity: number }
      > = {
        0: { x: 0, y: 5, scale: 1.0, zIndex: 40, opacity: 1.0 },
        [-1]: { x: -135, y: 0, scale: 0.68, zIndex: 30, opacity: 0.65 },
        [1]: { x: 135, y: 0, scale: 0.68, zIndex: 30, opacity: 0.65 },
        [-2]: { x: -225, y: -10, scale: 0.48, zIndex: 20, opacity: 0.30 },
        [2]: { x: 225, y: -10, scale: 0.48, zIndex: 20, opacity: 0.30 },
        [-3]: { x: -160, y: -30, scale: 0.36, zIndex: 15, opacity: 0.15 },
        [3]: { x: 160, y: -30, scale: 0.36, zIndex: 15, opacity: 0.15 },
        [-4]: { x: -80, y: -42, scale: 0.28, zIndex: 10, opacity: 0.05 },
        [4]: { x: 80, y: -42, scale: 0.28, zIndex: 10, opacity: 0.05 },
      };
      return mobileSlots[offset] || mobileSlots[0];
    }
  };

  // Dynamic SVG laser ring coordinates to match viewport
  const laserRx = viewportWidth >= 1280 ? 440 : viewportWidth >= 1024 ? 380 : viewportWidth >= 640 ? 295 : 225;
  const laserRy = viewportWidth >= 1280 ? 72 : viewportWidth >= 1024 ? 62 : viewportWidth >= 640 ? 48 : 34;
  const laserCy = viewportWidth >= 1280 ? -26 : viewportWidth >= 1024 ? -24 : viewportWidth >= 640 ? -20 : -15;
  const focusY = laserCy + laserRy;

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

        {/* Ambient Glow Elliptical Ring */}
        <ellipse
          cx="0"
          cy={laserCy}
          rx={laserRx}
          ry={laserRy}
          fill="none"
          stroke="rgba(225, 29, 46, 0.45)"
          strokeWidth="6"
          filter="url(#chakraBlur)"
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

        {/* Orbiting Energy Sparkles along Ellipse */}
        <ellipse
          cx="0"
          cy={laserCy}
          rx={laserRx}
          ry={laserRy}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeDasharray="14 140"
          className="animate-pulse"
        />

        {/* Central Energy Focus Point directly below Itachi's outstretched hand at front apex */}
        <circle
          cx="0"
          cy={focusY}
          r="9"
          fill="#ff263b"
          className="animate-ping opacity-60"
        />
        <circle cx="0" cy={focusY} r="4.5" fill="#ffffff" />
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
