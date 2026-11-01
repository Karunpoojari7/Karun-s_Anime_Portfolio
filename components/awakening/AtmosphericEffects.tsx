"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntroTimeline } from "./IntroTimeline";

interface EmberParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

export default function AtmosphericEffects() {
  const { stage, isTransitioning, mouseParallax } = useIntroTimeline();
  const showEnvironment = stage !== "darkness" && stage !== "awakening";

  // Generate deterministic embers
  const embers: EmberParticle[] = useMemo(() => {
    return Array.from({ length: 32 }, (_, i) => ({
      id: i,
      x: (i * 3.1) % 100, // spread across 0-100%
      delay: (i * 0.35) % 6,
      duration: 5.5 + ((i * 1.7) % 5),
      size: 2 + (i % 4),
      opacity: 0.35 + ((i % 5) * 0.12),
    }));
  }, []);

  // Parallax offsets
  const envX = mouseParallax.x * -14;
  const envY = mouseParallax.y * -8;

  return (
    <div className={`atmospheric-effects-layer ${stage}`} aria-hidden="true">
      {/* Lower half Tsukuyomi environment backdrop */}
      <motion.div
        className="tsukuyomi-env-container"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showEnvironment ? (isTransitioning ? 0.3 : 1) : 0,
          scale: isTransitioning ? 1.08 : 1,
          x: envX,
          y: envY,
        }}
        transition={{
          opacity: { duration: 2.2, ease: "easeInOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          x: { duration: 0.5, ease: "easeOut" },
          y: { duration: 0.5, ease: "easeOut" },
        }}
      >
        <div className="env-backdrop-wrap">
          <Image
            src="/assets/itachi/tsukuyomi-bg.jpg"
            alt="Tsukuyomi blood moon and torii gate"
            fill
            priority
            sizes="100vw"
            className="tsukuyomi-env-img"
          />
          {/* Top gradient blend: seamlessly merges into the black face artwork */}
          <div className="env-top-gradient-mask" />
          {/* Crimson ambient glow behind Torii and Moon */}
          <div className="moon-ambient-halo" />
        </div>
      </motion.div>

      {/* Volumetric red fog layers across the bottom */}
      <div className="volumetric-fog-wrap">
        <div className="fog-layer fog-layer-1" />
        <div className="fog-layer fog-layer-2" />
        <div className="fog-layer fog-layer-3" />
      </div>

      {/* Floating crimson chakra sparks & embers */}
      <div className="ember-field">
        {embers.map((ember) => (
          <span
            key={ember.id}
            className="ember-spark"
            style={{
              left: `${ember.x}%`,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              animationDelay: `${ember.delay}s`,
              animationDuration: `${ember.duration}s`,
              opacity: ember.opacity,
            }}
          />
        ))}
      </div>

      {/* Film grain and edge vignette */}
      <div className="cinematic-grain" />
      <div className="cinematic-vignette" />
    </div>
  );
}

