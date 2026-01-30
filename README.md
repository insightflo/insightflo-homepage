# InsightFlo Homepage

AI 기반 서비스 개발 전문가 홈페이지

## 기술 스택

- **프레임워크**: Astro
- **스타일링**: Tailwind CSS v4
- **언어**: TypeScript
- **배포**: GitHub Pages

## 프로젝트 구조

```
insightflo-homepage/
├── src/
│   ├── components/
│   │   ├── common/       # 공통 컴포넌트
│   │   └── sections/     # 섹션별 컴포넌트
│   ├── layouts/          # 레이아웃
│   │   └── Layout.astro
│   ├── pages/            # 페이지
│   │   └── index.astro
│   ├── data/             # 정적 데이터
│   │   ├── services.ts
│   │   └── techStack.ts
│   ├── styles/           # 글로벌 스타일
│   │   └── global.css
│   └── types/            # 타입 정의
│       └── index.ts
├── docs/                 # 기획 문서
├── specs/                # 화면 명세
└── public/               # 정적 파일
```

## 시작하기

### 개발 서버 실행

```bash
npm run dev
```

로컬 서버: http://localhost:4321

### 빌드

```bash
npm run build
```

빌드 결과물: `./dist/`

### 프리뷰

```bash
npm run preview
```

## 배포

`main` 브랜치에 푸시하면 GitHub Actions가 자동으로 GitHub Pages에 배포합니다.

## 문서

- [PRD](docs/planning/01-prd.md) - 프로젝트 요구사항
- [TRD](docs/planning/02-trd.md) - 기술 요구사항
- [Design System](docs/planning/05-design-system.md) - 디자인 시스템
- [Coding Convention](docs/planning/07-coding-convention.md) - 코딩 컨벤션

## 라이센스

MIT
