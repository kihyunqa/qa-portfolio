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
| 자동 생성된 TC | **145건+** | 17개 testcase 파일 |
| 작성한 코드 줄 수 | **0줄** | 전부 대화로 구축 |
| 연동된 MCP 서버 | **5개** | 실제 연동 완료 |
| Playwright spec | **12개** | 실제 실행 가능 코드 + POM |
| GitHub Actions | **2개 운영 중** | TC push → Slack 자동 알림 |
| QA 경력 | **6년 9개월** | 2017 — 현재 |
| 총 레포 파일 수 | **80개+** | TC, 코드, 문서 전체 |

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

## 레포 전체 구조

```
qa-portfolio/
├── .github/workflows/         # GitHub Actions 2개
├── index.html                 # 포트폴리오 메인 페이지
├── README.md / PROFILE.md / CHANGELOG.md
│
├── testcase_*.md              # TC 파일 17개 (145건+)
├── playwright-tests/          # E2E 코드 12개 spec + helpers
├── e2e-scenarios/             # E2E 시나리오
├── test-cases/                # 상세 TC (auth/cart/search/payment/signup)
├── skills/                    # QA 역량 문서 9개
└── docs/                      # 전략/면접/KPI/온보딩 문서 24개
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
| [커버레터 4종](docs/cover-letter.md) | 상황별 커버레터 + 버전 선택 매트릭스 |
| [LinkedIn 포스트](docs/linkedin-post.md) | 버전 1~5 + 게시 타이밍 가이드 |
| [MCP 세팅 가이드](docs/mcp-setup-guide.md) | MCP 5개 설치/설정 전체 |
| [QA 전략 문서](docs/qa-strategy.md) | 테스트 전략 및 방법론 |
| [버그 리포트 양식](docs/bug-report-template.md) | 실제 예시 3건 포함 |
| [면접 Q&A](docs/interview-qa.md) | QA 면접 준비 8문항 |
| [회귀 체크리스트](docs/regression-checklist.md) | 릴리즈 전 필수 확인 목록 |
| [AI QA 비전](docs/ai-qa-vision.md) | MCP 기반 QA 자동화 미래 |

---

<div align="center">

*Built with Claude MCP · No code written · 5 MCP servers · TC 145건+ · spec 12개 · Actions 2개*

[![포트폴리오 바로가기](https://img.shields.io/badge/포트폴리오_바로가기-a855f7?style=for-the-badge&labelColor=08060f)](https://kihyunqa.github.io/qa-portfolio)

</div>
