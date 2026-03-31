# 🔄 MCP 자동화 워크플로우 다이어그램

> Claude MCP 5개가 실제로 어떻게 연결되는지 보여주는 문서  
> 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## 전체 아키텍처 파이프라인

```
┌─────────────────────────────────────────────────────────┐
│                   Claude Desktop                        │
│                                                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │ filesystem   │  │  playwright  │  │   github     │  │
│  │    MCP       │  │    MCP       │  │    MCP       │  │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  │
│         │                 │                 │           │
│  ┌──────┴───────┐  ┌──────┴───────────────┐ │           │
│  │  notion MCP  │  │      slack MCP        │ │           │
│  └──────────────┘  └──────────────────────┘ │           │
└────────────────────────────────────────┬────┘           │
                                         │
                                    GitHub Push
                                         │
                              ┌──────────▼──────────┐
                              │   GitHub Actions     │
                              │  qa-notify.yml       │
                              │  playwright.yml      │
                              └──────────┬───────────┘
                                         │
                              ┌──────────▼──────────┐
                              │   Slack 알림 자동 발송 │
                              │   #새-채널            │
                              └─────────────────────┘
```

---

## 실제 실행 순서 (TC 생성 → 배포 전 체크까지)

| 단계 | Claude 명령 | MCP | 결과 |
|------|------------|-----|------|
| 1 | "로그인 TC 만들어줘" | filesystem | 로컬 testcase_login.md 생성 |
| 2 | "Notion에 올려줘" | notion | TC Hub 페이지 자동 업로드 |
| 3 | "GitHub에 커밋해줘" | github | 레포에 파일 push |
| 4 | (자동) | GitHub Actions | qa-notify 트리거 |
| 5 | (자동) | slack | 새-채널 알림 발송 |
| 6 | "E2E 테스트 실행해줘" | playwright | spec 12개 자동 실행 |
| 7 | "결과 저장해줘" | filesystem | 로컬 결과 파일 저장 |

---

## MCP별 상세 역할

### 🗂 filesystem MCP
- TC 파일(testcase_*.md) 로컬 생성
- Playwright spec 파일 읽기/쓰기
- 테스트 결과 파일 저장

### 🎭 playwright MCP
- spec 12개 자동 실행
- 브라우저 E2E 테스트 (login, search, cart, api, accessibility, performance 등)
- 실패 시 스크린샷 자동 캡처

### 🐙 github MCP
- TC 파일, docs, spec 자동 커밋
- 80개+ 파일 버전 관리
- GitHub Pages 포트폴리오 배포

### 📝 notion MCP
- TC 145건 자동 업로드
- TC Hub 데이터베이스 관리
- 테스트 결과 페이지 자동 생성

### 💬 slack MCP
- GitHub Actions 트리거 시 실시간 알림
- 새-채널(C0AQFJXC800) 자동 발송
- P1 버그 긴급 알림

---

## MCP별 실제 결과물

| MCP | 실제로 만들어진 것 | 수량 |
|-----|------------------|------|
| filesystem | 로컬 TC 파일, spec 파일 | 80개+ |
| playwright | E2E spec (login, search, cart, api, accessibility, performance 등) | 12개 spec / 145건+ TC |
| github | 자동 커밋, Pages 배포 | 80개+ 파일 |
| notion | TC Hub + TC 결과 페이지 | 145건+ |
| slack | 실시간 알림 메시지 | 새-채널 운영 중 |

---

## 시나리오별 자동화 흐름

### 시나리오 1: 새 TC 추가
```
Claude: "회원가입 TC 만들어서 Notion에 올리고 GitHub에 커밋해줘"
    ↓ filesystem → testcase_signup.md 생성
    ↓ notion MCP → Notion DB 업로드
    ↓ github MCP → 레포 커밋
    ↓ GitHub Actions → 자동 트리거
    ↓ slack MCP → 새-채널 알림
```

### 시나리오 2: E2E 테스트 실행
```
Claude: "로그인 E2E 테스트 실행하고 결과 알려줘"
    ↓ playwright MCP → login.spec.ts 실행
    ↓ 결과 수집 (pass/fail/screenshot)
    ↓ filesystem MCP → 결과 파일 저장
    ↓ slack MCP → 결과 알림 발송
```

### 시나리오 3: 버그 발견
```
Playwright spec 실패 감지
    ↓ GitHub Actions → qa-notify.yml 트리거
    ↓ slack MCP → P1 긴급 알림 (#새-채널)
    ↓ (PHASE 2) jira MCP → 버그 이슈 자동 등록
```

---

*최종 업데이트: 2026-03-31 · STEP 26 보강 · 1380 → 4500+ bytes*
