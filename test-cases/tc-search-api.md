# 🔍 검색/필터 + ⚡ API Test Cases

> Claude MCP 자동 생성 | 2026-03-30 | 15건 | All ✅ PASS

## 검색/필터

| TC ID | 테스트 명 | 우선순위 | 상태 |
|-------|----------|---------|------|
| TC-SEARCH-001 | 키워드 검색 | P0 | ✅ PASS |
| TC-SEARCH-002 | XSS 방어 | P0 | ✅ PASS |
| TC-SEARCH-003 | 필터 다중 적용 | P1 | ✅ PASS |
| TC-SEARCH-004 | 결과 0건 | P1 | ✅ PASS |
| TC-SEARCH-005 | 가격순 정렬 | P2 | ✅ PASS |

## API 성능

| TC ID | 테스트 명 | 우선순위 | 상태 |
|-------|----------|---------|------|
| TC-API-001 | GET /products 200ms 미만 | P0 | ✅ PASS |
| TC-API-002 | POST /orders 201 | P0 | ✅ PASS |
| TC-API-003 | 인증 없는 요청 401 | P0 | ✅ PASS |
| TC-API-004 | 동시 100개 요청 | P1 | ✅ PASS |
| TC-API-005 | 페이지네이션 | P2 | ✅ PASS |
| TC-API-006 | 데이터 유효성 검증 | P1 | ✅ PASS |
| TC-API-007 | 에러 응답 포맷 | P1 | ✅ PASS |
| TC-API-008 | 으율 제한 Rate Limit | P2 | ✅ PASS |
| TC-API-009 | 타임아웃 헨들링 | P1 | ✅ PASS |
| TC-API-010 | CORS 헤더 검증 | P2 | ✅ PASS |

📌 Notion: https://www.notion.so/API-Test-Cases-332bbad8429a81f0ab1ecfc6134b8b97
