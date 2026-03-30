const { test, expect } = require('@playwright/test');

/**
 * Signup Flow E2E Tests
 * MCP 포트폴리오 - 회원가입 자동화 테스트
 */

test.describe('Signup Flow', () => {

  test('TC-SIGN-001: 정상 회원가입 플로우', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#name', '신규유저');
    await page.fill('#email', `newuser_${Date.now()}@example.com`);
    await page.fill('#password', 'SecurePass123!');
    await page.fill('#password-confirm', 'SecurePass123!');
    await page.click('button[type="submit"]');
    // 이메일 인증 대기 페이지로 이동
    await expect(page).toHaveURL(/verify|pending|complete/);
    await expect(page.locator('.success-message, .verify-message')).toBeVisible();
  });

  test('TC-SIGN-002: 이미 등록된 이메일 가입 시도', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#name', '중복유저');
    await page.fill('#email', 'testuser@example.com'); // 기존 계정
    await page.fill('#password', 'SecurePass123!');
    await page.fill('#password-confirm', 'SecurePass123!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toContainText(/이미|중복|사용/);
  });

  test('TC-SIGN-003: 비밀번호 불일치', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'newuser@example.com');
    await page.fill('#password', 'SecurePass123!');
    await page.fill('#password-confirm', 'DifferentPass456!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message, #password-confirm:invalid')).toBeVisible();
  });

  test('TC-SIGN-004: 비밀번호 복잡도 검증 (8자 미만)', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'test@example.com');
    await page.fill('#password', '123');
    await page.fill('#password-confirm', '123');
    await page.click('button[type="submit"]');
    await expect(page.locator('.error-message, .password-error')).toBeVisible();
  });

  test('TC-SIGN-005: 이메일 형식 유효성 검사', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'notvalidemail');
    await page.fill('#password', 'SecurePass123!');
    await page.click('button[type="submit"]');
    // HTML5 유효성 체크 or 서버 응답
    const emailInput = page.locator('#email');
    const validity = await emailInput.evaluate(el => el.validity.valid);
    expect(validity).toBe(false);
  });

  test('TC-SIGN-006: 필수 항목 미입력 시 제출 차단', async ({ page }) => {
    await page.goto('/signup');
    // 아무것도 입력 안 하고 제출
    await page.click('button[type="submit"]');
    // 페이지 이동 없이 그대로 머물러야 함
    await expect(page).toHaveURL(/signup/);
  });

  test('TC-SIGN-007: 회원가입 후 자동 로그인 여부', async ({ page }) => {
    // 이메일 인증 없이 자동 로그인되는 서비스인 경우
    await page.goto('/signup');
    const uniqueEmail = `autotest_${Date.now()}@example.com`;
    await page.fill('#name', '자동로그인테스트');
    await page.fill('#email', uniqueEmail);
    await page.fill('#password', 'SecurePass123!');
    await page.fill('#password-confirm', 'SecurePass123!');
    await page.click('button[type="submit"]');
    // 대시보드 또는 인증 대기 페이지 중 하나로
    await expect(page).toHaveURL(/dashboard|verify|pending/);
  });
});
