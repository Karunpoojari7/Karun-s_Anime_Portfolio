"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, BrainCircuit, ShieldCheck, Terminal, Compass, Eye, Sparkles } from "lucide-react";

export default function About() {
  const [selectedMind, setSelectedMind] = useState<"dev" | "ai" | "sec">("dev");

  return (
    <div className="about-page-root">
      {/* Background Subtle Ambience */}
      <div className="about-ambient-glow" />

      <div className="section-wrap about-container">
        {/* Header */}
        <header className="about-header">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="pulse-dot" /> THE PERSON BEHIND THE CODE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="page-title"
          >
            Quiet focus.<br />
            <em>Ambitious thinking.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="page-lead"
          >
            A five-chapter journey through origins, technical disciplines, operating philosophy, current engineering missions, and future horizons.
          </motion.p>
        </header>

        {/* ============================================================
            CHAPTER 1: THE BEGINNING
           ============================================================ */}
        <section className="story-chapter chapter-one">
          <div className="chapter-label-bar">
            <span className="chapter-tag">CHAPTER 01</span>
            <span className="chapter-name">THE BEGINNING</span>
          </div>

          <div className="chapter-grid">
            <motion.div
              className="chapter-content-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2>The curiosity that sparked the flame.</h2>
              <p className="chapter-text">
                I&apos;m Karun Poojari, a computer applications postgraduate specializing in <b>Cybersecurity at GM University</b>. My journey into technology started with a simple fascination: discovering how raw logic and lines of syntax could breathe life into responsive, tangible digital interfaces.
              </p>
              <p className="chapter-text">
                Starting with modern frontend engineering, I spent countless hours crafting user interfaces, mastering state workflows, and understanding the subtleties of clean layout systems. But frontend was only the outer gate.
              </p>
              <p className="chapter-text">
                As my systems grew more complex, I became captivated by what happens behind the scenes: how databases maintain integrity, how machine learning models extract signal from noise, and most critically — how vulnerable modern software becomes when security is treated as an afterthought.
              </p>
            </motion.div>

            <motion.div
              className="chapter-visual-accent"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="shinobi-crest-box">
                <span className="kanji-watermark">忍</span>
                <div className="crest-details">
                  <b>FOUNDATION ARCHIVE</b>
                  <p>GM University · MCA Cybersecurity</p>
                  <div className="crest-divider" />
                  <p className="crest-quote">
                    &ldquo;Knowledge begins by questioning the surface and seeking the architecture beneath.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            CHAPTER 2: THE THREE MINDS (Interactive Environments)
           ============================================================ */}
        <section className="story-chapter chapter-two">
          <div className="chapter-label-bar">
            <span className="chapter-tag">CHAPTER 02</span>
            <span className="chapter-name">THE THREE MINDS — TRIAD OF DISCIPLINES</span>
          </div>

          <div className="three-minds-wrapper">
            <p className="minds-intro-text">
              Like the tripartite tomoe of the Sharingan, my technical identity is balanced across three complementary disciplines. Select an environment to inspect the mindset and interactive architecture:
            </p>

            {/* Selector Tabs */}
            <div className="minds-nav-buttons">
              <button
                type="button"
                className={`mind-tab-btn ${selectedMind === "dev" ? "active" : ""}`}
                onClick={() => setSelectedMind("dev")}
              >
                <Code2 size={16} /> DEVELOPMENT
              </button>
              <button
                type="button"
                className={`mind-tab-btn ${selectedMind === "ai" ? "active" : ""}`}
                onClick={() => setSelectedMind("ai")}
              >
                <BrainCircuit size={16} /> ARTIFICIAL INTELLIGENCE
              </button>
              <button
                type="button"
                className={`mind-tab-btn ${selectedMind === "sec" ? "active" : ""}`}
                onClick={() => setSelectedMind("sec")}
              >
                <ShieldCheck size={16} /> CYBERSECURITY
              </button>
            </div>

            {/* Interactive Domain Canvas Area */}
            <div className="mind-interactive-stage">
              <AnimatePresence mode="wait">
                {selectedMind === "dev" && (
                  <motion.div
                    key="dev"
                    className="mind-view-panel dev-theme"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mind-copy">
                      <span className="mind-category">ENGINEERING ARCHITECTURE</span>
                      <h3>Full-Stack & Systems Creation</h3>
                      <p>
                        Building modern, resilient web experiences with React, Next.js, TypeScript, and robust API backends. I focus on modular components, clean data serialization, and intuitive ergonomics.
                      </p>
                      <ul className="mind-focus-list">
                        <li>High-performance server-side & client-side rendering</li>
                        <li>RESTful APIs, relational schemas (PostgreSQL) and caching (Redis)</li>
                        <li>Responsive layouts, smooth accessibility, and production deployment standards</li>
                      </ul>
                    </div>
                    {/* Simulated Code Architecture Wireframe */}
                    <div className="mind-sim-box dev-sim">
                      <div className="sim-header">
                        <span className="sim-dot red" />
                        <span className="sim-dot yellow" />
                        <span className="sim-dot green" />
                        <span className="sim-title">AppRouter // module.tsx</span>
                      </div>
                      <pre className="sim-code">
                        <code>{`export async function getShinobiContext() {
  const security = await verifyBearerHeader();
  const models = await initializeAiPipelines();
  return { resilient: true, latency: "14ms" };
}`}</code>
                      </pre>
                    </div>
                  </motion.div>
                )}

                {selectedMind === "ai" && (
                  <motion.div
                    key="ai"
                    className="mind-view-panel ai-theme"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mind-copy">
                      <span className="mind-category">INTELLIGENT SYSTEMS</span>
                      <h3>Applied Artificial Intelligence</h3>
                      <p>
                        Exploring practical applications of machine learning, automated resume-gap extraction, medical imaging analysis, and robust LLM orchestration.
                      </p>
                      <ul className="mind-focus-list">
                        <li>Applied machine learning pipelines in Python</li>
                        <li>Intelligent document processing and feature extraction</li>
                        <li>Investigating adversarial prompt injection and model evaluation</li>
                      </ul>
                    </div>
                    {/* Simulated Neural Network Waves */}
                    <div className="mind-sim-box ai-sim">
                      <div className="sim-header">
                        <span className="sim-title">NEURAL ACTIVATION // TENSORFLOW / OLLAMA</span>
                      </div>
                      <div className="neural-nodes-matrix">
                        <div className="node-layer">
                          <span className="node-pulse active" />
                          <span className="node-pulse active" />
                          <span className="node-pulse" />
                        </div>
                        <div className="node-layer mid">
                          <span className="node-pulse active" />
                          <span className="node-pulse active" />
                          <span className="node-pulse active" />
                          <span className="node-pulse" />
                        </div>
                        <div className="node-layer">
                          <span className="node-pulse active" />
                          <span className="node-pulse active" />
                        </div>
                      </div>
                      <p className="sim-caption">Signal convergence: 98.4% · Zero hallucinations</p>
                    </div>
                  </motion.div>
                )}

                {selectedMind === "sec" && (
                  <motion.div
                    key="sec"
                    className="mind-view-panel sec-theme"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="mind-copy">
                      <span className="mind-category">DEFENSIVE SHIELD</span>
                      <h3>Cybersecurity & SOC Operations</h3>
                      <p>
                        Mastering the defensive mindset: deep packet inspection, anomalous network telemetry detection, DNS protocol scrutiny, and zero-trust verification.
                      </p>
                      <ul className="mind-focus-list">
                        <li>Network packet dissection using Wireshark & TShark</li>
                        <li>TCP handshake tracking, beaconing analysis, and header anomaly hunting</li>
                        <li>SOC log aggregation and cryptographic evidence hashing (SHA-256)</li>
                      </ul>
                    </div>
                    {/* Simulated Network Traffic Monitor */}
                    <div className="mind-sim-box sec-sim">
                      <div className="sim-header">
                        <span className="sim-title">PACKET INSPECTION // eth0 WIRESHARK STREAM</span>
                      </div>
                      <div className="packet-stream-feed">
                        <div className="packet-row"><span className="time">0.001</span><span className="proto">TCP</span> SYN 192.168.1.45:5432 → 10.0.0.1:443 [ACK]</div>
                        <div className="packet-row"><span className="time">0.014</span><span className="proto">DNS</span> Standard Query A secure.gmu.internal</div>
                        <div className="packet-row secure"><span className="time">0.032</span><span className="proto">TLSv1.3</span> Application Data [ENCRYPTED]</div>
                      </div>
                      <div className="sim-badge-alert">DEFENSIVE PERIMETER: INTACT</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* ============================================================
            CHAPTER 3: PHILOSOPHY
           ============================================================ */}
        <section className="story-chapter chapter-three">
          <div className="chapter-label-bar">
            <span className="chapter-tag">CHAPTER 03</span>
            <span className="chapter-name">THE SHINOBI PHILOSOPHY</span>
          </div>

          <motion.div
            className="philosophy-monolith"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="philosophy-kanji-crest">観</div>
            <span className="philosophy-subtext">CORE WORKING CREED</span>
            <blockquote className="philosophy-quote">
              &ldquo;Observe deeply. Think strategically. Build intelligently.&rdquo;
            </blockquote>
            <p className="philosophy-breakdown">
              In anime lore, Itachi Uchiha is revered not simply for his power, but for his emotional control, perceptive clarity, and foresight. In software engineering and cybersecurity, rushing without observation yields brittle code and exploitable vulnerabilities. I approach engineering with deep patience: understanding root requirements, anticipating edge failures, and writing systems designed to endure.
            </p>
          </motion.div>
        </section>

        {/* ============================================================
            CHAPTER 4: WHAT I AM BUILDING
           ============================================================ */}
        <section className="story-chapter chapter-four">
          <div className="chapter-label-bar">
            <span className="chapter-tag">CHAPTER 04</span>
            <span className="chapter-name">WHAT I AM BUILDING</span>
          </div>

          <div className="chapter-grid">
            <div className="chapter-content-card">
              <h2>Translating theory into tangible artifacts.</h2>
              <p className="chapter-text">
                Every project I undertake serves a distinct learning objective. Rather than building clone tutorials, I seek out problems that test specific architectural muscle:
              </p>
              <div className="building-pillars-grid">
                <div className="pillar-item">
                  <b>01 / Institutional Scale</b>
                  <p>Investigating multi-tiered ERP architecture, Redis caching, and relational integrity in GMU Connect 2.0.</p>
                </div>
                <div className="pillar-item">
                  <b>02 / Zero-Trust AI Safety</b>
                  <p>Designing cryptographic evidence verification (SHA-256) and isolated container testing in Bayora Sec.</p>
                </div>
                <div className="pillar-item">
                  <b>03 / Applied Computer Vision</b>
                  <p>Exploring retinal diagnostic challenges and image dataset classification in Diabetic Retinopathy.</p>
                </div>
                <div className="pillar-item">
                  <b>04 / Business Workflows</b>
                  <p>Deploying interactive gold calculators, customer inquiry funnels, and catalog CMS in MGS Jewellery.</p>
                </div>
              </div>
            </div>

            <div className="chapter-visual-accent">
              <div className="mission-counter-card">
                <span className="counter-number">09</span>
                <b>DOCUMENTED MISSIONS</b>
                <p>Public repositories available for code review and inspection.</p>
                <Link href="/projects" className="button button-primary" style={{ marginTop: "20px" }}>
                  Explore All 09 Projects <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            CHAPTER 5: BEYOND THE SCREEN
           ============================================================ */}
        <section className="story-chapter chapter-five">
          <div className="chapter-label-bar">
            <span className="chapter-tag">CHAPTER 05</span>
            <span className="chapter-name">BEYOND THE SCREEN — FUTURE AMBITIONS</span>
          </div>

          <motion.div
            className="ambitions-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2>The long game: Where this path leads.</h2>
            <p className="chapter-text">
              Engineering and defensive security are lifelong disciplines. As I continue developing my technical foundation, my future ambitions center on three clear trajectories:
            </p>

            <div className="ambitions-list-grid">
              <div className="ambition-tile">
                <div className="ambition-header">
                  <Compass className="ambition-icon" size={20} />
                  <b>Cybersecurity Consulting</b>
                </div>
                <p>
                  Aspiring to conduct comprehensive vulnerability assessments, penetration audits, and architecture reviews for modern enterprises.
                </p>
              </div>

              <div className="ambition-tile">
                <div className="ambition-header">
                  <ShieldCheck className="ambition-icon" size={20} />
                  <b>AI Security Research</b>
                </div>
                <p>
                  Investigating defensive protections against prompt injections, model extraction attacks, training data poisoning, and generative threats.
                </p>
              </div>

              <div className="ambition-tile">
                <div className="ambition-header">
                  <Eye className="ambition-icon" size={20} />
                  <b>Community Cyber Awareness</b>
                </div>
                <p>
                  Advocating for digital hygiene, practical defensive literacy, and public speaking sessions to protect individuals from social engineering.
                </p>
              </div>
            </div>

            <div className="ambitions-footer-action">
              <Link href="/contact" className="button button-primary">
                Collaborate on a Mission <ArrowUpRight size={17} />
              </Link>
              <Link href="/skills" className="button button-ghost">
                Inspect Technical Arsenal
              </Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
