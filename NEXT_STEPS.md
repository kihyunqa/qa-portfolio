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

## 🏁 현재 상태 (2026-04-07) — STEP 114 완료

---

## ✅ 확정 수치 (v34 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v34** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 113 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |

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
| **STEP 113** | **Hero `.hero-role` 타이핑 효과 추가 (3개 텍스트 순환, 순수 JS) + TC 필터 버튼 복원 (전체/해피패스/네거티브/엣지케이스, data-type 기반 필터링)** | **2026-04-07** |
| **STEP 114** | **CHANGELOG v34 업데이트 — STEP 113 기록** | **2026-04-07** |

---

## 🎯 STEP 113에서 변경한 내용 (index.html)

### Hero 타이핑 효과 구현
| 항목 | 내용 |
|------|------|
| 위치 | Hero 섹션 `.hero-role` (p 태그) |
| HTML | `<span id="heroRoleText">` + `<span class="typing-cursor">` |
| CSS | `.typing-cursor` — 2px 보라 커서, `typing-blink` 0.8s |
| JS | `typeStep()` — 타이핑→대기(2200ms)→삭제→다음 루프 |
| 텍스트 | 3개: "Quality Assurance Engineer" / "TC 설계·버그 분석·MCP 자동화" / "6년 9개월 QA·코드 0줄·결과 ∞" |
| 속도 | 입력 55ms / 삭제 28ms / 시작 딜레이 600ms |

### TC 필터 버튼 복원
| 항목 | 내용 |
|------|------|
| 위치 | TC 섹션 `.tc-intro` 아래, `.tc-wrap` 위 |
| HTML | `.tc-filter` div + 4개 `.tc-filter-btn` |
| 각 TC row | `data-type="h/n/e"` 속성 추가 |
| JS | 클릭 시 해당 type 행만 `display:''`, 나머지 `display:none` |

### 변경된 SHA
- **index.html**: `c89f9d0efbcdde7707cd1c2eab7255ae2c1d4470` (STEP 113)
- **CHANGELOG.md**: `b44ed834148256e9a0abf70b981f1f8f13a0b0d2` (v34)

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — 커밋 히스토리 시각화
- "실제 증거" 섹션에 GitHub 커밋 수 강조
- `stat-big` 스타일로 커밋 수 카운트업 숫자 카드 추가
- 또는 커밋 날짜 기반 미니 타임라인/바 차트
- proof 섹션 내 `.proof-grid` 아래에 배치 권장

### 🟡 우선순위 2 — 스크롤 파티클/별빛 배경 효과
- Hero 섹션 배경에 별빛 또는 파티클 효과 (Canvas API, 순수 JS)
- 또는 현재 `hero-bg-grid` 위에 미세하게 움직이는 글로우 포인트 추가

### 🟡 우선순위 3 — TC 섹션 행 확장
- 현재 TC 테이블이 8행 → 더 많은 케이스 추가 (현실적인 QA 역량 강조)
- 네거티브 케이스 / 엣지케이스 비율도 보완

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `c89f9d0efbcdde7707cd1c2eab7255ae2c1d4470` (STEP 113)
8. **CHANGELOG.md 현재 SHA**: `b44ed834148256e9a0abf70b981f1f8f13a0b0d2` (v34)
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

*최종 업데이트: 2026-04-07 · STEP 114 완료*
*Hero 타이핑 효과 + TC 필터 버튼 복원 완료 (STEP 113). 다음: 커밋 히스토리 시각화 → 파티클 배경 → TC 행 확장*
