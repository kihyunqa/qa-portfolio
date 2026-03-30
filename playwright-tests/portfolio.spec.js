// portfolio.spec.js — 포트폴리오 사이트 자체 E2E | Claude MCP 자동 생성
const { test, expect } = require('@playwright/test');

test.describe('포트폴리오 사이트 E2E', () => {
  const URL = 'https://kihyunqa.github.io/qa-portfolio/';

  test('TC-PORT-001: 홈 페이지 로딩', async ({ page }) => {
    await page.goto(URL);
    await expect(page).toHaveTitle(/QA/);
    await expect(page.locator('h1, .hero-title')).toBeVisible();
  });

  test('TC-PORT-002: MCP 연동 섹션 노출', async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator('text=MCP')).toBeVisible();
    await expect(page.locator('text=Notion')).toBeVisible();
    await expect(page.locator('text=GitHub')).toBeVisible();
    await expect(page.locator('text=Slack')).toBeVisible();
  });

  test('TC-PORT-003: 프로젝트 섹션 표시', async ({ page }) => {
    await page.goto(URL);
    const projects = page.locator('.project-card, [class*="project"]');
    await expect(projects.first()).toBeVisible();
  });

  test('TC-PORT-004: Contact 섹션 접근', async ({ page }) => {
    await page.goto(URL + '#contact');
    await expect(page.locator('#contact, [id="contact"]')).toBeVisible();
  });

  test('TC-PORT-005: 모바일 레이아웃 iPhone 13', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(URL);
    await expect(page.locator('body')).toBeVisible();
    const overflow = await page.evaluate(() =>
      document.body.scrollWidth > window.innerWidth
    );
    expect(overflow).toBeFalsy();
  });

  test('TC-PORT-006: GitHub 링크 유효성', async ({ page }) => {
    await page.goto(URL);
    const githubLinks = page.locator('a[href*="github.com/kihyunqa"]');
    await expect(githubLinks.first()).toBeVisible();
  });
});
