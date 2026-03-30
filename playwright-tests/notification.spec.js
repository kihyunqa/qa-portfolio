// notification.spec.js — Slack/알림 MCP 연동 E2E 테스트
// Claude MCP playwright 실제 연동으로 자동 생성

const { test, expect } = require('@playwright/test');

test.describe('🔔 알림 & Slack 연동 E2E', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    await expect(page).toHaveTitle(/QA Engineer/);
  });

  test('TC-NOTIF-001 | 포트폴리오 페이지 정상 로드 확인', async ({ page }) => {
    await expect(page.locator('h1.hero-name')).toBeVisible();
    await expect(page.locator('.mcp-sec')).toBeVisible();
    console.log('✅ 포트폴리오 페이지 정상 로드 확인');
  });

  test('TC-NOTIF-002 | MCP 5개 섹션 모두 표시 확인', async ({ page }) => {
    const mcpCards = page.locator('.mcp-card');
    await expect(mcpCards).toHaveCount(5);
    const cardTexts = await mcpCards.allInnerTexts();
    const expected = ['filesystem', 'playwright', 'github', 'notion', 'slack'];
    for (const kw of expected) {
      expect(cardTexts.some(t => t.toLowerCase().includes(kw))).toBeTruthy();
    }
    console.log('✅ MCP 5개 카드 전부 표시 확인');
  });

  test('TC-NOTIF-003 | stats 섹션 숫자 정합성 확인', async ({ page }) => {
    const statBigs = page.locator('.stat-big');
    await expect(statBigs.first()).toBeVisible();
    const first = await statBigs.first().innerText();
    expect(Number(first.replace(/\D/g, ''))).toBeGreaterThanOrEqual(5);
    console.log('✅ stats 카운터 정합성 확인');
  });

  test('TC-NOTIF-004 | 터미널 섹션에 Slack 출력 줄 존재 확인', async ({ page }) => {
    const terminal = page.locator('.t-body');
    const text = await terminal.innerText();
    expect(text).toContain('slack');
    console.log('✅ 터미널 Slack 출력 줄 확인');
  });

  test('TC-NOTIF-005 | footer MCP 5개 표시 확인', async ({ page }) => {
    const footer = page.locator('footer');
    const text = await footer.innerText();
    expect(text).toContain('5 MCP');
    console.log('✅ footer MCP 5개 표시 확인');
  });

  test('TC-NOTIF-006 | GitHub 링크 유효성 확인', async ({ page }) => {
    const ghLink = page.locator('a[href*="github.com/kihyunqa"]').first();
    await expect(ghLink).toBeVisible();
    const href = await ghLink.getAttribute('href');
    expect(href).toContain('kihyunqa');
    console.log('✅ GitHub 링크 유효성 확인:', href);
  });

  test('TC-NOTIF-007 | 이메일 contact 링크 확인', async ({ page }) => {
    const mailLink = page.locator('a[href*="mailto:"]').first();
    await expect(mailLink).toBeVisible();
    const href = await mailLink.getAttribute('href');
    expect(href).toContain('kihyun.qa@gmail.com');
    console.log('✅ 이메일 링크 확인:', href);
  });

  test('TC-NOTIF-008 | 모바일 뷰포트에서 레이아웃 깨짐 없음 확인', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('.hero-left')).toBeVisible();
    const overflow = await page.evaluate(() => document.body.scrollWidth > window.innerWidth);
    expect(overflow).toBeFalsy();
    console.log('✅ 모바일 375px 레이아웃 이상 없음');
  });

});
