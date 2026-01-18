import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';
import SectionHeading from './SectionHeading';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <SectionHeading 
        title="Work Experience" 
        subtitle="Professional journey contributing to enterprise scale solutions."
        icon={<Briefcase size={24}/>}
      />
      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="group relative pl-8 pb-12 last:pb-0 border-l border-slate-800">
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors z-10"></div>
            <div className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 md:p-8 hover:bg-slate-900/50 transition-all hover:translate-x-2">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-500 font-semibold">{exp.company}</p>
                </div>
                <span className="px-4 py-1.5 bg-slate-950 text-slate-400 text-sm font-mono rounded-full border border-slate-800">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-3">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <ChevronRight size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

