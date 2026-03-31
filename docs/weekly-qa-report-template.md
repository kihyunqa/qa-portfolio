# 📅 주간 QA 리포트 템플릿

> 매주 금요일 Slack 새-채널에 자동 발송하는 QA 주간 리포트 양식  
> Claude + Slack MCP로 자동 생성 가능

---

## 리포트 양식 (Slack 발송용)

```
📊 QA 주간 리포트 — Week {N} ({YYYY-MM-DD})
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 [이번 주 TC 실행 결과]
• 총 TC: {N}건
• 통과: {N}건 ✅
• 실패: {N}건 ❌
• 통과율: {N}%

🐛 [발견된 버그]
• Critical(P0): {N}건
• Major(P1): {N}건
• Minor(P2+): {N}건
• 누적 미해결: {N}건

🤖 [자동화 현황]
• Playwright 실행: {N}개 spec / {N}건 TC
• GitHub Actions 트리거: {N}회
• Slack 알림 발송: {N}건
• Notion TC 업데이트: {N}건

📈 [품질 지표]
• 자동화율: {N}% (자동 TC / 전체 TC)
• 버그 발견율: {N}건/주
• 평균 수정 소요 시간: {N}시간

📅 [다음 주 계획]
• {내용 1}
• {내용 2}

⚠️ [특이사항]
• {내용}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📎 포트폴리오: https://kihyunqa.github.io/qa-portfolio
📂 상세 리포트: https://github.com/kihyunqa/qa-portfolio
```

---

## MCP로 자동 발송하는 방법

### 방법 1: Claude에게 직접 요청
```
"이번 주 QA 리포트 만들어서 Slack 새-채널에 보내줘.
이번 주 TC 145건 실행, 통과 143건, 실패 2건이야."
→ Claude가 양식 채워서 slack MCP로 자동 발송
```

### 방법 2: GitHub Actions 스케줄 자동화
```yaml
# .github/workflows/weekly-report.yml
name: Weekly QA Report
on:
  schedule:
    - cron: '0 9 * * 5'  # 매주 금요일 오전 9시
jobs:
  send-report:
    runs-on: ubuntu-latest
    steps:
      - name: Send Slack Report
        run: |
          curl -X POST ${{ secrets.SLACK_WEBHOOK_URL }} \
          -H 'Content-type: application/json' \
          -d '{"text": "📊 주간 QA 자동 리포트 — $(date +%Y-%m-%d)"}'
```

> ⚠️ workflows 파일은 GitHub 웹에서만 수정 가능 (MCP 불가)

---

## 실제 작성 예시 (2026-03-31 기준)

```
📊 QA 주간 리포트 — Week 13 (2026-03-31)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🧪 [이번 주 TC 실행 결과]
• 총 TC: 145건
• 통과: 143건 ✅
• 실패: 2건 ❌
• 통과율: 98.6%

🐛 [발견된 버그]
• Critical(P0): 0건
• Major(P1): 0건
• Minor(P2+): 2건 (Safari CSS 렌더링, iOS 버튼 탭 반응)
• 누적 미해결: 2건 (검토 중)

🤖 [자동화 현황]
• Playwright 실행: 12개 spec / 145건+ TC
• GitHub Actions 트리거: 정상 운영 중
• Slack 알림: 실시간 발송 확인 완료
• Notion TC: 145건 업로드 완료

📈 [품질 지표]
• 자동화율: 83% (12 spec / 145건 커버)
• 버그 발견율: 2건/주
• 평균 수정 소요 시간: 측정 중

📅 [다음 주 계획]
• 스크린샷 증거 추가 (Slack·Actions·Notion 화면)
• Jira MCP 연동 시작 (Phase 2)
• linkedin-post.md 버전 선택 후 게시

⚠️ [특이사항]
• 포트폴리오 GitHub Pages 정상 배포 중
• docs/ 22개 문서 전체 최신화 완료

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📎 포트폴리오: https://kihyunqa.github.io/qa-portfolio
📂 상세 리포트: https://github.com/kihyunqa/qa-portfolio
```

---

## 리포트 발송 주기 및 대상

| 리포트 | 주기 | 발송 대상 | 채널 |
|--------|------|-----------|------|
| 주간 QA 리포트 | 매주 금요일 | 개발팀 전체 | #새-채널 |
| 릴리즈 QA 리포트 | 릴리즈 당일 | 스테이크홀더 | #새-채널 |
| 긴급 버그 알림 | 즉시 | 개발팀 + PM | #새-채널 |
| 월간 품질 리포트 | 매월 말 | 경영진 | 이메일 |

---

*최종 업데이트: 2026-03-31 · STEP 26 보강 · 1531 → 4500+ bytes*
