<div align="center">

# 성기현 · QA Engineer Portfolio

[![Portfolio](https://img.shields.io/badge/🌐_포트폴리오_보기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-kihyunqa-181717?style=for-the-badge&logo=github)](https://github.com/kihyunqa)
[![Email](https://img.shields.io/badge/Email-kihyun.qa@gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kihyun.qa@gmail.com)

**6년 9개월 QA 경력 위에 Claude MCP 자동화를 더했습니다.**  
기능 명세에서 TC 생성, 브라우저 테스트, 버그 리포트, 문서화까지  
**전부 대화만으로 구축했습니다.**

</div>

---

## 📊 핵심 수치

<div align="center">

| 항목 | 수치 | 설명 |
|------|------|------|
| ✅ 완성 프로젝트 | **30개** | 전체 구현 완료 |
| 💻 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 🧪 자동 생성된 TC | **24건** | 단일 대화 한 번 |
| 🔧 연동된 MCP 서버 | **18개** | 전체 파이프라인 커버 |
| 📅 QA 경력 | **6년 9개월** | 2017 — 현재 |

</div>

---

## 🔧 연동된 MCP 서버 (18개 · 전체 완료)

| MCP 서버 | 역할 | 상태 |
|----------|------|------|
| `📁 filesystem` | 로컬 파일 읽기/쓰기, TC 저장 | ✅ |
| `🎭 playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ |
| `🐙 github` | 레포 커밋, README 업데이트 | ✅ |
| `💬 slack` | QA 알림 자동 발송 | ✅ |
| `📝 confluence` | QA 리포트 자동 문서화 | ✅ |
| `🐛 jira` | 버그 수집·분석·패턴 탐지 | ✅ |
| `📅 google-calendar` | 릴리즈 일정 기반 QA 자동화 | ✅ |
| `✉️ gmail` | QA 리포트 이메일 자동 발송 | ✅ |
| `🚨 sentry` | 에러 패턴·빈도·임팩트 분석 | ✅ |
| `📋 linear` | 이슈 트래킹·사이클 관리 | ✅ |
| `🎨 figma` | 디자인 스펙 QA 검증 | ✅ |
| `📊 datadog` | 성능·에러율·임계치 모니터링 | ✅ |
| `📒 notion` | TC 결과 팀 공유 자동화 | ✅ |
| `🎮 discord` | QA 알림 Discord 채널 발송 | ✅ |
| `🗄️ airtable` | QA 데이터베이스 자동 기록 | ✅ |
| `⚡ zapier` | 크로스 툴 워크플로우 자동화 | ✅ |
| `🧪 testrail` | TC 관리 시스템 연동 | ✅ |
| `🔍 postman` | API 컬렉션 자동 실행·검증 | ✅ |

---

## 🚀 풀 QA 자동화 파이프라인

```
기능 명세 입력
     ↓
[Claude Desktop + 18 MCP servers]
     ↓
Figma 스펙 QA → TC 생성 (24건) → 로컬 저장 → GitHub 커밋
     ↓
E2E 브라우저 테스트 (playwright) → API QA (Postman)
     ↓
Sentry 에러 수집 → Datadog 성능 분석
     ↓
Jira/Linear 버그 분석 → Confluence·Airtable 문서화
     ↓
Slack·Discord 알림 → Gmail 발송 → Calendar 일정 반영
     ↓
완료 🎉 (코드 0줄)
```

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
├── index.html                  # 포트폴리오 메인 페이지
├── README.md                   # 이 파일
├── PROFILE.md                  # 이력서
├── testcase_login.md           # 자동생성 TC 24건 (로그인)
├── qa-automation-report.md     # QA 자동화 리포트
├── e2e-scenarios/
│   └── login-flow.md           # E2E 시나리오 3개
└── skills/
    └── qa-automation.md        # Claude Code Skill 지침 파일
```

---

## ⚙️ MCP 설정 가이드

```json
// claude_desktop_config.json
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
    "slack": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-slack"],
      "env": { "SLACK_BOT_TOKEN": "your_token" }
    }
  }
}
```

---

<div align="center">

*Built with Claude MCP · No code written · 18 MCP servers · 30 projects*

[![포트폴리오 바로가기](https://img.shields.io/badge/🚀_포트폴리오_바로가기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)

</div>
