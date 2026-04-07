# CHANGELOG

## v32.0.0 — 2026-04-07

### STEP 106~107 완료 — dot-nav 우측 고정 버그 완전 해결

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | STEP 106: `#dot-nav` CSS에 `position:fixed; right:20px; top:50%` 추가 시도 | ⚠️ 부분 |
| `index.html` | STEP 107: `<nav id="dot-nav">` → `<div id="dot-nav">` 태그 변경으로 완전 해결 | ✅ |
| 근본 원인 | `nav { left:0; right:0 }` 전역 CSS가 `#dot-nav` CSS보다 우선 적용 → 전체 너비로 퍼져 중앙처럼 보임 | 확인 |
| 모바일 대응 | `max-width:900px` 미만 `display:none` 유지 | ✅ |
| 호버 레이블 | `right:16px` 위치 정상 적용 | ✅ |
| 클릭 스크롤 | `data-target` 기반 `scrollIntoView` 정상 작동 | ✅ |
| 활성 dot | 스크롤 시 `active` 클래스 토글 정상 | ✅ |

#### 버그 분석

| 구분 | 내용 |
|------|------|
| 증상 | dot-nav가 화면 중앙에 고정되어 보임 |
| 원인 | HTML 태그가 `<nav>`여서 `nav { position:fixed; left:0; right:0 }` 스타일이 상속됨 |
| 해결 | 시맨틱 `<nav>` 대신 `<div>`로 변경 → nav 전역 스타일 충돌 제거 |
| 교훈 | HTML 시맨틱 태그와 전역 CSS 충돌 가능성 — id/class 선택자만으로 부족할 수 있음 |

---

## v31.0.0 — 2026-04-07

### STEP 103 완료 — TC 섹션 stat bar 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | TC 섹션 상단에 `.tc-stat-bar` 4칸 그리드 stat 바 추가 | ✅ |
| CSS `.tc-stat-bar` | 4칸 그리드 — `.stats-grid`와 동일한 레이아웃 패턴 | ✅ |
| CSS `.tc-stat-item` | hover 시 하단 보라 라인 + 배경 변화 효과 | ✅ |
| CSS `.tc-stat-item.highlight` | 첫 번째 칸(145건+) 강조 — 보라3 컬러 + 배경 tint | ✅ |
| HTML `.tc-stat-bar` | 4개 수치: 145건+, 16파일, 12 spec, 8카테고리 | ✅ |
| JS `tcStatO` | IntersectionObserver — 진입 시 숫자 카운트업 애니메이션 | ✅ |
| 위치 | TC 섹션 `sec-head` 바로 아래, `tc-intro` 위 | ✅ |

---

## v30.0.0 — 2026-04-07

### STEP 101 완료 — 우측 사이드 점 네비게이션 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 우측 고정 점 네비게이션 (`dot-nav`) 추가 | ✅ |
| CSS `#dot-nav` | 우측 고정 세로 점 목록 컨테이너 (z-index:500) | ✅ |
| CSS `.dot-nav-dot` | 6px 원형 점, 기본 보라 테두리, active 시 보라 채움+glow | ✅ |
| CSS `.dot-nav-label` | hover 시 오른쪽에서 나타나는 섹션 이름 레이블 | ✅ |
| 모바일 처리 | `max-width:900px` 에서 `#dot-nav { display:none }` | ✅ |

---

## v29.0.0 — 2026-04-06

### STEP 100 완료 — 섹션 간 divider 강화

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 섹션 사이 그라데이션 페이드 레이어 추가 | ✅ |
| 각 섹션 | 상단 보라 → 투명 그라데이션 오버레이 | ✅ |

---

## v28.0.0 — 2026-04-06

### STEP 97 완료 — TC 테이블 필터 버튼 추가

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | TC 필터 버튼 4개 추가 (전체/해피패스/네거티브/엣지케이스) | ✅ |
| TC 행 수 | 8행 → 15행으로 확장 | ✅ |
| JS | `tcFilter()` 함수 — 행 필터링 + 카운트 업데이트 | ✅ |

---

## v27.0.0 — 2026-04-06

### STEP 96 완료 — 버그 스토리 인라인 카드 섹션 추가

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 버그 스토리 섹션(sec 06) 추가 — STORY-001/002/003 인라인 카드 | ✅ |
| nav | "버그 스토리" 링크 추가 | ✅ |

---

## v26.0.0 — 2026-04-06

### STEP 91 완료 — 잔여 docs 3개 날짜 동기화

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/jira-integration-plan.md` | 날짜 2026-03-31 → 2026-04-06 | ✅ |
| `docs/regression-checklist.md` | 날짜 2026-03-31 → 2026-04-06 | ✅ |
| `docs/tools-comparison.md` | 날짜 동기화, Jira 상태 ✅ FULL ACCESS 반영 | ✅ |

---

## v25.0.0 — 2026-04-01

### STEP 89 완료 — 잔여 docs 날짜 동기화

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/ai-qa-vision.md` | 날짜 → 2026-04-01 | ✅ |
| `docs/test-metrics.md` | 날짜 → 2026-04-01 | ✅ |

---

## v24.0.0 — 2026-04-01

### STEP 88 완료 — docs 내부 수치 전체 동기화

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `docs/qa-kpi-dashboard.md` | docs 25→28, Jira 행 추가 | ✅ |
| `docs/qa-onboarding.md` | docs 25→28, Jira 체크리스트 추가 | ✅ |
| `docs/weekly-qa-report-template.md` | docs 25→28, 날짜 갱신 | ✅ |

---

## v23.0.0 — 2026-04-01

### STEP 87 완료 — 수치 정합성 최종 마무리

| 파일 | 변경 내용 | 상태 |
|------|-----------|------|
| `README.md` | docs 27→28개, bug-stories 링크 추가 | ✅ |
| `docs/portfolio-summary.md` | docs 27→28개, 수치 추가 | ✅ |

---

## v22.0.0 — 2026-04-01

### STEP 85~86 완료 — 포트폴리오 아쉬운 점 3가지 보완

- docs/bug-stories.md 신규: QA 판단력 스토리 3건
- testcase_bug-report.md 강화: 3건 → 8건 확장
- Hero 메시지: 구체적 QA 판단 사례 중심으로 교체

---

*이전 버전 이력은 git log 참고*
