# CHANGELOG

> kihyunqa/qa-portfolio 작업 히스토리  
> 전체 작업: Claude MCP 자동화 (코드 0줄)

---

## [v2.0.0] - 2026-03-30 · MCP 5개 완전 연동

### ✅ 추가됨
- `testcase_mcp-integration.md` — MCP 5개 통합 TC 30건
- `testcase_e2e-playwright.md` — E2E 브라우저 시나리오 4개
- `testcase_api-testing.md` — API QA TC 20건
- `testcase_bug-report.md` — 버그 리포트 3건 (해결율 100%)
- `e2e-scenarios/payment-flow.md` — 결제 플로우 E2E 3 시나리오
- `e2e-scenarios/search-flow.md` — 검색 플로우 E2E 4 시나리오
- `.github/workflows/main.yml` — TC 업로드 → Slack 자동 알림
- `CHANGELOG.md` — 이 파일
- `docs/interview-qa.md` — 면접 대비 QA 자동화 Q&A

### 🔄 변경됨
- `index.html` — MCP 3개 → 5개 전면 업데이트
- `README.md` — MCP 5개 기준 + 레포 구조 최신화
- `qa-automation-report.md` — MCP 5개 기준 전면 재작성

### 🔧 연동된 MCP
- ✅ filesystem · github · playwright · notion · slack

---

## [v1.5.0] - 2026-03 · MCP 3개 → 5개 확장

### ✅ 추가됨
- notion MCP 연동 — TC 결과 페이지 자동 문서화
- slack MCP 연동 — 새-채널 QA 완료 알림

### 🔄 변경됨
- MCP 카드 2개 추가 (notion, slack)
- 터미널 출력 라인 2개 추가

---

## [v1.0.0] - 2026-03 · MCP 3개 최초 구축

### ✅ 추가됨
- `index.html` — 포트폴리오 메인 페이지 (보라색 테마)
- `testcase_login.md` — 로그인 TC 24건
- `test-cases/tc-auth.md` — 인증 TC
- `test-cases/tc-cart.md` — 장바구니 TC
- `test-cases/tc-search-api.md` — 검색 API TC
- `e2e-scenarios/login-flow.md` — 로그인 E2E 시나리오
- `qa-automation-report.md` — QA 자동화 리포트 초안
- `PROFILE.md` — 이력서
- `docs/linkedin-post.md` — LinkedIn 포스트

### 🔧 연동된 MCP
- ✅ filesystem · github · playwright

---

## 📊 전체 통계

| 버전 | 추가 파일 | TC 건수 | MCP 수 |
|------|----------|---------|--------|
| v1.0.0 | 9개 | 24건 | 3개 |
| v1.5.0 | +2 MCP | - | 5개 |
| v2.0.0 | +9개 | +50건 | 5개 |
| **합계** | **20개+** | **74건+** | **5개** |

---

*모든 작업은 Claude MCP로 코드 0줄 자동화됨*
