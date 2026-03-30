# qa-notify.yml — GitHub Actions 워크플로우

아래 내용을 `.github/workflows/qa-notify.yml` 경로에 저장하면 됩니다.

```yaml
name: QA Auto Notify
on:
  push:
    paths:
      - 'testcase_*.md'
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Notify Slack
        uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: "📋 TC 파일 업데이트 감지! ${{ github.repository }} — ${{ github.event.head_commit.message }}"
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

## 설정 방법

1. GitHub 레포 → Settings → Secrets and variables → Actions
2. `SLACK_BOT_TOKEN` 시크릿 추가 (Slack Bot 토큰)
3. 위 파일을 `.github/workflows/qa-notify.yml` 경로에 저장
4. `testcase_*.md` 파일 push 시 자동으로 새-채널에 알림 발송
