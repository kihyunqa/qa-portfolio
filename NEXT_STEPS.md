# 🤖 다음 Claude를 위한 인수인계 문서

> 이 문서를 읽는 Claude에게: 아래 내용을 먼저 읽고 이어서 작업해주세요.
> 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> **새 대화 시작 명령어**: `kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘`

---

## ✅ 현재까지 완료된 것 (건드리지 말 것)

### 포트폴리오 사이트
- `index.html` — 보라색 테마 포트폴리오 사이트 (GitHub Pages 배포)
- URL: `https://kihyunqa.github.io/qa-portfolio`

### 실제 연동 완료된 MCP (5개)
| MCP | 상태 |
|-----|------|
| filesystem | ✅ 연동 |
| github | ✅ 연동 |
| playwright | ✅ 연동 |
| notion | ✅ 연동 |
| slack | ✅ 연동 |

### 현재 정확한 통계 (2026-03-30 기준)
- MCP 서버: **5개**
- Playwright spec: **11개**
- TC: **150건+**
- GitHub Actions: **2개** (main.yml, qa-notify.yml)
- 작성한 코드: **0줄**

---

## ✅ 완료된 스텝

### STEP 1 — index.html 실제 현황 반영 ✅ (2026-03-30)
- Playwright spec 8 → 11개, TC 125 → 150건+ 수정

### STEP 2 — GitHub Actions 진단 ✅ (2026-03-30)
**진단 결과:**
- `qa-notify.yml` ✅ 정상 — 트리거 3개(testcase_*.md, test-cases/**, playwright-tests/**), 변경파일 감지, Slack 알림 완성
- `main.yml` ⚠️ 문제 — 내용이 qa-notify.yml과 거의 같아서 **Slack 알림이 중복 발송**되는 구조

**main.yml 수정 필요 (직접 해야 함 — workflows 파일은 MCP 권한 없음):**
1. https://github.com/kihyunqa/qa-portfolio/edit/main/.github/workflows/main.yml 접속
2. 전체 내용을 아래로 교체:

```yaml
name: Portfolio Deploy Verify

on:
  push:
    branches:
      - main
    paths:
      - 'index.html'
      - 'README.md'
      - 'docs/**'

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Verify portfolio structure
        run: |
          echo "TC files: $(ls testcase_*.md 2>/dev/null | wc -l)"
          echo "Playwright specs: $(ls playwright-tests/*.spec.js 2>/dev/null | wc -l)"
          echo "✅ Structure verified"

      - name: Write job summary
        run: |
          echo "## 🚀 Portfolio Deploy Summary" >> $GITHUB_STEP_SUMMARY
          echo "| 항목 | 내용 |" >> $GITHUB_STEP_SUMMARY
          echo "|------|------|" >> $GITHUB_STEP_SUMMARY
          echo "| Portfolio URL | https://kihyunqa.github.io/qa-portfolio |" >> $GITHUB_STEP_SUMMARY
          echo "| TC Files | $(ls testcase_*.md 2>/dev/null | wc -l)개 |" >> $GITHUB_STEP_SUMMARY
          echo "| Playwright Specs | $(ls playwright-tests/*.spec.js 2>/dev/null | wc -l)개 |" >> $GITHUB_STEP_SUMMARY
```

3. Commit changes 클릭

---

## 🎯 다음 스텝 (우선순위 순)

### STEP 3 — main.yml 직접 수정 후 Actions 실제 트리거 테스트 [바로 하기]
```
할 일:
1. 위 STEP 2의 main.yml 내용으로 직접 수정 (GitHub 웹)
2. testcase_*.md 파일 하나 아무거나 살짝 수정 후 커밋
3. Actions 탭에서 qa-notify.yml이 트리거됐는지 확인
4. Slack 새-채널에 알림 왔는지 확인
5. 알림 왔으면 스크린샷 찍어서 screenshots/ 폴더에 추가
   → 이게 "실제 연동 증거"의 핵심 자료!

확인 URL:
- Actions 탭: https://github.com/kihyunqa/qa-portfolio/actions
- Slack 채널: 새-채널 (channel-id: C0AQFJXC800)
```

### STEP 4 — 실제 연동 스크린샷 추가 [STEP 3 이후 임팩트 최대]
```
현재 proof 섹션이 텍스트만 있고 실제 스크린샷이 없음
추가할 것:
- Slack 알림 수신 스크린샷
- Notion 페이지 생성 스크린샷
- GitHub Actions 성공 스크린샷
저장 위치: screenshots/ 폴더
```

### STEP 5 — PHASE 2: Jira MCP 연동
```
Jira Cloud 무료 계정 생성 → API 토큰 발급
claude_desktop_config.json에 추가
테스트: 버그 티켓 자동 생성
```

### STEP 6 — 포트폴리오 공개 공유
```
- GitHub Pages 확인: https://kihyunqa.github.io/qa-portfolio
- LinkedIn 게시: docs/linkedin-post.md 참고
- 이력서 첨부: PROFILE.md 활용
```

---

## 💡 작업 시 주의사항

1. **workflows 파일(.github/workflows/*.yml)은 MCP로 수정 불가** — GitHub 웹에서 직접
2. **index.html은 58KB라 MCP API 한도 초과** — GitHub 웹 편집기에서 Ctrl+H로 수정
3. **숫자 부풀리지 말 것** — 실제 확인된 것만
4. **새 파일 무한 생성 금지** — 정확도가 중요
5. **스텝 완료 시 이 문서 업데이트 필수**

---

## 📞 링크 모음
- GitHub 레포: https://github.com/kihyunqa/qa-portfolio
- 포트폴리오: https://kihyunqa.github.io/qa-portfolio
- Actions 탭: https://github.com/kihyunqa/qa-portfolio/actions
- main.yml 편집: https://github.com/kihyunqa/qa-portfolio/edit/main/.github/workflows/main.yml

---
*최종 업데이트: 2026-03-30 · STEP 2 완료(진단) · 다음: STEP 3 (main.yml 직접 수정 후 트리거 테스트)*
