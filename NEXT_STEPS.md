# 🤖 다음 Claude를 위한 인수인계 문서

> **이 문서를 읽는 Claude에게**: 새 대화 시작 시 아래 명령어로 이 문서를 읽고 이어서 작업하세요.
>
> ```
> kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘
> ```
>
> - 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> - 포트폴리오: https://kihyunqa.github.io/qa-portfolio

---

## ✅ 검증 완료된 실제 현황 (2026-03-31 기준)

### 정확한 수치 (부풀리기 금지)

| 항목 | 실제 수 | 위치 |
|------|---------|------|
| testcase_*.md | **17개** | 루트 |
| playwright spec | **12개** (config·README 제외) | playwright-tests/ |
| skills/ 문서 | **9개** | skills/ |
| docs/ 문서 | **22개** | docs/ |
| GitHub Actions | **2개** | .github/workflows/ |
| 전체 파일 수 | **80개+** | 전체 레포 |
| TC 건수 | **145건+** | testcase_*.md 합산 |

### MCP 5개 — 실제 작동 확인
| MCP | 상태 |
|-----|------|
| filesystem | ✅ |
| github | ✅ |
| playwright | ✅ spec 12개 |
| notion | ✅ 실제 연동 |
| slack | ✅ 실제 연동 (새-채널 C0AQFJXC800) |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~9 | MCP 연동, TC 생성, spec 작성, docs 작성 등 | ~2026-03-30 |
| STEP 13~18 | docs 전체 수치·오타 수정 | 2026-03-31 |
| STEP 19 | 전체 검증 완료 ✅ | 2026-03-31 |
| STEP 20 | cover-letter.md 1종→3종 확장 ✅ | 2026-03-31 |
| STEP 21 | qa-onboarding.md MCP 환경 기준 보강 ✅ | 2026-03-31 |
| STEP 22 | ai-qa-vision.md 대폭 보강 726→3063 bytes ✅ | 2026-03-31 |
| STEP 23 | qa-checklist.md 오타 수정 + 섹션 추가 ✅ | 2026-03-31 |
| STEP 24-A | **qa-kpi-dashboard.md 보강** — 실제 수치·자동화 분리·MCP 가동률 추가 ✅ | 2026-03-31 |
| STEP 24-B | **qa-notify-workflow.md 보강** — 흐름도·설정 가이드·트러블슈팅 추가 ✅ | 2026-03-31 |

### STEP 24 작업 내역
| 파일 | before | after | 주요 변경 |
|------|--------|-------|-----------|
| qa-kpi-dashboard.md | 915b | 3016b | 자동화/수동 비율 분리, Playwright spec 상세 테이블, MCP 가동률 테이블, 품질 지표 요약 |
| qa-notify-workflow.md | 891b | 2906b | 전체 흐름도, 개선된 yaml 코드, 트리거 조건 표, 실제 알림 예시, 트러블슈팅 |

---

## 🎯 다음 스텝 (우선순위 순)

### STEP 10 — 스크린샷 실제 추가 [임팩트 최대 — 사용자 직접 필요]

```
사용자가 이미지를 채팅창에 붙여넣으면 Claude가 github MCP로 커밋 가능.

캡처할 것:
  1. Slack 새-채널 QA 알림 수신 화면
  2. GitHub Actions qa-notify.yml 성공 실행 화면
  3. Notion TC 페이지 화면

저장 위치: screenshots/ 폴더
업로드: https://github.com/kihyunqa/qa-portfolio/upload/main/screenshots
★ 포트폴리오의 "실제 연동 증거"를 텍스트→시각 증거로 업그레이드하는 핵심!
```

### STEP 25 — jira-mcp-plan.md 보강 [Claude 단독 가능 — 남은 마지막 얇은 파일]

```
현재 jira-mcp-plan.md (878 bytes) — docs 중 마지막으로 얇은 파일
Phase 2 Jira 연동 계획을 구체적인 실행 단계로 상세화 가능
→ Jira Cloud 계정 생성 → API 토큰 → MCP config → 테스트 플로우
```

### STEP 11 — Jira MCP 실제 연동 [PHASE 2 — 사용자 계정 필요]

```
Jira Cloud 무료 계정 → API 토큰 → claude_desktop_config.json 추가 → 테스트
완료 시 index.html 로드맵 PHASE 2 완료 표시
```

### STEP 12 — 포트폴리오 공개 공유 [지금 바로 가능]

```
- LinkedIn: docs/linkedin-post.md 버전 1~4 중 선택
- 이력서 링크: https://kihyunqa.github.io/qa-portfolio
- 커버레터: docs/cover-letter.md 버전 3종 중 지원사 맞춤 선택
- 면접 준비: interview-qa.md + interview-qa-advanced.md
```

---

## ⚠️ 작업 규칙 (매번 확인)

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html (58KB)** → MCP API 한도 초과 가능, GitHub 웹 Ctrl+H 사용
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **push_files 테스트용 임시 내용 사용 절대 금지** — 항상 실제 내용으로만
6. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인 후 업데이트

---

## 📞 빠른 링크

| 항목 | URL |
|------|-----|
| 포트폴리오 | https://kihyunqa.github.io/qa-portfolio |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| Actions 탭 | https://github.com/kihyunqa/qa-portfolio/actions |
| screenshots 업로드 | https://github.com/kihyunqa/qa-portfolio/upload/main/screenshots |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-03-31 · STEP 24 완료 (qa-kpi-dashboard + qa-notify-workflow 보강) · 다음: STEP 25 (jira-mcp-plan 보강) or STEP 10 (스크린샷)*
