"use client";
import React from "react";
import { useIntroTimeline } from "./IntroTimeline";

interface CrowConfig {
  id: string;
  depth: "distant" | "mid" | "foreground";
  startX: number; // in %
  startY: number; // in %
  scale: number;
  duration: number; // flight duration in s
  delay: number; // flight delay in s
  flapRate: number; // wing beat rate in s (0.35s - 0.55s)
  direction: "ltr" | "rtl";
  blur: number; // px
  opacity: number;
  yVariance: number; // vertical sway px
}

const CROW_CONFIGS: CrowConfig[] = [
  // Distant crows circling the blood moon and Torii gate
  {
    id: "crow-moon-1",
    depth: "distant",
    startX: 65,
    startY: 62,
    scale: 0.32,
    duration: 14,
    delay: -4,
    flapRate: 0.42,
    direction: "ltr",
    blur: 1.5,
    opacity: 0.7,
    yVariance: -25,
  },
  {
    id: "crow-moon-2",
    depth: "distant",
    startX: 74,
    startY: 55,
    scale: 0.26,
    duration: 16,
    delay: -9,
    flapRate: 0.38,
    direction: "rtl",
    blur: 2.0,
    opacity: 0.6,
    yVariance: 18,
  },
  {
    id: "crow-torii-1",
    depth: "distant",
    startX: 82,
    startY: 70,
    scale: 0.35,
    duration: 12,
    delay: -2,
    flapRate: 0.45,
    direction: "ltr",
    blur: 1.2,
    opacity: 0.75,
    yVariance: -15,
  },

  // Midground crows cutting across the Tsukuyomi haze
  {
    id: "crow-mid-1",
    depth: "mid",
    startX: -15,
    startY: 58,
    scale: 0.62,
    duration: 9.5,
    delay: 0,
    flapRate: 0.44,
    direction: "ltr",
    blur: 0.4,
    opacity: 0.9,
    yVariance: 35,
  },
  {
    id: "crow-mid-2",
    depth: "mid",
    startX: 110,
    startY: 44,
    scale: 0.55,
    duration: 11,
    delay: -3.5,
    flapRate: 0.48,
    direction: "rtl",
    blur: 0.6,
    opacity: 0.85,
    yVariance: -40,
  },
  {
    id: "crow-mid-3",
    depth: "mid",
    startX: -20,
    startY: 72,
    scale: 0.7,
    duration: 8.5,
    delay: -5,
    flapRate: 0.4,
    direction: "ltr",
    blur: 0.2,
    opacity: 0.95,
    yVariance: -28,
  },

  // Foreground dramatic crows sweeping near the camera
  {
    id: "crow-fore-1",
    depth: "foreground",
    startX: -30,
    startY: 76,
    scale: 1.25,
    duration: 6.2,
    delay: -1.2,
    flapRate: 0.36,
    direction: "ltr",
    blur: 0,
    opacity: 1.0,
    yVariance: -65,
  },
  {
    id: "crow-fore-2",
    depth: "foreground",
    startX: 120,
    startY: 32,
    scale: 1.1,
    duration: 7.0,
    delay: -4.0,
    flapRate: 0.38,
    direction: "rtl",
    blur: 0.8,
    opacity: 0.95,
    yVariance: 50,
  },
];

export default function CrowAnimation() {
  const { stage, isTransitioning } = useIntroTimeline();
  const showCrows = stage !== "darkness" && stage !== "awakening";

  return (
    <div
      className={`crow-animation-viewport ${showCrows ? "active" : ""} ${
        isTransitioning ? "transitioning-scatter" : ""
      }`}
      aria-hidden="true"
    >
      {CROW_CONFIGS.map((cfg) => {
        const isRtl = cfg.direction === "rtl";
        const mirrorScale = isRtl ? -cfg.scale : cfg.scale;

        return (
          <div
            key={cfg.id}
            className={`crow-flight-tracker crow-${cfg.depth} ${cfg.id}`}
            style={{
              top: `${cfg.startY}%`,
              animationDuration: `${cfg.duration}s`,
              animationDelay: `${cfg.delay}s`,
              filter: cfg.blur > 0 ? `blur(${cfg.blur}px)` : undefined,
              opacity: cfg.opacity,
            }}
          >
            {/* The individual sprite runner with authentic 8-frame flap cycle */}
            <div
              className="crow-sprite"
              style={{
                transform: `scale(${mirrorScale}, ${cfg.scale})`,
                animationDuration: `${cfg.flapRate}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

