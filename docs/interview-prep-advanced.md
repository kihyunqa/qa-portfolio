# 🎞️ 면접 심화 Q&A — MCP 포트폴리오 기반

> Claude MCP 자동 생성 | 2026-03-30

---

**Q1. MCP가 뮴역니까?**
Model Context Protocol의 약자로, AI(Claude)가 외부 도구를 실제로 제어할 수 있게 해주는 표준 프로토콜입니다. 저는 filesystem, github, playwright, notion, slack 5개 MCP를 연동해 QA 자동화 파이프라인을 구축했습니다.

**Q2. Playwright로 어떤 테스트를 자동화했나요?**
로그인/회원가입/장바구니/결제/검색/API/보안/성능/접근성 영역 9개 spec 파일을 작성했고, Page Object Model 구조로 유지보수성을 높였습니다. 멀티 브라우저(Chrome/Firefox/Mobile) 환경에서 테스트를 실행합니다.

**Q3. CI/CD를 어떻게 구축했나요?**
GitHub Actions로 3개 워크플로우를 구축했습니다. TC 파일 push 시 Slack 자동 알림, 매일 스케줄 실행, PR 생성 시 TC 커버리지 자동 분석 등이 자동화되어 있습니다.

**Q4. Notion MCP로 뭐를 했나요?**
TC 30건을 Notion에 자동 업로드하는 코드를 작성하고, TC Hub 페이지를 생성했습니다. 수동으로 30분 걸리던 작업이 30초로 단축됐습니다.

**Q5. QA 자동화에서 가장 중요하게 생각하는 것이 뭐나요?**
실행 속도보다 신뢰성과 유지보수성입니다. POM 패턴 적용, 테스트 데이터 분리, 실패 시 명확한 에러 메시지 제공 등을 중시합니다.

**Q6. 버그를 발견하면 어떻게 보고하나요?**
재현에 필요한 스텍(브라우저/언어/환경), 예상 vs 실제 결과, 심각도를 콘텐츠와 함께 문서화합니다. 심각도는 P0~P3로 구분하고 스크린샷과 로그를 첨부합니다.

**Q7. 성능 테스트는 어떻게 접근하나요?**
API 응답 시간(200ms 미만), 동시 요청 100개 부하 테스트, 페이지 로드 시간(3초 미만) 기준으로 측정합니다. Playwright의 `waitForResponse`와 `performance.timing`을 활용합니다.

**Q8. 보안 테스트는 어떤 항목을 커버하나요?**
XSS 주입, SQL Injection, CSRF, 인증 우회, Rate Limiting, 마가닦 접근 제어 등을 OWASP Top 10 기준으로 테스트합니다.
