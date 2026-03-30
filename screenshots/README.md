# 📸 Screenshots

> MCP Portfolio - kihyunqa | 테스트 실행 증거 스크린샷 아카이브

---

## 화면 목록

| 파일명 | 설명 | 관련 TC |
|--------|------|----------|
| login-success.png | 로그인 성공 화면 | TC-LOGIN-009 |
| search-result.png | 검색 결과 화면 | TC-SEARCH-010 |
| checkout-complete.png | 주문 완료 화면 | TC-CART-010 |
| accessibility-login.png | 접근성 로그인 화면 | TC-A11Y-008 |
| performance-baseline.png | 성능 측정 기준 화면 | TC-PERF-008 |

---

## 스크린샷 생성 방법

스크린샷은 Playwright 테스트 실행 시 자동 생성됩니다:

```javascript
// 성공 시 스크린샷
await page.screenshot({ path: 'screenshots/login-success.png', fullPage: true });

// 실패 시 자동 캐쳐 (playwright.config.js 설정)
screenshot: 'only-on-failure'
```

## 실행 방법

```bash
# 전체 테스트 실행 (스크린샷 자동 저장)
npx playwright test --project=chromium

# 특정 스펙만
npx playwright test login.spec.js
```
