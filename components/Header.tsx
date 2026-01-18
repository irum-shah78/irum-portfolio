import React, { useState } from 'react';
import { Menu, X, User, Layers, Briefcase, Monitor, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about', icon: <User size={18}/> },
    { name: 'Skills', href: '#skills', icon: <Layers size={18}/> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={18}/> },
    { name: 'Projects', href: '#projects', icon: <Monitor size={18}/> },
    { name: 'Contact', href: '#contact', icon: <Send size={18}/> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
      <nav className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">IS</div>
          <span className="hidden sm:inline font-bold text-lg tracking-tight text-white">{PERSONAL_INFO.name}</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-2"
            >
              {item.icon}{item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
          >
            Let's Talk
          </a>
        </div>

        <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-8 space-y-6 animate-in slide-in-from-top duration-300">
          {navItems.map(item => (
            <a 
              key={item.name} 
              href={item.href} 
              className="flex items-center gap-4 text-lg font-medium text-slate-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon} {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

