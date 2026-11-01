"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ShieldCheck, BrainCircuit, Sparkles, Terminal } from "lucide-react";
import { projects } from "@/lib/projects";
import ItachiIntro from "@/components/ItachiIntro";
import ShinobiHero from "@/components/hero/ShinobiHero";
import MissionStats from "@/components/hero/MissionStats";
import TsukuyomiProjects from "@/components/projects/TsukuyomiProjects";
import NinjutsuSpecializations from "@/components/arsenal/NinjutsuSpecializations";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  // 4 premier featured missions across domains
  const featured = projects.filter((p) =>
    ["bayora-sec", "gmu-connect", "jewellery-website", "resume-gap-ai"].includes(p.slug)
  );

  return (
    <div className="homepage-root">
      {/* Cinematic Itachi Mangekyo Intro Screen */}
      {showIntro && <ItachiIntro onComplete={() => setShowIntro(false)} />}

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
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="body-large">
            I&apos;m Karun Poojari, an MCA Cybersecurity scholar at GM University with a foundation in frontend craftsmanship and a deliberate focus on full-stack architecture, applied artificial intelligence, and defensive cybersecurity operations.
          </p>
          <Link href="/about" className="text-link">
            Read the five-chapter story <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* Section: Cinematic Itachi Tsukuyomi Mission Dimension (9 Orbital Scrolls) */}
      <TsukuyomiProjects />

      {/* Section: Three Paths of the Shinobi (Ninjutsu Specializations) */}
      <NinjutsuSpecializations />

      {/* Closing Open Channel CTA */}
      <section className="closing-cta section-wrap">
        <p className="eyebrow">OPEN DISPATCH</p>
        <h2>
          Have a challenge<br />
          worth <em>solving?</em>
        </h2>
        <p className="closing-desc">
          Available for software engineering roles, defensive security operations, freelance technical consulting, and collaborative research initiatives.
        </p>
        <div className="closing-actions">
          <Link href="/contact" className="button button-primary">
            Start a Conversation <ArrowUpRight size={17} />
          </Link>
          <a
            href="https://github.com/Karunpoojari7"
            target="_blank"
            rel="noreferrer"
            className="button button-ghost"
          >
            Explore GitHub Repositories
          </a>
        </div>
      </section>
    </div>
  );
}
