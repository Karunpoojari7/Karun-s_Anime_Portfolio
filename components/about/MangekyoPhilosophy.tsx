"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Brain, Hammer, Sparkles } from "lucide-react";

interface PhilosophyPillar {
  id: "observe" | "think" | "build";
  title: string;
  kanji: string;
  subtitle: string;
  quote: string;
  explanation: string;
  actionItems: string[];
}

const philosophyPillars: PhilosophyPillar[] = [
  {
    id: "observe",
    title: "OBSERVE DEEPLY",
    kanji: "観",
    subtitle: "PERCEPTION & CURIOSITY",
    quote: "Before touching code, understand the problem space completely.",
    explanation:
      "Like the Sharingan’s ability to track rapid movement and see through illusions, engineering begins with observation. I inspect user behaviors, examine architectural constraints, trace network packet anomalies, and study root causes rather than patching superficial symptoms.",
    actionItems: [
      "Deep packet inspection and protocol header scrutiny",
      "Analyzing requirements and user ergonomics before typing a single line",
      "Auditing third-party libraries for hidden dependencies and CVE vulnerabilities",
    ],
  },
  {
    id: "think",
    title: "THINK STRATEGICALLY",
    kanji: "思",
    subtitle: "TACTICAL ARCHITECTURE",
    quote: "Anticipate failures before they occur in production.",
    explanation:
      "True shinobi victory is decided before the battle starts through tactical foresight. In system design, strategic thinking means selecting the right data structures, establishing zero-trust validation boundaries, planning caching strategies, and designing resilient failure states.",
    actionItems: [
      "Threat modeling and attack surface minimization",
      "Relational schema normalization and Redis cache eviction planning",
      "Ensuring clean separation between client ergonomics and backend business logic",
    ],
  },
  {
    id: "build",
    title: "BUILD INTELLIGENTLY",
    kanji: "創",
    subtitle: "DISCIPLINED EXECUTION",
    quote: "Write code that endures, scales, and stands protected.",
    explanation:
      "Creation is where theory meets reality. Building intelligently is about craftsmanship: type-safe boundaries, modular reusable components, fast compile times, and relentless testing. It is constructing systems that are not only performant today, but maintainable for years to come.",
    actionItems: [
      "Clean, modular Next.js and TypeScript implementation",
      "Integrating machine learning models with ethical safety guardrails",
      "Cryptographic integrity checks (SHA-256) across critical workflows",
    ],
  },
];

export default function MangekyoPhilosophy() {
  const [activeTab, setActiveTab] = useState<"observe" | "think" | "build">("observe");

  const current = philosophyPillars.find((p) => p.id === activeTab) || philosophyPillars[0];

  const getRotationAngle = () => {
    switch (activeTab) {
      case "observe": return 0;
      case "think": return 120;
      case "build": return 240;
    }
  };

  return (
    <section className="relative w-full py-20 border-t border-red-950/60 overflow-hidden">
      {/* Background Radial Sharingan Aura */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-25"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(225, 29, 46, 0.25) 0%, transparent 65%)",
        }}
      />

      {/* Chapter Label Bar */}
      <div className="relative z-10 flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded bg-red-950/50 text-red-400 border border-red-800/60 font-semibold">
          CHAPTER 03
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          THE MANGEKYŌ PHILOSOPHY // THE OPERATING CREED
        </span>
      </div>

      {/* Main Philosophy Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-14">
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-red-500 uppercase mb-2">
          THE THREE PILLARS OF ENGINEERING
        </p>
        <h2
          className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Observe. Think. <em>Build.</em>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-3">
          Select a philosophical pillar to rotate the Mangekyō seal and inspect the core discipline:
        </p>
      </div>

      {/* Interactive 3-Pillar Selector Tabs */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
        {philosophyPillars.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setActiveTab(p.id)}
            className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-mono text-xs tracking-[0.18em] transition-all duration-300 cursor-pointer ${
              activeTab === p.id
                ? "bg-red-950/60 border border-red-500 text-white shadow-[0_0_25px_rgba(255,38,59,0.5)] scale-105"
                : "bg-black/60 border border-red-950/70 text-neutral-400 hover:text-white hover:border-red-800"
            }`}
          >
            <span className="font-serif font-bold text-red-400">{p.kanji}</span>
            <span>{p.title}</span>
          </button>
        ))}
      </div>

      {/* Centrepiece: Rotating Mangekyo Visual & Active Philosophy Card */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
        {/* Left: Dynamic Rotating Mangekyo Sharingan SVG */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            {/* Ambient Red Glow Halo */}
            <div className="absolute inset-0 rounded-full bg-red-600/15 filter blur-xl animate-pulse" />

            {/* Rotating Mangekyo Vector Pattern */}
            <motion.svg
              viewBox="0 0 200 200"
              animate={{ rotate: getRotationAngle() }}
              transition={{ type: "spring", stiffness: 60, damping: 15 }}
              className="w-full h-full filter drop-shadow-[0_0_25px_rgba(255,38,59,0.6)]"
            >
              {/* Outer Iris Boundary */}
              <circle cx="100" cy="100" r="92" fill="#140204" stroke="#ff263b" strokeWidth="2.5" />
              <circle cx="100" cy="100" r="82" fill="none" stroke="#8a101b" strokeWidth="1" strokeDasharray="6 4" />

              {/* Red Crimson Iris Gradient Body */}
              <circle cx="100" cy="100" r="76" fill="url(#irisGrad)" />

              <defs>
                <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff263b" />
                  <stop offset="70%" stopColor="#ab0e1c" />
                  <stop offset="100%" stopColor="#4a0409" />
                </radialGradient>
              </defs>

              {/* Three Tomoe Curved Blades (Itachi Mangekyo Triangle Curve) */}
              <g fill="#070203">
                {/* Blade 1 */}
                <path d="M100,100 C110,65 130,45 100,28 C78,40 85,75 100,100 Z" />
                {/* Blade 2 */}
                <path
                  d="M100,100 C110,65 130,45 100,28 C78,40 85,75 100,100 Z"
                  transform="rotate(120 100 100)"
                />
                {/* Blade 3 */}
                <path
                  d="M100,100 C110,65 130,45 100,28 C78,40 85,75 100,100 Z"
                  transform="rotate(240 100 100)"
                />
              </g>

              {/* Center Pupil Core */}
              <circle cx="100" cy="100" r="14" fill="#050102" />
              <circle cx="100" cy="100" r="4" fill="#ff263b" />
            </motion.svg>
          </div>
        </div>

        {/* Right: Active Philosophy Pillar Detail */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-sm border border-red-500/80 bg-[#0c0508] shadow-[0_0_40px_rgba(255,38,59,0.25)] space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-red-950/70">
                <span className="font-mono text-[10px] tracking-[0.25em] text-red-400 font-semibold uppercase">
                  MANGEKYŌ PILLAR // {current.subtitle}
                </span>
                <span className="font-serif text-lg font-bold text-red-500">
                  {current.kanji}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm text-red-400 font-serif italic mt-1">
                  &ldquo;{current.quote}&rdquo;
                </p>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                {current.explanation}
              </p>

              {/* Action Disciplines */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase block">
                  CORE PRACTICAL PRINCIPLES
                </span>
                <ul className="space-y-1.5">
                  {current.actionItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-neutral-300 font-sans flex items-start gap-2 bg-black/50 p-2 rounded border border-red-950/40"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

