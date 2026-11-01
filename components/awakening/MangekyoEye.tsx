"use client";
import React from "react";
import { motion } from "framer-motion";
import { useIntroTimeline } from "./IntroTimeline";

interface MangekyoEyeProps {
  side: "left" | "right";
  style?: React.CSSProperties;
}

export default function MangekyoEye({ side, style }: MangekyoEyeProps) {
  const { stage, isTransitioning } = useIntroTimeline();
  const isAwakened = stage !== "darkness";

  // Unique IDs for SVG filters
  const id = `mangekyo-${side}`;

  return (
    <div
      className={`mangekyo-eye-wrap eye-${side} ${isAwakened ? "awakened" : ""} ${
        isTransitioning ? "transitioning" : ""
      }`}
      style={style}
    >
      {/* Outer crimson ocular radiance */}
      <motion.div
        className="ocular-radiance"
        animate={{
          opacity: stage === "darkness" ? 0 : isTransitioning ? 1 : [0.65, 0.95, 0.65],
          scale: stage === "darkness" ? 0.8 : isTransitioning ? 2.5 : [1, 1.08, 1],
        }}
        transition={{
          opacity: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <svg
        className="mangekyo-svg"
        viewBox="0 0 260 260"
        aria-hidden="true"
      >
        <defs>
          {/* Radial crimson iris glow */}
          <radialGradient id={`${id}-iris`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4055" />
            <stop offset="40%" stopColor="#e50926" />
            <stop offset="78%" stopColor="#870515" />
            <stop offset="96%" stopColor="#300107" />
            <stop offset="100%" stopColor="#0a0002" />
          </radialGradient>

          {/* Sclera bleed */}
          <radialGradient id={`${id}-sclera`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b7d" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a30a1b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Intense bloom filter */}
          <filter id={`${id}-bloom`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.8  0 0 0 0 0.05  0 0 0 0 0.1  0 0 0 2 0"
              result="tint"
            />
            <feMerge>
              <feMergeNode in="tint" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle blade shadow */}
          <filter id={`${id}-blade-shadow`}>
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#ff1133" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Ambient iris glow field */}
        <circle cx="130" cy="130" r="120" fill={`url(#${id}-sclera)`} />
        <circle
          cx="130"
          cy="130"
          r="105"
          fill={`url(#${id}-iris)`}
          filter={`url(#${id}-bloom)`}
          opacity="0.92"
        />

        {/* Iris fibrous radial striations */}
        <g opacity="0.45" stroke="#ff8f9c" strokeWidth="1">
          {Array.from({ length: 48 }, (_, i) => {
            const angle = (i * 360) / 48;
            return (
              <line
                key={i}
                x1="130"
                y1="35"
                x2="130"
                y2={i % 3 === 0 ? "55" : "45"}
                transform={`rotate(${angle} 130 130)`}
                strokeOpacity={i % 2 === 0 ? "0.8" : "0.3"}
              />
            );
          })}
        </g>

        {/* Concentric chakra rings */}
        <circle cx="130" cy="130" r="88" fill="none" stroke="#220005" strokeWidth="2.5" opacity="0.75" />
        <circle cx="130" cy="130" r="70" fill="none" stroke="#ff243a" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

        {/* Authentic Itachi Mangekyo Sharingan 3-bladed pinwheel pattern */}
        <motion.g
          className="mangekyo-blades-group"
          filter={`url(#${id}-blade-shadow)`}
          animate={{
            rotate: stage === "awakening" ? [0, 720, 1080] : [1080, 1440],
            scale: stage === "awakening" ? [0.2, 1.15, 1] : 1,
          }}
          transition={{
            rotate:
              stage === "awakening"
                ? { duration: 1.8, ease: [0.16, 1, 0.3, 1] }
                : { duration: 24, repeat: Infinity, ease: "linear" },
            scale: { duration: 1.4, ease: "easeOut" },
          }}
          style={{ originX: "130px", originY: "130px" }}
        >
          {/* Three curved scythe-like blades radiating symmetrically at 0, 120, 240 degrees */}
          {[0, 120, 240].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 130 130)`}>
              <path
                d="M 130 130
                   C 114 112, 94 92, 101 64
                   C 107 39, 131 28, 151 35
                   C 173 42, 181 65, 169 82
                   C 160 94, 143 97, 128 90
                   C 142 108, 153 124, 150 142
                   C 147 163, 128 175, 109 166
                   C 91 157, 88 135, 100 121
                   C 110 110, 122 118, 130 130 Z"
                fill="#050103"
                stroke="#2b0007"
                strokeWidth="2.5"
              />
              {/* Internal blade rim highlight */}
              <path
                d="M 104 64 C 110 44, 128 34, 147 40 C 164 46, 172 64, 162 77"
                fill="none"
                stroke="#ff263b"
                strokeWidth="1.2"
                strokeOpacity="0.8"
              />
            </g>
          ))}

          {/* Central black pupil */}
          <circle cx="130" cy="130" r="16" fill="#040002" stroke="#ff2238" strokeWidth="1.5" />
          <circle cx="130" cy="130" r="7" fill="#000000" />
        </motion.g>

        {/* Realistic corneal gloss reflection highlight */}
        <ellipse cx="106" cy="98" rx="16" ry="9" transform="rotate(-32 106 98)" fill="#ffffff" opacity="0.75" />
        <circle cx="152" cy="158" r="4.5" fill="#ffffff" opacity="0.35" />
      </svg>
    </div>
  );
}

