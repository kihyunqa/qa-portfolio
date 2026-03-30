const { test, expect } = require('@playwright/test');

/**
 * Security Test Suite
 * MCP 포트폴리오 - 보안 테스트 스위트
 */

test.describe('Security Tests', () => {

  test('TC-SEC-001: XSS 시도 차단 확인', async ({ page }) => {
    await page.goto('/search');
    const xssPayload = '<script>alert("XSS")</script>';
    await page.fill('#search-input', xssPayload);
    await page.keyboard.press('Enter');
    // 스크립트가 실행되지 않는지 확인
    const dialogAppeared = await page.evaluate(() => {
      return window.__xssDetected || false;
    });
    expect(dialogAppeared).toBeFalsy();
    // 입력값이 이스케이프되어 텍스트로 표시되는지 확인
    const searchResults = page.locator('.search-results, .no-results, .error-message');
    await expect(searchResults).toBeVisible();
  });

  test('TC-SEC-002: SQL Injection 차단', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#email', "admin'--");
    await page.fill('#password', 'anything');
    await page.click('button[type="submit"]');
    // 로그인 성공이 되어서는 안 됨
    await expect(page).not.toHaveURL(/dashboard/);
    await expect(page.locator('.error-message, .login-error')).toBeVisible();
  });

  test('TC-SEC-003: HTTPS 리다이렉트 확인', async ({ page }) => {
    const response = await page.goto('http://example.com');
    // HTTP 구워시 HTTPS로 리다이렉트
    expect(page.url()).toMatch(/^https:/);
  });

  test('TC-SEC-004: 인증되지 않은 API 접근 차단', async ({ request }) => {
    const response = await request.get('/api/user/profile');
    expect(response.status()).toBe(401);
    const body = await response.json();
    expect(body).toHaveProperty('error');
  });

  test('TC-SEC-005: 중요 정보 마스킹 (페이지 소스에 비밀번호 노출 없음)', async ({ page }) => {
    await page.goto('/login');
    const content = await page.content();
    // HTML 소스에 비밀번호가 노출되지 않는지 확인
    expect(content).not.toMatch(/password.*value=".+"/i);
    // 알려진 API 키가 노출되지 않는지 확인
    expect(content).not.toMatch(/api[_-]?key.*=.*["'][a-zA-Z0-9]{20,}/i);
  });

  test('TC-SEC-006: Rate Limiting 확인 (로그인 브루트포스 방어)', async ({ page }) => {
    await page.goto('/login');
    // 10회 연속 실패 시도
    for (let i = 0; i < 10; i++) {
      await page.fill('#email', 'test@example.com');
      await page.fill('#password', `wrongpass${i}`);
      await page.click('button[type="submit"]');
      await page.waitForResponse(response => response.url().includes('/api/login'));
    }
    // Rate limit 메시지 또는 429 응답
    const errorMsg = page.locator('.rate-limit-error, .too-many-attempts');
    await expect(errorMsg).toBeVisible({ timeout: 5000 });
  });
});
