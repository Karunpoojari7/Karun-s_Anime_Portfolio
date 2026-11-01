"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Layers, Code2, Shield, Calendar, Sparkles } from "lucide-react";
import { MILESTONES, SUMMARY_INDICATORS, Milestone } from "./experienceData";
import MilestoneCard from "./MilestoneCard";
import JourneyPath from "./JourneyPath";
import DriftingLeaves from "@/components/skills/DriftingLeaves";

export default function ShinobiJourney() {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

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
        return <Sparkles size={size} className={color} />;
    }
  };

  // Order from top peak to bottom base as seen in reference:
  // Card 4 (Top): Specialization
  // Card 3 (Upper-Mid): MCA
  // Card 2 (Lower-Mid): Internship
  // Card 1 (Bottom): BSc Degree
  const reversedMilestones = [...MILESTONES].reverse();

  return (
    <section className="relative w-full min-h-[960px] lg:min-h-screen bg-black overflow-hidden flex flex-col justify-between py-12 lg:py-16 select-none">
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Giant Sharingan Moon, Mountains, Temples, Waterfalls, Itachi, Crow) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/shinobi-journey-backdrop.jpg"
          alt="My Shinobi Journey"
          fill
          priority
          className="object-cover object-center filter contrast-[1.06] brightness-[0.95]"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon & Mountain Temples */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-30"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 42% 35%, rgba(225, 29, 46, 0.4) 0%, rgba(130, 10, 22, 0.15) 55%, transparent 75%)",
          }}
        />

        {/* Top & Bottom Ambient Edge Blending */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black via-black/40 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES LAYER */}
      <DriftingLeaves />

      {/* 3. GLOWING ILLUMINATED PATHWAY (SVG) */}
      <JourneyPath activeMilestone={activeMilestone} />

      {/* 4. FOREGROUND INTERACTION LAYER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between">
        {/* DESKTOP 2-COLUMN COMPOSITION MATCHING REFERENCE */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start pt-4 flex-1">
          {/* Left Column: Heading, Subtitle & 4 Summary Indicators */}
          <div className="lg:col-span-5 space-y-6 pt-4">
            {/* Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-red-500 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
              THE SHINOBI PATH // EDUCATION · EXPERIENCE · SPECIALIZATION
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Shinobi<br />
              <em className="text-red-500 italic">Journey.</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm text-neutral-300 font-sans leading-relaxed max-w-md"
            >
              A progressive journey of learning, building, and specializing in cybersecurity.
            </motion.p>

            {/* 4 Summary Indicator Tiles */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-4 gap-2 pt-2 max-w-md"
            >
              {SUMMARY_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="rounded-lg bg-[#080204]/90 border border-red-950/80 p-3 flex flex-col items-center text-center backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                >
                  <div className="mb-1.5">{getIndicatorIcon(ind.iconType)}</div>
                  <div className="font-serif text-lg font-bold text-white leading-none">
                    {ind.count}
                  </div>
                  <div className="font-mono text-[9px] text-neutral-400 mt-1 uppercase truncate w-full">
                    {ind.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 4 Milestone Cards following the Mountain Ascent */}
          <div className="lg:col-span-7 flex flex-col items-end space-y-4 pt-2">
            {reversedMilestones.map((milestone, idx) => {
              const isActive = activeMilestone === milestone.id;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + idx * 0.1 }}
                  className="w-full max-w-[420px]"
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

        {/* MOBILE / TABLET STACKED RESPONSIVE LAYOUT */}
        <div className="lg:hidden flex flex-col gap-8 py-4">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-red-500 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
              THE SHINOBI PATH
            </div>

            <h1
              className="text-4xl font-serif font-bold text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              My Shinobi <em className="text-red-500 italic">Journey.</em>
            </h1>

            <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
              A progressive journey of learning, building, and specializing in cybersecurity.
            </p>

            {/* Summary Indicators */}
            <div className="grid grid-cols-4 gap-2 pt-1">
              {SUMMARY_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="rounded-lg bg-black/80 border border-red-950/80 p-2.5 flex flex-col items-center text-center"
                >
                  <div className="mb-1">{getIndicatorIcon(ind.iconType)}</div>
                  <div className="font-serif text-base font-bold text-white leading-none">
                    {ind.count}
                  </div>
                  <div className="font-mono text-[8px] text-neutral-400 mt-0.5 uppercase truncate w-full">
                    {ind.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Milestone Cards */}
          <div className="flex flex-col gap-4">
            {reversedMilestones.map((milestone) => (
              <MilestoneCard
                key={milestone.id}
                milestone={milestone}
                isActive={activeMilestone === milestone.id}
                onHover={setActiveMilestone}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
