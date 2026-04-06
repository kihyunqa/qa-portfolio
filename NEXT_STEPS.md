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

## 🏁 현재 상태 (2026-04-06) — STEP 93 완료

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
| index.html | **최신** | ✅ STEP 93 완료 |
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
| **STEP 93** | **index.html 업그레이드**: (1) stats 섹션 "코드 0줄" → "7단계 AI 자동화 워크플로우"로 리프레이밍, (2) PHASE 3 로드맵 "계획·흐릿" → "진행 중" 강조 스타일로 업그레이드, (3) OG/meta description 품질 개선 (보안 P1 2건·경력 강조), (4) 터미널 주석 "코드 0줄" → 워크플로우 강조로 수정, (5) hero-proof 배지 "코드 0줄" → "AI 도구 활용 전문가"로 교체, (6) 스크린샷 설명 문구 개선 | **2026-04-06** |

---

## 🎯 STEP 93에서 변경한 내용 (index.html)

| 위치 | 변경 전 | 변경 후 |
|------|---------|---------|
| stats 섹션 2번째 카드 | `0줄 · 작성한 코드 줄 수` | `7 · AI 자동화 워크플로우 스텝` |
| PHASE 3 로드맵 클래스 | `future` (opacity:.6 흐릿) | `next` (황금색 테두리 강조) |
| PHASE 3 아이콘 | 🗓️ | 🔄 |
| PHASE 3 상태 텍스트 | `계획` | `진행 중` |
| OG description | "코드 0줄" 위주 | 보안 P1 2건·경력 위주 |
| 터미널 주석 | `코드 0줄. 대화 1번.` | `대화 1번. MCP 5개 + Jira. 7단계 워크플로우.` |
| hero-proof 배지 | `코드 0줄` | `AI 도구 활용 전문가` |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🔴 우선순위 1 — 스킬 섹션 업그레이드
현재 스킬 섹션(08번)이 단순 bar 차트 나열. 개선 방향:
- 카테고리별 뱃지형 레이아웃으로 시각적 임팩트 강화
- "사용 도구" + "경력에서 실제 쓴 것" 구분 표시
- 삼성전자/IMS/두플 각 회사에서 쓴 툴을 태그로 연결

### 🟡 우선순위 2 — Hero 숫자 stat 우측 패널 업그레이드
현재 우측 Hero stats: 6.9yr / 5+ / 12 / ∞ — 단순함
- "∞ 확장 가능성" → 더 임팩트 있는 실제 수치로 교체
- 예: `28 docs` or `80+ files` or `P1 2건`

### 🟡 우선순위 3 — TC 테이블 섹션 확장
현재 TC 테이블에 8행만 보임. 몇 가지 추가 개선:
- 카테고리 필터 버튼 추가 (해피패스/네거티브/엣지케이스 토글)
- 더 다양한 도메인 TC 추가 (보안, API 등)

### 🟢 우선순위 4 — 버그 스토리 섹션 index.html에 인라인 추가
현재 버그 스토리는 GitHub 링크로만 연결.
docs/bug-stories.md 핵심 3건을 포트폴리오 본문에 카드 형식으로 인라인 표시.

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

*최종 업데이트: 2026-04-06 · STEP 93 완료 · v26*
*포트폴리오 메시지 리프레이밍 + PHASE 3 강화 + OG meta 개선 완료 🎉*
