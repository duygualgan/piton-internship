import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MidImage from "@/components/MidImage";
import HeroesSection from "@/components/HeroesSection";
import SuccessMetrics from "@/components/SuccessMetrics";
import Contact from "@/components/Contact";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Hero />
        <Intro />
        <MidImage />
        <HeroesSection />
        <SuccessMetrics />
        <Contact />
      </body>
    </html>
  );
}
