// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Performance & Load Time Test Suite
 * MCP Portfolio - kihyunqa
 * Covers: TC-PERF-001 ~ TC-PERF-008
 */

test.describe('⚡ Performance Tests', () => {

  test('TC-PERF-001: 로그인 페이지 로드 시간 3초 이하', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://the-internet.herokuapp.com/login');
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(3000);
    console.log(`✅ 로그인 페이지 로드: ${elapsed}ms`);
  });

  test('TC-PERF-002: 메인 페이지 로드 시간 측정', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://the-internet.herokuapp.com/');
    const elapsed = Date.now() - start;
    console.log(`⏱ 메인 페이지 로드: ${elapsed}ms`);
    expect(elapsed).toBeLessThan(5000);
  });

  test('TC-PERF-003: Navigation Timing API로 DOMContentLoaded 측정', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const timing = await page.evaluate(() => {
      const nav = performance.getEntriesByType('navigation')[0];
      return {
        domContentLoaded: nav.domContentLoadedEventEnd - nav.startTime,
        loadComplete: nav.loadEventEnd - nav.startTime,
      };
    });
    console.log('📊 Navigation Timing:', timing);
    expect(timing.domContentLoaded).toBeLessThan(3000);
  });

  test('TC-PERF-004: 첫 번째 페인트 시간 측정', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const paintMetrics = await page.evaluate(() => {
      const entries = performance.getEntriesByType('paint');
      return entries.map(e => ({ name: e.name, time: e.startTime }));
    });
    console.log('🎨 Paint metrics:', paintMetrics);
    expect(paintMetrics.length).toBeGreaterThanOrEqual(0);
  });

  test('TC-PERF-005: 리소스 개수 카운트', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const resources = await page.evaluate(() =>
      performance.getEntriesByType('resource').length
    );
    console.log(`📦 리소스 개수: ${resources}`);
    expect(resources).toBeGreaterThan(0);
  });

  test('TC-PERF-006: SauceDemo 인벤토리 페이지 로드', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    const start = Date.now();
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list');
    const elapsed = Date.now() - start;
    console.log(`⚡ 인벤토리 로드: ${elapsed}ms`);
    expect(elapsed).toBeLessThan(4000);
  });

  test('TC-PERF-007: 느린 유저 시뮬레이션 (slow_user)', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'performance_glitch_user');
    await page.fill('#password', 'secret_sauce');
    const start = Date.now();
    await page.click('#login-button');
    await page.waitForSelector('.inventory_list', { timeout: 15000 });
    const elapsed = Date.now() - start;
    console.log(`🐢 Slow user 로드: ${elapsed}ms`);
    expect(elapsed).toBeLessThan(15000);
  });

  test('TC-PERF-008: 스크린샷 - 성능 측정 완료 화면', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.screenshot({ path: 'screenshots/performance-baseline.png', fullPage: true });
  });
});
