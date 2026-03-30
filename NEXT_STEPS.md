# 🤖 다음 Claude를 위한 인수인계 문서

> **이 문서를 읽는 Claude에게**: 새 대화 시작 시 아래 명령어로 이 문서를 읽고 이어서 작업하세요.
>
> ```
> kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘
> ```
>
> - 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> - 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## ✅ 검증 완료된 실제 현황 (2026-03-31 최종)

### 파일 구조 실제 수치 (부풀리기 금지)

| 항목 | 실제 수 | 위치 |
|------|---------|------|
| testcase_*.md | **17개** | 루트 |
| playwright spec | **12개** (config 제외) | playwright-tests/ |
| playwright helpers | **2개** | playwright-tests/helpers/ |
| skills/ 문서 | **9개** | skills/ |
| docs/ 문서 | **22개** | docs/ |
| e2e-scenarios/ | **6개** | e2e-scenarios/ |
| test-cases/ | **6개** | test-cases/ |
| GitHub Actions | **2개** | .github/workflows/ |
| 전체 파일 수 | **80개+** | 전체 레포 |

### index.html 현재 표시 수치 (최신 — 변경 금지)

| 항목 | 현재값 |
|------|--------|
| Playwright spec 수 | **12개** ✅ |
| TC 건수 | **145건+** ✅ |
| 파일 수 | **80개+** ✅ |
| MCP 서버 수 | **5개** ✅ |

### MCP 5개 연동 — 실제 작동 확인

| MCP | 상태 | 채널/위치 |
|-----|------|----------|
| filesystem | ✅ | TC 파일 로컬 저장 |
| github | ✅ | 모든 커밋 MCP 처리 |
| playwright | ✅ | spec 12개 실제 코드 존재 |
| notion | ✅ 실제 연동 | TC 결과 페이지 자동 생성 확인 |
| slack | ✅ 실제 연동 | 새-채널 (channel-id: C0AQFJXC800) 실제 수신 확인 |

### GitHub Actions — 2개 정상 운영

| 파일 | 역할 | 트리거 |
|------|------|--------|
| `qa-notify.yml` | TC 업데이트 → Slack 알림 | testcase_*.md, test-cases/**, playwright-tests/** |
| `main.yml` | 포트폴리오 배포 검증 | index.html, README.md, docs/** |

> ⚠️ **중요**: workflows 파일은 MCP로 수정 불가 → GitHub 웹에서만 편집 가능

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1 | MCP 5개 연동, Slack 봇 초대, 기본 TC 생성 | 2026-03-27 |
| STEP 2 | GitHub Actions 2개 설정, TC 74건+ | 2026-03-28 |
| STEP 3 | Playwright 8개 spec, skills 6개, docs 8개 | 2026-03-29 |
| STEP 4 | index.html 전면 업데이트 (TC 125건+, 실제 링크) | 2026-03-30 |
| STEP 5 | POM helpers, signup/notification spec, portfolio-summary, mcp-setup-guide | 2026-03-30 |
| STEP 6 | testcase_payment/signup/cross-browser, skills/performance/mobile/bug-reporting | 2026-03-30 |
| STEP 7 | docs/ai-qa-vision, jira-mcp-plan, qa-onboarding, README 전면 업데이트 | 2026-03-30 |
| STEP 8 | testcase_regression 20건 전면 보강, screenshots/PROOF.md, weekly-report 템플릿 | 2026-03-30 |
| STEP 9 | mcp-portfolio.spec.js 강화 (포트폴리오 실제 E2E), cover-letter.md | 2026-03-30 |
| STEP 13 | index.html 숫자 업데이트: spec 11→12, TC 150→145, 파일 50+→80+ | 2026-03-31 |
| STEP 13-B | 두플 태그 "MCP 자동화 도입" 삭제 확인 | 2026-03-31 |
| STEP 14 | docs/linkedin-post.md TC 수치 최신화 (145건+, 12 spec) | 2026-03-31 |
| STEP 14-B | docs/cover-letter.md 오타 수정 + 수치 145건+ 반영 | 2026-03-31 |
| STEP 15 | docs/interview-qa.md 수치 최신화 (TC 30→145건+, spec 4→12개, Actions 2개) | 2026-03-31 |

---

## 🎯 다음 스텝 (우선순위 순)

### STEP 16 — interview-qa-advanced.md 수치 점검 [바로 시작]

```
확인 방법:
  github:get_file_contents(path="docs/interview-qa-advanced.md")

확인 항목:
  - "11개 spec" → "12개 spec"으로 수정 필요 여부
  - "125건" 또는 "150건" → "145건+"로 수정 필요 여부
  - 오래된 숫자 모두 찾아서 한 번에 수정

완료 후 NEXT_STEPS.md 업데이트 필수
```

### STEP 10 — 스크린샷 실제 추가 [임팩트 최대 — 직접 해야 함]

```
현재: screenshots/PROOF.md에 가이드 작성됨, 실제 PNG 없음
방법:
  1. Slack 새-채널 알림 화면 스크린샷 → PNG로 저장
  2. GitHub Actions qa-notify.yml 성공 화면 스크린샷
  3. Notion TC 페이지 스크린샷
  → 이미지 파일을 채팅창에 올려주면 Claude가 커밋 가능

★ 이게 포트폴리오에서 "실제로 됐다"를 증명하는 핵심 자료
```

### STEP 11 — PHASE 2: Jira MCP 연동

```
docs/jira-mcp-plan.md 참고
1. Jira Cloud 무료 계정 생성: https://www.atlassian.com/software/jira
2. API 토큰 발급: https://id.atlassian.com/manage-profile/security/api-tokens
3. claude_desktop_config.json에 jira MCP 추가
4. 테스트: "이번 주 QA 이슈 목록 보여줘"
→ 완료 시 index.html 로드맵 PHASE 2 완료로 표시
```

### STEP 12 — 포트폴리오 공개 공유

```
1. LinkedIn 게시: docs/linkedin-post.md의 버전 1~4 중 선택 (수치 최신화 완료)
2. 이력서에 포트폴리오 링크 추가: https://kihyunqa.github.io/qa-portfolio
3. 커버레터: docs/cover-letter.md 활용 (오타 수정 완료)
4. 면접 준비: docs/interview-qa.md (수치 최신화 완료) + docs/interview-qa-advanced.md
```

---

## ⚠️ 작업 시 반드시 지켜야 할 규칙

1. **workflows 파일(.github/workflows/*.yml)은 MCP로 수정 불가** — GitHub 웹에서만
2. **index.html은 58KB — MCP API 한도 초과 가능** → 작은 파일부터 처리
3. **숫자 부풀리기 금지** — 실제 파일 수 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — 스텝 완료 후 SHA 확인 후 업데이트
6. **토큰 효율**: 한 대화에서 할 수 있는 양만 처리, 나머지는 인수인계

---

## 🔑 새 대화 시작 시 Claude 실행 순서

```
# 1단계: 이 문서 읽기
github:get_file_contents(owner="kihyunqa", repo="qa-portfolio", path="NEXT_STEPS.md")

# 2단계: 다음 스텝 파일 확인 (현재는 STEP 16)
github:get_file_contents(owner="kihyunqa", repo="qa-portfolio", path="docs/interview-qa-advanced.md")

# 3단계: 수치 확인 후 수정 → NEXT_STEPS.md 업데이트
```

---

## 📞 빠른 링크 모음

| 항목 | URL |
|------|-----|
| 포트폴리오 사이트 | https://kihyunqa.github.io/qa-portfolio |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| Actions 탭 | https://github.com/kihyunqa/qa-portfolio/actions |
| screenshots 폴더 | https://github.com/kihyunqa/qa-portfolio/tree/main/screenshots |
| Slack 채널 | 새-채널 (channel-id: C0AQFJXC800) |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-03-31 · STEP 15 완료 · 다음: STEP 16 (interview-qa-advanced.md 수치 점검)*
