// @TASK P2-T2 - 서비스 데이터 (Services 섹션)
// @SPEC specs/screens/services.yaml

import type { ServiceItem } from '../types';

export const services: ServiceItem[] = [
  {
    title: 'AI 컨설팅 & 개발',
    description: 'AI 기술을 활용한 비즈니스 혁신 솔루션을 제공합니다.',
    icon: 'brain',
    features: [
      'GPT/LLM 기반 서비스 개발',
      'RAG 시스템 구축',
      'OCR 자동화 솔루션',
      'AI 워크플로우 최적화',
    ],
  },
  {
    title: '시스템 개발 (SI)',
    description: '안정적이고 확장 가능한 시스템을 구축합니다.',
    icon: 'code',
    features: [
      '웹/앱 서비스 개발',
      '기업 시스템 구축',
      'API 개발 및 연동',
      '클라우드 인프라 구성',
    ],
  },
];
