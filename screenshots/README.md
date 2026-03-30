# 📸 Screenshots

> QA 자동화 테스트 실행 증거 스크린샷 모음

## 스크린샷 수집 방식

Playwright의 `page.screenshot()` 메서드를 통해 자동으로 수집됩니다.

```javascript
// playwright.config.js
export default {
  use: {
    screenshot: 'only-on-failure',  // 실패 시자동 캐츪
    video: 'retain-on-failure',
  }
};
```

## 폴더 구조

```
screenshots/
├── login/
│   ├── login-success.png          # 로그인 성공
│   ├── login-fail-wrong-pw.png    # 잘못된 비밀번호
│   └── login-fail-empty.png       # 빈 입력
├── search/
│   ├── search-results.png         # 검색 결과
│   └── search-empty.png           # 결과 없음
├── cart/
│   ├── cart-add.png               # 장바구니 추가
│   ├── cart-remove.png            # 상품 제거
│   └── cart-empty.png             # 빈 장바구니
├── payment/
│   ├── checkout-form.png          # 결제 폼
│   ├── payment-success.png        # 결제 성공
│   └── payment-fail.png           # 결제 실패
└── slack/
    └── slack-notification.png     # Slack 알림 증거
```

## 수집 예정 스크린샷

| 파일명 | 내용 | 수집 도구 |
|---------|------|----------|
| login-success.png | 로그인 성공 화면 | Playwright screenshot() |
| slack-notification.png | Slack 알림 수신 | 명령만 |
| github-actions.png | Actions 실행 결과 | GitHub UI |

> 스크린샷은 Playwright 실행 시 자동 생성됩니다.
> 로컈에서 `npx playwright test --reporter=html` 실행 후 `playwright-report/` 폴더 확인
