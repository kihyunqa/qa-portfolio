# 🤖 MCP 연동 스킬

> Claude MCP 5개 실제 연동 증거 | 2026-03-30

## 연동 MCP 목록

| MCP | 실제 사용한 작업 |
|-----|-------------------|
| filesystem | TC 파일 로컬 생성/읽기/수정 |
| playwright | E2E spec 12개 실제 자동화 실행 |
| github | 80개+ 파일 레포 커밋/관리 |
| notion | TC Hub + 30건 페이지 자동 업로드 (초기 스프린트 기준, 누적 TC 145건+) |
| slack | 새-채널 실시간 QA 알림 |

## 실제 파이프라인 예시

```
Claude 명령
  → Notion MCP: TC 데이터 저장
  → GitHub MCP: 코드 커밋
  → Slack MCP: 완료 알림
  → GitHub Actions: 자동 CI 실행
```

## 협업 연동 워크플로우

1. Claude Desktop에서 명령 실행
2. MCP 툴들이 실제 API 호출
3. 결과물이 Notion/GitHub/Slack 동시 반영
4. GitHub Actions가 push 감지해 CI 실행
5. 실시간 전체 자동화 달성
