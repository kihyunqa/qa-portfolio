# CHANGELOG

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

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| CSS `.tc-search-wrap` | flex 컨테이너 · input + 버튼 + 카운트 | ✅ |
| CSS `.tc-search-input` | 모노 폰트 · bg3 배경 · purple focus 테두리 | ✅ |
| CSS `.tc-search-clear` | 초기화 버튼 · hover purple | ✅ |
| CSS `.tc-search-count` | 검색 결과 건수 표시 | ✅ |
| HTML 검색 input | `tcSearchInput` + `tcSearchClear` + `tcSearchCount` | ✅ |
| JS `applySearch()` | TC-ID · 제목 · 기대결과 실시간 필터 | ✅ |
| JS filter 연동 | 기존 필터 버튼(전체/해피패스/네거티브/엣지케이스)과 검색 AND 조합 | ✅ |
| JS detail row 연동 | 검색 결과에서 숨겨진 행은 expand detail도 자동 hidden | ✅ |
| 불필요 애니메이션 | 없음 · 순수 display:none 토글만 사용 | ✅ |

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
