// accessibility.spec.js — 접근성 자동화 | Claude MCP 자동 생성
const { test, expect } = require('@playwright/test');

test.describe('접근성 TC', () => {
  test('TC-A11Y-001: 모든 이미지 alt 텍스트', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const imgs = await page.locator('img').all();
    for (const img of imgs) {
      const alt = await img.getAttribute('alt');
      expect(alt).not.toBeNull();
    }
  });

  test('TC-A11Y-002: Tab 키 내비게이션', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => document.activeElement?.tagName);
    expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']).toContain(focused);
  });

  test('TC-A11Y-003: 람드마크 역할', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.locator('main, [role="main"]')).toBeVisible();
    await expect(page.locator('nav, [role="navigation"]')).toBeVisible();
  });

  test('TC-A11Y-004: 폼 레이블', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    const inputs = await page.locator('input').all();
    for (const input of inputs) {
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        await expect(label).toBeVisible();
      }
    }
  });
});
