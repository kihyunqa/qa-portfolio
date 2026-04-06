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

## 🏁 현재 상태 (2026-04-06) — STEP 96 완료

---

## ✅ 확정 수치 (v27 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v27** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 96 완료 |
| 버그 스토리 | **3건** | ✅ |
| 버그 리포트 | **8건** | ✅ |
| screenshots | **4장** | ✅ 업로드 + 삽입 완료 |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~91 | 수치 검증, bug-stories, docs 동기화 등 | 2026-04-01~06 |
| STEP 92 | screenshots 4장 업로드 완료 확인 + index.html ACTUAL SCREENSHOTS 섹션 삽입 완료 검증 | 2026-04-06 |
| STEP 93 | index.html 업그레이드: stats 섹션 리프레이밍, PHASE 3 강조, OG/meta description 품질 개선 | 2026-04-06 |
| STEP 94 | 스킬 섹션(08) 전면 개편: bar 차트 → 카드/뱃지 레이아웃. 6개 카테고리 카드 + 회사별 툴 태그 | 2026-04-06 |
| STEP 95 | Hero stat 4번째 `∞ 확장 가능성` → `P1 2건 · 보안 버그 발견` 실제 수치로 교체 | 2026-04-06 |
| **STEP 96** | **버그 스토리 인라인 카드 섹션(06번) 추가 — STORY-001/002/003 심각도별 컬러 카드. nav에 링크 추가. 섹션 번호 재정렬(TC→07, 경력→08, 스킬→09)** | **2026-04-06** |

---

## 🎯 STEP 96에서 변경한 내용 (index.html)

| 위치 | 변경 전 | 변경 후 |
|------|---------|---------|
| 신규 섹션 `#bug-stories` | 없음 | STORY-001(빨강)/002(주황)/003(파랑) 3열 카드 + 요약 바 |
| nav 링크 | TC까지만 | 버그 스토리 추가 |
| Hero CTA | `버그 스토리 ↗` (외부링크) | `버그 스토리 ↓` (내부 앵커) |
| TC 섹션 번호 | `06` | `07` |
| 경력 섹션 번호 | `07` | `08` |
| 스킬 섹션 번호 | `08` | `09` |
| index.html SHA | `af44f7f...` | 새 SHA (push 후 확인 필요) |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🔴 우선순위 1 — TC 테이블 필터 버튼 추가 (구 우선순위 2)
현재 TC 테이블에 8행만 보임. 개선:
- 카테고리 필터 버튼 추가 (전체/해피패스/네거티브/엣지케이스 토글)
- JS로 필터링, 더 많은 TC 행 표시 (현재 8개 → 12개 이상)
- 섹션이 07번으로 변경됨 — `id="tc"` 그대로 사용

### 🟡 우선순위 2 — 포트폴리오 전체 최종 점검
- GitHub Pages 실제 렌더링 확인
- 버그 스토리 섹션 카드 hover 애니메이션 확인
- 모바일 1열 레이아웃 확인

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

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 SHA 반드시 확인 후 전체 내용 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: push 후 새로 확인 필요 (STEP 96에서 전체 교체됨)

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

*최종 업데이트: 2026-04-06 · STEP 96 완료 · v27*
*버그 스토리 인라인 카드 섹션 추가 완료 🎉 (STORY-001 빨강/002 주황/003 파랑)*
