"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, Shield, Terminal, ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";

interface ClassifiedArchiveProps {
  missions: Project[];
  onOpenDossier: (project: Project, index: number) => void;
  onSelectAndSwitch: (index: number) => void;
}

export default function ClassifiedArchive({
  missions,
  onOpenDossier,
  onSelectAndSwitch,
}: ClassifiedArchiveProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Archive Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-red-950/60 gap-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-red-500 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
            CLASSIFIED DOSSIER ARCHIVE // REPOSITORY VIEW
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            All Nine Engineering Missions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
            Browse through full project dossiers, source repositories, and technical architectures.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded bg-red-950/40 border border-red-900/60 font-mono text-xs text-red-400">
            09 Documented Files
          </span>
        </div>
      </div>

      {/* Responsive 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {missions.map((project, idx) => {
          const num = String(idx + 1).padStart(2, "0");
          const thumbSrc = `/assets/projects/mission-${num}.jpg`;

          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col justify-between rounded-lg bg-[#0a0305]/90 border border-red-950/70 hover:border-red-500/70 shadow-[0_0_20px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(225,29,46,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Card Body */}
              <div className="p-5 space-y-4">
                {/* Header: Mission Number & Status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase">
                    MISSION {num}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                    <span className="font-mono text-[8px] tracking-wider text-neutral-400 uppercase">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Thumbnail Image with Subtle Zoom on Hover */}
                <div
                  onClick={() => onOpenDossier(project, idx)}
                  className="relative w-full h-44 rounded overflow-hidden border border-red-950/80 bg-black cursor-pointer"
                >
                  <Image
                    src={thumbSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25" />
                  <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_25px_rgba(225,29,46,0.2)]" />
                  <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/80 border border-red-900/60 font-mono text-[9px] text-red-300">
                    {project.category}
                  </span>
                </div>

                {/* Title & Summary */}
                <div>
                  <h3
                    onClick={() => onOpenDossier(project, idx)}
                    className="text-lg font-serif font-bold text-white group-hover:text-red-400 transition-colors cursor-pointer"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-black/60 border border-red-950/60 font-mono text-[9px] text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3.5 bg-black/70 border-t border-red-950/70 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onOpenDossier(project, idx)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-600/90 hover:bg-red-500 text-white font-mono text-[10px] font-semibold tracking-wider transition-colors shadow-[0_0_12px_rgba(225,29,46,0.3)]"
                >
                  <span>Inspect Dossier</span>
                  <ArrowUpRight size={13} />
                </button>

                {project.repository && (
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded border border-neutral-800 hover:border-red-500/60 bg-black/60 text-neutral-300 hover:text-white font-mono text-[10px] tracking-wider transition-all"
                  >
                    <Github size={12} />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
