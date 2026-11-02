"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { introAudio } from "./IntroAudioEngine";
import MangekyoEyeOverlay from "./MangekyoEyeOverlay";
import ChakraEnergySurge from "./ChakraEnergySurge";
import TsukuyomiGroundSeal from "./TsukuyomiGroundSeal";
import IntroDriftingParticles from "./IntroDriftingParticles";
import IntroCinematicOverlay from "./IntroCinematicOverlay";
import "./mangekyo-intro.css";

interface MangekyoIntroProps {
  onEnter: () => void;
  onSkip: () => void;
  autoPlay?: boolean;
}

export default function MangekyoIntro({
  onEnter,
  onSkip,
  autoPlay = true,
}: MangekyoIntroProps) {
  // Current playback time in seconds (0.0s to 10.0s)
  const [timelineSec, setTimelineSec] = useState<number>(0);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [isEntering, setIsEntering] = useState<boolean>(false);
  const [hasExited, setHasExited] = useState<boolean>(false);

  const startTimeRef = useRef<number | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioTriggeredRef = useRef<{ [key: string]: boolean }>({});

  // Audio Toggle
  const handleToggleAudio = useCallback(() => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    introAudio.setMuted(!next);
    if (next) {
      introAudio.startAtmosphere();
    }
  }, [audioEnabled]);

  // Handle Skip Intro
  const handleSkip = useCallback(() => {
    if (hasExited) return;
    setHasExited(true);
    introAudio.stopAll();
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    onSkip();
  }, [hasExited, onSkip]);

  // Handle Enter Portfolio (Frame 09: Transition)
  const handleEnter = useCallback(() => {
    if (isEntering || hasExited) return;
    setIsEntering(true);
    introAudio.playEnterTransition();

    // Cinematic zoom & portal duration (0.9s) before invoking onEnter
    setTimeout(() => {
      setHasExited(true);
      introAudio.stopAll();
      onEnter();
    }, 900);
  }, [isEntering, hasExited, onEnter]);

  // Main 10-Second Animation Storyboard Timeline
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTimelineSec(8.5); // Jump directly to final interactive screen
      return;
    }

    const tick = (now: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }

      const elapsed = (now - startTimeRef.current) / 1000;
      setTimelineSec(elapsed);

      // Sound triggers tied to storyboard frames
      if (audioEnabled) {
        if (elapsed >= 0.1 && !audioTriggeredRef.current["atmo"]) {
          audioTriggeredRef.current["atmo"] = true;
          introAudio.startAtmosphere();
        }
        if (elapsed >= 1.0 && !audioTriggeredRef.current["open"]) {
          audioTriggeredRef.current["open"] = true;
          introAudio.playEyeOpen();
        }
        if (elapsed >= 2.0 && !audioTriggeredRef.current["mangekyo"]) {
          audioTriggeredRef.current["mangekyo"] = true;
          introAudio.playMangekyoActivation();
        }
        if (elapsed >= 3.0 && !audioTriggeredRef.current["surge"]) {
          audioTriggeredRef.current["surge"] = true;
          introAudio.playEnergySurge();
        }
        if (elapsed >= 4.0 && !audioTriggeredRef.current["pad"]) {
          audioTriggeredRef.current["pad"] = true;
          introAudio.playTsukuyomiPad();
        }
      }

      if (elapsed < 10.0) {
        animFrameRef.current = requestAnimationFrame(tick);
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      introAudio.stopAll();
    };
  }, [audioEnabled]);

  // Keyboard navigation: Escape = Skip, Enter = Enter
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleSkip();
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleEnter();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip, handleEnter]);

  if (hasExited) return null;

  // Derive animation stage for eye overlays:
  // 1 = 0-1s silence/closed
  // 2 = 1-2s eyes opening
  // 3 = 2-3s Mangekyo activated
  // 4 = 3s+ energy surge & full presence
  let eyeStage = 1;
  if (timelineSec >= 3.0) eyeStage = 4;
  else if (timelineSec >= 2.0) eyeStage = 3;
  else if (timelineSec >= 1.0) eyeStage = 2;

  // Background crossfades
  const isClosedVisible = timelineSec < 1.6;
  const isHalfVisible = timelineSec >= 0.8 && timelineSec < 2.4;
  const isOpenVisible = timelineSec >= 1.8;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="KARUN.DEV Mangekyo Sharingan Awakening Cinematic Introduction"
      className="fixed inset-0 z-50 w-screen h-screen bg-black overflow-hidden select-none flex items-center justify-center"
    >
      {/* 1. CINEMATIC BACKGROUND ARTWORK LAYERS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* STAGE 1: CLOSED EYES (0.0s - 1.0s Fade In / The Silence) */}
        {isClosedVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{
              opacity: timelineSec < 1.0 ? timelineSec : Math.max(0, 1 - (timelineSec - 1.0) * 1.8),
              scale: 1,
            }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/intro/mangekyo-stage-closed.jpg"
              alt="Itachi Uchiha In Shadow - Silence"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}

        {/* STAGE 2: HALF-OPEN EYES (1.0s - 2.0s Eyes Begin to Open) */}
        {isHalfVisible && (
          <motion.div
            animate={{
              opacity:
                timelineSec < 1.8
                  ? (timelineSec - 0.8) / 0.8
                  : Math.max(0, 1 - (timelineSec - 1.8) * 2),
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/intro/mangekyo-stage-half.jpg"
              alt="Itachi Eyes Awakening - Red Slits"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}

        {/* STAGE 3: FULLY AWAKENED MANGEKYO (2.0s - 10.0s) */}
        {isOpenVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: Math.min(1, (timelineSec - 1.8) * 1.5) }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src="/assets/intro/mangekyo-stage-open.jpg"
              alt="Itachi Mangekyo Sharingan Fully Awakened"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        )}

        {/* STAGE 4: ENTER TRANSITION PORTAL VORTEX (Frame 09) */}
        {isEntering && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.8, 1.4, 2.2],
              rotate: [0, 60, 180],
            }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-40"
          >
            <Image
              src="/assets/intro/mangekyo-stage-portal.jpg"
              alt="Tsukuyomi Dimensional Gateway"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* White/Red flash at apex of portal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.9, 1] }}
              transition={{ duration: 0.85, delay: 0.4 }}
              className="absolute inset-0 bg-red-950/80"
            />
          </motion.div>
        )}

        {/* Cinematic Vignettes */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/85 via-black/35 to-transparent z-10" />
      </div>

      {/* 2. REALISTIC SVG MANGEKYO EYE OVERLAYS (Left & Right Eyes) */}
      <MangekyoEyeOverlay side="left" stage={eyeStage} />
      <MangekyoEyeOverlay side="right" stage={eyeStage} />

      {/* 3. CHAKRA ENERGY SURGE FILAMENTS (Frame 04: 3.0s - 4.0s) */}
      <ChakraEnergySurge active={timelineSec >= 3.0 && timelineSec < 5.8} />

      {/* 4. TSUKUYOMI GROUND SEAL (Frame 05: 4.0s - 10.0s) */}
      <TsukuyomiGroundSeal
        active={timelineSec >= 4.0}
        pulsing={timelineSec >= 5.5}
      />

      {/* 5. DRIFTING PARTICLES & FLANKING CROWS (Frame 05: 4.5s+) */}
      <IntroDriftingParticles showCrows={timelineSec >= 4.5} />

      {/* 6. CINEMATIC OVERLAY & ACCESSIBLE CONTROLS */}
      <IntroCinematicOverlay
        timelineSec={timelineSec}
        audioEnabled={audioEnabled}
        onToggleAudio={handleToggleAudio}
        onSkip={handleSkip}
        onEnter={handleEnter}
        isEntering={isEntering}
      />
    </div>
  );
}
