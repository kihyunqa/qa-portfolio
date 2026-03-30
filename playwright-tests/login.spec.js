// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Login E2E Test Suite
 * MCP Portfolio - kihyunqa
 * Covers: TC-LOGIN-001 ~ TC-LOGIN-010
 */

test.describe('🔐 Login Flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('TC-LOGIN-001: 유효한 이메일/비밀번호로 로그인 성공', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
    await expect(page).toHaveURL(/secure/);
  });

  test('TC-LOGIN-002: 잘못된 비밀번호로 로그인 실패 - 에러 메시지 표시', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'wrongpassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
    await expect(page.locator('.flash.error')).toContainText('Your password is invalid');
  });

  test('TC-LOGIN-003: 이메일 미입력 시 로그인 불가', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
  });

  test('TC-LOGIN-004: 비밀번호 미입력 시 로그인 불가', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
  });

  test('TC-LOGIN-005: 로그인 성공 후 로그아웃', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/secure/);
    await page.click('a[href="/logout"]');
    await expect(page).toHaveURL(/login/);
  });

  test('TC-LOGIN-006: 로그인 페이지 UI 요소 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
  });

  test('TC-LOGIN-007: 존재하지 않는 계정으로 로그인 실패', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'nonexistent@test.com');
    await page.fill('#password', 'anypassword');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.error')).toBeVisible();
  });

  test('TC-LOGIN-008: 로그인 페이지 타이틀 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(page).toHaveTitle(/The Internet/);
  });

  test('TC-LOGIN-009: 스크린샷 캡처 - 로그인 성공 화면', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash.success')).toBeVisible();
    await page.screenshot({ path: 'screenshots/login-success.png', fullPage: true });
  });

  test('TC-LOGIN-010: 네트워크 응답 코드 확인 (200 OK)', async ({ page }) => {
    const responses = [];
    page.on('response', res => {
      if (res.url().includes('/login')) responses.push(res.status());
    });
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect(responses).toContain(200);
  });
});
