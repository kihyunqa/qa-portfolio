# 면접 대비: QA 자동화 & MCP Q&A

> 작성일: 2026-03-30 | 최종 수치 업데이트: 2026-03-31

---

## 🎯 자주 나오는 면접 질문 & 모범 답변

---

### Q1. MCP가 무엇이고 QA에 어떻게 활용했나요?

**A.**
MCP(Model Context Protocol)는 AI 모델이 외부 도구와 직접 연동할 수 있게 해주는 프로토콜입니다. 저는 Claude Desktop에 5개 MCP 서버를 연결해서 QA 파이프라인 전체를 자동화했습니다.

- **filesystem**: TC 파일을 로컬에 자동 저장 (145건+ 누적)
- **github**: 레포 커밋, README 업데이트, Actions 등록
- **playwright**: 브라우저 E2E 테스트 12개 spec 자동 실행
- **notion**: TC 결과를 Notion 페이지에 자동 문서화
- **slack**: QA 완료 알림을 채널에 자동 발송

코드를 한 줄도 작성하지 않고 대화만으로 전체 파이프라인을 구축한 것이 핵심입니다.

---

### Q2. TC 145건+을 어떻게 자동 생성했나요?

**A.**
Claude에게 기능 명세를 입력하면 Happy Path·Negative Path·엣지 케이스를 자동으로 생성합니다. 로그인, API, E2E, 보안, 성능, 접근성, 모바일, CI/CD, Notion 연동, Slack 알림 등 14개 카테고리에 걸쳐 145건+을 누적했습니다. filesystem MCP로 즉시 파일 저장, github MCP로 레포에 커밋까지 한 번에 처리됩니다.

---

### Q3. QA 자동화에서 가장 중요하게 생각하는 것은?

**A.**
**"무엇을 자동화하고 무엇을 수동으로 할지 판단하는 것"**입니다. 반복적이고 회귀 검증이 필요한 케이스는 자동화하고, 탐색적 테스트나 UX 판단이 필요한 부분은 수동으로 진행합니다. 이번 MCP 포트폴리오에서도 E2E 시나리오와 API TC는 자동화하고, 권한 설정이나 봇 초대 같은 일회성 설정은 수동으로 처리했습니다.

---

### Q4. 버그 발견 시 리포트 작성 프로세스를 설명해주세요.

**A.**
1. **재현 확인**: 동일 환경에서 3회 이상 재현 여부 확인
2. **심각도 분류**: P1(서비스 중단) / P2(주요 기능 장애) / P3(UX 이슈)
3. **리포트 작성**: 재현 방법·환경·기대결과·실제결과·스크린샷 포함
4. **개발팀 공유**: Jira/Slack을 통해 즉시 공유 및 담당자 배정
5. **수정 후 검증**: 픽스 배포 후 회귀 테스트 진행

이번 프로젝트에서도 `testcase_bug-report.md`에 동일한 포맷으로 기록했습니다.

---

### Q5. playwright로 어떤 테스트를 했나요?

**A.**
12개 spec 파일로 로그인·결제·보안·접근성·성능·알림·API 등 전 영역 E2E를 커버했습니다.

- login.spec.js — 로그인 플로우 (정상/비정상/잠금)
- search.spec.js — 검색 기능 및 자동완성
- cart.spec.js — 장바구니 추가/삭제/수량 변경
- api.spec.js — API 응답 검증
- payment.spec.js — 결제 플로우
- security.spec.js — XSS/SQL Injection 방어
- performance.spec.js — 페이지 로딩 속도
- accessibility.spec.js — WCAG 접근성 기준
- signup.spec.js — 회원가입 플로우
- notification.spec.js — Slack 알림 연동
- mcp-portfolio.spec.js — 포트폴리오 사이트 E2E
- portfolio.spec.js — 반응형 레이아웃 검증

Page Object Model(POM) 구조를 적용해 유지보수성도 확보했습니다.

---

### Q6. GitHub Actions를 QA에 어떻게 활용했나요?

**A.**
2개의 Actions 워크플로우를 운영 중입니다.

- `qa-notify.yml`: `testcase_*.md` 파일이 커밋될 때마다 트리거되어 변경된 파일 목록과 커밋 메시지를 Slack 새-채널로 자동 알림
- `main.yml`: `index.html`, `README.md`, `docs/**` 변경 시 포트폴리오 구조 검증 및 Actions 요약 생성

TC 업로드와 팀 공유가 완전 자동화된 구조이며, YAML 파일 설계도 Claude MCP가 담당하고 Secret 관리만 수동으로 처리했습니다.

---

### Q7. 6년 9개월 QA 경력에서 가장 큰 성과는?

**A.**
SmartThings·Bixby 글로벌 QA(모비프렌, 삼성 파트너)에서 다국어/다디바이스 환경의 복잡한 QA를 수행한 경험, IMS Mobility에서 Cypress E2E 자동화로 회귀 테스트 시간을 단축한 경험, 두플에서 QA Part Leader로 테스트 전략 수립과 팀 리딩을 담당한 경험이 있습니다. 이 경력 위에 Claude MCP 자동화를 더해 TC 설계부터 문서화, 알림까지 전 과정을 자동화할 수 있게 됐습니다.

---

### Q8. 앞으로의 QA 자동화 방향은?

**A.**
MCP 생태계가 확장될수록 QA 엔지니어의 역할도 확장됩니다. 단순 TC 실행을 넘어 **자동화 파이프라인 설계자**로서의 역할이 중요해집니다. 현재는 Jira MCP 연동을 준비 중이며, 버그 티켓 자동 생성과 스프린트 분석을 자동화할 계획입니다. AI를 활용해 TC를 자동 생성하고, 실행 결과를 자동 문서화하고, 팀에 자동 알림을 보내는 구조를 직접 구축한 경험을 바탕으로 더 복잡한 QA 자동화 시스템을 설계하고 싶습니다.

---

*면접 대비 Q&A | 수치 최종 업데이트: 2026-03-31 (TC 145건+, Playwright 12 spec, Actions 2개)*
