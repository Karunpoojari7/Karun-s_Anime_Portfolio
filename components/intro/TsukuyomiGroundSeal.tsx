"use client";

import React from "react";
import { motion } from "framer-motion";

interface TsukuyomiGroundSealProps {
  active: boolean;
  pulsing?: boolean;
}

/**
 * Animated Tsukuyomi ground seal overlay on the reflective water floor
 * featuring concentric glowing rings, ancient symbols, and the central Akatsuki symbol (暁).
 */
export default function TsukuyomiGroundSeal({
  active,
  pulsing = false,
}: TsukuyomiGroundSealProps) {
  if (!active) return null;

  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[38%] z-15 overflow-hidden flex items-end justify-center select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: pulsing ? [0.75, 1, 0.75] : 0.9,
          scale: 1,
        }}
        transition={{
          opacity: pulsing
            ? { repeat: Infinity, duration: 2.2, ease: "easeInOut" }
            : { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
        }}
        className="relative w-full max-w-[1100px] h-full flex items-center justify-center -mb-8 sm:-mb-6"
      >
        <svg
          viewBox="0 0 1000 340"
          className="w-full h-full max-h-[340px]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sealGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff1128" stopOpacity="0.1" />
              <stop offset="30%" stopColor="#ff263b" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#ff4455" stopOpacity="1" />
              <stop offset="70%" stopColor="#ff263b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#ff1128" stopOpacity="0.1" />
            </linearGradient>

            <filter id="sealLaser" x="-10%" y="-20%" width="120%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Elliptical Ring */}
          <ellipse
            cx="500"
            cy="170"
            rx="460"
            ry="92"
            stroke="url(#sealGlow)"
            strokeWidth="2"
            filter="url(#sealLaser)"
          />

          {/* Middle Ring with tick markings */}
          <ellipse
            cx="500"
            cy="170"
            rx="360"
            ry="72"
            stroke="#ff263b"
            strokeWidth="1.2"
            strokeDasharray="4 8"
            opacity="0.75"
          />

          {/* Inner Ring */}
          <ellipse
            cx="500"
            cy="170"
            rx="240"
            ry="48"
            stroke="#ff3344"
            strokeWidth="1.8"
            filter="url(#sealLaser)"
          />

          {/* Core Seal Ring */}
          <ellipse
            cx="500"
            cy="170"
            rx="120"
            ry="24"
            stroke="#ff5566"
            strokeWidth="2"
          />

          {/* Central Akatsuki Cloud / Kanji (暁) */}
          <text
            x="500"
            y="178"
            textAnchor="middle"
            fill="#ff4455"
            fontSize="26"
            fontFamily="'Cinzel', serif"
            fontWeight="bold"
            letterSpacing="0.2em"
            filter="url(#sealLaser)"
            opacity="0.95"
          >
            暁
          </text>
        </svg>

        {/* Ambient Reflective Water Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 65% 35% at 50% 80%, rgba(255, 30, 56, 0.45) 0%, transparent 70%)",
          }}
        />
      </motion.div>
    </div>
  );
}
