import React from "react";
import Link from "next/link";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = 2026;

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="footer border-t border-red-950/40 bg-[#070708] text-white">
      {/* Brand & Mission Statement */}
      <div className="space-y-2">
        <div className="flex items-center gap-2.5">
          <span className="w-6 h-6 rounded-full border border-red-500/80 flex items-center justify-center font-serif text-xs text-red-500 bg-red-950/30">
            月
          </span>
          <b className="font-serif text-lg tracking-wider text-white">
            KARUN <span className="text-red-500">H G</span>
          </b>
        </div>
        <p className="text-xs text-neutral-400 font-sans max-w-sm leading-relaxed">
          Building digital products through software development, applied AI and cybersecurity.
        </p>
      </div>

      {/* Footer Navigation & Verified Social Links */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center gap-4 text-xs font-sans text-neutral-400" aria-label="Footer Navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-red-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400">
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
          <span className="text-neutral-700">·</span>
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
        </div>
      </div>

      {/* Copyright Notice */}
      <small className="col-span-full pt-4 mt-2 border-t border-white/5 font-mono text-[10px] text-neutral-400">
        © {currentYear} KARUN H G. All rights reserved.
      </small>
    </footer>
  );
}
