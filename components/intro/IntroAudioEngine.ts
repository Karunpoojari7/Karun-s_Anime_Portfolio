/**
 * Cinematic Web Audio API Synthesizer for KARUN.DEV Mangekyo Awakening Intro.
 * 100% royalty-free, zero external dependencies, 0 latency, fully responsive.
 */

class IntroAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private ambientGain: GainNode | null = null;
  private isMuted: boolean = false;
  private isRunning: boolean = false;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(
        muted ? 0 : 0.7,
        this.ctx.currentTime,
        0.05
      );
    }
  }

  public startAtmosphere() {
    if (this.isRunning) return;
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain) return;
      this.isRunning = true;

      // 1. Deep Sub-Bass Drone (55Hz sine with slow LFO pulse)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = "sine";
      subOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

      subGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      subGain.gain.exponentialRampToValueAtTime(0.2, this.ctx.currentTime + 3.0);

      subOsc.connect(subGain);
      subGain.connect(this.masterGain);
      subOsc.start();

      // 2. Filtered Wind / Rain Atmospheric Rumble (Pink-like noise)
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(
        1,
        bufferSize,
        this.ctx.sampleRate
      );
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0,
        b1 = 0,
        b2 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.969 * b2 + white * 0.153852;
        output[i] = (b0 + b1 + b2 + white * 0.5362) * 0.04;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;
      noise.loop = true;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(280, this.ctx.currentTime);

      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
      this.ambientGain.gain.exponentialRampToValueAtTime(
        0.18,
        this.ctx.currentTime + 2.5
      );

      noise.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.masterGain);
      noise.start();
    } catch {
      // Audio autoplay policy handled gracefully
    }
  }

  /** Frame 02 (1.0s - 2.0s): Subtle mysterious breath / resonant eye-opening tone */
  public playEyeOpen() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const t = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(160, t);
      osc.frequency.exponentialRampToValueAtTime(320, t + 0.9);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(240, t);
      filter.Q.setValueAtTime(3.0, t);

      gain.gain.setValueAtTime(0.001, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.1);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 1.2);
    } catch {}
  }

  /** Frame 03 (2.0s - 3.0s): Iconic Sharingan Mangekyo Activation Pulse */
  public playMangekyoActivation() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const t = this.ctx.currentTime;

      // Resonant harmonic chime & bell pulse
      const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      freqs.forEach((freq, idx) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq * 0.98, t);
        osc.frequency.exponentialRampToValueAtTime(freq, t + 0.15);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.15 / (idx + 1), t + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 1.5);
      });

      // Sharp activation surge pulse
      const surgeOsc = this.ctx.createOscillator();
      const surgeGain = this.ctx.createGain();
      surgeOsc.type = "sawtooth";
      surgeOsc.frequency.setValueAtTime(440, t);
      surgeOsc.frequency.exponentialRampToValueAtTime(1320, t + 0.25);
      surgeOsc.frequency.exponentialRampToValueAtTime(220, t + 0.8);

      surgeGain.gain.setValueAtTime(0.001, t);
      surgeGain.gain.linearRampToValueAtTime(0.12, t + 0.1);
      surgeGain.gain.exponentialRampToValueAtTime(0.001, t + 0.8);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, t);
      filter.Q.setValueAtTime(5.0, t);

      surgeOsc.connect(filter);
      filter.connect(surgeGain);
      surgeGain.connect(this.masterGain);

      surgeOsc.start(t);
      surgeOsc.stop(t + 0.9);
    } catch {}
  }

  /** Frame 04 (3.0s - 4.0s): Energy Surge Sub-Rumble */
  public playEnergySurge() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const t = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(75, t);
      osc.frequency.exponentialRampToValueAtTime(38, t + 1.0);

      gain.gain.setValueAtTime(0.01, t);
      gain.gain.linearRampToValueAtTime(0.3, t + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 1.3);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 1.4);
    } catch {}
  }

  /** Frame 05 (4.0s - 5.5s): Tsukuyomi Realm Ground Seal Formation Pad */
  public playTsukuyomiPad() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const t = this.ctx.currentTime;

      // Ethereal chord
      const freqs = [146.83, 220.0, 293.66, 440.0]; // D3, A3, D4, A4
      freqs.forEach((freq) => {
        if (!this.ctx || !this.masterGain) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.1, t + 0.6);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 2.3);
      });
    } catch {}
  }

  /** Frame 09: Enter Portal Dimensional Whoosh Transition */
  public playEnterTransition() {
    try {
      this.initContext();
      if (!this.ctx || !this.masterGain || this.isMuted) return;
      const t = this.ctx.currentTime;

      // Heavy Sub Boom
      const boom = this.ctx.createOscillator();
      const boomGain = this.ctx.createGain();
      boom.type = "sine";
      boom.frequency.setValueAtTime(90, t);
      boom.frequency.exponentialRampToValueAtTime(25, t + 1.2);

      boomGain.gain.setValueAtTime(0.4, t);
      boomGain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);

      boom.connect(boomGain);
      boomGain.connect(this.masterGain);
      boom.start(t);
      boom.stop(t + 1.5);

      // Resonant Portal Sweep
      const sweep = this.ctx.createOscillator();
      const sweepGain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      sweep.type = "sawtooth";
      sweep.frequency.setValueAtTime(180, t);
      sweep.frequency.exponentialRampToValueAtTime(980, t + 0.4);
      sweep.frequency.exponentialRampToValueAtTime(110, t + 1.2);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(1400, t);
      filter.Q.setValueAtTime(4.0, t);

      sweepGain.gain.setValueAtTime(0.01, t);
      sweepGain.gain.linearRampToValueAtTime(0.25, t + 0.2);
      sweepGain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);

      sweep.connect(filter);
      filter.connect(sweepGain);
      sweepGain.connect(this.masterGain);
      sweep.start(t);
      sweep.stop(t + 1.3);
    } catch {}
  }

  public stopAll() {
    if (this.masterGain && this.ctx) {
      try {
        this.masterGain.gain.setTargetAtTime(0, this.ctx.currentTime, 0.2);
      } catch {}
    }
    this.isRunning = false;
  }
}

export const introAudio = new IntroAudioEngine();
