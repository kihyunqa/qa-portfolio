# 🔧 Claude MCP 세팅 가이드

> 이 포트폴리오에서 사용한 MCP 5개 설정 방법 전체 가이드
> 실제 적용 완료 기준으로 작성됨

---

## 1. Claude Desktop 설치

```bash
# https://claude.ai/download 에서 다운로드
# 설치 후 claude_desktop_config.json 편집
```

**파일 위치:**
- Windows: `C:\Users\{user}\AppData\Roaming\Claude\claude_desktop_config.json`
- Mac: `~/Library/Application Support/Claude/claude_desktop_config.json`

---

## 2. MCP 설정 파일 (전체)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/your/path"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token_here"
      }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp@latest"]
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-notion"],
      "env": {
        "NOTION_API_KEY": "secret_your_notion_key_here"
      }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "xoxb-your-slack-token-here",
        "SLACK_TEAM_ID": "your-team-id"
      }
    }
  }
}
```

> ⚠️ 설정 파일 수정 후 반드시 Claude Desktop 완전 종료(Quit) 후 재시작 필요
> X 버튼이 아닌 트레이 아이콘 우클릭 → Quit 사용

---

## 3. 도구별 토큰 발급 방법

### GitHub Token
1. https://github.com/settings/tokens 접속
2. `Generate new token (classic)` 클릭
3. 스코프 체크: `repo`, `workflow`, `read:org`
4. 생성된 토큰 복사 (ghp_로 시작)

### Notion Token
1. https://www.notion.so/my-integrations 접속
2. `New integration` 생성 (이름: claude-mcp)
3. Internal Integration Token 복사
4. 연동할 Notion 페이지에서 `...` → `연결` → claude-mcp 선택

### Slack Token
1. https://api.slack.com/apps 접속
2. `Create New App` → From scratch
3. OAuth & Permissions → Scopes 추가:
   - `chat:write`, `channels:read`, `channels:history`
4. `Install to Workspace` → Bot User OAuth Token 복사
5. 알림 받을 채널에서 `/invite @봇이름` 실행

---

## 4. MCP별 연동 확인 테스트

Claude Desktop 재시작 후 각 MCP 동작 확인:

```
# filesystem 확인
"C:/qa-portfolio 폴더에 있는 파일 목록 보여줘"
→ 파일 목록이 뜨면 ✅

# github 확인
"kihyunqa/qa-portfolio 레포의 README.md 읽어줘"
→ 파일 내용이 뜨면 ✅

# playwright 확인
"google.com 열어줘"
→ 브라우저가 열리면 ✅

# notion 확인
"내 Notion 페이지 목록 보여줘"
→ 페이지 목록이 뜨면 ✅

# slack 확인
"새-채널에 '테스트' 메시지 보내줘"
→ 채널에 메시지가 오면 ✅
```

---

## 5. 문제 해결 (Troubleshooting)

| 오류 | 원인 | 해결 |
|------|------|------|
| MCP 도구 안 보임 | 재시작 필요 | Claude Desktop Quit 후 재시작 |
| GitHub 권한 오류 | 토큰 스코프 부족 | `workflow` 스코프 추가 후 재발급 |
| Slack 전송 실패 | 봇 초대 안 됨 | 채널에서 `/invite @봇이름` 실행 |
| Notion 권한 없음 | Integration 미연결 | 페이지에서 `연결` → claude-mcp 선택 |
| playwright 실행 안됨 | 브라우저 미설치 | `npx playwright install` 실행 |

---

## 6. PHASE 2 — Jira MCP 추가 예정

```json
"jira": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-jira"],
  "env": {
    "JIRA_HOST": "https://your-domain.atlassian.net",
    "JIRA_EMAIL": "your@email.com",
    "JIRA_API_TOKEN": "your-jira-api-token"
  }
}
```

> Jira API 토큰 발급: https://id.atlassian.com/manage-profile/security/api-tokens

---

*이 가이드는 실제 연동 완료된 환경 기준으로 작성됨 (2026-03-31)*
