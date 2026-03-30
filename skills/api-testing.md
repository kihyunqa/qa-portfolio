# 🔌 API Testing Skills

> QA Engineer - kihyunqa | API 테스트 역량 증명

---

## 1. REST API 테스트 체크리스트

### HTTP 메서드별 유효성 점검

| 메서드 | 정상 코드 | 주요 테스트 항목 |
|---------|---------|------------------|
| GET | 200 OK | 데이터 없실 시 404, 성공 시 배열 반환 |
| POST | 201 Created | body 유효성, id 생성 여부 |
| PUT | 200 OK | 전체 필드 교체 확인 |
| PATCH | 200 OK | 특정 필드만 업데이트 확인 |
| DELETE | 200/204 | 리소스 제거 후 조회 시 404 |

### 헤더 코드별 테스트

```
2xx: 성공 코드 (200, 201, 204)
3xx: 리다이렉션 (301, 302)
4xx: 클라이언트 오류 (400, 401, 403, 404, 422, 429)
5xx: 서버 오류 (500, 502, 503)
```

---

## 2. Playwright API 테스트 예시

```javascript
const { test, expect, request } = require('@playwright/test');

test('POST /posts - 201 Created', async ({ playwright }) => {
  const api = await playwright.request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com',
  });
  
  const res = await api.post('/posts', {
    data: { title: 'Test', body: 'Content', userId: 1 },
  });
  
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body).toHaveProperty('id');
  await api.dispose();
});
```

---

## 3. API 테스트 케이스 30건

| TC ID | 메서드 | 엔드포인트 | 예상 코드 | 테스트 포인트 |
|-------|---------|-----------|---------|------------|
| API-001 | GET | /posts | 200 | 배열 반환 확인 |
| API-002 | GET | /posts/1 | 200 | 단일 레코드 확인 |
| API-003 | GET | /posts/99999 | 404 | 없는 리소스 |
| API-004 | POST | /posts | 201 | 사용자 생성 |
| API-005 | POST | /posts | 400 | 필수필드 누락 |
| API-006 | PUT | /posts/1 | 200 | 전체 업데이트 |
| API-007 | PATCH | /posts/1 | 200 | 부분 업데이트 |
| API-008 | DELETE | /posts/1 | 200 | 삭제 성공 |
| API-009 | GET | /users | 200 | 유저 목록 |
| API-010 | GET | /comments?postId=1 | 200 | 쿼리 파라미터 |
| API-011 | GET | /posts | 200 | Content-Type 헤더 |
| API-012 | POST | /posts | 201 | 응답 시간 3초 이하 |
| API-013 | GET | /posts/1 | 200 | 데이터 스키마 유효성 |
| API-014 | GET | /posts | 200 | 페이지네이션 |
| API-015 | POST | /posts | 401 | 미인증 요청 |
| API-016 | GET | /todos | 200 | 할일 목록 |
| API-017 | GET | /photos | 200 | 리소스 개수 |
| API-018 | POST | /users | 201 | 유저 생성 |
| API-019 | GET | /albums | 200 | 앨범 목록 |
| API-020 | DELETE | /posts/999 | 200 | 없는 ID 삭제 |
| API-021 | GET | /posts | 200 | 응답 시간 측정 |
| API-022 | POST | /posts | - | XSS 페이로드 |
| API-023 | POST | /posts | - | SQL Injection |
| API-024 | GET | /posts | 200 | HTTPS 여부 |
| API-025 | GET | /posts | 429 | Rate Limit |
| API-026 | GET | /posts/1 | 200 | ETag 쾐시 |
| API-027 | PUT | /posts/1 | 200 | 동시 업데이트 |
| API-028 | GET | /posts | 200 | 대용량 데이타 |
| API-029 | POST | /posts | 400 | 잘못된 JSON |
| API-030 | GET | /posts | 200 | CORS 헤더 |

---

## 4. 테스트 도구

| 도구 | 용도 | 장점 |
|------|------|------|
| Playwright API Context | 코드 기반 | E2E와 통합 가능 |
| Postman | GUI 기반 | 보사 활용 용이 |
| curl | CLI | 빠른 직접 테스트 |
| k6 | 로드 테스트 | 대량 트래픽 시뮬레이션 |
