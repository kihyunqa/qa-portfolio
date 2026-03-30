# 🔔 QA 자동 알림 워크플로우 가이드

> GitHub Actions + Slack MCP 연동으로 TC 파일 변경 시 자동 알림 발송  
> **실제 작동 확인 완료 ✅ — 2026-03-31**

---

## 전체 흐름

```
testcase_*.md 파일 커밋/push
    ↓
GitHub Actions qa-notify.yml 트리거
    ↓
Slack 새-채널 (C0AQFJXC800) 자동 알림 발송
    ↓
팀이 실시간으로 TC 업데이트 확인
```

---

## qa-notify.yml 전체 코드

`.github/workflows/qa-notify.yml` 경로에 저장:

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
      - name: Checkout
        uses: actions/checkout@v4

      - name: Notify Slack
        uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: |
            📋 *TC 파일 업데이트 감지!*
            레포: `${{ github.repository }}`
            브랜치: `${{ github.ref_name }}`
            커밋: ${{ github.event.head_commit.message }}
            작성자: ${{ github.event.head_commit.author.name }}
            🔗 ${{ github.event.head_commit.url }}
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

---

## 설정 방법

### 1. Slack Bot Token 등록
1. GitHub 레포 → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** 클릭
3. Name: `SLACK_BOT_TOKEN` / Value: `xoxb-...` 토큰 붙여넣기

### 2. Slack 채널 ID 확인
- Slack 채널 우클릭 → "채널 세부정보 보기" → 하단 채널 ID 복사
- 현재 포트폴리오: `C0AQFJXC800` (새-채널)

### 3. 봇 채널 초대
```
/invite @봇이름
```
→ 봇이 해당 채널에 없으면 메시지 전송 실패

### 4. 워크플로우 파일 저장
- 파일 경로: `.github/workflows/qa-notify.yml`
- ⚠️ workflows 파일은 MCP로 수정 불가 — GitHub 웹에서만 편집

---

## 트리거 조건

| 조건 | 동작 |
|------|------|
| `testcase_*.md` 파일 push | ✅ 알림 발송 |
| 다른 파일 push | ❌ 트리거 안 됨 |
| PR merge (testcase 포함) | ✅ 알림 발송 |

---

## 실제 알림 메시지 예시

```
📋 TC 파일 업데이트 감지!
레포: kihyunqa/qa-portfolio
브랜치: main
커밋: docs: testcase_login.md 케이스 3건 추가
작성자: kihyunqa
🔗 https://github.com/kihyunqa/qa-portfolio/commit/abc123
```

---

## 트러블슈팅

| 증상 | 원인 | 해결 |
|------|------|------|
| Actions 실행은 되는데 알림 없음 | 봇이 채널에 없음 | `/invite @봇이름` |
| SLACK_BOT_TOKEN 오류 | 시크릿 미등록 | Settings → Secrets 확인 |
| 워크플로우 미트리거 | 파일명 패턴 불일치 | `testcase_*.md` 패턴 확인 |
| 권한 오류 | 봇 스코프 부족 | `chat:write` 스코프 추가 |

*Actions 탭: https://github.com/kihyunqa/qa-portfolio/actions*
