# 🧪 QA 자동화 포트폴리오

> Claude MCP를 활용한 QA 워크플로우 자동화 프로젝트

---

## 📌 프로젝트 소개

이 포트폴리오는 **Claude MCP(Model Context Protocol)** 를 중심으로 GitHub와 Notion을 연동하여  
QA 업무 전반을 자동화한 실험적 프로젝트입니다.

버그 리포트 작성, 테스트 케이스 관리, 이슈 트래킹 등 반복적인 QA 작업을 AI 기반 자동화로  
처리함으로써 생산성 향상과 품질 일관성을 목표로 합니다.

---

## 🛠️ 사용 기술 스택

| 기술 | 용도 |
|------|------|
| **Claude MCP** | AI 기반 자동화 에이전트 — 이슈 분석, 문서 생성, 워크플로우 조율 |
| **GitHub** | 소스 코드 버전 관리, 이슈 트래킹, PR 리뷰 자동화 |
| **Notion** | 테스트 케이스 문서화, 버그 리포트 관리, 스프린트 현황 공유 |

---

## ⚙️ 자동화 워크플로우

```
GitHub Issue 생성
       │
       ▼
Claude MCP가 이슈 내용 분석
       │
       ├──▶ Notion에 버그 리포트 자동 생성
       │
       ├──▶ 테스트 케이스 초안 작성 및 Notion 페이지 업데이트
       │
       └──▶ GitHub에 레이블 / 담당자 자동 할당
```

1. **이슈 감지** — GitHub에 버그 또는 개선 이슈가 등록됩니다.
2. **분석 및 분류** — Claude MCP가 이슈 제목·본문을 읽고 심각도와 카테고리를 판단합니다.
3. **문서 자동화** — Notion에 표준 양식의 버그 리포트와 테스트 케이스가 자동으로 생성됩니다.
4. **이슈 업데이트** — 분석 결과를 바탕으로 GitHub 이슈에 레이블과 담당자가 할당됩니다.
5. **현황 동기화** — Notion 대시보드에서 전체 QA 진행 상태를 실시간으로 확인할 수 있습니다.

---

## 🚀 설치 방법

### 사전 요구사항

- Node.js 18 이상
- Claude API 키 ([Anthropic Console](https://console.anthropic.com)에서 발급)
- GitHub Personal Access Token
- Notion Integration Token

### 설치 단계

```bash
# 1. 레포지토리 클론
git clone https://github.com/kihyunqa/qa-portfolio.git
cd qa-portfolio

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env
```

`.env` 파일을 열어 아래 값을 입력합니다:

```env
ANTHROPIC_API_KEY=your_claude_api_key
GITHUB_TOKEN=your_github_token
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
```

```bash
# 4. MCP 서버 실행
npm run start
```

---

## 📂 프로젝트 구조

```
qa-portfolio/
├── src/
│   ├── mcp/          # Claude MCP 서버 설정
│   ├── github/       # GitHub API 연동 모듈
│   └── notion/       # Notion API 연동 모듈
├── docs/             # 테스트 케이스 및 버그 리포트 예시
├── .env.example
└── README.md
```

---

## 📄 라이선스

MIT License
