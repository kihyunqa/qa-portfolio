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

## 🏁 현재 상태 (2026-04-22) — STEP 134 완료 · 인수인계 재확인

> **중요**: Claude.ai 웹 채팅으로도 작업 가능. GitHub MCP가 없는 경우에도
> `github:get_file_contents` + `github:create_or_update_file` 툴을 직접 호출해서 진행.

---

## ✅ 확정 수치 (v46 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v46** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 134 반영 |
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
| 실제 스크린샷 표시 | **proof 카드 3개에 실제 이미지 추가** | ✅ STEP 134 |

---

## 📌 현재 SHA (필수 확인)

| 파일 | SHA |
|------|-----|
| index.html | `14b9768145b2600bbc60cf2f83f988505dd2d57e` |
| CHANGELOG.md | `10e6443b61cbe89b5482630bfe4714b6df6a5e62` |
| NEXT_STEPS.md | 이 커밋 후 새 SHA — get_file_contents로 확인 |

> ⚠️ 작업 전 항상 `github:get_file_contents`로 최신 SHA 다시 확인할 것

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — playwright proof 카드에 스크린샷 추가
- 현재 proof 카드 4개 중 playwright 카드(3번째)에만 스크린샷 없음
- screenshots/ 폴더 파일 목록 먼저 확인 (get_file_contents로 디렉토리 조회)
- **실제 파일이 존재하는 것만 사용** — 없으면 추가하지 말 것

### 🟡 우선순위 2 — 스크롤 진행 바 색상 개선
- 현재: 단순 linear-gradient (보라색 고정)
- 개선: 스크롤 위치에 따라 색상이 자연스럽게 변하는 방식
- 구현: JS scroll 이벤트에서 `scrollBar.style.background` 동적 변경 (애니메이션 없음)
- CSS transition 없이 즉시 반영

### 🟡 우선순위 3 — CHANGELOG 업데이트 (매 스텝 필수)
- 작업마다 CHANGELOG.md에 v47+ 추가 필수
- 형식: `## v47.0.0 — YYYY-MM-DD` + 테이블 형태 변경 내역

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
10. **index.html은 파일 전체를 통째로 교체** — push_files 또는 create_or_update_file 사용

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

*최종 업데이트: 2026-04-22 · STEP 134 확인 완료 · Claude.ai 웹 채팅으로 인수인계 재확인*  
*이전 모든 항목(breadcrumb, 레이더차트, TC 검색, stat bar, 스크린샷)이 이미 구현 완료됨을 재확인.*  
*다음: playwright proof 카드 스크린샷 추가 (실제 파일 존재 여부 선확인 필수) 또는 스크롤 바 색상 개선*
