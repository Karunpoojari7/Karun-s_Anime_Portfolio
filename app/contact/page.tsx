"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Instagram, Eye, Sparkles, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  // Illusion broken state
  const [illusionBroken, setIllusionBroken] = useState(false);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [inquiryType, setInquiryType] = useState("Website development");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const form = new FormData(e.currentTarget);
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      inquiryType,
      message: form.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Submission error");

      setFormState("sent");
      e.currentTarget.reset();
    } catch {
      // In development or when Resend key is unconfigured, provide transparent feedback
      setFormState("error");
    }
  }

  return (
    <div className="contact-page-root">
      {/* Background Ambience */}
      <div className="contact-bg-glow" />

      <div className="section-wrap contact-container">
        {/* Header */}
        <header className="contact-header">
          <div className="eyebrow">
            <span className="pulse-dot" /> OPEN DISPATCH // DIRECT TRANSMISSION
          </div>
          <h1 className="page-title">
            Caught in the <em>Genjutsu?</em>
          </h1>
          <p className="page-lead">
            &ldquo;Every connection begins with a decision to see beyond the illusion.&rdquo; Dispel the Tsukuyomi haze to open direct communication.
          </p>
        </header>

        {/* ============================================================
            INTERACTIVE GENJUTSU ILLUSION / BREAK MECHANIC
           ============================================================ */}
        {!illusionBroken ? (
          <motion.div
            className="genjutsu-illusion-chamber"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
            transition={{ duration: 0.6 }}
          >
            {/* Rotating Mangekyo Eye Seal */}
            <div className="illusion-seal-wrap">
              <motion.div
                className="illusion-mangekyo-seal"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="seal-ring outer" />
                <div className="seal-ring inner" />
                <span className="seal-kanji">幻</span>
              </motion.div>
              <div className="seal-crimson-bloom" />
            </div>

            <div className="illusion-message-box">
              <span className="illusion-status-tag">STATUS: SENSORY LOCK ACTIVE</span>
              <h2>You have entered the illusion.</h2>
              <p>
                The digital noise of the web often obscures real intent. Break through the Tsukuyomi filter to establish an uncompromised line of communication.
              </p>

              <div className="illusion-actions">
                <button
                  type="button"
                  className="button button-primary break-illusion-btn"
                  onClick={() => setIllusionBroken(true)}
                >
                  <Eye size={17} /> Break the Genjutsu <ArrowUpRight size={16} />
                </button>
                <button
                  type="button"
                  className="button button-ghost skip-illusion-btn"
                  onClick={() => setIllusionBroken(true)}
                >
                  Skip the Illusion
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          /* ============================================================
              REVEALED CONTACT TERMINAL INTERFACE
             ============================================================ */
          <motion.div
            className="real-contact-terminal"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="terminal-topbar">
              <div className="terminal-status-indicator">
                <span className="status-dot-green" /> ILLUSION DISPELLED · TRANSMISSION CHANNEL OPEN
              </div>
              <button
                type="button"
                className="reset-illusion-btn"
                onClick={() => setIllusionBroken(false)}
                title="Reset Genjutsu"
              >
                Re-enter Illusion
              </button>
            </div>

            <div className="contact-grid-layout">
              {/* Left Column: Direct Dossier & Verified Links */}
              <div className="contact-dossier-col">
                <div className="dossier-card">
                  <h3>Direct Frequency</h3>
                  <p className="dossier-text">
                    Whether you are an engineering manager assembling a team, a founder building an ambitious web app, or an organization conducting security analysis — I welcome purposeful dialogue.
                  </p>

                  <div className="shinobi-channels-list">
                    <a
                      href="https://github.com/Karunpoojari7"
                      target="_blank"
                      rel="noreferrer"
                      className="channel-item"
                    >
                      <Github className="channel-icon" size={18} />
                      <div>
                        <b>GitHub Archive</b>
                        <small>Explore repositories & commits</small>
                      </div>
                      <ArrowUpRight size={16} className="channel-arrow" />
                    </a>

                    <a
                      href="https://www.linkedin.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="channel-item"
                    >
                      <Linkedin className="channel-icon" size={18} />
                      <div>
                        <b>LinkedIn Profile</b>
                        <small>Professional network connection</small>
                      </div>
                      <ArrowUpRight size={16} className="channel-arrow" />
                    </a>

                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="channel-item"
                    >
                      <Instagram className="channel-icon" size={18} />
                      <div>
                        <b>Instagram</b>
                        <small>Creative & visual updates</small>
                      </div>
                      <ArrowUpRight size={16} className="channel-arrow" />
                    </a>
                  </div>

                  <div className="location-creed-badge">
                    <span className="badge-pin">📍</span>
                    <div>
                      <b>BASE LOCATION: KARNATAKA, INDIA</b>
                      <small>Available for remote worldwide collaboration</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Tech Contact Form */}
              <div className="contact-form-col">
                <form className="shinobi-contact-form" onSubmit={handleSubmit}>
                  {/* Inquiry Type Chips */}
                  <div className="form-group">
                    <label className="form-label">INQUIRY DISCIPLINE</label>
                    <div className="inquiry-chips-row">
                      {[
                        "Website development",
                        "Full-stack development",
                        "AI integration",
                        "Cybersecurity",
                        "Freelance collaboration",
                        "Other",
                      ].map((type) => (
                        <button
                          key={type}
                          type="button"
                          className={`chip-btn ${inquiryType === type ? "active" : ""}`}
                          onClick={() => setInquiryType(type)}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="form-row-two-col">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">
                        YOUR NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="e.g. Minato Namikaze"
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        YOUR EMAIL *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="e.g. shinobi@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">
                      SUBJECT / MISSION OBJECTIVE *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="e.g. Collaborating on Full-Stack Application"
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      MESSAGE DETAILS *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Share details regarding your technical challenge, timeline, or project goals..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="button button-primary submit-dispatch-btn"
                    disabled={formState === "sending"}
                  >
                    {formState === "sending" ? (
                      "Transmitting Dispatch..."
                    ) : (
                      <>
                        Dispatch Message <Send size={16} />
                      </>
                    )}
                  </button>

                  {/* Form Feedback Alerts */}
                  {formState === "sent" && (
                    <div className="form-feedback-alert success">
                      <CheckCircle2 size={16} />
                      <span>Dispatch successfully received. I will review and reply promptly.</span>
                    </div>
                  )}

                  {formState === "error" && (
                    <div className="form-feedback-alert error">
                      <AlertCircle size={16} />
                      <div>
                        <b>Direct Email API Not Yet Configured in Environment.</b>
                        <p>
                          To enable automated email delivery, set <code>RESEND_API_KEY</code> and <code>CONTACT_TO_EMAIL</code> in your <code>.env.local</code>. In the meantime, please connect directly via GitHub!
                        </p>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
