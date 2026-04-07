# CHANGELOG

## v39.0.0 — 2026-04-07

### STEP 123 완료 — Skills 스킬 바 hover 툴팁 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | `.sk-item`에 `data-tip-title`, `data-tip-body`, `data-tip-tags` 속성 추가 | ✅ |
| CSS `.sk-tooltip` | fixed 포지션 툴팁 컨테이너 — bg3 배경, p-border 테두리, fade+slide 트랜지션 | ✅ |
| CSS `.sk-tooltip-title` | 퍼플 컬러 타이틀 | ✅ |
| CSS `.sk-tooltip-tags` | 태그 flex wrap 레이아웃 | ✅ |
| CSS `.sk-tooltip-tag` | 미니 p-muted 배경 태그 | ✅ |
| JS 툴팁 로직 | mouseenter → 위치 계산 → visible 클래스 추가, mouseleave → 120ms 딜레이 hide | ✅ |
| TESTING & QA 6개 | 각 스킬별 경력 맥락 + 태그 3개 | ✅ |
| MCP CORE & AI 8개 | 각 MCP 스킬별 실제 사용 내용 + 태그 3개 | ✅ |
| QA DOCUMENTATION 6개 | 각 문서화 스킬별 산출물 + 태그 3개 | ✅ |
| 모바일 대응 | `@media(max-width:900px)` → `.sk-tooltip{display:none}` | ✅ |

#### 변경된 SHA
- **index.html**: `6c9bc11f6f4342ea7419f5dacdb8acc8baf09131` (STEP 123)
- **CHANGELOG.md**: 이 커밋 후 새 SHA

---

## v38.0.0 — 2026-04-07

### STEP 121 완료 — 섹션별 통계 배지 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 각 섹션 `sec-head` 우측에 `.sec-stat-badge` 추가 | ✅ |
| CSS `.sec-stat-badge` | mono 폰트, 퍼플 테두리, 숫자 강조 `.ssb-num` | ✅ |
| CSS `.sec-stat-badge.ssb-green` | 그린 컬러 변형 (실제 연동 섹션용) | ✅ |
| 00 숫자 현황 | `4개 지표` 배지 | ✅ |
| 01 MCP 자동화 | `5 MCP 실제 연동` (그린) 배지 | ✅ |
| 02 실제 증거 | `4개 실제 확인` (그린) 배지 | ✅ |
| 03 프로젝트 | `10개 프로젝트` 배지 | ✅ |
| 04 파이프라인 | `7스텝 파이프라인` 배지 | ✅ |
| 05 로드맵 | `2 PHASE 완료` (그린) 배지 | ✅ |
| 06 TC | `20건 표시` 배지 | ✅ |
| 07 경력 | `6.9yr 경력` 배지 | ✅ |
| 08 스킬 | `20개 스킬` 배지 | ✅ |
| 모바일 대응 | `@media(max-width:900px)` → `.sec-stat-badge{display:none}` | ✅ |

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
