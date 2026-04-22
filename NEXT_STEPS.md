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

## 🏁 현재 상태 (2026-04-22) — STEP 139 완료 (Claude.ai 웹 세션)

> **중요**: Claude.ai 웹 채팅으로도 작업 가능. GitHub MCP가 없는 경우에도
> `github:get_file_contents` + `github:create_or_update_file` / `github:push_files` 툴을 직접 호출해서 진행.
>
> **주의**: index.html은 매번 get_file_contents로 최신 SHA를 확인 후 교체할 것.
> create_or_update_file은 SHA 불일치 시 실패함 — 반드시 직전 SHA 사용.

---

## ✅ 확정 수치 (v49 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v49** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 138 반영 |
| dot-nav | **완전 수정** | ✅ |
| breadcrumb | **추가 완료** | ✅ |
| 레이더 차트 | **추가 완료** | ✅ |
| Hero 타이핑 효과 | **추가 완료** | ✅ |
| TC 필터/검색/expand | **완료** | ✅ |
| 커밋 히스토리 카드 | **추가 완료** | ✅ |
| 실제 스크린샷 표시 | **proof 카드 5개에 실제 이미지** | ✅ |
| 스크롤 바 색상 | **스크롤 위치에 따라 보라→파랑 동적 변화** | ✅ |
| 섹션 설명 텍스트 | **프로젝트/파이프라인/경력/스킬 4섹션 추가** | ✅ STEP 138 |

---

## 📌 현재 SHA (필수 확인)

> ⚠️ 아래 SHA는 참고용. 작업 전 항상 `github:get_file_contents`로 최신 SHA 재확인할 것.

| 파일 | SHA (참고용) |
|------|-----|
| index.html | `7ef6a8f5a21b036385ad251c7659b6492ecd8287` — 작업 전 재확인 필수 |
| CHANGELOG.md | `25e5425e934c6b7c87b2c3f44cf7a5db0a70fa68` (v49) |
| NEXT_STEPS.md | 이 커밋 후 새 SHA — get_file_contents로 확인 |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟡 우선순위 1 — footer 정보 업데이트 검토
- 현재 footer: `Built with Claude MCP · No code written · 5 MCP servers · TC 145건+ · Playwright 12 spec · Jira 연동 완료`
- CHANGELOG 버전(v49) 표기 추가 여부 검토
- 현재도 충분하면 건너뛰어도 무방

### 🟡 우선순위 2 — stats 섹션(00번) 설명 텍스트 추가
- 현재 `00 숫자로 보는 현황` 섹션에는 `.sec-desc` 설명 텍스트 없음
- 다른 섹션처럼 간단한 1~2문장 설명 추가 가능
- **절대 허구 금지** — 실제 수치만

### 🟡 우선순위 3 — NEXT_STEPS.md 업데이트 (STEP 140 이후)
- 매 세션 마지막에 반드시 현행화
- SHA 모두 get_file_contents로 재확인 후 기재

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

*최종 업데이트: 2026-04-22 · STEP 139 완료 (Claude.ai 웹 세션)*
*이번 세션: 현황 점검 + CHANGELOG v49 업데이트 완료. index.html 변경 없음.*
*다음: footer 검토 → stats 섹션 설명 추가 여부 검토*
