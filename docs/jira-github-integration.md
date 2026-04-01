# 📋 STEP 11 — Jira + GitHub 연동

> 완료 일자: 2026-04-01

## ✅ 연동 결과

| 항목 | 내용 | 상태 |
|------|------|------|
| Jira 프로젝트 | QA Portfolio | ✅ |
| GitHub 앱 | GitHub for Atlassian | ✅ 설치 완료 |
| 연결 계정 | kihyunqa | ✅ |
| 저장소 | qa-portfolio (All repos) | ✅ |
| Permissions | FULL ACCESS | ✅ |
| Backfill status | IN PROGRESS → Complete | ✅ |

## 활용 방법

커밋 메시지에 Jira 이슈 키를 포함하면 자동 연결됨:

```
fix: 로그인 TC 수정 [QAP-1]
```

→ Jira QAP-1 이슈에서 GitHub 커밋 이력 자동 표시

## 연동 흐름

```
GitHub Push
    ↓
qa-notify.yml (GitHub Actions)
    ↓
Slack 알림 (#새-채널)
    +
Jira 이슈 연동 (Backfill)
```
