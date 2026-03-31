# CHANGELOG

## v7.0.0 — 2026-03-31

### 수치 정합성 전체 완료 (STEP 34~39 + STEP 12)

#### STEP 34 — CHANGELOG.md v6 추가
- 이전 작업 이력 기록

#### STEP 35 — README.md 최신화
- 수치 9곳 업데이트 (spec 12개, TC 145건+, 파일 80개+)
- 커버레터 4종 링크 추가

#### STEP 36 — PROFILE.md 최신화
- spec 12개, TC 145건+ 수치 반영

#### STEP 37 — qa-automation-report.md 맥락 명확화
- 스프린트 기준 TC 30건 / 포트폴리오 누적 TC 145건+ 병기
- header·footer에 맥락 주석 추가 (3520b → 3779b)

#### STEP 38 — skills/ 9개 파일 전체 수치 점검
- skills/mcp-integration.md — spec 9개→12개, 60+→80개+ 수정
- skills/test-strategy.md — Playwright 56건→E2E spec 12개, KPI 정확화
- 나머지 7개 파일 — 이상 없음 확인

#### STEP 12 — 포트폴리오 공개 공유 준비
- docs/linkedin-post.md / cover-letter.md / portfolio-summary.md 최종 점검 완료
- docs/share-action-plan.md **신규 생성** — 플랫폼별 공유 액션 가이드
  - 공유 전 체크리스트, LinkedIn 버전별 선택 가이드, 최적 게시 타이밍
  - 원티드/잡플래닛/사람인/로켓펀치 입력 위치
  - 이메일 제목·헤드헌터 DM 템플릿, 커뮤니티 공유 메시지
  - 권장 실행 타임라인

#### STEP 39 — portfolio-summary.md 수치 수정
- docs/ 문서 수 22개→23개 수정
- 핵심 문서 목록에 linkedin-post.md, share-action-plan.md 추가

### 최종 수치 현황
| 항목 | 수치 |
|------|------|
| TC | 145건+ |
| Playwright spec | 12개 |
| docs/ 문서 | 23개 |
| skills/ 문서 | 9개 |
| 레포 파일 수 | 80개+ |
| GitHub Actions | 2개 |
| MCP 연동 | 5개 |

---

## v6.0.0 — 2026-03-31

### 문서 보강 (STEP 31~33)
- docs/linkedin-post.md — 버전 5 (구직 중 공개용) 추가, 게시 타이밍 가이드 신설 (2974b→5108b)
- docs/cover-letter.md — 버전 4 (AI·테크 특화) 추가, 버전 선택 매트릭스 신설 (3171b→5345b)
- docs/portfolio-summary.md — 커버레터 3종→4종 수정, 수치 최신화 (4071b→4126b)
- docs/qa-notify-workflow.md — 내용 점검 완료 (보강 불필요)
- docs/qa-onboarding.md — 내용 점검 완료 (보강 불필요)

### 인수인계
- NEXT_STEPS.md — STEP 33 완료 기록, STEP 34 신규 추가, 작업 규칙 7번 추가

## v5.0.0 — 2026-03-30

### 추가
- playwright-tests/portfolio.spec.js — 포트폴리오 사이트 자체 E2E (6개 TC)
- playwright-tests/accessibility.spec.js — 접근성 자동화 (4개 TC)
- docs/cover-letter.md — 자기소개서
- docs/jira-mcp-plan.md — PHASE 2 Jira MCP 계획
- docs/weekly-qa-report-template.md — 주간 QA 리포트 템플릿
- docs/ai-qa-vision.md — AI QA 비전 문서
- testcase_regression.md — 회귀 TC 10건
- testcase_mobile.md — 모바일 TC 8건
- e2e-scenarios/mobile-flow.md
- e2e-scenarios/accessibility-flow.md
- docs/qa-kpi-dashboard.md
- skills/mcp-integration.md

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
