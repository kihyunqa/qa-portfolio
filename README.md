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
| 자동 생성된 TC | **210건+** | 14개 testcase 파일 |
| 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 연동된 MCP 서버 | **5개** | 실제 연동 완료 |
| Playwright spec | **13개+** | 실제 실행 가능 코드 |
| GitHub Actions | **운영 중** | TC push → Slack 자동 알림 |
| QA 경력 | **6년 9개월** | 2017 — 현재 |

</div>

---

## 연동된 MCP 서버 (5개 · 실제 연동 완료)

| MCP 서버 | 역할 | 상태 |
|----------|------|------|
| `filesystem` | 로컬 파일 읽기/쓰기, TC 저장 | ✅ |
| `playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ |
| `github` | 레포 커밋, 파일 업로드, Actions 트리거 | ✅ |
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
slack QA 완료 알림 자동 발송
     ↓
GitHub Actions → TC push 감지 → Slack 자동 통보
     ↓
완료 (코드 0줄)
```

---

## GitHub Actions

### qa-notify.yml — TC push → Slack 알림

```yaml
name: QA Auto Notify
on:
  push:
    paths:
      - 'testcase_*.md'
      - 'test-cases/**'
      - 'playwright-tests/**'
jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Get changed files
        id: files
        run: |
          echo "changed=$(git diff --name-only HEAD~1 HEAD | tr '\n' ', ')" >> $GITHUB_OUTPUT
      - uses: slackapi/slack-github-action@v1.26.0
        with:
          channel-id: 'C0AQFJXC800'
          slack-message: |
            *📋 QA 포트폴리오 TC 업데이트*
            > *커밋:* ${{ github.event.head_commit.message }}
            > *작성자:* ${{ github.actor }}
            > *변경 파일:* ${{ steps.files.outputs.changed }}
        env:
          SLACK_BOT_TOKEN: ${{ secrets.SLACK_BOT_TOKEN }}
```

### main.yml — GitHub Pages 배포 검증

포트폴리오 사이트(`index.html`) 변경 시 자동으로 구조 검증 후 배포 요약을 Actions 탭에 기록합니다.

---

## 경력 요약

| 기간 | 회사 | 직책 | 주요 성과 |
|------|------|------|----------|
| 2024.11–2025.02 | 두플 | QA Part Leader | TC 설계, MCP 자동화 도입, 팀 리딩 |
| 2022.03–2024.02 | IMS Mobility | QA 대리 | Cypress E2E, API QA, 결제 QA |
| 2017.09–2022.01 | 모비프렌 (삼성 파트너) | QA 주임 | SmartThings, Bixby, 삼성 모바일 QA |

---

## 레포 실제 구조

```
qa-portfolio/
├── .github/
│   └── workflows/
│       ├── main.yml          # 포트폴리오 배포 검증
│       └── qa-notify.yml     # TC push → Slack 알림
├── index.html                # 포트폴리오 메인 (GitHub Pages)
├── README.md
├── PROFILE.md
├── CHANGELOG.md
├── _config.yml
│
├── testcase_login.md         # 로그인 TC 20건
├── testcase_mcp-integration.md  # MCP 통합 TC 30건
├── testcase_e2e-playwright.md   # E2E Playwright TC
├── testcase_api-testing.md      # API TC 20건
├── testcase_bug-report.md       # 버그 리포트 TC
├── testcase_performance.md      # 성능 TC
├── testcase_security.md         # 보안 TC
├── testcase_accessibility.md    # 접근성 TC
├── testcase_regression.md       # 회귀 TC
├── testcase_mobile.md           # 모바일 TC
├── testcase_notification.md     # Slack 알림 TC 20건
├── testcase_cicd.md             # CI/CD TC 20건
├── testcase_notion.md           # Notion 연동 TC 20건
│
├── playwright-tests/         # E2E 자동화 스크립트
├── e2e-scenarios/            # E2E 시나리오 문서
├── test-cases/               # 초기 TC 샘플 (auth/cart/search-api)
├── skills/                   # QA 역량 문서
├── docs/                     # 면접준비, 아키텍처, KPI 문서
└── screenshots/              # 테스트 결과 스크린샷
```

---

## MCP 설정 가이드 (claude_desktop_config.json)

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
