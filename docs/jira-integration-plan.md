# 📋 Jira 연동 설계서 — PHASE 2 & 3 통합 플랜

> 실제 워크플로우 설계 문서 | 설치/설정은 `jira-mcp-plan.md` 참고  
> 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## 🎯 목표

버그 발견 → 말 한마디 → Jira 이슈 자동 생성 + Slack 알림 + Notion 기록까지 **완전 자동화**

---

## 🔄 PHASE 2 — Jira 버그 자동화 파이프라인

### 핵심 워크플로우

```
[QA 테스트 중 버그 발견]
         ↓
Claude에게 자연어로 설명
"로그인 페이지에서 Google 소셜 로그인 클릭 시 403 에러 나와"
         ↓
┌────────────────────────────────────┐
│           Claude MCP 오케스트레이션          │
│                                    │
│  jira MCP  → 버그 이슈 자동 생성   │
│  slack MCP → 담당자 멘션 알림      │
│  notion MCP→ 버그 리포트 페이지    │
│  github MCP→ 버그 리포트 파일 커밋 │
└────────────────────────────────────┘
         ↓
[Jira 보드에 버그 카드 생성 완료]
```

### 자동 생성되는 Jira 이슈 구조

```
이슈 유형: Bug
제목: [자동] 로그인 > Google 소셜 로그인 403 에러
심각도: Major (P1)

재현 환경:
- 브라우저: Chrome 122 / macOS 14
- 테스트 계정: qa-test@example.com

재현 단계:
1. 로그인 페이지 접속 (https://app.example.com/login)
2. "Google로 로그인" 버튼 클릭
3. OAuth 콜백 URL 진입

기대 결과: Google 계정 인증 후 대시보드 리다이렉트
실제 결과: 403 Forbidden 에러 페이지 표시

스크린샷: [Playwright 자동 캡처 첨부]
관련 TC: testcase_login.md > TC-015

담당자: 미배정 → 자동 알림
스프린트: 현재 스프린트 자동 배정
```

---

## 📊 Jira 연동 후 QA 대시보드

### 실시간 추적 지표

| 지표 | 현재 (PHASE 1) | 목표 (PHASE 2) |
|------|---------------|----------------|
| 버그 등록 시간 | 수동 5~10분 | **자동 10초** |
| 티켓 누락률 | 간헐적 발생 | **0%** |
| 스프린트 배정 | 수동 | **자동** |
| Slack 알림 | GitHub 트리거만 | **버그 발견 즉시** |
| Notion 연동 | TC만 | **버그 리포트 포함** |

### MCP 조합 시나리오

| 시나리오 | 사용 MCP | 자동화 결과 |
|----------|----------|-------------|
| P0 버그 발견 | jira + slack + notion | Jira P0 이슈 + Slack 긴급 멘션 + Notion 리포트 |
| 스프린트 리뷰 | jira + notion | 이슈 목록 → Notion 주간 리포트 자동 생성 |
| 릴리스 전 점검 | jira + github | 미해결 이슈 체크 → 릴리스 게이팅 |
| 주간 리포트 | jira + slack | Jira 통계 → Slack 자동 발송 |

---

## 🗓️ PHASE 3 — Calendar & Gmail MCP 확장

### 3-1. Calendar MCP 연동

```
[QA 스케줄 자동 관리]

Claude: "다음 주 릴리스 전 QA 일정 잡아줘"
    ↓
Calendar MCP → 구글 캘린더 자동 이벤트 생성
    - 월요일 10:00 : TC 설계 리뷰
    - 화요일 14:00 : E2E 자동화 실행
    - 수요일 16:00 : 버그 리포트 미팅
    - 목요일 10:00 : 재테스트 + 승인
    - 금요일 14:00 : 릴리스 QA 사인오프
    ↓
Slack MCP → 팀 일정 공유 알림
```

### 3-2. Gmail MCP 연동

```
[테스트 리포트 자동 이메일 발송]

GitHub Actions 완료
    ↓
Gmail MCP → 테스트 결과 리포트 이메일 자동 발송
    수신: PM, 개발팀장, 스테이크홀더
    내용: TC 통과율, 발견 버그, 다음 스텝
    첨부: Playwright 리포트 링크
```

---

## 🏆 전체 MCP 오케스트레이션 맵 (PHASE 1→3)

```
                    Claude Desktop
                         │
    ┌────────────────────┼─────────────────────┐
    │                    │                     │
PHASE 1 ✅         PHASE 2 🔜           PHASE 3 📅
    │                    │                     │
├ filesystem         ├ jira MCP          ├ Calendar MCP
├ playwright         │  버그 자동 등록    │  QA 일정 자동화
├ github             │  스프린트 관리     │
├ notion             │                   └ Gmail MCP
└ slack              └ (jira + slack +       리포트 자동 발송
   알림 자동화          notion 조합)
```

---

## 📋 Jira 프로젝트 설계

### 이슈 유형 구조

| 유형 | 용도 | 자동화 |
|------|------|--------|
| Epic | QA 스프린트 단위 | 수동 생성 |
| Story | 테스트 시나리오 | 수동 생성 |
| Bug | Playwright 실패 TC | **자동 생성** |
| Task | QA 작업 관리 | 수동 + 자동 |
| Sub-task | 세부 테스트 항목 | TC에서 자동 분해 |

### 라벨 및 태그 전략

| 라벨 | 의미 | 자동 적용 조건 |
|------|------|----------------|
| `auto-qa` | Claude MCP 자동 생성 | 항상 |
| `playwright` | E2E 실패 버그 | spec 실패 시 |
| `p0-critical` | 즉시 수정 필요 | 키워드 감지 시 |
| `regression` | 회귀 버그 | 이전 버전 통과 TC 실패 시 |
| `accessibility` | 접근성 이슈 | accessibility spec 실패 시 |

---

## ✅ PHASE 2 완료 체크리스트

- [ ] Jira Cloud 무료 계정 생성
- [ ] API 토큰 발급 및 claude_desktop_config.json 설정
- [ ] Claude Desktop에서 jira MCP 연동 확인
- [ ] 테스트 버그 이슈 1건 자동 생성 성공
- [ ] Slack 알림 연동 확인 (버그 등록 시 자동 알림)
- [ ] Notion 버그 리포트 자동 생성 확인
- [ ] GitHub Actions jira-bug-create.yml 추가 (GitHub 웹에서)
- [ ] index.html 로드맵 PHASE 2 완료 마킹

---

*최종 업데이트: 2026-04-06 · STEP 91 날짜 동기화*
