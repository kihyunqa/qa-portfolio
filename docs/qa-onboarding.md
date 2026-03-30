# 👋 QA 온보딩 가이드

> 새 QA 팀원에게 공유하는 온보딩 문서 템플릿

---

## Day 1 — 환경 세팅

- [ ] 재현 환경 URL 복사 및 접속 확인
- [ ] 테스트 계정 생성 (QA 전용)
- [ ] Jira/Notion 배포란 접근
- [ ] Slack #qa-팀 입장
- [ ] Claude Desktop + MCP 세팅 (docs/mcp-setup-guide.md 참교)

## Day 2–3 — 레포지토리 파악

- [ ] README.md 읽기
- [ ] 레포 폴더 구조 이해 (testcase_* / playwright-tests / docs)
- [ ] 기존 TC 파일 검토 (testcase_login.md 부터)
- [ ] CHANGELOG.md 로 이전 히스토리 파악

## Week 1 — 첫 번째 테스트

- [ ] 로그인 테스트 실행 (testcase_login.md 기준)
- [ ] Playwright 실행: `npx playwright test`
- [ ] 버그 하나 발견 후 표준 양식으로 리포트 작성
- [ ] Slack 알림 수동 전송 확인

## 참고 문서

- `docs/mcp-setup-guide.md` — MCP 설치 가이드
- `docs/bug-report-template.md` — 버그 리포트 양식
- `docs/qa-strategy.md` — QA 전략 문서
- `docs/regression-checklist.md` — 릴리스 체크리스트
