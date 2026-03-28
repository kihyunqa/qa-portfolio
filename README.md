# 성기현 · QA Engineer Portfolio

> **6년 9개월 QA 경력 위에 Claude MCP 자동화를 더했습니다.**  
> 기능 명세에서 TC 생성, 브라우저 테스트, 버그 리포트, 문서화까지 전부 대화만으로 구축했습니다.

🔗 **포트폴리오 페이지:** https://kihyunqa.github.io/qa-portfolio

---

## 📊 핵심 수치

| 항목 | 수치 |
|------|------|
| 완성 프로젝트 | **15개** |
| 작성한 코드 줄 수 | **0줄** |
| 자동 생성된 TC | **24건** |
| 연동된 MCP 서버 | **8개** |
| QA 경력 | **6년 9개월** |

---

## 🔧 연동된 MCP 서버 (8개)

| MCP 서버 | 용도 | 상태 |
|----------|------|------|
| `filesystem` | 로컬 파일 읽기/쓰기, TC 저장 | ✅ 연동 완료 |
| `playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ 연동 완료 |
| `github` | 레포 커밋, 파일 업로드 | ✅ 연동 완료 |
| `slack` | QA 알림 자동 발송 | ✅ 연동 완료 |
| `confluence` | QA 리포트 자동 문서화 | ✅ 연동 완료 |
| `jira` | 버그 수집·분석·패턴 탐지 | ✅ 연동 완료 |
| `google-calendar` | 릴리즈 일정 기반 QA 자동화 | ✅ 연동 완료 |
| `gmail` | QA 리포트 이메일 자동 발송 | ✅ 연동 완료 |

---

## 🚀 프로젝트 목록 (15개 · 전체 구현 완료)

### PROJECT 01 — TC 자동생성 워크플로우
기능 명세 입력 → TC 24건 자동 생성 → 로컬 저장 → GitHub 업로드  
`filesystem MCP` `github MCP` `playwright MCP`

### PROJECT 02 — QA 대응 프로세스 + 브랜치 전략
main / develop / feature 브랜치 전략 + QA 개입 시점 정의  
`github MCP` `브랜치 전략`

### PROJECT 03 — 오케스트레이션 하네스 구축
여러 MCP 도구를 자유롭게 조합하는 파이프라인 빌더. Claude-in-Claude 체이닝  
`Multi-MCP` `Claude-in-Claude` `파이프라인 빌더`

### PROJECT 04 — Claude Code 환경 세팅 + Skill 지침 설정
Skill 파일 기반 QA 자동화 지침 정의 및 환경 구성  
`Claude Code` `Skill 지침` `QA 환경 구성`

### PROJECT 05 — Slack MCP + Confluence MCP 문서 자동화
QA 결과 → Confluence 문서화 → Slack 채널 자동 발송  
`Slack MCP` `Confluence MCP`

### PROJECT 06 — Jira MCP 버그 분석
버그 수·심각도·담당자·반복 패턴 자동 분석 및 리포팅  
`Jira MCP` `버그 분석` `패턴 탐지`

### PROJECT 07 — playwright MCP E2E 자동화 시나리오
로그인 플로우·계정 잠금·SQL Injection 3개 시나리오 자동 실행  
`playwright MCP` `E2E 자동화`

### PROJECT 08 — QA 자동화 리포트 + README 문서화
github MCP로 레포 전체 구조화, README 및 QA 리포트 자동 작성  
`github MCP` `filesystem MCP` `문서 자동화`

### PROJECT 09 — Notion MCP 연동 TC 결과 자동 정리
TC 실행 결과를 Notion 페이지에 자동 기록  
`Notion MCP` `TC 결과 관리`

### PROJECT 10 — QA 버그 리포트 자동화
버그 재현 경로 + 개발팀 리포트 자동 생성  
`버그 리포트 자동화` `재현 경로 분석`

### PROJECT 11 — Claude Code 환경에서 QA Skill 파일 직접 구축
프롬프트 지침 설계, Skill 파일 작성, Claude 역할 부여 방법론 정립  
`Claude Code` `Prompt Engineering` `QA Skill 설계`

### PROJECT 12 — Jira MCP 버그 분석 대시보드
프로젝트별 버그수/심각도/담당자/패턴 자동 분석 대시보드  
`Jira MCP` `버그 수 분석` `대시보드`

### PROJECT 13 — Slack Bot 구축 — QA 이슈 알림 자동화
QA 이슈 발생 시 버그 리포트 Slack 채널 자동 전송  
`Slack MCP` `알림 자동화`

### PROJECT 14 — Google Calendar MCP 릴리즈 일정 QA 자동화
릴리즈 캘린더 기반으로 QA 일정·TC 범위·담당자를 자동 배분  
`Google Calendar MCP` `릴리즈 QA`

### PROJECT 15 — Gmail MCP QA 리포트 이메일 자동화
QA 완료 후 이해관계자에게 리포트 이메일 자동 발송  
`Gmail MCP` `이메일 자동화`

---

## 📁 레포 구조

```
qa-portfolio/
├── index.html                  # 포트폴리오 메인 페이지
├── README.md                   # 이 파일
├── testcase_login.md           # 자동생성 TC 24건 (로그인)
├── qa-automation-report.md    # QA 자동화 리포트
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
    }
  }
}
```

---

*Built with Claude MCP · No code written · 8 MCP servers · 15 projects*
