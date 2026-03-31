# 🌐 MCP Architecture 문서

> QA 자동화 파이프라인 아키텍처 설명
> 실제 구현 완료 기준으로 작성됨 (2026-03-31)

---

## 1. MCP 5개 연동 구조

```
┌──────────────────────────────────────────────────┐
│                 Claude Desktop                    │
│       (사용자 대화 → MCP 오케스트레이션)              │
│       claude_desktop_config.json 설정 기반         │
└───────────────┬──────────────────────────────────┘
                │
       ┌────────┴────────┐
       │  MCP Server Layer  │
       │  (5개 서버 활성화)  │
       └────────┬────────┘
                │
   ┌────────────┼──────────────────┐
   │            │                  │
   ▼            ▼                  ▼
📂 filesystem  🐙 github       🎭 playwright
로컬 파일 R/W   커밋/PR/Actions   브라우저 직접 조작
   │            │                  │
   │        Actions             spec 12개
   │        트리거               실행 가능
   │            │
   │     ┌──────┴──────┐
   │     ▼             ▼
   │  💬 Slack      📝 Notion
   │  새-채널 알림    TC DB 저장
   │  실제 수신 확인   페이지 자동생성
   │
   └→ TC 145건+ 저장
```

---

## 2. QA 자동화 플로우 (실제 적용)

```
1. 사용자가 Claude에 명세 입력
         ↓
2. Claude가 TC 자동 생성 (해피패스·네거티브·엣지케이스)
         ↓
3. filesystem MCP로 로컬 저장 (testcase_*.md)
         ↓
4. github MCP로 커밋 (kihyunqa/qa-portfolio)
         ↓
5. GitHub Actions 트리거 (qa-notify.yml)
         ↓
6. Slack #새-채널 알림 자동 발송 ← 실제 확인됨
         ↓
7. notion MCP로 TC 결과 DB 저장 ← 실제 확인됨
         ↓
8. playwright MCP로 E2E 검증 (spec 12개)
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
      "args": ["-y", "@playwright/mcp@latest"]
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-...",
        "SLACK_TEAM_ID": "T..."
      }
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

## 4. GitHub Actions 연동 구조

```
.github/workflows/
├── main.yml          ← 포트폴리오 사이트 변경 시 트리거
└── qa-notify.yml     ← TC 파일 push 시 Slack 알림

[qa-notify.yml 트리거 조건]
- testcase_*.md 변경
- test-cases/** 변경
- playwright-tests/** 변경

[알림 내용]
→ Slack 새-채널에 "QA 업데이트" 자동 메시지 발송
```

---

## 5. 이 포트폴리오가 증명하는 것

| 증명 항목 | 내용 | 확인 방법 |
|---------|------|----------|
| MCP 실제 연동 | 5개 서버 활성화 | 터미널 로그 확인 |
| Playwright 코드 | spec 12개, 실행 가능한 실제 코드 | playwright-tests/ 폴더 |
| GitHub Actions | TC push → Slack 알림 자동 동작 | Actions 탭 run 기록 |
| Slack 봇 | #새-채널 메시지 발송 성공 | 채널 메시지 이력 |
| Notion 연동 | TC 결과 페이지 자동 생성 | Notion 페이지 확인 |
| 전체 파일 | 80개+ 파일, 전부 MCP로만 생성 | 커밋 히스토리 |

---

## 6. 확장 계획 (PHASE 2)

```
현재 (PHASE 1)
Claude Desktop
  └→ 5 MCP (filesystem·github·playwright·notion·slack)

PHASE 2 추가 예정
Claude Desktop
  └→ 5 MCP (현재)
  └→ Jira MCP (버그 티켓 자동 생성)
  └→ Calendar MCP (릴리스 QA 일정)
  └→ Gmail MCP (이해관계자 리포트)
```

---

*성기현 QA Engineer · Claude MCP 실제 연동 5개 완료 · 2026-03-31*
