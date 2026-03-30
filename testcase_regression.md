# TC: 회귀 테스트 (Regression) 테스트케이스

> 릴리즈 전 반드시 통과해야 하는 핵심 회귀 TC 목록
> 자동화 파일: `playwright-tests/` 전체 spec 실행으로 커버

---

## 핵심 회귀 TC (P1 — 전수 실행 필수)

| TC ID | 영역 | 제목 | 자동화 | 기대결과 | 상태 |
|-------|------|------|--------|----------|------|
| REG-001 | 인증 | 정상 로그인 | ✅ login.spec.js | 대시보드 진입 | Pass |
| REG-002 | 인증 | 로그아웃 후 세션 해제 | ✅ login.spec.js | /login 리다이렉트 | Pass |
| REG-003 | 인증 | 비밀번호 재설정 이메일 | 🔨 수동 | 이메일 수신 | Pass |
| REG-004 | 검색 | 키워드 검색 결과 | ✅ search.spec.js | 결과 목록 표시 | Pass |
| REG-005 | 검색 | 결과 없음 처리 | ✅ search.spec.js | 안내 메시지 표시 | Pass |
| REG-006 | 장바구니 | 상품 추가/제거 | ✅ cart.spec.js | 수량 업데이트 | Pass |
| REG-007 | 장바구니 | 합계 가격 계산 | ✅ cart.spec.js | 정확한 합계 | Pass |
| REG-008 | 결제 | 유효 카드 결제 성공 | ✅ payment.spec.js | 주문완료 페이지 | Pass |
| REG-009 | 결제 | 결제 후 장바구니 비우기 | ✅ payment.spec.js | 빈 장바구니 | Pass |
| REG-010 | 보안 | XSS 입력 차단 | ✅ security.spec.js | 스크립트 실행 안 됨 | Pass |
| REG-011 | 보안 | SQL Injection 차단 | ✅ security.spec.js | 로그인 차단 | Pass |
| REG-012 | API | 검색 API 200 응답 | ✅ api.spec.js | 정상 JSON 반환 | Pass |
| REG-013 | API | 미인증 API 401 반환 | ✅ api.spec.js | 401 Unauthorized | Pass |
| REG-014 | 성능 | 메인페이지 3초 이내 로드 | ✅ performance.spec.js | TTI < 3s | Pass |
| REG-015 | 접근성 | 키보드 네비게이션 | ✅ accessibility.spec.js | Tab 포커스 정상 | Pass |
| REG-016 | MCP 파이프라인 | GitHub 레포 TC 파일 존재 | ✅ notification.spec.js | 10개 이상 파일 | Pass |
| REG-017 | MCP 파이프라인 | 포트폴리오 페이지 응답 | ✅ notification.spec.js | 200 OK | Pass |
| REG-018 | 모바일 | 375px 반응형 레이아웃 | 🔨 수동 | 요소 겹침 없음 | Pass |
| REG-019 | 크로스브라우저 | Chrome/Firefox/Safari 로그인 | 🔨 수동 | 전 브라우저 통과 | Pass |
| REG-020 | 회원가입 | 중복 이메일 차단 | ✅ signup.spec.js | 오류 메시지 표시 | Pass |

---

## 실행 요약

- 전체 TC: **20건**
- 자동화: **16건** (80%) ← `npx playwright test`로 일괄 실행
- 수동: **4건** (20%) ← 릴리즈 전 수동 확인 필요
- 통과율 목표: **100%** (P1 기준 미달 시 릴리즈 블로킹)

## 자동 실행 명령어

```bash
cd playwright-tests
npx playwright test
npx playwright test --reporter=html  # HTML 리포트 생성
```
