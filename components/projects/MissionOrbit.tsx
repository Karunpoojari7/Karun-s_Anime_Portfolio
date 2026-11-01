"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [radii, setRadii] = useState({ rx: 420, ry: 130 });
  const [isMobile, setIsMobile] = useState(false);

  // Dynamically calculate responsive radius based on window size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIsMobile(true);
        setRadii({ rx: 140, ry: 60 });
      } else if (width < 1024) {
        setIsMobile(false);
        setRadii({ rx: 300, ry: 100 });
      } else {
        setIsMobile(false);
        setRadii({ rx: 430, ry: 135 });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const total = missions.length;

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center overflow-visible select-none">
      {/* 1. GLOWING CRIMSON ORBITAL ENERGY RINGS (SVG) */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full z-10"
        viewBox="-500 -300 1000 600"
      >
        <defs>
          <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff263b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8a0f1c" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#250306" stopOpacity="0" />
          </radialGradient>
          <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer subtle orbital guide */}
        <ellipse
          cx="0"
          cy="30"
          rx={radii.rx + 15}
          ry={radii.ry + 8}
          fill="none"
          stroke="#5a0b14"
          strokeWidth="1"
          strokeDasharray="4 8"
          opacity="0.5"
        />

        {/* Primary glowing crimson orbital beam */}
        <ellipse
          cx="0"
          cy="30"
          rx={radii.rx}
          ry={radii.ry}
          fill="none"
          stroke="#ff263b"
          strokeWidth="1.8"
          strokeDasharray="12 6"
          filter="url(#laserGlow)"
          className="animate-pulse"
          opacity="0.85"
        />

        {/* Energy beam from Itachi's hand to active front scroll */}
        <g>
          <line
            x1="0"
            y1="-90"
            x2="0"
            y2={radii.ry - 45}
            stroke="#ff263b"
            strokeWidth="2.5"
            filter="url(#laserGlow)"
            className="animate-pulse"
          />
          <line
            x1="0"
            y1="-90"
            x2="0"
            y2={radii.ry - 45}
            stroke="#ffffff"
            strokeWidth="0.8"
            opacity="0.9"
          />
          {/* Energy focus node at Itachi's hand */}
          <circle cx="0" cy="-90" r="5" fill="#ff263b" filter="url(#laserGlow)" />
          <circle cx="0" cy="-90" r="2.5" fill="#ffffff" />
        </g>
      </svg>

      {/* 2. THE NINE MISSION SCROLLS IN 3D PERSPECTIVE ORBIT */}
      <div className="relative w-0 h-0 flex items-center justify-center">
        {missions.map((project, i) => {
          // Calculate angle so activeIndex is at Math.PI / 2 (front center)
          const angle = ((i - activeIndex) / total) * 2 * Math.PI + Math.PI / 2;

          // Projected 2D coordinates with 3D elliptical tilt
          const x = Math.cos(angle) * radii.rx;
          const y = Math.sin(angle) * radii.ry + 30;

          // Depth metric: 0 is furthest back, 1 is closest to camera in front
          const depth = (Math.sin(angle) + 1) / 2;
          const scale = isMobile ? (i === activeIndex ? 1 : 0.6) : 0.62 + depth * 0.44;
          const opacity = isMobile ? (i === activeIndex ? 1 : 0.35) : 0.42 + depth * 0.58;
          const zIndex = Math.round(depth * 50);
          const isActive = i === activeIndex;

          return (
            <motion.div
              key={project.slug}
              className="absolute pointer-events-auto"
              style={{
                zIndex,
              }}
              animate={{
                x,
                y,
                scale,
                opacity,
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

