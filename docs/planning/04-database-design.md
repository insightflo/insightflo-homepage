# Database Design

## 프로젝트 특성

이 프로젝트는 **정적 사이트**로, 데이터베이스가 필요하지 않습니다.

---

## 콘텐츠 관리 방식

### 현재: 코드 내 하드코딩

모든 콘텐츠는 Astro 컴포넌트 내에 직접 작성됩니다.

```astro
---
// src/components/Services.astro
const services = [
  {
    title: "AI 컨설팅",
    description: "AI 기술을 활용한 비즈니스 솔루션 제안",
    icon: "brain"
  },
  {
    title: "시스템 개발",
    description: "웹/앱 개발 및 SI 시스템 구축",
    icon: "code"
  }
];
---
```

### 향후 확장 옵션

콘텐츠가 자주 변경되거나 포트폴리오가 늘어나면:

1. **Markdown 파일 기반**
   ```
   src/content/
   ├── portfolio/
   │   ├── project-1.md
   │   └── project-2.md
   └── services/
       ├── ai-consulting.md
       └── system-development.md
   ```

2. **JSON/YAML 데이터 파일**
   ```
   src/data/
   ├── services.json
   ├── techStack.json
   └── portfolio.json
   ```

3. **Headless CMS 연동** (필요시)
   - Notion API
   - Contentful
   - Strapi

---

## 데이터 스키마 (참고용)

추후 포트폴리오 추가 시 사용할 데이터 구조:

### 포트폴리오 항목

```typescript
interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  client?: string;           // 고객사 (공개 가능 시)
  period: string;            // 프로젝트 기간
  techStack: string[];       // 사용 기술
  thumbnail?: string;        // 썸네일 이미지
  link?: string;             // 프로젝트 링크 (있는 경우)
  category: 'ai' | 'web' | 'app' | 'si';
}
```

### 서비스 항목

```typescript
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}
```

### 기술 스택 항목

```typescript
interface TechStackItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'cloud' | 'database' | 'tools';
  proficiency?: 'expert' | 'advanced' | 'intermediate';
}
```

---

## 현재 단계에서의 결론

- **데이터베이스 불필요**: 정적 사이트로 충분
- **콘텐츠 관리**: 코드 내 하드코딩
- **향후 확장**: Markdown 또는 JSON 파일로 분리 검토
