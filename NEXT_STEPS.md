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

## 🏁 현재 상태 (2026-04-22) — STEP 144 완료 (Claude.ai 웹 세션)

> **중요**: Claude.ai 웹 채팅으로도 작업 가능. GitHub MCP가 없는 경우에도
> `github:get_file_contents` + `github:create_or_update_file` / `github:push_files` 툴을 직접 호출해서 진행.
>
> **주의**: index.html은 매번 get_file_contents로 최신 SHA를 확인 후 교체할 것.
> create_or_update_file은 SHA 불일치 시 실패함 — 반드시 직전 SHA 사용.
> **push_files는 SHA 없이 여러 파일을 한 번에 커밋 가능** — CHANGELOG + NEXT_STEPS 동시 업데이트에 활용.

---

## ✅ 확정 수치 (v51 기준 — 모두 검증 완료)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v51** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 144 반영 |
| README.md | **최신** | ✅ STEP 143 확인 완료 |
| dot-nav | **완전 수정** | ✅ |
| breadcrumb | **추가 완료** | ✅ |
| 레이더 차트 | **추가 완료** | ✅ |
| Hero 타이핑 효과 | **추가 완료** | ✅ |
| TC 필터/검색/expand | **완료** | ✅ |
| 커밋 히스토리 카드 | **추가 완료** | ✅ |
| 실제 스크린샷 표시 | **proof 카드 5개에 실제 이미지** | ✅ |
| 스크롤 바 색상 | **스크롤 위치에 따라 보라→파랑 동적 변화** | ✅ |
| PROJECT 08 오버레이 | **CHANGELOG v51 표기** | ✅ STEP 144 |
| 스킬 tooltip | **CHANGELOG v51 표기** | ✅ STEP 144 |
| **@media print** | **추가 완료** | ✅ STEP 144 |

---

## 📌 현재 SHA (필수 확인)

> ⚠️ 아래 SHA는 참고용. 작업 전 항상 `github:get_file_contents`로 최신 SHA 재확인할 것.

| 파일 | SHA (참고용) |
|------|-----|
| index.html | `40e5d2ac781637d986e3ed2e6d1ce6b894567ca5` — STEP 144 반영 |
| README.md | `e74a4eccdb381531fcf5a3044af977b7e68966c8` — 변경 없음 |
| NEXT_STEPS.md | STEP 144 커밋 후 새 SHA — get_file_contents로 확인 |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟢 현재 포트폴리오 상태: **완성**
- 모든 수치·링크·배지·오버레이·tooltip이 최신 상태(v51)로 정합성 맞춤 완료
- README.md도 v51 수치와 완전 일치 확인 완료
- **@media print 스타일 추가 완료** (STEP 144) — Ctrl+P 또는 브라우저 인쇄 시 흰 배경 깔끔하게 출력

### 🟡 우선순위 1 — CHANGELOG.md v52 업데이트 (선택)
- v51까지 기록됨. STEP 144 (@media print 추가) 내용으로 v52 추가 가능
- CHANGELOG.md SHA 확인 후 업데이트

### 🟡 우선순위 2 — 추가 인터랙션 (선택)
- CPU 부담 없는 순수 CSS/간단 JS만 허용
- 아이디어: 언어 토글(한/영) 등
- **⚠️ 애니메이션·파티클·무한 루프 효과 절대 금지**

---

## @media print 상세 (STEP 144 추가 내용)

인쇄 시 적용되는 사항:
- 배경 흰색, 텍스트 검정으로 전환
- nav, dot-nav, breadcrumb, scroll-bar 숨김
- tc-search-wrap, tc-filter, tc-row-hint 숨김
- 스크린샷 이미지 숨김 (인쇄 불필요)
- 타임라인 상세 내용 자동 펼침
- 링크 URL 텍스트로 표시 (단, 내부 UI 링크 제외)
- 섹션별 페이지 나누기 제어
- @page A4, 여백 18mm 16mm 설정

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
10. **index.html은 파일 전체를 통째로 교체** — create_or_update_file 사용, SHA 반드시 직전 get_file_contents 결과 기준

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

*최종 업데이트: 2026-04-22 · STEP 144 완료 (Claude.ai 웹 세션)*
*이번 세션: @media print 스타일 추가 — 인쇄/PDF 저장 시 흰 배경·검정 텍스트 깔끔하게 출력. CPU 부담 없는 순수 CSS만 사용. index.html SHA 40e5d2ac*
*다음: CHANGELOG v52 업데이트(선택) · 언어 토글 한/영(선택)*
