# 피드백 인수인계 파일

> 국민취업제도 담당자 피드백 기반 — 2026.04.25 (4차 업데이트)
> 다음 Claude도 이 파일을 먼저 읽고 작업 이어가기

---

## 현황

- 포트폴리오: https://kihyunqa.github.io/qa-portfolio
- GitHub: https://github.com/kihyunqa/qa-portfolio
- 이력서: RESUME.md
- 경력기술서: CAREER.md

---

## 피드백 항목 & 처리 현황

### ✅ 1. 포트폴리오 이름 색상 흰색으로
- **처리 완료**: `h1.hero-name em { color:#ffffff }` 적용

### ✅ 2. 회색 글씨 가독성 향상
- **처리 완료**:
  - `--muted:#cec6e6`, `--dim:#a89ec8` (더 밝게)
  - 각종 `.pipe-desc`, `.rm-desc`, `.mc-desc`, `.tl-desc` 등 font-size 13~15px로 업
  - `.tc-dist-bar-label`, `.tc-dist-bar-val` 12px로 업

### ✅ 3. 킥(한 방) 메시지 강화
- **처리 완료** (3차 대폭 개선):
  - 히어로 레이아웃을 **좌/우 분리** — 왼쪽 텍스트 킥, 오른쪽 라이브 터미널
  - 킥 헤드라인: "QA가 느리다는 말, 이제 AI가 대신 뛰어줍니다."
  - 라이브 터미널 타이핑 추가 (TC 자동생성 과정이 눈앞에서 실행되는 연출)
  - 터미널이 8초마다 루프 재실행 (항상 동적으로 살아있음)
  - 미니 스탯 카드 4개 (145+건, 5개 MCP, 12 spec, 코드 0줄)
  - `kick-eyebrow`에 LIVE 초록 점 pulse 애니메이션
  - `kick-story` 보더-레프트 강조 박스

### ✅ 4. 이력서 vs 경력기술서 차별화
- **처리 완료** (4차):
  - **RESUME.md** → 완전 압축형 재구성
    - 한 줄 요약 (킥 문장)
    - 경력 요약 테이블 (기간/회사/직급/도메인)
    - 핵심 수치 테이블 (TC 145건+, MCP 5개, spec 12개, 코드 0줄 등)
    - 주요 성과 압축 (4줄)
    - 30초 스캔 가능한 구조
  - **CAREER.md** → 스토리형 재구성
    - 각 회사별 "상황과 과제 → 내가 한 것 → 결과" 3단 구조
    - 의사결정 배경 포함 (왜 Cypress를 도입했는지, 왜 P1으로 에스컬레이션했는지 등)
    - MCP 포트폴리오도 "왜 시작했는가"부터 서술

---

## 다음 Claude가 할 일 (우선순위)

### 1순위: 추가 피드백 반영
- 담당자에게 추가 피드백 받으면 여기에 추가하고 작업

### 2순위: 포트폴리오 추가 개선 요청이 있는 경우
- index.html 수정 시 SHA 반드시 확인 후 업데이트
- `github:get_file_contents` → SHA 확인 → `github:create_or_update_file`

---

## 파일 구조

```
qa-portfolio/
├── index.html        # 포트폴리오 메인 (완료)
├── feedback.md       # 이 인수인계 파일 ← 항상 먼저 읽기
├── RESUME.md         # 이력서 (압축형 완료 ✅)
├── CAREER.md         # 경력기술서 (스토리형 완료 ✅)
├── screenshots/      # 증거 스크린샷
├── docs/             # 28개 QA 문서
├── playwright-tests/ # E2E 12 spec
└── testcase_*.md     # TC 파일들
```

---

## 기술 메모

- 포트폴리오는 단일 `index.html` (CSS+JS 인라인)
- GitHub Pages 자동 배포 (main 브랜치 push → 5~10분 내 반영)
- CSS 변수: `--muted:#cec6e6` `--dim:#a89ec8` `--purple:#a855f7` `--text:#f0eaff`
- 이름 색상: `h1.hero-name em { color:#ffffff }` (흰색)
- 히어로 터미널: JS `startHeroTerminal()` 함수 (8초 루프)
- SHA 업데이트 필요: 파일 push 후 `github:get_file_contents`로 새 SHA 확인 필수

---

## 작업 히스토리

- 2026.04.24 1차: 이름 흰색, 가독성 향상, 킥 배너 추가 (Claude #1)
- 2026.04.24 2차: 인수인계 파일 업데이트 (Claude #2)
- 2026.04.24 3차: 히어로 킥 대폭 강화 — 라이브 터미널, 좌우 분리 레이아웃, 글씨 크기/색상 전면 개선 (Claude #3)
- 2026.04.25 4차: 이력서 압축형 재구성 + 경력기술서 스토리형 재구성 — 두 문서 완전 차별화 (Claude #4)
- 다음: 추가 피드백 반영
