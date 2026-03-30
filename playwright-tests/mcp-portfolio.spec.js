// mcp-portfolio.spec.js — 포트폴리오 사이트 자체 E2E 테스트
// Claude MCP 자동 생성 | 2026-03-30
const { test, expect } = require('@playwright/test');

const PORTFOLIO_URL = 'https://kihyunqa.github.io/qa-portfolio';

test.describe('포트폴리오 사이트 E2E 검증', () => {

  test('TC-PORT-001: 홈페이지 로딩 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    await expect(page).toHaveTitle(/QA/);
    await expect(page.locator('h1, .hero-title')).toBeVisible();
  });

  test('TC-PORT-002: MCP 5개 연동 표시 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    const mcpKeywords = ['filesystem', 'playwright', 'github', 'notion', 'slack'];
    const content = await page.content();
    for (const kw of mcpKeywords) {
      expect(content.toLowerCase()).toContain(kw.toLowerCase());
    }
  });

  test('TC-PORT-003: GitHub 링크 작동 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    const githubLink = page.locator('a[href*="github.com/kihyunqa"]').first();
    await expect(githubLink).toBeVisible();
  });

  test('TC-PORT-004: Notion 링크 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    const notionLink = page.locator('a[href*="notion.so"]').first();
    await expect(notionLink).toBeVisible();
  });

  test('TC-PORT-005: 모바일 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(PORTFOLIO_URL);
    await expect(page.locator('body')).toBeVisible();
  });

  test('TC-PORT-006: TC 수 표시 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    const content = await page.content();
    expect(content).toMatch(/1[0-9]{2}|140/);
  });

});
