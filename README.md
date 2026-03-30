<div align="center">

# 성기현 · QA Engineer Portfolio

[![Portfolio](https://img.shields.io/badge/포트폴리오_보기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-kihyunqa-181717?style=for-the-badge&logo=github)](https://github.com/kihyunqa)
[![Email](https://img.shields.io/badge/Email-kihyun.qa@gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kihyun.qa@gmail.com)

**6년 9개월 QA 경력 위에 Claude MCP 자동화를 더했습니다.**  
TC 생성부터 Notion 문서화, Slack 알림, GitHub 자동 배포까지  
**전부 대화만으로 구축했습니다.**

</div>

---

## 핵심 수치

<div align="center">

| 항목 | 수치 | 설명 |
|------|------|------|
| 자동 생성된 TC | **210건+** | 14개 파일 누적 |
| 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 연동된 MCP 서버 | **5개** | 실제 연동 완료 |
| Playwright spec | **13개** | 실제 실행 가능 코드 |
| GitHub Actions | **운영 중** | TC 업로드 → Slack 알림 |
| QA 경력 | **6년 9개월** | 2017 — 현재 |

</div>

---

## 연동된 MCP 서버 (5개 · 실제 연동 완료)

| MCP 서버 | 역할 | 상태 |
|----------|------|------|
| `filesystem` | 로칼 파일 읽기/쓰기, TC 저장 | ✅ |
| `playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ |
| `github` | 레포 커밋, 파일 업로드, Actions | ✅ |
| `notion` | TC 결과 자동 문서화 | ✅ |
| `slack` | QA 완료 알림 자동 발송 | ✅ |

---

## QA 자동화 파이프라인

```
기능 명세 입력
     ↓
[Claude Desktop + 5 MCP servers]
     ↓
TC 생성 → filesystem 저장 → github 커밋
     ↓
playwright E2E 테스트 실행
     ↓
notion 페이지 자동 문서화
     ↓
slack 새-채널 QA 완료 알림 발송
     ↓
GitHub Actions → TC 업로드 감지 → Slack 자동 통보
     ↓
완료 (코드 0줄)
```

---

## GitHub Actions: QA Auto Notify

```yaml
# .github/workflows/qa-notify.yml
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
          slack-message: "TC 업데이트: ${{ github.event.head_commit.message }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

---

## 경력 요약

| 기간 | 회사 | 직책 | 주요 성과 |
|------|------|------|----------|
| 2024.11–2025.02 | 두플 | QA Part Leader | TC 설계, MCP 자동화 도입, 팀 리딩 |
| 2022.03–2024.02 | IMS Mobility | QA 대리 | Cypress E2E, API QA, 결제 QA |
| 2017.09–2022.01 | 모비프렌 (삼성 파트너) | QA 주임 | SmartThings, Bixby, 삼성 모바일 QA |

---

## 레포 전체 구조

```
qa-portfolio/
├── .github/workflows/qa-notify.yml       # Actions: TC push → Slack 알림
├── index.html                             # 포트폴리오 메인 페이지
├── README.md / PROFILE.md / CHANGELOG.md
├── testcase_login.md                      # 로그인 TC 20건
├── testcase_mcp-integration.md            # MCP 5개 통합 TC 30건
├── testcase_e2e-playwright.md             # E2E 시나리오 TC
├── testcase_api-testing.md               # API TC 20건
├── testcase_bug-report.md                # 버그 리포트 TC
├── testcase_performance.md               # 성능 TC
├── testcase_security.md                  # 보안 TC
├── testcase_accessibility.md             # 접근성 TC
├── testcase_regression.md               # 회귀 TC
├── testcase_mobile.md                    # 모바일 TC
├── testcase_notification.md              # Slack 알림 TC 20건 ← NEW
├── testcase_cicd.md                      # CI/CD 파이프라인 TC 20건 ← NEW
├── testcase_notion.md                    # Notion 연동 TC 20건 ← NEW
├── playwright-tests/
│   ├── login.spec.js / search.spec.js / cart.spec.js
│   ├── api.spec.js / performance.spec.js / accessibility.spec.js
│   ├── payment.spec.js / security.spec.js / signup.spec.js
│   ├── notification.spec.js ← NEW
│   ├── mcp-portfolio.spec.js ← NEW
│   ├── helpers/ (page-objects.js)
│   └── playwright.config.js
├── e2e-scenarios/
│   ├── login-flow.md / payment-flow.md / search-flow.md
│   ├── signup-flow.md / checkout-flow.md
│   ├── mobile-flow.md / accessibility-flow.md
├── test-cases/
│   ├── tc-auth.md / tc-cart.md / tc-search-api.md
├── skills/
│   ├── manual-testing.md / automation-tools.md / api-testing.md
│   ├── ci-cd-pipeline.md / qa-automation.md / test-strategy.md
│   └── mcp-integration.md
├── docs/
│   ├── interview-qa.md / interview-qa-advanced.md
│   ├── linkedin-post.md / portfolio-summary.md ← NEW
│   ├── cover-letter.md ← NEW
│   ├── test-metrics.md / bug-report-template.md / qa-strategy.md
│   ├── mcp-architecture.md / mcp-workflow-diagram.md
│   └── qa-checklist.md / qa-kpi-dashboard.md
└── screenshots/README.md
```

---

## MCP 설정 가이드

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

*Built with Claude MCP · No code written · 5 MCP servers · 210건+ TC 자동 생성*

[![포트폴리오 바로가기](https://img.shields.io/badge/포트폴리오_바로가기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)

</div>
