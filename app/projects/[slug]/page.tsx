import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Terminal,
  Target,
  UserCheck,
  Cpu,
  AlertTriangle,
  Camera,
} from "lucide-react";
import { projects, Project } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((x) => x.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const missionNumber = String(projectIndex + 1).padStart(2, "0");

  // Split title for styling
  const titleWords = project.title.split(" ");
  const mainTitle = titleWords.slice(0, -1).join(" ");
  const lastWord = titleWords[titleWords.length - 1];

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-red-900 selection:text-white py-12 px-6 sm:px-8 lg:px-12 select-none">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 15%, rgba(225, 29, 46, 0.2) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        {/* Top Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-red-950/60 pb-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} className="text-red-400" />
            <span>Return to Tsukuyomi Dimension</span>
          </Link>

          <span className="font-mono text-xs text-red-500 font-semibold tracking-widest">
            MISSION {missionNumber} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Header Block */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-red-400 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff263b]" />
              MISSION DOSSIER // {project.category.toUpperCase()}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-red-950/40 border border-red-900/60 text-red-300">
              {project.projectType}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {mainTitle} <em className="text-red-500 italic">{lastWord}</em>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed max-w-2xl">
            {project.summary}
          </p>
        </div>

        {/* Main Content Grid: Dossier Left + Aside Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-4">
          {/* Main Column */}
          <article className="lg:col-span-8 space-y-8">
            {/* 1. Mission Overview Panel */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-3">
              <h2 className="font-serif text-xl font-bold text-white tracking-wide">
                Mission Overview
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* 2. Problem Statement & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_20px_rgba(0,0,0,0.7)] space-y-2.5">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <Target size={14} /> Problem Statement
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_20px_rgba(0,0,0,0.7)] space-y-2.5">
                <h3 className="font-mono text-xs tracking-wider text-red-400 uppercase flex items-center gap-1.5 font-semibold">
                  <UserCheck size={14} /> My Role & Contributions
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>

            {/* 3. System Architecture */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-3">
              <h2 className="font-serif text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <Cpu size={18} className="text-red-400" />
                System Architecture & Design
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {project.architecture}
              </p>
            </div>

            {/* 4. Documented Highlights */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-4">
              <h2 className="font-serif text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <ShieldCheck size={18} className="text-red-400" />
                Key Capabilities & Features
              </h2>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3 text-sm text-neutral-300 font-sans">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Engineering Challenges */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-3">
              <h2 className="font-serif text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <AlertTriangle size={18} className="text-amber-400" />
                Technical Challenges & Solutions
              </h2>
              <p className="text-sm text-neutral-300 font-sans leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* 6. Genuine Interface Captures & Evidence (Architecture prepared for live screenshots) */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex items-center justify-between border-b border-red-950/60 pb-3">
                <h2 className="font-serif text-xl font-bold text-white tracking-wide flex items-center gap-2">
                  <Camera size={18} className="text-red-400" />
                  Interface Evidence & Architecture Captures
                </h2>
                <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                  AUTHENTIC EVIDENCE
                </span>
              </div>

              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Genuine application interface captures from local test environments and production deployments will be integrated here upon individual execution.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {project.screenshotSlots.map((slot, idx) => (
                  <div
                    key={slot.title}
                    className="p-4 rounded-lg bg-[#0a0305] border border-dashed border-red-900/60 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="font-mono text-[9px] text-red-500 uppercase tracking-widest block mb-1">
                        VIEW 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-sm font-semibold text-white">
                        {slot.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-sans mt-1.5 leading-relaxed">
                        {slot.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 py-2 px-3 rounded bg-black/60 border border-red-950/70 font-mono text-[10px] text-neutral-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>{slot.placeholder}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Optional Note */}
            {project.note && (
              <div className="p-4 rounded-lg bg-red-950/20 border-l-2 border-red-500 text-xs text-neutral-300 font-sans">
                {project.note}
              </div>
            )}

            {/* 8. Technology Stack Grid */}
            <div className="p-6 rounded-xl bg-black/75 border border-red-950/80 shadow-[0_0_25px_rgba(0,0,0,0.8)] space-y-3">
              <h2 className="font-serif text-xl font-bold text-white tracking-wide flex items-center gap-2">
                <Terminal size={18} className="text-red-400" />
                Verified Technology Stack
              </h2>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded bg-[#090204] border border-red-900/60 font-mono text-xs text-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Aside Column */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Status & Repository Card */}
            <div className="p-6 rounded-xl bg-[#090204]/95 border border-red-500/40 shadow-[0_0_30px_rgba(225,29,46,0.2)] space-y-5">
              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block mb-1">
                  FILE STATUS
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/40 border border-emerald-500/50 text-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </span>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block mb-1">
                  PROJECT CLASSIFICATION
                </span>
                <span className="font-mono text-xs text-neutral-200 block">
                  {project.projectType}
                </span>
              </div>

              {/* Source Repository Link */}
              {project.repository && (
                <div className="space-y-2 pt-2 border-t border-red-950/60">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">
                    SOURCE REPOSITORY
                  </span>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-gradient-to-r from-[#9e101f] to-[#e11d2e] hover:from-[#ba1425] hover:to-[#ff263b] text-white font-mono text-xs font-semibold tracking-wider transition-all duration-300 shadow-[0_0_20px_rgba(225,29,46,0.4)] cursor-pointer"
                  >
                    <Github size={15} />
                    <span>View on GitHub</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}

              {/* Live Demo Link (if configured) */}
              {project.liveDemo && (
                <div className="space-y-2 pt-2 border-t border-red-950/60">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase block">
                    LIVE DEPLOYMENT
                  </span>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded border border-red-500/80 bg-red-950/30 text-white font-mono text-xs font-semibold tracking-wider hover:bg-red-950/50 transition-colors cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              )}

              <p className="text-[11px] text-neutral-400 font-sans leading-relaxed pt-2 border-t border-red-950/60">
                This case study is based on verified repository documentation, source code commits, and architectural deliverables.
              </p>
            </div>

            {/* Back Button */}
            <Link
              href="/projects"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded border border-neutral-700/80 bg-black/60 hover:bg-neutral-900 text-neutral-300 hover:text-white font-mono text-xs tracking-wider transition-colors"
            >
              <span>Explore All Missions</span>
              <ArrowUpRight size={14} />
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
