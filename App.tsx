import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import TerminalEasterEgg from './components/TerminalEasterEgg';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <TerminalEasterEgg />

      <Header />

      <main className="container mx-auto px-6 pt-32 space-y-32 pb-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
