import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const TerminalEasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>(['Type "help" to see available commands.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response = `Command not found: ${cmd}`;

    if (cmd === 'help') response = 'Available commands: about, skills, contact, clear, portfolio-mode, whoami';
    else if (cmd === 'about') response = PERSONAL_INFO.about;
    else if (cmd === 'skills') response = 'Frontend: React, Next.js, TS. Backend: Node, FastAPI, Python.';
    else if (cmd === 'contact') response = `Email: ${PERSONAL_INFO.email} | LinkedIn: /in/irumshahzadi`;
    else if (cmd === 'clear') { setHistory([]); setInput(''); return; }
    else if (cmd === 'whoami') response = `User: Visitor | Host: irum-portfolio-v1`;
    else if (cmd === 'portfolio-mode') response = 'Portfolio Mode Active: Dark Glassmorphism initialized.';

    setHistory(prev => [...prev, `> ${input}`, response]);
    setInput('');
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-500/20 hover:scale-110 transition-transform z-50 flex items-center gap-2"
      >
        <Terminal size={20} />
        <span className="hidden md:inline font-mono font-bold text-xs">Open Terminal</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-full max-w-md h-80 bg-slate-950 border border-slate-800 rounded-xl shadow-2xl z-50 overflow-hidden flex flex-col font-mono text-sm">
      <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-slate-400 text-xs font-bold">irum@portfolio:~</span>
        <button onClick={() => setIsOpen(false)}><X size={16} className="text-slate-400 hover:text-white" /></button>
      </div>
      <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-2 text-green-400 scrollbar-hide">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-blue-400' : ''}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="p-2 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
        <span className="text-blue-400">$</span>
        <input 
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 text-slate-200"
          placeholder="Enter command..."
        />
      </form>
    </div>
  );
};

export default TerminalEasterEgg;

