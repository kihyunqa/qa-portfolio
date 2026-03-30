# TC: 검색 API 테스트 케이스

> 테스트 대상: 검색 API (GET /api/search) 기능/비기능/유효성

## REST API 엔드포인트

```
GET /api/search?q={keyword}&page={page}&limit={limit}&category={category}

Response:
{
  "results": [...],
  "total": 100,
  "page": 1,
  "limit": 20
}
```

| TC ID | 제목 | Method | 입력 | 기대 HTTP 코드 | 기대 응답 | 상태 |
|-------|------|--------|------|------------|-----------|------|
| API-S-001 | 정상 검색 | GET | q=notebook | 200 | results 배열, total 숫자 | ✅ Pass |
| API-S-002 | 보겠어 검색 | GET | q=a | 200 | 매칭 결과 | ✅ Pass |
| API-S-003 | 결과 없는 검색 | GET | q=zzz_not_exist | 200 | results: [] | ✅ Pass |
| API-S-004 | q 파라미터 누락 | GET | (q 없음) | 400 | error 메시지 | ✅ Pass |
| API-S-005 | 빈 검색어 | GET | q= | 400 | validation error | ✅ Pass |
| API-S-006 | 특수문자 검색 | GET | q=<script> | 200 | 안전 처리된 결과 | ✅ Pass |
| API-S-007 | 페이지네이션 - 페이지 1 | GET | q=phone&page=1 | 200 | results 20개 | ✅ Pass |
| API-S-008 | 페이지네이션 - 페이지 2 | GET | q=phone&page=2 | 200 | 다음 20개 | ✅ Pass |
| API-S-009 | 범위 밖 페이지 | GET | q=phone&page=9999 | 200 | results: [] | ✅ Pass |
| API-S-010 | 커스텀 limit | GET | q=phone&limit=5 | 200 | results 최대 5개 | ✅ Pass |
| API-S-011 | 카테고리 필터 | GET | q=phone&category=mobile | 200 | mobile 콴텐츠만 | ✅ Pass |
| API-S-012 | 존재하지 않는 카테고리 | GET | q=phone&category=zzz | 200 | results: [] | ✅ Pass |
| API-S-013 | 인증 없이 검색 API 호출 | GET | Authorization 헤더 누락 | 401 | unauthorized | ✅ Pass |
| API-S-014 | 응답 시간 < 500ms | GET | q=notebook | 200 | X-Response-Time < 500 | ✅ Pass |
| API-S-015 | 응답 스키마 검증 | GET | q=notebook | 200 | results[].id, name, price 포함 | ✅ Pass |

---

## 실행 요약

- 실행도구: Playwright API Testing (request fixture)
- TC 총계: 15건
- 통과: 15건 | 실패: 0건
- 통과율: 100% ✅
- 응답시간 평균: 127ms
