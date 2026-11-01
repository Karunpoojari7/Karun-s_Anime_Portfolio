"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CrowCloneFlock from "./CrowCloneFlock";
import FeatherDrift from "./FeatherDrift";

export default function ItachiCrowClonePortal() {
  const [isDispersed, setIsDispersed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Parallax tracking relative to card center
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y)),
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsDispersed(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsDispersed(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={() => setIsDispersed((prev) => !prev)}
      className="hero-character-portal relative flex items-center justify-center cursor-pointer select-none"
      style={{ perspective: "1000px" }}
    >
      {/* 1. MOON AURA & ORBITAL RINGS WITH DEPTH PARALLAX */}
      <motion.div
        animate={{
          x: mousePos.x * 18,
          y: mousePos.y * 12,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="portal-moon-aura"
      />

      <motion.div
        animate={{
          x: mousePos.x * 12,
          y: mousePos.y * 8,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="portal-orbit orbit-outer"
      />

      <motion.div
        animate={{
          x: mousePos.x * -10,
          y: mousePos.y * -8,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 20 }}
        className="portal-orbit orbit-inner"
      />

      {/* 2. BACKGROUND CROW CLOCK LAYER (Behind Itachi's silhouette towards the Moon) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CrowCloneFlock isDispersed={isDispersed} layer="background" />
      </div>

      {/* 3. ITACHI CHARACTER FRAME WITH SUBTLE 3D TILT */}
      <motion.div
        animate={{
          rotateY: mousePos.x * 6,
          rotateX: -mousePos.y * 5,
          scale: isDispersed ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 18 }}
        className={`character-frame-wrapper relative transition-shadow duration-500 ${
          isDispersed
            ? "shadow-[0_0_90px_rgba(255,38,59,0.5),inset_0_0_40px_#000] border-red-500"
            : "border-[#6b1824] shadow-[0_0_70px_rgba(255,38,59,0.25),inset_0_0_35px_#000]"
        }`}
      >
        <div className="character-image-container relative w-full h-full overflow-hidden">
          {/* Main Itachi Character Artwork */}
          <Image
            src="/assets/itachi/itachi-hero.jpg"
            alt="Itachi Uchiha in Akatsuki cloak under crimson blood moon"
            fill
            priority
            sizes="(max-width: 800px) 92vw, 48vw"
            className="itachi-hero-artwork transition-transform duration-700 ease-out"
            style={{
              transform: isDispersed ? "scale(1.04)" : "scale(1)",
            }}
          />

          {/* Dynamic Light Sheen responding to Cursor */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle 350px at ${(mousePos.x + 1) * 50}% ${(mousePos.y + 1) * 50}%, rgba(255, 38, 59, 0.35), transparent 70%)`,
            }}
          />

          {/* Sharingan Pulse Aura on Dispersal */}
          {isDispersed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.45, 0.15] }}
              transition={{ duration: 0.8 }}
              className="pointer-events-none absolute inset-0 bg-red-600/20 mix-blend-color-dodge"
            />
          )}

          {/* Inner Rim Vignette & Fog Gradient */}
          <div className="character-inner-vignette" />
          <div className="character-bottom-fog-fade" />
        </div>

        {/* 4. CLASSIFIED SHINOBI DOSSIER SEAL */}
        <div className="shinobi-badge-tag bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-sm border border-red-500/50 shadow-[0_0_15px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-ping" />
            <span className="badge-index font-mono text-[8px] text-red-400 tracking-[0.2em] uppercase">
              01 // CLASSIFIED DOSSIER
            </span>
          </div>
          <b className="badge-creed font-mono text-[9px] text-neutral-200 tracking-wider">
            FOCUS · DISCIPLINE · CREATION
          </b>
        </div>
      </motion.div>

      {/* 5. FOREGROUND CROW CLOCK LAYER (Bursts forward past the card edges) */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <CrowCloneFlock isDispersed={isDispersed} layer="foreground" />
      </div>

      {/* 6. DRIFTING FEATHERS & CHAKRA PARTICLES */}
      <FeatherDrift isDispersed={isDispersed} />
    </div>
  );
}

