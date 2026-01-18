import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, icon }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <span className="text-blue-500 p-2 bg-blue-500/10 rounded-lg">{icon}</span>
      <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    </div>
    {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mt-4 rounded-full"></div>
  </div>
);

export default SectionHeading;

