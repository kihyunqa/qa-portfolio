# 🚀 릴리즈 QA 프로세스

> QA Portfolio - kihyunqa | 릴리즈 주기별 QA 프로세스 정리  
> 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## 1. 릴리즈 주기 (2주 스프린트 기준)

### 1주차 — 설계 및 검증

| 요일 | 활동 | MCP 활용 |
|------|------|----------|
| 월 | 요구사항 분석 + TC 설계 | filesystem MCP → TC 파일 생성 |
| 화 | 개발 시작 후 TC 직접 검증 | playwright MCP → 자동 실행 |
| 수 | 테스트 실행 + 버그 리포트 | github MCP → 버그 파일 커밋 |
| 목 | 버그 피드백 + 재테스트 | notion MCP → TC 결과 업데이트 |
| 금 | 시연 테스트 (버그 픽스 후) | slack MCP → 결과 알림 발송 |

### 2주차 — 통합 및 릴리즈

| 요일 | 활동 | MCP 활용 |
|------|------|----------|
| 월 | 통합 테스트 + 회귀 테스트 | playwright MCP → 회귀 spec 전체 실행 |
| 화 | E2E 실행 + 성능 측정 | playwright MCP → performance spec |
| 수 | 릴리즈 후보 프리즈 승인 | github MCP → release tag 생성 |
| 목 | 최종 점검 + 승인 | notion MCP → 최종 TC 결과 기록 |
| 금 | 프로덕션 배포 + 리포트 | slack MCP → 배포 완료 알림 |

---

## 2. 입/출 기준 (Entry / Exit Criteria)

### 테스트 시작 조건 (Entry Criteria)

| 조건 | 확인 방법 |
|------|----------|
| ✅ 데모 환경 배포 완료 | 스테이징 URL 접속 확인 |
| ✅ TC 승인 완료 | Notion TC Hub 리뷰 완료 |
| ✅ 테스트 데이터 준비 완료 | 계정/상품/결제 데이터 세팅 |
| ✅ 블로커 버그 없음 | P0 이슈 0건 확인 |
| ✅ Playwright spec 준비 | 12개 spec 최신화 확인 |

### 릴리즈 승인 조건 (Exit Criteria)

| 조건 | 기준치 | 확인 방법 |
|------|--------|----------|
| P0(Critical) 버그 | **0건** | Notion TC DB 확인 |
| P1(Major) 버그 | **0건** | 버그 리포트 확인 |
| P2(Minor) 버그 | **5건 이하** | 위험도 평가 후 승인 |
| TC PASS율 | **95% 이상** | Playwright 리포트 |
| 성능 기준 | **3초 이하** | performance spec 결과 |
| 보안 TC | **승인 완료** | security TC 전 항목 PASS |
| 접근성 위반 | **0건** | accessibility spec 결과 |

---

## 3. QA 이벤트별 자동화 트리거

| 이벤트 | 자동 동작 | MCP |
|--------|----------|-----|
| TC 파일 push | GitHub Actions → Slack 알림 | github + slack |
| PR merge | 회귀 테스트 자동 실행 | playwright |
| 스펙 실패 | Slack P1 긴급 알림 | slack |
| 릴리즈 tag 생성 | Notion TC DB 업데이트 | notion |
| 배포 완료 | 스모크 테스트 자동 실행 | playwright |
| (PHASE 2) 스펙 실패 | Jira 버그 이슈 자동 등록 | jira |

---

## 4. 릴리즈 QA 체크리스트

### 기능 테스트
- [ ] 로그인 / 로그아웃 정상 동작
- [ ] 회원가입 플로우 전체 PASS
- [ ] 핵심 기능 E2E 시나리오 PASS
- [ ] API 응답 코드 정상 (200/201)
- [ ] 결제 플로우 정상 (스테이징 환경)

### 비기능 테스트
- [ ] 페이지 로딩 3초 이하
- [ ] 접근성 위반 0건
- [ ] 크로스 브라우저 (Chrome / Firefox / Safari)
- [ ] 모바일 반응형 확인
- [ ] 보안 TC 전 항목 통과

### 자동화 확인
- [ ] Playwright spec 12개 전체 실행
- [ ] GitHub Actions 정상 완료
- [ ] Slack 알림 정상 수신
- [ ] Notion TC 결과 업데이트 완료

---

## 5. 긴급 롤백 기준

| 상황 | 판단 | 조치 |
|------|------|------|
| P0(Critical) 버그 발견 | 즉시 롤백 | 이전 버전 복구 + Slack 긴급 알림 |
| 성능 3배 저하 | 즉시 롤백 | 원인 분석 후 재배포 |
| API 500 에러 | 즉시 롤백 | 서버 팀 긴급 대응 |
| 결제 오류 | 즉시 롤백 | 결제팀 + QA 동시 대응 |

---

## 6. 관련 문서

| 문서 | 위치 |
|------|------|
| QA 체크리스트 전체 | `docs/qa-checklist.md` |
| 회귀 테스트 목록 | `docs/regression-checklist.md` |
| KPI 대시보드 | `docs/qa-kpi-dashboard.md` |
| 주간 리포트 템플릿 | `docs/weekly-qa-report-template.md` |
| Playwright spec | `playwright-tests/` 폴더 |

---

*최종 업데이트: 2026-03-31 · STEP 26 보강 · 1363 → 4000+ bytes*
