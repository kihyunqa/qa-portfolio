# CHANGELOG

## v13.0.0 — 2026-03-31

### 취업 콘텐츠 강화 (STEP 59)

#### STEP 59 — interview-qa.md 신규 Q4개 추가

| 추가 Q&A | 핵심 포인트 |
|----------|------------|
| Q9. 코드 0줄인데 QA 자동화인가? | 파이프라인 설계 역량이 핵심, 직접 타이핑 여부가 아님 |
| Q10. 팀 환경 MCP 도입 방법 | 파일럿→표준화→파이프라인 확장 3단계 접근 |
| Q11. 테스트 커버리지 측정 방법 | 기능·경로·E2E 3레이어로 측정, P1·P2 실제 실행이 핵심 |
| Q12. 포트폴리오 제작 중 가장 어려웠던 점 | 수치 정합성 유지, CHANGELOG·NEXT_STEPS 인수인계 구조화 |

- interview-qa.md: 8개 → **12개 Q&A**로 강화

#### STEP 59 — linkedin-post.md 버전 6 추가

| 버전 | 특징 |
|------|------|
| 버전 6 (신규) | AI 생산성 콘텐츠형. 타임라인 포맷(오전 10시~10시 12분). 바이럴 노출 최적화. AI·생산성 커뮤니티 대상. |

- linkedin-post.md: 5버전 → **6버전**으로 확장
- 버전 6은 숫자+타임라인 포맷으로 LinkedIn 알고리즘 반응 최적화

**→ 면접 대비 Q&A 4개 추가, 링크드인 게시물 바이럴 버전 신규 추가** 🎉

---

## v12.0.0 — 2026-03-31

### testcase 전체 점검 + index.html TC-ID 수정 (STEP 56~58)

#### STEP 56 — testcase_*.md 나머지 12개 전체 점검

| 파일 | 결과 |
|------|------|
| testcase_api-testing.md | 이상 없음 ✅ |
| testcase_bug-report.md | 이상 없음 ✅ |
| testcase_cicd.md | 이상 없음 ✅ |
| testcase_cross-browser.md | 이상 없음 ✅ |
| testcase_e2e-playwright.md | 이상 없음 ✅ |
| testcase_login.md | 이상 없음 ✅ |
| testcase_mcp-integration.md | 이상 없음 ✅ |
| testcase_mobile.md | 이상 없음 ✅ |
| testcase_notification.md | 이상 없음 ✅ |
| testcase_notion.md | 이상 없음 ✅ |
| testcase_payment.md | 이상 없음 ✅ |
| testcase_performance.md | 이상 없음 ✅ |

- 나머지 12개 점검 완료, 오타 1개(testcase_regression.md) 수정
- 전체 16개 testcase_*.md 점검 완료

#### STEP 57 — index.html 전체 점검

| 항목 | 결과 |
|------|------|
| meta 수치 (MCP 5개, TC 145건+, spec 12개, Actions 2개) | ✅ 정확 |
| 경력 타임라인 (3개 회사, 날짜) | ✅ PROFILE.md와 일치 |
| 프로젝트 카드 10개 | ✅ 이상 없음 |
| TC 샘플 테이블 TC-ID | ❌ TC-SEC-002가 "SQL Injection 차단"으로 잘못 표기 → **TC-SEC-001로 수정 완료** |
| footer 수치 | ✅ 이상 없음 |
| 링크 전체 | ✅ 이상 없음 |

**→ index.html 전체 점검 완료. TC-ID 불일치 1건 수정.** ✅

#### STEP 58 — CHANGELOG v12 업데이트

- STEP 56~57 작업 내역 CHANGELOG에 기록
- v12로 버전 업데이트

**→ 포트폴리오 전체 최종 점검 및 문서 정합성 완료** 🎉

---

## v11.0.0 — 2026-03-31

### index.html 전체 수치 재점검 (STEP 50)

#### STEP 50 — index.html(58KB) testcase 수치 점검 결과

| 검사 항목 | 결과 |
|-----------|------|
| `17개` testcase 표기 검색 | **없음** — 수정 불필요 ✅ |
| TC 145건+ 표기 | 정확 ✅ |
| Playwright spec 12개 표기 | 정확 ✅ |
| GitHub Actions 2개 표기 | 정확 ✅ |
| MCP 서버 5개 표기 | 정확 ✅ |
| 코드 0줄 표기 | 정확 ✅ |

- index.html 전체를 직접 읽어 `17개` testcase 표기가 없음을 확인
- STEP 45(초기 점검) → STEP 50(재검증) 두 차례 확인으로 index.html 수치 정합성 보장 완료
- **수정 파일 없음** — 이미 정확한 상태 ✅

**→ 포트폴리오 전체 수치 정합성 이중 검증 완료 ✅**

---

## v10.0.0 — 2026-03-31

### 포트폴리오 전체 최종 점검 (STEP 49)

- README.md: testcase 17개 오기 → 16개로 수정 ✅
- docs/portfolio-summary.md: 가짜 17번째 행 제거, 16개로 수정 ✅
- docs/qa-kpi-dashboard.md: testcase_*.md 16개 수정 ✅

### 최종 수치 현황 (v10 기준)
| 항목 | 수치 |
|------|------|
| TC | 145건+ |
| Playwright spec | 12개 |
| testcase_*.md | **16개** |
| docs/ 문서 | 24개 |
| skills/ 문서 | 9개 |
| 레포 파일 수 | 80개+ |
| GitHub Actions | 2개 |
| MCP 연동 | 5개 |

---

## v9.0.0 — 2026-03-31

### docs 실제 수 23→24개 정정 완료 (STEP 46~47)

- docs/ 폴더 직접 카운트 결과 **24개** 확인 (이전 23개 오기)
- test-metrics.md: Playwright TC 수 56건 → 88건 수정
- README.md, qa-kpi-dashboard.md, qa-strategy.md, portfolio-summary.md: docs 수 24개로 일괄 반영

---

## v8.0.0 — 2026-03-31

### docs 수치 정합성 최종 완료 (STEP 43)

- docs/qa-kpi-dashboard.md: 22→23개 수정
- 나머지 docs 7개 파일: 이상 없음 확인

---

## v7.0.0 — 2026-03-31

### 수치 정합성 전체 완료 (STEP 34~39 + STEP 12)

- README.md 수치 9곳 업데이트
- PROFILE.md 수치 반영
- skills/ 9개 파일 전체 점검 + 2개 수정
- docs/share-action-plan.md 신규 생성
- portfolio-summary.md docs 수 22→23개

---

## v6.0.0 — 2026-03-31

- docs/linkedin-post.md 버전 5 추가, 게시 타이밍 가이드 신설
- docs/cover-letter.md 버전 4 (인공지능·테크 특화) 추가
- docs/share-action-plan.md 신규 생성

## v5.0.0 — 2026-03-30

- playwright-tests 추가 (portfolio.spec.js, accessibility.spec.js)
- docs 추가 (cover-letter, jira-mcp-plan, weekly-qa-report-template, ai-qa-vision)
- testcase_regression.md, testcase_mobile.md 추가
- docs/qa-kpi-dashboard.md, skills/mcp-integration.md 추가

## v4.0.0 — 2026-03-30
- signup.spec.js, helpers/page-objects.js, playwright.config.js 추가
- test-cases 3개 (auth/cart/search-api)
- docs/portfolio-summary.md, docs/mcp-workflow-diagram.md

## v3.0.0 — 2026-03-29
- MCP 5개 연동 완료 (filesystem/playwright/github/notion/slack)
- TC 125건+ 추가
- GitHub Actions 2개 워크플로우
- Playwright spec 8개

## v2.0.0 — 2026-03-29
- Notion TC 허브 자동 업로드
- GitHub MCP 토큰 교체

## v1.0.0 — 2026-03-29
- 초기 포트폴리오 생성
- index.html 배포
