import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">IS</div>
          <p className="text-slate-400 font-medium">© 2024 Irum Shahzadi. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#about" className="text-slate-500 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-slate-500 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-slate-500 hover:text-white transition-colors">Contact</a>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 transition-all"
          >
            <ChevronRight size={20} className="-rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

