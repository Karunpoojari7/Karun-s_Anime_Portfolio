"use client";

import React from "react";
import { motion } from "framer-motion";

interface JourneyPathProps {
  activeMilestone: string | null;
  onHoverMilestone?: (id: string | null) => void;
}

export default function JourneyPath({
  activeMilestone,
}: JourneyPathProps) {
  // S-Curve Path starting from bottom-center (Temple 1) winding up to top-right (Temple 4)
  // Coordinates in a normalized 1000 x 600 viewport
  const pathD = "M 380 480 C 440 450, 480 390, 520 350 C 560 310, 600 270, 640 230 C 670 200, 700 160, 740 120";

  // Checkpoints for the 4 temples along the path
  const checkpoints = [
    { id: "undergrad", cx: 380, cy: 480, label: "01" },
    { id: "internship", cx: 520, cy: 350, label: "02" },
    { id: "masters", cx: 640, cy: 230, label: "03" },
    { id: "specialization", cx: 740, cy: 120, label: "04" },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 w-full h-full z-10 hidden lg:block overflow-visible">
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="pathChakraGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Broad Ambient Crimson Trail Glow */}
        <path
          d={pathD}
          stroke="rgba(225, 29, 46, 0.35)"
          strokeWidth="10"
          strokeLinecap="round"
          className="filter blur-[6px]"
        />

        {/* 2. Primary Glowing Trail Stroke */}
        <path
          d={pathD}
          stroke="#ff263b"
          strokeWidth="2.5"
          strokeLinecap="round"
          filter="url(#pathChakraGlow)"
          opacity="0.85"
        />

        {/* 3. Travelling Glowing Chakra Energy Pulse */}
        <path
          d={pathD}
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="20 180"
          className="animate-pulse"
          style={{
            animation: "trailChakraFlow 4s linear infinite",
          }}
        />

        {/* 4. The 4 Temple Milestone Anchors along the Trail */}
        {checkpoints.map((pt) => {
          const isActive = activeMilestone === pt.id;

          return (
            <g key={pt.id} className="transition-all duration-300">
              {/* Outer pulsing ring */}
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r={isActive ? 12 : 7}
                fill="none"
                stroke="#ff263b"
                strokeWidth={isActive ? 2 : 1}
                className={isActive ? "animate-ping opacity-75" : "opacity-40"}
              />

              {/* Core radiant node */}
              <circle
                cx={pt.cx}
                cy={pt.cy}
                r={isActive ? 6 : 4}
                fill={isActive ? "#ffffff" : "#ff263b"}
                filter="url(#pathChakraGlow)"
              />
            </g>
          );
        })}
      </svg>

      <style jsx>{`
        @keyframes trailChakraFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -400;
          }
        }
      `}</style>
    </div>
  );
}
