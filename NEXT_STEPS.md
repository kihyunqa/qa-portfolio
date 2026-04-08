# 🤖 다음 Claude를 위한 인수인계 문서

> **이 문서를 읽는 Claude에게**: 새 대화 시작 시 아래 명령어로 이 문서를 읽고 이어서 작업하세요.
>
> ```
> kihyunqa/qa-portfolio 레포의 NEXT_STEPS.md를 github MCP로 읽어서 다음 스텝 진행해줘
> ```
>
> - 레포: `kihyunqa/qa-portfolio` / 브랜치: `main`
> - 포트폴리오: https://kihyunqa.github.io/qa-portfolio
> - **사용자 요청**: 연습/면접준비/LinkedIn 관심 없음. **포트폴리오 업그레이드만** 원함.

---

## 🏁 현재 상태 (2026-04-08) — STEP 128 완료

---

## ✅ 확정 수치 (v41 기준)

| 항목 | 수치 | 검증 |
|------|------|------|
| testcase_*.md | **16개** | ✅ |
| playwright spec | **12개** | ✅ |
| skills/ 문서 | **9개** | ✅ |
| docs/ 문서 | **28개** | ✅ |
| GitHub Actions | **2개** | ✅ |
| 전체 파일 수 | **80개+** | ✅ |
| TC 건수 | **145건+** | ✅ |
| CHANGELOG | **v41** | ✅ |
| Jira 연동 | **완료** | ✅ FULL ACCESS |
| index.html | **최신** | ✅ STEP 127 완료 |
| dot-nav | **완전 수정** | ✅ STEP 107 |
| breadcrumb | **추가 완료** | ✅ STEP 109 |
| 레이더 차트 | **추가 완료** | ✅ STEP 111 |
| Hero 타이핑 효과 | **추가 완료** | ✅ STEP 113 |
| TC 필터 버튼 | **복원 완료** | ✅ STEP 113 |
| 커밋 히스토리 카드 | **추가 완료** | ✅ STEP 115 |
| Hero 파티클 배경 | **추가 완료** | ✅ STEP 117 |
| TC 섹션 행 확장 | **8행 → 20행** | ✅ STEP 119 |
| 섹션별 통계 배지 | **9개 섹션 배지** | ✅ STEP 121 |
| 스킬 바 hover 툴팁 | **20개 스킬 툴팁** | ✅ STEP 123 |
| 프로젝트 카드 오버레이 | **10개 카드 슬라이드업** | ✅ STEP 125 |
| **경력 타임라인 인터랙션** | **클릭 expand/collapse** | ✅ **STEP 127** |

---

## ✅ 완료된 스텝 전체 이력

| 스텝 | 내용 | 완료일 |
|------|------|--------|
| STEP 1~83 | 포트폴리오 전체 구축 완료 | ~2026-04-01 |
| STEP 84~100 | 수치 검증, bug-stories, 섹션 강화 등 | 2026-04-01~06 |
| STEP 101~126 | dot-nav, breadcrumb, 레이더, 타이핑, 파티클, TC행, 배지, 툴팁, 오버레이 | 2026-04-07 |
| **STEP 127** | **경력 타임라인 클릭 expand/collapse — 두플·IMS·모비프렌 상세 업무 내역 슬라이드다운** | **2026-04-08** |
| **STEP 128** | **CHANGELOG v41 + NEXT_STEPS.md 인수인계 업데이트** | **2026-04-08** |

---

## 🎯 STEP 127에서 변경한 내용 (index.html)

### 경력 타임라인 클릭 expand/collapse
| 요소 | 구현 내용 |
|------|----------|
| `.tl-item` | cursor:pointer, 클릭 이벤트 추가 |
| `.tl-expand-icon` | 회사명 옆 `상세 ↓/↑` 토글 버튼 |
| `.tl-detail` | `max-height:0→400px` + `opacity:0→1` CSS 트랜지션 `.45s` |
| `.tl-detail-inner` | bg2 배경 + 퍼플 left border + `// 상세 업무 내역` 헤더 |
| `.tl-detail-list` | `▸` 화살표 + 12px 상세 업무 리스트 |
| `.tl-detail-highlight` | 회사별 핵심 수치 한 줄 (green 스타일) |
| JS expand | 클릭 시 다른 항목 자동 닫기 + 현재 토글 |
| 두플 | QA 전략 수립, 팀 리딩, TC 커버리지, 릴리즈 게이트 P1 0건 |
| IMS Mobility | Cypress CI 연동, 결제 P3→P1, Swagger 30+ API, 백오피스 권한 |
| 모비프렌 | SmartThings 50+ 디바이스, Bixby 음성, Galaxy 전기종, 4.3년 파트너 |

### 현재 SHA
- **index.html**: `1d4e14f82be4af6f319ede46b45d782b6fe2f929` (STEP 127)
- **CHANGELOG.md**: STEP 128 커밋 후 새 SHA
- **NEXT_STEPS.md**: STEP 128 커밋 후 새 SHA

---

## 🎯 다음 Claude가 해야 할 포트폴리오 업그레이드 (우선순위 순)

### ✅ 완료 — 우선순위 1~5 (STEP 119~127)
- TC 행 확장, 섹션 통계 배지, 스킬 툴팁, 프로젝트 카드 오버레이, 경력 타임라인 인터랙션 완료

### 🟡 우선순위 6 — 히어로 섹션 강화 (다음 작업)
- 히어로 우측 stat 카드 hover 시 툴팁 (현재 숫자만 있음)
- 구체적으로: 6.9yr / 5+ / 12 / P1 2건 각 stat에 hover 시 설명 툴팁
- 또는 히어로 proof 배지 클릭 시 해당 섹션으로 스크롤 (예: "MCP 5개 실제 연동" → #mcp 섹션)

### 🟡 우선순위 7 — TC 섹션 강화
- TC 테이블 행 클릭 시 상세 케이스 내용 expand (현재 기본 내용만)
- 또는 TC 카테고리별 진행 현황 프로그레스바

---

## ⚠️ 작업 규칙

1. **workflows 파일** → MCP 수정 불가, GitHub 웹에서만
2. **index.html** → 수정 시 반드시 get_file_contents로 현재 SHA 확인 후 전체 교체
3. **숫자 부풀리기 금지** — 실제 확인 후 기재
4. **새 파일 무분별 생성 금지** — 기존 파일 업데이트 우선
5. **NEXT_STEPS.md 업데이트 필수** — SHA 먼저 확인
6. **사용자는 포트폴리오 업그레이드만 원함** — 면접준비/LinkedIn 제안 금지
7. **index.html 현재 SHA**: `1d4e14f82be4af6f319ede46b45d782b6fe2f929`
8. **CHANGELOG.md 현재 SHA**: STEP 128 커밋 후 새 SHA — get_file_contents로 확인
9. **NEXT_STEPS.md 현재 SHA**: 이 커밋 후 새 SHA — 다음 Claude가 get_file_contents로 확인

---

## ✅ MCP 연동 현황

| MCP | 상태 |
|-----|------|
| filesystem | ✅ |
| github | ✅ |
| playwright | ✅ spec 12개 |
| notion | ✅ 실제 연동 |
| slack | ✅ 실제 연동 (새-채널 C0AQFJXC800) |
| Jira | ✅ FULL ACCESS (kihyunqa-1775011951168.atlassian.net) |

---

## 📞 빠른 링크

| 항목 | URL |
|------|-----|
| 포트폴리오 | https://kihyunqa.github.io/qa-portfolio |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| bug-stories | https://github.com/kihyunqa/qa-portfolio/blob/main/docs/bug-stories.md |
| Actions 탭 | https://github.com/kihyunqa/qa-portfolio/actions |
| Jira | https://kihyunqa-1775011951168.atlassian.net |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-04-08 · STEP 128 완료*
*경력 타임라인 expand/collapse 완료 (STEP 127). 다음: 히어로 섹션 강화 → TC 섹션 강화*
