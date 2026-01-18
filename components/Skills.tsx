import React from 'react';
import { Layers } from 'lucide-react';
import { SKILLS } from '../constants';
import SectionHeading from './SectionHeading';
import SkillOrb from './SkillOrb';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-32">
      <SectionHeading 
        title="Technical Arsenal" 
        subtitle="My evolving toolkit for building scalable, high-performance web applications."
        icon={<Layers size={24}/>}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS.map(cat => <SkillOrb key={cat.name} category={cat} />)}
      </div>
    </section>
  );
};

export default Skills;

