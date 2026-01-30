# TASKS.md - 회사 소개 페이지

> **프로젝트**: 개인사업자 회사 소개 페이지
> **기술 스택**: Astro + Tailwind CSS + TypeScript + GitHub Pages
> **생성일**: 2025-01-30

---

## 프로젝트 개요

| 항목 | 값 |
|------|-----|
| 목표 | 프로젝트 의뢰 기업과 협업 파트너에게 신뢰감 형성 |
| 타입 | 정적 사이트 (원페이지) |
| 배포 | GitHub Pages |
| 화면 수 | 6개 섹션 + Header/Footer |

---

## Phase 0: 프로젝트 초기화

> **목표**: Astro 프로젝트 생성 및 기본 환경 설정
> **병렬 실행**: 불가 (순차 실행)

### [x] P0-T1: Astro 프로젝트 생성
- **담당**: backend-specialist (또는 직접)
- **작업 내용**:
  - `npm create astro@latest` 실행
  - TypeScript 템플릿 선택
  - 프로젝트 구조 확인
- **완료 조건**:
  - `npm run dev` 실행 시 로컬 서버 동작
  - 기본 페이지 접근 가능

### [x] P0-T2: Tailwind CSS 설정
- **담당**: frontend-specialist
- **의존성**: P0-T1
- **작업 내용**:
  - `@astrojs/tailwind` 설치
  - `tailwind.config.cjs` 커스텀 설정
  - 디자인 시스템 색상/폰트 적용
- **파일**:
  - `tailwind.config.cjs`
  - `src/styles/global.css`
- **완료 조건**:
  - Tailwind 클래스 적용 동작 확인
  - 커스텀 색상 (`brand-900` 등) 사용 가능

### [x] P0-T3: 프로젝트 구조 설정
- **담당**: frontend-specialist
- **의존성**: P0-T2
- **작업 내용**:
  - `src/components/` 폴더 구조 생성
  - `src/layouts/Layout.astro` 생성
  - `src/data/` 폴더 생성 (정적 데이터)
- **파일**:
  ```
  src/
  ├── components/
  │   ├── common/
  │   └── sections/
  ├── layouts/
  │   └── Layout.astro
  ├── data/
  │   ├── services.ts
  │   └── techStack.ts
  └── types/
      └── index.ts
  ```
- **완료 조건**:
  - 폴더 구조 생성 완료
  - Layout.astro에서 Tailwind 동작 확인

### [x] P0-T4: GitHub Actions 설정
- **담당**: backend-specialist
- **의존성**: P0-T1
- **작업 내용**:
  - `.github/workflows/deploy.yml` 생성
  - GitHub Pages 배포 워크플로우 설정
- **파일**: `.github/workflows/deploy.yml`
- **완료 조건**:
  - main 브랜치 push 시 자동 배포 트리거

---

## Phase 1: 공통 컴포넌트

> **목표**: Header, Footer 등 공통 컴포넌트 구현
> **병렬 실행**: P1-T1, P1-T2 병렬 가능

### [x] P1-T1: Header 컴포넌트 구현
- **담당**: frontend-specialist
- **의존성**: P0-T3
- **화면 명세**: `specs/shared/components.yaml` → Header
- **작업 내용**:
  - 로고 (회사명)
  - 데스크톱 네비게이션 메뉴
  - 모바일 햄버거 메뉴
  - Sticky 헤더
- **파일**:
  - `src/components/common/Header.astro`
  - `src/components/common/MobileMenu.astro` (필요시)
- **테스트 시나리오**:
  - [ ] 데스크톱: 가로 메뉴 표시
  - [ ] 모바일: 햄버거 버튼 표시
  - [ ] 메뉴 클릭 시 해당 섹션 스크롤
- **완료 조건**:
  - 반응형 동작 확인
  - 네비게이션 스무스 스크롤 동작

### [x] P1-T2: Footer 컴포넌트 구현
- **담당**: frontend-specialist
- **의존성**: P0-T3
- **화면 명세**: `specs/shared/components.yaml` → Footer
- **작업 내용**:
  - 저작권 텍스트
  - (선택) SNS 링크
- **파일**: `src/components/common/Footer.astro`
- **완료 조건**:
  - 저작권 연도 동적 표시
  - 반응형 레이아웃

### [x] P1-T3: Layout 통합
- **담당**: frontend-specialist
- **의존성**: P1-T1, P1-T2
- **작업 내용**:
  - Header + Footer를 Layout에 통합
  - 메타 태그 설정 (SEO)
  - Open Graph 태그 설정
- **파일**: `src/layouts/Layout.astro`
- **완료 조건**:
  - `<slot />`에 콘텐츠 삽입 동작
  - SEO 메타 태그 확인

---

## Phase 2: 핵심 섹션 구현

> **목표**: Hero, Services, Tech Stack 섹션 구현
> **병렬 실행**: P2-T1, P2-T2, P2-T3 병렬 가능 (의존성 없음)

### [x] P2-T1: Hero 섹션 구현
- **담당**: frontend-specialist
- **의존성**: P1-T3
- **화면 명세**: `specs/screens/hero.yaml`
- **작업 내용**:
  - 회사명 (H1)
  - 한 줄 소개 (tagline)
  - CTA 버튼 ("서비스 보기")
  - 배경 그라데이션 (딥블루)
- **파일**: `src/components/sections/Hero.astro`
- **데이터**: 하드코딩 (회사명, tagline)
- **테스트 시나리오**:
  - [ ] 회사명, tagline 표시
  - [ ] CTA 클릭 시 Services 섹션 스크롤
  - [ ] 모바일 반응형
- **완료 조건**:
  - 3초 내 회사 정체성 전달 가능
  - CTA 동작 확인

### [x] P2-T2: Services 섹션 구현
- **담당**: frontend-specialist
- **의존성**: P1-T3
- **화면 명세**: `specs/screens/services.yaml`
- **작업 내용**:
  - 섹션 타이틀 ("서비스")
  - 서비스 카드 2개 (AI 컨설팅, 시스템 개발)
  - 각 카드: 아이콘, 제목, 설명, 특징 목록
- **파일**:
  - `src/components/sections/Services.astro`
  - `src/components/common/ServiceCard.astro`
  - `src/data/services.ts`
- **데이터 구조**:
  ```typescript
  interface Service {
    icon: string;
    title: string;
    description: string;
    features: string[];
  }
  ```
- **테스트 시나리오**:
  - [ ] 2개 서비스 카드 표시
  - [ ] 데스크톱: 2열 그리드
  - [ ] 모바일: 1열 스택
- **완료 조건**:
  - 서비스 정보 명확히 전달
  - 반응형 그리드 동작

### [x] P2-T3: Tech Stack 섹션 구현
- **담당**: frontend-specialist
- **의존성**: P1-T3
- **화면 명세**: `specs/screens/tech-stack.yaml`
- **작업 내용**:
  - 섹션 타이틀 ("기술 스택")
  - 기술 뱃지 그리드 (아이콘 + 이름)
  - 14개 기술 표시
- **파일**:
  - `src/components/sections/TechStack.astro`
  - `src/components/common/TechBadge.astro`
  - `src/data/techStack.ts`
- **데이터 구조**:
  ```typescript
  interface TechItem {
    name: string;
    icon: string;
    category: string;
  }
  ```
- **아이콘 소스**: simple-icons 또는 devicons
- **테스트 시나리오**:
  - [ ] 14개 기술 뱃지 표시
  - [ ] 데스크톱: 6열, 태블릿: 3열, 모바일: 2열
  - [ ] 호버 시 그림자 효과
- **완료 조건**:
  - 기술 역량 시각적 어필
  - 반응형 그리드 동작

---

## Phase 3: 보조 섹션 구현

> **목표**: About, Portfolio, Contact 섹션 구현
> **병렬 실행**: P3-T1, P3-T2, P3-T3 병렬 가능

### [ ] P3-T1: About 섹션 구현
- **담당**: frontend-specialist
- **의존성**: P2 완료
- **화면 명세**: `specs/screens/about.yaml`
- **작업 내용**:
  - 섹션 타이틀 ("회사 소개")
  - 비전/미션 문구
  - 핵심 가치 카드 (2-3개)
  - (선택) 대표 소개
- **파일**:
  - `src/components/sections/About.astro`
  - `src/components/common/ValueCard.astro`
- **테스트 시나리오**:
  - [ ] 비전 문구 표시
  - [ ] 핵심 가치 카드 표시
  - [ ] 모바일: 1열 레이아웃
- **완료 조건**:
  - 회사 가치관 전달
  - 신뢰감 형성

### [ ] P3-T2: Portfolio 섹션 구현 (준비 중)
- **담당**: frontend-specialist
- **의존성**: P2 완료
- **화면 명세**: `specs/screens/portfolio.yaml`
- **작업 내용**:
  - 섹션 타이틀 ("포트폴리오")
  - "준비 중입니다" 플레이스홀더
- **파일**: `src/components/sections/Portfolio.astro`
- **완료 조건**:
  - 플레이스홀더 표시
  - 추후 확장 가능한 구조

### [ ] P3-T3: Contact 섹션 구현
- **담당**: frontend-specialist
- **의존성**: P2 완료
- **화면 명세**: `specs/screens/contact.yaml`
- **작업 내용**:
  - 섹션 타이틀 ("문의하기")
  - 안내 문구
  - 이메일 주소 (mailto: 링크)
  - 어두운 배경 (slate-900 또는 blue-900)
- **파일**: `src/components/sections/Contact.astro`
- **테스트 시나리오**:
  - [ ] 이메일 클릭 시 이메일 앱 실행
  - [ ] 배경색 적용
- **완료 조건**:
  - 문의 유도 명확
  - mailto 링크 동작

---

## Phase 4: 페이지 통합 및 최적화

> **목표**: 모든 섹션 통합 및 성능 최적화
> **병렬 실행**: 불가 (순차 실행)

### [ ] P4-T1: 페이지 통합
- **담당**: frontend-specialist
- **의존성**: P3 전체 완료
- **작업 내용**:
  - `src/pages/index.astro`에 모든 섹션 통합
  - 섹션 순서: Hero → Services → Tech → About → Portfolio → Contact
  - 앵커 ID 설정 (#hero, #services, #tech, #about, #portfolio, #contact)
- **파일**: `src/pages/index.astro`
- **완료 조건**:
  - 모든 섹션 순서대로 표시
  - 네비게이션 앵커 동작

### [ ] P4-T2: 반응형 테스트
- **담당**: test-specialist
- **의존성**: P4-T1
- **작업 내용**:
  - 데스크톱 (1280px+) 테스트
  - 태블릿 (768px) 테스트
  - 모바일 (375px) 테스트
- **테스트 항목**:
  - [ ] Header 반응형
  - [ ] 각 섹션 그리드 반응형
  - [ ] 폰트 크기 조정
  - [ ] 터치 타겟 크기 (모바일)
- **완료 조건**:
  - 모든 브레이크포인트에서 정상 동작

### [ ] P4-T3: 성능 최적화
- **담당**: frontend-specialist
- **의존성**: P4-T1
- **작업 내용**:
  - 이미지 최적화 (Astro Image 컴포넌트)
  - 폰트 최적화 (Pretendard)
  - Lighthouse 성능 점수 측정
- **목표**:
  - Lighthouse Performance: 90+
  - FCP < 1.5s
  - LCP < 2.5s
- **완료 조건**:
  - Lighthouse 성능 90+ 달성

### [ ] P4-T4: SEO 최적화
- **담당**: frontend-specialist
- **의존성**: P4-T1
- **작업 내용**:
  - 메타 타이틀/설명 설정
  - Open Graph 태그
  - robots.txt 생성
  - sitemap.xml 생성 (@astrojs/sitemap)
- **파일**:
  - `src/layouts/Layout.astro` (메타 태그)
  - `public/robots.txt`
- **완료 조건**:
  - SEO 메타 태그 완료
  - robots.txt, sitemap.xml 생성

---

## Phase 5: 배포 및 도메인 연결

> **목표**: GitHub Pages 배포 및 커스텀 도메인 연결
> **병렬 실행**: 불가 (순차 실행)

### [ ] P5-T1: GitHub Pages 배포
- **담당**: backend-specialist
- **의존성**: P4 전체 완료
- **작업 내용**:
  - `astro.config.mjs`에 site, base 설정
  - GitHub Actions 배포 확인
  - 배포 URL 접근 테스트
- **완료 조건**:
  - `https://{username}.github.io/{repo}/` 접근 가능

### [ ] P5-T2: 커스텀 도메인 연결
- **담당**: backend-specialist
- **의존성**: P5-T1
- **작업 내용**:
  - `public/CNAME` 파일 생성
  - DNS 설정 안내 (또는 직접 설정)
  - HTTPS 인증서 확인
- **파일**: `public/CNAME`
- **완료 조건**:
  - 커스텀 도메인으로 접근 가능
  - HTTPS 동작 확인

### [ ] P5-T3: 최종 검증
- **담당**: test-specialist
- **의존성**: P5-T2
- **작업 내용**:
  - 프로덕션 환경 전체 테스트
  - 모든 링크 동작 확인
  - 이메일 mailto 동작 확인
  - 모바일 실기기 테스트
- **완료 조건**:
  - 프로덕션 환경 정상 동작
  - 모든 기능 테스트 통과

---

## 의존성 다이어그램

```
P0-T1 (Astro 생성)
  │
  ├─→ P0-T2 (Tailwind) ──→ P0-T3 (구조) ──→ P1-T1 (Header)
  │                                        ├─→ P1-T2 (Footer)
  │                                        │
  └─→ P0-T4 (GitHub Actions)              ├─→ P1-T3 (Layout 통합)
                                           │
                                           ├─→ P2-T1 (Hero) ────┐
                                           ├─→ P2-T2 (Services) ┼─→ P3-T1 (About) ────┐
                                           └─→ P2-T3 (TechStack)├─→ P3-T2 (Portfolio) ┼─→ P4-T1 (통합)
                                                                └─→ P3-T3 (Contact) ──┘     │
                                                                                            ├─→ P4-T2 (반응형)
                                                                                            ├─→ P4-T3 (성능)
                                                                                            └─→ P4-T4 (SEO)
                                                                                                  │
                                                                                                  ↓
                                                                                            P5-T1 (배포)
                                                                                                  │
                                                                                                  ↓
                                                                                            P5-T2 (도메인)
                                                                                                  │
                                                                                                  ↓
                                                                                            P5-T3 (검증)
```

---

## 병렬 실행 가능 그룹

| Phase | 병렬 실행 가능 태스크 |
|-------|---------------------|
| P0 | T1 → T2 → T3 (순차), T4는 T1 이후 병렬 |
| P1 | T1, T2 (병렬) → T3 |
| P2 | T1, T2, T3 (병렬) |
| P3 | T1, T2, T3 (병렬) |
| P4 | T1 → T2, T3, T4 (T3,T4는 병렬 가능) |
| P5 | T1 → T2 → T3 (순차) |

---

## 예상 소요 시간

| Phase | 예상 시간 |
|-------|----------|
| P0 | 1-2시간 |
| P1 | 2-3시간 |
| P2 | 3-4시간 |
| P3 | 2-3시간 |
| P4 | 2-3시간 |
| P5 | 1-2시간 |
| **총계** | **11-17시간** |

---

## 참고 문서

- 기획: `docs/planning/`
- 화면 명세: `specs/screens/`
- 디자인 시스템: `docs/planning/05-design-system.md`
- 코딩 컨벤션: `docs/planning/07-coding-convention.md`
