"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CrowCloneFlockProps {
  isDispersed: boolean;
  layer: "foreground" | "background";
}

interface CrowData {
  id: number;
  layer: "foreground" | "background";
  size: number;
  idleX: number;
  idleY: number;
  idleScale: number;
  disperseX: number;
  disperseY: number;
  disperseScale: number;
  angle: number;
  delay: number;
}

// 12 handcrafted crow flight paths with varying vectors, depths, and angles
const crows: CrowData[] = [
  // Background layer (passes behind Itachi's silhouette towards the blood moon)
  { id: 1, layer: "background", size: 48, idleX: -30, idleY: 70, idleScale: 0.4, disperseX: -260, disperseY: -160, disperseScale: 0.7, angle: -35, delay: 0.05 },
  { id: 2, layer: "background", size: 54, idleX: 40, idleY: 90, idleScale: 0.35, disperseX: 280, disperseY: -210, disperseScale: 0.8, angle: 40, delay: 0.1 },
  { id: 3, layer: "background", size: 42, idleX: 0, idleY: 110, idleScale: 0.3, disperseX: -180, disperseY: -290, disperseScale: 0.65, angle: -65, delay: 0.15 },
  { id: 4, layer: "background", size: 46, idleX: 20, idleY: 80, idleScale: 0.35, disperseX: 210, disperseY: -130, disperseScale: 0.75, angle: 30, delay: 0.2 },
  { id: 5, layer: "background", size: 40, idleX: -45, idleY: 120, idleScale: 0.25, disperseX: -320, disperseY: -40, disperseScale: 0.6, angle: -15, delay: 0.08 },

  // Foreground layer (bursts from the lower cloak and flies forward past the frame edges)
  { id: 6, layer: "foreground", size: 76, idleX: -20, idleY: 160, idleScale: 0.5, disperseX: -310, disperseY: 140, disperseScale: 1.15, angle: 25, delay: 0.02 },
  { id: 7, layer: "foreground", size: 84, idleX: 35, idleY: 150, idleScale: 0.55, disperseX: 330, disperseY: 120, disperseScale: 1.25, angle: -20, delay: 0.07 },
  { id: 8, layer: "foreground", size: 68, idleX: 10, idleY: 180, idleScale: 0.45, disperseX: 250, disperseY: 260, disperseScale: 1.1, angle: 55, delay: 0.12 },
  { id: 9, layer: "foreground", size: 72, idleX: -15, idleY: 175, idleScale: 0.48, disperseX: -260, disperseY: 240, disperseScale: 1.12, angle: -45, delay: 0.14 },
  { id: 10, layer: "foreground", size: 92, idleX: 0, idleY: 140, idleScale: 0.6, disperseX: -90, disperseY: 340, disperseScale: 1.35, angle: 10, delay: 0.18 },
  { id: 11, layer: "foreground", size: 62, idleX: -35, idleY: 130, idleScale: 0.42, disperseX: -350, disperseY: -110, disperseScale: 0.95, angle: -28, delay: 0.11 },
  { id: 12, layer: "foreground", size: 66, idleX: 45, idleY: 135, idleScale: 0.44, disperseX: 360, disperseY: -70, disperseScale: 1.0, angle: 18, delay: 0.16 },
];

export default function CrowCloneFlock({ isDispersed, layer }: CrowCloneFlockProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const filteredCrows = crows.filter((c) => c.layer === layer);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible flex items-center justify-center">
      {filteredCrows.map((crow) => {
        const isFlipped = crow.disperseX > 0;

        return (
          <motion.div
            key={crow.id}
            initial={false}
            animate={{
              x: isDispersed ? crow.disperseX : crow.idleX,
              y: isDispersed ? crow.disperseY : crow.idleY,
              scale: isDispersed ? crow.disperseScale : crow.idleScale,
              opacity: isDispersed ? 1 : 0.08, // Subtle resting shadow in cloak when idle
              rotate: isDispersed ? crow.angle : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 55,
              damping: 14,
              mass: 0.8,
              delay: crow.delay,
            }}
            className="absolute flex items-center justify-center"
            style={{
              width: crow.size,
              height: crow.size,
              transformOrigin: "center center",
            }}
          >
            {/* SVG Crow Silhouette with wings spread and crimson eye accent */}
            <svg
              viewBox="0 0 100 80"
              className="w-full h-full filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
              style={{
                transform: isFlipped ? "scaleX(-1)" : "scaleX(1)",
              }}
            >
              <g fill="#050102" stroke="#ff263b" strokeWidth="0.8">
                {/* Left wing feather tips */}
                <path d="M 50 40 Q 30 15 5 10 Q 15 30 35 45 Q 20 48 10 52 Q 28 58 45 50 Z" />
                {/* Right wing feather tips */}
                <path d="M 50 40 Q 70 15 95 10 Q 85 30 65 45 Q 80 48 90 52 Q 72 58 55 50 Z" />
                {/* Tail fan */}
                <path d="M 46 48 L 40 75 L 50 78 L 60 75 L 54 48 Z" />
                {/* Crow torso & head */}
                <ellipse cx="50" cy="42" rx="7" ry="12" />
                <circle cx="50" cy="30" r="5" />
                {/* Sharp Beak */}
                <polygon points="50,27 48,22 52,22" />
              </g>
              {/* Glowing Crimson Sharingan Eye */}
              <circle
                cx="49"
                cy="30"
                r="1.2"
                fill="#ff263b"
                className="filter drop-shadow-[0_0_4px_#ff263b]"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
}
