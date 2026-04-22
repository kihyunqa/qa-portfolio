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
> - **작업 원칙**: 불필요한 애니메이션 금지 · CPU 많이 잡아먹는 요소 금지 · 허구 금지 · 실제 경력 기반만

---

## 🏁 현재 상태 (2026-04-22) — STEP 135 완료

> **중요**: Claude.ai 웹 채팅으로도 작업 가능. GitHub MCP가 없는 경우에도
> `github:get_file_contents` + `github:push_files` 툴을 직접 호출해서 진행.

---

## ✅ 확정 수치 (v47 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v47** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 135 반영 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |
| 커밋 히스토리 카드 | **추가 완료** | ✅ STEP 115 |
| Hero fade-in | **추가 완료** | ✅ STEP 132 |
| TC 섹션 행 expand | **20개 행 클릭 상세** | ✅ STEP 131 |
| TC 실시간 검색 | **TC-ID/제목/기대결과 필터** | ✅ STEP 133 |
| TC stat bar 동기화 | **필터/검색 시 실시간 건수 업데이트** | ✅ STEP 134 |
| 실제 스크린샷 표시 | **proof 카드 4개(+Jira 전체폭)에 실제 이미지** | ✅ STEP 135 |
| Jira proof 카드 | **전체 폭 카드 + jira-board.png** | ✅ STEP 135 |
| 스크롤 바 색상 | **스크롤 위치에 따라 보라→파랑 동적 변화** | ✅ STEP 135 |

---

## 📌 현재 SHA (필수 확인)

> ⚠️ 아래 SHA는 이 커밋 시점 기준. 작업 전 항상 `github:get_file_contents`로 최신 SHA 재확인할 것.

| 파일 | SHA (참고용) |
|------|-----|
| index.html | STEP 135 커밋 후 SHA — get_file_contents로 확인 |
| CHANGELOG.md | STEP 135 커밋 후 SHA — get_file_contents로 확인 |
| NEXT_STEPS.md | 이 커밋 후 SHA — get_file_contents로 확인 |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — Hero 섹션 개선
- 현재 Hero 오른쪽 stat 카드 4개가 desktop에만 보임 (모바일 hidden)
- 모바일에서도 간결하게 볼 수 있도록 hero-proof-item(체크박스 배지) 아래에 수치 1줄 추가 검토
- 단, 현재도 hero-proof 배지가 있으므로 중복이면 건너뜀

### 🟡 우선순위 2 — 섹션 구성 최적화
- 현재 proof 섹션 배지: `5개 실제 확인` (html 내 sec-stat-badge 수동 업데이트 필요)
- 코드 내 sec-stat-badge가 `4개 실제 확인`으로 되어 있다면 `5개 실제 확인`으로 수정
- index.html 내에서 `sec-n 02` 섹션의 sec-stat-badge 확인 및 수정

### 🟡 우선순위 3 — CHANGELOG 업데이트 (매 스텝 필수)
- 작업마다 CHANGELOG.md에 v48+ 추가 필수
- 형식: `## v48.0.0 — YYYY-MM-DD` + 테이블 형태 변경 내역

---

## ⚠️ 작업 규칙 (필독)

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — 매 세션 마지막에 반드시
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **불필요한 애니메이션 절대 추가 금지** — CPU 부담 주는 요소 금지
8. **허구 금지** — 실제 경력/수치 기반만, 지어내지 말 것
9. **screenshots/ 폴더 이미지 사용 시** — 실제 파일 존재 여부 먼저 확인
10. **index.html은 파일 전체를 통째로 교체** — push_files 사용 권장

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

*최종 업데이트: 2026-04-22 · STEP 135 완료*
*Jira proof 카드(jira-board.png) + 스크롤 바 색상 동적 변화 구현 완료.*
*다음: proof 섹션 배지 `5개` 확인/수정 또는 Hero 섹션 모바일 최적화 검토*
