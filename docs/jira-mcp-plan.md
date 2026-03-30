# 📋 Jira MCP 연동 계획 (Phase 2)

> QA 포트폴리오 PHASE 2 — Jira MCP 연동 로드맵

---

## 목표

예정 연동 기능:
1. 버그 발견 → Jira 티켓 자동 생성
2. Jira 컨포넌트별 TC 연동
3. 스프린트 현황 요약 자동 추출
4. 테스트 증적소(Test Cycle) 연동

---

## 구현 예시

```
Claude: 버그 탐지됨 → Jira MCP로 티켓 자동 생성

TICKET: QA-1234
  제목: [버그] 복수 창 동시 결제 시 중복 처리 미흡
  심각도: P1 - Major
  레이블: QA, Payment, P1
  담당자: @developer
  재현단계: 1. 브라우저 2개 열기...
```

---

## 예상 연동 다이어그램

```
Playwright 실패 감지
        ↓
Claude 버그 분석
        ↓
Jira MCP 티켓 생성
        ↓
Slack 알림
        ↓
Notion 문서화
```

---

## 연동을 위한 사전 준비

- [ ] Jira Cloud 제품 접근
- [ ] Jira API 토큰 발급
- [ ] MCP 서버 설치: `@modelcontextprotocol/server-jira`
- [ ] 프로젝트 코드 / 컨포넌트 매핑
