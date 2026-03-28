# 성기현 · QA Engineer Portfolio

> 6년 9개월 QA 엔지니어 · Claude MCP로 QA 자동화의 새로운 가능성을 설계합니다.

🌐 **포트폴리오**: https://kihyunqa.github.io/qa-portfolio

---

## 🤖 연동된 MCP 서버 (6개)

| MCP 서버 | 용도 | 상태 |
|---|---|---|
| `filesystem` | 로컬 파일 읽기/쓰기 | ✅ 연동 완료 |
| `playwright` | 브라우저 자동화 · E2E 테스트 | ✅ 연동 완료 |
| `github` | 레포 관리 · 파일 커밋 · PR | ✅ 연동 완료 |
| `slack` | QA 채널 알림 자동 발송 | ✅ 연동 완료 |
| `confluence` | QA 리포트 문서 자동 작성 | ✅ 연동 완료 |
| `jira` | 버그 분석 · 스프린트 현황 | ✅ 연동 완료 |

---

## 📁 레포 구조

```
qa-portfolio/
├── index.html                  # 포트폴리오 메인 페이지
├── README.md                   # 이 파일
├── testcase_login.md           # 자동생성 TC 24건 (로그인)
├── qa-automation-report.md     # QA 자동화 리포트 (Confluence 스타일)
├── e2e-scenarios/
│   └── login-flow.md           # playwright MCP E2E 시나리오
└── skills/
    └── qa-automation.md        # Claude Code Skill 지침 파일
```

---

## 🚀 구현된 프로젝트 (6개)

### PROJECT 01 · TC 자동생성 워크플로우
기능 명세 자연어 입력 → TC 24건 자동생성 → 로컬 저장 → GitHub 업로드  
`filesystem MCP` `github MCP` `playwright MCP`

### PROJECT 02 · QA 대응 프로세스 + 브랜치 전략
main / develop / feature 브랜치 전략 + QA 개입 시점 정의  
`github MCP`

### PROJECT 03 · 오케스트레이션 하네스
여러 MCP 도구를 자유롭게 조합하는 파이프라인 빌더 · Claude-in-Claude 체이닝  
`Multi-MCP` `Claude-in-Claude`

### PROJECT 04 · Claude Code 환경 세팅 + Skill 지침
Skill 파일로 반복 작업 패턴 지침화 · QA 특화 프롬프트 구조 정의  
`Claude Code` `filesystem MCP`

### PROJECT 05 · Slack + Confluence 문서 자동화
QA 결과 → Confluence 자동 문서화 → Slack 알림 발송  
`Slack MCP` `Confluence MCP`

### PROJECT 06 · Jira MCP 버그 분석
버그 수 / 심각도 / 담당자 / 반복 패턴 자동 분석 · 자연어로 리포트 요청  
`Jira MCP`

---

## ⚙️ Claude Desktop MCP 설정 예시

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
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "your_token" }
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@playwright/mcp"]
    }
  }
}
```

---

## 📊 핵심 수치

- **코드 작성량**: 0줄 (100% 대화로 처리)
- **자동생성 TC**: 24건 (단일 대화 1번)
- **연동 MCP 서버**: 6개
- **완성 프로젝트**: 6개

---

*Built with Claude MCP · No code written · All conversation*
