"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Mail, Tag, MessageSquare, Send, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactScrollProps {
  selectedTopic?: string;
}

export default function ContactScroll({ selectedTopic }: ContactScrollProps = {}) {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      inquiryType: "General Collaboration",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission error");
      }

      setFormState("sent");
      form.reset();
    } catch (err: unknown) {
      setFormState("error");
      const msg = err instanceof Error ? err.message : "Submission error";
      setErrorMessage(msg);
    }
  }

  return (
    <div className="relative w-full max-w-[480px] mx-auto select-none">
      {/* 1. TOP WOODEN SUSPENSION ROD & HANGING CORDS */}
      <div className="relative w-full flex items-center justify-between z-20 -mb-2">
        {/* Left Rod Finial */}
        <div className="w-4 h-6 -ml-2 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#250306] border border-red-500 shadow-[0_0_10px_#ff263b]" />
        {/* Central Wooden Beam */}
        <div className="flex-1 h-3.5 bg-gradient-to-r from-[#200508] via-[#5e0e18] to-[#200508] border-y border-red-600/80 shadow-[0_0_15px_rgba(255,38,59,0.5)] flex items-center justify-around px-8">
          <span className="w-1.5 h-6 bg-red-700/80 rounded-b shadow-[0_0_8px_#ff263b]" />
          <span className="w-1.5 h-6 bg-red-700/80 rounded-b shadow-[0_0_8px_#ff263b]" />
        </div>
        {/* Right Rod Finial */}
        <div className="w-4 h-6 -mr-2 rounded-sm bg-gradient-to-b from-[#ff3b4d] via-[#8a121c] to-[#250306] border border-red-500 shadow-[0_0_10px_#ff263b]" />
      </div>

      {/* 2. HANGING SCROLL BODY WITH ILLUMINATED CRIMSON EDGES */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0.96 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[96%] mx-auto rounded-b-2xl bg-[#080204]/96 border-x-2 border-b-2 border-red-500/70 shadow-[0_0_40px_rgba(225,29,46,0.35),inset_0_0_30px_rgba(0,0,0,0.9)] backdrop-blur-xl p-5 sm:p-6 pt-7 overflow-hidden"
      >
        {/* Top Center: Stylized Red Akatsuki Cloud Motif */}
        <div className="flex justify-center mb-3">
          <svg width="64" height="34" viewBox="0 0 100 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M32 48 C20 48 10 38 10 26 C10 16 18 8 28 8 C32 3 40 0 50 0 C64 0 74 10 76 22 C84 22 92 28 92 36 C92 44 84 50 76 50 C70 54 62 56 54 56 C42 56 36 50 32 48 Z"
              stroke="#ff263b"
              strokeWidth="2.5"
              strokeLinejoin="round"
              fill="rgba(255, 38, 59, 0.12)"
            />
            <path
              d="M36 28 C34 22 40 16 48 18 C52 19 56 24 54 28"
              stroke="#ff263b"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Scroll Header */}
        <div className="text-center mb-4">
          <span className="font-mono text-[10px] tracking-[0.25em] text-red-500 font-bold uppercase flex items-center justify-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-red-500" />
            SEND A MESSAGE
            <span className="w-1 h-1 rounded-full bg-red-500" />
          </span>
        </div>

        {/* 3. WORKING INTERACTIVE FORM */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Row 1: Name and Email side-by-side in 2 columns */}
          <div className="grid grid-cols-2 gap-3">
            {/* Your Name */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                <User size={14} className="text-red-500/80" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/85 border border-red-950/90 focus:border-red-500 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
              />
            </div>

            {/* Your Email */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
                <Mail size={14} className="text-red-500/80" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/85 border border-red-950/90 focus:border-red-500 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
              />
            </div>
          </div>

          {/* Row 2: Subject */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center text-neutral-500">
              <Tag size={14} className="text-red-500/80" />
            </div>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/85 border border-red-950/90 focus:border-red-500 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans"
            />
          </div>

          {/* Row 3: Message Textarea */}
          <div className="relative">
            <div className="pointer-events-none absolute top-3 left-3 text-neutral-500">
              <MessageSquare size={14} className="text-red-500/80" />
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell me about your project, idea, or opportunity..."
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-black/85 border border-red-950/90 focus:border-red-500 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all font-sans resize-none"
            />
          </div>

          {/* Submit Button with Crimson Chakra Glow */}
          <button
            type="submit"
            disabled={formState === "sending"}
            className="group relative w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-gradient-to-r from-[#9e101f] via-[#e11d2e] to-[#9e101f] text-white font-mono text-xs font-semibold tracking-wider border border-red-400 shadow-[0_0_20px_rgba(225,29,46,0.45)] hover:shadow-[0_0_30px_rgba(225,29,46,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 overflow-hidden cursor-pointer disabled:opacity-60"
          >
            <span className="pointer-events-none absolute -inset-full rounded-full bg-red-400/20 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700" />
            <span>{formState === "sending" ? "Transmitting..." : "Send Message"}</span>
            <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Feedback Notifications */}
          <AnimatePresence>
            {formState === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-3 rounded bg-emerald-950/50 border border-emerald-500/60 flex items-center gap-2.5 text-xs text-emerald-300 font-sans"
              >
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Message dispatched successfully. I will get back to you soon!</span>
              </motion.div>
            )}

            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-3 rounded bg-red-950/50 border border-red-500/60 flex items-center gap-2.5 text-xs text-red-300 font-sans"
              >
                <AlertCircle size={16} className="text-red-400 shrink-0" />
                <span>
                  {errorMessage || "Contact service in preview mode. You can also reach me directly on GitHub or LinkedIn."}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </form>

        {/* Bottom Scroll Waves Detail */}
        <div className="mt-4 pt-2 border-t border-red-950/60 flex items-center justify-between text-[9px] font-mono text-neutral-500">
          <span>SHINOBI DISPATCH</span>
          <span className="text-red-400">KARUN H G</span>
        </div>
      </motion.div>
    </div>
  );
}
