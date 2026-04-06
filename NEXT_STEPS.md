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

## 🏁 현재 상태 (2026-04-06) — STEP 99 완료

---

## ✅ 확정 수치 (v28 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v28** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 99 완료 |
| 버그 스토리 | **3건** | ✅ |
| 버그 리포트 | **8건** | ✅ |
| screenshots | **4장** | ✅ |
| TC 필터 버튼 | **완료** | ✅ |
| Hero 시각 강화 | **완료** | ✅ STEP 99 |

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
| **STEP 99** | **Hero 섹션 시각적 강화 — 파티클/gradient orb 애니메이션, btn-p glow pulse, 하단 divider 추가** | **2026-04-06** |

---

## 🎯 STEP 99에서 변경한 내용 (index.html)

| 항목 | 변경 전 | 변경 후 |
|------|---------|---------|
| Hero 배경 | `.hero-bg-grid` (단순 그리드) | + 3개 gradient orb (`hero-orb-1/2/3`) — CSS 애니메이션 |
| Hero 파티클 | 없음 | 8개 CSS 파티클 (`.hero-p`) — `p-float` keyframes |
| btn-p 버튼 | 정적 박스 | `btn-glow` keyframes — 2.8초 주기 glow pulse |
| Hero 하단 | 섹션 경계 없음 | `.hero-divider` — 하단 80px 페이드 그라디언트 |
| 모바일 | — | `.hero-orb { display:none }` (모바일 성능 고려) |
| index.html SHA | `40cd3f3d...` | `90d81e9b...` |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — 섹션 간 divider 강화
각 섹션 전환부(`.stats-sec`, `.mcp-sec`, `.proof-sec` 등)에 시각적 구분 강화:
- 섹션 사이 배경 그라데이션 페이드 추가
- 또는 구분선 스타일 업그레이드 (현재 단순 border-top)

### 🟢 우선순위 2 — 포트폴리오 최종 점검
- GitHub Pages 실제 렌더링 확인 (https://kihyunqa.github.io/qa-portfolio)
- Hero 파티클/orb 애니메이션 실제 동작 확인
- TC 필터 버튼 모바일 동작 확인
- 모바일 전체 레이아웃 확인

### 🟢 우선순위 3 — CHANGELOG v29 업데이트
- STEP 99 Hero 시각 강화 내용 CHANGELOG.md에 반영

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `90d81e9b00ff98a7631f66fb3781f17c8ae77139` (STEP 99 커밋)
8. **CHANGELOG.md 현재 SHA**: `948b48c50b05501602e5dbb69031b4a681b6a94f` (v28)

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

*최종 업데이트: 2026-04-06 · STEP 99 완료 · v28*
*Hero 섹션 시각 강화 완료 🎉 — 파티클/orb/glow/divider 추가. 다음: 섹션 divider 강화 or 최종 점검*
