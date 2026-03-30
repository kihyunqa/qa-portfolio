# 🤖 AI 기반 QA 자동화 비전

> 6년 9개월의 QA 경력과 Claude MCP 실제 도입 경험을 바탕으로 작성한 비전 문서

---

## 왜 AI QA인가

QA 엔지니어가 하루에 소비하는 시간의 상당 부분은 **반복 작업**이다.

- TC 문서 작성 및 정리
- 테스트 결과 Notion/스프레드시트에 업로드
- 슬랙/이메일로 팀에 완료 공유
- GitHub에 파일 커밋 및 PR 생성

이 작업들은 중요하지만, QA 엔지니어의 **핵심 가치인 "무엇을 테스트할 것인가"** 에 집중할 시간을 빼앗는다.

Claude MCP는 이 반복 구간을 자동화하여 QA가 **판단과 설계에 집중**할 수 있게 만든다.

---

## 전통적 QA vs AI 기반 QA (실제 비교)

| 항목 | 전통적 QA | AI 기반 QA (MCP) |
|------|-----------|------------------|
| TC 작성 | 수동 2시간+ | Claude 대화로 5분 |
| 문서화 | 수동 업로드 | Notion MCP 자동 동기화 |
| 코드 커밋 | 수동 push | GitHub MCP 자동 커밋 |
| 실패 알림 | 수동 커뮤니케이션 | Slack MCP 실시간 발송 |
| E2E 실행 | 스케줄링 필요 | CI/CD + Playwright 자동 트리거 |
| 보고서 작성 | 템플릿 수동 채우기 | 결과 자동 집계·정리 |

---

## 이 포트폴리오에서 실제로 검증한 것

### Phase 1 — 완료 ✅

```
사용자(QA): "로그인 TC 만들어줘, GitHub에 올리고, Notion에 정리하고, Slack으로 알려줘"
Claude MCP:
  1. filesystem → TC 파일 로컬 생성
  2. github    → 자동 커밋 (testcase_login.md)
  3. notion    → TC 허브 페이지 자동 업데이트
  4. slack     → 새-채널 완료 알림 발송
  5. playwright→ E2E 브라우저 자동화 spec 실행
```

- TC 145건+ 생성 완료
- Playwright spec 12개 작성 완료
- GitHub Actions → Slack 알림 파이프라인 구축 완료
- **코드 0줄**, 대화만으로 구현

### Phase 2 — 예정 🔜

```
Jira MCP 연동:
  버그 발견 → Claude가 Jira 이슈 자동 등록 → 담당자 자동 배정
```

---

## QA 엔지니어에게 AI가 바꾸는 것

### 바뀌는 것
- 반복 문서화 작업 → 자동화
- 팀 공유 타이밍 → 실시간 자동 알림
- TC 작성 속도 → 대화 기반으로 대폭 단축

### 바뀌지 않는 것
- **무엇을 테스트할지 판단하는 능력**
- **엣지케이스와 리스크를 감지하는 QA 감각**
- **팀과 제품을 이해하는 도메인 지식**

AI는 QA를 대체하지 않는다.  
**반복 구간을 AI에게 맡기고, QA는 본질에 집중한다.**

---

## 로드맵

| Phase | 내용 | 상태 |
|-------|------|------|
| Phase 1 | MCP 5개 연동 (filesystem/github/playwright/notion/slack) | ✅ 완료 |
| Phase 2 | Jira MCP — 버그 자동 등록·배정 | 🔜 예정 |
| Phase 3 | AI TC 추천 — 코드 변경 분석 후 TC 자동 제안 | 💡 아이디어 |
| Phase 4 | 실패 패턴 학습 — 유사 버그 사전 경보 시스템 | 💡 아이디어 |

---

*작성: 성기현 · 2026-03-31 · https://kihyunqa.github.io/qa-portfolio*
