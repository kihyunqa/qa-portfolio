# E2E Scenario: MCP 알림 플로우 (Notification Flow)

## 시나리오 개요

- **시나리오 ID**: E2E-005
- **제목**: MCP → GitHub Actions → Slack 전체 알림 파이프라인
- **MCP 도구**: github MCP + slack MCP
- **작성일**: 2026-03-30

## 테스트 단계

```gherkin
Feature: MCP 알림 자동화 파이프라인

  Scenario: TC 파일 push → Actions 트리거 → Slack 알림
    Given testcase_*.md 파일이 main 브랜치에 push된다
    When GitHub Actions qa-notify.yml 워크플로우가 트리거된다
    Then Slack 새-채널에 알림 메시지가 발송된다
    And 메시지에 커밋 메시지가 포함된다

  Scenario: Claude MCP로 직접 Slack 알림 발송
    Given Claude Desktop에 slack MCP가 연결되어 있다
    When "QA 완료 알림 보내줘" 명령을 입력한다
    Then 새-채널에 QA 완료 메시지가 수신된다
    And 메시지 형식이 정해진 포맷과 일치한다
```

## 현재 테스트 결과

| 단계 | 상태 | 비고 |
|------|------|------|
| GitHub Actions 트리거 | ✅ Pass | qa-notify.yml 정상 동작 |
| Slack 메시지 수신 | ✅ Pass | 실제 새-채널 확인 |
| 메시지 포맷 검증 | ✅ Pass | |
| 직접 MCP 알림 | ✅ Pass | claude-mcp 봇 연동 |
