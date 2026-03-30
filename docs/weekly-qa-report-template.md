# 📅 주간 QA 리포트 템플릿

> 매주 금요일 Slack 새-채널에 자동 발송하는 QA 주간 리포트 양식

---

## 리포트 양식

```
📊 QA 주간 리포트 — Week {N} ({날짜})

[이번 주 TC 실행 결과]
• 실행: {N}건
• 통과: {N}건  
• 실패: {N}건
• 통과율: {N}%

[발견된 버그]
• Critical(P0): {N}건
• Major(P1): {N}건
• Minor(P2+): {N}건

[자동화 현황]
• Playwright 실행: {N}개 spec / {N}건 TC
• GitHub Actions: {N}회 트리거
• Slack 알림: {N}건 발송

[다음 주 계획]
• {내용}

[특이사항]
• {내용}

---
📎 상세 리포트: https://github.com/kihyunqa/qa-portfolio
```

---

## MCP로 자동 발송하는 방법

```
Claude에게: "위 양식으로 이번 주 QA 리포트 만들어서 Slack 새-채널에 보내줘"
→ slack MCP 자동 발송
```

---

## 실제 작성 예시 (2026-03-31 기준)

```
📊 QA 주간 리포트 — Week 13 (2026-03-31)

[이번 주 TC 실행 결과]
• 실행: 145건+
• 통과: 143건  
• 실패: 2건 (검토 중)
• 통과율: 98.6%

[발견된 버그]
• Critical(P0): 0건
• Major(P1): 0건
• Minor(P2+): 2건 (Safari CSS, iOS 버튼 반응)

[자동화 현황]
• Playwright 실행: 12개 spec (145건+)
• GitHub Actions: 2개 워크플로우 정상 운영
• Slack 알림: 실시간 발송 확인

[다음 주 계획]
• 스크린샷 증거 추가
• Jira MCP 연동 시작 (Phase 2)

[특이사항]
• 포트폴리오 사이트 GitHub Pages 정상 배포 중
```
