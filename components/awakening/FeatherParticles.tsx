"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { useIntroTimeline } from "./IntroTimeline";

interface FeatherItem {
  id: number;
  startX: number; // in %
  startY: number; // in %
  scale: number;
  duration: number; // in s
  delay: number; // in s
  swayDuration: number;
  rotationSpeed: number;
  blur: number;
  opacity: number;
}

export default function FeatherParticles() {
  const { stage, isTransitioning } = useIntroTimeline();
  const showFeathers = stage !== "darkness" && stage !== "awakening";

  // Deterministic feather generation
  const feathers: FeatherItem[] = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      startX: (i * 7.7) % 100,
      startY: -10 - (i % 5) * 8,
      scale: 0.35 + ((i % 4) * 0.18), // 0.35 to 0.9
      duration: 7 + ((i * 1.3) % 6), // 7s to 13s
      delay: -(i * 1.1) % 8,
      swayDuration: 2.4 + ((i % 3) * 0.8),
      rotationSpeed: 8 + (i % 6),
      blur: i % 4 === 0 ? 1.2 : 0,
      opacity: 0.65 + ((i % 3) * 0.15),
    }));
  }, []);

  return (
    <div
      className={`feather-particles-viewport ${showFeathers ? "active" : ""} ${
        isTransitioning ? "transitioning-flurry" : ""
      }`}
      aria-hidden="true"
    >
      {feathers.map((f) => (
        <div
          key={f.id}
          className="feather-drift-wrapper"
          style={{
            left: `${f.startX}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            opacity: f.opacity,
            filter: f.blur > 0 ? `blur(${f.blur}px)` : undefined,
          }}
        >
          <div
            className="feather-sway"
            style={{
              animationDuration: `${f.swayDuration}s`,
            }}
          >
            <div
              className="feather-tumble"
              style={{
                width: `${120 * f.scale}px`,
                height: `${120 * f.scale}px`,
                animationDuration: `${f.rotationSpeed}s`,
              }}
            >
              <Image
                src="/assets/itachi/crow-feather.png"
                alt="Drifting crow feather"
                width={128}
                height={128}
                className="feather-img"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

