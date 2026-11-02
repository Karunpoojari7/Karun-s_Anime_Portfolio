"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { introAudio } from "./IntroAudioEngine";
import IntroDriftingParticles from "./IntroDriftingParticles";
import "./mangekyo-intro.css";

interface MangekyoIntroProps {
  onEnter: () => void;
  onSkip: () => void;
  autoPlay?: boolean;
}

/**
 * KARUN.DEV — Mangekyo Sharingan Awakening Cinematic Introduction.
 * Uses the genuine 4K reference artwork as the hero visual.
 * Exactly ONE Enter button, ZERO duplicate elements, ZERO blur filters, NO browser tooltips.
 */
export default function MangekyoIntro({
  onEnter,
  onSkip,
  autoPlay = true,
}: MangekyoIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const finish = useCallback(
    (kind: "enter" | "skip") => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      introAudio.stopAll();

      if (kind === "enter") {
        introAudio.playEnterTransition();
        setTimeout(() => {
          setIsVisible(false);
          onEnter();
        }, 400);
      } else {
        setIsVisible(false);
        onSkip();
      }
    },
    [isTransitioning, onEnter, onSkip]
  );

  const toggleAudio = useCallback(async () => {
    const video = videoRef.current;
    const next = !audioEnabled;
    setAudioEnabled(next);
    introAudio.setMuted(!next);

    if (video) {
      video.muted = !next;
    }

    if (next) {
      introAudio.startAtmosphere();
      if (video) {
        try {
          await video.play();
        } catch {
          // Handled gracefully
        }
      }
    }
  }, [audioEnabled]);

  // Keyboard navigation: Escape = Skip, Enter = Enter
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish("skip");
      }
      if (event.key === "Enter" && isVisible) {
        event.preventDefault();
        finish("enter");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [finish, isVisible]);

  if (!isVisible) return null;

  return (
    <main
      className={`mangekyo-intro transition-opacity duration-400 ${
        isTransitioning ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="KARUN.DEV Mangekyo Sharingan Introduction"
    >
      {/* 1. HERO 4K REFERENCE ARTWORK (Zero distortion, zero extra layers) */}
      {hasVideoError ? (
        <img
          className="mangekyo-intro__media"
          src="/images/mangekyo-intro.png"
          alt="KARUN.DEV Mangekyo Sharingan Hero Artwork"
        />
      ) : (
        <video
          ref={videoRef}
          className="mangekyo-intro__media"
          autoPlay={autoPlay}
          muted={!audioEnabled}
          playsInline
          loop
          preload="auto"
          poster="/images/mangekyo-intro.png"
          onError={() => setHasVideoError(true)}
        >
          <source src="/video/mangekyo-intro-4k.mp4" type="video/mp4" />
        </video>
      )}

      {/* 2. SUBTLE DRIFTING RED EMBERS (Canvas only — zero fake crows) */}
      <IntroDriftingParticles />

      {/* 3. ACCESSIBLE INTERACTIVE CONTROLS (NO browser tooltips, exactly ONE Enter button) */}
      {/* Top-Left Audio Toggle */}
      <button
        type="button"
        className="mangekyo-intro__ctrl mangekyo-intro__audio"
        onClick={toggleAudio}
        aria-label={audioEnabled ? "Mute intro audio" : "Enable intro audio"}
      />

      {/* Top-Right Skip Intro */}
      <button
        type="button"
        className="mangekyo-intro__ctrl mangekyo-intro__skip"
        onClick={() => finish("skip")}
        aria-label="Skip introduction"
      />

      {/* Center EXACTLY ONE Enter Button */}
      <button
        type="button"
        className="mangekyo-intro__ctrl mangekyo-intro__enter"
        onClick={() => finish("enter")}
        aria-label="Enter portfolio"
      />

      {/* Screen Reader Feedback */}
      <span className="mangekyo-intro__sr-only" aria-live="polite">
        {audioEnabled ? "Intro audio enabled" : "Intro audio muted"}
      </span>
    </main>
  );
}
