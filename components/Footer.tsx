import Link from "next/link";
export default function Footer() {
  return <footer className="footer"><div><b>KARUN<span>.DEV</span></b><p>Observe deeply. Think strategically. Build intelligently.</p></div><div className="footer-links"><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link><a href="https://github.com/Karunpoojari7" target="_blank" rel="noreferrer">GitHub</a></div><small>© {new Date().getFullYear()} Karun Poojari · Built with purpose.</small></footer>;
}