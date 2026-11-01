"use client";

import React from "react";
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
              stiffness: isDispersed ? 55 : 45,
              damping: isDispersed ? 14 : 18,
              mass: 0.8,
              delay: isDispersed ? crow.delay : (0.25 - crow.delay * 0.5),
            }}
            className="absolute will-change-transform"
            style={{
              width: `${crow.size}px`,
              height: `${crow.size * 0.56}px`,
            }}
          >
            {/* Animated Crow Silhouette with flapping wings and subtle crimson rim glow */}
            <div
              className={`w-full h-full relative transition-transform duration-300 ${
                isFlipped ? "scale-x-[-1]" : ""
              }`}
            >
              <svg
                viewBox="0 0 120 68"
                className="w-full h-full filter drop-shadow-[0_0_10px_rgba(255,38,59,0.55)]"
              >
                {/* Flapping Wing Motion */}
                <motion.path
                  animate={{
                    d: [
                      "M0,34 Q35,6 60,34 Q85,6 120,34 Q85,46 60,38 Q35,46 0,34 Z",
                      "M0,20 Q35,42 60,34 Q85,42 120,20 Q85,34 60,38 Q35,34 0,20 Z",
                      "M0,34 Q35,6 60,34 Q85,6 120,34 Q85,46 60,38 Q35,46 0,34 Z",
                    ],
                  }}
                  transition={{
                    duration: 0.38 + (crow.id % 4) * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  fill="#060406"
                  stroke="#ff263b"
                  strokeWidth="0.8"
                />
                {/* Crow Eye Glimmer (Crimson Sharingan Glint) */}
                <circle cx={isFlipped ? "28" : "92"} cy="30" r="1.5" fill="#ff263b" />
              </svg>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

