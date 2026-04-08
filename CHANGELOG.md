# CHANGELOG

## v44.0.0 — 2026-04-08

### STEP 132 완료 — Hero 섹션 순차 fade-in 로딩 애니메이션

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| CSS `.hero-fade-in` | 초기 `opacity:0; transform:translateY(20px)` 상태 | ✅ |
| CSS `.hero-fade-in.hfi-visible` | `opacity:1; transform:none; transition` 적용 | ✅ |
| CSS `@keyframes hfi-slide` | 슬라이드업 keyframe 정의 | ✅ |
| HTML hero-tag | `hero-fade-in` 클래스 추가 (delay 0) | ✅ |
| HTML hero-name | `hero-fade-in` 클래스 추가 (delay 1) | ✅ |
| HTML hero-role | `hero-fade-in` 클래스 추가 (delay 2) | ✅ |
| HTML hero-desc | `hero-fade-in` 클래스 추가 (delay 3) | ✅ |
| HTML hero-proof | `hero-fade-in` 클래스 추가 (delay 4) | ✅ |
| HTML hero-cta | `hero-fade-in` 클래스 추가 (delay 5) | ✅ |
| JS initHeroFadeIn | DOMContentLoaded 후 순차적으로 hfi-visible 클래스 추가 | ✅ |
| 딜레이 간격 | 각 요소 120ms 간격으로 순차 등장 | ✅ |

---

## v43.0.0 — 2026-04-08

### STEP 131 완료 — TC 테이블 행 클릭 expand/collapse 인터랙션

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| CSS `.tc-expand-icon` | 각 TC ID 옆 ▼/▲ 아이콘 · hover 시 퍼플 강조 | ✅ |
| CSS `.tc-detail-row` | 기본 hidden · visible 클래스 추가 시 display | ✅ |
| CSS `.tc-detail-inner` | `max-height:0 → 300px` CSS 트랜지션 `.4s` | ✅ |
| CSS `.tc-detail-content` | 3컬럼 그리드 — 전제조건/테스트스텝/기대결과 | ✅ |
| CSS `.tc-detail-result-pass/fail/edge` | 결과 유형별 색상 스타일 (green/red/amber) | ✅ |
| CSS `.tc-row-hint` | "행을 클릭하면 상세 확인" 안내 텍스트 | ✅ |
| HTML 20개 TC 행 | 각 행에 detail-row 페어 추가 (전제조건·스텝·기대결과) | ✅ |
| JS expand/collapse | 클릭 토글 · 다른 행과 독립 동작 · filter와 연동 | ✅ |

---

## v42.0.0 — 2026-04-08

### STEP 129 완료 — 히어로 stat 카드 hover 툴팁 + 클릭 섹션 스크롤 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| CSS `.hero-stat-card` | wrapper div · cursor:pointer · hover 시 border + bg + translateX(-4px) | ✅ |
| CSS `.hero-stat-card:hover .stat-n` | purple3 + text-shadow glow 효과 | ✅ |
| CSS `.hero-stat-tip` | position:absolute 왼쪽 슬라이드 툴팁 · opacity 0→1 트랜지션 | ✅ |
| CSS `.hero-stat-tip::after` | 오른쪽 화살표 포인터 (삼각형) | ✅ |
| 6.9yr/5+/12/P1 2건 툴팁 | 각 stat 상세 + 클릭 시 섹션 스크롤 | ✅ |
| JS click scroll | `.hero-stat-card[data-scroll]` 클릭 → 해당 섹션 scrollIntoView smooth | ✅ |

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

## v30.0.0 — 2026-04-07

### STEP 101 완료 — 우측 사이드 점 네비게이션 추가

---

## v29.0.0 — 2026-04-06

### STEP 100 완료 — 섹션 간 divider 강화

---

*이전 버전 이력은 git log 참고*
