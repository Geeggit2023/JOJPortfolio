"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { observeElements } from "./utils/scrollAnimations.js";
import Contact from "./Components/Contact.jsx";
import Footer from "./Components/Footer.jsx";
import Hero from "./Components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import About from "./components/About.jsx";
import Projects from "./components/project.jsx";
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
