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

## 🏁 현재 상태 (2026-04-07) — STEP 120 완료

---

## ✅ 확정 수치 (v37 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v37** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 119 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |
| 커밋 히스토리 카드 | **추가 완료** | ✅ STEP 115 |
| Hero 파티클 배경 | **추가 완료** | ✅ STEP 117 |
| **TC 섹션 행 확장** | **8행 → 20행** | ✅ **STEP 119** |

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
| STEP 112 | CHANGELOG v33 업데이트 — STEP 111 레이더 차트 기록 | 2026-04-07 |
| STEP 113 | Hero `.hero-role` 타이핑 효과 추가 (3개 텍스트 순환) + TC 필터 버튼 복원 | 2026-04-07 |
| STEP 114 | CHANGELOG v34 업데이트 — STEP 113 기록 | 2026-04-07 |
| STEP 115 | proof 섹션에 커밋 히스토리 시각화 카드 추가 — GitHub API 실시간 fetch, 카운트업, 최근 14일 미니 바 차트 | 2026-04-07 |
| STEP 116 | CHANGELOG v35 업데이트 — STEP 115 기록 | 2026-04-07 |
| STEP 117 | Hero 섹션 Canvas 파티클 배경 효과 추가 — 80개 파티클, 글로우 RadialGradient, 알파 펄스, 위쪽 이동, IntersectionObserver 성능 최적화 | 2026-04-07 |
| STEP 118 | CHANGELOG v36 업데이트 — STEP 117 기록 + NEXT_STEPS.md 인수인계 업데이트 | 2026-04-07 |
| **STEP 119** | **TC 섹션 행 확장 8행 → 20행 — 해피패스 8건·네거티브 7건·엣지케이스 5건. TC 분류 통계 바 추가** | **2026-04-07** |
| **STEP 120** | **CHANGELOG v37 + NEXT_STEPS.md 인수인계 업데이트** | **2026-04-07** |

---

## 🎯 STEP 119에서 변경한 내용 (index.html)

### TC 섹션 확장
| 항목 | 내용 |
|------|------|
| TC 행 수 | 8행 → 20행 |
| 해피패스 | 8건 (기존 4 + 신규 PAY-HP-001, ACCESS-HP-001, CART-HP-003 등) |
| 네거티브 | 7건 (기존 1 + 신규 SEARCH-N-001, AUTH-N-008, API-N-010, PAY-N-005, SEC-N-002, SEARCH-N-004) |
| 엣지케이스 | 5건 (기존 2 + 신규 MOB-E-001, NOTIF-E-003, PERF-E-001) |
| TC 분류 통계 바 | `.tc-stat-bar` 클래스 추가 — 섹션 상단에 분류 현황 표시 |

### 변경된 SHA
- **index.html**: `bb34a83ef80dff2af84f2be4e84b6f7dd3cdeedf` (STEP 119)
- **CHANGELOG.md**: 이 커밋 후 새 SHA
- **NEXT_STEPS.md**: 이 커밋 후 새 SHA

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### ✅ 완료 — 우선순위 1 (STEP 119)
- TC 섹션 행 확장 완료 (8행 → 20행)

### 🟡 우선순위 2 — 섹션별 진입 통계 배지
- 각 섹션 헤드에 작은 카운터 뱃지 (정적 숫자도 OK)
- 또는 proof 섹션 카드에 "X개 실제 확인" 강조 숫자 추가
- 예: `[TC 20건 표시]` `[MCP 5개]` 등 섹션별 고정 숫자 뱃지

### 🟡 우선순위 3 — Skills 섹션 추가 인터랙션
- 각 스킬 바 hover 시 툴팁 (경험 연수, 대표 프로젝트 등)
- 또는 스킬 바 아래에 실제 사례 태그 추가

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `bb34a83ef80dff2af84f2be4e84b6f7dd3cdeedf` (STEP 119)
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

*최종 업데이트: 2026-04-07 · STEP 120 완료*
*TC 섹션 20행 확장 완료 (STEP 119). 다음: 섹션별 통계 배지 → 스킬 인터랙션*
