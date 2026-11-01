"use client";
import React, { useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useIntroTimeline } from "./IntroTimeline";

class CinematicSynthesizer {
  private ctx: AudioContext | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private masterGain: GainNode | null = null;

  init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  startDrone() {
    if (!this.ctx || !this.masterGain) return;
    if (this.droneOsc1) return;

    const now = this.ctx.currentTime;
    // Deep sub-bass cinematic drone with subtle binaural beating (48Hz and 51Hz)
    this.droneOsc1 = this.ctx.createOscillator();
    this.droneOsc2 = this.ctx.createOscillator();
    this.droneGain = this.ctx.createGain();

    this.droneOsc1.type = "sine";
    this.droneOsc1.frequency.setValueAtTime(48, now);

    this.droneOsc2.type = "sawtooth";
    this.droneOsc2.frequency.setValueAtTime(51, now);

    // Filter to keep only warm, eerie sub rumble
    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(110, now);

    this.droneGain.gain.setValueAtTime(0.001, now);
    this.droneGain.gain.exponentialRampToValueAtTime(0.28, now + 2.5);

    this.droneOsc1.connect(filter);
    this.droneOsc2.connect(filter);
    filter.connect(this.droneGain);
    this.droneGain.connect(this.masterGain);

    this.droneOsc1.start();
    this.droneOsc2.start();
  }

  playAwakeningImpact() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // 1. Deep low-frequency sub-drop
    const subOsc = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    subOsc.type = "sine";
    subOsc.frequency.setValueAtTime(120, now);
    subOsc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

    subGain.gain.setValueAtTime(0.4, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    subOsc.connect(subGain);
    subGain.connect(this.masterGain);
    subOsc.start(now);
    subOsc.stop(now + 1.5);

    // 2. Ethereal resonant harmonic chime (Sharingan ocular resonance)
    [330, 495, 660].forEach((freq, idx) => {
      if (!this.ctx || !this.masterGain) return;
      const chimeOsc = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();

      chimeOsc.type = "sine";
      chimeOsc.frequency.setValueAtTime(freq, now + idx * 0.08);

      chimeGain.gain.setValueAtTime(0.12, now + idx * 0.08);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      chimeOsc.connect(chimeGain);
      chimeGain.connect(this.masterGain);
      chimeOsc.start(now + idx * 0.08);
      chimeOsc.stop(now + 2.0);
    });
  }

  playCrowWhoosh() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Filtered noise swoosh simulating wings cutting air
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(350, now);
    filter.frequency.exponentialRampToValueAtTime(150, now + 0.6);
    filter.Q.setValueAtTime(3, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
    noise.stop(now + 0.8);
  }

  stopAll() {
    if (this.droneGain && this.ctx) {
      this.droneGain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
      setTimeout(() => {
        try {
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.droneOsc1 = null;
          this.droneOsc2 = null;
        } catch {
          // ignore
        }
      }, 600);
    }
  }

  destroy() {
    this.stopAll();
    if (this.ctx && this.ctx.state !== "closed") {
      this.ctx.close().catch(() => {});
      this.ctx = null;
    }
  }
}

export default function IntroAudio() {
  const { soundEnabled, toggleSound, stage } = useIntroTimeline();
  const synthRef = useRef<CinematicSynthesizer | null>(null);
  const audioFileRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    synthRef.current = new CinematicSynthesizer();
    return () => {
      synthRef.current?.destroy();
      audioFileRef.current?.pause();
    };
  }, []);

  // Handle stage sound cues
  useEffect(() => {
    if (!soundEnabled || !synthRef.current) return;

    if (stage === "awakening") {
      synthRef.current.playAwakeningImpact();
    } else if (stage === "environment" || stage === "transitioning") {
      synthRef.current.playCrowWhoosh();
    }
  }, [stage, soundEnabled]);

  const handleToggle = () => {
    if (!soundEnabled) {
      synthRef.current?.init();
      synthRef.current?.startDrone();

      // Also attempt to play the existing WAV file as layered atmosphere if available
      try {
        if (!audioFileRef.current) {
          audioFileRef.current = new Audio("/audio/sharingan-awakening.wav");
          audioFileRef.current.loop = true;
          audioFileRef.current.volume = 0.25;
        }
        audioFileRef.current.play().catch(() => {
          // Ignore autoplay restriction or missing file safely
        });
      } catch {
        // Safe fallback
      }
      toggleSound();
    } else {
      synthRef.current?.stopAll();
      audioFileRef.current?.pause();
      toggleSound();
    }
  };

  return (
    <button
      type="button"
      className="sound-toggle-btn"
      onClick={handleToggle}
      aria-label={soundEnabled ? "Mute audio" : "Enable cinematic sound"}
      title={soundEnabled ? "Mute sound" : "Enable atmospheric sound"}
    >
      <div className="sound-toggle-icon">
        {soundEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
      </div>
      <span className="sound-toggle-label">{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
    </button>
  );
}

