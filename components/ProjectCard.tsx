import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full [perspective:1000px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front side */}
        <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden [backface-visibility:hidden]">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-blue-600/20 text-blue-400 rounded-full border border-blue-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-slate-900 border border-slate-800 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 text-blue-500">
              <Code size={18} />
              <span className="text-sm font-mono font-bold uppercase tracking-widest">Logic Extract</span>
            </div>
            <p className="text-slate-300 text-sm mb-6 line-clamp-3">{project.description}</p>
            <div className="bg-slate-950 rounded-lg p-4 border border-slate-800">
              <code className="text-[12px] text-blue-400 font-mono break-all leading-relaxed">
                {project.codeSnippet}
              </code>
            </div>
          </div>
          <div className="flex gap-4">
            <a href={project.github} target="_blank" className="flex-1 py-2 rounded-lg bg-slate-800 text-white text-center text-sm font-semibold hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <Github size={16} /> GitHub
            </a>
            <a href={project.link} target="_blank" className="flex-1 py-2 rounded-lg bg-blue-600 text-white text-center text-sm font-semibold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
              <ExternalLink size={16} /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

