# 🔧 Claude MCP 세팅 가이드

> 이 포트폴리오에서 사용한 MCP 5개 설정 방법 전체 가이드

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

---

## 3. 도구별 토큰 발급 방법

### GitHub Token
1. https://github.com/settings/tokens 접속
2. `Generate new token (classic)` 클릭
3. 스코프 체크: `repo`, `workflow`, `read:org`
4. 생성된 토큰 복사

### Notion Token
1. https://www.notion.so/my-integrations 접속
2. `New integration` 생성
3. Internal Integration Token 복사
4. 연동할 Notion 페이지에 Integration 추가

### Slack Token
1. https://api.slack.com/apps 접속
2. `Create New App` → From scratch
3. OAuth & Permissions → Scopes 추가:
   - `chat:write`, `channels:read`, `channels:history`
4. `Install to Workspace` → Bot User OAuth Token 복사

---

## 4. 연동 확인

Claude Desktop 재시작 후:

```
사용자: "GitHub 레포 목록 보여줘"
Claude: [github MCP 통합 사용함] ...
✅ 연동 성공!
```

---

## 5. 문제 해결

| 오류 | 원인 | 해결 |
|------|------|------|
| MCP 도구 안 보임 | 재시작 필요 | Claude Desktop 종료 후 재시작 |
| GitHub 권한 오류 | 토큰 스코프 부족 | `workflow` 스코프 추가 |
| Slack 전송 실패 | 봇 초대 안 됨 | 해당 채널에 `/invite @봇이름` |
| Notion 권한 없음 | Integration 미연결 | 페이지에서 연동 추가 필요 |
