"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Eye, Terminal, Sparkles, ArrowUpRight, Send, LucideIcon } from "lucide-react";

interface AmbitionItem {
  icon: LucideIcon;
  title: string;
  focus: string;
  description: string;
}

const ambitions: AmbitionItem[] = [
  {
    icon: Compass,
    title: "Cybersecurity & Architecture Consulting",
    focus: "ENTERPRISE DEFENSE",
    description: "Aspiring to perform rigorous vulnerability assessments, cloud perimeter reviews, and defensive systems hardening for high-stakes technology environments.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust AI Security Research",
    focus: "ADVERSARIAL AI",
    description: "Investigating defensive strategies against prompt injection, model inversion attacks, automated data poisoning, and unauthorized payload execution in generative systems.",
  },
  {
    icon: Eye,
    title: "Community Cyber Literacy & Awareness",
    focus: "PUBLIC DISPATCH",
    description: "Advocating for essential digital hygiene, ethical hacking literacy, and public speaking sessions to empower developers and organizations against social engineering.",
  },
  {
    icon: Terminal,
    title: "Intelligent Systems Engineering",
    focus: "SCALABLE APPS",
    description: "Continuing to engineer high-throughput web architectures that seamlessly weave localized AI intelligence into intuitive, human-centered digital experiences.",
  },
];

export default function EternalVision() {
  return (
    <section className="relative w-full py-20 border-t border-red-950/60 overflow-hidden">
      {/* Background Moon Ambient Glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(225, 29, 46, 0.35) 0%, transparent 70%)",
          filter: "blur(75px)",
        }}
      />

      {/* Chapter Label Bar */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-[10px] tracking-[0.25em] px-2.5 py-1 rounded bg-red-950/50 text-red-400 border border-red-800/60 font-semibold">
          CHAPTER 05
        </span>
        <span className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          THE ETERNAL VISION // WHAT COMES NEXT
        </span>
      </div>

      <div className="max-w-3xl mb-12">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The horizon ahead: Where this path leads.
        </h2>
        <p className="text-sm sm:text-base text-neutral-300 font-sans mt-3.5 leading-relaxed">
          Engineering and cybersecurity are not destinations with finite end states — they are lifelong disciplines. As I continue developing my technical foundation, my future trajectory focuses on four clear milestones:
        </p>
      </div>

      {/* Ambitions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">
        {ambitions.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, borderColor: "#ff263b" }}
              className="p-5 sm:p-6 rounded-sm border border-red-950/60 bg-[#0c0508] shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-red-950/50">
                  <span className="font-mono text-[9px] tracking-widest text-red-400 font-semibold uppercase">
                    FUTURE AMBITION // 0{i + 1}
                  </span>
                  <Icon size={16} className="text-red-500" />
                </div>

                <span className="font-mono text-[8px] tracking-[0.2em] text-neutral-500 uppercase block mb-1">
                  {item.focus}
                </span>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Final Philosophical Creed & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-8 sm:p-10 rounded-sm border border-red-500/80 bg-gradient-to-br from-[#150408] via-[#090305] to-[#120307] text-center shadow-[0_0_50px_rgba(255,38,59,0.25)] space-y-6"
      >
        <div className="w-10 h-10 rounded-full border border-red-500/80 bg-red-950/60 flex items-center justify-center text-red-500 font-serif text-lg shadow-[0_0_15px_#ff263b] mx-auto">
          月
        </div>

        <blockquote
          className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight max-w-2xl mx-auto drop-shadow-md"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;Every skill is a journey. Every system is an opportunity to create something meaningful.&rdquo;
        </blockquote>

        <p className="font-mono text-xs tracking-widest text-neutral-400 uppercase">
          KARUN POOJARI // THE SHINOBI DEVELOPER
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm font-mono text-xs font-semibold tracking-wider text-white bg-gradient-to-r from-[#9e101f] to-[#e11d2e] border border-red-500 shadow-[0_0_25px_rgba(225,29,46,0.4)] hover:shadow-[0_0_40px_rgba(225,29,46,0.7)] hover:scale-[1.02] transition-all duration-300"
          >
            <Send size={14} />
            <span>Collaborate on a Mission</span>
            <ArrowUpRight size={15} />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-sm font-mono text-xs font-medium tracking-wider text-neutral-300 border border-neutral-700/80 bg-black/60 hover:border-red-500 hover:text-white hover:bg-red-950/30 transition-all duration-300"
          >
            <span>Enter Tsukuyomi Projects</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
