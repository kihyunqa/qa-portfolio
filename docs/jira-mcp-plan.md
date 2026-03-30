# 📋 Jira MCP 연동 계획

> PHASE 2 로드맵 | Claude MCP 자동 생성 | 2026-03-30

## 목표

Jira MCP를 추가 연동해 **버그 리포트 자동 생성 → Jira 이슈 자동 등록** 파이프라인을 구축합니다.

## 단계별 쪽마에 화면

**PHASE 1 (\uc644\ub8cc):**
- filesystem, playwright, github, notion, slack MCP 5개 연동
- TC 140건 Notion 자동 업로드
- GitHub Actions CI/CD 자동화

**PHASE 2 (\ub2e4\uc74c):**
- Jira MCP 연동
- Playwright 실패 TC → Jira 버그 자동 등록
- Jira 스프린트 관리

**PHASE 3 (\ubbf8\ub798):**
- Calendar MCP 연동 → QA 스케줄 자동 관리
- Gmail MCP → 테스트 리포트 자동 이메일 발송

## Jira MCP 설치 방법

1. https://developer.atlassian.com/console/myapps/ 접속
2. API Token 발급
3. claude_desktop_config.json에 jira MCP 추가
4. Claude Desktop 재시작
