// @TASK P0-T3 - 기술 스택 데이터
// @SPEC docs/planning/01-prd.md

import type { TechStackItem } from '../types';

export const techStack: TechStackItem[] = [
  // AI
  { name: 'OpenAI', icon: 'openai', category: 'ai' },
  { name: 'Claude', icon: 'anthropic', category: 'ai' },
  { name: 'LangChain', icon: 'langchain', category: 'ai' },
  { name: 'PyTorch', icon: 'pytorch', category: 'ai' },

  // Frontend
  { name: 'React', icon: 'react', category: 'frontend' },
  { name: 'Next.js', icon: 'nextdotjs', category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwindcss', category: 'frontend' },
  { name: 'Astro', icon: 'astro', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: 'nodedotjs', category: 'backend' },
  { name: 'Python', icon: 'python', category: 'backend' },
  { name: 'FastAPI', icon: 'fastapi', category: 'backend' },
  { name: 'Express', icon: 'express', category: 'backend' },

  // Database
  { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
  { name: 'MongoDB', icon: 'mongodb', category: 'database' },
  { name: 'Redis', icon: 'redis', category: 'database' },
  { name: 'Supabase', icon: 'supabase', category: 'database' },

  // Cloud
  { name: 'AWS', icon: 'amazonaws', category: 'cloud' },
  { name: 'Vercel', icon: 'vercel', category: 'cloud' },
  { name: 'Docker', icon: 'docker', category: 'cloud' },

  // Tools
  { name: 'Git', icon: 'git', category: 'tools' },
  { name: 'GitHub', icon: 'github', category: 'tools' },
  { name: 'VS Code', icon: 'visualstudiocode', category: 'tools' },
];
