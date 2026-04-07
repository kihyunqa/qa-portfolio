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

## 🏁 현재 상태 (2026-04-07) — STEP 112 완료

---

## ✅ 확정 수치 (v33 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v33** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 111 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |

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
| **STEP 111** | **QA 스킬 레이더 차트 추가 — 스킬 섹션 상단에 SVG 방사형 차트. 8개 축(TC설계/버그리포팅/E2E자동화/API테스트/MCP연동/Prompt Eng./QA문서화/QA리딩). 섹션 진입 시 easeInOut 애니메이션, hover 인터랙션 범례** | **2026-04-07** |
| **STEP 112** | **CHANGELOG v33 업데이트 — STEP 111 레이더 차트 기록** | **2026-04-07** |

---

## 🎯 STEP 111에서 변경한 내용 (index.html)

### 레이더 차트 구현 내용
| 항목 | 내용 |
|------|------|
| 위치 | 스킬 섹션 (id=skills) `.sec-head` 바로 아래, `.skills-wrap` 위 |
| HTML | `.radar-wrap` — 2컬럼 (SVG 340px + 범례) |
| SVG | `#radarSvg` 280×280 — polygon grid + axes + data + dots + labels |
| CSS | `.radar-wrap`, `.radar-svg-container`, `.radar-legend-item` 등 |
| JS | `drawRadar(animated)` 함수 — SVG 렌더링 + 애니메이션 |
| JS | `radarObs` IntersectionObserver — 섹션 진입 시 트리거 |
| 데이터 | `radarSkills` 배열 — 8개 스킬 (name, val, color) |
| 인터랙션 | 범례 hover → 해당 dot 크기 + 색상 강조 |
| 모바일 | `grid-template-columns:1fr` 단일 컬럼 처리 |

### 변경된 SHA
- **index.html**: `24047e42d7eb464cd21222f5437950ae4bb91a66` (STEP 111)
- **CHANGELOG.md**: `d5cf0d914c8f40e81b0f992c52563e92df40bf45` (v33)

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — 섹션 진입 타이핑 효과
- Hero 섹션 `.hero-role` (Quality Assurance Engineer) 에 타이핑 커서 애니메이션
- 또는 Hero의 `.hero-tag` 텍스트 타이핑 효과
- 순수 JS + CSS로 구현 (외부 라이브러리 없이)

### 🟡 우선순위 2 — TC 필터 버튼 복원
- 현재 index.html에 TC 테이블 필터 버튼이 빠져 있을 수 있음 (STEP 111 때 index.html 전체 교체 과정에서)
- get_file_contents로 현재 index.html의 TC 섹션 확인 후 필요하면 필터 버튼 재추가
- 필터 버튼: 전체 / 해피패스 / 네거티브 / 엣지케이스

### 🟡 우선순위 3 — 커밋 히스토리 시각화
- "실제 증거" 섹션에 GitHub 커밋 수 강조 (289 commits → 카운트업 숫자 카드)
- 또는 커밋 날짜 타임라인 미니 차트 추가

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `24047e42d7eb464cd21222f5437950ae4bb91a66` (STEP 111)
8. **CHANGELOG.md 현재 SHA**: `d5cf0d914c8f40e81b0f992c52563e92df40bf45` (v33)
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

*최종 업데이트: 2026-04-07 · STEP 112 완료*
*QA 스킬 레이더 차트 추가 완료 (STEP 111) + CHANGELOG v33. 다음: Hero 타이핑 효과 → TC 필터 버튼 확인 → 커밋 히스토리 시각화*
