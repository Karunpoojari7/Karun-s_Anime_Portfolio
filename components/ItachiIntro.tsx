"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

interface ItachiIntroProps {
  onComplete: () => void;
}

export default function ItachiIntro({ onComplete }: ItachiIntroProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const hasFinishedRef = useRef(false);

  // Complete and unmount intro safely
  const finishIntro = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    if (soundRef.current) {
      soundRef.current.pause();
      soundRef.current.currentTime = 0;
    }
    if (videoRef.current) {
      videoRef.current.pause();
    }

    onComplete();
  }, [onComplete]);

  // Handle ENTER click: launch the cinematic Sharingan video transition
  const handleEnter = () => {
    if (isVideoPlaying) return;
    setIsVideoPlaying(true);

    // Play awakening audio
    if (!audioMuted) {
      try {
        const audio = new Audio("/audio/sharingan-activate.mp3");
        soundRef.current = audio;
        audio.play().catch(() => {});
      } catch {
        // Fallback silently
      }
    }

    // Play the transition video
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // If video autoplay fails, transition after duration
          setTimeout(finishIntro, 1700);
        });
      }
    }, 50);
  };

  const handleVideoEnded = () => {
    finishIntro();
  };

  const toggleMute = () => {
    const next = !audioMuted;
    setAudioMuted(next);
    if (soundRef.current) {
      soundRef.current.muted = next;
    }
    if (videoRef.current) {
      videoRef.current.muted = next;
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black overflow-hidden select-none font-sans flex flex-col justify-between">
      {/* 1. CRYSTAL CLEAR HIGH-QUALITY CINEMATIC ARTWORK */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.025, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/itachi-intro-bg-with-text.jpg"
          alt="Awaken The Mangekyo Sharingan - Karun.dev"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center filter contrast-[1.06] brightness-[0.98]"
        />

        {/* Subtle Ambient Red Glow on Horizon Blood Moon */}
        <div
          className="absolute inset-0 pointer-events-none animate-red-pulse opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(225, 29, 46, 0.35) 0%, transparent 60%)",
          }}
        />

        {/* Clean Vignette Frame */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.85)]" />
      </motion.div>

      {/* 2. TOP BAR CONTROLS (Mute Toggle & Skip Action) */}
      <header className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 w-full max-w-7xl mx-auto">
        <button
          onClick={toggleMute}
          type="button"
          aria-label={audioMuted ? "Unmute audio" : "Mute audio"}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-950/80 bg-black/70 hover:border-red-500/60 text-[11px] font-mono text-neutral-300 hover:text-white transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.8)]"
        >
          {audioMuted ? (
            <>
              <VolumeX size={13} className="text-neutral-400" />
              <span>MUTED</span>
            </>
          ) : (
            <>
              <Volume2 size={13} className="text-red-500 animate-pulse" />
              <span>AUDIO ON</span>
            </>
          )}
        </button>

        <button
          onClick={finishIntro}
          type="button"
          aria-label="Skip Introduction"
          className="font-mono text-xs tracking-[0.25em] text-neutral-300 hover:text-white border border-transparent hover:border-red-950/80 px-3 py-1.5 rounded bg-black/60 hover:bg-black/80 transition-all cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.8)]"
        >
          SKIP INTRO ✕
        </button>
      </header>

      {/* 3. INTERACTIVE ENTER ACTION LAYER (Aligned with the artwork's center prompt) */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 my-auto">
        {/* Spacer to align with the prompt */}
        <div className="h-44 sm:h-52 md:h-60" />

        <div className="flex flex-col items-center gap-3">
          {/* Primary Interactive ENTER Button */}
          <button
            onClick={handleEnter}
            type="button"
            disabled={isVideoPlaying}
            aria-label="Awaken the Sharingan and enter portfolio"
            className="group relative flex items-center justify-center gap-2.5 px-10 py-3 bg-black/80 hover:bg-red-950/60 border border-red-500 text-white font-mono text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-[0_0_25px_rgba(225,29,46,0.6)] hover:shadow-[0_0_40px_rgba(225,29,46,0.9)] hover:scale-[1.04] active:scale-[0.98] cursor-pointer"
            style={{ width: "min(280px, 85vw)" }}
          >
            {/* Corner Decorative Notches */}
            <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />

            <span className="tracking-[0.3em]">
              {isVideoPlaying ? "AWAKENING..." : "ENTER"}
            </span>
            <ArrowRight
              size={14}
              className="text-red-400 group-hover:translate-x-1 transition-transform"
            />
          </button>

          {/* Quick Skip Option */}
          <button
            onClick={finishIntro}
            type="button"
            aria-label="Skip to Homepage"
            className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 hover:text-white transition-colors cursor-pointer pt-1"
          >
            SKIP INTRO
          </button>
        </div>
      </main>

      {/* 4. FOOTER IDENTIFIER */}
      <footer className="relative z-20 pb-6 text-center">
        <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
          KARUN H G // PORTFOLIO EXPERIENCE 2026
        </span>
      </footer>

      {/* 5. CINEMATIC VIDEO TRANSITION OVERLAY */}
      <AnimatePresence>
        {isVideoPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100000] bg-black flex items-center justify-center cursor-pointer"
            onClick={finishIntro}
          >
            <video
              ref={videoRef}
              src="/video/sharingan-transition.mp4"
              playsInline
              autoPlay
              muted={audioMuted}
              onEnded={handleVideoEnded}
              className="w-full h-full object-contain filter contrast-[1.1] brightness-[1.05]"
            />

            {/* Skip hint during video */}
            <div className="absolute bottom-6 right-6 font-mono text-[11px] text-neutral-400 hover:text-white tracking-widest bg-black/60 px-3 py-1.5 rounded border border-red-950/60">
              CLICK TO SKIP ➔
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
