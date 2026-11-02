"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./mangekyo-intro.css";

type MangekyoIntroProps = {
  onEnter?: () => void;
  onSkip?: () => void;
  /** Set false when the intro should not auto-play (for example, on a data saver connection). */
  autoPlay?: boolean;
};

/**
 * Full-screen KARUN.DEV intro. The visual contains the title artwork; the
 * transparent, accessible hit areas make the baked-in ENTER/AUDIO/SKIP UI work.
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

  const finish = useCallback(
    (kind: "enter" | "skip") => {
      setIsVisible(false);
      if (kind === "enter") onEnter?.();
      else onSkip?.();
    },
    [onEnter, onSkip]
  );

  const toggleAudio = useCallback(async () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !audioEnabled;
    setAudioEnabled(next);
    video.muted = !next;
    if (next) {
      try {
        await video.play();
      } catch {
        setAudioEnabled(false);
        video.muted = true;
      }
    }
  }, [audioEnabled]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") finish("skip");
      if (event.key === "Enter" && isVisible) finish("enter");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [finish, isVisible]);

  if (!isVisible) return null;

  return (
    <main
      className="mangekyo-intro"
      aria-label="KARUN.DEV Mangekyo Sharingan introduction"
    >
      {hasVideoError ? (
        <img
          className="mangekyo-intro__media"
          src="/images/mangekyo-intro.png"
          alt="KARUN.DEV Mangekyo Sharingan intro artwork"
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

      <div className="mangekyo-intro__vignette" aria-hidden="true" />
      <div className="mangekyo-intro__grain" aria-hidden="true" />

      {/* Hit areas are aligned over the controls already present in the artwork. */}
      <button
        className="mangekyo-intro__hit mangekyo-intro__audio"
        onClick={toggleAudio}
        aria-label={audioEnabled ? "Mute intro audio" : "Enable intro audio"}
        title={audioEnabled ? "Mute audio" : "Enable audio"}
      />
      <button
        className="mangekyo-intro__hit mangekyo-intro__skip"
        onClick={() => finish("skip")}
        aria-label="Skip intro"
        title="Skip intro"
      />
      <button
        className="mangekyo-intro__hit mangekyo-intro__enter"
        onClick={() => finish("enter")}
        aria-label="Enter portfolio"
        title="Enter portfolio"
      />

      <span className="mangekyo-intro__sr-only" aria-live="polite">
        {audioEnabled ? "Intro audio enabled" : "Intro audio muted"}
      </span>
    </main>
  );
}
