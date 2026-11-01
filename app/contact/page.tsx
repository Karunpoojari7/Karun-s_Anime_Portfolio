"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Instagram, CheckCircle2, AlertCircle, ArrowUpRight, Mail, MapPin } from "lucide-react";

export default function Contact() {
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
            <span className="pulse-dot" /> GET IN TOUCH // DIRECT CONTACT
          </div>
          <h1 className="page-title">
            Have a project or opportunity in mind? <em>Let&apos;s talk.</em>
          </h1>
          <p className="page-lead">
            I&apos;m always open to discussing software engineering roles, internships, web development projects, and technical collaborations.
          </p>
        </header>

        {/* Real Contact Interface */}
        <motion.div
          className="real-contact-terminal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="terminal-topbar">
            <div className="terminal-status-indicator">
              <span className="status-dot-green" /> DIRECT COMMUNICATION CHANNEL OPEN
            </div>
            <span className="font-mono text-xs text-neutral-400">KARUN.DEV</span>
          </div>

          <div className="contact-grid-layout">
            {/* Left Column: Direct Links & Info */}
            <div className="contact-dossier-col">
              <div className="dossier-card">
                <h3>Direct Channels</h3>
                <p className="dossier-text">
                  Whether you are hiring for an engineering role, looking for a collaborator, or have questions about my projects — feel free to send a message.
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
                      <b>GitHub Profile</b>
                      <small>Explore repositories & source code</small>
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
                      <small>Professional network and background</small>
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
                      <small>Personal & creative updates</small>
                    </div>
                    <ArrowUpRight size={16} className="channel-arrow" />
                  </a>
                </div>

                <div className="location-creed-badge">
                  <span className="badge-pin">📍</span>
                  <div>
                    <b>LOCATION: KARNATAKA, INDIA</b>
                    <small>Open to remote work and relocation</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="contact-form-col">
              <form className="shinobi-contact-form" onSubmit={handleSubmit}>
                {/* Inquiry Type Chips */}
                <div className="form-group">
                  <label className="form-label">INTEREST / TOPIC</label>
                  <div className="inquiry-chips-row">
                    {[
                      "Website development",
                      "Full-stack development",
                      "AI integration",
                      "Cybersecurity",
                      "Job opportunity",
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
                      placeholder="e.g. Alex Rivera"
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
                      placeholder="e.g. alex@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">
                    SUBJECT *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="e.g. Software Engineering Opportunity / Project Inquiry"
                    className="form-input"
                  />
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, team, or opportunity..."
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
                    "Sending Message..."
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                {/* Form feedback statuses */}
                <AnimatePresence>
                  {formState === "sent" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="form-feedback-message success"
                    >
                      <CheckCircle2 size={18} />
                      <div>
                        <b>Message sent successfully.</b>
                        <p>Thank you for reaching out. I will reply to your email soon.</p>
                      </div>
                    </motion.div>
                  )}

                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="form-feedback-message notice"
                    >
                      <AlertCircle size={18} />
                      <div>
                        <b>Message noted.</b>
                        <p>
                          If the email server is in preview mode, you can also reach me directly via GitHub or LinkedIn.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
