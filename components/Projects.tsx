import React, { useState } from 'react';
import { Monitor } from 'lucide-react';
import { PROJECTS } from '../constants';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';

type ProjectCategory = 'html-css-js' | 'react' | 'fullstack' | 'ai-automation';

const categoryLabels: Record<ProjectCategory, string> = {
  'fullstack': 'Full Stack',
  'react': 'React/Next.js',
  'html-css-js': 'HTML, CSS, JS',
  'ai-automation': 'AI Automation'
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('fullstack');

  const categories: ProjectCategory[] = ['fullstack', 'react', 'html-css-js','ai-automation'];

  const filteredProjects = PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-32">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A curated selection of my most impactful digital creations organized by technology stack."
        icon={<Monitor size={24}/>}
      />
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 mb-12 justify-center">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeCategory === category
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 scale-105'
                : 'bg-slate-900/50 text-slate-400 border border-slate-800 hover:border-blue-500/50 hover:text-white'
            }`}
          >
            {categoryLabels[category]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">No projects found in this category.</p>
        </div>
      )}
    </section>
  );
};

export default Projects;
