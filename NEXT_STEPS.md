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

## 🏁 현재 상태 (2026-04-07) — STEP 106 완료

---

## ✅ 확정 수치 (v31 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v31** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 106 완료 |
| 버그 스토리 | **3건** | ✅ |
| 버그 리포트 | **8건** | ✅ |
| screenshots | **4장** | ✅ |
| TC 필터 버튼 | **완료** | ✅ |
| Hero 시각 강화 | **완료** | ✅ STEP 99 |
| 섹션 divider | **완료** | ✅ STEP 100 |
| 점 네비게이션 | **완료(버그수정)** | ✅ STEP 106 |
| CHANGELOG v31 | **완료** | ✅ STEP 104 |
| TC stat bar | **완료** | ✅ STEP 103 |
| 프로젝트 카드 링크 | **완료** | ✅ STEP 105 |
| dot nav 우측 고정 버그 | **수정 완료** | ✅ STEP 106 |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~91 | 수치 검증, bug-stories, docs 동기화 등 | 2026-04-01~06 |
| STEP 92 | screenshots 4장 + ACTUAL SCREENSHOTS 섹션 | 2026-04-06 |
| STEP 93 | index.html stats 리프레이밍, PHASE 3 강조 | 2026-04-06 |
| STEP 94 | 스킬 섹션 카드/뱃지 레이아웃 전면 개편 | 2026-04-06 |
| STEP 95 | Hero stat 4번째 P1 2건 실제 수치로 교체 | 2026-04-06 |
| STEP 96 | 버그 스토리 섹션(06번) 추가, 섹션 번호 재정렬 | 2026-04-06 |
| STEP 97 | TC 필터 버튼 4개 추가, TC 행 15건으로 확장 | 2026-04-06 |
| STEP 98 | CHANGELOG v28 업데이트 | 2026-04-06 |
| STEP 99 | Hero 섹션 시각적 강화 — 파티클/gradient orb 애니메이션, btn-p glow pulse | 2026-04-06 |
| STEP 100 | 섹션 간 divider 강화 — 각 주요 섹션 상단에 보라 gradient fade overlay | 2026-04-06 |
| STEP 101 | 우측 사이드 점 네비게이션 추가 — 12개 섹션 인디케이터, 호버 레이블, 스크롤 연동 | 2026-04-07 |
| STEP 102 | CHANGELOG v30 업데이트 — STEP 101 점 네비게이션 기록 | 2026-04-07 |
| STEP 103 | TC 섹션 stat bar 추가 — 145건+/16파일/12spec/8카테고리 숫자 크게 강조. 카운트업 애니메이션 포함 | 2026-04-07 |
| STEP 104 | CHANGELOG v31 업데이트 — STEP 103 TC stat bar 기록 | 2026-04-07 |
| STEP 105 | 프로젝트 카드 링크 강화 — PROJECT 02/03/04/06에 실제 docs 링크 연결 | 2026-04-07 |
| **STEP 106** | **dot nav 버그 수정 — 가운데로 오던 점 네비게이션을 position:fixed right:20px로 우측 완전 고정. 모바일 900px 이하 display:none 처리. 호버 레이블 위치 수정(right:16px). 클릭 스크롤 + 활성 dot 하이라이트 JS 정상화.** | **2026-04-07** |

---

## 🎯 STEP 106에서 변경한 내용 (index.html)

### 버그 수정 내용
| 항목 | 수정 전 | 수정 후 |
|------|---------|---------|
| `#dot-nav` | CSS 없음 (DOM에만 존재) | `position:fixed; right:20px; top:50%; transform:translateY(-50%); z-index:500` |
| 모바일 대응 | 없음 | `@media(max-width:900px){ #dot-nav{display:none} }` |
| 호버 레이블 | 위치 오류 | `right:16px` 명시적 지정 |
| 클릭 이벤트 | 없음 | `data-target` 기반 scrollIntoView 연결 |
| 활성 dot | 없음 | `updateDotNav()` 스크롤 시 active 클래스 토글 |

### 변경된 SHA
- **index.html**: `231871d921f6111a1350cfc87e896f83fb9ebb9a` (STEP 106)
- **CHANGELOG.md**: `e45e30ec38495072997eeb8bb2293453765caedc` (v31 — 아직 미업데이트)

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — CHANGELOG v32 업데이트
- STEP 106 dot nav 버그 수정 내용 기록
- CHANGELOG.md SHA: `e45e30ec38495072997eeb8bb2293453765caedc` (v31)

### 🟡 우선순위 2 — 섹션 breadcrumb 인터랙션
- 스크롤 시 상단(혹은 좌측)에 현재 섹션명이 표시되는 breadcrumb 스타일 인디케이터
- index.html CSS + JS 추가

### 🟡 우선순위 3 — QA 스킬 레이더 차트 또는 시각화
- 스킬 섹션에 육각형/방사형 차트로 강점 시각화
- SVG 또는 Canvas 활용 (외부 의존성 없이)

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `231871d921f6111a1350cfc87e896f83fb9ebb9a` (STEP 106)
8. **CHANGELOG.md 현재 SHA**: `e45e30ec38495072997eeb8bb2293453765caedc` (v31)
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

*최종 업데이트: 2026-04-07 · STEP 106 완료*
*dot nav 가운데 겹침 버그 수정 완료 (position:fixed right:20px). 다음: CHANGELOG v32 업데이트 → breadcrumb 인터랙션*
