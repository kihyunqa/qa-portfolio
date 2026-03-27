# 🧪 QA 자동화 포트폴리오

> **코딩 없이** Claude MCP로 구현한 QA 자동화 워크플로우

---

## 📌 프로젝트 소개

이 포트폴리오는 **Claude Desktop + MCP(Model Context Protocol)** 를 활용하여  
테스트 케이스 생성부터 브라우저 자동화, GitHub 업로드까지  
**QA 업무 전 과정을 코드 한 줄 없이 자동화**한 실험적 프로젝트입니다.

AI와의 대화만으로 실무 QA 워크플로우를 구축할 수 있음을 직접 증명합니다.

---

## 🛠️ 사용 도구

| 도구 | 역할 |
|------|------|
| **Claude Desktop** | AI 에이전트 — 워크플로우 전체 조율 및 지시 |
| **MCP · filesystem** | 테스트 케이스 로컬 파일 생성 및 저장 |
| **MCP · github** | 결과물 GitHub 레포지토리 자동 업로드 |
| **MCP · playwright** | 브라우저 자동 실행 및 UI 테스트 수행 |

---

## ⚙️ 자동화 워크플로우

```
① TC 생성          ② 로컬 저장         ③ 브라우저 테스트      ④ GitHub 업로드
─────────────    ─────────────────    ──────────────────    ─────────────────
Claude가 테스트  →  filesystem MCP로  →  Playwright MCP로  →  GitHub MCP로
케이스 자동 작성     로컬에 파일 저장     브라우저 자동 실행      레포에 커밋·푸시
```

1. **TC 생성** — Claude Desktop과의 대화를 통해 테스트 케이스를 자동으로 작성합니다.
2. **로컬 저장** — `filesystem` MCP가 생성된 TC를 지정 경로에 파일로 저장합니다.
3. **브라우저 테스트** — `playwright` MCP가 브라우저를 실행하고 UI 테스트를 자동 수행합니다.
4. **GitHub 업로드** — `github` MCP가 테스트 결과물을 레포지토리에 커밋하고 푸시합니다.

> 💡 **이 모든 과정이 코딩 없이, Claude와의 대화만으로 이루어집니다.**

---

## 📸 실행 화면

![포트폴리오 테스트 실행 화면](screenshots/portfolio_test.png)

---

## ✨ 핵심 포인트

- ✅ **No-Code 자동화** — 코드를 직접 작성하지 않고 AI 지시만으로 구현
- ✅ **MCP 멀티 연동** — filesystem / github / playwright 3개 MCP를 동시 활용
- ✅ **실무 워크플로우 재현** — TC 작성 → 테스트 실행 → 결과 저장의 실제 QA 사이클 구현
- ✅ **재현 가능성** — Claude Desktop + MCP 환경만 있으면 누구나 동일하게 재현 가능

---

## 📂 프로젝트 구조

```
qa-portfolio/
├── screenshots/
│   └── portfolio_test.png   # 테스트 실행 스크린샷
├── docs/                    # 자동 생성된 테스트 케이스 및 결과물
└── README.md
```

---

## 📄 라이선스

MIT License
