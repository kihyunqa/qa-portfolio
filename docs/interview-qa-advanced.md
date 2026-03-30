# 🎟 면접 대비 QA 자동화 Q&A (고급편)

> QA Engineer kihyunqa | 현장에서 예상되는 심층 질문 대비

---

## Q1. Playwright를 선택한 이유는?

**A.**  
Selenium은 WebDriver 프로토콜 간접저에 세션 관리가 복잡하고, Cypress는 페이지내 실행구조로 브라우저 바깥 템플릿과 상호작용이 제당합니다. Playwright는 Chromium/Gecko/WebKit 세 엔진을 동일한 API로 통제하며 병렬 실행, API 컨텍스트, 모바일 시뮬레이션까지 다 말아주기 때문에 단일 도구로 전체 QA 커버리지가 가능합니다.

---

## Q2. API 테스트를 E2E와 어떻게 통합합니까?

**A.**  
Playwright의 `APIRequestContext`를 사용합니다. `playwright.request.newContext()`로 벤더없는 HTTP 클라이언트를 생성한 뒤, E2E 테스트와 같은 `test.describe` 블록에서 API 테스트를 실행합니다. 로그인 후 API를 호출하는 시나리오도 세션 쿨키를 공유해 인증 상태를 유지하면서 테스트할 수 있습니다.

---

## Q3. 테스트 피라미드를 실무에서 어떻게 적용하나요?

**A.**  
Unit 70% / Integration 20% / E2E 10% 비율을 목표로 합니다.

- **Unit**: 컴포넌트 단위 검증 (Jest) — 빠르고 피드백 빠름
- **Integration**: API 레이어 연동 검증 (Playwright API Context)
- **E2E**: 중요 유저 플로우만 (Playwright browser) — 로그인/결제/검색

E2E를 너무 많이 떠리면 실행 시간이 길어져서 CI/CD 피드백이 늘어집니다.

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
1. 코드 push 시 GitHub Actions에서 Playwright 테스트 자동 트리거
2. TC 업로드 시 Slack 알림 자동 발송 (SLACK_BOT_TOKEN Secret 연동)
3. 실패 시 HTML 리포트 + 스크린샷 아카이브
4. 그 다음 PR 머지 가능 개수 관확

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

실제 `accessibility.spec.js` 8건 작성 완료.

---

## Q7. 성능 테스트 접근 방법은?

**A.**  
Playwright의 `performance.getEntriesByType('navigation')` API를 활용:

```javascript
const timing = await page.evaluate(() => {
  const nav = performance.getEntriesByType('navigation')[0];
  return { domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime };
});
expect(timing.domContentLoaded).toBeLessThan(3000);
```

대량 부하는 k6 도구로 보완합니다.

---

## Q8. MCP란 무엇이며 QA에서 어떻게 활용합니까?

**A.**  
Model Context Protocol은 AI가 외부 도구에 다이렉트 연결할 수 있는 표준 프로토콜입니다. 저는 Claude Desktop에 5개 MCP 서버를 연동해:

- `filesystem`: TC 파일 로컈 저장
- `github`: 커밋 + GitHub Actions 트리거
- `playwright`: E2E 브라우저 실행
- `slack`: QA 컨플리언스 알림
- `notion`: TC 결과 DB 문서화

테스트 실행부터 알림, 문서화, 커밋까지 대화 조작 한 번에 실행 가능한 자동화를 구현했습니다.

---

## Q9. 버그 우선순위를 어떻게 정하나요?

**A.**  
위험도(사용자 영향도) x 빡도(발생 주기)를 기준으로:

| 등급 | 조건 | 예시 | 대응 |
|------|------|------|------|
| P1 | 높음 x 높음 | 결제 버그 | 즐시 |
| P2 | 높음 x 낙음 | 검색 오류 | 당일 |
| P3 | 낙음 x 높음 | UI 교정 | 주중 |
| P4 | 낙음 x 낙음 | 문서 오타 | 수시 |

---

## Q10. 테스트 콌버리지 100%가 목표인가요?

**A.**  
단호 No. 100% 쾄버리지는 버그가 없음을 보장하지 않습니다. 리스크 기반 접근 (Risk-Based Testing)으로 공를들이는 기능부터 테스트하고, 테스트 목적은 신뢰도를 높이는 것이지 100% 증명이 아닙니다. 80% 콌버리지 + 계춝적 리스크 관리가 현실적으로 적절합니다.
