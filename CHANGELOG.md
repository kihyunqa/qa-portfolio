# CHANGELOG

## [2026-03-30] v3.0.0 - 업그레이드 코드

### Added
- `playwright-tests/payment.spec.js` - 결제 플로우 E2E 테스트 (6개 TC)
- `playwright-tests/security.spec.js` - 보안 테스트 스위트 (XSS/SQL Injection/Rate Limit)
- `e2e-scenarios/signup-flow.md` - 회원가입 E2E 시나리오
- `e2e-scenarios/checkout-flow.md` - 컴플리트 주문 E2E 시나리오
- `test-cases/tc-auth.md` - 인증 TC 10건
- `test-cases/tc-cart.md` - 장바구니 TC 10건
- `test-cases/tc-search-api.md` - 검색 API TC 15건
- `docs/test-metrics.md` - QA KPI 대시보드
- `docs/bug-report-template.md` - 버그 리포트 표준 양식 + 실제 예시 3건
- `docs/qa-strategy.md` - QA 전략 문서
- `skills/mcp-integration.md` - MCP 5개 도구 연동 스킬 문서
- `screenshots/README.md` - 스크린샷 구조 안내

---

## [2026-03-29] v2.0.0 - 코드 및 문서 레벨업

### Added
- `playwright-tests/login.spec.js` - 로그인 E2E 실제 코드
- `playwright-tests/search.spec.js` - 검색 E2E 실제 코드
- `playwright-tests/cart.spec.js` - 장바구니 E2E 실제 코드
- `playwright-tests/api.spec.js` - API 테스트 코드
- `playwright-tests/performance.spec.js` - 성능 테스트
- `playwright-tests/accessibility.spec.js` - 접근성 테스트
- `playwright-tests/playwright.config.js` - 플레이라이트 설정
- `skills/` 전체 6개 파일 완성
- `testcase_performance.md`, `testcase_security.md`, `testcase_accessibility.md`
- `PROFILE.md` 전면 업데이트
- 2번째 GitHub Actions workflow 추가

---

## [2026-03-28] v1.5.0 - 평실시 자동화 파이프라인

### Added
- `testcase_api-testing.md` (TC 20건)
- `testcase_bug-report.md`
- `CHANGELOG.md` 추가
- `docs/interview-qa.md` - 면접 Q&A 8문항
- `docs/interview-qa-advanced.md` - 고도 면접 Q&A
- `docs/linkedin-post.md` - 4가지 버전 포스트
- Slack 일일 QA 리포트 자동 발송
- `e2e-scenarios/payment-flow.md`, `search-flow.md`
- `qa-automation-report.md` 전면 업데이트

---

## [2026-03-27] v1.0.0 - MCP 5개 연동 완료

### Added
- MCP 5개 (filesystem, github, playwright, notion, slack) 연동 완료
- `testcase_login.md` (TC 20건)
- `testcase_mcp-integration.md` (TC 30건)
- `testcase_e2e-playwright.md` (E2E 4시나리오)
- `README.md` MCP 기준 업데이트
- `.github/workflows/main.yml` GitHub Actions
- `e2e-scenarios/login-flow.md`
- Slack 봇 초대 및 메시지 전송 성공
- `index.html` MCP 5개 반영

---

## 마일스톤 요약

| 버전 | 주요 내용 | TC 누적 |
|------|----------|----------|
| v1.0.0 | MCP 5개 최소 연동 | 54건 |
| v1.5.0 | 하루일 QA 자동화 루틴 완성 | 74건 |
| v2.0.0 | 실제 코드 + 실졸 QA 증거 | 90건 |
| v3.0.0 | 마무리 + 고도화 | 125건+ |
