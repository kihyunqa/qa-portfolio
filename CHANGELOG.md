# CHANGELOG

## v36.0.0 — 2026-04-07

### STEP 117 완료 — Hero 섹션 Canvas 파티클 배경 효과 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | Hero 섹션 내 `<canvas id="hero-canvas">` 추가 (`.hero-bg-grid` 바로 뒤) | ✅ |
| CSS `#hero-canvas` | `position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.7` | ✅ |
| JS `initHeroParticles()` | Canvas API 80개 파티클, 60fps rAF 루프 | ✅ |
| 파티클 종류 | 코어 점 + 글로우 RadialGradient 혼합 (72% 확률로 글로우) | ✅ |
| 색상 팔레트 | --purple / --purple2 / --purple3 / --text 4색 | ✅ |
| 알파 펄스 | 각 파티클 개별 alphaMin~alphaMax 랜덤 펄스 | ✅ |
| 이동 방향 | 위쪽(-vy) + 좌우 미세 drift, 경계 순환 | ✅ |
| IntersectionObserver | Hero 섹션 뷰포트 밖 나가면 animLoop 일시 정지 (성능 최적화) | ✅ |
| 모바일 대응 | `@media(max-width:900px)` → `#hero-canvas{display:none}` | ✅ |

#### 구조
```
.hero (section)
  ├── .hero-bg-grid    (기존 격자 배경)
  ├── #hero-canvas     (Canvas 파티클 — STEP 117 신규)
  └── .hero-left       (텍스트 콘텐츠)
```

#### 변경된 SHA
- **index.html**: `d933d6a48b7b888e7c1d216f175ff7360870552c` (STEP 117)
- **CHANGELOG.md**: 이 커밋 후 새 SHA

---

## v35.0.0 — 2026-04-07

### STEP 115 완료 — 커밋 히스토리 시각화 카드 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | proof 섹션 `.proof-grid` 아래에 `.commit-card` 추가 | ✅ |
| GitHub API | `https://api.github.com/repos/kihyunqa/qa-portfolio/commits?per_page=100` 실시간 fetch | ✅ |
| 카운트업 | 총 커밋 수 · 활동 기간(일) 카운트업 애니메이션 | ✅ |
| 미니 바 차트 | 최근 14일 커밋 빈도 바 차트 (hover tooltip) | ✅ |
| fallback | API 실패 시 100+ / 30+d 표시 | ✅ |
| IntersectionObserver | 카드가 뷰포트 진입 시 1회만 API 호출 | ✅ |

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

## v28.0.0 — 2026-04-06

### STEP 97 완료 — TC 테이블 필터 버튼 추가 (최초)

---

## v27.0.0 — 2026-04-06

### STEP 96 완료 — 버그 스토리 인라인 카드 섹션 추가

---

## v26.0.0 — 2026-04-06

### STEP 91 완료 — 잔여 docs 3개 날짜 동기화

---

## v25.0.0 — 2026-04-01

### STEP 89 완료 — 잔여 docs 날짜 동기화

---

## v24.0.0 — 2026-04-01

### STEP 88 완료 — docs 내부 수치 전체 동기화

---

## v23.0.0 — 2026-04-01

### STEP 87 완료 — 수치 정합성 최종 마무리

---

## v22.0.0 — 2026-04-01

### STEP 85~86 완료 — 포트폴리오 아쉬운 점 3가지 보완

- docs/bug-stories.md 신규: QA 판단력 스토리 3건
- testcase_bug-report.md 강화: 3건 → 8건 확장
- Hero 메시지: 구체적 QA 판단 사례 중심으로 교체

---

*이전 버전 이력은 git log 참고*
