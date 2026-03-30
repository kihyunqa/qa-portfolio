# 테스트 케이스: 검색 & API

## TC 개요

- **모듈**: 검색 기능, REST API 엔드포인트
- **작성자**: kihyunqa
- **최종 수정**: 2026-03-30
- **총 TC 수**: 18건

## 검색 TC

| TC ID | 제목 | 예상 결과 | 유형 |
|-------|------|----------|------|
| TC-SEARCH-001 | 통상 ?워드 검색 | 관련 결과 목록 표시 | 자동 |
| TC-SEARCH-002 | 대소문자 구분 없이 검색 | 대소문자 두 경우 동일 결과 | 자동 |
| TC-SEARCH-003 | 결과 없는 검색어 | "결과 없음" 메시지 | 자동 |
| TC-SEARCH-004 | 특수문자 포함 검색 | 안전하게 처리됨 | 자동 |
| TC-SEARCH-005 | 짧은 콜리 1글자 검색 | 결과 또는 미니맄 미마맀 가이드 | 자동 |
| TC-SEARCH-006 | 매우 긴 검색어 (200자+) | 유효성 오류 메시지 | 자동 |
| TC-SEARCH-007 | 필터 적용 (가격대) | 가격 범위 내 결과만 | 자동 |
| TC-SEARCH-008 | 정렬 적용 (가격 오름차순) | 정렬된 순서로 표시 | 자동 |
| TC-SEARCH-009 | 자동완성 권장 | 3글자 이상 시 드롤다운 표시 | 자동 |
| TC-SEARCH-010 | 검색 히스토리 | 이전 검색어 최대 10개 | 수동 |

## API TC

| TC ID | 엔드포인트 | 시나리오 | 예상 상태 | 유형 |
|-------|---------|----------|---------|------|
| TC-API-001 | GET /api/products | 상품 목록 조회 | 200 + 정상 데이터 | 자동 |
| TC-API-002 | POST /api/cart | 상품 상담 | 201 Created | 자동 |
| TC-API-003 | DELETE /api/cart/:id | 상품 제거 | 204 No Content | 자동 |
| TC-API-004 | GET /api/user/profile | 권한 없음 | 401 Unauthorized | 자동 |
| TC-API-005 | POST /api/order | 새 주문 생성 | 201 + 주문ID | 자동 |
| TC-API-006 | GET /api/order/:id | 존재하지 않는 ID | 404 Not Found | 자동 |
| TC-API-007 | POST /api/login | Rate Limit 저한 | 429 Too Many Requests | 자동 |
| TC-API-008 | 웅답 시간 | 반응 시간 < 200ms | 성능 조건 만족 | 자동 |

## 실행 결과

| 분류 | Pass | Fail | 대기 |
|------|------|------|------|
| 검색 TC | 9 | 1 | 0 |
| API TC | 7 | 0 | 1 |
