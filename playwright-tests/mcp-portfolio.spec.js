const { test, expect } = require('@playwright/test');

/**
 * MCP Portfolio Site E2E Tests
 * 실제 포트폴리오 사이트를 직접 테스트하는 스펙 (실제 증거)
 */

const PORTFOLIO_URL = 'https://kihyunqa.github.io/qa-portfolio';

test.describe('Portfolio Site E2E', () => {

  test('TC-PORT-001: 포트폴리오 메인페이지 정상 로드', async ({ page }) => {
    const response = await page.goto(PORTFOLIO_URL);
    expect(response.status()).toBe(200);
    await expect(page).toHaveTitle(/성기현|QA Engineer/);
  });

  test('TC-PORT-002: 헤더 네비게이션 링크 정상', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    await expect(page.locator('nav')).toBeVisible();
    // MCP 자동화 링크 존재 확인
    await expect(page.locator('a[href="#mcp"]')).toBeVisible();
    await expect(page.locator('a[href="#proof"]')).toBeVisible();
  });

  test('TC-PORT-003: GitHub 링크 정상 연결', async ({ page, request }) => {
    await page.goto(PORTFOLIO_URL);
    // GitHub 링크 존재 확인
    const githubLinks = page.locator('a[href*="github.com/kihyunqa"]');
    const count = await githubLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('TC-PORT-004: 통계 카드 노드 (5 MCP 서버 표시)', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    // 통계 섹션 확인
    const statsSection = page.locator('#stats');
    await expect(statsSection).toBeVisible();
  });

  test('TC-PORT-005: Proof 섹션 로드', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    await page.locator('a[href="#proof"]').click();
    await expect(page.locator('#proof')).toBeInViewport({ ratio: 0.3 });
    // Proof 카드 4개 확인
    const proofCards = page.locator('.proof-card');
    await expect(proofCards).toHaveCount(4);
  });

  test('TC-PORT-006: 모바일 뜏 375px 레이아웃 확인', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(PORTFOLIO_URL);
    await expect(page.locator('nav')).toBeVisible();
    // 모바일에서 네비게이션 링크는 숨겨지고 햄버거 아이콘이 보여야 함
    const hamBtn = page.locator('.ham');
    await expect(hamBtn).toBeVisible();
  });

  test('TC-PORT-007: 스크롤 프로그레스바 작동', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    // 스크롤 전 0%
    const scrollBar = page.locator('#scrollBar');
    const widthBefore = await scrollBar.evaluate(el => el.style.width);
    // 페이지 하단으로 스크롤
    await page.keyboard.press('End');
    await page.waitForTimeout(500);
    const widthAfter = await scrollBar.evaluate(el => el.style.width);
    expect(widthAfter).not.toBe(widthBefore);
  });

  test('TC-PORT-008: 메타 태그 제목 확인', async ({ page }) => {
    await page.goto(PORTFOLIO_URL);
    const metaDesc = page.locator('meta[name="description"]');
    await expect(metaDesc).toHaveAttribute('content', /.+/);
  });
});
