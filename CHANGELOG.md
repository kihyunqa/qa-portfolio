# CHANGELOG

## v40.0.0 — 2026-04-07

### STEP 125 완료 — 프로젝트 카드 호버 오버레이 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | 10개 `.proj-card` 각각에 `.proj-overlay` div 추가 | ✅ |
| CSS `.proj-overlay` | `position:absolute;bottom:0;translateY(100%)` → hover 시 `translateY(0)` 슬라이드업 | ✅ |
| CSS `.proj-overlay` 배경 | `rgba(13,10,24)` 다크 그라디언트 + 퍼플 상단 보더 | ✅ |
| CSS `.proj-overlay-title` | `// 핵심 성과` 모노 폰트 라벨 | ✅ |
| CSS `.proj-overlay-points` | `→` 화살표 아이콘 + 11px 텍스트 포인트 리스트 | ✅ |
| CSS `.proj-overlay-links` | 미니 GitHub 링크 버튼 (hover 시 퍼플 배경) | ✅ |
| CSS `.proj-card` 강화 | box-shadow 추가, translateY(-5px), border 강화 | ✅ |
| CSS 모바일 | `@media(max-width:900px)` → `.proj-overlay{display:none}` | ✅ |
| PROJECT 01~10 | 각 카드별 핵심 성과 3줄 + 링크 커스텀 | ✅ |
| 트랜지션 | `.38s cubic-bezier(.4,0,.2,1)` 자연스러운 이징 | ✅ |

#### 오버레이 내용 요약
| 카드 | 핵심 성과 |
|------|----------|
| 01 TC 자동생성 | 145건+ 대화 1번, 3분류 자동 구조화, 코드 0줄 |
| 02 브랜치 전략 | QA 개입 3단계 명문화, 릴리즈 QA 프로세스 문서 |
| 03 오케스트레이션 | 5개 MCP 체이닝, 오류 없는 결과 전달 |
| 04 Claude Code 세팅 | QA 특화 Skill 파일, docs 9개 |
| 05 버그 스토리 | P1 2건, P3→P1 에스컬레이션, 재현 경로 문서화 |
| 06 버그 분류 자동화 | P1·P2·P3 기준 + 담당자 현황 리포트 |
| 07 playwright E2E | 12 spec 전 영역, playwright.config.js 완료 |
| 08 QA 리포트 문서화 | docs 28개, CHANGELOG v40+, qa-automation-report |
| 09 Notion MCP | TC 페이지 자동 생성 실제 확인, 코드 0줄 |
| 10 Slack MCP | 새-채널 실제 발송, Actions 이중 연동 |

#### 변경된 SHA
- **index.html**: STEP 125 커밋 후 새 SHA
- **CHANGELOG.md**: 이 커밋 후 새 SHA
- **NEXT_STEPS.md**: 이 커밋 후 새 SHA

---

## v39.0.0 — 2026-04-07

### STEP 123 완료 — Skills 스킬 바 hover 툴팁 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | `.sk-item`에 `data-tip-title`, `data-tip-body`, `data-tip-tags` 속성 추가 | ✅ |
| CSS `.sk-tooltip` | fixed 포지션 툴팁 컨테이너 — bg3 배경, p-border 테두리, fade+slide 트랜지션 | ✅ |
| JS 툴팁 로직 | mouseenter → 위치 계산 → visible 클래스 추가, mouseleave → 120ms 딜레이 hide | ✅ |
| TESTING & QA 6개 | 각 스킬별 경력 맥락 + 태그 3개 | ✅ |
| MCP CORE & AI 8개 | 각 MCP 스킬별 실제 사용 내용 + 태그 3개 | ✅ |
| QA DOCUMENTATION 6개 | 각 문서화 스킬별 산출물 + 태그 3개 | ✅ |
| 모바일 대응 | `@media(max-width:900px)` → `.sk-tooltip{display:none}` | ✅ |

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
