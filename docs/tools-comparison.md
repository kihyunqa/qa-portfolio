# 🔧 QA 도구 비교 분석

> QA Portfolio - kihyunqa | 주요 도구별 특징 및 선택 기준  
> 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## 1. E2E 자동화 도구

| 항목 | **Playwright** ✅ | Selenium | Cypress | WebdriverIO |
|------|-----------------|----------|---------|------------|
| 언어 | JS/TS/Python/Java | Java/Python/JS/C# | JS/TS | JS/TS |
| 브라우저 | Chrome/FF/Safari/Mobile | Chrome/FF/Safari/Edge | Chrome/FF/Edge | Chrome/FF/Safari |
| 설치 난이도 | **하** (브라우저 자동 다운) | 중 (WebDriver 설정) | 하 (all-in-one) | 중 |
| 실행 속도 | **빠름** | 느림 | 빠름 | 보통 |
| API 테스트 | **포함** | 별도 도구 필요 | 포함 | 포함 |
| 병렬 실행 | **✅ 기본 제공** | ✅ (Grid 필요) | ⚠️ (무료 제한) | ✅ |
| 모바일 에뮬레이션 | **✅** | ✅ (Appium 별도) | ❌ | ✅ |
| 접근성 테스트 | **✅ 내장** | ❌ | ❌ | ❌ |
| MCP 연동 | **✅ playwright MCP** | ❌ | ❌ | ❌ |
| 관리 | Microsoft | Selenium HQ | Cypress.io | OpenJS |

**→ 선택: Playwright** — 단일 도구로 E2E + API + 모바일 + 접근성 전부 커버. MCP 연동으로 Claude Desktop에서 대화만으로 실행 가능.

---

## 2. API 테스트 도구

| 항목 | **Playwright API** ✅ | Postman | curl | REST Assured |
|------|---------------------|---------|------|--------------|
| 환경 | 코드 기반 (TS) | GUI + CLI | CLI | Java |
| 스크립팅 | ✅ | ✅ | ❌ | ✅ |
| E2E 통합 | **✅ (동일 suite)** | ❌ | ❌ | ❌ |
| 인증 처리 | **세션 쿠키 공유** | 포함 | 명시적 설정 | 포함 |
| CI/CD 통합 | **✅ 기본** | Newman 필요 | ✅ | ✅ |
| 리포트 | **HTML 리포트** | 포함 | ❌ | 포함 |
| 비용 | **무료** | 유료 (팀 플랜) | 무료 | 무료 |
| MCP 연동 | **✅** | ❌ | ❌ | ❌ |

**→ 선택: Playwright API** — E2E와 동일 코드베이스에서 API 테스트 가능. 별도 도구 없이 통합 리포트.

---

## 3. 성능 테스트 도구

| 도구 | 특징 | 사용 시나리오 | 이 포트폴리오 적용 |
|------|------|---------------|------------------|
| **Playwright** ✅ | Navigation Timing API | 페이지별 로드 시간 | ✅ performance.spec.ts |
| k6 | 대량 가상 유저 시뮬레이션 | 동시 100명 부하 테스트 | 별도 설정 필요 |
| Lighthouse | 포괄적 점수화 | SEO + A11y + 성능 통합 | CI 통합 가능 |
| JMeter | 엔터프라이즈급 | 복잡한 시나리오 부하 테스트 | 별도 설정 필요 |
| Artillery | Node.js 기반 | API 부하 테스트 | 경량, CI 통합 용이 |

**→ 기준: LCP 2.5초 이하, API 응답 500ms 이하** — performance.spec.ts로 자동화 측정

---

## 4. 문서화 / 협업 도구

| 도구 | 역할 | MCP 연동 | 이 포트폴리오 활용 |
|------|------|----------|--------------------|
| **Notion** | TC 결과 DB | ✅ notion MCP | TC 145건+ 자동 업로드 |
| **GitHub** | 코드 & 변경 이력 | ✅ github MCP | 80개+ 파일 자동 커밋 |
| **Slack** | 실시간 알림 | ✅ slack MCP | #새-채널 자동 발송 |
| **Jira** | 버그 트래킹 | ✅ FULL ACCESS | Jira + GitHub 연동 완료 |
| Confluence | 기술 문서 | 가능 | Notion 대체 사용 중 |
| Linear | 이슈 트래킹 | 가능 | 스타트업 선호 도구 |

---

## 5. CI/CD 도구 비교

| 도구 | 특징 | 이 포트폴리오 |
|------|------|--------------|
| **GitHub Actions** ✅ | GitHub 네이티브, 무료 2000분/월 | qa-notify.yml + playwright.yml |
| Jenkins | 자체 서버 필요, 고도 커스터마이징 | 별도 인프라 필요 |
| CircleCI | 빠른 빌드 속도 | 무료 티어 제한적 |
| GitLab CI | GitLab 내장 | GitLab 사용 시 |

**→ 선택: GitHub Actions** — 레포와 동일 플랫폼, 설정 간단, Slack 연동 용이.

---

## 6. MCP 도구 생태계 비교

| MCP | 연동 대상 | 주요 기능 | 상태 |
|-----|-----------|-----------|------|
| filesystem | 로컬 파일시스템 | 파일 읽기/쓰기 | ✅ 운영 |
| playwright | 브라우저 | E2E 자동 실행 | ✅ 운영 |
| github | GitHub API | 커밋/파일 관리 | ✅ 운영 |
| notion | Notion API | 페이지/DB 관리 | ✅ 운영 |
| slack | Slack API | 메시지 발송 | ✅ 운영 |
| jira | Jira Cloud API | 이슈 관리 | ✅ FULL ACCESS |
| calendar | Google Calendar | 일정 관리 | 📅 PHASE 3 |
| gmail | Gmail API | 이메일 발송 | 📅 PHASE 3 |

---

## 7. QA 매니저 관점: 도구 선택 기준

```
좋은 QA 도구의 조건:
1. 팀 학습 비용이 낮을 것
2. CI/CD 파이프라인과 통합 가능할 것
3. 리포트 자동화가 될 것
4. 유지보수 부담이 낮을 것
5. 비용 대비 효과가 높을 것

이 포트폴리오의 선택 결과:
Playwright + GitHub Actions + Notion + Slack + Claude MCP
→ 위 5개 조건 전부 충족
→ 코드 0줄로 풀 파이프라인 구축
```

---

*최종 업데이트: 2026-04-06 · STEP 91 날짜 동기화 + Jira 상태 FULL ACCESS 반영*
