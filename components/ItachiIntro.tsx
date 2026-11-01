"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, ArrowRight } from "lucide-react";

interface ItachiIntroProps {
  onComplete?: () => void;
}

export default function ItachiIntro({ onComplete }: ItachiIntroProps) {
  // Audio state & element references
  const [soundEnabled, setSoundEnabled] = useState(true);
  const soundEnabledRef = useRef(soundEnabled);
  soundEnabledRef.current = soundEnabled;

  const ambientAudioRef = useRef<HTMLAudioElement | null>(null);
  const activateAudioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Intro states
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [ambientEnded, setAmbientEnded] = useState(false);
  const isVideoPlayingRef = useRef(false);
  isVideoPlayingRef.current = isVideoPlaying;

  // Cleanup & completion handler
  const handleComplete = useCallback(() => {
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
    }
    if (activateAudioRef.current) {
      activateAudioRef.current.pause();
    }
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  // Set up chained audio playback on mount
  useEffect(() => {
    const ambientAudio = new Audio("/audio/ambient-crow.mp3");
    const activateAudio = new Audio("/audio/sharingan-activate.mp3");

    ambientAudio.preload = "auto";
    activateAudio.preload = "auto";

    ambientAudioRef.current = ambientAudio;
    activateAudioRef.current = activateAudio;

    // Chaining logic: when ambient-crow.mp3 finishes, immediately transition to sharingan-activate.mp3
    const handleAmbientEnd = () => {
      setAmbientEnded(true);
      if (activateAudioRef.current && soundEnabledRef.current && !isVideoPlayingRef.current) {
        activateAudioRef.current.currentTime = 0;
        activateAudioRef.current.play().catch((err) => {
          console.warn("Sharingan activate audio playback blocked:", err);
        });
      }
    };

    ambientAudio.addEventListener("ended", handleAmbientEnd);

    // Initial autoplay attempt for ambient crow sound
    const playPromise = ambientAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Autoplay policy prevented playback until user interaction
        console.info("Audio autoplay prevented by browser policy:", error);
        setSoundEnabled(false);
      });
    }

    return () => {
      ambientAudio.removeEventListener("ended", handleAmbientEnd);
      ambientAudio.pause();
      activateAudio.pause();
      ambientAudioRef.current = null;
      activateAudioRef.current = null;
    };
  }, []);

  // Top-right audio toggle button handler
  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);

    if (nextState) {
      if (isVideoPlaying) {
        if (videoRef.current) videoRef.current.muted = false;
        if (activateAudioRef.current && activateAudioRef.current.paused) {
          activateAudioRef.current.play().catch(() => {});
        }
      } else {
        if (ambientEnded) {
          if (activateAudioRef.current) {
            activateAudioRef.current.currentTime = 0;
            activateAudioRef.current.play().catch(() => {});
          }
        } else if (ambientAudioRef.current) {
          ambientAudioRef.current.play().catch(() => {});
        }
      }
    } else {
      if (ambientAudioRef.current) ambientAudioRef.current.pause();
      if (activateAudioRef.current) activateAudioRef.current.pause();
      if (videoRef.current) videoRef.current.muted = true;
    }
  };

  // Tsukuyomi video transition trigger
  const handleEnterTsukuyomi = useCallback(() => {
    if (isVideoPlaying) return;
    setIsVideoPlaying(true);

    // Stop ambient audio
    if (ambientAudioRef.current) {
      ambientAudioRef.current.pause();
    }

    // Immediately trigger sharingan activation audio if sound is active
    if (activateAudioRef.current && soundEnabledRef.current) {
      activateAudioRef.current.currentTime = 0;
      activateAudioRef.current.play().catch((err) => {
        console.warn("Audio activation play failed:", err);
      });
    }

    // Fallback safety timeout in case video end event is missed
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 6500);

    return () => clearTimeout(fallbackTimer);
  }, [isVideoPlaying, handleComplete]);

  return (
    <div className="fixed inset-0 z-[99999] overflow-hidden bg-black select-none font-sans">
      {/* 1. CINEMATIC BACKGROUND ARTWORK (User's high-res Itachi Awakening artwork) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/itachi-intro-bg.jpg"
          alt="Awaken The Mangekyo Sharingan - Itachi Uchiha"
          fill
          priority
          className="object-cover object-center filter contrast-105"
        />

        {/* 2. SMOOTH PULSING RED AMBIENT GLOW (animate-red-pulse) OVER SHARINGAN EYES */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse"
          style={{
            background:
              "radial-gradient(ellipse 75% 45% at 50% 30%, rgba(225, 29, 46, 0.42) 0%, rgba(160, 10, 25, 0.16) 45%, transparent 72%)",
          }}
        />

        {/* Cinematic Vignette */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
      </div>

      {/* 3. TOPBAR CONTROLS */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 sm:px-10">
        {/* Transparent left placeholder for balance */}
        <div className="w-24" />

        {/* Audio Toggle Button (Interactive Sound Control) */}
        <button
          onClick={toggleSound}
          type="button"
          aria-label={soundEnabled ? "Mute sound" : "Enable sound"}
          className="flex items-center gap-2 rounded-full border border-red-500/50 bg-black/60 backdrop-blur-md px-4 py-2 font-mono text-[11px] tracking-wider text-neutral-200 transition-all duration-300 hover:border-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(225,29,46,0.6)] cursor-pointer"
        >
          {soundEnabled ? (
            <>
              <Volume2 size={14} className="text-red-500 animate-pulse" />
              <span>🔊 SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX size={14} className="text-neutral-400" />
              <span>🔇 SOUND OFF</span>
            </>
          )}
        </button>
      </header>

      {/* 4. INTERACTIVE HOTSPOTS & CONTROLS (Zero text duplication) */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-end pb-12 sm:pb-16 px-4">
        <div className="flex flex-col items-center gap-2">
          {/* PRIMARY INTERACTIVE BUTTON: Aligned directly over the artwork's "ENTER THE TSUKUYOMI" box */}
          <button
            onClick={handleEnterTsukuyomi}
            type="button"
            aria-label="Enter the Tsukuyomi"
            className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-sm border border-transparent hover:border-red-500/90 bg-red-950/0 hover:bg-red-950/40 px-8 py-3.5 font-mono text-xs font-semibold tracking-[0.2em] text-transparent hover:text-white/95 backdrop-blur-0 hover:backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(225,29,46,0.75)] active:scale-[0.98] cursor-pointer"
            style={{
              width: "min(285px, 80vw)",
              height: "46px",
            }}
          >
            {/* Angular Corner Accents on hover */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-red-400" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-red-400" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-red-400" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-red-400" />

            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
              <span>ENTER THE TSUKUYOMI</span>
              <ArrowRight size={14} className="text-red-400" />
            </span>
          </button>

          {/* SECONDARY SKIP INTRO LINK */}
          <button
            onClick={handleComplete}
            type="button"
            aria-label="Skip Intro"
            className="h-8 px-6 text-transparent hover:text-white transition-colors duration-200 text-[11px] font-mono tracking-[0.22em] cursor-pointer rounded hover:bg-black/40"
          >
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-200">
              SKIP INTRO
            </span>
          </button>
        </div>
      </main>

      {/* 5. FULL-SCREEN TSUKUYOMI VIDEO OVERLAY */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100000] bg-black flex items-center justify-center overflow-hidden"
          >
            <video
              ref={videoRef}
              src="/video/itachi2_2.mp4"
              autoPlay
              playsInline
              muted={!soundEnabled}
              onEnded={handleComplete}
              className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.96]"
            />

            {/* Subtle Vignette & Red Filter Overlay */}
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.95)]" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-60" />
            <div className="pointer-events-none absolute inset-0 bg-red-950/15 mix-blend-color" />

            <button
              onClick={handleComplete}
              type="button"
              className="absolute bottom-6 right-6 z-10 px-4 py-2 font-mono text-xs tracking-widest text-neutral-400 hover:text-white bg-black/60 hover:bg-black/90 border border-white/10 rounded-sm backdrop-blur-md transition-colors cursor-pointer"
            >
              SKIP ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
