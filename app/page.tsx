"use client"; // Force client component

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
 

  return (
    <main className="flex flex-col items-center justify-center min-h-screen relative">
      <section className="text-center">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </section>
    </main>
  );
}
