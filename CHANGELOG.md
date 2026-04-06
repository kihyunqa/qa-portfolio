# CHANGELOG

## v26.0.0 — 2026-04-06

### STEP 91 완료 — 잔여 docs 3개 날짜 동기화

#### 작업 내용

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/jira-integration-plan.md` | 하단 날짜 2026-03-31 → **2026-04-06** 동기화 | ✅ |
| `docs/regression-checklist.md` | 하단 날짜 2026-03-31 → **2026-04-06** 동기화 | ✅ |
| `docs/tools-comparison.md` | 하단 날짜 2026-03-31 → **2026-04-06** 동기화, Jira 상태 🔜→✅ FULL ACCESS 반영 | ✅ |

#### 확정 수치 (v26 — v25 수치 동일, 날짜 & Jira 상태 갱신)

| 항목 | 수치 |
|------|------|
| TC | **145건+** |
| Playwright spec | **12개** |
| testcase_*.md | **16개** |
| docs/ 문서 | **28개** |
| skills/ 문서 | **9개** |
| 레포 파일 수 | **80개+** |
| GitHub Actions | **2개** |
| MCP 연동 | **5개 (운영)** |
| Jira 연동 | **✅ FULL ACCESS** |
| 커버레터 | **5종** |
| 버그 스토리 | **3건** |
| 버그 리포트 | **8건** |

---

## v25.0.0 — 2026-04-01

### STEP 89 완료 — 잔여 docs 날짜 동기화 점검

#### 작업 내용

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/ai-qa-vision.md` | 수치 정합 확인 ✅ — 하단 날짜 2026-03-31 → **2026-04-01** 동기화 | ✅ |
| `docs/test-metrics.md` | 수치 정합 확인 ✅ — 하단 날짜 2026-03-31 → **2026-04-01** 동기화, 주간 리포트 예시 날짜 갱신 | ✅ |
| `docs/share-action-plan.md` | 수치 정합 확인 ✅ — 변경 불필요 (이미 2026-04-01 기준) | ➡️ 이상 없음 |

---

## v24.0.0 — 2026-04-01

### STEP 88 완료 — docs 내부 수치 전체 동기화

#### 작업 내용

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/qa-kpi-dashboard.md` | docs 25→**28**, Jira 행 추가, 버그 스토리/리포트 수치 추가, 개선 이력 4건 추가 | ✅ |
| `docs/qa-onboarding.md` | docs 25→**28**, CHANGELOG v1~v17→v1~v23, Jira 체크리스트 추가, bug-stories 링크 추가 | ✅ |
| `docs/weekly-qa-report-template.md` | docs 25→**28**, 실제 예시 날짜 2026-04-01로 갱신, Jira 항목 추가 | ✅ |

---

## v23.0.0 — 2026-04-01

### STEP 87 완료 — 수치 정합성 최종 마무리

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `README.md` | docs 27개 → **28개** 수정, bug-stories 링크 추가, footer 수치 반영 | ✅ |
| `docs/portfolio-summary.md` | docs 27개 → **28개** 수정, 버그 스토리/버그 리포트 수치 추가, v21 → v23 | ✅ |

---

## v22.0.0 — 2026-04-01

### STEP 85~86 완료 — 포트폴리오 아쉬운 점 3가지 보완

#### STEP 85 — 버그 스토리 & 버그 리포트 강화

| 작업 | 내용 | 상태 |
|------|------|------|
| docs/bug-stories.md 신규 | QA 판단력 스토리 3건 | ✅ |
| testcase_bug-report.md 강화 | 3건 → 8건 확장 | ✅ |

**bug-stories.md 수록 케이스:**
- STORY-001: 로그아웃 후 토큰 여전히 유효 (P1 보안 — API 레벨 검증으로 발견)
- STORY-002: 결제 소수점 1원 오차 누적 (P1 — 계산 순서 설계 문제로 에스컬레이션)
- STORY-003: 저속 네트워크 알림 중복 (P2 — Chrome Slow 3G 시뮬레이션으로 발견)

#### STEP 86 — index.html 전체 강화

| 변경 항목 | 내용 |
|-----------|------|
| Hero 메시지 | 구체적 QA 판단 사례 중심으로 교체 |
| Hero 증거 뱃지 | 보안 버그 P1, 결제 오차 에스컬레이션 등 6개 추가 |
| CTA 버튼 | "버그 스토리 ↗" 버튼 추가 |
| PROJECT 05/08 | bug-stories 링크 + docs 28개 반영 |

---

## v21.0.0 — 2026-04-01

### STEP 10/11/12 완료 — 실증 자료 확보 및 외부 연동 마무리

| 작업 | 내용 | 상태 |
|------|------|------|
| STEP 10 | 스크린샷 4장 캡처 + screenshots/README.md 커밋 | ✅ |
| STEP 11 | Jira + GitHub 연동 완료 + docs/jira-github-integration.md 커밋 | ✅ |
| STEP 12 | LinkedIn 게시 — 사용자 판단으로 스킵 | ➡️ 스킵 |

---

## v20.0.0 — 2026-03-31

### 레포 전체 최종 점검 완료 (STEP 78~79)

| 파일/폴더 | 결과 |
|-----------|------|
| index.html (59KB) | ✅ TC 145건+, spec 12개, MCP 5개, Actions 2개 전부 정확 |
| README.md | ✅ 수치 이상 없음 |
| skills/ 9개 전체 | ✅ 수정 불필요 |
| docs/ 25개 전체 | ✅ STEP 76 완전 완료 |

---

## v19.0.0 — 2026-03-31

### docs 25개 전체 수치 점검 완전 완료 (STEP 76)

수정 파일 2개: weekly-qa-report-template(docs 22→25), qa-kpi-dashboard(이력 24→25)

---

## v18.0.0 — 2026-03-31

### 남은 docs 전체 점검 완료 (STEP 72~75)

- qa-onboarding.md: TC 17→16개, docs 22→25개, CHANGELOG v1~v17 수정
- qa-strategy, release-qa-process, qa-checklist: 수정 불필요

---

## v17.0.0 — 2026-03-31

### README + portfolio-summary 수치 정합성 완료 (STEP 69~71)

- README.md: 커버레터 4→5종, LinkedIn 1~5→1~6
- portfolio-summary.md: 커버레터 4→5종, LinkedIn 5→6버전

---

## v16.0.0 — 2026-03-31

- ai-qa-vision.md: TC 17→16개, 2026 AI 트렌드 섹션 추가
- share-action-plan.md: LinkedIn v6 추천, cover-letter v5 매트릭스

---

## v15.0.0 — 2026-03-31

- interview-qa-advanced.md: Q10 심화 + Q11 신규 (AI 시대 QA 역할)
- docs 수 24→25개 반영

---

## v14.0.0 — 2026-03-31

- cover-letter.md: 4버전 → 5버전 (AI 프로덕트 스타트업 특화)
- docs/self-introduction.md 신규 생성
- docs/ 문서 수: 24개 → **25개**

---

## v13.0.0 — 2026-03-31

- interview-qa.md: 8개 → **12개 Q&A**
- linkedin-post.md: 5버전 → **6버전**

---

## v12.0.0 — 2026-03-31

- testcase_*.md 16개 전체 점검, 오타 수정
- index.html TC-ID 오류 수정

---

## v11.0.0 — 2026-03-31

- index.html 전체 수치 이중 검증 완료

---

## v10.0.0 — 2026-03-31

- testcase 수 17→16개 정정
- README.md, docs/portfolio-summary.md, docs/qa-kpi-dashboard.md 수정

---

## v9.0.0 — 2026-03-31

- docs/ 폴더 직접 카운트 결과 24개 확인

---

## v8.0.0 — 2026-03-31

- docs/qa-kpi-dashboard.md: 22→23개 수정

---

## v7.0.0 — 2026-03-31

- README.md, PROFILE.md, skills/ 전체 수치 정합성 완료
- docs/share-action-plan.md 신규 생성

---

## v6.0.0 — 2026-03-31

- docs/linkedin-post.md 버전 5 추가
- docs/cover-letter.md 버전 4 추가

## v5.0.0 — 2026-03-30

- playwright-tests 추가 (portfolio.spec.js, accessibility.spec.js)
- docs 추가 (cover-letter, jira-mcp-plan, weekly-qa-report-template, ai-qa-vision)
- testcase_regression.md, testcase_mobile.md 추가

## v4.0.0 — 2026-03-30

- signup.spec.js, helpers/page-objects.js, playwright.config.js 추가
- test-cases 3개 (auth/cart/search/payment/signup)
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
