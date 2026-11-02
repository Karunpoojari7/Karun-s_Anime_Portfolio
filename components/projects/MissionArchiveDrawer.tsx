"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Folder, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface MissionArchiveDrawerProps {
  isOpen: boolean;
  missions: Project[];
  activeIndex: number;
  onSelectMission: (index: number) => void;
  onClose: () => void;
}

export default function MissionArchiveDrawer({
  isOpen,
  missions,
  activeIndex,
  onSelectMission,
  onClose,
}: MissionArchiveDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/92 cursor-pointer"
        />

        {/* Drawer / Archive Index */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0c0507] border border-red-500/80 rounded-md shadow-[0_0_60px_rgba(255,38,59,0.35)] overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-red-950/70 bg-red-950/20">
            <div className="flex items-center gap-2.5">
              <Folder size={18} className="text-red-500" />
              <div>
                <h3 className="font-mono text-xs tracking-[0.25em] text-white font-bold uppercase">
                  CLASSIFIED MISSION ARCHIVE // ALL 09 DOSSIERS
                </h3>
                <p className="font-mono text-[9px] tracking-wider text-red-400">
                  SELECT ANY MISSION TO ENGAGE TSUKUYOMI FOCUS
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-full text-neutral-400 hover:text-white hover:bg-red-950/50 border border-transparent hover:border-red-500/50 transition-all duration-200"
            >
              <X size={18} />
            </button>
          </div>

          {/* Grid of 9 Missions */}
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-h-[70vh] overflow-y-auto">
            {missions.map((m, i) => {
              const numStr = String(i + 1).padStart(2, "0");
              const isCurrent = i === activeIndex;
              const thumbSrc = `/assets/projects/mission-${numStr}.jpg`;

              return (
                <div
                  key={m.slug}
                  onClick={() => {
                    onSelectMission(i);
                    onClose();
                  }}
                  className={`group relative flex flex-col p-3 rounded border cursor-pointer transition-all duration-200 ${
                    isCurrent
                      ? "border-red-500 bg-red-950/30 shadow-[0_0_20px_rgba(255,38,59,0.4)]"
                      : "border-red-950/60 bg-black/60 hover:border-red-700 hover:bg-red-950/20"
                  }`}
                >
                  <div className="flex items-center justify-between pb-1.5">
                    <span className="font-mono text-[9px] tracking-wider text-red-400">
                      MISSION // {numStr}
                    </span>
                    {isCurrent && (
                      <span className="px-1.5 py-0.5 rounded text-[8px] font-mono tracking-wider bg-red-600 text-white">
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <div className="relative w-full h-20 my-1.5 rounded overflow-hidden border border-red-950/50 bg-black">
                    <Image
                      src={thumbSrc}
                      alt={m.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                  </div>

                  <h4 className="font-serif font-bold text-sm text-white group-hover:text-red-400 transition-colors line-clamp-1">
                    {m.title}
                  </h4>
                  <p className="font-mono text-[9px] text-neutral-400 mt-0.5 truncate">
                    {m.category}
                  </p>

                  <div className="mt-2 pt-1.5 border-t border-red-950/50 flex items-center justify-between text-[9px] font-mono text-red-400 group-hover:text-red-300">
                    <span>ENGAGE ORBIT</span>
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-6 py-3.5 bg-black/60 border-t border-red-950/70 flex items-center justify-between">
            <span className="font-mono text-[10px] text-neutral-500">
              09 / 09 CLASSIFIED ENTRIES LOADED
            </span>
            <button
              onClick={onClose}
              type="button"
              className="font-mono text-xs text-neutral-400 hover:text-white"
            >
              CLOSE ARCHIVE ✕
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

