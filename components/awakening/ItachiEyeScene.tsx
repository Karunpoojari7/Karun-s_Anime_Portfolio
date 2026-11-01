"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIntroTimeline } from "./IntroTimeline";
import MangekyoEye from "./MangekyoEye";

export default function ItachiEyeScene() {
  const { stage, isAwakened, isTransitioning, mouseParallax } = useIntroTimeline();

  // Subtle parallax offset
  const parallaxX = mouseParallax.x * 12;
  const parallaxY = mouseParallax.y * 8;

  return (
    <div className={`itachi-eye-scene ${stage}`} aria-hidden="true">
      {/* Container with dynamic zoom and parallax */}
      <motion.div
        className="eye-scene-inner"
        animate={{
          scale: stage === "darkness" ? 1.0 : stage === "awakening" ? 1.05 : isTransitioning ? 1.35 : 1.04,
          x: parallaxX,
          y: parallaxY,
        }}
        transition={{
          scale: isTransitioning
            ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
            : { duration: 2.2, ease: "easeOut" },
          x: { duration: 0.4, ease: "easeOut" },
          y: { duration: 0.4, ease: "easeOut" },
        }}
      >
        {/* Base cinematic character artwork: Itachi Uchiha extreme close-up */}
        <div className="itachi-artwork-wrap">
          <Image
            src="/assets/itachi/itachi-eyes-cinematic.jpg"
            alt="Itachi Uchiha Mangekyo Sharingan close-up"
            fill
            priority
            sizes="100vw"
            className="itachi-artwork-img"
          />

          {/* Dynamic glowing Mangekyo Eye Overlays on both irises */}
          <MangekyoEye
            side="left"
            style={{
              left: "24.27%",
              top: "47.01%",
            }}
          />
          <MangekyoEye
            side="right"
            style={{
              left: "75.51%",
              top: "47.01%",
            }}
          />

          {/* Eyelid mask reveal: opens dynamically on Awakening */}
          <motion.div
            className="eyelid-curtain upper-lid"
            initial={{ scaleY: 1 }}
            animate={{
              scaleY: !isAwakened ? 1 : 0,
            }}
            transition={{
              duration: 1.4,
              delay: 0.1,
              ease: [0.65, 0, 0.35, 1],
            }}
          />
          <motion.div
            className="eyelid-curtain lower-lid"
            initial={{ scaleY: 1 }}
            animate={{
              scaleY: !isAwakened ? 1 : 0,
            }}
            transition={{
              duration: 1.3,
              delay: 0.1,
              ease: [0.65, 0, 0.35, 1],
            }}
          />

          {/* Atmospheric facial crimson rim light & shadows */}
          <div className="facial-shadow-overlay" />
          <div className="nasolabial-crease-left" />
          <div className="nasolabial-crease-right" />
          <div className="eye-socket-vignette" />
        </div>
      </motion.div>

      {/* Dramatic crimson flare flash when Awakening or Transitioning */}
      <motion.div
        className="crimson-awakening-flare"
        animate={{
          opacity:
            stage === "awakening"
              ? [0, 0.85, 0.15]
              : isTransitioning
              ? [0, 1, 0.4]
              : 0.08,
        }}
        transition={{
          duration: isTransitioning ? 1.0 : 1.8,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

