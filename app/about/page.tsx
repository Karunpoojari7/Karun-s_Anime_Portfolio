"use client";

import React from "react";
import AboutIntroduction from "@/components/about/AboutIntroduction";
import AwakeningChapter from "@/components/about/AwakeningChapter";
import AnbuChapter from "@/components/about/AnbuChapter";
import MangekyoPhilosophy from "@/components/about/MangekyoPhilosophy";
import ArtifactChapter from "@/components/about/ArtifactChapter";
import EternalVision from "@/components/about/EternalVision";

export default function About() {
  return (
    <main className="about-page-root min-h-screen bg-[#070708] text-white selection:bg-red-900 selection:text-white">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 20%, rgba(225, 29, 46, 0.18) 0%, transparent 60%)",
        }}
      />

      <div className="section-wrap relative z-10 pt-10 pb-20">
        {/* Editorial Introduction & Real Portrait */}
        <AboutIntroduction />

        {/* CHAPTER 01: THE AWAKENING */}
        <AwakeningChapter />

        {/* CHAPTER 02: THE ANBU MINDSET */}
        <AnbuChapter />

        {/* CHAPTER 03: THE MANGEKYO PHILOSOPHY (Centrepiece) */}
        <MangekyoPhilosophy />

        {/* CHAPTER 04: TANGIBLE ARTIFACTS */}
        <ArtifactChapter />

        {/* CHAPTER 05: THE ETERNAL VISION */}
        <EternalVision />
      </div>
    </main>
  );
}
