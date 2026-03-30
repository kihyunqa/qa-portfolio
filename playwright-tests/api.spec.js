// @ts-check
const { test, expect, request } = require('@playwright/test');

/**
 * API Testing Suite (using Playwright APIRequestContext)
 * MCP Portfolio - kihyunqa
 * Covers: TC-API-001 ~ TC-API-010
 */

test.describe('🔌 REST API Tests', () => {

  let apiContext;

  test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test.afterAll(async () => {
    await apiContext.dispose();
  });

  test('TC-API-001: GET /posts - 200 OK & 배열 반환', async () => {
    const res = await apiContext.get('/posts');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });

  test('TC-API-002: GET /posts/1 - 단일 리소스 조회', async () => {
    const res = await apiContext.get('/posts/1');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('title');
    expect(body).toHaveProperty('body');
  });

  test('TC-API-003: POST /posts - 201 Created 리소스 생성', async () => {
    const res = await apiContext.post('/posts', {
      data: { title: 'QA Test Post', body: 'MCP Portfolio Test', userId: 1 },
    });
    expect(res.status()).toBe(201);
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.title).toBe('QA Test Post');
  });

  test('TC-API-004: PUT /posts/1 - 전체 업데이트', async () => {
    const res = await apiContext.put('/posts/1', {
      data: { id: 1, title: 'Updated Title', body: 'Updated body', userId: 1 },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.title).toBe('Updated Title');
  });

  test('TC-API-005: PATCH /posts/1 - 부분 업데이트', async () => {
    const res = await apiContext.patch('/posts/1', {
      data: { title: 'Patched Title' },
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.title).toBe('Patched Title');
  });

  test('TC-API-006: DELETE /posts/1 - 200 삭제 성공', async () => {
    const res = await apiContext.delete('/posts/1');
    expect(res.status()).toBe(200);
  });

  test('TC-API-007: GET /posts/99999 - 404 Not Found', async () => {
    const res = await apiContext.get('/posts/99999');
    expect(res.status()).toBe(404);
  });

  test('TC-API-008: GET /users - 유저 목록 조회', async () => {
    const res = await apiContext.get('/users');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.length).toBeGreaterThan(0);
    expect(body[0]).toHaveProperty('email');
  });

  test('TC-API-009: GET /comments?postId=1 - 쿼리 파라미터 필터', async () => {
    const res = await apiContext.get('/comments?postId=1');
    expect(res.status()).toBe(200);
    const body = await res.json();
    body.forEach(comment => {
      expect(comment.postId).toBe(1);
    });
  });

  test('TC-API-010: Content-Type 헤더 확인', async () => {
    const res = await apiContext.get('/posts/1');
    const contentType = res.headers()['content-type'];
    expect(contentType).toContain('application/json');
  });
});
