# CHANGELOG

## [2026-03-30] v5.0.0 - 포트폴리오 최종 완성형

### Added
- `playwright-tests/notification.spec.js` — 포트폴리오 사이트 Slack 알림 검증 (8 TC)
- `playwright-tests/mcp-portfolio.spec.js` — MCP 포트폴리오 통합 검증 (10 TC)
- `testcase_notification.md` — Slack 알림 TC 20건
- `testcase_cicd.md` — CI/CD 파이프라인 TC 20건
- `testcase_notion.md` — Notion MCP 연동 TC 20건
- `docs/cover-letter.md` — 직군별 3버전 자기소개서
- `docs/portfolio-summary.md` — 채용담당자용 1페이지 요약
- `README.md` v4.0 전면 리뉴얼 (레포 구조 완전 반영)

### Stats
- TC 누적: 210건+
- Playwright spec: 13개
- docs 파일: 14개
- skills 파일: 7개

---

## [2026-03-30] v4.0.0 - 프레임워크 + 요약렐

### Added
- `playwright-tests/signup.spec.js` — 회원가입 E2E
- `playwright-tests/helpers/page-objects.js` — POM 구조
- `playwright-tests/playwright.config.js` — 멀티 브라우저 설정
- `docs/portfolio-summary.md` v1 — 채용담당자용
- `docs/mcp-workflow-diagram.md` — MCP 파이프라인 다이어그램

---

## [2026-03-30] v3.0.0 - 포트폴리오 고도화

### Added
- `playwright-tests/payment.spec.js` — 결제 플로우 E2E (6 TC)
- `playwright-tests/security.spec.js` — 보안 TC (XSS/SQL/Rate Limit)
- `e2e-scenarios/signup-flow.md`, `checkout-flow.md`
- `test-cases/tc-auth.md`, `tc-cart.md`, `tc-search-api.md`
- `docs/test-metrics.md`, `bug-report-template.md`, `qa-strategy.md`
- `skills/mcp-integration.md`

---

## [2026-03-30] v2.0.0 - 실제 코드 + 증거 파일

### Added
- `playwright-tests/` 6개 실제 코드 (login/search/cart/api/performance/accessibility)
- `skills/` 6개 스킬 문서 완성
- TC 추가 3개 (performance/security/accessibility)
- 2번째 GitHub Actions workflow

---

## [2026-03-29] v1.5.0 - QA 자동화 루틴

### Added
- `qa-automation-report.md` 전면 업데이트
- `e2e-scenarios/payment-flow.md`, `search-flow.md`
- `testcase_api-testing.md` (20 TC), `testcase_bug-report.md`
- `CHANGELOG.md` 최초 생성
- `docs/interview-qa.md`, `interview-qa-advanced.md`
- Slack 일일 QA 리포트 자동 발송 시작

---

## [2026-03-28] v1.0.0 - MCP 5개 연동 완료

### Added
- MCP 5개 (filesystem/github/playwright/notion/slack) 실제 연동
- `testcase_login.md` (20 TC)
- `testcase_mcp-integration.md` (30 TC)
- `index.html` MCP 5개 반영
- `.github/workflows/qa-notify.yml` GitHub Actions
- Slack 봇 초대 + 메시지 전송 성공

---

## 마일스통 요약

| 버전 | 주요 내용 | TC 누적 |
|------|----------|----------|
| v1.0.0 | MCP 5개 최소 연동 | 54건 |
| v1.5.0 | QA 자동화 루틴 완성 | 74건 |
| v2.0.0 | 실제 코드 + 증거 | 90건 |
| v3.0.0 | 고도화 완성 | 125건 |
| v4.0.0 | POM + 요약렐 | 150건 |
| v5.0.0 | 최종 완성형 | 210건+ |
