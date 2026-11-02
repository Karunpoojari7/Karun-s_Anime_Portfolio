"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Volume2, VolumeX } from "lucide-react";

interface ItachiIntroProps {
  onComplete: () => void;
}

// Authentic Itachi 3-Blade Mangekyo Sharingan Eye SVG Component
function MangekyoEye({ side, isAwakened }: { side: "left" | "right"; isAwakened: boolean }) {
  const id = `intro-mangekyo-${side}`;

  return (
    <div
      className={`absolute z-15 pointer-events-none -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 transition-opacity duration-700 ${
        isAwakened ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: side === "left" ? "22%" : "78%",
        top: "28%",
      }}
    >
      {/* Ocular Radiance Bloom Field */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          opacity: isAwakened ? [0.4, 0.9, 0.6] : 0,
          scale: isAwakened ? [1, 1.25, 1.1] : 0.8,
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle at center, rgba(255, 38, 59, 0.75) 0%, rgba(180, 10, 25, 0.35) 45%, transparent 75%)",
          filter: "blur(14px)",
        }}
      />

      <svg className="w-full h-full drop-shadow-[0_0_20px_#ff263b]" viewBox="0 0 260 260" aria-hidden="true">
        <defs>
          {/* Radial crimson iris gradient */}
          <radialGradient id={`${id}-iris`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4055" />
            <stop offset="40%" stopColor="#e50926" />
            <stop offset="78%" stopColor="#870515" />
            <stop offset="96%" stopColor="#300107" />
            <stop offset="100%" stopColor="#0a0002" />
          </radialGradient>

          {/* Sclera bleed gradient */}
          <radialGradient id={`${id}-sclera`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6b7d" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#a30a1b" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Intense ocular bloom filter */}
          <filter id={`${id}-bloom`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.8  0 0 0 0 0.05  0 0 0 0 0.1  0 0 0 2 0"
              result="tint"
            />
            <feMerge>
              <feMergeNode in="tint" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Blade shadow */}
          <filter id={`${id}-blade-shadow`}>
            <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#ff1133" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Ambient iris field */}
        <circle cx="130" cy="130" r="120" fill={`url(#${id}-sclera)`} />
        <circle
          cx="130"
          cy="130"
          r="105"
          fill={`url(#${id}-iris)`}
          filter={`url(#${id}-bloom)`}
          opacity="0.95"
        />

        {/* Iris fibrous radial striations */}
        <g opacity="0.45" stroke="#ff8f9c" strokeWidth="1">
          {Array.from({ length: 48 }, (_, i) => {
            const angle = (i * 360) / 48;
            return (
              <line
                key={i}
                x1="130"
                y1="35"
                x2="130"
                y2={i % 3 === 0 ? "55" : "45"}
                transform={`rotate(${angle} 130 130)`}
                strokeOpacity={i % 2 === 0 ? "0.8" : "0.3"}
              />
            );
          })}
        </g>

        {/* Concentric chakra rings */}
        <circle cx="130" cy="130" r="88" fill="none" stroke="#220005" strokeWidth="2.5" opacity="0.75" />
        <circle cx="130" cy="130" r="70" fill="none" stroke="#ff243a" strokeWidth="1" strokeDasharray="3 4" opacity="0.6" />

        {/* Authentic Itachi Mangekyo Sharingan 3-bladed pinwheel pattern */}
        <motion.g
          filter={`url(#${id}-blade-shadow)`}
          animate={{
            rotate: isAwakened ? [0, 720, 1080] : 0,
            scale: isAwakened ? [0.2, 1.15, 1] : 0.2,
          }}
          transition={{
            rotate: isAwakened
              ? { duration: 1.6, ease: [0.16, 1, 0.3, 1] }
              : { duration: 0.1 },
            scale: { duration: 1.2, ease: "easeOut" },
          }}
          style={{ originX: "130px", originY: "130px" }}
        >
          {/* Three curved scythe-like blades radiating symmetrically at 0, 120, 240 degrees */}
          {[0, 120, 240].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 130 130)`}>
              <path
                d="M 130 130
                   C 114 112, 94 92, 101 64
                   C 107 39, 131 28, 151 35
                   C 173 42, 181 65, 169 82
                   C 160 94, 143 97, 128 90
                   C 142 108, 153 124, 150 142
                   C 147 163, 128 175, 109 166
                   C 91 157, 88 135, 100 121
                   C 110 110, 122 118, 130 130 Z"
                fill="#050103"
                stroke="#2b0007"
                strokeWidth="2.5"
              />
              <path
                d="M 104 64 C 110 44, 128 34, 147 40 C 164 46, 172 64, 162 77"
                fill="none"
                stroke="#ff263b"
                strokeWidth="1.2"
                strokeOpacity="0.8"
              />
            </g>
          ))}

          {/* Central black pupil */}
          <circle cx="130" cy="130" r="16" fill="#040002" stroke="#ff2238" strokeWidth="1.5" />
          <circle cx="130" cy="130" r="7" fill="#000000" />
        </motion.g>

        {/* Realistic corneal gloss reflection highlight */}
        <ellipse cx="106" cy="98" rx="16" ry="9" transform="rotate(-32 106 98)" fill="#ffffff" opacity="0.75" />
        <circle cx="152" cy="158" r="4.5" fill="#ffffff" opacity="0.35" />
      </svg>
    </div>
  );
}

export default function ItachiIntro({ onComplete }: ItachiIntroProps) {
  const [isAwakened, setIsAwakened] = useState(false);
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

  // Handle ENTER click with coordinated Awakening sequence
  const handleEnter = () => {
    if (isEntering || isAwakened) return;
    setIsAwakened(true);
    setIsEntering(true);

    // User gesture activates audio sequentially
    if (!audioMuted) {
      try {
        const s1 = new Audio("/audio/sharingan-activate.mp3");
        sound1Ref.current = s1;
        s1.play().catch(() => {});

        setTimeout(() => {
          if (!audioMuted && !hasFinishedRef.current) {
            const s2 = new Audio("/audio/ambient-crow.mp3");
            sound2Ref.current = s2;
            s2.play().catch(() => {});
          }
        }, 750);
      } catch {
        // Fallback gracefully
      }
    }

    // Coordinated reveal timeline -> transition to homepage after awakening
    setTimeout(() => {
      finishIntro();
    }, 1800);
  };

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
          animate={{ opacity: isAwakened ? [0.6, 1, 0.8] : [0.2, 0.45, 0.2] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 22% 28%, rgba(255, 38, 59, 0.5) 0%, transparent 22%), radial-gradient(circle at 78% 28%, rgba(255, 38, 59, 0.5) 0%, transparent 22%)",
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

      {/* 2. DUAL MANGEKYO SHARINGAN AWAKENING OVERLAY */}
      <MangekyoEye side="left" isAwakened={isAwakened} />
      <MangekyoEye side="right" isAwakened={isAwakened} />

      {/* 3. COORDINATED EYELID CURTAINS (Dormant Slit -> Retracts on ENTER) */}
      <motion.div
        initial={{ scaleY: 0.85 }}
        animate={{ scaleY: isAwakened ? 0 : 0.85 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-black via-black/95 to-black/80 origin-top z-10 pointer-events-none"
      />
      <motion.div
        initial={{ scaleY: 0.85 }}
        animate={{ scaleY: isAwakened ? 0 : 0.85 }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/95 to-black/80 origin-bottom z-10 pointer-events-none"
      />

      {/* 4. TOP BAR CONTROLS (Mute Toggle & Skip Action) */}
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

      {/* 5. EDITORIAL CONTENT & ENTER ACTION */}
      <main className="relative z-20 flex flex-col items-center justify-center text-center px-4 my-auto space-y-4 sm:space-y-5">
        {/* Step: (月) Circle Mon & KARUN H G Identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
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

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
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
          transition={{ duration: 0.6, delay: 0.7 }}
          className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] text-neutral-300 uppercase pt-1"
        >
          ENTER THE TSUKUYOMI
        </motion.p>

        {/* Primary Interactive ENTER Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex flex-col items-center gap-3 pt-3"
        >
          <button
            onClick={handleEnter}
            type="button"
            disabled={isEntering}
            aria-label="Awaken the Sharingan and enter homepage"
            className="group relative flex items-center justify-center gap-2.5 px-10 py-3 rounded-none bg-black/80 hover:bg-red-950/40 border border-red-500 text-white font-mono text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-[0_0_20px_rgba(225,29,46,0.4)] hover:shadow-[0_0_35px_rgba(225,29,46,0.8)] hover:scale-[1.03] active:scale-[0.98] cursor-pointer"
            style={{ width: "min(280px, 85vw)" }}
          >
            {/* Corner Decorative Notches matching visual reference */}
            <span className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-red-500" />
            <span className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-red-500" />

            <span className="tracking-[0.3em]">{isAwakened ? "AWAKENING..." : "ENTER"}</span>
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

      {/* 6. CINEMATIC ENTER FLASH & SHOCKWAVE PULSE */}
      <AnimatePresence>
        {isEntering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.85, 1] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100000] pointer-events-none bg-radial from-red-600/60 via-[#1b0206]/80 to-black flex items-center justify-center"
          >
            {/* Radial Shockwave Pulse */}
            <motion.div
              initial={{ scale: 0.4, opacity: 1 }}
              animate={{ scale: 3.2, opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-96 h-96 rounded-full border-4 border-red-500 shadow-[0_0_90px_#ff263b]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
