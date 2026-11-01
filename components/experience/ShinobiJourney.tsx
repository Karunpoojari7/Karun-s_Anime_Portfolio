"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Layers, Code2, Shield, Sparkles } from "lucide-react";
import { MILESTONES, SUMMARY_INDICATORS } from "./experienceData";
import MilestoneCard from "./MilestoneCard";
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

  return (
    <section className="relative w-full min-h-[960px] lg:min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-10 lg:pb-12 select-none">
      {/* 1. CINEMATIC BACKGROUND ARTWORK (Giant Sharingan Moon, Mountains, Temples, Waterfalls, Itachi, Crow) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/shinobi-journey-backdrop.jpg"
          alt="My Shinobi Journey"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon & Mountain Temples */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-25"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 42% 35%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.12) 55%, transparent 75%)",
          }}
        />

        {/* Crisp Edge Blending */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES LAYER */}
      <DriftingLeaves />

      {/* 3. FOREGROUND CONTENT & 2x2 MILESTONE GRID */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between">
        {/* Top Header Block: Title, Subtitle, Indicators */}
        <div className="space-y-4 pt-2">
          {/* Eyebrow & Live Status */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-950/40 pb-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-red-500 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
              THE SHINOBI PATH // ACADEMIC & PROFESSIONAL TIMELINE
            </motion.div>

            {/* Quick Summary Pill Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 overflow-x-auto"
            >
              {SUMMARY_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#090204]/85 border border-red-950/80 backdrop-blur-md text-[10px] font-mono text-neutral-300"
                >
                  {getIndicatorIcon(ind.iconType)}
                  <span className="font-bold text-white">{ind.count}</span>
                  <span className="text-neutral-400">{ind.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Heading & Subtitle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                My Shinobi <em className="text-red-500 italic">Journey.</em>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mt-1 max-w-xl"
              >
                A progressive journey of learning, building, and specializing in cybersecurity.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ALL FOUR MILESTONES IN A CLEAN 2x2 GRID (ALL VISIBLE TOGETHER ON DESKTOP WITHOUT SCROLLING) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 w-full my-auto py-4"
        >
          {MILESTONES.map((milestone) => {
            const isActive = activeMilestone === milestone.id;

            return (
              <div key={milestone.id} className="w-full">
                <MilestoneCard
                  milestone={milestone}
                  isActive={isActive}
                  onHover={setActiveMilestone}
                />
              </div>
            );
          })}
        </motion.div>

        {/* Footer Note */}
        <div className="pt-2 text-center">
          <p className="text-[10px] font-mono tracking-wider text-neutral-400">
            KARUN.DEV // CONTINUOUS PROGRESSION THROUGH DISCIPLINE & CODE
          </p>
        </div>
      </div>
    </section>
  );
}
