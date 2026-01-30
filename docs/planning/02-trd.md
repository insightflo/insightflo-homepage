# TRD (Technical Requirements Document)

## 1. 기술 스택 결정

### 결정 방식
- **사용자 레벨**: L3 (경험자)
- **결정 방식**: AI 추천 + 사용자 선택

### 1.1 프론트엔드

| 항목 | 선택 | 이유 |
|------|------|------|
| 프레임워크 | Astro | 정적 사이트에 최적화, 빠른 빌드, 컴포넌트 구조 |
| 스타일링 | Tailwind CSS | 빠른 개발, 일관된 디자인, 유틸리티 클래스 |
| 언어 | TypeScript | 타입 안전성, 개발 생산성 |

### 1.2 배포

| 항목 | 선택 | 이유 |
|------|------|------|
| 호스팅 | GitHub Pages | 무료, 간편한 배포, 도메인 연결 지원 |
| CI/CD | GitHub Actions | 자동 빌드 및 배포 |

### 1.3 기타

| 항목 | 선택 | 이유 |
|------|------|------|
| 아이콘 | simple-icons / devicons | 기술 스택 로고 |
| 폰트 | Pretendard 또는 Noto Sans KR | 한글 지원, 가독성 |

---

## 2. Decision Log

| 결정 | 대안 | 선택 이유 |
|------|------|----------|
| Astro | Next.js, HTML/CSS | 정적 사이트에 최적화, 컴포넌트 구조로 유지보수 용이 |
| Tailwind CSS | CSS 모듈, Styled Components | 빠른 개발, 일관된 디자인 시스템 |
| GitHub Pages | Vercel, Netlify | 무료, 이미 GitHub 사용 중, 충분한 기능 |

---

## 3. 프로젝트 구조

```
insightflo-homepage/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Services.astro
│   │   ├── TechStack.astro
│   │   ├── Portfolio.astro
│   │   └── Contact.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   └── favicon.ico
├── docs/
│   └── planning/
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── README.md
```

---

## 4. 성능 요구사항

| 지표 | 목표 | 측정 방법 |
|------|------|----------|
| Lighthouse Performance | 90+ | Chrome DevTools |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |
| Total Blocking Time | < 200ms | Lighthouse |

---

## 5. SEO 요구사항

- [ ] 메타 타이틀 및 설명
- [ ] Open Graph 태그
- [ ] Twitter Card
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] 시맨틱 HTML 구조

---

## 6. 반응형 브레이크포인트

| 디바이스 | 브레이크포인트 |
|----------|---------------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

---

## 7. 배포 프로세스

```
1. 로컬 개발 (npm run dev)
2. 빌드 (npm run build)
3. GitHub push
4. GitHub Actions 자동 트리거
5. GitHub Pages 배포
6. 커스텀 도메인 연결
```

### GitHub Actions 워크플로우

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

---

## 8. 개발 환경 설정

### 필수 도구
- Node.js 20+
- npm 또는 pnpm
- Git
- VS Code (권장)

### VS Code 확장
- Astro
- Tailwind CSS IntelliSense
- Prettier
- ESLint
