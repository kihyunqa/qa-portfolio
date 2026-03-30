# 🤖 다음 Claude를 위한 인수인계 문서

> 이 문서를 읽는 Claude에게: 아래 내용을 먼저 읽고 이어서 작업해주세요.
> 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`

---

## ✅ 현재까지 완료된 것 (건드리지 말 것)

### 포트폴리오 사이트
- `index.html` — 보라색 테마 포트폴리오 사이트 (GitHub Pages 배포)
- URL: `https://kihyunqa.github.io/qa-portfolio`
- 내용: 경력 타임라인, MCP 자동화 프로젝트, TC 섹션, 실제 연동 증거 섹션

### 실제 연동 완료된 MCP (4개)
| MCP | 상태 | 비고 |
|-----|------|------|
| filesystem | ✅ 연동 | 로컬 파일 읽기/쓰기 |
| github | ✅ 연동 | 이 레포 커밋 전부 MCP로 |
| playwright | ✅ 연동 | E2E 브라우저 테스트 |
| notion | ✅ 연동 | TC 결과 Notion 자동 생성 확인 |

### 레포 주요 파일 구조
```
qa-portfolio/
├── index.html                  ← 포트폴리오 메인 (건드리기 전 SHA 확인)
├── README.md
├── PROFILE.md                  ← 링크드인/이력서용
├── CHANGELOG.md
├── testcase_login.md           ← 로그인 TC 24건 (원본)
├── test-cases/                 ← TC 30건 (auth/cart/search-api)
│   ├── tc-auth.md
│   ├── tc-cart.md
│   └── tc-search-api.md
├── e2e-scenarios/
├── playwright-tests/           ← spec 파일들 있음
├── screenshots/
├── skills/
├── docs/                       ← 커버레터, 로드맵 문서들
└── .github/workflows/
    ├── main.yml
    └── qa-notify.yml           ← Slack 알림 워크플로우
```

---

## 🚨 현재 문제점 (반드시 해결 필요)

### 1. index.html 숫자/내용 불일치
- index.html에는 "MCP 4개, 프로젝트 10개" 라고 되어있는데
- 실제 레포에는 `playwright-tests/` 폴더에 spec 파일 여러 개, TC 150건+ 있음
- **할 일**: index.html의 통계 숫자와 TC 링크를 실제 레포 내용에 맞게 수정

### 2. testcase_*.md 파일 루트에 산재
- 루트에 `testcase_login.md`, `testcase_api-testing.md` 등 여러 파일 흩어짐
- `test-cases/` 폴더와 **중복/혼재** 상태
- **할 일**: 정리하거나 index.html에서 링크 통일

---

## 🎯 다음 스텝 (우선순위 순)

### STEP 1 — index.html 실제 현황 반영 [바로 하기]
```
1. index.html SHA 확인 후 수정
2. 통계 섹션: "MCP 4개 실제 연동 / TC 30건+ / 프로젝트 10개" 로 정확하게
3. test-cases/ 폴더 3개 파일 링크를 포트폴리오에 추가
4. GitHub Actions 워크플로우 존재 사실 반영
```

### STEP 2 — GitHub Actions 실제 작동 확인 [STEP 1 이후]
```
- .github/workflows/main.yml 내용 확인
- .github/workflows/qa-notify.yml (Slack 알림) 내용 확인
- Actions 탭에서 실제 실행됐는지 확인
- 안됐으면 트리거 조건 점검
```

### STEP 3 — Slack MCP 실제 연동 [PHASE 2 시작]
```
현재 상태: qa-notify.yml 워크플로우는 있지만 Slack MCP 직접 연동은 미완
할 일:
1. Desktop 앱에서 Slack MCP 토큰 설정 확인
2. claude_desktop_config.json에 Slack 서버 추가
3. 테스트: "qa-channel에 QA 완료 메시지 보내줘"
4. 성공하면 index.html에 Slack MCP 실제 연동 배지 추가
```

### STEP 4 — Jira MCP 연동 [PHASE 2 후반]
```
docs/jira-mcp-plan.md 에 계획 문서 이미 있음
Jira Cloud 계정 필요 (없으면 무료 트라이얼 생성)
토큰 발급 → config에 추가 → 테스트
```

### STEP 5 — 포트폴리오 공개 공유 [PHASE 3]
```
- GitHub Pages 실제 접속 확인: https://kihyunqa.github.io/qa-portfolio
- 링크드인 게시물: docs/linkedin-post.md 참고
- 이력서 첨부용: PROFILE.md 활용
```

---

## 💡 작업 시 주의사항

1. **index.html 수정 전 반드시 SHA 먼저 가져올 것**
   ```
   github:get_file_contents → sha 값 복사 → create_or_update_file에 sha 포함
   ```

2. **숫자는 절대 부풀리지 말 것**
   - 실제 연동된 MCP만 "연동 완료" 표시
   - 실제로 작동 확인한 것만 포함

3. **헛짓 패턴 주의**
   - 새 파일 무한 생성 금지 (이미 파일이 너무 많음)
   - 포트폴리오 내용 계속 늘리는 것 금지 (정확도가 더 중요)
   - okogora 레포 건드리지 말 것 (다른 레포임)

4. **토큰 효율 위한 작업 순서**
   - 큰 파일(index.html) 수정은 한 번에 몰아서
   - 작은 확인 작업들 먼저 묶어서 처리

---

## 📞 현재 연락처/링크
- GitHub: https://github.com/kihyunqa/qa-portfolio
- 포트폴리오: https://kihyunqa.github.io/qa-portfolio
- 이메일: kihyun.qa@gmail.com

---
*최종 업데이트: 2026-03-30 · 작성: Claude Sonnet 4.6*
