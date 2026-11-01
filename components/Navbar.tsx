"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Github } from "lucide-react";

const links = [
  ["/", "Home"], ["/about", "About"], ["/skills", "Skills"],
  ["/projects", "Projects"], ["/experience", "Experience"], ["/contact", "Contact"]
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link href="/" className="brand" onClick={() => setOpen(false)}>
      <span className="brand-eye">卍</span><span><b>KARUN<span>.DEV</span></b><small>THE SHINOBI DEVELOPER</small></span>
    </Link>
    <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? "nav-links open" : "nav-links"}>
      {links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""}>{label}</Link>)}
      <a href="https://github.com/Karunpoojari7" target="_blank" rel="noreferrer" className="github-link"><Github size={15}/> GitHub</a>
    </nav>
  </header>;
}