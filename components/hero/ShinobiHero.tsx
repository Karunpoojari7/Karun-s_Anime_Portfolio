"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Send, Sparkles } from "lucide-react";
import ItachiCrowClonePortal from "./ItachiCrowClonePortal";

export default function ShinobiHero() {
  return (
    <section className="shinobi-hero-section section-wrap" aria-label="Hero Introduction">
      {/* Background Moon Ambient Flare */}
      <div className="hero-crimson-flare" />

      {/* Grid: Narrative Copy on Left, Itachi Visual on Right */}
      <div className="hero-content-grid">
        {/* Left Column: Shinobi Developer Content */}
        <div className="hero-narrative-copy">
          {/* Availability Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="pulse-dot" /> AVAILABLE FOR COLLABORATION · INDIA
          </motion.div>

          {/* Headline Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="hero-headline-block"
          >
            <span className="hero-pretitle">KARUN POOJARI</span>
            <h1 className="hero-main-title">
              THE SHINOBI<br />
              <em>DEVELOPER.</em>
            </h1>
          </motion.div>

          {/* Roles Bar */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hero-roles-bar"
          >
            FULL-STACK DEVELOPER <i className="role-dot" /> AI ENTHUSIAST <i className="role-dot" /> CYBERSECURITY EXPLORER
          </motion.p>

          {/* Introductory Manifesto Quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="hero-manifesto-block border-l-2 border-red-500/80 pl-4 py-1.5 my-3 bg-red-950/15 rounded-r"
          >
            <p className="hero-manifesto-text text-sm sm:text-base text-neutral-300 font-sans italic leading-relaxed">
              &ldquo;I turn ideas into resilient digital systems — engineering high-performance web applications, exploring applied artificial intelligence, and mastering defensive cybersecurity to safeguard the technologies we rely on.&rdquo;
            </p>
          </motion.div>

          {/* CTA Buttons Row with Chakra Pulse Interactions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hero-buttons-row flex flex-wrap items-center gap-3.5 mt-5"
          >
            {/* Primary Action Button: Explore Missions */}
            <Link
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-[#9e101f] to-[#e11d2e] border border-red-500 shadow-[0_0_25px_rgba(225,29,46,0.35)] hover:shadow-[0_0_40px_rgba(225,29,46,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Expanding Chakra Ripple Aura */}
              <span className="pointer-events-none absolute -inset-full rounded-full bg-red-400/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
              <span>Explore Missions</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Ghost Action Button: Discover My Journey */}
            <Link
              href="/about"
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-sm font-mono text-xs font-medium tracking-wider text-neutral-200 border border-neutral-700/80 bg-black/60 backdrop-blur-sm hover:border-red-500/80 hover:text-white hover:bg-red-950/30 hover:shadow-[0_0_20px_rgba(225,29,46,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Discover My Journey</span>
              <ArrowUpRight size={15} className="text-neutral-400 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Metadata Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="hero-meta-links flex items-center gap-6 mt-7 text-xs font-mono text-neutral-400"
          >
            <a
              href="https://github.com/Karunpoojari7"
              target="_blank"
              rel="noreferrer"
              className="meta-link github-btn flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github size={15} /> <span>GitHub Archive</span>
            </a>
            <Link href="/contact" className="meta-link dispatch-btn flex items-center gap-2 hover:text-red-400 transition-colors">
              <Send size={14} /> <span>Mission Dispatch</span> <ArrowUpRight size={13} />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Interactive Crow Clone Dispersal & Reassembly Portal */}
        <ItachiCrowClonePortal />
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="hero-scroll-indicator mt-10 flex items-center gap-3 font-mono text-[9px] text-neutral-500 tracking-[0.25em]">
        <span className="scroll-line w-11 h-[1px] bg-red-500 shadow-[0_0_8px_#ff263b]" />
        <span className="scroll-text">SCROLL TO DISCOVER MISSIONS</span>
      </div>
    </section>
  );
}
