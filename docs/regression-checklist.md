# ✅ 릴리스 회귀 테스트 체크리스트

> 릴리스 전 반드시 확인해야 할 핵심 기능 목록  
> Playwright spec 12개로 자동화 커버 + 수동 보완 체크리스트

---

## 🔐 인증/인가 (login.spec.ts, signup.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| 로그인 성공 (정상 자격증명) | ✅ Playwright | [ ] |
| 로그인 실패 (잘못된 비밀번호) | ✅ Playwright | [ ] |
| 로그아웃 실행 후 세션 해제 | ✅ Playwright | [ ] |
| 비밀번호 재설정 이메일 발송 | 수동 | [ ] |
| 로그아웃 상태에서 보호 페이지 접근 차단 | ✅ Playwright | [ ] |
| 소셜 로그인 (Google/Kakao) | 수동 | [ ] |
| 세션 만료 후 자동 로그아웃 | ✅ Playwright | [ ] |

---

## 📄 페이지 로드 (performance.spec.ts, cross-browser.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| 메인 페이지 표시 (2초 이내) | ✅ Playwright | [ ] |
| 상품 목록 표시 | ✅ Playwright | [ ] |
| 상품 상세 페이지 로드 | ✅ Playwright | [ ] |
| 이미지 로드 (broken image 없음) | ✅ Playwright | [ ] |
| 모바일 반응형 레이아웃 | ✅ Playwright | [ ] |
| Chrome / Firefox / Safari 크로스 브라우저 | ✅ Playwright | [ ] |
| iOS / Android 모바일 뷰 | 수동 | [ ] |

---

## 🔍 검색 (search.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| 키워드 검색 결과 로드 | ✅ Playwright | [ ] |
| 필터 기능 (카테고리, 가격대) | ✅ Playwright | [ ] |
| 자동완성 작동 | ✅ Playwright | [ ] |
| 검색 결과 없음 표시 | ✅ Playwright | [ ] |
| 특수문자 검색 입력 처리 | ✅ Playwright | [ ] |
| 빈 검색어 처리 | ✅ Playwright | [ ] |

---

## 🛒 장바구니 (cart.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| 상품 추가 | ✅ Playwright | [ ] |
| 상품 제거 | ✅ Playwright | [ ] |
| 수량 변경 | ✅ Playwright | [ ] |
| 합계 가격 계산 정확 | ✅ Playwright | [ ] |
| 장바구니 직접 접근 | ✅ Playwright | [ ] |
| 품절 상품 비활성화 | ✅ Playwright | [ ] |
| 비로그인 장바구니 처리 | ✅ Playwright | [ ] |

---

## 💳 결제 (payment.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| 주문 확인 페이지 로드 | ✅ Playwright | [ ] |
| 카드 정보 입력 및 검증 | 수동 (스테이징) | [ ] |
| 주문 성공 후 확인 리다이렉트 | ✅ Playwright | [ ] |
| 주문 완료 이메일 발송 | 수동 | [ ] |
| 장바구니 비워짐 확인 | ✅ Playwright | [ ] |
| 결제 실패 오류 메시지 | ✅ Playwright | [ ] |

---

## 🌐 백엔드 / API (api.spec.ts)

| 엔드포인트 | 기대값 | 자동화 | 확인 |
|-----------|--------|--------|------|
| GET /api/products | 200 | ✅ Playwright | [ ] |
| POST /api/login | 200/401 | ✅ Playwright | [ ] |
| GET /api/cart | 200 + 구조 확인 | ✅ Playwright | [ ] |
| POST /api/order | 201 | ✅ Playwright | [ ] |
| 인증 없는 요청 | 401 | ✅ Playwright | [ ] |
| 없는 리소스 | 404 | ✅ Playwright | [ ] |
| 서버 오류 | 500 처리 | ✅ Playwright | [ ] |

---

## ⚡ 성능 (performance.spec.ts)

| 지표 | 기준 | 자동화 | 확인 |
|------|------|--------|------|
| 메인페이지 LCP | < 2.5초 | ✅ Playwright | [ ] |
| API 응답 시간 | < 500ms | ✅ Playwright | [ ] |
| 이미지 캐시 로드 | 개선 확인 | ✅ Playwright | [ ] |
| TTI (Time to Interactive) | < 3초 | ✅ Playwright | [ ] |

---

## 🔒 보안 (security.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| XSS 시도 입력값 차단 | ✅ Playwright | [ ] |
| HTTPS 리다이렉트 | ✅ Playwright | [ ] |
| 중요 데이터 무단 접근 차단 | ✅ Playwright | [ ] |
| SQL Injection 방어 | ✅ Playwright | [ ] |
| CSRF 토큰 검증 | 수동 | [ ] |

---

## ♿ 접근성 (accessibility.spec.ts)

| TC | 자동화 | 확인 |
|----|--------|------|
| ARIA 레이블 누락 없음 | ✅ Playwright | [ ] |
| 키보드 탐색 가능 | ✅ Playwright | [ ] |
| 색상 대비 기준 충족 | ✅ Playwright | [ ] |
| 스크린리더 호환 | 수동 | [ ] |

---

## 🤖 MCP 연동 자동화

| 항목 | 확인 |
|------|------|
| GitHub Actions qa-notify.yml 정상 실행 | [ ] |
| GitHub Actions playwright.yml 정상 실행 | [ ] |
| Slack 새-채널 알림 수신 확인 | [ ] |
| Playwright spec 12개 전체 통과 | [ ] |
| Notion TC DB 결과 업데이트 | [ ] |

---

## 🚦 릴리스 게이팅 기준

| 기준 | 목표값 | 측정 방법 |
|------|--------|-----------|
| P0(Critical) 버그 | **0건** | Notion TC DB |
| P1(Major) 버그 | **0건** | Notion TC DB |
| 자동화 TC 통과율 | **98% 이상** | Playwright 리포트 |
| 회귀 테스트 통과율 | **100%** | 이 체크리스트 |
| 성능 기준 (LCP) | **2.5초 이하** | performance spec |
| 접근성 위반 | **0건** | accessibility spec |

---

## 📊 자동화 커버리지 현황

| 영역 | 전체 TC | 자동화 | 수동 | 자동화율 |
|------|---------|--------|------|----------|
| 인증 | 7 | 5 | 2 | 71% |
| 페이지 로드 | 7 | 6 | 1 | 86% |
| 검색 | 6 | 6 | 0 | 100% |
| 장바구니 | 7 | 7 | 0 | 100% |
| 결제 | 6 | 4 | 2 | 67% |
| API | 7 | 7 | 0 | 100% |
| 성능 | 4 | 4 | 0 | 100% |
| 보안 | 5 | 4 | 1 | 80% |
| 접근성 | 4 | 3 | 1 | 75% |
| **전체** | **53** | **46** | **7** | **87%** |

---

*최종 업데이트: 2026-03-31 · STEP 26 보강 · 1868 → 5000+ bytes*
