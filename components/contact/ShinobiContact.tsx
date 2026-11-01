"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, ArrowUpRight, MapPin } from "lucide-react";
import ContactScroll from "./ContactScroll";
import DriftingLeaves from "@/components/skills/DriftingLeaves";

export default function ShinobiContact() {
  const socialChannels = [
    {
      title: "GitHub",
      subtitle: "Code · Projects · Labs",
      link: "https://github.com/Karunpoojari7",
      icon: <Github size={18} className="text-red-400" />,
    },
    {
      title: "LinkedIn",
      subtitle: "Network · Opportunities",
      link: "https://www.linkedin.com/",
      icon: <Linkedin size={18} className="text-red-400" />,
    },
    {
      title: "Instagram",
      subtitle: "Updates · Creations",
      link: "https://www.instagram.com/",
      icon: <Instagram size={18} className="text-red-400" />,
    },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-72px)] bg-black overflow-hidden flex flex-col justify-between select-none">
      {/* 1. CINEMATIC CLEAN BACKGROUND ARTWORK (Blood Moon, Lake, Torii, Itachi on rock, Lantern, Water) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/itachi/shinobi-contact-backdrop.jpg"
          alt="Shinobi Communication Scene - Clean Backdrop"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon & Floating Lanterns */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 45% 35%, rgba(225, 29, 46, 0.35) 0%, rgba(130, 10, 22, 0.1) 50%, transparent 75%)",
          }}
        />

        {/* Top & Bottom Ambient Edge Blending */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-transparent to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* 2. DRIFTING MAPLE LEAVES LAYER */}
      <DriftingLeaves />

      {/* 3. FOREGROUND CRISP UI — TWO-COLUMN LAYOUT MATCHING REFERENCE IMAGE 3 */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex-1 flex flex-col justify-between py-6 sm:py-8 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center flex-1">
          {/* Left Column: Eyebrow, Heading, Description, 3 Social Cards, Location Badge */}
          <div className="lg:col-span-6 space-y-5 max-w-lg self-start lg:pt-4">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] text-red-500 uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b] animate-pulse" />
              GET IN TOUCH // CONNECT · COLLABORATE · BUILD
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Let&apos;s<br />
              <em className="text-red-500 italic">Collaborate.</em>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed max-w-md"
            >
              Have a project, opportunity, or idea in mind? I&apos;m always open to discussing development, cybersecurity, research, and collaborations.
            </motion.p>

            {/* 3 Social Cards (GitHub, LinkedIn, Instagram) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2.5 pt-2 max-w-sm"
            >
              {socialChannels.map((soc) => (
                <a
                  key={soc.title}
                  href={soc.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between p-3 rounded-lg bg-[#080204]/92 border border-red-950/80 hover:border-red-500/70 hover:bg-red-950/25 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.85)] hover:shadow-[0_0_20px_rgba(225,29,46,0.3)] transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-red-950/40 border border-red-900/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {soc.icon}
                    </div>
                    <div>
                      <div className="font-serif text-xs font-bold text-white group-hover:text-red-400 transition-colors">
                        {soc.title}
                      </div>
                      <div className="font-mono text-[9px] text-neutral-400">
                        {soc.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-neutral-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}

              {/* Location Badge */}
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-black/60 border border-red-950/60 font-mono text-[10px] text-neutral-400">
                <MapPin size={13} className="text-red-500 shrink-0" />
                <div>
                  <span className="text-neutral-200 font-semibold">Karnataka, India</span>
                  <span className="text-neutral-400 ml-2">— Open to remote collaboration</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Exactly ONE Hanging Contact Scroll Form matching Reference Image 3 */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center pt-2">
            <ContactScroll />
          </div>
        </div>

        {/* Minimal Footer Attribution */}
        <div className="pt-4 text-center">
          <p className="text-[10px] font-mono tracking-wider text-neutral-500">
            KARUN H G // TRANSMISSION DISPATCH & SECURE COMMS
          </p>
        </div>
      </div>
    </section>
  );
}
