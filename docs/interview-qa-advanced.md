# 🎟 면접 대비 QA 자동화 Q&A (고급편)

> QA Engineer kihyunqa | 현장에서 예상되는 심층 질문 대비  
> 수치 최종 업데이트: 2026-03-31 (TC 145건+, Playwright 12 spec, Actions 2개)  
> **기초편**: `docs/interview-qa.md` (Q1~Q12) | **고급편**: 이 파일 (Q1~Q11)

---

## Q1. Playwright를 선택한 이유는?

**A.**
Selenium은 WebDriver 프로토콜 간접 연결로 세션 관리가 복잡하고, Cypress는 페이지 내 실행 구조로 브라우저 바깥 API와 상호작용이 제한됩니다. Playwright는 Chromium/Gecko/WebKit 세 엔진을 동일한 API로 제어하며 병렬 실행, API 컨텍스트, 모바일 시뮬레이션까지 지원하기 때문에 단일 도구로 전체 QA 커버리지가 가능합니다. 실제로 12개 spec 파일을 작성해 로그인·결제·보안·접근성·성능·알림 등 전 영역을 커버했습니다.

---

## Q2. API 테스트를 E2E와 어떻게 통합합니까?

**A.**
Playwright의 `APIRequestContext`를 사용합니다. `playwright.request.newContext()`로 독립적인 HTTP 클라이언트를 생성한 뒤, E2E 테스트와 같은 `test.describe` 블록에서 API 테스트를 실행합니다. 로그인 후 API를 호출하는 시나리오도 세션 쿠키를 공유해 인증 상태를 유지하면서 테스트할 수 있습니다. `api.spec.js`에 실제 구현 코드가 있습니다.

---

## Q3. 테스트 피라미드를 실무에서 어떻게 적용하나요?

**A.**
Unit 70% / Integration 20% / E2E 10% 비율을 목표로 합니다.

- **Unit**: 컴포넌트 단위 검증 (Jest) — 빠르고 피드백 빠름
- **Integration**: API 레이어 연동 검증 (Playwright API Context)
- **E2E**: 중요 유저 플로우만 (Playwright browser) — 로그인/결제/검색

E2E를 너무 많이 늘리면 실행 시간이 길어져 CI/CD 피드백이 느려집니다. 이번 포트폴리오에서도 12개 spec이 최대한 독립적으로 실행되도록 설계했습니다.

---

## Q4. Flaky Test를 어떻게 다룹니까?

**A.**
1. **원인 파악**: 애니메이션 지연, 네트워크 타임아웃, 데이터 충돌 여부 확인
2. **waitForSelector** 대신 `waitForResponse` 또는 `expect().toBeVisible()` 사용
3. **Retry 설정**: `playwright.config.js`에 `retries: 2` (CI 환경)
4. **시리얼화**: 테스트 간 의존성 제거, `beforeAll` 실행 후 테스트 독립성 보장

---

## Q5. CI/CD에서 QA는 어떻게 동작합니까?

**A.**
2개의 GitHub Actions 워크플로우를 운영 중입니다.

1. `qa-notify.yml`: `testcase_*.md`, `test-cases/**`, `playwright-tests/**` 파일 push 시 자동 트리거 → 변경된 파일 목록과 커밋 메시지를 Slack 새-채널으로 자동 알림 (SLACK_BOT_TOKEN Secret 연동)
2. `main.yml`: `index.html`, `README.md`, `docs/**` 변경 시 포트폴리오 구조 검증 + Actions 요약 생성

실패 시 HTML 리포트와 스크린샷을 아카이브하는 구조도 설계되어 있습니다.

---

## Q6. 접근성(A11y) 테스트를 어떻게 접근합니까?

**A.**
WCAG 2.1 AA 기준을 기반으로 Playwright로 자동화합니다:

```javascript
// lang 속성 확인
const lang = await page.getAttribute('html', 'lang');
expect(lang).not.toBeNull();

// Tab 키보드 네비게이션
await page.keyboard.press('Tab');
const focused = await page.evaluate(() => document.activeElement?.tagName);
expect(['INPUT', 'BUTTON', 'A']).toContain(focused);
```

실제 `accessibility.spec.js`에 WCAG 기준 테스트 케이스 작성 완료. `testcase_accessibility.md`에도 접근성 TC가 별도로 관리됩니다.

---

## Q7. 성능 테스트 접근 방법은?

**A.**
Playwright의 `performance.getEntriesByType('navigation')` API를 활용합니다:

```javascript
const timing = await page.evaluate(() => {
  const nav = performance.getEntriesByType('navigation')[0];
  return { domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime };
});
expect(timing.domContentLoaded).toBeLessThan(3000);
```

`performance.spec.js`에 실제 구현이 있으며, 대량 부하 테스트는 k6 도구로 보완합니다. `testcase_performance.md`에 성능 TC도 별도로 작성되어 있습니다.

---

## Q8. MCP란 무엇이며 QA에서 어떻게 활용합니까?

**A.**
Model Context Protocol은 AI가 외부 도구에 직접 연결할 수 있는 표준 프로토콜입니다. 저는 Claude Desktop에 5개 MCP 서버를 연동해:

- `filesystem`: TC 파일 로컬 저장 (145건+ 누적)
- `github`: 커밋 + GitHub Actions 트리거 (Actions 2개 운영)
- `playwright`: E2E 브라우저 실행 (12개 spec)
- `slack`: QA 완료 알림 자동 발송 (새-채널 실제 연동)
- `notion`: TC 결과 페이지 자동 문서화 (실제 연동 확인)

테스트 실행부터 알림, 문서화, 커밋까지 대화 한 번에 실행 가능한 자동화를 구현했습니다. 코드 0줄로 전체 파이프라인을 완성한 것이 핵심입니다.

---

## Q9. 버그 우선순위를 어떻게 정하나요?

**A.**
위험도(사용자 영향도) × 발생 빈도를 기준으로:

| 등급 | 조건 | 예시 | 대응 |
|------|------|------|------|
| P1 | 높음 × 높음 | 결제 버그 | 즉시 |
| P2 | 높음 × 낮음 | 검색 오류 | 당일 |
| P3 | 낮음 × 높음 | UI 정렬 | 주중 |
| P4 | 낮음 × 낮음 | 문서 오타 | 수시 |

`testcase_bug-report.md`에 실제 버그 리포트 포맷과 P1~P3 분류 케이스가 기록되어 있습니다.

---

## Q10. 테스트 커버리지 100%가 목표인가요?

**A.**
단호하게 No입니다. 100% 커버리지는 버그가 없음을 보장하지 않습니다.

중요한 건 **측정 기준이 무엇인가**입니다. 코드 라인 커버리지 100%는 TC 한 줄로도 달성 가능하지만, 그 코드가 올바른 입력값만 받는다면 아무 의미가 없습니다. 저는 아래 세 가지 커버리지를 함께 봅니다:

- **기능 커버리지**: 명세서 대비 TC가 커버하는 기능 비율
- **경로 커버리지**: Happy Path + Negative + 엣지케이스 3가지 유형 포함 여부
- **리스크 커버리지**: P1/P2 시나리오가 실제 자동화 테스트에 포함되어 있는가

80% 커버리지 + P1/P2 완전 커버 + 지속적인 리스크 리뷰가 현실적으로 가장 적절한 접근이라고 생각합니다.

---

## Q11. AI 시대에 QA 엔지니어의 역할은 어떻게 변화하나요?

**A.**
2026년 현재 AI 코딩 도구(GitHub Copilot, Cursor 등)가 보편화되면서 개발 속도가 빨라지고 있습니다. 이는 QA에게 두 가지 도전을 가져옵니다.

첫째, **테스트해야 할 코드가 더 빠르게 늘어납니다.** AI가 생성한 코드는 동작은 하지만 엣지케이스를 놓치거나 보안 취약점을 포함하는 경우가 있어, QA의 검증 역할이 더 중요해집니다.

둘째, **QA 자동화 설계 역량이 핵심이 됩니다.** TC를 직접 작성하는 시간보다, 어떤 시나리오를 커버할지 설계하고 AI 도구를 활용해 TC와 spec을 빠르게 생성·유지하는 능력이 더 중요해집니다.

저는 이번 포트폴리오에서 Claude MCP를 활용해 그 방향을 직접 실험했습니다. 코드 0줄, 대화만으로 TC 145건+, Playwright 12 spec, GitHub Actions 2개, Notion/Slack 연동까지 구축한 것은 AI 시대 QA 엔지니어의 실제 업무 방식을 미리 적용한 사례입니다.

앞으로의 QA 엔지니어는 **"테스트를 실행하는 사람"이 아니라 "품질 파이프라인을 설계하는 사람"**이 되어야 한다고 생각합니다.

---

*면접 심화 Q&A | 수치 최종 업데이트: 2026-03-31 | STEP 62 — 2026 AI 시대 Q11 추가, Q10 심화 보완 (TC 145건+, Playwright 12 spec, Actions 2개)*
