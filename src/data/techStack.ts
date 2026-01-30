// @TASK P2-T3 - 기술 스택 데이터
// @SPEC specs/screens/tech-stack.yaml

import type { TechStackItem } from '../types';

export const techStack: TechStackItem[] = [
  // Frontend
  { name: 'Vue.js', icon: '🟢', category: 'frontend' },

  // Backend
  { name: 'Java', icon: '☕', category: 'backend' },
  { name: 'Express.js', icon: '⚡', category: 'backend' },

  // AI
  { name: 'Claude Code', icon: '🤖', category: 'ai' },
  { name: 'OCR', icon: '📄', category: 'ai' },
  { name: 'Automation', icon: '⚙️', category: 'ai' },

  // Cloud
  { name: 'AWS', icon: '☁️', category: 'cloud' },
  { name: 'GCP', icon: '🌐', category: 'cloud' },

  // Database
  { name: 'Oracle', icon: '🔴', category: 'database' },
  { name: 'PostgreSQL', icon: '🐘', category: 'database' },

  // RAG (AI 하위 카테고리로 처리)
  { name: 'Langchain', icon: '🔗', category: 'ai' },
  { name: 'LangGraph', icon: '📊', category: 'ai' },
  { name: 'VectorDB', icon: '🗄️', category: 'database' },

  // Tools
  { name: 'Docker', icon: '🐳', category: 'tools' },
];
