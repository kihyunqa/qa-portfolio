# ⚙️ CI/CD Pipeline Skills

> QA Engineer - kihyunqa | CI/CD 연동 역량 증명

---

## 1. GitHub Actions 파이프라인 설계

### 현재 운영 중인 Workflow

```yaml
# .github/workflows/main.yml
name: QA Auto Notify
on:
  push:
    paths:
      - 'testcase_*.md'
      - 'playwright-tests/**'
      - 'test-cases/**'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: "\ud83d\udccb TC \uc5c5\ub370\uc774\ud2b8: ${{ github.event.head_commit.message }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

---

## 2. 파이프라인 아키텍처

```
포트폴리오 자동화 파이프라인

┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│  Claude  │→│  GitHub  │→│  Actions │→│  Slack   │
│  (MCP)   │  │  Commit  │  │  Trigger │  │  Notify  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
        ↓                                           ↑
  filesystem MCP                              claude-mcp bot
  (TC 저장)                                   (#새-삼너)
```

---

## 3. Secrets 관리

| Secret 이름 | 용도 | 위치 |
|------------|------|------|
| SLACK_BOT_TOKEN | Slack 알림 발송 | GitHub Settings > Secrets |
| NOTION_TOKEN | Notion DB 업데이트 | GitHub Settings > Secrets |

---

## 4. 트리거 전략

| 이벤트 | Workflow 실행 | 대상 |
|--------|--------------|------|
| TC 파일 push | QA 알림 | Slack #새-삼널 |
| PR 오픈 | 코드 리뷰 안내 | 담당자 |
| 주간별 cron | 주간 리포트 | 팅 알림 |
