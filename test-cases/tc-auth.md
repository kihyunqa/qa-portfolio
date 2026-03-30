# 테스트 케이스: 인증 (Authentication)

| TC ID | 테스트 명 | 우선순위 | 표준입력값 | 기대 결과 | 실제 결과 | 상태 |
|-------|---------|----------|----------|----------|----------|------|
| AUTH-001 | 유효한 오이디/비밀번호로 로그인 | P0 | ID: admin@test.com / PW: Pass123! | 대시보드 이동 | 대시보드 이동 | ✅ Pass |
| AUTH-002 | 잘못된 비밀번호 로그인 | P1 | ID: admin@test.com / PW: wrongpass | 에러 메시지 표시 | 에러 메시지 표시 | ✅ Pass |
| AUTH-003 | 매우 즧은 비밀번호 (4자) | P2 | PW: 1234 | 유효성 오류 | 유효성 오류 | ✅ Pass |
| AUTH-004 | 비밀번호 없이 제출 | P1 | 비밀번호 필드 비우지 않음 | 필수필드 오류 | 필수필드 오류 | ✅ Pass |
| AUTH-005 | 이메일 형식 오류 | P2 | ID: notanemail | 유효성 오류 | 유효성 오류 | ✅ Pass |
| AUTH-006 | SQL Injection 시도 | P0 | ID: admin'-- | 차단 | 차단 | ✅ Pass |
| AUTH-007 | 로그아웃 후 세션 혔료 | P1 | 로그아웃 클릭 | 새션 제거 | 새션 제거 | ✅ Pass |
| AUTH-008 | 비밀번호 마스킹 |겼 | 비밀번호 입력 | ***로 표시 | ***로 표시 | ✅ Pass |
| AUTH-009 | 세션 만료 (비활성) | P1 | 30분 비활성 | 자동 로그아웃 | 자동 로그아웃 | ✅ Pass |
| AUTH-010 | 여러 탭에서 동시 로그인 | P2 | 브라우저 2개 | 동시 세션 유지 | 동시 세션 유지 | ✅ Pass |

---

## 자동화 TC (평시그)

```javascript
// playwright-tests/login.spec.js 연계
test('AUTH-001: 유효한 로그인', async ({ page }) => {
  await page.goto('/login');
  await page.fill('#email', 'admin@test.com');
  await page.fill('#password', 'Pass123!');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL(/dashboard/);
});
```

---

## 버그 이력

| 버그 ID | 연관 TC | 현상 | 상태 |
|---------|---------|------|------|
| BUG-001 | AUTH-007 | 새로고침 시 로그아웃 | Fixed |
| BUG-002 | AUTH-006 | SQL Injection 미차단 | Fixed |
