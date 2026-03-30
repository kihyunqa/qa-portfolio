# ✅ QA 체크리스트

> 릴리즈 전 검증 체크리스트 — kihyunqa  
> **MCP 파이프라인 연동 환경 기준 (2026-03-31)**

---

## 🔁 MCP 파이프라인 사전 확인

- [ ] Claude Desktop 실행 및 MCP 5개 도구 노출 확인
- [ ] GitHub MCP — 레포 접근 정상 여부
- [ ] Slack MCP — 새-채널 알림 전송 테스트
- [ ] Notion MCP — TC 허브 페이지 접근 확인
- [ ] Playwright MCP — 브라우저 실행 가능 여부

---

## 🖥️ 프론트엔드

### UI/UX
- [ ] 모든 버튼이 작동하는가
- [ ] 폼 유효성 검사가 동작하는가
- [ ] 에러 메시지가 명확하게 나타나는가
- [ ] 로딩 스피너가 노출되는가
- [ ] 입력한 데이터가 저장되는가
- [ ] 반응형 레이아웃 (모바일/태블릿/데스크탑) 확인

### 회원가입/로그인
- [ ] TC-LOGIN-001: 유효한 자격으로 로그인 성공
- [ ] TC-LOGIN-002: 잘못된 비밀번호 에러 메시지
- [ ] TC-LOGIN-003~004: 빈 입력값 처리
- [ ] TC-LOGIN-005: 로그아웃 후 세션 종료
- [ ] TC-LOGIN-011: 비밀번호 5회 실패 시 계정 잠금

### 검색
- [ ] TC-SEARCH-001: 키워드 검색 결과 반환
- [ ] TC-SEARCH-002: 없는 키워드 → 결과 없음 메시지
- [ ] TC-SEARCH-009: XSS 입력값 필터링 확인

### 장바구니/결제
- [ ] TC-CART-001: 상품 장바구니 추가
- [ ] TC-CART-003: 상품 제거
- [ ] TC-CART-006: 주문 완료 플로우
- [ ] TC-CART-007: 여러 상품 동시 담기

---

## ⚙️ 백엔드 / API

- [ ] TC-API-001: GET 엔드포인트 200 응답
- [ ] TC-API-003: POST 201 Created
- [ ] TC-API-006: DELETE 200
- [ ] TC-API-007: 없는 리소스 → 404
- [ ] TC-API-010: Content-Type 헤더 확인
- [ ] 인증 토큰 만료 → 401 처리 확인
- [ ] Rate Limit 초과 → 429 처리 확인

---

## ♿ 접근성 (A11y)

- [ ] TC-A11Y-001: `<html lang>` 속성 존재
- [ ] TC-A11Y-002: 이미지 `alt` 속성
- [ ] TC-A11Y-003: input-label 연결
- [ ] TC-A11Y-004: 키보드 Tab 네비게이션
- [ ] 색상 대비율 WCAG AA 기준 충족
- [ ] 스크린 리더 주요 페이지 읽기 확인

---

## ⚡ 성능

- [ ] TC-PERF-001: 로그인 페이지 로드 3초 이하
- [ ] TC-PERF-003: DOMContentLoaded 3초 이하
- [ ] TC-PERF-007: 저속 네트워크 환경 15초 이하
- [ ] Lighthouse 점수 Performance 70 이상

---

## 🔒 보안

- [ ] SQL Injection 입력값 차단 확인
- [ ] XSS 스크립트 태그 필터링 확인
- [ ] HTTPS 강제 리다이렉트 동작 여부
- [ ] 민감 정보(비밀번호, 토큰) 로그 노출 없음
- [ ] Secrets 환경변수 GitHub에 노출 없음

---

## 🔧 CI/CD 및 인프라

- [ ] GitHub Actions `qa-notify.yml` 트리거 동작 확인
- [ ] GitHub Actions `playwright.yml` 전체 spec 통과
- [ ] Slack `새-채널` 자동 알림 수신 확인
- [ ] 브랜치 보호 규칙 (main 직접 push 차단) 설정 확인

---

## 🌐 크로스 브라우저

- [ ] Chrome 최신 버전
- [ ] Firefox 최신 버전
- [ ] Safari (macOS/iOS)
- [ ] Edge 최신 버전
- [ ] 모바일 Chrome (Android)

---

## 🚀 릴리즈 승인 기준 (Exit Criteria)

| 항목 | 기준 |
|------|------|
| P1 (Critical) 버그 | **0건** |
| P2 (Major) 버그 | 5건 이하 |
| TC 커버리지 | 80% 이상 |
| 성능 로드타임 | 3초 이하 |
| 접근성 위반 | 0건 |
| CI 파이프라인 | 전체 Green |
| Slack 알림 | 발송 확인 |

> **승인 후**: Slack `새-채널` 에 릴리즈 완료 메시지 발송

*수치 기준: 2026-03-31 (TC 145건+, Playwright 12 spec)*
