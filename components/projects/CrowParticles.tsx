"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CrowParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
      {/* Flying Crow 1: Upper Left to Lower Right */}
      <motion.div
        initial={{ x: "-10vw", y: "15%", scale: 0.7, opacity: 0 }}
        animate={{
          x: ["-10vw", "45vw", "110vw"],
          y: ["15%", "12%", "35%"],
          opacity: [0, 0.85, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute w-12 h-8"
      >
        <svg viewBox="0 0 100 60" className="w-full h-full fill-black drop-shadow-[0_0_8px_rgba(255,0,0,0.4)]">
          <path d="M0,30 Q30,10 50,30 Q70,10 100,30 Q70,40 50,32 Q30,40 0,30 Z" />
        </svg>
      </motion.div>

      {/* Flying Crow 2: High altitude from Right to Left */}
      <motion.div
        initial={{ x: "110vw", y: "8%", scale: 0.5, opacity: 0 }}
        animate={{
          x: ["110vw", "50vw", "-10vw"],
          y: ["8%", "18%", "10%"],
          opacity: [0, 0.75, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          delay: 8,
        }}
        className="absolute w-8 h-5"
      >
        <svg viewBox="0 0 100 60" className="w-full h-full fill-black drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]">
          <path d="M0,30 Q30,15 50,30 Q70,15 100,30 Q70,38 50,32 Q30,38 0,30 Z" />
        </svg>
      </motion.div>

      {/* Drifting Red Embers & Feathers */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: `${15 + i * 15}vw`,
            y: "90%",
            opacity: 0,
            scale: 0.5 + (i % 3) * 0.3,
          }}
          animate={{
            y: ["90%", "20%"],
            x: [`${15 + i * 15}vw`, `${12 + i * 15 + (i % 2 === 0 ? 4 : -4)}vw`],
            opacity: [0, 0.65, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: "easeInOut",
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]"
        />
      ))}
    </div>
  );
}

