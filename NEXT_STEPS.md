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

## 🏁 현재 상태 (2026-04-08) — STEP 130 완료

---

## ✅ 확정 수치 (v42 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v42** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 129 완료 |
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
| 프로젝트 카드 오버레이 | **10개 카드 슬라이드업** | ✅ STEP 125 |
| 경력 타임라인 인터랙션 | **클릭 expand/collapse** | ✅ STEP 127 |
| **히어로 stat 툴팁** | **4개 stat hover 툴팁 + 클릭 스크롤** | ✅ **STEP 129** |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~100 | 수치 검증, bug-stories, 섹션 강화 등 | 2026-04-01~06 |
| STEP 101~126 | dot-nav, breadcrumb, 레이더, 타이핑, 파티클, TC행, 배지, 툴팁, 오버레이 | 2026-04-07 |
| STEP 127 | 경력 타임라인 클릭 expand/collapse | 2026-04-08 |
| STEP 128 | CHANGELOG v41 + NEXT_STEPS.md 업데이트 | 2026-04-08 |
| **STEP 129** | **히어로 stat 카드 hover 툴팁 (4개) + 클릭 섹션 스크롤** | **2026-04-08** |
| **STEP 130** | **CHANGELOG v42 + NEXT_STEPS.md 인수인계 업데이트** | **2026-04-08** |

---

## 🎯 STEP 129에서 변경한 내용 (index.html)

### 히어로 stat 카드 hover 툴팁 + 클릭 스크롤
| 요소 | 구현 내용 |
|------|----------|
| `.hero-stat-card` | wrapper div · cursor:pointer · hover border + bg + translateX(-4px) |
| `.hero-stat-card:hover .stat-n` | purple3 color + text-shadow glow |
| `.hero-stat-tip` | 왼쪽으로 슬라이드 툴팁 · `position:absolute;right:calc(100%+14px)` |
| `.hero-stat-tip::after` | CSS 삼각형 화살표 포인터 |
| 6.9yr 툴팁 | 두플/IMS/모비프렌 + 총 경력 → timeline 스크롤 |
| 5+ 툴팁 | 5개 MCP 서버 전체 목록 → mcp 스크롤 |
| 12 툴팁 | E2E spec 12개 파일 목록 → proof 스크롤 |
| P1 2건 툴팁 | 보안 버그 스토리 요약 2건 → proof 스크롤 |
| JS | `.hero-stat-card[data-scroll]` click → scrollIntoView smooth |

### 현재 SHA
- **index.html**: STEP 129 커밋 후 새 SHA — `get_file_contents`로 확인
- **CHANGELOG.md**: STEP 130 커밋 후 새 SHA
- **NEXT_STEPS.md**: STEP 130 커밋 후 새 SHA

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### ✅ 완료 — 우선순위 1~6 (STEP 119~129)
- TC 행 확장, 섹션 통계 배지, 스킬 툴팁, 프로젝트 카드 오버레이, 경력 타임라인 인터랙션, 히어로 stat 툴팁 완료

### 🟡 우선순위 7 — TC 섹션 강화 (다음 작업)
- TC 테이블 행 클릭 시 상세 케이스 내용 expand (현재 기본 내용만)
- 또는 TC 카테고리별 진행 현황 프로그레스바
- 또는 TC 검색 기능 (테이블 내 실시간 필터)

### 🟡 우선순위 8 — 전체 페이지 로딩 애니메이션
- 초기 로드 시 hero 섹션 요소들 순차적 fade-in
- 또는 페이지 전환 진행 표시기

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: STEP 129 커밋 후 새 SHA — get_file_contents로 확인 필수
8. **CHANGELOG.md 현재 SHA**: STEP 130 커밋 후 새 SHA — get_file_contents로 확인
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

*최종 업데이트: 2026-04-08 · STEP 130 완료*
*히어로 stat 카드 hover 툴팁 + 클릭 스크롤 완료 (STEP 129). 다음: TC 섹션 강화*
