"use client";
import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

export type IntroStage =
  | "darkness"      // Stage 1 (0 - 1.2s)
  | "awakening"     // Stage 2 (1.2 - 3.0s)
  | "environment"   // Stage 3 (3.0 - 4.8s)
  | "title"         // Stage 4 (4.8 - 6.2s)
  | "idle"          // Stage 5 (6.2s+)
  | "transitioning" // Enter button clicked (camera push, red flare, crows scatter)
  | "complete";     // Intro unmounted

interface TimelineContextValue {
  stage: IntroStage;
  isIdle: boolean;
  isAwakened: boolean;
  isTransitioning: boolean;
  soundEnabled: boolean;
  toggleSound: () => void;
  enterTsukuyomi: () => void;
  skipIntro: () => void;
  mouseParallax: { x: number; y: number };
}

const TimelineContext = createContext<TimelineContextValue | null>(null);

export function useIntroTimeline() {
  const ctx = useContext(TimelineContext);
  if (!ctx) throw new Error("useIntroTimeline must be used within IntroTimelineProvider");
  return ctx;
}

export function IntroTimelineProvider({
  children,
  onComplete,
}: {
  children: React.ReactNode;
  onComplete?: () => void;
}) {
  const [stage, setStage] = useState<IntroStage>("darkness");
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [mouseParallax, setMouseParallax] = useState({ x: 0, y: 0 });
  const timersRef = useRef<number[]>([]);

  // Parallax tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMouseParallax({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Coordinated timeline sequence
  useEffect(() => {
    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStage("idle");
      return;
    }

    const t1 = window.setTimeout(() => setStage("awakening"), 1200);
    const t2 = window.setTimeout(() => setStage("environment"), 2900);
    const t3 = window.setTimeout(() => setStage("title"), 4600);
    const t4 = window.setTimeout(() => setStage("idle"), 6200);

    timersRef.current = [t1, t2, t3, t4];

    return () => {
      timersRef.current.forEach(window.clearTimeout);
    };
  }, []);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => !prev);
  }, []);

  const enterTsukuyomi = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    setStage("transitioning");
    const t = window.setTimeout(() => {
      setStage("complete");
      onComplete?.();
    }, 1300);
    timersRef.current.push(t);
  }, [onComplete]);

  const skipIntro = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    setStage("complete");
    onComplete?.();
  }, [onComplete]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        skipIntro();
      } else if (e.key === "Enter" && stage === "idle") {
        enterTsukuyomi();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [skipIntro, enterTsukuyomi, stage]);

  const isIdle = stage === "idle";
  const isAwakened = stage !== "darkness";
  const isTransitioning = stage === "transitioning";

  return (
    <TimelineContext.Provider
      value={{
        stage,
        isIdle,
        isAwakened,
        isTransitioning,
        soundEnabled,
        toggleSound,
        enterTsukuyomi,
        skipIntro,
        mouseParallax,
      }}
    >
      {children}
    </TimelineContext.Provider>
  );
}

