import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KARUN H G | The Shinobi Developer",
  description: "Portfolio of KARUN H G — The Shinobi Developer. Building digital products through software development, applied AI and cybersecurity.",
  metadataBase: new URL("https://karun.dev"),
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
