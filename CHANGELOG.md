# CHANGELOG

## v47.0.0 — 2026-04-22

### STEP 135 완료 — Jira proof 카드 추가 + 스크롤 바 색상 동적 변화

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| Jira proof 카드 추가 | proof 섹션에 5번째 카드(전체 폭) 추가 — jira-board.png 실제 스크린샷 포함 | ✅ |
| `.proof-card-full` CSS | `grid-column: 1/-1` — 전체 폭 레이아웃, 모바일에서는 auto | ✅ |
| `.proof-screenshot-jira` CSS | Jira 카드 스크린샷 높이 200px (기본 140px보다 크게) | ✅ |
| proof 섹션 배지 | `5개 실제 확인`으로 업데이트 | ✅ |
| 스크롤 진행 바 색상 동적 변화 | 스크롤 위치에 따라 보라→파랑 방향으로 자연스럽게 그라디언트 변화 | ✅ |
| JS 스크롤 바 | `scrollBar.style.cssText`로 background 즉시 반영 (CSS transition 없음) | ✅ |
| 불필요 애니메이션 | 없음 · requestAnimationFrame 기반 스로틀링만 사용 | ✅ |

---

## v46.0.0 — 2026-04-22

### STEP 134 완료 — TC stat bar 실시간 건수 동기화 + 실제 증거 섹션 스크린샷 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| TC stat bar 동기화 | 필터/검색 변경 시 해피패스·네거티브·엣지케이스 건수 실시간 업데이트 | ✅ |
| `updateTcStatBar()` 함수 | TC 행의 display 상태 확인 → 건수 재계산 → DOM 업데이트 | ✅ |
| 실제 증거 카드 스크린샷 | Notion(notion-tc-page.png), GitHub(claude-mcp-workflow.png), Slack(slack-notification.png) 이미지 추가 | ✅ |
| `.proof-screenshot` CSS | img 높이 140px · object-fit:cover · lazy loading | ✅ |
| PROJECT 09/10 오버레이 링크 | 스크린샷 링크 추가 (screenshots/ 폴더 연결) | ✅ |
| 불필요 애니메이션 | 없음 · 순수 display 토글 + static img 태그만 사용 | ✅ |

---

## v45.0.0 — 2026-04-21

### STEP 133 완료 — TC 섹션 실시간 검색 필터 추가

---

## v44.0.0 — 2026-04-08

### STEP 132 완료 — Hero 섹션 순차 fade-in 로딩 애니메이션

---

## v43.0.0 — 2026-04-08

### STEP 131 완료 — TC 테이블 행 클릭 expand/collapse 인터랙션

---

## v42.0.0 — 2026-04-08

### STEP 129 완료 — 히어로 stat 카드 hover 툴팁 + 클릭 섹션 스크롤 추가

---

## v41.0.0 — 2026-04-08

### STEP 127 완료 — 경력 타임라인 클릭 expand/collapse 인터랙션 추가

---

## v40.0.0 — 2026-04-07

### STEP 125 완료 — 프로젝트 카드 호버 오버레이 추가

---

## v39.0.0 — 2026-04-07

### STEP 123 완료 — Skills 스킬 바 hover 툴팁 추가

---

## v38.0.0 — 2026-04-07

### STEP 121 완료 — 섹션별 통계 배지 추가

---

## v37.0.0 — 2026-04-07

### STEP 119 완료 — TC 섹션 행 확장 8행 → 20행

---

## v36.0.0 — 2026-04-07

### STEP 117 완료 — Hero 섹션 Canvas 파티클 배경 효과 추가

---

## v35.0.0 — 2026-04-07

### STEP 115 완료 — 커밋 히스토리 시각화 카드 추가

---

## v34.0.0 — 2026-04-07

### STEP 113 완료 — Hero 타이핑 효과 + TC 필터 버튼 복원

---

## v33.0.0 — 2026-04-07

### STEP 110~111 완료 — QA 스킬 레이더 차트 시각화

---

## v32.0.0 — 2026-04-07

### STEP 106~107 완료 — dot-nav 우측 고정 버그 완전 해결

---

## v31.0.0 — 2026-04-07

### STEP 103 완료 — TC 섹션 stat bar 추가

---

*이전 버전 이력은 git log 참고*
