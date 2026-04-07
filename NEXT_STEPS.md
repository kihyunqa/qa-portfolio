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

## 🏁 현재 상태 (2026-04-07) — STEP 116 완료

---

## ✅ 확정 수치 (v35 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v35** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 115 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |
| 커밋 히스토리 카드 | **추가 완료** | ✅ STEP 115 |

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
| **STEP 115** | **proof 섹션에 커밋 히스토리 시각화 카드 추가 — GitHub API 실시간 fetch, 카운트업, 최근 14일 미니 바 차트** | **2026-04-07** |
| **STEP 116** | **CHANGELOG v35 업데이트 — STEP 115 기록** | **2026-04-07** |

---

## 🎯 STEP 115에서 변경한 내용 (index.html)

### 커밋 히스토리 시각화 카드 (.commit-card)
| 항목 | 내용 |
|------|------|
| 위치 | proof 섹션 `.proof-grid` 아래, 섹션 끝 바로 위 |
| GitHub API | `api.github.com/repos/kihyunqa/qa-portfolio/commits?per_page=100` |
| 카운트업 | 총 커밋 수 · 활동 기간(일) — IntersectionObserver로 뷰포트 진입 시 1회 fetch |
| 미니 바 차트 | 최근 14일 커밋 빈도 — `.commit-bar-item` + `data-label` tooltip |
| fallback | API 실패 시 "100+" / "30+d" 정적 표시 |
| stat 4칸 | 총 커밋 수 · 파일 80+ · 활동 기간 · 코드 0줄 |

### 변경된 SHA
- **index.html**: `9bae9d51f623ee913f25fa6a527b05cc42891a0f` (STEP 115)
- **CHANGELOG.md**: `1666d8aa192a22fdd6ddcc90ab6d2bddb6198aa7` (v35)

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — 스크롤 파티클/별빛 배경 효과
- Hero 섹션 배경에 별빛 또는 파티클 효과 (Canvas API, 순수 JS)
- 또는 현재 `hero-bg-grid` 위에 미세하게 움직이는 글로우 포인트 추가
- canvas를 `.hero-bg-grid` 위에 절대 위치로 삽입, pointer-events:none

### 🟡 우선순위 2 — TC 섹션 행 확장
- 현재 TC 테이블이 8행 → 더 많은 케이스 추가 (현실적인 QA 역량 강조)
- 네거티브 케이스 / 엣지케이스 비율도 보완
- 총 표시 TC 수: 현재 8행 → 15~20행 목표

### 🟡 우선순위 3 — 섹션별 진입 통계 배지
- 각 섹션 헤드에 작은 "📊 X회 조회" 또는 카운터 뱃지 (정적 숫자도 OK)
- 또는 proof 섹션 카드에 "X개 실제 확인" 강조 숫자 추가

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `9bae9d51f623ee913f25fa6a527b05cc42891a0f` (STEP 115)
8. **CHANGELOG.md 현재 SHA**: `1666d8aa192a22fdd6ddcc90ab6d2bddb6198aa7` (v35)
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

*최종 업데이트: 2026-04-07 · STEP 116 완료*
*커밋 히스토리 시각화 카드 추가 완료 (STEP 115). 다음: 파티클 배경 → TC 행 확장 → 섹션 진입 배지*
