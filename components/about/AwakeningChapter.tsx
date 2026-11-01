"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, Compass, Sparkles, BookOpen } from "lucide-react";

export default function AwakeningChapter() {
  const [isScrollOpen, setIsScrollOpen] = useState(true);

  return (
    <section className="relative w-full py-16 border-t border-red-950/60">
      {/* Chapter Label Bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded bg-red-950/50 text-red-400 border border-red-800/60 font-semibold">
          CHAPTER 01
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          THE AWAKENING // THE BEGINNING OF THE JOURNEY
        </span>
      </div>

      {/* Main Chapter Content Card with Scroll Motif */}
      <div className="relative rounded-sm border border-red-900/60 bg-[#0c0507] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.85)]">
        {/* Top Scroll Roller Cylinder */}
        <div className="w-full h-3 bg-gradient-to-r from-[#200508] via-red-600 to-[#200508] border-b border-red-500/80 flex items-center justify-between px-3">
          <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_#ff263b]" />
          <span className="font-mono text-[8px] tracking-[0.3em] text-white/80 uppercase">
            ACADEMIC SCROLL // AWAKENING
          </span>
          <span className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_6px_#ff263b]" />
        </div>

        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The curiosity that sparked the flame.
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 font-sans mt-3 leading-relaxed max-w-3xl">
              Every shinobi’s path begins with a formative foundation. Before engineering full-stack applications or dissecting network telemetry, my journey was shaped by rigorous academic inquiry and a relentless drive to master computing fundamentals.
            </p>
          </div>

          {/* Education Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Milestone 1: BSc at Sindhi College */}
            <motion.div
              whileHover={{ y: -4, borderColor: "#ff263b" }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded bg-black/60 border border-red-950/70 relative group"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-red-950/60">
                <span className="font-mono text-[10px] tracking-wider text-red-400 font-semibold uppercase">
                  FOUNDATION MILESTONE // 01
                </span>
                <GraduationCap size={16} className="text-red-500" />
              </div>

              <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                Bachelor of Science (BSc)
              </h3>
              <p className="font-mono text-xs text-red-400 mt-0.5">
                Sindhi College, Bengaluru
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                Formed my core foundation in computational mathematics, algorithms, and structured programming. Developed an appreciation for clean system design and practical web engineering during these formative years.
              </p>
            </motion.div>

            {/* Milestone 2: MCA Cybersecurity at GM University */}
            <motion.div
              whileHover={{ y: -4, borderColor: "#ff263b" }}
              transition={{ duration: 0.25 }}
              className="p-5 rounded bg-black/60 border border-red-950/70 relative group"
            >
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-red-950/60">
                <span className="font-mono text-[10px] tracking-wider text-red-400 font-semibold uppercase">
                  ADVANCED SPECIALIZATION // 02
                </span>
                <Award size={16} className="text-red-500" />
              </div>

              <h3 className="font-serif text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                Master of Computer Applications (MCA)
              </h3>
              <p className="font-mono text-xs text-red-400 mt-0.5">
                GM University // Specialization: Cybersecurity
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-3 leading-relaxed">
                Specializing in defensive security operations, network protocol analysis, enterprise cryptography, and security engineering. Translating theoretical models into live packet inspection labs and zero-trust software architectures.
              </p>
            </motion.div>
          </div>

          {/* Philosophical Creed Callout */}
          <div className="p-4 sm:p-5 rounded bg-red-950/20 border-l-4 border-red-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-red-400 uppercase block mb-1">
                SHINOBI CREED // AWAKENING
              </span>
              <p className="text-xs sm:text-sm text-neutral-200 font-serif italic">
                &ldquo;Master the fundamentals in silence before wielding advanced techniques in the open.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-neutral-400 shrink-0">
              <Sparkles size={13} className="text-red-500" />
              <span>DISCIPLINE VERIFIED</span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Roller Cylinder */}
        <div className="w-full h-3 bg-gradient-to-r from-[#200508] via-red-600 to-[#200508] border-t border-red-500/80" />
      </div>
    </section>
  );
}

