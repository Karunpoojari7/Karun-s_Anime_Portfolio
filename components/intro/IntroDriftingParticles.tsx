"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface IntroParticlesProps {
  showCrows?: boolean;
}

/**
 * Lightweight canvas-based drifting red embers and the two iconic silhouette crows
 * flanking the scene matching Reference Image 1.
 */
export default function IntroDriftingParticles({
  showCrows = true,
}: IntroParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Generate 32 delicate floating embers/petals
    const embers = Array.from({ length: 32 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.8 + 1.2,
      vx: (Math.random() - 0.3) * 0.8,
      vy: Math.random() * 0.9 + 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      embers.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = Math.max(
          0.1,
          p.alpha + Math.sin(p.pulse) * 0.25
        );

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 38, 59, ${currentAlpha})`;
        ctx.shadowBlur = p.size * 3;
        ctx.shadowColor = "#ff1e38";
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Flanking Crows Matching Reference Image 1 */}
      {showCrows && (
        <>
          {/* Left Crow - Flying upwards with wings spread */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{
              opacity: 0.9,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 1.2, ease: "easeOut" },
              y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
            }}
            className="absolute left-[6%] sm:left-[9%] md:left-[11%] bottom-[22%] sm:bottom-[24%] w-24 sm:w-28 md:w-32 aspect-square pointer-events-none"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-black drop-shadow-[0_0_12px_rgba(255,38,59,0.3)]"
              fill="currentColor"
            >
              <path d="M 15 55 Q 35 30 65 35 Q 85 45 92 60 Q 75 55 58 65 Q 45 75 32 82 Q 38 68 28 62 Z" />
              <path d="M 35 30 Q 20 15 5 22 Q 18 32 32 40 Z" />
              <path d="M 65 35 Q 80 18 95 12 Q 88 28 75 42 Z" />
            </svg>
          </motion.div>

          {/* Right Crow - Gliding into distance */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{
              opacity: 0.85,
              x: 0,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: { duration: 1.2, delay: 0.2, ease: "easeOut" },
              y: { repeat: Infinity, duration: 5.2, ease: "easeInOut" },
            }}
            className="absolute right-[6%] sm:right-[9%] md:right-[11%] bottom-[25%] sm:bottom-[27%] w-20 sm:w-24 md:w-28 aspect-square pointer-events-none"
          >
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-black drop-shadow-[0_0_10px_rgba(255,38,59,0.25)]"
              fill="currentColor"
            >
              <path d="M 20 60 Q 40 40 70 45 Q 88 52 90 65 Q 75 62 60 70 Q 45 78 35 85 Q 40 72 30 66 Z" />
              <path d="M 40 40 Q 25 22 10 28 Q 22 38 35 46 Z" />
              <path d="M 70 45 Q 85 28 98 22 Q 92 38 78 50 Z" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
}
