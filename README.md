<div align="center">

# 성기현 · QA Engineer Portfolio

[![Portfolio](https://img.shields.io/badge/포트폴리오_보기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)
[![GitHub](https://img.shields.io/badge/GitHub-kihyunqa-181717?style=for-the-badge&logo=github)](https://github.com/kihyunqa)
[![Email](https://img.shields.io/badge/Email-kihyun.qa@gmail.com-ea4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kihyun.qa@gmail.com)

**6년 9개월 QA 경력 위에 Claude MCP 자동화를 더했습니다.**  
TC 생성부터 Notion 문서화, Slack 알림, GitHub 자동 배포, Jira 연동까지  
**전부 대화만으로 구축했습니다.**

> 별도 프로젝트: QA 관리·현황 가시화 웹 툴 → [**TC 관리 툴 설명**](#tc-관리-툴) · [**라이브 데모**](https://kihyunqa.github.io/qa-portfolio/tc-manager/)

</div>

---

## 핵심 수치

<div align="center">

| 항목 | 수치 | 설명 |
|------|------|------|
| 자동 생성된 TC | **145건+** | 16개 testcase 파일 |
| 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 연동된 MCP 서버 | **5개** | 실제 연동 완료 |
| Playwright spec | **12개** | 실제 실행 가능 코드 + POM |
| GitHub Actions | **2개 운영 중** | TC push → Slack 자동 알림 |
| QA 경력 | **6년 9개월** | 2017 — 현재 |
| 총 레포 파일 수 | **80개+** | TC, 코드, 문서 전체 |
| Jira 연동 | **완료** | GitHub 이슈 트래킹 자동화 |
| TC 관리 툴 | **1종** | MCP와 별개로 설계한 관리·현황 웹 툴 ([설명](#tc-관리-툴)) |

</div>

---

## 연동된 MCP 서버 (5개 · 실제 연동 완료)

| MCP 서버 | 역할 | 상태 |
|----------|------|------|
| `filesystem` | 로컬 파일 읽기/쓰기, TC 저장 | ✅ |
| `playwright` | 브라우저 자동 조작, E2E 테스트 | ✅ |
| `github` | 레포 커밋, 파일 업로드, Actions 트리거 | ✅ |
| `notion` | TC 결과 자동 문서화 | ✅ 실제 연동 |
| `slack` | QA 완료 알림 자동 발송 | ✅ 실제 연동 |
| `Jira` | GitHub 이슈 트래킹 연동 | ✅ FULL ACCESS |

---

## QA 자동화 파이프라인

```
기능 명세 입력
     ↓
[Claude Desktop + 5 MCP servers]
     ↓
TC 생성 → filesystem 저장 → github 커밋
     ↓
playwright E2E 테스트 실행 (12 spec)
     ↓
notion 페이지 자동 문서화
     ↓
slack QA 완료 알림 자동 발송
     ↓
GitHub Actions → TC push 감지 → Slack 자동 통보
     ↓
Jira 이슈 자동 연동 (커밋 메시지 기반)
     ↓
완료 (코드 0줄)
```

---

## Playwright 테스트 구조

```
playwright-tests/
├── helpers/
│   ├── page-objects.js   # POM - LoginPage, CartPage, CheckoutPage
│   └── test-data.js      # TestUsers, TestCards, SearchKeywords
├── login.spec.js          # 로그인 E2E
├── search.spec.js         # 검색 E2E
├── cart.spec.js           # 장바구니 E2E
├── api.spec.js            # API 테스트
├── payment.spec.js        # 결제 E2E
├── security.spec.js       # 보안 (XSS/SQLi/RateLimit)
├── signup.spec.js         # 회원가입 E2E
├── notification.spec.js   # MCP 파이프라인 검증
├── performance.spec.js    # 성능 테스트
├── accessibility.spec.js  # 접근성 테스트
├── portfolio.spec.js      # 포트폴리오 사이트 E2E
└── playwright.config.js   # 설정
```

---

## GitHub Actions

### qa-notify.yml — TC push → Slack 알림

TC 파일(`testcase_*.md`, `playwright-tests/**`) 변경 감지 → Slack 새-채널 자동 알림.

### pr-tc-review.yml — PR 생성 시 TC 자동 체크

PR에 TC 관련 변경사항이 있을 경우 자동으로 체크 코멘트 추가.

---

## TC 관리 툴

> MCP 자동화와는 **별개의 프로젝트**입니다. 자동 생성한 TC를 어떻게 관리하고, 지금 출시해도 되는지 어떻게 판단하는가에 대한 답으로 설계했습니다.

**[라이브 데모](https://kihyunqa.github.io/qa-portfolio/tc-manager/)** · [소스](tc-manager/index.html)

### 왜 만들었나

스프레드시트 중심 TC 관리는 실행 현황, 결함 연결, 종료 판단 근거가 파일마다 흩어집니다.
"지금 출시해도 되는가"에 답할 수 있는 **최소 범위의 관리 체계**를 직접 설계했습니다.
데이터는 모두 직접 만든 가상 예시(렌트카 예약 서비스)이며 실제 서비스와 무관합니다.

### 화면

| 화면 | 내용 |
|------|------|
| TC 관리 | 검색·필터(Main/플랫폼/결과/우선순위), 결과·우선순위 인라인 수정, TC 추가·수정, CSV 가져오기/내보내기 |
| 현황 대시보드 | 결과 분포, 우선순위별 결과, 기능(Main)별 진행률 |
| QA 종료 보고서 | 출시 판정과 근거, 결함 목록, 미수행·제외 항목, 인쇄/PDF 저장 |

### 설계 판단

| 항목 | 기준 |
|------|------|
| 결과 상태 | Pass / Fail / N/T(미수행) / N/A(제외). N/A는 실행률 분모에서 제외해 진행률 왜곡을 막음 |
| 우선순위 | Highest ~ Low 4단계. 리스크가 큰 TC의 Fail·미수행을 먼저 보도록 지표를 우선순위별로 분리 |
| 결함 연결 | Fail TC에 Issue ID를 연결하고, 보고서에서 결함별 재현 TC를 역추적 |

**출시 판정 규칙** (보고서에 근거와 함께 표시)

1. Highest·High Fail이 있으면 → 출시 보류 권고
2. 미수행 Highest가 있으면 → 수행 후 재판정
3. 미수행 TC가 남아 있으면 → 잔여 수행 후 출시
4. 그 외 → 출시 가능 (경미한 Fail은 인지 상태로 표기)

### 데모 데이터

TC 30건 (Pass 20 · Fail 5 · N/T 4 · N/A 1), 결함 5건(RC-001 ~ RC-005). 데모 화면에서 결과를 바꾸면 대시보드와 종료 보고서 판정이 함께 바뀝니다.

### 구현 방식과 검증

- **설계**: 화면, 데이터 항목, 상태 정의, 판정 규칙은 직접 설계
- **구현**: Claude로 구현 (단일 `index.html`, 데이터는 브라우저 저장소)
- **검증**: AI 산출물을 QA 관점에서 직접 테스트하고 수정 요청
  - 분류 열이 글자 단위로 줄바꿈되는 문제 → 한 줄 유지
  - 표가 잘려 수정 버튼이 보이지 않는 문제 → 본문 폭 확대, 표 최소 폭 제거

### 범위

포트폴리오용으로 범위를 좁혀 완성도를 우선했습니다. 변경 내용은 접속한 브라우저에만 저장되며, 서버와 계정 기능은 없습니다.

---

## 레포 전체 구조

```
qa-portfolio/
├── .github/workflows/         # GitHub Actions 2개
├── index.html                 # 포트폴리오 메인 페이지
├── README.md / PROFILE.md / CHANGELOG.md
│
├── testcase_*.md              # TC 파일 16개 (145건+)
├── playwright-tests/          # E2E 코드 12개 spec + helpers
├── e2e-scenarios/             # E2E 시나리오
├── tc-manager/                # TC 관리 툴 (단일 index.html · 라이브 데모)
├── test-cases/                # 상세 TC (auth/cart/search/payment/signup)
├── skills/                    # QA 역량 문서 9개
├── screenshots/               # 실제 동작 스크린샷
├── job-search/                # 채용공고 적합도 판단 기준
└── docs/                      # 전략/면접/KPI/온보딩 문서 28개
```

---

## 경력 요약

| 기간 | 회사 | 직책 | 주요 성과 |
|------|------|------|----------|
| 2024.11–2025.02 | 두플 | QA Part Leader | TC 설계, MCP 자동화 도입, 팀 리딩 |
| 2022.03–2024.02 | IMS Mobility | QA 대리 | Cypress E2E, API QA, 결제 QA |
| 2017.09–2022.01 | 모비프렌 (삼성 파트너) | QA 주임 | SmartThings, Bixby, 삼성 모바일 QA |

---

## 주요 문서 바로가기

| 문서 | 설명 |
|------|------|
| [포트폴리오 요약](docs/portfolio-summary.md) | 채용담당자용 1페이지 요약 |
| [공유 액션 플랜](docs/share-action-plan.md) | LinkedIn·채용플랫폼·DM 실행 가이드 |
| [커버레터 5종](docs/cover-letter.md) | 상황별 커버레터 + 버전 선택 매트릭스 |
| [자기소개서](docs/self-introduction.md) | 국내 기업 공채·수시채용 4항목 |
| [LinkedIn 포스트](docs/linkedin-post.md) | 버전 1~6 + 게시 타이밍 가이드 |
| [MCP 세팅 가이드](docs/mcp-setup-guide.md) | MCP 5개 설치/설정 전체 |
| [QA 전략 문서](docs/qa-strategy.md) | 테스트 전략 및 방법론 |
| [버그 리포트 양식](docs/bug-report-template.md) | 실제 예시 3건 포함 |
| [버그 판단력 스토리](docs/bug-stories.md) | QA 판단력 실증 사례 3건 |
| [면접 Q&A](docs/interview-qa.md) | QA 면접 준비 12문항 |
| [면접 Q&A 심화](docs/interview-qa-advanced.md) | AI 시대 QA 심화 11문항 |
| [면접 시뮬레이션](docs/interview-simulation.md) | 실전 돌발 질문 대응 가이드 |
| [TC 관리 툴](#tc-관리-툴) | 설계 의도, 출시 판정 규칙, 검증 과정 |
| [Jira 연동](docs/jira-github-integration.md) | Jira + GitHub 연동 완료 기록 |
| [회귀 체크리스트](docs/regression-checklist.md) | 릴리즈 전 필수 확인 목록 |
| [AI QA 비전](docs/ai-qa-vision.md) | MCP 기반 QA 자동화 미래 |

---

<div align="center">

*Built with Claude MCP · No code written · 5 MCP servers · TC 145건+ · spec 12개 · Actions 2개 · Jira 연동 완료 · docs 28개 · TC 관리 툴 1종*

[![포트폴리오 바로가기](https://img.shields.io/badge/포트폴리오_바로가기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)

</div>
