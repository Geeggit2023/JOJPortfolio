"use client";

import { useState, useEffect } from "react";
import { observeElements } from "./utils/scrollAnimations.js";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Project.jsx";
import Skills from "./components/Skill.jsx";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize scroll animations
    observeElements();

    // Re-observe on window resize
    window.addEventListener("resize", observeElements);
    return () => window.removeEventListener("resize", observeElements);
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        minHeight: "100vh",
      }}
    >
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
