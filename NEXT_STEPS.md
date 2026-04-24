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

## 🏁 현재 상태 (2026-04-24) — STEP 146 완료 (Claude.ai 웹 세션 4)

> **중요**: Claude.ai 웹 채팅으로도 작업 가능. GitHub MCP가 없는 경우에도
> `github:get_file_contents` + `github:create_or_update_file` / `github:push_files` 툴을 직접 호출해서 진행.
>
> **주의**: index.html은 매번 get_file_contents로 최신 SHA를 확인 후 교체할 것.
> create_or_update_file은 SHA 불일치 시 실패함 — 반드시 직전 SHA 사용.
> **push_files는 SHA 없이 여러 파일을 한 번에 커밋 가능** — CHANGELOG + NEXT_STEPS 동시 업데이트에 활용.

---

## ✅ 확정 수치 (세션 4 기준 — 모두 검증 완료)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 (index.html 실제) | **23건** | ✅ STEP 146 실제 추가 완료 |
| TC 섹션 배지 | **23건 표시** | ✅ STEP 146 수정 완료 |
| TC 건수 (MCP 자동생성 누적) | **145건+** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| @media print | **추가 완료** | ✅ STEP 144 |
| TC 통계 대시보드 | **완료** | ✅ 4카드 + JS 자동 계산 |
| TC 설계 의도 (왜 이 케이스인가) | **전 23건 완료** | ✅ |
| CLAUDE_HANDOFF.md | **세션 4 최신화** | ✅ |

---

## 📌 현재 SHA (필수 확인)

> ⚠️ 아래 SHA는 참고용. 작업 전 항상 `github:get_file_contents`로 최신 SHA 재확인할 것.

| 파일 | SHA (참고용) |
|------|-----|
| index.html | STEP 146 커밋 후 새 SHA — get_file_contents로 확인 필요 |
| README.md | `e74a4eccdb381531fcf5a3044af977b7e68966c8` — 변경 없음 |
| NEXT_STEPS.md | STEP 146 커밋 후 새 SHA |
| docs/CLAUDE_HANDOFF.md | STEP 146 커밋 후 새 SHA |

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### 🟢 현재 포트폴리오 상태: **완성 + 지속 개선 중**
- TC 23건 + 배지 23건 — HANDOFF와 실제 HTML 일치 ✅
- 모든 TC에 설계 의도 (왜 이 케이스인가) 포함 ✅
- TC 통계 대시보드 (4카드 + 분포 바) ✅

### 🟡 우선순위 1 — TC 추가 (23건 → 30건)
- 추천 카테고리: `CROSS-*` (크로스 브라우저), `NOTIF-*` (추가 알림), `PAY-*` (추가 결제)
- CLAUDE_HANDOFF.md의 TC HTML 패턴 복붙
- 추가 후 sec-stat-badge 숫자도 같이 업데이트 필수

### 🟡 우선순위 2 — 추가 인터랙션 (선택)
- CPU 부담 없는 순수 CSS/간단 JS만 허용
- 아이디어: 언어 토글(한/영) 등
- **⚠️ 애니메이션·파티클·무한 루프 효과 절대 금지**

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

*최종 업데이트: 2026-04-24 · STEP 146 완료 (Claude.ai 웹 세션 4)*
*이번 세션: TC 4건(MOBILE-HP-001/DB-E-001/API-RT-001/IOT-HP-001) index.html 실제 추가 · TC 섹션 배지 "23건 표시" 수정 · HANDOFF 세션 4 이력 현행화*
*다음: TC 추가 (23건 → 30건 목표) · 언어 토글 한/영(선택)*
