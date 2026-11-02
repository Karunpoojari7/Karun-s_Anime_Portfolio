"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, X, ArrowRight } from "lucide-react";

interface IntroOverlayProps {
  timelineSec: number;
  audioEnabled: boolean;
  onToggleAudio: () => void;
  onSkip: () => void;
  onEnter: () => void;
  isEntering: boolean;
}

/**
 * Cinematic Typography and Accessible Control HUD matching Reference Image 1 & 2.
 * Sequenced smoothly along the 0-10s animation storyboard.
 */
export default function IntroCinematicOverlay({
  timelineSec,
  audioEnabled,
  onToggleAudio,
  onSkip,
  onEnter,
  isEntering,
}: IntroOverlayProps) {
  // Timeline thresholds
  const showAudioAndSkip = timelineSec >= 2.0; // Early accessible escape hatch
  const showIdentity = timelineSec >= 5.5; // Frame 06: Identity Emerges
  const showTitle = timelineSec >= 7.0; // Frame 07: Title Reveal
  const showEnterButton = timelineSec >= 8.0; // Frame 08: Final Screen

  return (
    <div className="absolute inset-0 z-30 flex flex-col justify-between p-4 sm:p-6 md:p-8 pointer-events-none select-none">
      {/* 1. TOP BAR: AUDIO & SKIP CONTROLS */}
      <header className="w-full flex items-center justify-between">
        {/* Audio Toggle Control */}
        <AnimatePresence>
          {showAudioAndSkip && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={onToggleAudio}
              aria-label={audioEnabled ? "Mute audio" : "Enable cinematic audio"}
              className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-red-500/60 bg-black/80 hover:bg-red-950/40 text-neutral-200 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 shadow-[0_0_15px_rgba(255,38,59,0.35)] cursor-pointer"
            >
              {audioEnabled ? (
                <>
                  <Volume2 size={14} className="text-red-400 animate-pulse" />
                  <span className="font-semibold text-red-400">AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX size={14} className="text-neutral-400" />
                  <span>AUDIO OFF</span>
                </>
              )}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Skip Intro Control */}
        <AnimatePresence>
          {showAudioAndSkip && (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              onClick={onSkip}
              aria-label="Skip introduction"
              className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-red-900/60 bg-black/80 hover:bg-red-950/40 hover:border-red-500/80 text-neutral-300 hover:text-white font-mono text-xs tracking-wider transition-all duration-200 shadow-[0_0_12px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <span>SKIP INTRO</span>
              <X size={13} className="text-red-400" />
            </motion.button>
          )}
        </AnimatePresence>
      </header>

      {/* 2. CENTER CONTENT: IDENTITY, TITLE & ENTER BUTTON */}
      <div className="w-full flex-1 flex flex-col items-center justify-center text-center my-auto -mt-4 sm:-mt-6">
        {/* A. IDENTITY: CIRCULAR 月 EMBLEM + KARUN H G + THE SHINOBI DEVELOPER (Frame 06) */}
        <AnimatePresence>
          {showIdentity && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center space-y-2 mb-3 sm:mb-4"
            >
              {/* Circular 月 Emblem with Crimson Aura */}
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-red-500 bg-[#180204]/90 flex items-center justify-center shadow-[0_0_20px_rgba(255,38,59,0.7),inset_0_0_10px_rgba(255,38,59,0.3)]">
                <span className="font-serif text-lg sm:text-xl font-bold text-red-500 drop-shadow-[0_0_8px_#ff263b]">
                  月
                </span>
                <span className="absolute inset-0 rounded-full border border-red-500/40 animate-ping pointer-events-none" />
              </div>

              {/* Developer Name */}
              <h2 className="font-sans text-sm sm:text-base md:text-lg font-bold tracking-[0.35em] text-white uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                KARUN <span className="text-[#ff263b] drop-shadow-[0_0_10px_#ff263b]">H G</span>
              </h2>

              {/* Micro Subtitle */}
              <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-neutral-300 uppercase">
                THE SHINOBI DEVELOPER
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* B. MAIN TITLE: AWAKEN THE MANGEKYO SHARINGAN + JAPANESE KANJI (Frame 07) */}
        <AnimatePresence>
          {showTitle && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="space-y-1 sm:space-y-2 mb-5 sm:mb-6 max-w-2xl px-4"
            >
              <h1 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-[0.22em] uppercase leading-none drop-shadow-[0_0_12px_rgba(255,255,255,0.35)]">
                AWAKEN THE
              </h1>

              <div
                className="font-serif italic text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#ff263b] drop-shadow-[0_0_28px_rgba(255,38,59,0.85)] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MANGEKYŌ SHARINGAN
              </div>

              {/* Japanese Subtitle with Flanking Diamond Laser Rules */}
              <div className="flex items-center justify-center gap-3 pt-1">
                <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-r from-transparent via-red-500 to-red-400" />
                <span className="w-1.5 h-1.5 rotate-45 bg-red-500 shadow-[0_0_6px_#ff263b]" />
                <span className="font-serif text-xs sm:text-sm tracking-[0.4em] text-red-400 font-medium">
                  万華鏡写輪眼
                </span>
                <span className="w-1.5 h-1.5 rotate-45 bg-red-500 shadow-[0_0_6px_#ff263b]" />
                <div className="w-12 sm:w-20 md:w-28 h-px bg-gradient-to-l from-transparent via-red-500 to-red-400" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* C. ENTER BUTTON (Frame 08: Prominent, Centered, Beautiful Glow) */}
        <AnimatePresence>
          {showEnterButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{
                opacity: 1,
                scale: isEntering ? 1.15 : 1,
                y: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mt-1 sm:mt-2"
            >
              <button
                type="button"
                onClick={onEnter}
                disabled={isEntering}
                aria-label="Enter KARUN.DEV Portfolio"
                className={`group pointer-events-auto relative px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg border-2 border-[#ff263b] bg-gradient-to-r from-red-950/80 via-[#180204]/95 to-red-950/80 text-white font-mono text-xs sm:text-sm font-bold tracking-[0.25em] uppercase transition-all duration-300 cursor-pointer ${
                  isEntering
                    ? "bg-red-600 border-white shadow-[0_0_50px_#ff263b] scale-110"
                    : "shadow-[0_0_30px_rgba(255,38,59,0.65),inset_0_0_15px_rgba(255,38,59,0.25)] hover:shadow-[0_0_45px_rgba(255,38,59,0.9),inset_0_0_20px_rgba(255,38,59,0.4)] hover:border-red-400 hover:scale-105 active:scale-95"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span>ENTER</span>
                  <ArrowRight
                    size={16}
                    className="text-red-400 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM FOOTER STATUS */}
      <footer className="w-full flex items-center justify-center opacity-70">
        <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-500 uppercase">
          KARUN.DEV // TSUKUYOMI GATEWAY
        </span>
      </footer>
    </div>
  );
}
