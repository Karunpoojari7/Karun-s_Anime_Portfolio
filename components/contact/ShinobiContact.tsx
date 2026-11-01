"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Send, Sparkles } from "lucide-react";
import DriftingLeaves from "@/components/skills/DriftingLeaves";

export default function ShinobiContact() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Karunpoojari7", top: "38.5%" },
    { name: "LinkedIn", href: "https://www.linkedin.com/", top: "48.5%" },
    { name: "Instagram", href: "https://www.instagram.com/", top: "58.5%" },
  ];

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
    <section className="relative w-full h-[calc(100vh-72px)] bg-black overflow-hidden flex items-center justify-center select-none">
      {/* 1. CINEMATIC 16:9 VIEWPORT CONTAINER MATCHING REFERENCE IMAGE 4 */}
      <div className="relative w-full h-full max-h-[calc(100vh-72px)] aspect-[1024/521] mx-auto overflow-hidden">
        {/* Full Cinematic Scene Artwork */}
        <Image
          src="/assets/itachi/shinobi-contact-backdrop.jpg"
          alt="Shinobi Contact Scene - Exact Visual Reference"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Ambient Red Glow Pulse on Sharingan Moon & Lanterns */}
        <div
          className="pointer-events-none absolute inset-0 animate-red-pulse opacity-20"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 45% 35%, rgba(225, 29, 46, 0.35) 0%, transparent 70%)",
          }}
        />

        {/* Drifting Leaves Layer */}
        <DriftingLeaves />

        {/* 2. INTERACTIVE SOCIAL LINK HOTSPOTS OVER SCENE CARDS */}
        {socialLinks.map((soc) => (
          <a
            key={soc.name}
            href={soc.href}
            target="_blank"
            rel="noreferrer"
            style={{
              position: "absolute",
              left: "37%",
              top: soc.top,
              width: "17.2%",
              height: "8.6%",
            }}
            className="group z-20 rounded-lg cursor-pointer transition-all duration-200"
            aria-label={`Open ${soc.name}`}
          >
            <div className="w-full h-full rounded-lg border border-transparent group-hover:border-red-500/70 group-hover:bg-red-950/20 shadow-none group-hover:shadow-[0_0_15px_rgba(225,29,46,0.35)] transition-all" />
          </a>
        ))}

        {/* 3. WORKING INTERACTIVE FORM EMBEDDED DIRECTLY IN THE HANGING SCROLL */}
        <form onSubmit={handleSubmit} className="z-20">
          {/* Your Name */}
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-label="Your Name"
            style={{
              position: "absolute",
              left: "62%",
              top: "35.5%",
              width: "14%",
              height: "7.5%",
            }}
            className="bg-black/40 hover:bg-black/60 focus:bg-black/85 text-white font-sans text-xs px-2.5 rounded border border-transparent focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-transparent"
          />

          {/* Your Email */}
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-label="Your Email"
            style={{
              position: "absolute",
              left: "77.5%",
              top: "35.5%",
              width: "14.2%",
              height: "7.5%",
            }}
            className="bg-black/40 hover:bg-black/60 focus:bg-black/85 text-white font-sans text-xs px-2.5 rounded border border-transparent focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-transparent"
          />

          {/* Subject */}
          <input
            id="subject"
            name="subject"
            type="text"
            required
            aria-label="Subject"
            style={{
              position: "absolute",
              left: "62%",
              top: "44.6%",
              width: "29.7%",
              height: "7.5%",
            }}
            className="bg-black/40 hover:bg-black/60 focus:bg-black/85 text-white font-sans text-xs px-2.5 rounded border border-transparent focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-transparent"
          />

          {/* Message Textarea */}
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            aria-label="Message"
            style={{
              position: "absolute",
              left: "62%",
              top: "54%",
              width: "29.7%",
              height: "16%",
            }}
            className="bg-black/40 hover:bg-black/60 focus:bg-black/85 text-white font-sans text-xs p-2.5 rounded border border-transparent focus:border-red-500/80 focus:outline-none focus:ring-1 focus:ring-red-500/50 transition-all placeholder:text-transparent resize-none"
          />

          {/* Send Message Button Trigger */}
          <button
            type="submit"
            disabled={formState === "sending"}
            aria-label="Send Message"
            style={{
              position: "absolute",
              left: "62.4%",
              top: "73.5%",
              width: "29.3%",
              height: "7.7%",
            }}
            className="group cursor-pointer rounded bg-transparent hover:bg-red-500/10 active:scale-[0.99] border border-transparent focus:border-red-400 focus:outline-none transition-all flex items-center justify-center"
          >
            {formState === "sending" && (
              <span className="font-mono text-xs font-bold text-white tracking-wider bg-red-950/90 px-3 py-1 rounded shadow-[0_0_15px_#ff263b] animate-pulse">
                Transmitting...
              </span>
            )}
          </button>
        </form>

        {/* 4. NOTIFICATION POPUP ON SUBMISSION */}
        <AnimatePresence>
          {formState === "sent" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 right-8 z-50 p-4 rounded-xl bg-[#090204]/98 border border-emerald-500/70 shadow-[0_0_25px_rgba(16,185,129,0.35)] flex items-center gap-3 text-xs text-emerald-300 font-sans"
            >
              <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Transmission Dispatched</p>
                <p className="text-[11px] text-neutral-300">
                  Your message has been received. Karun H G will get back to you soon!
                </p>
              </div>
            </motion.div>
          )}

          {formState === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 right-8 z-50 p-4 rounded-xl bg-[#090204]/98 border border-red-500/70 shadow-[0_0_25px_rgba(225,29,46,0.35)] flex items-center gap-3 text-xs text-red-300 font-sans"
            >
              <AlertCircle size={18} className="text-red-400 shrink-0" />
              <div>
                <p className="font-bold text-white">Dispatch Preview Notice</p>
                <p className="text-[11px] text-neutral-300">
                  {errorMessage || "Direct dispatch active. You can also connect via GitHub or LinkedIn."}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
