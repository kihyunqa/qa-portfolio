# 🔄 MCP 자동화 워크플로우 다이어그램

> Claude MCP 5개가 실제로 어떻게 연결되는지 보여주는 문서

---

## 전체 파이프라인

```
[Claude Desktop]
      |
      |-- filesystem MCP --> 로컬 파일 생성/읽기
      |-- playwright MCP --> 브라우저 자동화 실행
      |-- github MCP    --> 레포 커밋/파일 관리
      |-- notion MCP    --> TC 문서 자동 업로드
      |-- slack MCP     --> QA 결과 알림 발송
      |
[GitHub Actions]
      |
      |-- TC 파일 감지 --> Slack 자동 알림
      |-- push 이벤트 --> 워크플로우 트리거
```

---

## 실제 실행 순서

1. Claude Desktop에서 명령 입력
2. **Notion MCP** → TC 30건 자동 생성 및 업로드
3. **GitHub MCP** → 레포에 TC 파일 커밋
4. **GitHub Actions** → push 감지 → 워크플로우 실행
5. **Slack MCP** → 결과 알림 자동 발송
6. **Playwright MCP** → E2E 테스트 자동 실행
7. **Filesystem MCP** → 결과 파일 로컬 저장

---

## MCP별 실제 결과물

| MCP | 실제로 만들어진 것 |
|-----|------------------|
| filesystem | 로컬 TC 파일 생성 |
| playwright | login/cart/search/api/security spec.js 8개 |
| github | 50+ 파일 자동 커밋 |
| notion | TC Hub + 30건 페이지 자동 생성 |
| slack | 새-채널 실시간 알림 메시지 |
