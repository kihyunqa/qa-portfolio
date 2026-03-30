# 👋 QA 온 ubcf4딩 가이드

> 신규 팀원이 QA 프로세스에 빠르게 적응할 수 있도록 작성된 온보딩 문서

---

## 1일차: 환경 세팅

- [ ] 테스트 환경 접속 정보 수령
- [ ] GitHub 레포 클론 + 및 branches 파악
- [ ] Notion 페이지 권한 수령
- [ ] Slack 판로 입장 (qa-team, qa-alerts, 새-채널)
- [ ] Claude Desktop + MCP 5개 실행 확인

---

## 2~3일차: 프로세스 파악

- [ ] README.md 읽기 (kihyunqa/qa-portfolio)
- [ ] 테스트케이스 파일 파악 (testcase_*.md)
- [ ] E2E 시나리오 파악 (e2e-scenarios/)
- [ ] Playwright spec 파일 읽기 (playwright-tests/)
- [ ] GitHub Actions workflow 파악

---

## 핸심 QA 도구

| 도구 | 용도 | 접속 |
|------|------|------|
| Claude Desktop | MCP 자동화 | 로컈 설치 |
| GitHub | 코드/TC 관리 | github.com/kihyunqa |
| Notion | QA 문서화 | 내부 링크 |
| Slack | 팀 알림 | 새-채널 |
| Playwright | E2E 자동화 | playwright-tests/ |

---

## TC 작성 관례

```
파일명: testcase_{feature}.md
ID 형식: {FEATURE}-{TYPE}-{NUM}

예시:
  AUTH-HP-001 (인증-해피-1)
  CART-NG-003 (장바구니-네거티브-3)
  API-EC-001 (엔드포인트-엣지-1)
```

---

## 일일 QA 루틴

1. **AM 09:00** — Slack 업데이트 확인
2. **AM 09:30** — 신규 TC 작성 (Claude MCP 활용)
3. **PM 02:00** — E2E 실행 + 결과 정리
4. **PM 05:00** — GitHub 코밋 + Notion 문서화
5. **PM 05:30** — Slack 데일리 리포트
