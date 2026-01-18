
export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  image: string;
  codeSnippet: string;
  category: 'html-css' | 'html-css-js' | 'react' | 'fullstack' | 'ai-automation';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}
