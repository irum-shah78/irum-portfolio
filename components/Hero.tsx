import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const [typingText, setTypingText] = useState('');

  useEffect(() => {
    const fullText = PERSONAL_INFO.tagline;
    let i = 0;
    const interval = setInterval(() => {
      setTypingText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-8 relative">
      <div className="relative">
        <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-150 -z-10"></div>
        <img 
          src="/assets/profile-whitebg.jpg" 
          alt={PERSONAL_INFO.name} 
          className="w-40 h-40 rounded-full border-4 border-slate-800 p-1 shadow-2xl object-cover grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
          Hey, I'm <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-blue-600 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
        </h1>
        <p className="text-xl md:text-2xl font-mono text-slate-400 min-h-[32px]">
          {typingText}<span className="animate-pulse">_</span>
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a href="#projects" className="px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:-translate-y-1">
          View Portfolio
        </a>
        <a href="/assets/resume/Irum-Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-slate-900 text-white border border-slate-700 rounded-full font-bold hover:border-blue-500 transition-all flex items-center gap-2">
          <Download size={18} /> Resume.pdf
        </a>
      </div>
      <div className="flex items-center gap-6 text-slate-400">
        <a href={PERSONAL_INFO.github} rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" target="_blank"><Github size={24} /></a>
        <a href={PERSONAL_INFO.linkedin} rel="noopener noreferrer" className="hover:text-blue-500 transition-colors" target="_blank"><Linkedin size={24} /></a>
      </div>
    </section>
  );
};

export default Hero;

