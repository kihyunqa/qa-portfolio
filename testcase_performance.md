# ⚡ Performance Test Cases

> MCP Portfolio - kihyunqa | 성능 테스트 케이스

| TC ID | 테스트 시나리오 | 입력 | 예상 결과 | 중요도 | 상태 |
|-------|---------------|------|----------|--------|------|
| TC-PERF-001 | 로그인 페이지 로드 3초 이하 | 페이지 접속 | < 3000ms | High | ✅ PASS |
| TC-PERF-002 | 메인 페이지 로드 측정 | 페이지 접속 | < 5000ms | High | ✅ PASS |
| TC-PERF-003 | Navigation Timing DOMContentLoaded | 페이지 로드 | < 3000ms | High | ✅ PASS |
| TC-PERF-004 | First Contentful Paint 측정 | 페이지 로드 | 취득 | Medium | ✅ PASS |
| TC-PERF-005 | 리소스 개수 카운트 | 페이지 로드 | > 0 | Low | ✅ PASS |
| TC-PERF-006 | 인베토리 페이지 로드 | 로그인 후 | < 4000ms | High | ✅ PASS |
| TC-PERF-007 | slow_user 시뮬레이션 | 늦은 사용자 로그인 | < 15000ms | Medium | ✅ PASS |
| TC-PERF-008 | 성능 기준 스크린샷 | 모든 조건 | 스크린샷 | Low | ✅ PASS |
| TC-PERF-009 | API 응답 시간 3초 이하 | REST API 호출 | < 3000ms | High | ✅ PASS |
| TC-PERF-010 | 대용량 데이터 GET | /posts 100건+ | < 5000ms | Medium | ✅ PASS |

**성능 테스트 실행 도구:** `playwright-tests/performance.spec.js`

**PASS율: 10/10 (100%)**
