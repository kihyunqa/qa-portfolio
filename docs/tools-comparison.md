# 🔧 QA 도구 비교 분석

> QA Portfolio - kihyunqa | 주요 도구별 특징 및 선택 기준

---

## 1. E2E 자동화 도구

| 항목 | Playwright | Selenium | Cypress | WebdriverIO |
|------|-----------|----------|---------|------------|
| 언어 | JS/TS/Python/Java | Java/Python/JS/C# | JS/TS | JS/TS |
| 브라우저 | Chrome/FF/Safari/Mobile | Chrome/FF/Safari/Edge | Chrome/FF/Edge | Chrome/FF/Safari |
| 설치 난이도 | 하 (브라우저 자동 다운) | 중 (WebDriver 설정) | 하 (all-in-one) | 중 |
| 실행 속도 | 빠름 | 느림 | 빠름 | 보통 |
| API 테스트 | 포함 | 별도 | 포함 | 포함 |
| 병렬 실행 | ✅ | ✅ (Grid) | ⚠️ (무료 제한) | ✅ |
| 모바일 | ✅ | ✅ (Appium) | ❌ | ✅ |
| 관리 | Playwright HQ | Selenium HQ | Cypress.io | OpenJS |

**선택: Playwright** — 단일 도구로 E2E + API + 모바일 + 접근성 전부 커버

---

## 2. API 테스트 도구

| 항목 | Playwright API | Postman | curl | REST Assured |
|------|--------------|---------|------|--------------|
| 환경 | 코드 기반 | GUI + CLI | CLI | Java |
| 스크립팅 | ✅ | ✅ | ❌ | ✅ |
| 인증 공유 | 세션 쿠키 | 포함 | 명시적 | 포함 |
| E2E 통합 | ✅ | ❌ | ❌ | ❌ |
| 리포트 | HTML | 포함 | ❌ | 포함 |
| CI/CD | ✅ | Newman | ✅ | ✅ |

---

## 3. 성능 테스트 도구

| 도구 | 특징 | 사용 시나리오 |
|------|------|----------------|
| Playwright | Navigation Timing API | 페이지별 로드 시간 |
| k6 | 대량 가상 유저 | 동시 100명 부하 테스트 |
| Lighthouse | 포괄적 점수화 | SEO + A11y + 성능 통합 |
| JMeter | 엔터프라이즈 | 복잡한 시나리오 |

---

## 4. 문서화 / 협업 도구

| 도구 | 역할 | MCP 연동 |
|------|------|----------|
| Notion | TC 결과 DB | ✅ notion MCP |
| GitHub | 코드 & 변경 이력 | ✅ github MCP |
| Slack | 실시간 알림 | ✅ slack MCP |
| Jira | 버그 트래킹 | 동일 연동 가능 |
| Confluence | 기술 문서 | 동일 연동 가능 |
