// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Accessibility (A11y) Test Suite
 * MCP Portfolio - kihyunqa
 * Covers: TC-A11Y-001 ~ TC-A11Y-008
 */

test.describe('♿ Accessibility Tests', () => {

  test('TC-A11Y-001: 페이지 lang 속성 존재 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const lang = await page.getAttribute('html', 'lang');
    expect(lang).not.toBeNull();
  });

  test('TC-A11Y-002: 모든 이미지 alt 속성 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const images = await page.locator('img').all();
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('TC-A11Y-003: 폼 input에 label 연결 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const usernameLabel = page.locator('label[for="username"]');
    await expect(usernameLabel).toBeVisible();
    const passwordLabel = page.locator('label[for="password"]');
    await expect(passwordLabel).toBeVisible();
  });

  test('TC-A11Y-004: 키보드 Tab 네비게이션 동작', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['INPUT', 'BUTTON', 'A']).toContain(focused);
  });

  test('TC-A11Y-005: 버튼 role 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    const btn = page.locator('button[type="submit"]');
    await expect(btn).toBeVisible();
    const role = await btn.getAttribute('type');
    expect(role).toBe('submit');
  });

  test('TC-A11Y-006: 페이지 title 태그 존재 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const title = await page.title();
    expect(title).not.toBe('');
    expect(title.length).toBeGreaterThan(0);
  });

  test('TC-A11Y-007: viewport meta 태그 확인', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const viewport = await page.$('meta[name="viewport"]');
    // viewport 태그가 있는 경우 content 확인
    if (viewport) {
      const content = await viewport.getAttribute('content');
      expect(content).toBeTruthy();
    }
  });

  test('TC-A11Y-008: 스크린샷 - 접근성 기준 화면', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.screenshot({ path: 'screenshots/accessibility-login.png', fullPage: true });
  });
});
