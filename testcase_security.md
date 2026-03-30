# 🔒 Security Test Cases

> MCP Portfolio - kihyunqa | 보안 테스트 케이스

| TC ID | 테스트 시나리오 | 입력 | 예상 결과 | 심각도 | 상태 |
|-------|---------------|------|----------|--------|------|
| TC-SEC-001 | SQL Injection 로그인 시도 | `' OR '1'='1` | 차단 + 에러 | Critical | ✅ PASS |
| TC-SEC-002 | XSS 스크립트 입력 | `<script>alert(1)</script>` | 필터링 | Critical | ✅ PASS |
| TC-SEC-003 | 검색상자 XSS 방어 | `<img src=x onerror=alert(1)>` | alert 미발생 | Critical | ✅ PASS |
| TC-SEC-004 | HTTPS 접속 여부 | HTTP 접속 시도 | HTTPS 리다이렉트 | High | ✅ PASS |
| TC-SEC-005 | 인증 없이 API 접근 | 토큰 없이 GET | 401 Unauthorized | High | ✅ PASS |
| TC-SEC-006 | 비밀번호 5회 실패 코인 | 오류 5회 | 코인 측정 | High | ✅ PASS |
| TC-SEC-007 | 세션 만료 시 자동 로그아웃 | 30분 경과 | 세션 종료 | Medium | ✅ PASS |
| TC-SEC-008 | URL 직접 접근 (인증 우회) | /dashboard 직접 | 로그인 유도 | High | ✅ PASS |
| TC-SEC-009 | CORS 헤더 확인 | API 응답 헤더 | Access-Control 헤더 | Medium | ✅ PASS |
| TC-SEC-010 | 엁울한 계정 접근 차단 | 타 사용자 세션 | 접근 거부 | High | ✅ PASS |
| TC-SEC-011 | JWT 토큰 만료 | 만료 토큰 사용 | 401 반환 | High | ✅ PASS |
| TC-SEC-012 | 엁울한 JWT 토큰 | 조작된 토큰 | 401 반환 | Critical | ✅ PASS |
| TC-SEC-013 | Rate Limiting 확인 | 100회 이상 요청 | 429 Too Many | High | ✅ PASS |
| TC-SEC-014 | 비밀번호 평문 노출 여부 | 로그 확인 | *** 마스킹 | High | ✅ PASS |
| TC-SEC-015 | 카드정보 암호화 저장 | DB 조회 | 암호화 확인 | Critical | ✅ PASS |

**PASS율: 15/15 (100%)**
