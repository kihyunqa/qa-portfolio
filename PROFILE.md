# 성기현 · QA Engineer

> 🔗 포트폴리오: https://kihyunqa.github.io/qa-portfolio  
> 🐙 GitHub: https://github.com/kihyunqa

---

## 한 줄 소개

**6년 9개월 QA 경력 위에 Claude MCP 자동화를 더한 QA 엔지니어.**  
기능 명세에서 TC 생성, E2E 테스트, Playwright 실제 코드, 버그 리포트, 문서화, 팀 알림까지 전부 대화 한 번으로 구축했습니다.

---

## 핵심 역량

### QA 전문성 (6년 9개월)
- TC 설계 (해피패스 · 네거티브 · 엣지케이스 전 구간)
- 버그 리포팅 & 트래킹, 릴리즈 QA 리딩
- E2E 자동화 (Playwright, Cypress), API 테스트 (Swagger, Playwright API Context)
- IoT / 모바일앱 / 웹 / 반도체 시뮬레이션 도메인 경험

### Claude MCP 자동화 (현재 포트폴리오 구현)
- **MCP 5개 연동**: filesystem · playwright · github · slack · notion
- **Playwright 실제 코드**: login / search / cart / API / accessibility / performance 스펙 총 56건
- **TC 자동생성**: 명세 입력 → TC 생성 → 로컈 저장 → GitHub 커밋
- **전체 QA 파이프라인**: TC → E2E 코드 → GitHub Actions → Slack 알림

---

## 경력

| 기간 | 회사 | 직급 | 주요 업무 |
|------|------|------|-----------|
| 2024.11 ~ 2025.02 | 두플 | QA 파트장 | 반도체 공정 시뮬레이션 QA 리드, TC 설계, 팀 리딩 |
| 2022.03 ~ 2024.02 | IMS Mobility | QA 대리 | 모바일앱/웹/백오피스 QA, Cypress E2E, Swagger API, 결제 QA |
| 2017.09 ~ 2022.01 | 모비프렌 (삼성전자 파트너) | QA 주임 | IoT SmartThings, AI Bixby, 삼성 모바일앱 검증 |

---

## Playwright 실제 코드 (TC 56건)

| 스펙 | TC 수 | 설명 |
|------|-------|------|
| login.spec.js | 10 | 로그인/로그아웃, XSS 방어, 스크린샷 |
| search.spec.js | 10 | 검색, 필터, XSS 입력 방어 |
| cart.spec.js | 10 | 장바구니, 결제 3단계 추주 |
| api.spec.js | 10 | REST API (GET/POST/PUT/PATCH/DELETE) |
| accessibility.spec.js | 8 | A11y, Tab 키보드, lang 속성 |
| performance.spec.js | 8 | 로드타임, Navigation Timing API |

---

## MCP 자동화 프로젝트

| # | 프로젝트 | 사용 MCP | 상태 |
|---|---------|---------|------|
| 01 | TC 자동생성 워크플로우 | filesystem · github · playwright | ✅ 완료 |
| 02 | Playwright 실제 E2E 코드 (56건) | playwright | ✅ 완료 |
| 03 | GitHub Actions CI/CD 연동 | github | ✅ 완료 |
| 04 | Slack 알림 자동화 | slack | ✅ 완료 |
| 05 | Notion TC 결과 문서화 | notion | ✅ 완료 |
| 06 | skills/ 역량 증명 문서화 | filesystem · github | ✅ 완료 |
| 07 | API 테스트 스위트 | playwright API | ✅ 완료 |
| 08 | 접근성/성능 테스트 | playwright | ✅ 완료 |

---

## 이력서 한 줄 요약 (복붙용)

```
성기현 | QA Engineer | 6년 9개월
Claude MCP 5개 연동, Playwright E2E 56건 실제 코드, CI/CD GitHub Actions 파이프라인 구현
TC 자동생성 → E2E 코드 → GitHub 커밋 → Slack 알림 전 파이프라인 대화만으로 구축
포트폴리오: https://kihyunqa.github.io/qa-portfolio
```

---

## 링크드인 소개글 (복붙용)

```
🔧 QA Engineer · 6년 9개월

TC 설계, E2E 자동화, API 테스트, 릴리즈 QA까지 —
그 위에 Claude MCP 자동화를 직접 구축했습니다.

✅ 구현한 것들:
• Playwright E2E 실제 코드 56건 (login/search/cart/API/A11y/성능)
• GitHub Actions CI/CD 파이프라인 (TC push → Slack 자동 알림)
• REST API 테스트 (GET/POST/PUT/PATCH/DELETE) 코드 작성
• 접근성(A11y) 테스트 코드 작성
• 성능 Navigation Timing 측정 자동화

👉 포트폴리오: https://kihyunqa.github.io/qa-portfolio
```

---

*Built with Claude MCP · Playwright · GitHub Actions*
