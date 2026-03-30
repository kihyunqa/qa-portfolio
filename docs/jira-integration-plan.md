# 📋 Jira MCP 연동 계획 (PHASE 2)

> 다음 단계 MCP 연동 계획서 — Jira MCP로 버그 티켓 자동화

---

## 목표

QA 중 버그 발견 → Claude에게 말로 알리면 → Jira 이슈 자동 생성 + Slack 알림 + Notion 기록

---

## 예상 워크플로우

```
[QA 버그 발견]
    ↓
Claude에게 설명 (chat)
    ↓
jira MCP → 이슈 자동 생성
    ↓
slack MCP → 담당자 멘션 알림
    ↓
notion MCP → 버그 리포트 페이지 생성
```

---

## 필요한 MCP 도구

- `@modelcontextprotocol/server-jira` (또는 Atlassian MCP)
- Jira API Token
- Jira Project Key

---

## 설정 예시

```json
"jira": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-atlassian"],
  "env": {
    "ATLASSIAN_API_TOKEN": "your_jira_api_token",
    "ATLASSIAN_EMAIL": "kihyun.qa@gmail.com",
    "ATLASSIAN_DOMAIN": "yourcompany.atlassian.net"
  }
}
```

---

## 달성하면 얻는 것

- 버그 발견 → 티켓 생성 시간 0에 가까움
- 담당자 자동 할당 + 스프린트 배정
- QA 켈보드 실시간 업데이트
- SLA 자동 모니터링

**예상 완료일**: PHASE 2 시작 시 (추신 예정)
