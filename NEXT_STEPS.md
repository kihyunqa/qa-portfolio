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

## 🏁 현재 상태 (2026-04-06) — STEP 94 완료

---

## ✅ 확정 수치 (v26 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v26** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 94 완료 |
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
| STEP 93 | index.html 업그레이드: (1) stats 섹션 "코드 0줄" → "7단계 AI 자동화 워크플로우"로 리프레이밍, (2) PHASE 3 "계획·흐릿" → "진행 중" 강조, (3) OG/meta description 품질 개선, (4) 터미널 주석·배지 "코드 0줄" → 워크플로우 강조 수정 | 2026-04-06 |
| **STEP 94** | **스킬 섹션(08) 전면 개편**: bar 차트 → 카드/뱃지 레이아웃. 6개 카테고리 카드 (Testing&QA / MCP&AI / Tools / Domain / Documentation / Collaboration) + 회사별 실제 사용 툴 태그 연결 (모비프렌/IMS/두플) | **2026-04-06** |

---

## 🎯 STEP 94에서 변경한 내용 (index.html)

| 위치 | 변경 전 | 변경 후 |
|------|---------|---------| 
| 스킬 섹션 레이아웃 | 3열 bar 차트 (sk-list) | 6개 카테고리 카드 (sk-cat-card) + 뱃지 |
| 스킬 카테고리 | Testing&QA / MCP Core&AI / QA Documentation | Testing&QA / MCP&AI / Tools / Domain / Documentation / Collaboration |
| 회사별 툴 섹션 | 없음 | 모비프렌·IMS·두플 컬러 사이드바 태그 카드 |
| 스킬 섹션 타이틀 | "스킬" | "스킬 & 툴킷" |
| index.html SHA | `231289f...` | `4c0794e...` |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🔴 우선순위 1 — Hero 숫자 stat 우측 패널 업그레이드
현재 우측 Hero stats: 6.9yr / 5+ / 12 / ∞ — "∞ 확장 가능성"이 모호함
- "∞" → 더 임팩트 있는 실제 수치로 교체
- 예: `P1 2건` (보안 버그 발견) or `28 docs` or `80+ files`
- 4번째 stat을 "2 P1 BUG" 또는 "28 docs" 등으로 교체

### 🟡 우선순위 2 — 버그 스토리 섹션 index.html에 인라인 카드로 추가
현재 버그 스토리는 GitHub 링크로만 연결.
docs/bug-stories.md 핵심 3건을 포트폴리오 본문에 카드 형식으로 인라인 표시.
- BUG-001: 보안 토큰 허점 (P1)
- BUG-002: 결제 1원 오차 에스컬레이션 (P1)
- BUG-003: 저속 네트워크 알림 중복 (P2)
- 섹션 번호: 기존 섹션 사이에 삽입 or 새 섹션으로 추가

### 🟡 우선순위 3 — TC 테이블 필터 버튼 추가
현재 TC 테이블에 8행만 보임. 개선:
- 카테고리 필터 버튼 추가 (전체/해피패스/네거티브/엣지케이스 토글)
- JS로 필터링, 더 많은 TC 행 표시

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
7. **index.html 현재 SHA**: `4c0794e852d7f26f1165cfd2f6e0afbf9c5a5a88`

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

*최종 업데이트: 2026-04-06 · STEP 94 완료 · v26*
*스킬 섹션 카드/뱃지 레이아웃 전면 개편 + 회사별 툴 태그 연결 완료 🎉*
