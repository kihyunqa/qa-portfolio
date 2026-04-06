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

## 🏁 현재 상태 (2026-04-06) — STEP 100 완료

---

## ✅ 확정 수치 (v29 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v29** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 100 완료 |
| 버그 스토리 | **3건** | ✅ |
| 버그 리포트 | **8건** | ✅ |
| screenshots | **4장** | ✅ |
| TC 필터 버튼 | **완료** | ✅ |
| Hero 시각 강화 | **완료** | ✅ STEP 99 |
| 섹션 divider | **완료** | ✅ STEP 100 |

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
| **STEP 100** | **섹션 간 divider 강화 — 각 주요 섹션 상단에 보라 gradient fade overlay 추가** | **2026-04-06** |

---

## 🎯 STEP 100에서 변경한 내용 (index.html)

| 섹션 | 변경 내용 |
|------|----------|
| `.stats-sec` | `::before` — 상단 120px 보라 fade |
| `.mcp-sec` | `::before` + `::after` — 상단 140px + 하단 80px fade |
| `.proof-sec` | `::before` — 상단 120px 보라 fade |
| `.bug-sec` | `::before` — 상단 120px 보라 fade |
| `.timeline-sec` | `::before` — 상단 100px 보라 fade |
| `.roadmap-sec` | `::before` — 상단 100px 보라 fade |
| `.skills-sec` | `::before` — 상단 100px 보라 fade |
| `.contact-sec` | `::before` — 상단 100px 보라 fade |
| `.projects-sec` | `::before` — 상단 100px 보라 fade |
| `.diagram-sec` | `::before` — 상단 100px 보라 fade |

⚠️ **주의**: 이 pseudo 요소들은 `z-index:0`으로 설정되어 있어 콘텐츠(`.reveal` 등, `z-index` 없음 또는 더 높음) 위로 올라오지 않습니다. 기존 `border-top`은 유지.

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟢 우선순위 1 — 포트폴리오 최종 점검 (렌더링 확인)
- GitHub Pages 실제 렌더링 확인: https://kihyunqa.github.io/qa-portfolio
- STEP 100 섹션 divider 실제 동작 확인 (각 섹션 상단 보라 fade)
- Hero 파티클/orb 애니메이션 동작 확인
- TC 필터 버튼 동작 확인
- 모바일 전체 레이아웃 확인

### 🟡 우선순위 2 — 스크롤 진행바 강화 또는 추가 인터랙션
현재 있는 요소들:
- `.scroll-bar` (상단 2px 진행바) — 이미 구현
추가 고려:
- 섹션별 사이드 인디케이터 (점 네비게이션)
- 스크롤 시 섹션 하이라이트 효과

### 🟡 우선순위 3 — 추가 콘텐츠 업그레이드
- TC 섹션에 "전체 145건+" 링크 텍스트를 더 강조
- Hero 증거 뱃지에 추가 항목 검토
- 프로젝트 카드에 링크 강화

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `a807f3cab967132fb5cd97cf6001305fa0be9c95` (STEP 100 커밋)
8. **CHANGELOG.md 현재 SHA**: `bfd4ec47043b86b3ab49ebe5bc3262a3a0a5f1ca` (v29)
9. **NEXT_STEPS.md 현재 SHA**: (이번 커밋 후 새 SHA — 다음 Claude가 get_file_contents로 확인할 것)

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

*최종 업데이트: 2026-04-06 · STEP 100 완료 · v29*
*섹션 간 divider 강화 완료 — 10개 섹션 상단 보라 gradient fade overlay 적용. 다음: 포트폴리오 최종 점검 (GitHub Pages 렌더링 확인) 또는 추가 인터랙션*
