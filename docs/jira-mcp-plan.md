# 📋 Jira MCP 연동 계획 (PHASE 2)

> PHASE 2 로드맵 | Claude MCP 자동 생성 | 2026-03-31 업데이트

---

## 🎯 목표

Jira MCP를 추가 연동해 **Playwright 실패 TC → Jira 버그 이슈 자동 등록** 파이프라인을 구축합니다.

현재 PHASE 1에서 구축한 자동화 파이프라인:
```
Playwright 실패 → GitHub Actions → Slack 알림
```

PHASE 2 목표:
```
Playwright 실패 → GitHub Actions → Slack 알림
                              └→ Jira 버그 이슈 자동 생성
                              └→ Jira 스프린트 자동 할당
```

---

## ✅ PHASE 1 완료 현황

| MCP | 상태 | 주요 기능 |
|-----|------|-----------|
| filesystem | ✅ 운영 중 | 로컬 파일 읽기/쓰기 |
| github | ✅ 운영 중 | 레포 파일 생성·수정·커밋 |
| playwright | ✅ 운영 중 | spec 12개, E2E 자동화 |
| notion | ✅ 운영 중 | TC 145건 자동 업로드 |
| slack | ✅ 운영 중 | QA 알림 채널 (#새-채널) |

---

## 🔧 PHASE 2 — Jira MCP 실행 단계

### STEP 1: Jira Cloud 계정 설정

1. [Jira Cloud 무료 계정](https://www.atlassian.com/software/jira/free) 생성 (최대 10명 무료)
2. 프로젝트 생성: `QA-PORTFOLIO` (스크럼 보드 권장)
3. 이슈 유형 설정:
   - `Bug` — Playwright 실패 TC 자동 등록용
   - `Task` — QA 작업 관리용
   - `Story` — 테스트 시나리오 관리용

### STEP 2: API 토큰 발급

```
1. https://id.atlassian.com/manage-profile/security/api-tokens 접속
2. [Create API token] 클릭
3. 토큰 이름: "claude-mcp-qa"
4. 발급된 토큰 안전하게 저장 (재확인 불가)
```

필요한 정보:
| 항목 | 값 | 비고 |
|------|-----|------|
| Jira 도메인 | `https://your-domain.atlassian.net` | 가입 시 설정 |
| 이메일 | `kihyun.qa@gmail.com` | Atlassian 계정 이메일 |
| API Token | 발급 후 저장 | 재발급 가능 |
| 프로젝트 키 | `QA` | 프로젝트 생성 시 설정 |

### STEP 3: Claude Desktop config 설정

`claude_desktop_config.json` 에 아래 추가:

```json
{
  "mcpServers": {
    "jira": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-jira"],
      "env": {
        "JIRA_HOST": "https://your-domain.atlassian.net",
        "JIRA_EMAIL": "kihyun.qa@gmail.com",
        "JIRA_API_TOKEN": "발급받은_토큰"
      }
    }
  }
}
```

> ⚠️ config 파일 위치:
> - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
> - Windows: `%APPDATA%\Claude\claude_desktop_config.json`

### STEP 4: Claude Desktop 재시작 및 연동 확인

```
1. Claude Desktop 완전 종료 (트레이 아이콘 우클릭 → Quit)
2. 재시작
3. 새 채팅에서 확인:
   "Jira에서 QA 프로젝트의 열린 이슈 목록 가져와줘"
4. 이슈 목록이 반환되면 연동 성공 ✅
```

### STEP 5: 버그 자동 등록 테스트

연동 성공 후 Claude에게 요청:

```
Playwright 테스트 실패 결과를 Jira 버그로 등록해줘:
- 제목: [자동] login.spec.ts > 소셜 로그인 실패
- 심각도: Major
- 재현 환경: Chrome / macOS
- 재현 단계: 1. 로그인 페이지 접속 2. Google 로그인 클릭 3. 콜백 URL 오류
- 기대 결과: 로그인 성공
- 실제 결과: 403 Forbidden
```

---

## 🔄 GitHub Actions — Jira 자동 연동

Playwright 실패 시 Jira 이슈 자동 생성 workflow 예시:

```yaml
# .github/workflows/jira-bug-create.yml
name: Jira Bug Auto Create

on:
  workflow_run:
    workflows: ["QA Notify"]
    types: [completed]

jobs:
  create-jira-issue:
    if: ${{ github.event.workflow_run.conclusion == 'failure' }}
    runs-on: ubuntu-latest
    steps:
      - name: Create Jira Issue
        uses: atlassian/gajira-create@v3
        with:
          project: QA
          issuetype: Bug
          summary: "[자동] Playwright 테스트 실패 - ${{ github.run_id }}"
          description: |
            **자동 생성된 버그 리포트**
            - 실행 ID: ${{ github.run_id }}
            - 브랜치: ${{ github.ref }}
            - 커밋: ${{ github.sha }}
            - Actions 링크: ${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }}
        env:
          JIRA_BASE_URL: ${{ secrets.JIRA_BASE_URL }}
          JIRA_USER_EMAIL: ${{ secrets.JIRA_USER_EMAIL }}
          JIRA_API_TOKEN: ${{ secrets.JIRA_API_TOKEN }}
```

> ⚠️ GitHub Actions workflows 파일은 GitHub 웹에서만 수정 가능 (MCP 불가)

---

## 📊 PHASE 2 완료 기준

| 항목 | 확인 방법 |
|------|-----------|
| Jira MCP 연동 | Claude Desktop에서 이슈 목록 조회 성공 |
| 수동 이슈 생성 | Claude로 버그 이슈 1건 생성 확인 |
| 자동 이슈 생성 | Playwright 실패 시 Jira 이슈 자동 생성 확인 |
| 스프린트 관리 | Claude로 스프린트 이슈 조회/업데이트 |

---

## 🗺️ 전체 로드맵

```
PHASE 1 ✅ 완료
├── filesystem MCP
├── github MCP
├── playwright MCP (spec 12개)
├── notion MCP (TC 145건)
└── slack MCP (알림 자동화)

PHASE 2 🔜 진행 예정
├── Jira MCP 연동
├── 버그 이슈 자동 등록
└── 스프린트 자동 관리

PHASE 3 📅 미래
├── Calendar MCP → QA 스케줄 자동 관리
└── Gmail MCP → 테스트 리포트 자동 이메일 발송
```

---

*최종 업데이트: 2026-03-31 · STEP 25 완료 · 878 → 3500+ bytes 보강*
