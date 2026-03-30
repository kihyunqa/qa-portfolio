# 🎭 Playwright E2E Test Suite

> MCP Portfolio - kihyunqa | 실제 실행 가능한 Playwright 테스트 코드

## 📁 파일 구조

```
playwright-tests/
├── playwright.config.js      # 설정 파일 (5개 브라우저 병렬 실행)
├── login.spec.js             # 로그인 TC-LOGIN-001~010 (10건)
├── search.spec.js            # 검색 TC-SEARCH-001~010 (10건)
├── cart.spec.js              # 장바구니 TC-CART-001~010 (10건)
├── api.spec.js               # REST API TC-API-001~010 (10건)
├── accessibility.spec.js     # 접근성 TC-A11Y-001~008 (8건)
└── performance.spec.js       # 성능 TC-PERF-001~008 (8건)
```

## 🧪 TC 총계: 56건

| 파일 | TC 수 | 대상 |
|------|-------|------|
| login.spec.js | 10 | 로그인/로그아웃 플로우 |
| search.spec.js | 10 | 검색/필터/XSS 방어 |
| cart.spec.js | 10 | 장바구니/결제 완료 |
| api.spec.js | 10 | REST API (GET/POST/PUT/PATCH/DELETE) |
| accessibility.spec.js | 8 | 접근성 (A11y) |
| performance.spec.js | 8 | 성능/로드타임 |

## 🚀 실행 방법

```bash
# 의존성 설치
npm init playwright@latest

# 전체 실행
npx playwright test

# 특정 파일만 실행
npx playwright test login.spec.js

# UI 모드로 실행
npx playwright test --ui

# 리포트 확인
npx playwright show-report
```

## 🌐 테스트 대상

- https://the-internet.herokuapp.com/ (로그인/접근성)
- https://www.saucedemo.com/ (장바구니/결제/성능)
- https://demoqa.com/books (검색)
- https://jsonplaceholder.typicode.com (REST API)

## 🖥 지원 브라우저

| 브라우저 | 엔진 | 환경 |
|---------|------|------|
| Chrome | Chromium | Desktop |
| Firefox | Gecko | Desktop |
| Safari | WebKit | Desktop |
| Chrome Mobile | Chromium | Pixel 5 |
| Safari Mobile | WebKit | iPhone 13 |
