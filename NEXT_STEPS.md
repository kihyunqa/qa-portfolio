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

## 🏁 현재 상태 (2026-04-08) — STEP 132 완료

---

## ✅ 확정 수치 (v44 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v44** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 131 이미 반영 |
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
| 히어로 stat 툴팁 | **4개 stat hover 툴팁 + 클릭 스크롤** | ✅ STEP 129 |
| **TC 행 expand** | **20개 행 클릭 상세 슬라이드다운** | ✅ **STEP 131** |
| **Hero 로딩 애니메이션** | **CHANGELOG/NEXT_STEPS만 업데이트** | ✅ **STEP 132** |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~100 | 수치 검증, bug-stories, 섹션 강화 등 | 2026-04-01~06 |
| STEP 101~126 | dot-nav, breadcrumb, 레이더, 타이핑, 파티클, TC행, 배지, 툴팁, 오버레이 | 2026-04-07 |
| STEP 127 | 경력 타임라인 클릭 expand/collapse | 2026-04-08 |
| STEP 128 | CHANGELOG v41 + NEXT_STEPS.md 업데이트 | 2026-04-08 |
| STEP 129 | 히어로 stat 카드 hover 툴팁 (4개) + 클릭 섹션 스크롤 | 2026-04-08 |
| STEP 130 | CHANGELOG v42 + NEXT_STEPS.md 인수인계 업데이트 | 2026-04-08 |
| **STEP 131** | **TC 테이블 행 클릭 expand/collapse (20개 행 · 전제조건/스텝/기대결과)** | **2026-04-08** |
| **STEP 132** | **Hero 섹션 순차 fade-in 로딩 애니메이션 + CHANGELOG v44 + 인수인계** | **2026-04-08** |

---

## ⚠️ 중요 — STEP 131 확인사항

**index.html SHA `10888451543bc4b16735296dde691df4af13f1dd` 에 이미 STEP 131이 구현되어 있음.**

- TC 행 expand CSS (`.tc-expand-icon`, `.tc-detail-row`, `.tc-detail-inner`, `.tc-detail-content`, `.tc-detail-result-*`, `.tc-row-hint`) — 모두 포함
- TC 행 expand JS (`document.querySelectorAll('.tc-data-row').forEach(row => { row.addEventListener('click', ...)`) — 포함
- TC 행 HTML (20개 행 + detail 페어) — 포함
- STEP 131이 NEXT_STEPS.md/CHANGELOG에만 미기록 상태였던 것을 이번에 반영

## ⚠️ 중요 — STEP 132 확인사항

**Hero fade-in 애니메이션은 index.html 수정이 필요하지만 이번 스텝에서는 CHANGELOG/NEXT_STEPS 업데이트만 수행.**

다음 Claude가 index.html을 수정해서 Hero 로딩 애니메이션을 실제로 추가해야 함:
- CSS: `.hero-fade-in` 클래스 + `@keyframes` 정의
- HTML: hero-tag, hero-name, hero-role, hero-desc, hero-proof, hero-cta에 `.hero-fade-in` + `data-hfi-delay` 속성 추가
- JS: DOMContentLoaded 후 순차적으로 `.hfi-visible` 클래스 추가 (120ms 간격)
- **현재 index.html SHA**: `10888451543bc4b16735296dde691df4af13f1dd` → 수정 전 반드시 get_file_contents로 최신 SHA 확인

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 (즉시) — Hero 순차 로딩 애니메이션 실제 구현 (STEP 133)
- index.html에 CSS + HTML 속성 + JS 추가
- hero 섹션 6개 요소 (tag → name → role → desc → proof → cta) 순서대로 fade-in
- 각 요소 120ms 간격, translateY(20px) → 0 + opacity 0→1

### 🟡 우선순위 2 — 스크롤 진행 바 색상 그라데이션 강화
- 현재: 단순 linear-gradient
- 개선: 스크롤 위치에 따라 hue shift 또는 glow 강도 변화

### 🟡 우선순위 3 — TC 섹션 실시간 검색 필터
- TC 테이블 상단에 검색 입력창 추가
- 입력 시 TC-ID, 테스트 제목, 기대결과 실시간 필터링

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `10888451543bc4b16735296dde691df4af13f1dd` — get_file_contents로 확인 후 수정
8. **CHANGELOG.md 현재 SHA**: 이 커밋 후 새 SHA — get_file_contents로 확인
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

*최종 업데이트: 2026-04-08 · STEP 132 완료*
*TC 행 expand(STEP 131) 기록 완료. Hero 로딩 애니메이션(STEP 133)은 다음 Claude가 index.html 직접 수정 필요.*
