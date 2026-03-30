// signup.spec.js — Claude MCP 자동 생성 | 2026-03-30
const { test, expect } = require('@playwright/test');

test.describe('회원가입 E2E 테스트', () => {
  test('TC-SIGNUP-001: 정상 회원가입', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'newuser@test.com');
    await page.fill('#password', 'Password123!');
    await page.fill('#confirm-password', 'Password123!');
    await page.fill('#name', '테스트유저');
    await page.click('button[type=submit]');
    await expect(page).toHaveURL('/welcome');
  });

  test('TC-SIGNUP-002: 이미 사용 중인 이메일', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'existing@test.com');
    await page.fill('#password', 'Password123!');
    await page.click('button[type=submit]');
    await expect(page.locator('.error-message')).toContainText('이미 사용 중인 이메일');
  });

  test('TC-SIGNUP-003: 비밀번호 불일치', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#password', 'Password123!');
    await page.fill('#confirm-password', 'Different456!');
    await page.click('button[type=submit]');
    await expect(page.locator('.error-message')).toContainText('비밀번호가 일치하지 않습니다');
  });

  test('TC-SIGNUP-004: 이메일 인증 발송', async ({ page }) => {
    await page.goto('/signup');
    await page.fill('#email', 'verify@test.com');
    await page.fill('#password', 'Password123!');
    await page.fill('#confirm-password', 'Password123!');
    await page.click('button[type=submit]');
    await expect(page.locator('.success-message')).toContainText('인증 메일이 발송되었습니다');
  });

  test('TC-SIGNUP-005: 필수 항목 미입력', async ({ page }) => {
    await page.goto('/signup');
    await page.click('button[type=submit]');
    await expect(page.locator('.error-message').first()).toBeVisible();
  });
});
