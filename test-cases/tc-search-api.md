# 테스트 케이스: 검색 API

## UI 검색 TC

| TC ID | 테스트 명 | 우선순위 | 표준입력값 | 기대 결과 | 상태 |
|-------|---------|----------|----------|----------|------|
| SEARCH-001 | 일반 ?워드 검색 | P0 | 노트북 | 관련 상품 목록 | ✅ Pass |
| SEARCH-002 | 대소문자 구분 없이 검색 | P1 | NOTEBOOK, notebook | 동일 결과 | ✅ Pass |
| SEARCH-003 | 특수문자 포함 검색 | P1 | C++ 프로그래밍 | 실패 없이 정상 결과 | ✅ Pass |
| SEARCH-004 | 존재하지 않는 ?워드 | P2 | xyzxyzxyz123 | '결과 없음' 메시지 | ✅ Pass |
| SEARCH-005 | 빈 검색어 | P1 | (blank) | 에러 메시지 또는 존재하는 상품 | ✅ Pass |
| SEARCH-006 | XSS 페이로드 검색 | P0 | `<script>alert(1)</script>` | 이스케이프 입력, 에러 디코 | ✅ Pass |

## API 검색 TC

| TC ID | 엔드포인트 | 메서드 | 테스트 내용 | 기대 | 상태 |
|-------|-----------|--------|----------|------|------|
| API-SEARCH-001 | `/api/search?q=notebook` | GET | 정상 검색 | 200 + items[] | ✅ Pass |
| API-SEARCH-002 | `/api/search?q=` | GET | 빈 쿼리 | 400 Bad Request | ✅ Pass |
| API-SEARCH-003 | `/api/search?q=test&page=999` | GET | 범위 밖 페이지 | 200 + [] | ✅ Pass |
| API-SEARCH-004 | `/api/search?q=test&limit=1000` | GET | 최대값 초과 | 400 또는 제한 적용 | ✅ Pass |
| API-SEARCH-005 | `/api/search` | GET | q 파라미터 없음 | 400 + error | ✅ Pass |

---

## API 테스트 코드 (예시)

```javascript
// playwright-tests/api.spec.js 연계
test('API-SEARCH-001: 정상 검색 응답', async ({ request }) => {
  const response = await request.get('/api/search?q=notebook');
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body).toHaveProperty('items');
  expect(Array.isArray(body.items)).toBeTruthy();
});
```
