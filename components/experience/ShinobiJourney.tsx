"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";
import { MILESTONES, Milestone } from "./experienceData";
import DriftingLeaves from "@/components/skills/DriftingLeaves";

interface CardHotspot {
  id: string;
  left: string;
  top: string;
  width: string;
  height: string;
}

const HOTSPOTS: CardHotspot[] = [
  { id: "cybersecurity", left: "75%", top: "13%", width: "23%", height: "18%" },
  { id: "masters", left: "67.5%", top: "33%", width: "25%", height: "18%" },
  { id: "internship", left: "59%", top: "53.5%", width: "27%", height: "18%" },
  { id: "undergrad", left: "49%", top: "74%", width: "27%", height: "18%" },
];

export default function ShinobiJourney() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  return (
    <section className="relative w-full h-[calc(100vh-72px)] bg-black overflow-hidden flex items-center justify-center select-none">
      {/* 1. CINEMATIC 16:9 VIEWPORT CONTAINER MATCHING REFERENCE IMAGE 2 */}
      <div className="relative w-full h-full max-h-[calc(100vh-72px)] aspect-[1024/521] mx-auto overflow-hidden">
        {/* Scenic Background Artwork */}
        <Image
          src="/assets/itachi/shinobi-journey-backdrop.jpg"
          alt="My Shinobi Journey - Exact Visual Reference"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 42% 35%, rgba(225, 29, 46, 0.35) 0%, transparent 70%)",
          }}
        />

        {/* Drifting Leaves */}
        <DriftingLeaves />

        {/* 2. INTERACTIVE CARD HOTSPOTS — EXACT POSITIONAL ALIGNMENT WITH REFERENCE IMAGE 2 */}
        {HOTSPOTS.map((spot) => {
          const milestone = MILESTONES.find((m) => m.id === spot.id);
          const isHovered = hoveredId === spot.id;

          return (
            <div
              key={spot.id}
              style={{
                position: "absolute",
                left: spot.left,
                top: spot.top,
                width: spot.width,
                height: spot.height,
              }}
              className="cursor-pointer group z-20"
              onMouseEnter={() => setHoveredId(spot.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => milestone && setSelectedMilestone(milestone)}
              role="button"
              tabIndex={0}
              aria-label={`Inspect ${milestone?.title || "Milestone"}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  milestone && setSelectedMilestone(milestone);
                }
              }}
            >
              {/* Interactive Chakra Glow Border on Hover */}
              <motion.div
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  scale: isHovered ? 1.01 : 0.99,
                }}
                transition={{ duration: 0.2 }}
                className="w-full h-full rounded-2xl border-2 border-red-500/90 shadow-[0_0_25px_rgba(255,38,59,0.55),inset_0_0_15px_rgba(225,29,46,0.25)] bg-red-950/20 backdrop-blur-[2px] flex items-center justify-end pr-4"
              >
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 border border-red-500/60 font-mono text-[10px] text-red-300 shadow-[0_0_10px_rgba(255,38,59,0.5)]">
                  <Sparkles size={11} className="text-red-400" />
                  <span>Inspect Dossier</span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* 3. DETAILED MILESTONE DOSSIER MODAL */}
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
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedMilestone(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-red-950/50 transition-colors"
                aria-label="Close dossier"
              >
                <X size={18} />
              </button>

              {/* Eyebrow */}
              <div className="font-mono text-[10px] tracking-[0.22em] text-red-500 uppercase font-semibold">
                SHINOBI ARCHIVE // {selectedMilestone.category}
              </div>

              {/* Title & Subtitle */}
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

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-red-950/70 font-mono text-xs">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-red-950/90 text-neutral-300">
                  <Calendar size={13} className="text-red-400" />
                  <span>{selectedMilestone.duration}</span>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium ${
                    selectedMilestone.isCompleted
                      ? "bg-emerald-950/40 border border-emerald-500/60 text-emerald-300"
                      : "bg-emerald-950/40 border border-emerald-500/60 text-emerald-300"
                  }`}
                >
                  <ShieldCheck size={13} className="text-emerald-400" />
                  <span>{selectedMilestone.status}</span>
                </div>
              </div>

              {/* Detailed Narrative */}
              <div className="p-3.5 rounded-xl bg-black/50 border border-red-950/60 text-xs text-neutral-300 leading-relaxed font-sans space-y-2">
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
