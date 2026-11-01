"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles, Terminal, ArrowUpRight } from "lucide-react";

export default function AboutIntroduction() {
  return (
    <section className="relative w-full pb-16 pt-8">
      {/* Background Ambient Red Glow */}
      <div
        className="pointer-events-none absolute -top-12 right-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(255,38,59,0.3) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* Eyebrow and Page Title */}
      <div className="max-w-3xl mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow flex items-center gap-2"
        >
          <span className="pulse-dot" /> THE UCHIHA LEGACY // ABOUT THE SHINOBI DEVELOPER
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="page-title text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Quiet focus.<br />
          <em className="text-red-500 italic">Ambitious thinking.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="page-lead text-base sm:text-lg text-neutral-300 font-sans mt-4 italic border-l-2 border-red-500/80 pl-4 py-1 bg-red-950/15"
        >
          &ldquo;Observe deeply. Think strategically. Build intelligently.&rdquo;
        </motion.p>
      </div>

      {/* Two-Column Editorial Biography Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Personal Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="lg:col-span-7 space-y-5 text-neutral-300 text-sm sm:text-[15px] leading-relaxed font-sans"
        >
          <p>
            I am <strong className="text-white font-semibold">Karun Poojari</strong>, an MCA Cybersecurity postgraduate scholar at <strong className="text-red-400 font-medium">GM University</strong>. My path in technology began with a disciplined pursuit: understanding how structured logic and clean syntax can be molded into resilient, high-performance digital systems.
          </p>

          <p>
            Starting with frontend web craftsmanship, I spent thousands of hours perfecting component ergonomics, state architectures, and responsive visual design. But user interfaces were only the gateway to a much deeper discipline.
          </p>

          <p>
            As systems scale, true engineering is tested by what lies beneath: how backend data pipelines preserve relational integrity, how artificial intelligence models parse complex multidimensional signals, and fundamentally — how modern distributed architectures defend themselves against evolving adversarial threats.
          </p>

          <p>
            Inspired by the quiet dedication and tactical foresight of Itachi Uchiha, I approach software engineering not as rapid assembly, but as a deliberate craft requiring deep patience, methodical observation, and uncompromising execution.
          </p>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3 border-t border-red-950/60 font-mono text-xs">
            <div className="p-2.5 rounded bg-black/60 border border-red-950/60">
              <span className="text-neutral-500 text-[9px] block">ACADEMIC BASE</span>
              <span className="text-white font-semibold">GM University</span>
            </div>
            <div className="p-2.5 rounded bg-black/60 border border-red-950/60">
              <span className="text-neutral-500 text-[9px] block">SPECIALIZATION</span>
              <span className="text-red-400 font-semibold">MCA Cybersecurity</span>
            </div>
            <div className="p-2.5 rounded bg-black/60 border border-red-950/60 col-span-2 sm:col-span-1">
              <span className="text-neutral-500 text-[9px] block">LOCATION</span>
              <span className="text-neutral-200 font-semibold">India</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Real Edited Portrait in Shinobi Arched Frame */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-5 flex flex-col items-center justify-center"
        >
          <div className="relative w-full max-w-[340px] h-[450px] rounded-t-[160px] rounded-b-md border-2 border-red-600/70 overflow-hidden shadow-[0_0_50px_rgba(255,38,59,0.25),inset_0_0_30px_#000] bg-[#0c0508]">
            {/* Real Identity Portrait */}
            <Image
              src="/images/karun-shinobi.png"
              alt="Karun Poojari - The Shinobi Developer"
              fill
              priority
              className="object-cover object-top filter contrast-[1.08] saturate-[1.02]"
            />

            {/* Subtle Crimson Vignette & Bottom Fog */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
            <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.85)]" />

            {/* Classified Dossier Stamp */}
            <div className="absolute bottom-3 left-3 right-3 bg-black/75 backdrop-blur-md p-2.5 rounded border border-red-500/50 flex items-center justify-between z-10">
              <div>
                <span className="font-mono text-[8px] tracking-[0.2em] text-red-400 uppercase block">
                  IDENTITY // VERIFIED SHINOBI
                </span>
                <span className="font-serif text-xs font-bold text-white tracking-wide">
                  KARUN POOJARI
                </span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </div>
          </div>
          <span className="font-mono text-[9px] tracking-widest text-neutral-500 mt-3 uppercase">
            DOSSIER ARCHIVE // KARUN.DEV
          </span>
        </motion.div>
      </div>
    </section>
  );
}

