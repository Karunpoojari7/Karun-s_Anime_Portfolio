"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Layers, Code2, Shield, Calendar, ShieldCheck, CheckCircle2, X } from "lucide-react";
import { MILESTONES, Milestone, SUMMARY_INDICATORS } from "./experienceData";
import MilestoneCard from "./MilestoneCard";
import DriftingLeaves from "@/components/skills/DriftingLeaves";

export default function ShinobiJourney() {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const getIndicatorIcon = (type: string) => {
    const size = 15;
    const color = "text-red-400";
    switch (type) {
      case "graduation":
        return <GraduationCap size={size} className={color} />;
      case "layers":
        return <Layers size={size} className={color} />;
      case "code":
        return <Code2 size={size} className={color} />;
      case "shield":
        return <Shield size={size} className={color} />;
      default:
        return <Shield size={size} className={color} />;
    }
  };

  // Staggered offsets for the 4 cards descending along the mountain slope
  const getCardOffsetClass = (index: number) => {
    switch (index) {
      case 0:
        return "lg:ml-auto max-w-[420px]";
      case 1:
        return "lg:ml-auto lg:mr-7 xl:mr-11 max-w-[420px]";
      case 2:
        return "lg:ml-auto lg:mr-14 xl:mr-22 max-w-[420px]";
      case 3:
        return "lg:ml-auto lg:mr-21 xl:mr-33 max-w-[420px]";
      default:
        return "lg:ml-auto max-w-[420px]";
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* 1. CINEMATIC CLEAN BACKGROUND ARTWORK (Giant Sharingan Moon, Mountains, Temples, Waterfalls, Itachi, Crow) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/shinobi-journey-backdrop.jpg"
          alt="My Shinobi Journey - Clean Scenic Artwork"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 42% 35%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.12) 55%, transparent 75%)",
          }}
        />

        {/* Subtle Top & Bottom Edge Blending */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES LAYER */}
      <DriftingLeaves />

      {/* 3. FOREGROUND CRISP UI — TWO-COLUMN LAYOUT MATCHING REFERENCE DESIGN */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          {/* Left Column: Eyebrow, Title, Subtitle, 4 Single-Row Compact Stats */}
          <div className="lg:col-span-5 space-y-4 max-w-xl self-start lg:pt-3">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-red-500 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
              THE SHINOBI PATH // EDUCATION · EXPERIENCE · SPECIALIZATION
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Shinobi<br />
              <em className="text-red-500 italic">Journey.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-md"
            >
              A progressive journey of learning, building, and specializing in cybersecurity.
            </motion.p>

            {/* 4 Compact Stat Cards in a row matching Reference */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 sm:gap-2.5 pt-2"
            >
              {SUMMARY_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="flex flex-col items-center justify-center px-3 py-2 rounded-xl bg-[#080204]/90 border border-red-950/90 backdrop-blur-md shadow-[0_0_14px_rgba(0,0,0,0.85)] min-w-[74px]"
                >
                  <div className="flex items-center gap-1.5">
                    {getIndicatorIcon(ind.iconType)}
                    <span className="font-mono text-sm sm:text-base font-bold text-white">{ind.count}</span>
                  </div>
                  <span className="text-[10px] text-neutral-400 font-sans tracking-wide mt-0.5">{ind.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Exactly 4 Staggered Floating Cards descending along the mountain slope */}
          <div className="lg:col-span-7 flex flex-col space-y-3 sm:space-y-3.5 w-full">
            {MILESTONES.map((milestone, idx) => {
              const isActive = activeMilestone === milestone.id;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.12 * idx }}
                  className={`w-full ${getCardOffsetClass(idx)}`}
                  onClick={() => setSelectedMilestone(milestone)}
                >
                  <MilestoneCard
                    milestone={milestone}
                    isActive={isActive}
                    onHover={setActiveMilestone}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Minimal Footer Attribution */}
        <div className="pt-3 text-center">
          <p className="text-[10px] font-mono tracking-wider text-neutral-500">
            KARUN H G // CONTINUOUS PROGRESSION THROUGH DISCIPLINE & CODE
          </p>
        </div>
      </div>

      {/* 4. DETAILED MILESTONE DOSSIER MODAL */}
      <AnimatePresence>
        {selectedMilestone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setSelectedMilestone(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg rounded-2xl bg-[#090204]/98 border border-red-500/70 shadow-[0_0_40px_rgba(225,29,46,0.35),inset_0_0_30px_rgba(0,0,0,0.9)] p-6 sm:p-7 text-white space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-red-950/50 transition-colors"
                aria-label="Close dossier"
              >
                <X size={18} />
              </button>

              <div className="font-mono text-[10px] tracking-[0.22em] text-red-500 uppercase font-semibold">
                SHINOBI ARCHIVE // {selectedMilestone.category}
              </div>

              <div className="space-y-1">
                <h3
                  className="text-2xl font-serif font-bold text-white tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {selectedMilestone.title}
                </h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  {selectedMilestone.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-red-950/70 font-mono text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-red-950/90 text-neutral-300">
                  <Calendar size={13} className="text-red-400" />
                  <span>{selectedMilestone.duration}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/60 text-emerald-300">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>{selectedMilestone.status}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/50 border border-red-950/60 text-xs text-neutral-300 leading-relaxed font-sans">
                <p>
                  Specialized milestone within Karun H G&apos;s technical progression. Focused on disciplined
                  systems development, cybersecurity defense, and modern full-stack architecture.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
