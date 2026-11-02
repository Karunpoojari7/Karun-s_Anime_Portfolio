"use client";

import React from "react";
import { motion } from "framer-motion";

interface MangekyoEyeProps {
  side: "left" | "right";
  /** Animation progress stage: 1=silence, 2=opening, 3=activated, 4=surge */
  stage: number;
}

/**
 * High-precision SVG Mangekyo Sharingan eye overlay matching Itachi Uchiha's
 * iconic tri-blade pinwheel iris pattern and anatomical eyelid aperture.
 */
export default function MangekyoEyeOverlay({ side, stage }: MangekyoEyeProps) {
  // Viewer left eye is at ~24% horizontal, right eye is at ~71% horizontal
  // Slit rotation slight angle (-3 deg left, +3 deg right)
  const isLeft = side === "left";

  return (
    <div
      className={`pointer-events-none absolute select-none z-20 ${
        isLeft
          ? "left-[21%] sm:left-[22%] md:left-[23%] lg:left-[23.9%] top-[30%] sm:top-[30.5%] md:top-[31%] lg:top-[31.4%]"
          : "left-[68%] sm:left-[69%] md:left-[70%] lg:left-[70.6%] top-[27%] sm:top-[27.5%] md:top-[28%] lg:top-[28.2%]"
      } -translate-x-1/2 -translate-y-1/2`}
      style={{
        width: "min(140px, 14vw)",
        height: "min(76px, 8vw)",
      }}
    >
      <svg
        viewBox="0 0 160 90"
        className="w-full h-full overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Radial Red Glow for Iris */}
          <radialGradient
            id={`irisGlow-${side}`}
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <stop offset="0%" stopColor="#ff1128" stopOpacity="1" />
            <stop offset="45%" stopColor="#d60a1e" stopOpacity="0.95" />
            <stop offset="85%" stopColor="#8a000d" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1a0003" stopOpacity="1" />
          </radialGradient>

          {/* Eyelid Anatomical Clip Path for Aperture Opening */}
          <clipPath id={`eyelidClip-${side}`}>
            {/* Upper and lower eyelid curve mask */}
            <motion.path
              d={
                stage === 1
                  ? "M 10 45 Q 80 44 150 45 Q 80 46 10 45 Z" // Closed slit
                  : stage === 2
                  ? "M 10 45 Q 80 20 150 45 Q 80 62 10 45 Z" // Half-open
                  : "M 10 45 Q 80 8 150 45 Q 80 78 10 45 Z" // Fully open
              }
              transition={{
                duration: stage === 2 ? 0.9 : 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </clipPath>

          {/* Intense Crimson Drop Shadow for Mangekyo */}
          <filter id={`eyeFlare-${side}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* CLIPPED EYE APERTURE (Iris and Sharingan) */}
        <g clipPath={`url(#eyelidClip-${side})`}>
          {/* Sclera Dark Red Rim */}
          <ellipse
            cx="80"
            cy="45"
            rx="70"
            ry="35"
            fill="#120204"
            opacity="0.8"
          />

          {/* Deep Glowing Red Iris */}
          <circle
            cx="80"
            cy="45"
            r="32"
            fill={`url(#irisGlow-${side})`}
            filter={stage >= 3 ? `url(#eyeFlare-${side})` : undefined}
          />

          {/* Thin Outer Concentric Ring inside Iris */}
          <circle
            cx="80"
            cy="45"
            r="27"
            stroke="#1a0003"
            strokeWidth="1.2"
            opacity="0.6"
          />

          {/* ITACHI MANGEKYO SHARINGAN TRI-BLADE PINWHEEL PATTERN */}
          <motion.g
            animate={{
              rotate: stage >= 3 ? (isLeft ? 360 + 60 : -360 - 60) : 0,
              scale: stage >= 3 ? 1 : 0.85,
            }}
            transition={{
              rotate: { duration: 1.2, ease: "easeOut" },
              scale: { duration: 0.5 },
            }}
            style={{ originX: "80px", originY: "45px" }}
          >
            {/* Center Pupil */}
            <circle cx="80" cy="45" r="5" fill="#050102" />

            {/* Blade 1 (0 degrees - pointing top) */}
            <path
              d="M 80 45 C 75 35, 68 22, 80 18 C 88 24, 85 36, 80 45 Z"
              fill="#060102"
            />
            {/* Blade 2 (120 degrees - pointing bottom right) */}
            <path
              d="M 80 45 C 89 51, 102 61, 98 71 C 88 71, 80 57, 80 45 Z"
              fill="#060102"
            />
            {/* Blade 3 (240 degrees - pointing bottom left) */}
            <path
              d="M 80 45 C 71 51, 58 61, 62 71 C 72 71, 80 57, 80 45 Z"
              fill="#060102"
            />
          </motion.g>

          {/* Central Chakra Energy Core Flare */}
          {stage >= 3 && (
            <motion.circle
              cx="80"
              cy="45"
              r="4.5"
              fill="#ffffff"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.8, 1, 0.7],
                scale: [1, 1.3, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.8,
                ease: "easeInOut",
              }}
            />
          )}
        </g>

        {/* EYELID LASH & CONTOUR OUTLINE */}
        <motion.path
          d={
            stage === 1
              ? "M 10 45 Q 80 44 150 45"
              : stage === 2
              ? "M 10 45 Q 80 20 150 45"
              : "M 10 45 Q 80 8 150 45"
          }
          stroke="#100305"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          transition={{
            duration: stage === 2 ? 0.9 : 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </svg>
    </div>
  );
}
