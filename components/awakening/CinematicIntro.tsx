"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IntroTimelineProvider, useIntroTimeline } from "./IntroTimeline";
import ItachiEyeScene from "./ItachiEyeScene";
import AtmosphericEffects from "./AtmosphericEffects";
import CrowAnimation from "./CrowAnimation";
import FeatherParticles from "./FeatherParticles";
import IntroAudio from "./IntroAudio";

function CinematicIntroContent({ onDismiss }: { onDismiss: () => void }) {
  const { stage, isTransitioning, enterTsukuyomi, skipIntro } = useIntroTimeline();
  const showCenterUI = stage === "title" || stage === "idle" || stage === "transitioning";

  return (
    <div
      className={`cinematic-intro-root stage-${stage} ${
        isTransitioning ? "is-transitioning" : ""
      }`}
    >
      {/* Top right circular sound control */}
      <div className="intro-topbar">
        <div className="topbar-brand">
          <span className="brand-crest">月</span>
          <span className="brand-text">KARUN.DEV</span>
        </div>
        <IntroAudio />
      </div>

      {/* Layer 1: Background Atmospheric Effects (Tsukuyomi blood moon, torii gate, clouds, embers) */}
      <AtmosphericEffects />

      {/* Layer 2: Upper Section - Itachi Extreme Close-Up and Mangekyo Eyes */}
      <ItachiEyeScene />

      {/* Layer 3: Realistic Crows Flying Across Foreground & Midground */}
      <CrowAnimation />

      {/* Layer 4: Floating & Drifting Raven Feathers */}
      <FeatherParticles />

      {/* Layer 5: Center Section UI Hierarchy */}
      <div className="intro-center-stage">
        <AnimatePresence>
          {showCenterUI && (
            <motion.div
              className="center-ui-container"
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: isTransitioning ? 0 : 1,
                y: isTransitioning ? -15 : 0,
                scale: isTransitioning ? 0.96 : 1,
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Small circular crimson emblem containing the Japanese moon character */}
              <motion.div
                className="crimson-moon-emblem"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              >
                <span className="moon-character">月</span>
                <div className="emblem-glow-ring" />
              </motion.div>

              {/* KARUN.DEV branding below it */}
              <motion.div
                className="brand-heading-wrap"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
              >
                <span className="brand-name">KARUN.DEV</span>
                <span className="brand-subtitle">THE SHINOBI DEVELOPER</span>
              </motion.div>

              {/* Thin red divider */}
              <motion.div
                className="thin-red-divider"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
              />

              {/* Main Title:
                  AWAKEN THE (white, serif)
                  MANGEKYŌ SHARINGAN (crimson red, italic) */}
              <motion.h1
                className="cinematic-title"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.45 }}
              >
                <span className="title-line-1">AWAKEN THE</span>
                <span className="title-line-2">MANGEKYŌ SHARINGAN</span>
              </motion.h1>

              {/* Subtitle: Enter the Tsukuyomi. */}
              <motion.p
                className="cinematic-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Enter the Tsukuyomi.
              </motion.p>

              {/* Actions */}
              <motion.div
                className="intro-actions"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
              >
                {/* Primary Button: ENTER THE TSUKUYOMI  → */}
                <button
                  type="button"
                  className="btn-enter-tsukuyomi"
                  onClick={enterTsukuyomi}
                  aria-label="Enter the Tsukuyomi and open the portfolio"
                >
                  <span className="corner-accent corner-tl" />
                  <span className="corner-accent corner-tr" />
                  <span className="corner-accent corner-bl" />
                  <span className="corner-accent corner-br" />
                  <span className="btn-text">ENTER THE TSUKUYOMI</span>
                  <ArrowRight size={17} className="btn-arrow" />
                  <div className="btn-inner-glow" />
                </button>

                {/* Secondary Action: SKIP INTRO */}
                <button
                  type="button"
                  className="btn-skip-intro"
                  onClick={skipIntro}
                  aria-label="Skip intro and view portfolio immediately"
                >
                  SKIP INTRO
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Layer 6: Bottom Section - Three small progress indicators (middle glows red) */}
      <div className="intro-bottom-indicators" aria-hidden="true">
        <span className="indicator-dot dot-1" />
        <span className="indicator-dot dot-2 glowing-red" />
        <span className="indicator-dot dot-3" />
      </div>

      {/* Transitioning flash & fade overlay */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            className="transition-blackout"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 1] }}
            transition={{ duration: 1.25, times: [0, 0.35, 1], ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CinematicIntro() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <IntroTimelineProvider onComplete={() => setDismissed(true)}>
      <CinematicIntroContent onDismiss={() => setDismissed(true)} />
    </IntroTimelineProvider>
  );
}

