# 🤖 MCP Integration Skills

> Model Context Protocol 5개 도구 실제 연동 미 활용 기록

---

## MCP란 무엇인가?

MCP(Model Context Protocol)는 AI 에이전트(Claude)가 외부 도구 및 시스템과 실시간으로 상호작용할 수 있게 하는 지래객니다. 이 포트폴리오는 QA 업무에 MCP를 실제 적용한 사례를 담고 있습니다.

---

## 연동된 MCP 도구 (5개)

### 1. GitHub MCP

```
역할: 코드 리뷰, TC 파일 업로드, Actions 콘트롤
도구: create_or_update_file, push_files, list_commits
실제 활용:
  - testcase_*.md 자동 업로드
  - GitHub Actions 자동 트리거
  - 코드 리뷰 쿠멘트 자동 작성
```

### 2. Playwright MCP

```
역할: E2E 브라우저 자동화 테스트
도구: playwright_navigate, playwright_click, playwright_fill, playwright_screenshot
실제 활용:
  - 로그인/검색/장바구니 E2E 시나리오 실행
  - 빠른 레카 테스트 실행
  - 스크린샷 증거 자동 수집
```

### 3. Slack MCP

```
역할: QA 결과 알림, 실시간 통보
도구: slack_post_message, slack_list_channels
실제 활용:
  - TC 완료 시 자동 알림 (표준 포맷)
  - 버그 발견 즉시 통보
  - 주간 QA 리포트 자동 발송
```

### 4. Notion MCP

```
역할: TC 결과 문서화, 대시보드
도구: notion_create_page, notion_update_block
실제 활용:
  - TC 실행 결과 Notion 자동 기록
  - QA 리포트 페이지 자동 업데이트
```

### 5. Filesystem MCP

```
역할: 로컸 파일 관리, TC 저장
도구: create_file, read_file, list_directory
실제 활용:
  - 로카 TC 파일 생성 및 관리
  - 테스트 리포트 로컀 저장
```

---

## MCP 자동화 비즈니스 가치

```
[종전 수동 QA 프로세스]
TC 작성 (30분) → 실행 (60분) → 문서화 (20분) → 팀 동유 (10분) = 120분

[MCP 연동 후 자동화]
TC 작성 (10분) → 자동 실행 (5분) → 자동 문서화 (0분) → 자동 알림 (0분) = 15분

절감 효과: 87.5% 시간 절감
```

---

## 주요 실적

- TC 총 100건+ 자동 관리
- GitHub Actions 통합 파이프라인 구성
- Playwright 8개 spec.js 실제 코드 작성
- Slack 알림 자동화 100% 완료
