# 📋 Jira MCP 연동 계획 (PHASE 2)

> Claude MCP 자동 생성 | 2026-03-30

## 목표

Jira MCP를 연동하면 QA 파이프라인이 완성됩니다:

```
Claude → Playwright (E2E 실행)
       → GitHub (TC 커밋)
       → Notion (TC 문서화)
       → Slack (알림)
       → Jira (이습티켓 생성) ← PHASE 2
```

## 설정 방법

1. Atlassian API Token 발급
2. claude_desktop_config.json에 Jira MCP 추가
3. 테스트 실패 시 자동으로 Jira 이슈 생성 연결

## 예상 효과

- 버그 신고 시간: 수동 5분 → 자동 즉시
- TC 연계: Notion TC ↔ Jira Story 자동 매핑
- 스프린트 보고: 주간 QA 리포트 자동 생성
