import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KARUN H G | Full-Stack Developer, Applied AI & Cybersecurity",
  description:
    "Portfolio of KARUN H G — The Shinobi Developer. Specializing in full-stack engineering, applied artificial intelligence, and cybersecurity.",
  keywords: [
    "KARUN H G",
    "The Shinobi Developer",
    "Full-Stack Developer",
    "Applied AI",
    "Cybersecurity",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "KARUN H G" }],
  creator: "KARUN H G",
  metadataBase: new URL("https://karun.dev"),
  openGraph: {
    title: "KARUN H G | The Shinobi Developer",
    description:
      "Full-stack development, applied AI, and cybersecurity portfolio with disciplined engineering.",
    url: "https://karun.dev",
    siteName: "KARUN H G Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KARUN H G | The Shinobi Developer",
    description:
      "Full-stack development, applied AI, and cybersecurity portfolio.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
