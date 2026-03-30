# 🤖 Automation Tools & Skills

> QA Engineer - kihyunqa | 자동화 도구 역량 증명

---

## 1. Playwright

### 핵심 역량
- 다중 브라우저 테스트 (Chrome, Firefox, Safari, Mobile)
- API 테스트 (`request` context)
- 접근성(A11y) 테스트
- 성능 Navigation Timing API 연동
- 스크린샷/비디오 캐쳐

### 실제 작성 코드
```javascript
test('TC-LOGIN-001: 로그인 성공', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.fill('#username', 'user');
  await page.fill('#password', 'pass');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});
```

### 사용 커맨드
```bash
npx playwright test                    # 전체 실행
npx playwright test --ui               # UI 모드
npx playwright test login.spec.js      # 파일 지정
npx playwright show-report             # HTML 리포트
```

---

## 2. GitHub Actions CI/CD 연동

### qa-notify.yml 구조
```yaml
name: QA Auto Notify
on:
  push:
    paths: ['testcase_*.md', 'playwright-tests/**']
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: "📋 TC 업데이트: ${{ github.event.head_commit.message }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

---

## 3. MCP (Model Context Protocol) 5개 연동

| MCP | 역할 | 실제 활용 |
|-----|------|----------|
| filesystem | 로컈 파일 저장 | TC 파일 생성/저장 |
| github | 레포 관리 | 커밋, 파일 업데이트 |
| playwright | E2E 브라우저 | 실제 테스트 실행 |
| notion | 문서화 | TC 결과 DB 저장 |
| slack | 알림 | QA 컨플리원스 자동 발송 |

---

## 4. 도구 비교

| 항목 | Playwright | Selenium | Cypress |
|------|-----------|----------|--------|
| 언어 | JS/TS/Python | Java/Python/JS | JS/TS |
| 브라우저 | Chrome/FF/Safari/Mobile | Chrome/FF/Safari | Chrome/FF/Edge |
| 설치 난이도 | 하 | 중 | 하 |
| API 테스트 | 내장 | 백엔드 필요 | 내장 |
| 병렬 실행 | ✅ | ✅ | 무료 플랜 제한 |
| 도구 추체 | DevTools | WebDriver | DevTools |

---

## 5. 인증/자격증 (예정 포함)

- [ ] ISTQB Foundation Level
- [ ] AWS Certified Cloud Practitioner
- [x] Claude MCP 연동 포트폴리오 완성
- [x] GitHub Actions CI/CD 파이프라인 설계 및 구현
