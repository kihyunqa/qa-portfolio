# CHANGELOG

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
- NEXT_STEPS.md STEP 50 완료 기록 및 STEP 51·52 다음 스텝 추가 ✅

**→ 포트폴리오 전체 수치 정합성 이중 검증 완료 ✅**

---

## v10.0.0 — 2026-03-31

### 포트폴리오 전체 최종 점검 (STEP 49)

#### STEP 49 — 전체 점검 결과

| 파일 | 점검 결과 |
|------|----------|
| README.md | 파일 전체 확인 → testcase 17개 오기로 발견 → 16개로 수정 ✅ |
| PROFILE.md | 수치 이상 없음 ✅ |
| testcase_*.md | 직접 카운트 → **실제 16개** (17개 오기로 발견) |
| docs/ 폴더 | 24개 재확인 ✅ |

#### 주요 발견: testcase 수 17→16개 정정

- 루트 `testcase_*.md` 직접 카운트 결과 **16개** (accessibility, api-testing, bug-report, cicd, cross-browser, e2e-playwright, login, mcp-integration, mobile, notification, notion, payment, performance, regression, security, signup)
- `portfolio-summary.md`의 가짜 17번째 행 `버그 리포트2 (포함)` 제거
- 모든 문서의 `testcase 17개` 표기 → `16개`로 수정

**수정 파일:**
- `docs/portfolio-summary.md`: TC 17개 도메인 커버 헤더 및 합계 16개로 수정, 가짜 행 제거 ✅
- `docs/qa-kpi-dashboard.md`: `testcase_*.md 16개` (2곳) → 수정 ✅
- `README.md`: `16개 testcase 파일`, 레포 구조 `TC 파일 16개` 수정 ✅

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

**→ 레포 전체 수치 정합성 최종 완료 ✅**

---

## v9.0.0 — 2026-03-31

### docs 실제 수 23→24개 정정 완료 (STEP 46~47)

#### STEP 46 — docs/ 폴더 직접 카운트 및 수치 정정

- docs/ 폴더 파일을 직접 카운트한 결과 **24개** 확인 (이전까지 23개로 잘못 기재)
- **interview-qa.md** (5203b): 정상 파일, 수치 이상 없음 ✅
- **test-metrics.md** (2925b): Playwright TC 수 `56건 → 88건(spec 12개)` 수정 ✅
- **README.md**: docs 수 `23→24개` 수정 ✅

#### STEP 47 — 나머지 파일 docs 수 24개 반영

| 파일 | 수정 내역 |
|------|----------|
| docs/qa-kpi-dashboard.md | 품질 지표 요약: `docs 문서 수 23개 → 24개` ✅ |
| docs/qa-strategy.md | 실제 성과 수치 표: `docs 문서 23개 → 24개` ✅ |
| docs/portfolio-summary.md | 수치 표 + footer: `docs/ 문서 23개 → 24개` ✅ |

---

## v8.0.0 — 2026-03-31

### docs 수치 정합성 최종 완료 (STEP 43)

| 파일 | 결과 |
|------|------|
| docs/ai-qa-vision.md | 이상 없음 ✅ |
| docs/qa-kpi-dashboard.md | **22→23개 수정 완료** ✅ |
| docs/mcp-workflow-diagram.md | 이상 없음 ✅ |
| docs/release-qa-process.md | 이상 없음 ✅ |
| docs/tools-comparison.md | 이상 없음 ✅ |
| docs/interview-prep-advanced.md | 이상 없음 ✅ |
| docs/interview-qa-advanced.md | 이상 없음 ✅ |

---

## v7.0.0 — 2026-03-31

### 수치 정합성 전체 완료 (STEP 34~39 + STEP 12)

- STEP 35: README.md 수치 9곳 업데이트
- STEP 36: PROFILE.md 수치 반영
- STEP 37: qa-automation-report.md 맥락 명확화
- STEP 38: skills/ 9개 파일 전체 점검 + 2개 수정
- STEP 12: docs/share-action-plan.md 신규 생성
- STEP 39: portfolio-summary.md docs 수 22→23개

---

## v6.0.0 — 2026-03-31

### 문서 보강 (STEP 31~33)
- docs/linkedin-post.md — 버전 5 추가, 게시 타이밍 가이드 신설
- docs/cover-letter.md — 버전 4 (인공지능·테크 특화) 추가, 버전 선택 매트릭스 신설
- docs/share-action-plan.md 신규 생성 (플랫폼별 공유 액션 가이드)

## v5.0.0 — 2026-03-30

- playwright-tests/portfolio.spec.js, accessibility.spec.js 추가
- docs/cover-letter.md, jira-mcp-plan.md, weekly-qa-report-template.md, ai-qa-vision.md 추가
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
