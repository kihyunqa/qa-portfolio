# CHANGELOG

## v34.0.0 — 2026-04-07

### STEP 113 완료 — Hero 타이핑 효과 + TC 필터 버튼 복원

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | Hero `.hero-role`에 타이핑 커서 애니메이션 추가 | ✅ |
| CSS `.typing-cursor` | 2px 보라 커서, `typing-blink` 0.8s 깜빡임 애니메이션 | ✅ |
| JS `typeStep()` | 타이핑→대기→삭제→다음 텍스트 루프 (순수 JS, 외부 라이브러리 없음) | ✅ |
| 타이핑 텍스트 | 3개 순환: "Quality Assurance Engineer" / "TC 설계·버그 분석·MCP 자동화" / "6년 9개월 QA·코드 0줄·결과 ∞" | ✅ |
| 타이핑 속도 | 입력 55ms / 삭제 28ms / 완성 대기 2200ms / 다음 시작 350ms | ✅ |
| 시작 딜레이 | 페이지 로드 후 600ms 후 시작 | ✅ |
| TC 필터 버튼 | 전체 / 해피패스 / 네거티브 / 엣지케이스 4개 버튼 복원 | ✅ |
| CSS `.tc-filter-btn` | 기본 muted 스타일, active 보라 채움, hover 보라 테두리 | ✅ |
| JS TC 필터 | `data-type` 속성 기반 행 show/hide 필터링 | ✅ |
| TC 행 `data-type` | 각 행에 `data-type="h/n/e"` 속성 추가 | ✅ |

#### 타이핑 구현 방식
```
hero-role 요소 구조:
<p class="hero-role">
  <span id="heroRoleText"></span>  ← 타이핑 텍스트
  <span class="typing-cursor"></span>  ← 깜빡이는 커서
</p>
```

---

## v33.0.0 — 2026-04-07

### STEP 110~111 완료 — CHANGELOG v33 + QA 스킬 레이더 차트 시각화

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | STEP 111: 스킬 섹션 상단에 SVG 레이더(방사형) 차트 추가 | ✅ |
| CSS `.radar-wrap` | 340px SVG + 범례 2컬럼 레이아웃, 보라 border box | ✅ |
| CSS `.radar-legend-item` | hover 시 border + background 변화 | ✅ |
| SVG 레이더 | 8개 스킬 축 (TC설계/버그리포팅/E2E자동화/API테스트/MCP연동/Prompt Eng./QA문서화/QA리딩) | ✅ |
| JS `drawRadar()` | SVG polygon + grid + axis + label 렌더링 | ✅ |
| JS 애니메이션 | IntersectionObserver 진입 시 easeInOut 80프레임 펼침 | ✅ |
| JS 레전드 인터랙션 | hover 시 해당 dot 크기 + 색상 강조 | ✅ |
| 모바일 대응 | `grid-template-columns:1fr` 단일 컬럼으로 처리 | ✅ |

---

## v32.0.0 — 2026-04-07

### STEP 106~107 완료 — dot-nav 우측 고정 버그 완전 해결

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | STEP 107: `<nav id="dot-nav">` → `<div id="dot-nav">` 태그 변경으로 완전 해결 | ✅ |
| 근본 원인 | `nav { left:0; right:0 }` 전역 CSS가 `#dot-nav` CSS보다 우선 적용 | 확인 |

---

## v31.0.0 — 2026-04-07

### STEP 103 완료 — TC 섹션 stat bar 추가

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | TC 섹션 상단에 `.tc-stat-bar` 4칸 그리드 stat 바 추가 | ✅ |

---

## v30.0.0 — 2026-04-07

### STEP 101 완료 — 우측 사이드 점 네비게이션 추가

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 우측 고정 점 네비게이션 (`dot-nav`) 추가 | ✅ |

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
