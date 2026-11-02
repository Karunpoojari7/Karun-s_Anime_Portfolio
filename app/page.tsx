"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShieldCheck, BrainCircuit, Terminal, Sparkles } from "lucide-react";
import { projects } from "@/lib/projects";
import MangekyoIntro from "@/components/intro/MangekyoIntro";
import ShinobiHero from "@/components/hero/ShinobiHero";
import MissionStats from "@/components/hero/MissionStats";
import TsukuyomiProjects from "@/components/projects/TsukuyomiProjects";
import NinjutsuSpecializations from "@/components/arsenal/NinjutsuSpecializations";

export default function Home() {
  const [showIntro, setShowIntro] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    setIsReady(true);
    // Respect user's session navigation: intro plays on initial visit or when ?intro=true is requested
    const hasSeen = sessionStorage.getItem("karun_hg_intro_seen");
    const params = new URLSearchParams(window.location.search);
    const forceIntro = params.get("intro") === "true";

    if (!hasSeen || forceIntro) {
      setShowIntro(true);
    }
  }, []);

  const handleIntroComplete = () => {
    sessionStorage.setItem("karun_hg_intro_seen", "true");
    setShowIntro(false);
  };

  // 4 premier featured missions across domains
  const featured = projects.filter((p) =>
    ["bayora-sec", "gmu-connect", "jewellery-website", "resume-gap-ai"].includes(p.slug)
  );

  return (
    <div className="homepage-root">
      {/* Dedicated Cinematic Mangekyo Sharingan Opening Experience */}
      {isReady && showIntro && (
        <MangekyoIntro onEnter={handleIntroComplete} onSkip={handleIntroComplete} />
      )}

      {/* Hero: Itachi Arrival, Akatsuki Cloak, Crow Vortex */}
      <ShinobiHero />

      {/* Mission Statistics Strip with Counter */}
      <MissionStats />

      {/* Section: The Person Behind The Code Narrative Preview */}
      <section className="section-wrap intro-grid">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="eyebrow">THE PERSON BEHIND THE CODE</p>
          <h2>
            Quiet focus.<br />
            <em>Ambitious thinking.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="body-large">
            I build software with disciplined focus, strategic planning and clean execution.
            My approach combines modern web technologies, applied artificial intelligence and cybersecurity principles.
          </p>
          <Link href="/about" className="text-link">
            Read My Full Story <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* Core Technical Disciplines Preview */}
      <NinjutsuSpecializations />

      {/* Featured Missions Archive */}
      <TsukuyomiProjects />

      {/* Closing Call to Action */}
      <section className="section-wrap closing-cta">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-red-950/60 pt-16 pb-12">
          <div>
            <span className="eyebrow">NEXT MISSION</span>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mt-2">
              Ready to create something <em className="text-red-500 italic">remarkable?</em>
            </h2>
          </div>
          <Link
            href="/contact"
            className="button button-primary shrink-0 self-start sm:self-end"
          >
            <span>Initiate Collaboration</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
