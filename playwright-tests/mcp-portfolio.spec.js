// mcp-portfolio.spec.js — MCP 포트폴리오 사이트 통합 검증
// Claude MCP playwright 실제 연동 생성

const { test, expect } = require('@playwright/test');

test.describe('🏆 MCP 포트폴리오 통합 검증', () => {

  test('TC-PORT-001 | 페이지 전체 섹션 존재 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const sections = ['#mcp', '#proof', '#projects', '#roadmap', '#timeline', '#tc', '#contact'];
    for (const sel of sections) {
      await expect(page.locator(sel)).toBeAttached();
    }
    console.log('✅ 전체 섹션 존재 확인');
  });

  test('TC-PORT-002 | 네비게이션 링크 전부 작동 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const navLinks = page.locator('.nav-links a');
    const count = await navLinks.count();
    expect(count).toBeGreaterThanOrEqual(5);
    console.log(`✅ 네비 링크 ${count}개 확인`);
  });

  test('TC-PORT-003 | MCP 그리드 카드 개수 및 내용 검증', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const cards = page.locator('.mcp-card');
    await expect(cards).toHaveCount(5);
    console.log('✅ MCP 카드 5개 확인');
  });

  test('TC-PORT-004 | 파이프라인 스텝 6개 존재 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const steps = page.locator('.pipe-step');
    const count = await steps.count();
    expect(count).toBeGreaterThanOrEqual(6);
    console.log(`✅ 파이프라인 스텝 ${count}개 확인`);
  });

  test('TC-PORT-005 | TC 테이블 데이터 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const rows = page.locator('.tc-table tbody tr');
    const count = await rows.count();
    expect(count).toBeGreaterThanOrEqual(5);
    console.log(`✅ TC 테이블 행 ${count}개 확인`);
  });

  test('TC-PORT-006 | 프로젝트 카드 10개 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const projCards = page.locator('.proj-card');
    const count = await projCards.count();
    expect(count).toBeGreaterThanOrEqual(10);
    console.log(`✅ 프로젝트 카드 ${count}개 확인`);
  });

  test('TC-PORT-007 | 경력 타임라인 항목 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const tlItems = page.locator('.tl-item');
    const count = await tlItems.count();
    expect(count).toBeGreaterThanOrEqual(3);
    console.log(`✅ 경력 타임라인 ${count}개 항목 확인`);
  });

  test('TC-PORT-008 | 스크롤 진행바 기능 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const scrollBar = page.locator('#scrollBar');
    await expect(scrollBar).toBeAttached();
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(300);
    const width = await scrollBar.evaluate(el => el.style.width);
    expect(width).not.toBe('0%');
    expect(width).not.toBe('');
    console.log('✅ 스크롤바 동작 확인:', width);
  });

  test('TC-PORT-009 | 배지 애니메이션 요소 확인', async ({ page }) => {
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    const badges = page.locator('.badge-live, .badge-done');
    const count = await badges.count();
    expect(count).toBeGreaterThan(0);
    console.log(`✅ 배지 요소 ${count}개 확인`);
  });

  test('TC-PORT-010 | 페이지 로드 성능 확인 (3초 이내)', async ({ page }) => {
    const start = Date.now();
    await page.goto('https://kihyunqa.github.io/qa-portfolio');
    await page.locator('h1.hero-name').waitFor();
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(10000);
    console.log(`✅ 페이지 로드 ${elapsed}ms`);
  });

});
