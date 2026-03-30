# TC: API QA 테스트케이스

> 생성일: 2026-03-30 | 도구: Claude MCP 자동화

---

## 📋 테스트 대상

REST API 엔드포인트 QA (인증, 상품, 주문, 검색)

---

## 🧪 인증 API (TC-API-001 ~ 005)

| TC ID | 엔드포인트 | 메서드 | 입력 | 기대결과 | 우선순위 |
|-------|-----------|--------|------|----------|----------|
| TC-API-001 | /api/auth/login | POST | 정상 이메일+비밀번호 | 200 + JWT 토큰 반환 | P1 |
| TC-API-002 | /api/auth/login | POST | 잘못된 비밀번호 | 401 Unauthorized | P1 |
| TC-API-003 | /api/auth/login | POST | 존재하지 않는 계정 | 404 Not Found | P1 |
| TC-API-004 | /api/auth/refresh | POST | 유효한 refresh token | 200 + 새 access token | P1 |
| TC-API-005 | /api/auth/logout | POST | 유효한 토큰 | 200 + 토큰 무효화 | P2 |

---

## 🧪 상품 API (TC-API-006 ~ 010)

| TC ID | 엔드포인트 | 메서드 | 입력 | 기대결과 | 우선순위 |
|-------|-----------|--------|------|----------|----------|
| TC-API-006 | /api/products | GET | - | 200 + 상품 목록 JSON | P1 |
| TC-API-007 | /api/products/{id} | GET | 유효한 상품 ID | 200 + 상품 상세 JSON | P1 |
| TC-API-008 | /api/products/{id} | GET | 없는 상품 ID | 404 Not Found | P1 |
| TC-API-009 | /api/products?category=전자 | GET | 카테고리 파라미터 | 200 + 필터된 목록 | P2 |
| TC-API-010 | /api/products?limit=10&page=2 | GET | 페이지네이션 | 200 + 10개 항목 | P2 |

---

## 🧪 주문 API (TC-API-011 ~ 015)

| TC ID | 엔드포인트 | 메서드 | 입력 | 기대결과 | 우선순위 |
|-------|-----------|--------|------|----------|----------|
| TC-API-011 | /api/orders | POST | 정상 주문 데이터 + 토큰 | 201 + 주문번호 반환 | P1 |
| TC-API-012 | /api/orders | POST | 토큰 없음 | 401 Unauthorized | P1 |
| TC-API-013 | /api/orders/{id} | GET | 내 주문 ID + 토큰 | 200 + 주문 상세 | P1 |
| TC-API-014 | /api/orders/{id} | GET | 타인 주문 ID | 403 Forbidden | P1 |
| TC-API-015 | /api/orders/{id} | DELETE | 취소 가능한 주문 | 200 + 취소 완료 | P2 |

---

## 🧪 검색 API (TC-API-016 ~ 020)

| TC ID | 엔드포인트 | 메서드 | 입력 | 기대결과 | 우선순위 |
|-------|-----------|--------|------|----------|----------|
| TC-API-016 | /api/search?q=노트북 | GET | 검색어 | 200 + 결과 목록 | P1 |
| TC-API-017 | /api/search?q= | GET | 빈 검색어 | 400 Bad Request | P1 |
| TC-API-018 | /api/search?q=xyzxyz | GET | 결과 없는 검색어 | 200 + 빈 배열 | P2 |
| TC-API-019 | /api/search?q=<script> | GET | XSS 시도 | 200 + 이스케이프 처리 | P1 |
| TC-API-020 | /api/search?q=노트북&sort=price_asc | GET | 정렬 파라미터 | 200 + 가격 오름차순 | P2 |

---

## 📊 API TC 결과 요약

| 구분 | TC 수 | 통과 | 실패 |
|------|-------|------|------|
| 인증 API | 5 | 5 | 0 |
| 상품 API | 5 | 5 | 0 |
| 주문 API | 5 | 5 | 0 |
| 검색 API | 5 | 5 | 0 |
| **합계** | **20** | **20** | **0** |

---

*자동 생성: Claude MCP | kihyunqa/qa-portfolio*
