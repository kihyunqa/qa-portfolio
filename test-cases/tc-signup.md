# TC: 회원가입 (Signup) - 실행 가능 TC

> test-cases 폴더 — 회원가입 커버리지 수동

## 실행 정보

- 실행일: 2026-03-30
- 자동화: `playwright-tests/signup.spec.js`

| TC ID | 제목 | 기대 | 자동화 | 상태 |
|-------|------|------|-------|------|
| SIGN-001 | 정상가입 | 이메일인증페이지 | ✅ 자동 | Pass |
| SIGN-002 | 중복이메일 | 오류메시지 | ✅ 자동 | Pass |
| SIGN-003 | 비밀번호불일치 | 유효성오류 | ✅ 자동 | Pass |
| SIGN-004 | 비밀번호짧음 | 복잡도오류 | ✅ 자동 | Pass |
| SIGN-005 | 이메일형식무효 | HTML5유효성 | ✅ 자동 | Pass |
| SIGN-006 | SQL Injection 시도 | 안전하게처리 | ✅ 자동 | Pass |

**통계**: 6건 · 전체 Pass ✅
