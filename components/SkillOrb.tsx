import React from 'react';
import { SkillCategory } from '../types';

interface SkillOrbProps {
  category: SkillCategory;
}

const SkillOrb: React.FC<SkillOrbProps> = ({ category }) => (
  <div className="bg-slate-900/50 backdrop-blur-md border border-slate-800 p-6 rounded-2xl transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900/80">
    <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
      {category.name}
    </h3>
    <div className="space-y-5">
      {category.skills.map(s => (
        <div key={s.name}>
          <div className="flex justify-between text-sm mb-1.5">
            <span className="text-slate-300 font-medium">{s.name}</span>
            <span className="text-blue-500 mono">{s.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full transition-all duration-1000"
              style={{ width: `${s.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default SkillOrb;

