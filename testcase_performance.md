# ⚡ 성능 테스트 케이스

> QA Portfolio - kihyunqa | 성능 TC 전체

## 테스트 케이스 (TC-PERF-001 ~ 020)

| TC ID | 쭴릴 | 입력/조건 | 예상 결과 | 우선 | 실행 도구 |
|-------|------|---------|----------|------|----------|
| TC-PERF-001 | 로그인 페이지 로드 | 일반 네트워크 | 3초 이하 | P1 | Playwright |
| TC-PERF-002 | 메인 페이지 로드 | 일반 네트워크 | 5초 이하 | P1 | Playwright |
| TC-PERF-003 | DOMContentLoaded | Navigation Timing | 3초 이하 | P1 | Playwright |
| TC-PERF-004 | First Paint | 첫 렌더링 | 2초 이하 | P2 | Playwright |
| TC-PERF-005 | 리소스 개수 | 네트워크 | 0개 이상 로드 | P2 | Playwright |
| TC-PERF-006 | 인벤토리 페이지 | 로그인 후 | 4초 이하 | P1 | Playwright |
| TC-PERF-007 | 느린 유저 시뮬 | performance_glitch_user | 15초 이하 | P2 | Playwright |
| TC-PERF-008 | 스크린샷 기준 측정 | 기준 화면 | 상태 정상 | P3 | Playwright |
| TC-PERF-009 | 동시 사용자 100명 | 부하 테스트 | 응답 5초 이하 | P1 | k6 |
| TC-PERF-010 | 상품 목록 로드 | 100개 상품 | 2초 이하 | P2 | Playwright |
| TC-PERF-011 | 검색 응답 시간 | 키워드 입력 | 1초 이하 | P2 | Playwright |
| TC-PERF-012 | API 응답 시간 | GET /posts | 200ms 이하 | P1 | Playwright API |
| TC-PERF-013 | POST API 응답 시간 | POST /posts | 500ms 이하 | P2 | Playwright API |
| TC-PERF-014 | 이미지 로드 시간 | 대표 이미지 | 2초 이하 | P2 | Playwright |
| TC-PERF-015 | 캐시 효과 | 재방문 | 더 빠른 로드 | P3 | Playwright |
| TC-PERF-016 | JavaScript 폐기 시간 | 큰 스크립트 | 3초 이펌 파싱 | P2 | DevTools |
| TC-PERF-017 | 솔러티브 구간 | 페이지 스크롤 | 지연 없음 | P2 | Playwright |
| TC-PERF-018 | 로그인 후 리다이렉션 | 로그인 성공 | 1초 이하 | P1 | Playwright |
| TC-PERF-019 | 모바일 다운로드 | Pixel 5 환경 | 5초 이하 | P2 | Playwright Mobile |
| TC-PERF-020 | 성능 회귀 시험 | 릴리즈 후 | 기준 대비 저하 없음 | P1 | Playwright |

**성능 TC 직 구현 파일**: `playwright-tests/performance.spec.js`
