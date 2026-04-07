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

## 🏁 현재 상태 (2026-04-07) — STEP 102 완료

---

## ✅ 확정 수치 (v30 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v30** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 101 완료 |
| 버그 스토리 | **3건** | ✅ |
| 버그 리포트 | **8건** | ✅ |
| screenshots | **4장** | ✅ |
| TC 필터 버튼 | **완료** | ✅ |
| Hero 시각 강화 | **완료** | ✅ STEP 99 |
| 섹션 divider | **완료** | ✅ STEP 100 |
| 점 네비게이션 | **완료** | ✅ STEP 101 |
| CHANGELOG v30 | **완료** | ✅ STEP 102 |

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
| STEP 99 | Hero 섹션 시각적 강화 — 파티클/gradient orb 애니메이션, btn-p glow pulse, 하단 divider 추가 | 2026-04-06 |
| STEP 100 | 섹션 간 divider 강화 — 각 주요 섹션 상단에 보라 gradient fade overlay 추가 | 2026-04-06 |
| STEP 101 | 우측 사이드 점 네비게이션 추가 — 12개 섹션 인디케이터, 호버 시 레이블 표시, 스크롤 연동 active 상태 | 2026-04-07 |
| **STEP 102** | **CHANGELOG v30 업데이트 — STEP 101 점 네비게이션 기록 완료** | **2026-04-07** |

---

## 🎯 STEP 101에서 변경한 내용 (index.html) — 참고용

### 추가된 요소
| 요소 | 내용 |
|------|------|
| CSS `.dot-nav` | 우측 고정 세로 점 목록 컨테이너 (z-index:998) |
| CSS `.dot-nav-item` | 6px 원형 점, 기본 보라 테두리, active 시 보라 채움+glow |
| CSS `.dot-label` | hover 시 오른쪽에서 슬라이드인 되는 섹션 이름 레이블 |
| HTML `<nav class="dot-nav">` | hero/stats/mcp/proof/projects/diagram/roadmap/bug-stories/tc/timeline/skills/contact 12개 |
| JS `initDotNav()` | scroll + offsetTop 방식으로 현재 섹션 감지, `.active` 토글 |
| `id="hero"` | `<section class="hero">` 에 id 추가 |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟢 우선순위 1 — TC 섹션 강조 업그레이드 (index.html)
- TC 섹션 상단에 "전체 145건+ 테스트케이스" 를 더 크게/눈에 띄게 강조
- 현재는 하단에 작은 링크 텍스트만 있음 → hero-stat 스타일 또는 눈에 띄는 뱃지로 강화
- index.html SHA: `02288290c62e28cf11109a8ccb10783b1c7eb279` (STEP 101) — 수정 전 반드시 get_file_contents로 최신 SHA 재확인

### 🟡 우선순위 2 — 프로젝트 카드 링크 강화
- 빈 `proj-link`(href="#") 있는 카드들에 실제 링크 또는 관련 문서 링크 연결
- index.html 수정 필요

### 🟡 우선순위 3 — 추가 인터랙션
- 섹션 진입 시 상단에 현재 섹션명 표시 (breadcrumb 스타일)
- 현재 dot-nav로 일부 구현됨, breadcrumb는 별도 요소

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `02288290c62e28cf11109a8ccb10783b1c7eb279` (STEP 101 커밋) — 수정 전 재확인
8. **CHANGELOG.md 현재 SHA**: `000f4301ffcaa95f3aa069abac5062f098ea2bac` (v30 — STEP 102 완료)
9. **NEXT_STEPS.md 현재 SHA**: 이 커밋 후 새 SHA — 다음 Claude가 get_file_contents로 확인할 것

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

*최종 업데이트: 2026-04-07 · STEP 102 완료 · v30*
*CHANGELOG v30 업데이트 완료. 다음: TC 섹션 145건+ 강조 업그레이드 (index.html)*
