const { test, expect } = require('@playwright/test');

/**
 * Notification & MCP Pipeline E2E Tests
 * MCP 포트폴리오 - 알림 및 MCP 파이프라인 검증
 */

test.describe('Notification & MCP Pipeline', () => {

  test('TC-NOTIF-001: Slack 알림 채널 연결 상태 확인 (API)', async ({ request }) => {
    // Slack API health check
    const response = await request.post('https://slack.com/api/api.test');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.ok).toBe(true);
  });

  test('TC-NOTIF-002: GitHub Actions 워크플로우 파일 존재 확인 (API)', async ({ request }) => {
    const response = await request.get(
      'https://api.github.com/repos/kihyunqa/qa-portfolio/contents/.github/workflows',
      { headers: { 'User-Agent': 'QA-Portfolio-Test' } }
    );
    expect(response.status()).toBe(200);
    const files = await response.json();
    const fileNames = files.map(f => f.name);
    expect(fileNames.some(n => n.endsWith('.yml'))).toBe(true);
  });

  test('TC-NOTIF-003: 포트폴리오 페이지 응답 확인', async ({ request }) => {
    const response = await request.get('https://kihyunqa.github.io/qa-portfolio');
    expect(response.status()).toBe(200);
  });

  test('TC-NOTIF-004: GitHub 레포 TC 파일 수 확인 (API)', async ({ request }) => {
    const response = await request.get(
      'https://api.github.com/repos/kihyunqa/qa-portfolio/contents',
      { headers: { 'User-Agent': 'QA-Portfolio-Test' } }
    );
    expect(response.status()).toBe(200);
    const files = await response.json();
    const tcFiles = files.filter(f => f.name.startsWith('testcase_'));
    expect(tcFiles.length).toBeGreaterThanOrEqual(10);
  });

  test('TC-NOTIF-005: MCP 파이프라인 문서 존재 확인', async ({ request }) => {
    const filesToCheck = [
      'README.md',
      'CHANGELOG.md',
      'qa-automation-report.md'
    ];
    for (const file of filesToCheck) {
      const res = await request.get(
        `https://api.github.com/repos/kihyunqa/qa-portfolio/contents/${file}`,
        { headers: { 'User-Agent': 'QA-Portfolio-Test' } }
      );
      expect(res.status()).toBe(200);
    }
  });
});
