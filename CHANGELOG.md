# CHANGELOG

> kihyunqa/qa-portfolio 작업 히스토리  
> 전체 작업: Claude MCP 자동화 (코드 0줄)

---

## [v3.0.0] - 2026-03-30 · Playwright 실제 코드 + 전면 강화

### ✅ 추가됨 (이번 업데이트)
- `playwright-tests/login.spec.js` — 로그인 E2E 실제 코드 10건
- `playwright-tests/search.spec.js` — 검색 E2E 실제 코드 10건
- `playwright-tests/cart.spec.js` — 장바구니/결제 E2E 실제 코드 10건
- `playwright-tests/api.spec.js` — REST API 테스트 실제 코드 10건
- `playwright-tests/accessibility.spec.js` — A11y 접근성 실제 코드 8건
- `playwright-tests/performance.spec.js` — 성능 측정 실제 코드 8건
- `playwright-tests/playwright.config.js` — 5개 브라우저 병렬 실행 설정
- `playwright-tests/README.md` — 실행 방법 가이드
- `skills/manual-testing.md` — 수동 테스트 역량 (TC 20건 포함)
- `skills/automation-tools.md` — 자동화 도구 역량 증명
- `skills/api-testing.md` — API 테스트 TC 30건 포함
- `skills/ci-cd-pipeline.md` — CI/CD 파이프라인 역량
- `skills/test-strategy.md` — QA 전략 및 피라미드
- `testcase_performance.md` — 성능 TC 20건
- `testcase_security.md` — 보안 TC 20건 (OWASP 기준)
- `testcase_accessibility.md` — 접근성 TC 20건 (WCAG 2.1)
- `package.json` — npm 스크립트 (test:login, test:api 등)
- `screenshots/README.md` — 스크린샷 아카이브 설명
- `docs/mcp-architecture.md` — MCP 5개 아키텍처 다이어그램
- `docs/qa-checklist.md` — 릴리즈 전 QA 체크리스트

### 🔄 변경됨
- `PROFILE.md` — Playwright 56건 실제 코드 기준 전면 업데이트
- `e2e-scenarios/login-flow.md` — 시나리오 상세화

### 📊 v3.0.0 통계
- Playwright 실제 실행 가능 코드: **56건 (6개 스펙)**
- 전체 TC: **130건+**
- 문서 파일: **35개+**
- 지원 브라우저: **5개 (Chrome/Firefox/Safari/Mobile)**

---

## [v2.0.0] - 2026-03-30 · MCP 5개 완전 연동

### ✅ 추가됨
- `testcase_mcp-integration.md` — MCP 5개 통합 TC 30건
- `testcase_e2e-playwright.md` — E2E 브라우저 시나리오 4개
- `testcase_api-testing.md` — API QA TC 20건
- `testcase_bug-report.md` — 버그 리포트 3건
- `e2e-scenarios/payment-flow.md` — 결제 플로우
- `e2e-scenarios/search-flow.md` — 검색 플로우
- `.github/workflows/main.yml` — GitHub Actions CI/CD
- `docs/interview-qa.md` — 면접 대비 Q&A
- `docs/linkedin-post.md` — LinkedIn 4버전 포스트

---

## [v1.0.0] - 2026-03 · MCP 3개 최초 구축

### ✅ 추가됨
- `index.html` — 포트폴리오 메인 페이지
- `testcase_login.md` — 로그인 TC 24건
- `test-cases/` — 인증/장바구니/검색 TC
- `qa-automation-report.md` — QA 자동화 리포트
- `PROFILE.md` — 이력서

---

## 📊 전체 누적 통계

| 버전 | 주요 내용 | TC 건수 | MCP |
|------|---------|---------|-----|
| v1.0.0 | 포트폴리오 최초 구축 | 24건 | 3개 |
| v2.0.0 | MCP 5개 완전 연동 | +50건 | 5개 |
| v3.0.0 | Playwright 실제 코드 56건 | +56건 | 5개 |
| **합계** | **35개+ 파일** | **130건+** | **5개** |

---

*모든 작업은 Claude MCP로 자동화됨*
