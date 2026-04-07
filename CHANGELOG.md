# CHANGELOG

## v30.0.0 — 2026-04-07

### STEP 101 완료 — 우측 사이드 점 네비게이션 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 우측 고정 점 네비게이션 (`dot-nav`) 추가 | ✅ |
| CSS `.dot-nav` | 우측 고정 세로 점 목록 컨테이너 (z-index:998) | ✅ |
| CSS `.dot-nav-item` | 6px 원형 점, 기본 보라 테두리, active 시 보라 채움+glow | ✅ |
| CSS `.dot-label` | hover 시 오른쪽에서 슬라이드인 되는 섹션 이름 레이블 | ✅ |
| HTML `<nav class="dot-nav">` | hero/stats/mcp/proof/projects/diagram/roadmap/bug-stories/tc/timeline/skills/contact 12개 | ✅ |
| JS `initDotNav()` | scroll + offsetTop 방식으로 현재 섹션 감지, `.active` 토글 | ✅ |
| `id="hero"` | `<section class="hero">` 에 id 추가 | ✅ |
| 모바일 처리 | `max-width:900px` 에서 `.dot-nav { display:none }` | ✅ |

#### 점 네비게이션 섹션 목록 (12개)

| 순서 | 섹션 id | 레이블 |
|------|---------|--------|
| 1 | `#hero` | Hero |
| 2 | `#stats` | Stats |
| 3 | `#mcp` | MCP |
| 4 | `#proof` | Proof |
| 5 | `#projects` | Projects |
| 6 | `#diagram` | Diagram |
| 7 | `#roadmap` | Roadmap |
| 8 | `#bug-stories` | Bug Stories |
| 9 | `#tc` | Test Cases |
| 10 | `#timeline` | Timeline |
| 11 | `#skills` | Skills |
| 12 | `#contact` | Contact |

---

## v29.0.0 — 2026-04-06

### STEP 100 완료 — 섹션 간 divider 강화

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 섹션 사이 `.sec-divider` 그라데이션 페이드 레이어 추가 | ✅ |
| `.stats-sec` | 상단 보라 → 투명 그라데이션 오버레이 추가 | ✅ |
| `.mcp-sec` | 상단/하단 그라데이션 페이드 추가 | ✅ |
| `.proof-sec` | 상단 그라데이션 페이드 추가 | ✅ |
| `.bug-sec` | 상단 그라데이션 페이드 추가 | ✅ |
| `.timeline-sec` | 상단 그라데이션 페이드 추가 | ✅ |
| 전반적 흐름 | 섹션 경계가 자연스럽게 연결되는 시각적 효과 강화 | ✅ |

#### 섹션 divider 기술 방식

| 방식 | 내용 |
|------|------|
| `::before` pseudo | 각 섹션 상단 80px — `radial-gradient` 보라/퍼플 페이드 |
| 기존 `border-top` | 유지 (제거 않음) |
| 모바일 | 동일 적용 (단순 그라데이션이므로 성능 영향 없음) |
| z-index | `z-index: 0` — 콘텐츠 위로 올라오지 않도록 처리 |

---

## v28.0.0 — 2026-04-06

### STEP 97 완료 — TC 테이블 필터 버튼 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | TC 필터 버튼 4개 추가 (전체/해피패스/네거티브/엣지케이스) | ✅ |
| TC 행 수 | 8행 → 15행으로 확장 (AUTH/CART/PAY/API/SEC/NOTIF/PERF) | ✅ |
| 카운트 뱃지 | `N / 15건 표시` 실시간 업데이트 | ✅ |
| 빈 결과 처리 | 해당 조건의 TC가 없을 때 안내 메시지 표시 | ✅ |
| CSS | `.tc-filter-btn`, `.tc-filter-bar`, `.tc-count-badge`, `.tc-no-result` 추가 | ✅ |
| JS | `tcFilter()` 함수 — 행 필터링 + 카운트 업데이트 + 빈 결과 처리 | ✅ |

#### 필터 버튼 스타일

| 버튼 | 활성 스타일 | 대상 TC |
|------|------------|---------| 
| 전체 | 보라 채움 (`active`) | 15건 전체 |
| 🟣 해피패스 | 보라 연한 (`active-h`) | AUTH-001, AUTH-005, CART-001, NOTIF-001, TC-NOTIF-HP-001, TC-CICD-HP-001 |
| 🔴 네거티브 | 빨강 (`active-n`) | AUTH-007, AUTH-010, PAY-015, SEC-003, NOTIF-005 |
| 🟡 엣지케이스 | 주황 (`active-e`) | CART-008, PAY-012, API-S-006, PERF-002 |

#### TC 카테고리 분포 (15건)

| 카테고리 | 해피패스 | 네거티브 | 엣지케이스 |
|---------|---------|---------|----------|
| AUTH | 2 | 2 | 0 |
| CART | 1 | 0 | 1 |
| PAY | 0 | 1 | 1 |
| API/SEC | 0 | 1 | 1 |
| NOTIF | 1 | 1 | 0 |
| CI/CD | 1 | 0 | 0 |
| PERF | 0 | 0 | 1 |

---

## v27.0.0 — 2026-04-06

### STEP 96 완료 — 버그 스토리 인라인 카드 섹션 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 버그 스토리 섹션(sec 06) 추가 — STORY-001/002/003 인라인 카드 | ✅ |
| nav | "버그 스토리" 링크 추가 (`#bug-stories`) | ✅ |
| Hero CTA | "버그 스토리 ↗" → "버그 스토리 ↓" (인라인 앵커로 변경) | ✅ |
| 섹션 번호 | TC 06→07, 경력 07→08, 스킬 08→09 | ✅ |
| `.bug-*` CSS | 심각도별 컬러 카드 스타일 (P1-red/P1-orange/P2-blue) | ✅ |

#### 버그 스토리 카드 구성

| 카드 | 심각도 | 상단 라인 색 | 핵심 내용 |
|------|--------|------------|----------|
| STORY-001 | P1 보안 | 빨간색 | 로그아웃 후 토큰 유효 — Postman API 레벨 검증으로 발견 |
| STORY-002 | P1 결제 | 주황색 | 소수점 1원 오차 — 에스컬레이션 판단 과정 |
| STORY-003 | P2 UX | 파란색 | Slow 3G 알림 중복 — 네거티브 네트워크 테스트 |

---

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

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/ai-qa-vision.md` | 하단 날짜 2026-03-31 → **2026-04-01** 동기화 | ✅ |
| `docs/test-metrics.md` | 하단 날짜 2026-03-31 → **2026-04-01** 동기화 | ✅ |

---

## v24.0.0 — 2026-04-01

### STEP 88 완료 — docs 내부 수치 전체 동기화

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/qa-kpi-dashboard.md` | docs 25→**28**, Jira 행 추가, 버그 스토리/리포트 수치 추가 | ✅ |
| `docs/qa-onboarding.md` | docs 25→**28**, CHANGELOG v1~v17→v1~v23, Jira 체크리스트 추가 | ✅ |
| `docs/weekly-qa-report-template.md` | docs 25→**28**, 실제 예시 날짜 2026-04-01로 갱신 | ✅ |

---

## v23.0.0 — 2026-04-01

### STEP 87 완료 — 수치 정합성 최종 마무리

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `README.md` | docs 27개 → **28개** 수정, bug-stories 링크 추가 | ✅ |
| `docs/portfolio-summary.md` | docs 27개 → **28개** 수정, 버그 스토리/버그 리포트 수치 추가 | ✅ |

---

## v22.0.0 — 2026-04-01

### STEP 85~86 완료 — 포트폴리오 아쉬운 점 3가지 보완

#### STEP 85 — 버그 스토리 & 버그 리포트 강화

- docs/bug-stories.md 신규: QA 판단력 스토리 3건
- testcase_bug-report.md 강화: 3건 → 8건 확장

#### STEP 86 — index.html 전체 강화

- Hero 메시지: 구체적 QA 판단 사례 중심으로 교체
- Hero 증거 뱃지: 보안 버그 P1, 결제 오차 에스컬레이션 등 6개
- PROJECT 05/08: bug-stories 링크 + docs 28개 반영

---

## v21.0.0 — 2026-04-01

### STEP 10/11/12 완료

- STEP 10: 스크린샷 4장 캡처 + screenshots/README.md 커밋
- STEP 11: Jira + GitHub 연동 완료
- STEP 12: LinkedIn 게시 스킵

---

*이전 버전 이력은 git log 참고*
