"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, Layers, Eye, ShieldAlert, Sparkles, Code2, Database } from "lucide-react";
import { projects, Project } from "@/lib/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"dimension" | "grid">("dimension");

  const currentProject: Project = projects[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Keyboard navigation for Tsukuyomi dimension
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "dimension") return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [viewMode]);

  return (
    <div className="projects-page-root">
      {/* Background Tsukuyomi Ambience */}
      <div className="projects-bg-visual" aria-hidden="true">
        <Image
          src="/assets/itachi/tsukuyomi-bg.jpg"
          alt="Tsukuyomi backdrop"
          fill
          priority
          className="projects-backdrop-img"
        />
        <div className="projects-backdrop-mask" />
      </div>

      <div className="section-wrap projects-container">
        {/* Header with Mode Switcher */}
        <header className="projects-header">
          <div className="header-text-block">
            <div className="eyebrow">
              <span className="pulse-dot" /> FEATURED WORK // 09 PROJECTS
            </div>
            <h1 className="page-title">
              Selected <em>Projects.</em>
            </h1>
            <p className="page-lead">
              A curated collection of web applications, AI tools, and cybersecurity projects. Explore projects one by one or switch to the grid view.
            </p>
          </div>

          {/* View Mode Toggle Button */}
          <div className="view-mode-toggle-wrap">
            <button
              type="button"
              className={`mode-btn ${viewMode === "dimension" ? "active" : ""}`}
              onClick={() => setViewMode("dimension")}
              aria-label="View projects one by one"
            >
              <Eye size={15} /> Interactive View
            </button>
            <button
              type="button"
              className={`mode-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              aria-label="View all projects in grid"
            >
              <Layers size={15} /> All Projects (Grid)
            </button>
          </div>
        </header>

        {/* ============================================================
            MODE A: TSUKUYOMI ONE-BY-ONE DIMENSION NAVIGATOR
           ============================================================ */}
        {viewMode === "dimension" ? (
          <div className="tsukuyomi-dimension-viewport">
            {/* Top Navigation Controls */}
            <div className="dimension-nav-top">
              <div className="dimension-counter">
                <span className="counter-current">
                  {String(currentIndex + 1).padStart(2, "0")}
                </span>
                <span className="counter-divider">/</span>
                <span className="counter-total">
                  {String(projects.length).padStart(2, "0")}
                </span>
                <span className="dimension-sublabel">CLASSIFIED SCROLL</span>
              </div>

              <div className="dimension-arrow-controls">
                <button
                  type="button"
                  className="dimension-nav-btn prev-btn"
                  onClick={handlePrev}
                  aria-label="Previous Mission"
                >
                  <ArrowLeft size={18} /> Previous
                </button>
                <button
                  type="button"
                  className="dimension-nav-btn next-btn"
                  onClick={handleNext}
                  aria-label="Next Mission"
                >
                  Next <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* The One-by-One Project Reveal Stage */}
            <div className="dimension-project-stage">
              <AnimatePresence mode="wait">
                <motion.article
                  key={currentProject.slug}
                  className="dimension-scroll-card"
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.04, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Decorative Corner Seals */}
                  <span className="scroll-corner-mark mark-tl">卍</span>
                  <span className="scroll-corner-mark mark-tr">卍</span>
                  <span className="scroll-corner-mark mark-bl">卍</span>
                  <span className="scroll-corner-mark mark-br">卍</span>

                  {/* Card Header */}
                  <div className="scroll-header">
                    <div className="scroll-category-badge">
                      <span>{currentProject.category}</span>
                    </div>
                    <span className="scroll-status-tag">
                      <span className="status-indicator-dot" /> {currentProject.status}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <h2 className="scroll-title">{currentProject.title}</h2>
                  <p className="scroll-summary">{currentProject.summary}</p>

                  {/* Full Description / Problem Addressed */}
                  <div className="scroll-description-block">
                    <h4>MISSION BRIEF & ARCHITECTURE</h4>
                    <p>{currentProject.description}</p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="scroll-highlights-block">
                    <h4>KEY IMPLEMENTATION ATTRIBUTES</h4>
                    <div className="highlights-grid">
                      {currentProject.highlights.map((h, i) => (
                        <div key={i} className="highlight-item">
                          <span className="bullet-chakra">◆</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="scroll-tech-block">
                    <h4>VERIFIED TECHNOLOGIES</h4>
                    <div className="tech-tags-list">
                      {currentProject.stack.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Notice Note if verification needed */}
                  {currentProject.note && (
                    <div className="scroll-notice-banner">
                      <ShieldAlert size={15} />
                      <p>{currentProject.note}</p>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="scroll-actions-row">
                    <Link
                      href={`/projects/${currentProject.slug}`}
                      className="button button-primary"
                    >
                      Inspect Detailed Dossier <ArrowUpRight size={16} />
                    </Link>
                    <a
                      href={currentProject.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-ghost"
                    >
                      <Github size={16} /> View GitHub Source
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            {/* Quick-Jump Mission Dots Bar */}
            <div className="dimension-dots-bar" aria-label="Jump to mission">
              {projects.map((p, idx) => (
                <button
                  key={p.slug}
                  type="button"
                  className={`dot-selector ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                  title={`${p.title} (${p.category})`}
                >
                  <span className="dot-index">{String(idx + 1).padStart(2, "0")}</span>
                  <div className="dot-pip" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* ============================================================
             MODE B: ALL CLASSIFIED FILES (Dossier Grid)
             ============================================================ */
          <div className="classified-grid-wrapper">
            <div className="project-grid all-projects">
              {projects.map((p, i) => (
                <motion.article
                  key={p.slug}
                  className="project-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="project-card-top">
                    <span>MISSION FILE / {String(i + 1).padStart(2, "0")}</span>
                    <span className="status-label">{p.status}</span>
                  </div>
                  <p className="project-category">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p className="project-summary-text">{p.summary}</p>
                  <div className="tag-row">
                    {p.stack.slice(0, 3).map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-card-footer">
                    <Link href={`/projects/${p.slug}`} className="card-link">
                      Open mission file <ArrowUpRight size={16} />
                    </Link>
                    <a
                      href={p.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="repo-link"
                    >
                      Source ↗
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
