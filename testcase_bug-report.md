# 버그 리포트: MCP 자동화 QA 발견 이슈

> 생성일: 2026-03-30 | 도구: Claude MCP 자동화 (성기현)

---

## 🐛 버그 목록

---

### BUG-001 · P1 · GitHub workflow 스코프 권한 없음

| 항목 | 내용 |
|------|------|
| **버그 ID** | BUG-001 |
| **심각도** | P1 |
| **상태** | ✅ 해결 완료 (수동 우회) |
| **발견 도구** | github MCP |
| **발견일** | 2026-03-30 |

**재현 방법:**
1. github MCP로 `.github/workflows/*.yml` 파일 생성 시도
2. `create_or_update_file` API 호출
3. Tool execution failed 오류 발생

**원인:**
- GitHub Personal Access Token에 `workflow` 스코프 미포함
- `.github/workflows` 경로는 별도 권한 필요

**해결 방법:**
- GitHub UI에서 Actions 탭 → 직접 workflow 파일 생성
- 또는 PAT 발급 시 `workflow` 스코프 체크

---

### BUG-002 · P2 · Slack 봇 미참여 채널 메시지 전송 실패

| 항목 | 내용 |
|------|------|
| **버그 ID** | BUG-002 |
| **심각도** | P2 |
| **상태** | ✅ 해결 완료 |
| **발견 도구** | slack MCP |
| **발견일** | 2026-03-30 |

**재현 방법:**
1. slack MCP `post_message` 호출
2. 봇이 초대되지 않은 채널 ID 사용
3. `not_in_channel` 오류 반환

**원인:**
- Slack 봇은 채널에 명시적으로 초대되어야 메시지 전송 가능
- 기본적으로 채널에 참여하지 않은 상태

**해결 방법:**
- `/invite @claude-mcp` 명령으로 채널에 봇 초대
- 이후 정상 전송 확인

---

### BUG-003 · P2 · push_files 다중 파일 커밋 실패

| 항목 | 내용 |
|------|------|
| **버그 ID** | BUG-003 |
| **심각도** | P2 |
| **상태** | ✅ 해결 완료 (우회) |
| **발견 도구** | github MCP |
| **발견일** | 2026-03-30 |

**재현 방법:**
1. `push_files` API로 여러 파일 동시 커밋 시도
2. `Tool execution failed` 오류 발생

**원인:**
- MCP 서버 또는 API 제한으로 다중 파일 동시 push 불가

**해결 방법:**
- `create_or_update_file`로 파일 개별 커밋 처리
- 기능적으로 동일한 결과 달성

---

## 📊 버그 현황 요약

| 심각도 | 건수 | 해결 | 미해결 |
|--------|------|------|--------|
| P1 | 1 | 1 | 0 |
| P2 | 2 | 2 | 0 |
| **합계** | **3** | **3** | **0** |

**버그 해결율: 100%** ✅

---

## 📝 QA 인사이트

> MCP 자동화 파이프라인 구축 시 **권한(스코프) 설계가 핵심**입니다.  
> 도구별 필요 권한을 사전에 체크리스트로 정리하면 막힘 없이 진행 가능합니다.

| MCP | 필요 권한 | 주의사항 |
|-----|----------|----------|
| github | repo + workflow 스코프 | workflow 별도 체크 필요 |
| slack | chat:write + channels:read | 채널별 봇 초대 필요 |
| notion | 페이지/DB 접근 권한 | 워크스페이스 연동 필요 |

---

*자동 생성: Claude MCP | kihyunqa/qa-portfolio*
