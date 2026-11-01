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
    const size = 14;
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

  // Staggered offsets for the 4 cards descending along the mountain slope
  const getCardOffsetClass = (index: number) => {
    switch (index) {
      case 0:
        return "lg:ml-auto max-w-[420px]";
      case 1:
        return "lg:ml-auto lg:mr-6 xl:mr-10 max-w-[420px]";
      case 2:
        return "lg:ml-auto lg:mr-14 xl:mr-20 max-w-[420px]";
      case 3:
        return "lg:ml-auto lg:mr-20 xl:mr-28 max-w-[420px]";
      default:
        return "lg:ml-auto max-w-[420px]";
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-black overflow-hidden flex flex-col justify-between select-none">
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

        {/* Edge Blending */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES LAYER */}
      <DriftingLeaves />

      {/* 3. FOREGROUND CONTENT — TWO-COLUMN LAYOUT MATCHING REFERENCE IMAGE 1 */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          {/* Left Column: Eyebrow, Title, Subtitle, 4 Single-Row Compact Stats */}
          <div className="lg:col-span-5 space-y-4 max-w-xl self-start lg:pt-4">
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

            {/* Single Row 4 Compact Indicators matching Reference */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 pt-2"
            >
              {SUMMARY_INDICATORS.map((ind) => (
                <div
                  key={ind.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#090204]/90 border border-red-950/80 backdrop-blur-md text-[11px] font-mono shadow-[0_0_12px_rgba(0,0,0,0.8)]"
                >
                  {getIndicatorIcon(ind.iconType)}
                  <span className="font-bold text-white">{ind.count}</span>
                  <span className="text-neutral-400">{ind.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: 4 Staggered Floating Cards descending along the mountain slope */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5 sm:space-y-4 w-full">
            {MILESTONES.map((milestone, idx) => {
              const isActive = activeMilestone === milestone.id;

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * idx }}
                  className={`w-full ${getCardOffsetClass(idx)}`}
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

        {/* Clean Minimal Footer Caption */}
        <div className="pt-4 text-center">
          <p className="text-[10px] font-mono tracking-wider text-neutral-500">
            KARUN H G // CONTINUOUS PROGRESSION THROUGH DISCIPLINE & CODE
          </p>
        </div>
      </div>
    </section>
  );
}
