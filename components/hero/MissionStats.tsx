"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedStat({ target, label }: { target: number | string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || typeof target === "string") return;

    let start = 0;
    const duration = 1400; // ms
    const stepTime = Math.max(Math.floor(duration / Number(target)), 40);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= Number(target)) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="stat-card">
      <motion.b
        className="stat-number"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {typeof target === "string" ? target : String(count).padStart(2, "0")}
      </motion.b>
      <span className="stat-label">{label}</span>
      <div className="stat-corner-accent" />
    </div>
  );
}

export default function MissionStats() {
  return (
    <section className="section-wrap stats-section" aria-label="Mission Statistics">
      <div className="stats-grid">
        <AnimatedStat target={9} label="DOCUMENTED PROJECTS" />
        <AnimatedStat target={3} label="CORE FOCUS DOMAINS" />
        <AnimatedStat target={2} label="EDUCATION MILESTONES" />
        <AnimatedStat target={1} label="VERIFIED INTERNSHIP" />
      </div>
    </section>
  );
}
