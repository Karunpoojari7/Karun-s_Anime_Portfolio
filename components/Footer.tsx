"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const currentYear = 2026;



  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  // Instagram only shown if real configured URL exists in environment or verified settings
  const instagramUrl = process.env.NEXT_PUBLIC_INSTAGRAM_URL;

  return (
    <footer className="w-full border-t border-red-950/60 bg-[#070708] text-white py-12 px-6 sm:px-8 lg:px-12 select-none relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-white/5">
        {/* Brand & Mission Statement */}
        <div className="space-y-2 max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-full border border-red-500/80 flex items-center justify-center font-serif text-xs text-red-500 bg-red-950/30 shadow-[0_0_12px_rgba(225,29,46,0.4)] group-hover:scale-105 transition-transform">
              月
            </span>
            <div>
              <b className="font-serif text-base tracking-wider text-white group-hover:text-red-400 transition-colors">
                KARUN <span className="text-red-500 font-bold">H G</span>
              </b>
              <small className="block font-mono text-[9px] tracking-[0.25em] text-neutral-400 uppercase">
                THE SHINOBI DEVELOPER
              </small>
            </div>
          </Link>
          <p className="text-xs text-neutral-300 font-sans leading-relaxed">
            Building digital products through software development, applied AI and cybersecurity.
          </p>
        </div>

        {/* Footer Navigation Links */}
        <nav
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-sans text-neutral-300"
          aria-label="Footer Navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-400 transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Verified Social Links */}
        <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
          <a
            href="https://github.com/Karunpoojari7"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github size={14} className="text-red-400" />
            <span>GitHub</span>
          </a>
          <span className="text-neutral-700" aria-hidden="true">·</span>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={14} className="text-red-400" />
            <span>LinkedIn</span>
          </a>
          {instagramUrl && (
            <>
              <span className="text-neutral-700" aria-hidden="true">·</span>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram size={14} className="text-red-400" />
                <span>Instagram</span>
              </a>
            </>
          )}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-400">
        <span>© {currentYear} KARUN H G. All rights reserved.</span>
        <span className="text-neutral-400 tracking-wider">
          DISCIPLINE · PRECISION · CREATIVE ENGINEERING
        </span>
      </div>
    </footer>
  );
}
