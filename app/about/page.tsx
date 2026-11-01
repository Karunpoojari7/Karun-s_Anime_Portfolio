"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, BrainCircuit, ShieldAlert, Target, GraduationCap, Briefcase, Sparkles } from "lucide-react";

export default function About() {
  const focusAreas = [
    {
      title: "Development",
      category: "WEB & SOFTWARE",
      description: "Building responsive websites, web applications and useful software.",
      icon: <Code2 className="text-red-400" size={20} />,
      tags: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
    },
    {
      title: "Artificial Intelligence",
      category: "MACHINE LEARNING",
      description: "Exploring machine learning, AI applications and intelligent systems.",
      icon: <BrainCircuit className="text-red-400" size={20} />,
      tags: ["Python", "Applied ML", "Computer Vision", "LLM Integration"],
    },
    {
      title: "Cybersecurity",
      category: "SYSTEMS DEFENSE",
      description: "Learning network security, security monitoring and application security.",
      icon: <ShieldAlert className="text-red-400" size={20} />,
      tags: ["Network Analysis", "Wireshark", "SOC Fundamentals", "TCP/IP"],
    },
  ];

  return (
    <main className="min-h-screen bg-[#070708] text-white selection:bg-red-900 selection:text-white">
      {/* Subtle Ambient Red Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 15%, rgba(225, 29, 46, 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-12 pb-24">
        {/* Top Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-red-500 uppercase mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
          ABOUT ME // KARUN H G
        </motion.div>

        {/* Section 1: Introduction & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-16 border-b border-red-950/40">
          {/* Left Column: Heading & Short Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <h1
              className="text-4xl sm:text-6xl font-serif font-bold text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quiet focus.<br />
              <em className="text-red-500 italic">Ambitious thinking.</em>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-200 font-sans leading-relaxed">
              I&apos;m Karun H G, an MCA Cybersecurity student at GM University with a foundation in frontend development and a growing interest in full-stack engineering, artificial intelligence and cybersecurity.
            </p>

            {/* Verified Academic & Background Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded bg-black/60 border border-red-950/60 flex items-center gap-3">
                <GraduationCap size={18} className="text-red-400 shrink-0" />
                <div>
                  <span className="text-neutral-500 text-[10px] block uppercase">Education</span>
                  <span className="text-white font-medium">MCA Cybersecurity · GMU</span>
                </div>
              </div>
              <div className="p-3 rounded bg-black/60 border border-red-950/60 flex items-center gap-3">
                <GraduationCap size={18} className="text-neutral-400 shrink-0" />
                <div>
                  <span className="text-neutral-500 text-[10px] block uppercase">Undergraduate</span>
                  <span className="text-white font-medium">BSc · Sindhi College</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[320px] h-[400px] rounded-t-[140px] rounded-b-md border border-red-600/50 overflow-hidden shadow-[0_0_35px_rgba(225,29,46,0.2)] bg-[#0c0508]">
              <Image
                src="/images/karun-shinobi.png"
                alt="Karun H G"
                fill
                priority
                className="object-cover object-top filter contrast-[1.05]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
              
              {/* Bottom Tag */}
              <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md px-3 py-2 rounded border border-red-500/40 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] tracking-wider text-red-400 uppercase block">Developer</span>
                  <span className="font-serif text-xs font-bold text-white">Karun H G</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section 2: Compact Biography */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 border-b border-red-950/40 space-y-4 max-w-3xl"
        >
          <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase">
            ABOUT ME
          </div>
          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
            I enjoy building useful digital products and learning how technology works behind the scenes. My experience includes frontend development, personal projects and practical cybersecurity learning. I like solving problems, exploring new tools and improving through hands-on work.
          </p>
        </motion.section>

        {/* Section 3: What I'm Focused On */}
        <section className="py-14 border-b border-red-950/40 space-y-8">
          <div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase mb-2">
              CORE DISCIPLINES
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              What I&apos;m focused on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded bg-black/60 border border-red-950/60 hover:border-red-600/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] tracking-wider text-neutral-500 uppercase">
                      {area.category}
                    </span>
                    <div className="p-2 rounded bg-red-950/30 border border-red-900/40">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-white">
                    {area.title}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-red-950/40 font-mono text-[10px] text-neutral-400">
                  {area.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-red-950/20 text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 4: Current Goal & Projects Link */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-gradient-to-r from-red-950/20 via-black to-black p-8 rounded border border-red-950/60"
        >
          <div className="space-y-2 max-w-xl">
            <div className="font-mono text-[10px] tracking-[0.2em] text-red-400 uppercase flex items-center gap-2">
              <Target size={14} /> CURRENT GOAL
            </div>
            <p className="text-base text-neutral-200 font-sans leading-relaxed">
              My goal is to become a skilled technology professional who can build reliable software and help make digital systems more secure.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-semibold tracking-wider transition-colors duration-200 shrink-0 shadow-[0_0_20px_rgba(225,29,46,0.3)]"
          >
            Explore Projects <ArrowUpRight size={16} />
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
