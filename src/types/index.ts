// @TASK P0-T3 - 타입 정의
// @SPEC docs/planning/02-trd.md

/**
 * 서비스 항목 타입
 */
export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

/**
 * 기술 스택 항목 타입
 */
export interface TechStackItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'cloud' | 'database' | 'tools';
}

/**
 * 포트폴리오 항목 타입
 */
export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
}

/**
 * 네비게이션 링크 타입
 */
export interface NavLink {
  label: string;
  href: string;
}
