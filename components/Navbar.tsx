"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Github, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      {/* Brand Identity */}
      <Link
        href="/"
        className="brand"
        onClick={() => setMobileMenuOpen(false)}
        aria-label="KARUN H G - Home"
      >
        <span className="brand-eye" aria-hidden="true">
          月
        </span>
        <span>
          <b>
            KARUN<span>.DEV</span>
          </b>
          <small>THE SHINOBI DEVELOPER</small>
        </span>
      </Link>

      {/* Desktop Navigation Links - Exclusively visible on desktop (hidden on mobile) */}
      <nav className="desktop-nav hidden md:flex items-center gap-7" aria-label="Main Navigation">
        {navLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-sans text-xs tracking-wider transition-colors duration-200 py-1 ${
                active
                  ? "text-white font-semibold after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-red-500 after:rounded-full after:shadow-[0_0_8px_#ff263b]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* GitHub Direct Link */}
        <a
          href="https://github.com/Karunpoojari7"
          target="_blank"
          rel="noreferrer"
          className="github-link inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-red-950/80 bg-[#090204]/80 text-neutral-300 hover:text-white hover:border-red-500/60 font-mono text-xs tracking-wider transition-all duration-200"
        >
          <Github size={13} className="text-red-400" />
          <span>GitHub</span>
        </a>
      </nav>

      {/* Mobile Menu Hamburger Button */}
      <button
        type="button"
        className="mobile-toggle md:hidden cursor-pointer p-1.5 text-neutral-300 hover:text-white transition-colors"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Responsive Mobile Drawer - Rendered only when opened on mobile viewports */}
      {mobileMenuOpen && (
        <nav
          className="mobile-drawer md:hidden flex flex-col absolute top-[72px] left-0 right-0 p-5 bg-[#090204]/98 border-b border-red-950/90 shadow-[0_20px_35px_rgba(0,0,0,0.9)] backdrop-blur-2xl z-50 space-y-1"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full py-2.5 px-3 rounded text-sm font-sans tracking-wide transition-colors ${
                  active
                    ? "text-red-400 font-semibold bg-red-950/30 border-l-2 border-red-500"
                    : "text-neutral-300 hover:text-white hover:bg-neutral-900/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="https://github.com/Karunpoojari7"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 py-2.5 px-3 rounded flex items-center justify-between text-sm font-mono text-neutral-300 bg-red-950/20 border border-red-950/60 hover:text-white"
          >
            <span className="flex items-center gap-2">
              <Github size={15} className="text-red-400" />
              GitHub
            </span>
            <ArrowUpRight size={14} className="text-neutral-500" />
          </a>
        </nav>
      )}
    </header>
  );
}
