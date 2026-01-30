# Coding Convention

## 1. 프로젝트 구조

```
insightflo-homepage/
├── src/
│   ├── components/       # 재사용 가능한 컴포넌트
│   │   ├── common/       # 공통 컴포넌트 (Button, Card 등)
│   │   └── sections/     # 섹션별 컴포넌트
│   ├── layouts/          # 레이아웃 컴포넌트
│   ├── pages/            # 페이지 (Astro 라우팅)
│   ├── styles/           # 글로벌 스타일
│   └── data/             # 정적 데이터 (JSON/TS)
├── public/               # 정적 파일 (이미지, 폰트)
├── docs/                 # 기획 문서
└── tests/                # 테스트 (선택)
```

---

## 2. 네이밍 컨벤션

### 2.1 파일명

| 타입 | 컨벤션 | 예시 |
|------|--------|------|
| Astro 컴포넌트 | PascalCase | `Hero.astro`, `ServiceCard.astro` |
| 레이아웃 | PascalCase | `Layout.astro` |
| 페이지 | kebab-case | `index.astro`, `about.astro` |
| 스타일 | kebab-case | `global.css` |
| 데이터 | camelCase | `services.ts`, `techStack.ts` |

### 2.2 컴포넌트명

```astro
---
// 파일명과 동일하게 PascalCase
// src/components/ServiceCard.astro
---
```

### 2.3 CSS 클래스명

Tailwind CSS 유틸리티 클래스 사용.
커스텀 클래스 필요 시: kebab-case

```html
<!-- Tailwind 클래스 -->
<div class="flex items-center gap-4">

<!-- 커스텀 클래스 (필요시) -->
<div class="service-card">
```

### 2.4 변수 & 함수

| 타입 | 컨벤션 | 예시 |
|------|--------|------|
| 변수 | camelCase | `userName`, `isLoading` |
| 상수 | UPPER_SNAKE_CASE | `API_URL`, `MAX_ITEMS` |
| 함수 | camelCase | `handleClick`, `formatDate` |
| 타입/인터페이스 | PascalCase | `ServiceItem`, `TechStack` |

---

## 3. Astro 컴포넌트 구조

```astro
---
// 1. 타입 임포트
import type { ServiceItem } from '../types';

// 2. 컴포넌트 임포트
import Card from './Card.astro';

// 3. Props 정의
interface Props {
  title: string;
  items: ServiceItem[];
}

// 4. Props 구조분해
const { title, items } = Astro.props;

// 5. 로직 (필요시)
const formattedItems = items.map(item => ({
  ...item,
  slug: item.title.toLowerCase().replace(/\s+/g, '-')
}));
---

<!-- 6. 템플릿 -->
<section class="py-20">
  <h2 class="text-4xl font-bold">{title}</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    {formattedItems.map(item => (
      <Card title={item.title} description={item.description} />
    ))}
  </div>
</section>

<!-- 7. 스코프 스타일 (필요시) -->
<style>
  section {
    /* 컴포넌트 스코프 스타일 */
  }
</style>
```

---

## 4. TypeScript 규칙

### 4.1 타입 정의

```typescript
// src/types/index.ts

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

export interface TechStackItem {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'ai' | 'cloud' | 'database' | 'tools';
}
```

### 4.2 타입 사용

```typescript
// 명시적 타입 선언
const services: ServiceItem[] = [...];

// 함수 타입
function formatDate(date: Date): string {
  // ...
}
```

---

## 5. Tailwind CSS 가이드

### 5.1 클래스 순서 (권장)

```html
<div class="
  {/* 1. 레이아웃 */}
  flex items-center justify-center

  {/* 2. 크기 */}
  w-full h-64

  {/* 3. 스페이싱 */}
  p-4 m-2 gap-4

  {/* 4. 배경 */}
  bg-white

  {/* 5. 테두리 */}
  border border-gray-200 rounded-lg

  {/* 6. 그림자 */}
  shadow-md

  {/* 7. 타이포그래피 */}
  text-lg font-semibold text-gray-800

  {/* 8. 트랜지션 */}
  transition-all duration-200

  {/* 9. 호버/포커스 */}
  hover:shadow-lg hover:bg-gray-50
">
```

### 5.2 반응형 패턴

```html
<!-- Mobile First -->
<div class="
  grid grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
">
```

---

## 6. 접근성 (a11y)

### 6.1 필수 사항

```html
<!-- 이미지 alt -->
<img src="..." alt="서비스 아이콘" />

<!-- 버튼 라벨 -->
<button aria-label="메뉴 열기">
  <MenuIcon />
</button>

<!-- 링크 텍스트 -->
<a href="...">서비스 자세히 보기</a>  <!-- "여기 클릭" 지양 -->

<!-- 시맨틱 태그 -->
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
```

### 6.2 색상 대비

- 텍스트와 배경의 대비율 4.5:1 이상
- 큰 텍스트 (18px+)는 3:1 이상

---

## 7. 이미지 최적화

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---

<!-- Astro Image 컴포넌트 사용 -->
<Image
  src={heroImage}
  alt="히어로 이미지"
  width={1200}
  height={600}
  format="webp"
  loading="lazy"
/>
```

---

## 8. Git 커밋 컨벤션

### 8.1 커밋 메시지 형식

```
<type>: <subject>

[optional body]
```

### 8.2 타입

| 타입 | 설명 |
|------|------|
| feat | 새 기능 |
| fix | 버그 수정 |
| docs | 문서 변경 |
| style | 코드 포맷팅 (기능 변경 없음) |
| refactor | 리팩토링 |
| test | 테스트 추가/수정 |
| chore | 빌드, 설정 변경 |

### 8.3 예시

```
feat: 히어로 섹션 구현
fix: 모바일 메뉴 버그 수정
docs: README 업데이트
style: 들여쓰기 수정
```

---

## 9. 브랜치 전략

```
main          # 프로덕션 (GitHub Pages 배포)
  └── feature/*   # 기능 개발
      └── feature/hero-section
      └── feature/services-section
```

---

## 10. 코드 품질 도구

### 10.1 필수

- **Prettier**: 코드 포맷팅
- **ESLint**: 린팅

### 10.2 설정 파일

```json
// .prettierrc
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

```json
// .eslintrc.json
{
  "extends": [
    "eslint:recommended",
    "plugin:astro/recommended"
  ]
}
```
