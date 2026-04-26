# 성기현 포트폴리오 인수인계 파일

다음 Claude 세션에서 이 파일을 먼저 보여주세요.

## ⚠️ 절대 규칙

* 허구 금지: 이력서/경력기술서에 없는 내용 절대 추가 금지. 수치·사례·성과 전부 실제 문서 기준으로만.
* 전문용어 금지: 에스컬레이션, 도입, 릴리즈 게이트 수립 등 이력서에 없는 표현 사용 금지
* 기준 문서: 성기현\_이력서.pdf / 성기현\_경력기술서.pdf
* 기승전결이라는 단어는 포트폴리오 텍스트에 절대 사용하지 말 것 (방향 잡는 내부 용어일 뿐)
* 보라색 건드리지 말 것 — 메인 아이덴티티 컬러
* "이것들을 직접 자동화하기로 했습니다" 같은 표현 금지 — 내가 코드를 짠 것처럼 읽힘. "Claude MCP로 자동화했습니다" 방식으로 표현할 것

## 작업 대상

* 포트폴리오: <https://kihyunqa.github.io/qa-portfolio/>
* GitHub: <https://github.com/kihyunqa/qa-portfolio>
* index.html 단일 파일 (CSS/JS 전부 포함)

## 현재 확정된 구조 (이 순서로 고정)

0. **Hero 섹션** — 이름 + 헤드라인("대화 한 번으로 / TC 생성부터 Notion 문서화, / Slack 알림, Jira 연동까지 / 전부 자동으로 완료됩니다") + 설명문 + 태그
1. 경력 타임라인 (01)
2. MCP 자동화 (02) — 헤드라인 + 7스텝 워크플로우 + MCP 카드 + 터미널 + **파이프라인 다이어그램**
3. 코드 증거 (03)
4. 실제 연동 증거 (04)
5. TC 테이블 (05)
6. 스킬 (06)
7. footer CTA (구직 중 문구 + 이메일/GitHub/Jira 링크)

**Contact 섹션 없음** — footer CTA + footer에 링크만.

## 핵심 흐름 (이 흐름 절대 깨지 말 것)

경력(배경) → MCP 자동화(무엇을 했나) → 코드 증거(어떻게 했나) → 연동 증거(실제로 됐나) → TC(결과물) → 스킬

이 흐름이 포트폴리오의 스토리. 섹션 추가/제거 시 이 흐름을 깨는지 반드시 확인.

## ✅ 완료된 작업 내역 (STEP별)

### STEP 106 — 2026-04-25
* hero 설명문 제거 → 이름 + 직함 + 헤드라인만 남김
* contact 섹션 전체 제거
* nav에서 연락 링크 제거
* footer에 이메일/GitHub/Jira 링크 통합

### STEP 107 — 2026-04-25
* hero 헤드라인 수정: "대화 한 번으로 / TC 생성부터 Notion 문서화, / Slack 알림, Jira 연동까지 / 전부 자동으로 완료됩니다"
* hero 설명문 복원 (MCP 5개, 전체 파이프라인, 코드 0줄 설명)

### STEP 108 — 2026-04-26
* MCP 섹션 터미널 아래에 **파이프라인 다이어그램** 추가
  * 3개 레이어: TRIGGER(입력·라우팅) → EXECUTION(실행) → OUTPUT(실제 연동)
  * 색상 코딩: 보라(입력) · 딥그린 연한(실행) · 딥그린 진한(OUTPUT 실제 연결)
  * 애니메이션 없음 (페이지 무게 고려)
  * class: .pipeline-diagram / .pd-node.trigger/.exec/.output
* --muted: #e8e0ff / --dim: #cfc7f5 (밝게 유지)
* body font-size: 17px 유지

### STEP 109 — 2026-04-26

**변경 내역 6가지:**

1. **모바일 파이프라인 다이어그램 수정**
   * `.pd-row`에 `flex-wrap:nowrap` 유지하되 모바일에서 `flex-direction:column`으로 전환
   * `.pd-arrow`를 모바일에서 `rotate(90deg)` 적용해 위→아래 방향으로 표시
   * `.pd-node`를 모바일에서 `width:100%`로 확장

2. **경력 섹션 문구 수정**
   * `tl-bridge-bottom`: "Claude MCP로 이 흐름 전체를 자동화했습니다."

3. **코드 증거(03) bridge 문구 수정**

4. **스크린샷 이미지 onerror 처리**
   * `onerror="this.closest('.proof-screenshot').style.display='none'"` 추가
   * alt 텍스트도 구체적으로 수정

5. **레이더 차트 제거**

6. **footer CTA 추가**
   * 스킬 섹션 바로 아래, footer 위에 독립 CTA 블록

### STEP 110 — 2026-04-26

1. **파이프라인 다이어그램 intro 배너** 추가
2. **footer CTA 터미널 무드** 통일

### STEP 111 — 2026-04-26

**변경 내역 4가지:**

1. **Hero 헤드라인 복원 (확정 버전)**
   * 이전 버전이 "TC 생성, Notion, Slack, Jira까지 / MCP 5개로 직접 연결했습니다"로 바뀌어 있었음
   * Feedbackback 확정 버전으로 복원: "대화 한 번으로 / TC 생성부터 Notion 문서화, / Slack 알림, Jira 연동까지 / <em>전부 자동으로 완료됩니다</em>"
   * intro 태그에서 "코드 0줄" → "MCP 자동화 파이프라인"으로 교체 (태그는 성과/방법이지 광고 문구가 아님)

2. **터미널 comment 맥락 명확화**
   * 기존: `# 코드 0줄. 대화 1번. MCP 5개. TC 145건+.`
   * 변경: `# MCP가 자동으로 생성·커밋한 코드. 대화 1번. MCP 5개. TC 145건+.`
   * 개발자 출신 면접관이 "코드를 못 쓴다"로 오해하는 리스크 제거
   * MCP가 코드를 생성했다는 점을 명확히

3. **코드 증거(03) bridge 문구 강화**
   * 기존: "위에서 본 파이프라인이 실제로 동작하는 코드입니다. GitHub에 커밋된 파일을 직접 확인할 수 있습니다."
   * 변경: "위 파이프라인이 실제로 동작하는 코드입니다. MCP가 자동으로 생성하고 GitHub에 커밋한 파일을 직접 확인할 수 있습니다."

4. **footer CTA 시각 강화**
   * border-top: 1px → 2px solid var(--green) (더 명확한 시작점)
   * 배경에 radial-gradient 그린 tone 추가 (은은하게)
   * 이메일 버튼 (primary): 패딩/폰트 키우고 color:#ffffff로 최대 대비
   * 모바일에서 primary 버튼 width:100% 처리
   * 서브 카피에 그린 컬러 강조: "연락 주시면 바로 응답합니다."

## 색상 시스템 (확정, 건드리지 말 것)

* 보라(`#a855f7`) = 메인 아이덴티티
* 딥그린(`#059669`, `#047857`) = 실제 작동하는 것 포인트 컬러
* --green:#059669 / --green2:#047857 / --green3:#34d399
* --g-border:rgba(5,150,105,0.28) / --g-muted:rgba(5,150,105,0.08)

## 미완료 작업

* 이력서 vs 경력기술서 차별화 (별도 세션, PDF 원본 필요)
* **스크린샷 실제 이미지 업로드** — 가장 임팩트 있는 남은 작업
  * notion-tc-page.png: Notion에서 MCP로 자동 생성된 TC 페이지 캡처
  * claude-mcp-workflow.png: Claude Desktop에서 MCP 명령 실행 화면 캡처
  * slack-notification.png: 새-채널 QA 완료 알림 메시지 캡처
  * jira-board.png: Jira 프로젝트 보드 또는 GitHub 연동 화면 캡처
  * 업로드 경로: `/screenshots/` 폴더. 이미지가 없으면 카드에서 자동 숨김 처리됨.
  * 방법: 스크린샷 찍어서 GitHub 레포 /screenshots/ 폴더에 직접 업로드하거나, Claude 세션에서 MCP로 push 가능

## 실제 경력 (이력서 기준 — 이것만 쓸 것)

### 모비프렌 (삼성전자 파트너) 2017.09–2022.01 · QA 주임

* AI Bixby: 멀티디바이스 ASR 정확도·응답 품질 검증, Wake-up 안정화, 거리·소음·상황별 시나리오, 타사 모델 비교
* IoT SmartThings: 다중 기기 연동 명령 전달·상태 동기화 검증
* CMC: 주·부 단말 간 통화 전환, 메시지/Call log 동기화 검증
* Keyboard: 전 앱 환경 입력 방식 검증, BT 키보드·Samsung Dex 연동
* 릴리즈 전 주요 기능 검증, VOC 이슈 재현·수정 확인, Log 추출 개발팀 전달

### IMS Mobility 2022.03–2024.02 · QA 대리

* 보험대차·일반렌트 앱(iOS/Android), 관리자 백오피스, 웹 전 영역 기능·회귀 테스트
* 차량 호출·예약·결제·반납 전 사용자 흐름 기반 시나리오 설계 및 검증
* Swagger 활용 API 직접 호출 및 요청/응답 정합성 검증
* Cypress 기반 핵심 시나리오 자동화 케이스 구축·운영
* 국내 주요 카드사·간편결제 환경별 케이스 설계, 승인·취소·환불 전 흐름 커버
* Jira·Slack·Notion 이슈 트래킹 체계, 리포트 형식 표준화
* 주요 프로젝트: 차량 요금 관리 시스템 / 렌톡 API 연동 / 글로벌 화이트라벨(Hertz, 마이리얼트립) / AOS 청구 기능

### 두플 2024.11–2025.02 · QA 파트장

* 반도체 공정 시뮬레이션 QA 파트 리드
* 가스 유량·챔버 온도·압력 등 공정 변수 기반 시뮬레이션 결과 정합성 검증
* 공정 단계별 TC·QA 체크리스트 작성
* Jira 이슈 등록·추적, Teams 협업

## 주의사항

* push\_files로 index.html + Feedbackback.md 항상 같이 push할 것 (인수인계 최신화)
* index.html은 단일 파일. SHA 없이 push\_files로 처리.
* GitHub Pages 반영은 1-2분 소요

## 📞 빠른 링크

| 항목 | URL |
| --- | --- |
| 포트폴리오 | <https://kihyunqa.github.io/qa-portfolio> |
| GitHub 레포 | <https://github.com/kihyunqa/qa-portfolio> |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-04-26 · STEP 111 완료*
*변경: hero 헤드라인 확정 버전 복원 / 터미널 코드 0줄 → MCP 생성 맥락 명확화 / footer CTA 시각 강화*
*다음: **스크린샷 업로드가 가장 임팩트 있는 남은 작업** — /screenshots/ 폴더에 4개 이미지 업로드*
