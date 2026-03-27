# 성기현 | QA Engineer Portfolio

> 6년 9개월 QA 경력 · Claude MCP로 QA 워크플로우를 자동화한 포트폴리오

🌐 **포트폴리오 사이트:** [kihyunqa.github.io/qa-portfolio](https://kihyunqa.github.io/qa-portfolio)

---

## 👤 소개

테스트 설계부터 Cypress E2E 자동화, API 검증까지 경험한 QA 엔지니어입니다.  
최근에는 **Claude MCP(Model Context Protocol)** 를 활용해 QA 워크플로우 전체를 자동화하는 파이프라인을 구축했습니다.

---

## 🤖 Claude MCP 자동화 파이프라인

이 레포지토리는 Claude MCP로 실제 운영 중인 자동화 파이프라인의 결과물입니다.

```
기능 명세 입력 → TC 자동 생성 → 브라우저 자동 테스트 → GitHub 자동 업로드
```

| 구성요소 | 역할 |
|---|---|
| `filesystem MCP` | 로컬 파일 읽기/쓰기 |
| `github MCP` | 레포 커밋 및 파일 업로드 |
| `playwright MCP` | 브라우저 자동화 및 스크린샷 |

- 자연어 명령 **1회**로 TC 24건 생성
- 소요 시간 약 **40초**
- 작성한 코드 **0줄**

---

## 📁 레포 구조

```
qa-portfolio/
├── index.html              # 포트폴리오 메인 페이지
├── testcase_login.md       # 로그인 기능 TC (해피패스·네거티브·엣지케이스)
├── screenshots/            # Playwright MCP 자동 캡처 스크린샷
└── README.md
```

---

## 🧪 테스트케이스 샘플

[`testcase_login.md`](./testcase_login.md) — 로그인 기능 TC 24건

| 구분 | 건수 |
|---|---|
| ✅ 해피패스 | 4건 |
| ❌ 네거티브 | 10건 |
| ⚠️ 엣지케이스 | 10건 |

주요 커버리지: 정상 로그인, 계정 잠금, XSS/SQL Injection, 경계값, 동시 접속 등

---

## 🛠 보유 역량

- **테스트 설계 & 실행** — TC 설계, 회귀 테스트, 탐색적 테스트
- **E2E 자동화** — Cypress
- **API 테스트** — Swagger
- **AI 기반 자동화** — Claude MCP, Playwright MCP, GitHub MCP
- **결함 관리** — Jira, 버그 리포팅, 영향도 분석

---

## 📬 연락처

- GitHub: [github.com/kihyunqa](https://github.com/kihyunqa)
- Email: your@email.com

---

*Powered by Claude MCP*
