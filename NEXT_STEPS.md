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

## 🏁 현재 상태 (2026-04-07) — STEP 109 완료

---

## ✅ 확정 수치 (v32 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v32** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 109 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |

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
| STEP 108 | CHANGELOG v32 업데이트 — STEP 106/107 기록 | 2026-04-07 |
| **STEP 109** | **좌측 하단 섹션 breadcrumb 인터랙션 추가 — 스크롤 시 `KH.QA / 00 · 숫자 현황` 형태로 현재 섹션 표시. fade in/out 애니메이션, 모노 폰트, Hero 섹션에선 숨김** | **2026-04-07** |

---

## 🎯 STEP 109에서 변경한 내용 (index.html)

### breadcrumb 구현 내용
| 항목 | 내용 |
|------|------|
| HTML | `<div id="breadcrumb">` — `KH.QA / {섹션명}` 구조 |
| CSS | `position:fixed; bottom:28px; left:56px` 좌측 하단 고정 |
| CSS | `opacity:0 → 1` + `translateY(6px → 0)` fade-in 트랜지션 |
| JS | `bcMap` 객체로 섹션 id → 표시 텍스트 매핑 |
| JS | `updateBreadcrumb()` — `updateDotNav()`와 동일 스크롤 이벤트에서 호출 |
| 동작 | Hero에 있을 때 숨김, 섹션 진입 시 표시, 섹션 이동 시 텍스트 전환 |
| 모바일 | `left:24px; bottom:20px` 로 조정 |

### 변경된 SHA
- **index.html**: `ba6fbde15426e5f33dc45b9ba6c3d38a7c44a139` (STEP 109)
- **CHANGELOG.md**: `95af7469dcaaa82b7d5aa264818a4e56c24df11b` (v32)

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — CHANGELOG v33 업데이트
- STEP 109 breadcrumb 추가 내용 기록
- CHANGELOG.md SHA: `95af7469dcaaa82b7d5aa264818a4e56c24df11b` (v32)

### 🟡 우선순위 2 — QA 스킬 레이더 차트 시각화
- 스킬 섹션에 SVG 방사형 차트로 강점 시각화
- 외부 의존성 없이 순수 SVG + JS로 구현
- index.html CSS + HTML + JS 추가

### 🟡 우선순위 3 — 섹션 진입 시 카운터 강화
- 숫자 현황 섹션의 stat 카드에 더 임팩트 있는 애니메이션
- 또는 Hero 섹션에 타이핑 효과 추가

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `ba6fbde15426e5f33dc45b9ba6c3d38a7c44a139` (STEP 109)
8. **CHANGELOG.md 현재 SHA**: `95af7469dcaaa82b7d5aa264818a4e56c24df11b` (v32)
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

*최종 업데이트: 2026-04-07 · STEP 109 완료*
*breadcrumb 인터랙션 추가 완료. 다음: CHANGELOG v33 → QA 스킬 레이더 차트 시각화*
