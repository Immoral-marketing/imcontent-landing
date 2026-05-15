"use client";
import { Hero } from "../Hero";
import { LogoCarousel } from "../LogoCarousel";
import { About } from "../About";
import { AIBanner } from "../AIBanner";
import { Services } from "../Services";
import { ContactFormHome } from "../ContactFormHome";
import { HowWeDoIt } from "../HowWeDoIt";
import { ForWho } from "../ForWho";
import { FinalCTA } from "../FinalCTA";

export function HomePage() {
  return (
    <div className="relative" style={{ position: 'relative' }}>
      <Hero />
      <LogoCarousel />
      <About />
      <AIBanner />
      <Services />
      <ContactFormHome />
      <HowWeDoIt />
      <ForWho />
      <FinalCTA />
    </div>
  );
}
