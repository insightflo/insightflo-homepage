// @TASK P0-T3 - 서비스 데이터
// @SPEC docs/planning/01-prd.md

import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'AI 솔루션 개발',
    description: '최신 AI 기술을 활용한 맞춤형 솔루션을 제공합니다.',
    icon: 'brain',
    features: [
      '생성형 AI 통합',
      '자연어 처리',
      '컴퓨터 비전',
      'MLOps 구축',
    ],
  },
  {
    title: '웹/앱 개발',
    description: '사용자 중심의 웹/앱 서비스를 개발합니다.',
    icon: 'code',
    features: [
      '반응형 웹 개발',
      '모바일 앱 개발',
      'API 설계 및 구현',
      '성능 최적화',
    ],
  },
  {
    title: '기술 컨설팅',
    description: '비즈니스에 최적화된 기술 전략을 제안합니다.',
    icon: 'lightbulb',
    features: [
      '기술 스택 선정',
      '아키텍처 설계',
      '코드 리뷰',
      '기술 교육',
    ],
  },
  {
    title: 'SaaS 구축',
    description: '안정적이고 확장 가능한 SaaS 플랫폼을 구축합니다.',
    icon: 'cloud',
    features: [
      'MVP 개발',
      '확장 가능한 아키텍처',
      '보안 및 인증',
      '모니터링 및 분석',
    ],
  },
];
