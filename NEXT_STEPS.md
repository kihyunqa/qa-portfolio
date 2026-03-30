# 🤖 다음 Claude를 위한 인수인계 문서

> **이 문서를 읽는 Claude에게**: 새 대화 시작 시 아래 명령어로 이 문서를 읽고 이어서 작업하세요.
>
> ```
> kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘
> ```
>
> - 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> - 포트폴리오: https://kihyunqa.github.io/qa-portfolio
> - GitHub: https://github.com/kihyunqa/qa-portfolio

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
| STEP 13-B | 두플 태그 "MCP 자동화 도입" 삭제 확인 (이미 완료된 상태였음) | 2026-03-31 |
| STEP 14 | docs/linkedin-post.md TC 수치 30→145건+ 업데이트 (4개 버전 전부) | 2026-03-31 |
| STEP 14-B | docs/cover-letter.md 오타 수정 ("답명동안"→"동안" 등) + 수치 145건+ 반영 | 2026-03-31 |

---

## 🎯 다음 스텝 (우선순위 순)

### STEP 10 — 스크린샷 실제 추가 [임팩트 최대 — 직접 해야 함]

```
현재: screenshots/PROOF.md에 가이드 작성됨, 실제 PNG 없음
방법:
  1. Slack 새-채널 알림 화면 스크린샷 → PNG로 저장
  2. GitHub Actions qa-notify.yml 성공 화면 스크린샷
  3. Notion TC 페이지 스크린샷
  → GitHub 웹에서 screenshots/ 폴더에 직접 업로드
     또는 이미지 파일을 채팅창에 올려주면 Claude가 커밋

★ 이게 포트폴리오에서 "실제로 됐다"를 증명하는 핵심 자료
```

### STEP 11 — PHASE 2: Jira MCP 연동 시작

```
docs/jira-mcp-plan.md 참고
1. Jira Cloud 무료 계정 생성: https://www.atlassian.com/software/jira
2. API 토큰 발급: https://id.atlassian.com/manage-profile/security/api-tokens
3. claude_desktop_config.json에 jira MCP 추가
4. 테스트: "이번 주 QA 이슈 목록 보여줘"
→ 완료 시 로드맵 PHASE 2 완료로 표시 + index.html 업데이트
```

### STEP 12 — 포트폴리오 공개 공유

```
1. LinkedIn 게시: docs/linkedin-post.md의 버전 1~4 중 선택 (수치 최신화 완료)
2. 이력서에 포트폴리오 링크 추가: https://kihyunqa.github.io/qa-portfolio
3. 커버레터: docs/cover-letter.md 활용 (오타 수정 완료)
4. 면접 준비: docs/interview-qa.md + docs/interview-qa-advanced.md
```

### STEP 15 — interview-qa.md / interview-qa-advanced.md 수치 점검

```
현재 수치가 오래됐을 가능성 있음 (STEP 10 이전에 만들어진 파일들)
확인 필요 항목:
  - "11개 spec" 언급 → "12개 spec"으로 수정
  - "125건" 또는 "150건" 언급 → "145건+"로 수정
방법: get_file_contents로 내용 읽은 뒤 push_files로 한 번에 수정
```

---

## ⚠️ 작업 시 반드시 지켜야 할 규칙

1. **workflows 파일(.github/workflows/*.yml)은 MCP로 수정 불가** — GitHub 웹에서만
2. **index.html 수정 방법**: `create_or_update_file`로 시도 가능 (SHA 먼저 확인 필수)
3. **숫자 부풀리기 금지** — 실제 파일 수 확인 후 기재
4. **NEXT_STEPS.md 업데이트 필수** — 스텝 완료 후 이 문서 SHA 확인 후 업데이트
5. **기존 파일 업데이트 우선** — 무분별한 신규 파일 생성 지양

---

## 🔑 새 대화 시작 시 Claude가 실행할 명령어 순서

```
# 1단계: 이 문서 읽기 (항상 최신 SHA 확인)
github:get_file_contents(owner="kihyunqa", repo="qa-portfolio", path="NEXT_STEPS.md")

# 2단계: 레포 전체 현황 파악
github:get_file_contents(owner="kihyunqa", repo="qa-portfolio", path=".")

# 3단계: playwright-tests 현황 파악
github:get_file_contents(owner="kihyunqa", repo="qa-portfolio", path="playwright-tests")

# 4단계: Slack 최근 메시지 확인 (Actions 실제 작동 여부)
slack:slack_get_channel_history(channel_id="C0AQFJXC800", limit=5)
```

---

## 📞 빠른 링크 모음

| 항목 | URL |
|------|-----|
| 포트폴리오 사이트 | https://kihyunqa.github.io/qa-portfolio |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| Actions 탭 | https://github.com/kihyunqa/qa-portfolio/actions |
| playwright-tests | https://github.com/kihyunqa/qa-portfolio/tree/main/playwright-tests |
| screenshots 폴더 | https://github.com/kihyunqa/qa-portfolio/tree/main/screenshots |
| Slack 채널 | 새-채널 (channel-id: C0AQFJXC800) |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-03-31 · STEP 14까지 완료 · 다음: STEP 10 (스크린샷 PNG) / STEP 11 (Jira MCP) / STEP 15 (interview-qa 수치 점검)*
