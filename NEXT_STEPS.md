# 🤖 다음 Claude를 위한 인수인계 문서

> **이 문서를 읽는 Claude에게**: 새 대화 시작 시 아래 명령어로 이 문서를 읽고 이어서 작업하세요.
>
> ```
> kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘
> ```
>
> - 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> - 포트폴리오: https://kihyunqa.github.io/qa-portfolio
> - **사용자 요청**: 연습/면접준비/LinkedIn 관심 없음. **포트폴리오 업그레이드만** 원함.

---

## 🏁 현재 상태 (2026-04-07) — STEP 126 완료

---

## ✅ 확정 수치 (v40 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v40** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 125 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |
| 커밋 히스토리 카드 | **추가 완료** | ✅ STEP 115 |
| Hero 파티클 배경 | **추가 완료** | ✅ STEP 117 |
| TC 섹션 행 확장 | **8행 → 20행** | ✅ STEP 119 |
| 섹션별 통계 배지 | **9개 섹션 배지** | ✅ STEP 121 |
| 스킬 바 hover 툴팁 | **20개 스킬 툴팁** | ✅ STEP 123 |
| **프로젝트 카드 오버레이** | **10개 카드 슬라이드업** | ✅ **STEP 125** |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~100 | 수치 검증, bug-stories, 섹션 강화 등 | 2026-04-01~06 |
| STEP 101 | 우측 사이드 점 네비게이션 추가 | 2026-04-07 |
| STEP 102 | CHANGELOG v30 업데이트 | 2026-04-07 |
| STEP 103 | TC 섹션 stat bar 추가 | 2026-04-07 |
| STEP 104 | CHANGELOG v31 업데이트 | 2026-04-07 |
| STEP 105 | 프로젝트 카드 링크 강화 | 2026-04-07 |
| STEP 106 | dot nav 버그 수정 시도 (nav 태그 충돌 미해결) | 2026-04-07 |
| STEP 107 | dot-nav 완전 수정 — `<nav>` → `<div>` 태그 변경 | 2026-04-07 |
| STEP 108 | CHANGELOG v32 업데이트 | 2026-04-07 |
| STEP 109 | 좌측 하단 섹션 breadcrumb 인터랙션 추가 | 2026-04-07 |
| STEP 110 | CHANGELOG v32 기반 정리 (이전 세션) | 2026-04-07 |
| STEP 111 | QA 스킬 레이더 차트 추가 — 스킬 섹션 상단에 SVG 방사형 차트. 8개 축 | 2026-04-07 |
| STEP 112 | CHANGELOG v33 업데이트 | 2026-04-07 |
| STEP 113 | Hero `.hero-role` 타이핑 효과 추가 (3개 텍스트 순환) + TC 필터 버튼 복원 | 2026-04-07 |
| STEP 114 | CHANGELOG v34 업데이트 | 2026-04-07 |
| STEP 115 | proof 섹션에 커밋 히스토리 시각화 카드 추가 | 2026-04-07 |
| STEP 116 | CHANGELOG v35 업데이트 | 2026-04-07 |
| STEP 117 | Hero 섹션 Canvas 파티클 배경 효과 추가 | 2026-04-07 |
| STEP 118 | CHANGELOG v36 + NEXT_STEPS.md 업데이트 | 2026-04-07 |
| STEP 119 | TC 섹션 행 확장 8행 → 20행 | 2026-04-07 |
| STEP 120 | CHANGELOG v37 + NEXT_STEPS.md 업데이트 | 2026-04-07 |
| STEP 121 | 섹션별 통계 배지 추가 — 9개 섹션 헤드 `.sec-stat-badge` | 2026-04-07 |
| STEP 122 | CHANGELOG v38 + NEXT_STEPS.md 업데이트 | 2026-04-07 |
| STEP 123 | 스킬 바 hover 툴팁 추가 — 20개 스킬 전체 data-tip 속성 | 2026-04-07 |
| STEP 124 | CHANGELOG v39 + NEXT_STEPS.md 업데이트 | 2026-04-07 |
| **STEP 125** | **프로젝트 카드 호버 오버레이 — 10개 카드 `.proj-overlay` 슬라이드업. 핵심 성과 3줄 + 링크. `translateY(100%)→(0)` 트랜지션 .38s. 모바일 숨김** | **2026-04-07** |
| **STEP 126** | **CHANGELOG v40 + NEXT_STEPS.md 인수인계 업데이트** | **2026-04-07** |

---

## 🎯 STEP 125에서 변경한 내용 (index.html)

### 프로젝트 카드 호버 오버레이
| 요소 | 구현 내용 |
|------|----------|
| `.proj-overlay` | `position:absolute;bottom:0;overflow:hidden` 슬라이드업 |
| 배경 | `rgba(13,10,24)` 다크 그라디언트 + 퍼플 `border-top` |
| `.proj-overlay-title` | `// 핵심 성과` mono 라벨 |
| `.proj-overlay-points` | `→` 화살표 + 11px 포인트 3줄 |
| `.proj-overlay-links` | 미니 GitHub 링크 버튼 (hover: 퍼플 배경) |
| 트랜지션 | `.38s cubic-bezier(.4,0,.2,1)` |
| 모바일 | `@media(max-width:900px)` → `display:none` |

### 변경된 SHA
- **index.html**: STEP 125 커밋 (새 SHA — get_file_contents로 확인)
- **CHANGELOG.md**: STEP 126 커밋 후 새 SHA
- **NEXT_STEPS.md**: STEP 126 커밋 후 새 SHA

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### ✅ 완료 — 우선순위 1~4 (STEP 119~125)
- TC 행 확장, 섹션 통계 배지, 스킬 툴팁, 프로젝트 카드 오버레이 완료

### 🟡 우선순위 5 — 경력 타임라인 인터랙션 (다음 작업)
- `.tl-item` hover 시 상세 업무 내역 expand/collapse
- 구체적으로: 각 회사별 hover 시 숨겨진 상세 업무 내역 슬라이드다운
- 두플: QA 전략 수립 내용, IMS: Cypress 자동화 성과, 모비프렌: SmartThings/Bixby 검증 규모

### 🟡 우선순위 6 — 히어로 섹션 강화
- 히어로 우측 stat 카드 hover 시 툴팁 (현재 숫자만 있음)
- 또는 히어로 proof 배지 클릭 시 해당 섹션으로 스크롤

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: STEP 125 커밋 후 새 SHA — 반드시 get_file_contents로 확인
8. **CHANGELOG.md 현재 SHA**: 이 커밋 후 확인 필요
9. **NEXT_STEPS.md 현재 SHA**: 이 커밋 후 새 SHA — 다음 Claude가 get_file_contents로 확인

---

## ✅ MCP 연동 현황

| MCP | 상태 |
|-----|------|
| filesystem | ✅ |
| github | ✅ |
| playwright | ✅ spec 12개 |
| notion | ✅ 실제 연동 |
| slack | ✅ 실제 연동 (새-채널 C0AQFJXC800) |
| Jira | ✅ FULL ACCESS (kihyunqa-1775011951168.atlassian.net) |

---

## 📞 빠른 링크

| 항목 | URL |
|------|-----|
| 포트폴리오 | https://kihyunqa.github.io/qa-portfolio |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| bug-stories | https://github.com/kihyunqa/qa-portfolio/blob/main/docs/bug-stories.md |
| Actions 탭 | https://github.com/kihyunqa/qa-portfolio/actions |
| Jira | https://kihyunqa-1775011951168.atlassian.net |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-04-07 · STEP 126 완료*
*프로젝트 카드 호버 오버레이 완료 (STEP 125). 다음: 경력 타임라인 인터랙션 → 히어로 섹션 강화*
