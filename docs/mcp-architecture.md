# 🌐 MCP Architecture 문서

> QA 자동화 파이프라인 아키텍처 설명

---

## 1. MCP 5개 연동 구조

```
┌────────────────────────────────────────────┐
│              Claude Desktop                   │
│   (사용자 대화 → MCP 오케스트레이션)              │
└────────────┬──────────────────────────────┘
             │
    ┌────────┴────────┐
    │  MCP Server Layer  │
    └────────┬────────┘
             │
   ┌───────┼────────────────┐
   │         │                │
⬇         ⬇                ⬇
📂 filesystem 🐙 github  🎭 playwright
   │         │                │
   │         │          ┌────┴────┐
   │     commit            │E2E브라우저│
   │         │          └─────────┘
   │         │
⬇ Actions   ⬇ Webhook
💬 Slack   📝 Notion
  #새-채널    TC DB
```

---

## 2. QA 자동화 플로우

```
1. 사용자가 Claude에 명세 입력
         ↓
2. Claude가 TC 자동 생성
         ↓
3. filesystem MCP로 로컬 저장
         ↓
4. github MCP로 커밋 & PR
         ↓
5. GitHub Actions 트리거
         ↓
6. Slack #새-채널 알림 자동 발송
         ↓
7. notion MCP로 TC 결과 DB 저장
         ↓
8. playwright MCP로 E2E 검증
```

---

## 3. claude_desktop_config.json 구조

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..." }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": { "SLACK_BOT_TOKEN": "xoxb-..." }
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-notion"],
      "env": { "NOTION_API_KEY": "secret_..." }
    }
  }
}
```

---

## 4. 이 포트폴리오가 증명하는 것

| 증명 항목 | 내용 |
|---------|------|
| MCP 실제 연동 | 5개 서버 활성화 확인 |
| Playwright 코드 | 12개 스펙, 145건+ TC 실제 실행 가능 |
| GitHub Actions | TC push → Slack 알림 자동 동작 확인 |
| Slack 봇 | #새-채널 메시지 발송 성공 확인 |
| skills/ 폴더 | 역량 문서 9종 작성 |
