# CLAUDE.md - 회사 소개 페이지

> 이 파일은 Claude Code가 프로젝트를 이해하는 데 사용됩니다.

## 프로젝트 개요

**개인사업자 회사 소개 페이지** - AI 활용 웹/앱 개발 및 SI/시스템 구축 사업을 소개하는 정적 웹사이트입니다.

- **목적**: 프로젝트 의뢰 기업과 협업 파트너에게 신뢰감 형성
- **타입**: 정적 사이트 (원페이지)
- **배포**: GitHub Pages

## 기술 스택

| 영역 | 기술 |
|------|------|
| 프레임워크 | Astro |
| 스타일링 | Tailwind CSS |
| 언어 | TypeScript |
| 호스팅 | GitHub Pages |
| CI/CD | GitHub Actions |

## 프로젝트 구조

```
insightflo-homepage/
├── src/
│   ├── components/
│   │   ├── common/          # 공통 컴포넌트 (Header, Footer, Card 등)
│   │   └── sections/        # 섹션 컴포넌트 (Hero, Services 등)
│   ├── layouts/
│   │   └── Layout.astro     # 기본 레이아웃
│   ├── pages/
│   │   └── index.astro      # 메인 페이지
│   ├── data/                # 정적 데이터
│   │   ├── services.ts
│   │   └── techStack.ts
│   ├── types/               # TypeScript 타입
│   └── styles/
│       └── global.css
├── public/
│   ├── images/
│   └── favicon.ico
├── docs/
│   └── planning/            # 기획 문서
├── specs/
│   ├── screens/             # 화면 명세 (YAML)
│   └── shared/              # 공통 컴포넌트/타입 명세
├── TASKS.md                 # 태스크 목록
├── astro.config.mjs
├── tailwind.config.cjs
└── package.json
```

## 주요 명령어

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 화면 구성

원페이지 구성으로 6개 섹션 + Header/Footer:

1. **Hero** (#hero) - 회사명, tagline, CTA
2. **Services** (#services) - AI 컨설팅, 시스템 개발
3. **Tech Stack** (#tech) - 기술 역량 (14개 기술)
4. **About** (#about) - 회사 소개, 핵심 가치
5. **Portfolio** (#portfolio) - 준비 중
6. **Contact** (#contact) - 이메일 연락

## 디자인 시스템

### 색상
- Primary: Deep Blue (#1E3A5F, `blue-900`)
- Accent: Blue-600 (#2563EB)
- Background: White, Slate-50
- Text: Slate-800 (제목), Slate-500 (본문)

### 폰트
- 한글: Pretendard
- 영문: Inter

### 반응형 브레이크포인트
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 코딩 컨벤션

### 파일명
- Astro 컴포넌트: PascalCase (`Hero.astro`)
- 데이터 파일: camelCase (`services.ts`)

### 컴포넌트 구조
```astro
---
// 1. 타입 임포트
// 2. 컴포넌트 임포트
// 3. Props 정의
// 4. 로직
---
<!-- 템플릿 -->
<style>
  /* 스코프 스타일 */
</style>
```

### Tailwind 클래스 순서
레이아웃 → 크기 → 스페이싱 → 배경 → 테두리 → 타이포그래피 → 트랜지션 → 호버

## 참고 문서

- 기획 문서: `docs/planning/`
- 화면 명세: `specs/screens/`
- 태스크 목록: `TASKS.md`
