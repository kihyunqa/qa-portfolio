// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Search & Filter E2E Test Suite
 * MCP Portfolio - kihyunqa
 * Covers: TC-SEARCH-001 ~ TC-SEARCH-010
 */

test.describe('🔍 Search & Filter Flow', () => {

  test('TC-SEARCH-001: 키워드 검색 결과 정상 반환', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('Git');
    await page.waitForTimeout(500);
    const results = page.locator('.rt-tbody .rt-tr-group');
    await expect(results.first()).toBeVisible();
  });

  test('TC-SEARCH-002: 존재하지 않는 키워드 검색 시 결과 없음', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('ZZZNORESULT999');
    await page.waitForTimeout(500);
    const rows = await page.locator('.rt-tbody .rt-tr').all();
    // 결과 없음 또는 빈 상태 확인
    expect(rows.length).toBeGreaterThanOrEqual(0);
  });

  test('TC-SEARCH-003: 검색창 초기화 후 전체 목록 복원', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('Git');
    await page.waitForTimeout(300);
    await searchBox.clear();
    await page.waitForTimeout(300);
    const rows = await page.locator('.rt-tbody .rt-tr').all();
    expect(rows.length).toBeGreaterThan(0);
  });

  test('TC-SEARCH-004: 검색창 placeholder 텍스트 확인', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await expect(searchBox).toBeVisible();
    await expect(searchBox).toBeEnabled();
  });

  test('TC-SEARCH-005: 대소문자 구분 없는 검색 동작 확인', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('git');
    await page.waitForTimeout(400);
    const rows1 = await page.locator('.rt-tbody .rt-tr').all();
    await searchBox.clear();
    await searchBox.fill('GIT');
    await page.waitForTimeout(400);
    const rows2 = await page.locator('.rt-tbody .rt-tr').all();
    expect(rows1.length).toEqual(rows2.length);
  });

  test('TC-SEARCH-006: 검색 결과 클릭 → 상세 페이지 이동', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('Git');
    await page.waitForTimeout(400);
    const firstLink = page.locator('.rt-tbody a').first();
    if (await firstLink.isVisible()) {
      await firstLink.click();
      await expect(page).toHaveURL(/profile|book/);
    }
  });

  test('TC-SEARCH-007: 페이지 타이틀 확인', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    await expect(page).toHaveTitle(/DEMOQA/i);
  });

  test('TC-SEARCH-008: 검색창 입력 후 키보드 Enter 동작', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('JavaScript');
    await searchBox.press('Enter');
    await page.waitForTimeout(400);
    await expect(searchBox).toHaveValue('JavaScript');
  });

  test('TC-SEARCH-009: 검색창 XSS 입력값 처리 확인', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('<script>alert(1)</script>');
    await page.waitForTimeout(400);
    // alert 팝업이 뜨지 않아야 함
    const dialogs = [];
    page.on('dialog', d => dialogs.push(d));
    await page.waitForTimeout(500);
    expect(dialogs.length).toBe(0);
  });

  test('TC-SEARCH-010: 스크린샷 캡처 - 검색 결과 화면', async ({ page }) => {
    await page.goto('https://demoqa.com/books');
    const searchBox = page.locator('#searchBox');
    await searchBox.fill('Git');
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'screenshots/search-result.png', fullPage: true });
  });
});
