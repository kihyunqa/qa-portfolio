# CHANGELOG

## v42.0.0 — 2026-04-08

### STEP 129 완료 — 히어로 stat 카드 hover 툴팁 + 클릭 섹션 스크롤 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| CSS `.hero-stat-card` | wrapper div · cursor:pointer · hover 시 border + bg + translateX(-4px) | ✅ |
| CSS `.hero-stat-card:hover .stat-n` | purple3 + text-shadow glow 효과 | ✅ |
| CSS `.hero-stat-tip` | position:absolute 왼쪽 슬라이드 툴팁 · opacity 0→1 트랜지션 | ✅ |
| CSS `.hero-stat-tip::after` | 오른쪽 화살표 포인터 (삼각형) | ✅ |
| `.hero-stat-tip-title` | 퍼플 색상 제목 + letter-spacing | ✅ |
| `.hero-stat-tip-link` | 하단 "→ 섹션 이동" 링크 텍스트 | ✅ |
| 6.9yr 툴팁 | 두플/IMS/모비프렌 회사명 + 총 6년 9개월 · data-scroll=timeline | ✅ |
| 5+ 툴팁 | 5개 MCP 서버 목록 (filesystem·playwright·github·notion·slack) · data-scroll=mcp | ✅ |
| 12 툴팁 | E2E spec 12개 목록 전체 · data-scroll=proof | ✅ |
| P1 2건 툴팁 | 보안 토큰 허점·결제 1원 오차 스토리 요약 · data-scroll=proof | ✅ |
| JS click scroll | `.hero-stat-card[data-scroll]` 클릭 → 해당 섹션 scrollIntoView smooth | ✅ |

#### 툴팁 포지셔닝
- 카드 왼쪽 방향으로 슬라이드: `right:calc(100% + 14px)` absolute
- hover 시 `translateX(-100%) translateX(-12px) translateY(-50%)` → 자연스럽게 등장
- 오른쪽 화살표 포인터 CSS 삼각형으로 연결

---

## v41.0.0 — 2026-04-08

### STEP 127 완료 — 경력 타임라인 클릭 expand/collapse 인터랙션 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | `.tl-item` 각각에 `.tl-detail` 슬라이드다운 영역 추가 | ✅ |
| CSS `.tl-detail` | `max-height:0 → 400px` + `opacity:0→1` CSS 트랜지션 `.45s` | ✅ |
| CSS `.tl-item.expanded` | 클릭 시 expanded 클래스 추가 → 상세 내역 표시 | ✅ |
| CSS `.tl-expand-icon` | 각 회사명 옆 `상세 ↓/↑` 토글 버튼 | ✅ |
| CSS `.tl-dot` hover | scale(1.4) + glow 강화 전환 효과 | ✅ |
| 두플 상세 | QA 전략 수립, 팀 리딩, TC 설계, 릴리즈 게이트 기준 4항목 | ✅ |
| IMS Mobility 상세 | Cypress 자동화 도입, 결제 P1 에스컬레이션, API 30+ 검증, 백오피스 QA 4항목 | ✅ |
| 모비프렌 상세 | SmartThings 50+ 디바이스, Bixby AI 검증, Galaxy 전기종 회귀, 품질 기준 수립 4항목 | ✅ |
| JS expand/collapse | 클릭 이벤트 — 다른 항목 닫기 + 현재 항목 토글, 링크 클릭 제외 처리 | ✅ |
| `.tl-detail-highlight` | 각 회사 핵심 수치 한 줄 요약 (green 스타일) | ✅ |

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
