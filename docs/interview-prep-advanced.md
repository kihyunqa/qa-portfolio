# 🎯 면접 심화 Q&A — MCP 포트폴리오 기반

> 실제 연동 경험 기반 | 최종 업데이트: 2026-03-31

---

## 🤖 MCP & AI 자동화

**Q1. MCP가 무엇인가요? 실제로 어떻게 활용했나요?**

Model Context Protocol의 약자로, AI(Claude)가 외부 도구를 실제로 제어할 수 있게 해주는 표준 프로토콜입니다.

저는 5개 MCP를 직접 연동해 QA 자동화 파이프라인을 구축했습니다:

| MCP | 실제 활용 |
|-----|----------|
| **filesystem** | 로컬 TC 파일 읽기/쓰기, spec 자동 생성 |
| **github** | 커밋·PR 생성, 워크플로우 트리거 |
| **playwright** | E2E 자동화 12개 spec 실행 |
| **notion** | TC 30건 자동 업로드, Hub 페이지 생성 |
| **slack** | QA 알림 자동 발송 (#새-채널) |

실제 성과: Notion에 TC 30건 수동 입력 시 30분 → MCP로 30초. GitHub push → Slack 알림까지 자동화로 수동 공유 단계 제거.

---

**Q2. MCP 연동 시 트러블슈팅 경험이 있나요?**

네, 몇 가지 실제 이슈를 해결했습니다:

- **Slack MCP 채널 ID 오류**: 채널 이름이 아닌 채널 ID(C0AQFJXC800)를 직접 지정해야 정상 동작함을 확인
- **Notion API 응답 지연**: 대량 업로드 시 rate limit 회피를 위해 배치 처리 적용
- **Playwright spec 경로 문제**: playwright.config.ts의 testDir 경로가 상대경로여야 GitHub Actions에서 정상 실행됨

---

## 🎭 Playwright E2E 자동화

**Q3. Playwright로 어떤 테스트를 자동화했나요?**

12개 spec 파일로 핵심 사용자 플로우를 커버합니다:

| Spec | 커버 영역 |
|------|----------|
| auth.spec.ts | 로그인·로그아웃·세션 유지 |
| signup.spec.ts | 회원가입 유효성 검증 |
| cart.spec.ts | 장바구니 CRUD |
| payment.spec.ts | 결제 플로우 전체 |
| search.spec.ts | 검색·필터·정렬 |
| api.spec.ts | REST API 응답 검증 |
| security.spec.ts | XSS·SQL Injection 방어 확인 |
| performance.spec.ts | 응답 시간·부하 측정 |
| accessibility.spec.ts | WCAG 2.1 접근성 |
| cross-browser.spec.ts | Chrome·Firefox·Mobile 동시 실행 |
| notification.spec.ts | 알림 트리거·수신 확인 |
| regression.spec.ts | 핵심 회귀 시나리오 |

**설계 원칙**: Page Object Model(POM) 패턴 적용 → 셀렉터 변경 시 한 곳만 수정. 테스트 데이터는 fixtures로 분리해 환경별 독립성 확보.

---

**Q4. 불안정한 테스트(Flaky Test)는 어떻게 처리하나요?**

실제 경험한 해결 방법:

1. **명시적 wait 대신 조건 기반 wait**: `waitForSelector` → `waitForResponse` 또는 `waitForLoadState('networkidle')` 전환
2. **재시도 로직**: playwright.config에서 `retries: 2` 설정, CI 환경에서만 활성화
3. **테스트 격리**: 각 테스트 전 `storageState` 초기화로 상태 오염 방지
4. **타임아웃 조정**: 네트워크 요청 타임아웃을 환경별(로컬 5초 / CI 15초)로 분리

---

## ⚙️ CI/CD & 자동화

**Q5. CI/CD를 어떻게 구축했나요?**

GitHub Actions로 2개 워크플로우를 운영 중입니다:

**qa-notify.yml** — TC 변경 감지 알림
- 트리거: `testcase_*.md` push 시 자동 실행
- 동작: 변경된 TC 파일명 → Slack #새-채널 자동 알림
- 효과: 팀 공유 누락 제로, 즉시 가시성 확보

**playwright.yml** — 자동화 테스트 실행
- 트리거: Push·PR 생성 시
- 동작: 12개 spec 전체 실행 → 결과 Artifact 저장
- 환경: ubuntu-latest, Node.js 18

> ⚠️ 참고: workflow 파일은 GitHub 웹 UI에서만 수정 (MCP API 한도 제약)

---

**Q6. QA와 개발팀 협업 경험을 말해주세요.**

포트폴리오에서 구현한 협업 구조:

- **TC 변경 즉시 공유**: GitHub push → Slack 자동 알림으로 수동 공유 불필요
- **버그 리포트 표준화**: P0~P3 심각도 분류, 재현 스텝·환경·스크린샷 포함 템플릿 사용
- **PR 연동**: TC 파일 변경 시 PR 커버리지 자동 분석 → 누락 TC 즉시 확인
- **Notion TC Hub**: 개발팀도 접근 가능한 공유 테스트 케이스 저장소 운영

---

## 🔐 보안 & 성능

**Q7. 보안 테스트는 어떤 항목을 커버하나요?**

OWASP Top 10 기준으로 Playwright spec에 구현:

- **XSS**: `<script>alert(1)</script>` 입력 → 이스케이프 확인
- **SQL Injection**: `' OR '1'='1` 패턴 입력 → 쿼리 차단 확인
- **CSRF**: 토큰 없는 상태 변경 요청 → 403 응답 확인
- **인증 우회**: 토큰 만료/변조 시 401 응답 확인
- **Rate Limiting**: 동일 IP 100회 이상 요청 → 429 응답 확인
- **미인가 접근**: 권한 없는 리소스 접근 → 403 확인

---

**Q8. 성능 테스트는 어떻게 접근하나요?**

Playwright `performance.timing` API와 `waitForResponse`를 활용:

| 기준 | 목표값 | 측정 방법 |
|------|--------|----------|
| API 응답 시간 | 200ms 미만 | `waitForResponse` 타임스탬프 |
| 페이지 로드 | 3초 미만 | `performance.timing.loadEventEnd` |
| 동시 요청 | 100개 동시 | Promise.all 병렬 요청 |
| TTI | 2초 미만 | `waitForLoadState('networkidle')` |

---

## 💼 QA 전략 & 마인드셋

**Q9. 테스트 우선순위는 어떻게 결정하나요?**

3가지 기준으로 우선순위 결정:

1. **비즈니스 임팩트**: 결제·로그인 등 핵심 플로우 → 최우선 (P0)
2. **변경 빈도**: 자주 수정되는 모듈 → 회귀 테스트 집중
3. **실패 비용**: 사용자에게 직접 영향 범위 → 심각도 분류 기준

실제 적용: 이 포트폴리오에서 auth·payment·cart를 P0로 분류, 해당 spec을 먼저 작성.

---

**Q10. QA 자동화에서 가장 중요하게 생각하는 것이 뭔가요?**

**신뢰성 > 속도**입니다.

빠르게 실행되더라도 결과를 믿을 수 없는 테스트는 오히려 해롭습니다. 제가 중시하는 원칙:

- **POM 패턴**: 셀렉터 변경에 강건한 구조
- **테스트 독립성**: 순서 무관하게 단독 실행 가능
- **명확한 실패 메시지**: 어디서 왜 실패했는지 로그만 보고 파악 가능
- **유지보수성**: 새 팀원이 spec을 읽고 의도를 바로 이해할 수 있도록

---

## 📊 실제 성과 수치

| 항목 | 수치 |
|------|------|
| 전체 TC 건수 | 145건+ |
| 자동화 spec | 12개 |
| MCP 연동 수 | 5개 |
| Notion 업로드 시간 단축 | 30분 → 30초 (98% 절감) |
| Slack 알림 자동화 | push 즉시, 수동 공유 0건 |
| 커버 영역 | 기능·보안·성능·접근성·회귀 |

---

*최종 업데이트: 2026-03-31 · STEP 29 완료*
