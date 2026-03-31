# 👋 QA 온보딩 가이드

> 새 QA 팀원에게 공유하는 온보딩 문서 템플릿  
> **이 포트폴리오는 Claude MCP 5개 연동 환경 기준으로 작성되어 있습니다.**

---

## Day 1 — 환경 세팅

### 기본 도구
- [ ] 재현 환경 URL 복사 및 접속 확인
- [ ] 테스트 계정 생성 (QA 전용 계정 별도 사용)
- [ ] Notion 배포란/TC 허브 페이지 접근 권한 확인
- [ ] Slack `#qa-팀` 채널 입장 및 봇 알림 테스트
- [ ] GitHub 레포 `kihyunqa/qa-portfolio` Clone

### Claude MCP 세팅
- [ ] Claude Desktop 설치 (https://claude.ai/download)
- [ ] `docs/mcp-setup-guide.md` 읽기
- [ ] `claude_desktop_config.json` 에 MCP 5개 설정 추가
  - filesystem / github / playwright / notion / slack
- [ ] Claude Desktop 재시작 후 MCP 도구 5개 노출 확인
- [ ] 간단한 테스트: `"GitHub 레포 파일 목록 보여줘"` → github MCP 응답 확인

---

## Day 2–3 — 레포지토리 파악

- [ ] `README.md` 읽기 — 전체 구조 파악
- [ ] 폴더 구조 이해
  ```
  testcase_*.md     → TC 문서 16개 (로그인/결제/API/E2E 등)
  playwright-tests/ → 자동화 spec 12개
  docs/             → 전략·가이드·템플릿 25개
  skills/           → MCP 활용 스킬 문서 9개
  screenshots/      → 실제 연동 증거 스크린샷
  .github/workflows → GitHub Actions 2개
  ```
- [ ] `CHANGELOG.md` 로 v1~v17 히스토리 파악
- [ ] `testcase_login.md` 부터 TC 구조 이해

---

## Week 1 — 첫 번째 테스트 실행

### 수동 테스트
- [ ] `testcase_login.md` 기준으로 로그인 시나리오 1회 수동 실행
- [ ] 버그 발견 시 `docs/bug-report-template.md` 양식으로 리포트 작성
- [ ] Notion TC 허브 페이지에 결과 업데이트

### Playwright 자동화
- [ ] Node.js 설치 확인 (`node -v`)
- [ ] 의존성 설치: `npm install`
- [ ] Playwright 브라우저 설치: `npx playwright install`
- [ ] 전체 spec 실행: `npx playwright test`
- [ ] 결과 리포트 확인: `npx playwright show-report`

### MCP 파이프라인 체험
- [ ] Claude에게 `"testcase_signup.md 내용 요약해줘"` → filesystem MCP 확인
- [ ] Claude에게 `"레포에 새 파일 하나 커밋해줘"` → github MCP 확인
- [ ] Slack `새-채널` 에서 GitHub Actions 알림 수신 확인

---

## Week 2 — 실전 기여

- [ ] 새 TC 1개 직접 작성 후 `testcase_*.md` 형식으로 저장
- [ ] Claude MCP로 TC → GitHub 자동 커밋 → Slack 알림 흐름 1회 직접 실행
- [ ] `docs/qa-strategy.md` 읽고 팀 QA 방향 파악
- [ ] `docs/regression-checklist.md` 기준으로 릴리스 전 체크리스트 1회 실행

---

## 주요 참고 문서

| 문서 | 설명 |
|------|------|
| `docs/mcp-setup-guide.md` | MCP 5개 설치·설정 전체 가이드 |
| `docs/bug-report-template.md` | 버그 리포트 표준 양식 |
| `docs/qa-strategy.md` | QA 전략 및 방향성 |
| `docs/regression-checklist.md` | 릴리스 전 회귀 체크리스트 |
| `docs/test-metrics.md` | KPI 및 측정 지표 |
| `docs/mcp-workflow-diagram.md` | MCP 자동화 흐름 다이어그램 |
| `docs/interview-qa.md` | QA 면접 Q&A 12문항 (팀 내 지식 공유용) |
| `docs/ai-qa-vision.md` | AI+QA 비전 — 2026 트렌드 반영 |

---

## MCP 5개 역할 요약

| MCP | 주요 역할 |
|-----|-----------|
| filesystem | TC 파일 로컬 읽기/쓰기 |
| github | 파일 커밋, 레포 조회 |
| playwright | 브라우저 E2E 자동 실행 |
| notion | TC 결과 자동 문서화 |
| slack | QA 완료 알림 자동 발송 |

*수치 기준: 2026-03-31 (TC 145건+, Playwright 12 spec, testcase 16개, docs 25개, MCP 5개)*
