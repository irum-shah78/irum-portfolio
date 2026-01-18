import React from 'react';
import { User, Palette, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionHeading from './SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-32">
      <SectionHeading 
        title="My Journey" 
        subtitle="Bridging software engineering fundamentals with modern web wizardry."
        icon={<User size={24}/>}
      />
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p>{PERSONAL_INFO.about}</p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <p className="text-blue-500 font-bold text-2xl">2+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Years Obsessed</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <p className="text-blue-500 font-bold text-2xl">10+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-bold">Live Projects</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 blur-xl opacity-20 animate-pulse"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div className="flex items-center justify-between">
              <span className="mono text-xs text-blue-500 font-bold uppercase tracking-widest">Education</span>
              <span className="text-xs text-slate-500 font-medium">Bachelors of Science</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-1">Government College University, Faisalabad</h4>
              <p className="text-slate-400">Software Engineering (GCUF)</p>
            </div>
            <div className="pt-6 border-t border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Palette size={20} /></div>
                <span className="text-slate-300 font-medium">UI/UX & Pixel Perfect Design</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500"><Cpu size={20} /></div>
                <span className="text-slate-300 font-medium">Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

