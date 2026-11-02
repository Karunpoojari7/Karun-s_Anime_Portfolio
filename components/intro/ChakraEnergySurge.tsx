"use client";

import React from "react";
import { motion } from "framer-motion";

interface ChakraEnergySurgeProps {
  active: boolean;
}

/**
 * Controlled crimson chakra filaments that travel horizontally across the scene
 * originating near the eyes during Frame 04 (3.0s - 4.0s).
 */
export default function ChakraEnergySurge({ active }: ChakraEnergySurgeProps) {
  if (!active) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-25 overflow-hidden select-none">
      <svg
        viewBox="0 0 1920 1080"
        className="w-full h-full object-cover"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="surgeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff263b" stopOpacity="0" />
            <stop offset="25%" stopColor="#ff263b" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="75%" stopColor="#ff263b" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ff263b" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="surgeGrad2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff263b" stopOpacity="0" />
            <stop offset="30%" stopColor="#ff3a4f" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ff8593" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#ff263b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff263b" stopOpacity="0" />
          </linearGradient>

          <filter id="surgeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Filament 1: Sweeping across from left eye */}
        <motion.path
          d="M 460 340 Q 720 280 960 360 T 1500 320"
          stroke="url(#surgeGrad1)"
          strokeWidth="2.5"
          filter="url(#surgeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0.8],
            opacity: [0, 1, 0.4],
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Filament 2: Sweeping across from right eye */}
        <motion.path
          d="M 1360 300 Q 1120 380 880 320 T 400 380"
          stroke="url(#surgeGrad2)"
          strokeWidth="2"
          filter="url(#surgeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0.7],
            opacity: [0, 0.9, 0.3],
          }}
          transition={{ duration: 1.4, delay: 0.1, ease: "easeInOut" }}
        />

        {/* Filament 3: Lower Collar Chakra Arc */}
        <motion.path
          d="M 300 480 Q 640 430 960 490 T 1620 460"
          stroke="url(#surgeGrad1)"
          strokeWidth="1.8"
          filter="url(#surgeGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0.6],
            opacity: [0, 0.8, 0.25],
          }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
