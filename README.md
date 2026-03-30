<div align="center">

# 성기현 · QA Engineer Portfolio

[![Portfolio](https://img.shields.io/badge/🌐_포트폴리오_보기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-kihyunqa-181717?style=for-the-badge&logo=github)](https://github.com/kihyunqa)
[![Email](https://img.shields.io/badge/Email-kihyun.qa@gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kihyun.qa@gmail.com)

**6년 9개월 QA 경력 위에 Claude MCP 자동화를 더했습니다.**  
TC 생성부터 Notion 문서화, Slack 알림, GitHub 자동 배포까지  
**전부 대화만으로 구축했습니다.**

</div>

---

## 📊 핵심 수치

<div align="center">

| 항목 | 수치 | 설명 |
|------|------|------|
| ✅ 자동 생성된 TC | **30건** | MCP 5개 통합 테스트 |
| 💻 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 🔧 연동된 MCP 서버 | **5개** | 실제 연동 완료 |
| ⚙️ GitHub Actions | **자동화** | TC 업로드 → Slack 알림 |
| 📅 QA 경력 | **6년 9개월** | 2017 — 현재 |

</div>

---

## 🔧 연동된 MCP 서버 (5개 · 실제 연동 완료)

| MCP 서버 | 역할 | 상태 |
|----------|------|------|
| `📁 filesystem` | 로컬 파일 읽기/쓰기, TC 저장 | ✅ |
| `🎭 playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ |
| `🐙 github` | 레포 커밋, 파일 업로드, Actions | ✅ |
| `📒 notion` | TC 결과 자동 문서화 | ✅ |
| `💬 slack` | QA 완료 알림 자동 발송 | ✅ |

---

## 🚀 풀 QA 자동화 파이프라인

```
기능 명세 입력
     ↓
[Claude Desktop + 5 MCP servers]
     ↓
TC 생성 (30건) → filesystem 저장 → github 커밋
     ↓
playwright E2E 브라우저 테스트 실행
     ↓
notion 페이지 자동 문서화
     ↓
slack 채널 QA 완료 알림 발송
     ↓
GitHub Actions → TC 업로드 감지 → Slack 자동 통보
     ↓
완료 🎉 (코드 0줄)
```

---

## ⚙️ GitHub Actions: QA Auto Notify

```yaml
# .github/workflows/qa-notify.yml
# testcase_*.md 업로드 시 Slack 자동 알림
name: QA Auto Notify
on:
  push:
    paths:
      - 'testcase_*.md'
      - 'test-cases/**'
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: "📋 TC 업데이트: ${{ github.event.head_commit.message }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

> 🔑 설정: GitHub 레포 Settings → Secrets → `SLACK_BOT_TOKEN` 추가 필요

---

## 🏅 경력 요약

| 기간 | 회사 | 직책 | 주요 성과 |
|------|------|------|-----------|
| 2024.11–2025.02 | 두플 | QA Part Leader | 반도체 공정 시뮬레이션 QA 리드, TC 설계, 팀 리딩 |
| 2022.03–2024.02 | IMS Mobility | QA 대리 | Cypress E2E 자동화, 결제 QA |
| 2017.09–2022.01 | 모비프렌 (삼성 파트너) | QA 주임 | SmartThings·Bixby 글로벌 QA |

---

## 📁 레포 구조

```
qa-portfolio/
├── .github/
│   └── workflows/
│       └── qa-notify.yml          # TC 업로드 → Slack 자동 알림
├── index.html                     # 포트폴리오 메인 페이지
├── README.md                      # 이 파일
├── PROFILE.md                     # 이력서
├── testcase_login.md              # 로그인 TC
├── testcase_mcp-integration.md    # MCP 5개 통합 TC 30건 ← NEW
├── testcase_e2e-playwright.md     # E2E 브라우저 시나리오 ← NEW
├── qa-automation-report.md        # QA 자동화 리포트
├── test-cases/
│   ├── tc-auth.md
│   ├── tc-cart.md
│   └── tc-search-api.md
├── e2e-scenarios/
│   └── login-flow.md
└── docs/
    ├── linkedin-post.md
    └── qa-notify-workflow.md
```

---

## ⚙️ MCP 설정 가이드

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:/qa-portfolio"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_TOKEN": "your_token" }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    },
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": { "NOTION_API_KEY": "your_token" }
    },
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": {
        "SLACK_BOT_TOKEN": "your_token",
        "SLACK_TEAM_ID": "your_team_id"
      }
    }
  }
}
```

---

<div align="center">

*Built with Claude MCP · No code written · 5 MCP servers · TC 30건 자동 생성*

[![포트폴리오 바로가기](https://img.shields.io/badge/🚀_포트폴리오_바로가기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)

</div>
