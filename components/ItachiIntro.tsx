"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

interface ItachiIntroProps {
  onComplete: () => void;
}

export default function ItachiIntro({ onComplete }: ItachiIntroProps) {
  const [isEntering, setIsEntering] = useState(false);
  const [audioMuted, setAudioMuted] = useState(false);

  const sound1Ref = useRef<HTMLAudioElement | null>(null);
  const sound2Ref = useRef<HTMLAudioElement | null>(null);
  const hasFinishedRef = useRef(false);

  // Complete and unmount intro safely
  const finishIntro = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    if (sound1Ref.current) {
      sound1Ref.current.pause();
      sound1Ref.current.currentTime = 0;
    }
    if (sound2Ref.current) {
      sound2Ref.current.pause();
      sound2Ref.current.currentTime = 0;
    }

    onComplete();
  }, [onComplete]);

  // Handle ENTER click with cinematic crimson flash and crow transition
  const handleEnter = () => {
    if (isEntering) return;
    setIsEntering(true);

    // Optional subtle trigger of crow sound on enter if not already playing
    if (sound2Ref.current && !audioMuted) {
      sound2Ref.current.currentTime = 0;
      sound2Ref.current.play().catch(() => {});
    }

    setTimeout(() => {
      finishIntro();
    }, 700);
  };

  // Two sequential sound effects: Sound 1 (Sharingan activate) -> Sound 2 (Ambient crow dispersal)
  useEffect(() => {
    const s1 = new Audio("/audio/sharingan-activate.mp3");
    const s2 = new Audio("/audio/ambient-crow.mp3");

    s1.preload = "auto";
    s2.preload = "auto";

    sound1Ref.current = s1;
    sound2Ref.current = s2;

    const handleSound1End = () => {
      if (!hasFinishedRef.current && sound2Ref.current && !audioMuted) {
        sound2Ref.current.currentTime = 0;
        sound2Ref.current.play().catch(() => {
          // Silent fallback if autoplay blocked
        });
      }
    };

    s1.addEventListener("ended", handleSound1End);

    // Attempt autoplay sequentially
    const playPromise = s1.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback until interaction; proceed silently without popups
      });
    }

    return () => {
      s1.removeEventListener("ended", handleSound1End);
      s1.pause();
      s2.pause();
      sound1Ref.current = null;
      sound2Ref.current = null;
    };
  }, [audioMuted]);

  const toggleMute = () => {
    const next = !audioMuted;
    setAudioMuted(next);
    if (next) {
      sound1Ref.current?.pause();
      sound2Ref.current?.pause();
    }
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black overflow-hidden select-none font-sans flex flex-col justify-between">
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Eyes, Headband, Blood Moon, Mist, Ravens, Torii Gate) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/assets/itachi/itachi-awakening-bg.jpg"
          alt="Awaken The Mangekyo Sharingan"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dynamic Dual Eye Glow Pulse (Over Left Eye & Right Eye) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.55, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 22% 28%, rgba(255, 38, 59, 0.45) 0%, transparent 22%), radial-gradient(circle at 78% 28%, rgba(255, 38, 59, 0.45) 0%, transparent 22%)",
          }}
        />

        {/* Ambient Red Glow on Horizon Blood Moon */}
        <div
          className="absolute inset-0 pointer-events-none animate-red-pulse opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 70% 40% at 50% 88%, rgba(225, 29, 46, 0.45) 0%, transparent 65%)",
          }}
        />

        {/* Subtle Vignette Frame */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.85)]" />
      </div>

      {/* 2. ANIMATED EYELID CURTAINS (Opening the Eyes Sequence) */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-black origin-top z-10 pointer-events-none"
      />
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-black origin-bottom z-10 pointer-events-none"
      />

      {/* 3. TOP BAR CONTROLS (Mute Toggle & Skip Action) */}
      <header className="relative z-30 flex items-center justify-between px-6 py-5 sm:px-10 w-full max-w-7xl mx-auto">
        {/* Subtle Sound Status Control */}
        <button
          onClick={toggleMute}
          type="button"
          aria-label={audioMuted ? "Unmute audio" : "Mute audio"}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-950/80 bg-black/60 hover:border-red-500/60 backdrop-blur-md text-[11px] font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          {audioMuted ? (
            <>
              <VolumeX size={13} className="text-neutral-500" />
              <span>MUTED</span>
            </>
          ) : (
            <>
              <Volume2 size={13} className="text-red-500 animate-pulse" />
              <span>AUDIO ON</span>
            </>
          )}
        </button>

        {/* Immediate Skip Intro Action */}
        <button
          onClick={finishIntro}
          type="button"
          aria-label="Skip Introduction"
          className="font-mono text-xs tracking-[0.25em] text-neutral-400 hover:text-white border border-transparent hover:border-red-950/80 px-3 py-1.5 rounded bg-black/40 hover:bg-black/70 backdrop-blur-md transition-all cursor-pointer"
        >
          SKIP INTRO ✕
        </button>
      </header>

      {/* 4. REAL SHARP EDITORIAL CONTENT (ZERO BAKED TEXT, FULLY ACCESSIBLE) */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 my-auto space-y-4 sm:space-y-5">
        {/* Step 5: (月) Circle Mon & KARUN H G Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="flex flex-col items-center gap-2"
        >
          {/* Circular Red Crest */}
          <div className="w-9 h-9 rounded-full border border-red-500 flex items-center justify-center text-red-500 font-serif text-base bg-red-950/40 shadow-[0_0_18px_rgba(225,29,46,0.6)]">
            月
          </div>

          {/* Identity Name & Subtitle */}
          <div className="space-y-1">
            <h2 className="font-serif text-base sm:text-lg tracking-[0.3em] uppercase text-white font-semibold">
              KARUN <span className="text-red-500 font-bold">H G</span>
            </h2>
            <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.35em] text-neutral-300 uppercase">
              THE SHINOBI DEVELOPER
            </p>
          </div>
        </motion.div>

        {/* Step 6: Main Heading (Staggered Reveal) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="space-y-1 pt-1"
        >
          <div className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal text-white tracking-[0.12em] uppercase leading-tight">
            AWAKEN THE
          </div>
          <div
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.06em] uppercase italic text-[#ff263b] leading-tight"
            style={{
              textShadow: "0 0 25px rgba(255, 38, 59, 0.65), 0 0 50px rgba(180, 10, 25, 0.4)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            MANGEKYŌ SHARINGAN
          </div>
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }}
          className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] text-neutral-300 uppercase pt-1"
        >
          ENTER THE TSUKUYOMI
        </motion.p>

        {/* Step 7: Primary Interactive ENTER Button (Exact visual reference replica) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.8 }}
          className="flex flex-col items-center gap-3 pt-3"
        >
          <button
            onClick={handleEnter}
            type="button"
            disabled={isEntering}
            aria-label="Enter Portfolio Homepage"
            className="group relative flex items-center justify-center gap-2.5 px-10 py-3 rounded-none bg-black/80 hover:bg-red-950/40 border border-red-500 text-white font-mono text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(225,29,46,0.4)] hover:shadow-[0_0_35px_rgba(225,29,46,0.8)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            style={{ width: "min(280px, 85vw)" }}
          >
            {/* Corner Decorative Notches matching visual reference */}
            <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />

            <span className="tracking-[0.3em]">ENTER</span>
            <ArrowRight size={14} className="text-red-400 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Skip Intro */}
          <button
            onClick={finishIntro}
            type="button"
            aria-label="Skip to Homepage"
            className="font-mono text-[10px] tracking-[0.3em] text-neutral-400 hover:text-white transition-colors cursor-pointer pt-1"
          >
            SKIP INTRO
          </button>
        </motion.div>
      </main>

      {/* Bottom Spacer for balanced layout */}
      <footer className="relative z-20 pb-6 text-center">
        <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-400 uppercase">
          KARUN H G // PORTFOLIO EXPERIENCE 2026
        </span>
      </footer>

      {/* 5. CINEMATIC ENTER FLASH & DISPERSAL TRANSITION */}
      <AnimatePresence>
        {isEntering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.9, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100000] pointer-events-none bg-radial from-red-600 via-[#1b0206] to-black flex items-center justify-center"
          >
            {/* Radial Shockwave Pulse */}
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 2.8, opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="w-96 h-96 rounded-full border-4 border-red-500 shadow-[0_0_80px_#ff263b]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
