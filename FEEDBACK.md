# 📋 FEEDBACK.md — 인수인계 파일

> 이 파일은 다음 Claude가 이어서 작업할 수 있도록 작성된 인수인계 문서입니다.
> 마지막 업데이트: 2026-04-24 (2차 업데이트)

---

## 📌 프로젝트 기본 정보

- **소유자**: 성기현 (kihyunqa)
- **포트폴리오 URL**: https://kihyunqa.github.io/qa-portfolio/
- **GitHub 레포**: https://github.com/kihyunqa/qa-portfolio
- **이메일**: kihyun.qa@gmail.com

### 주요 파일 목록
| 파일 | 설명 |
|------|------|
| `index.html` | 단일 파일 포트폴리오 (HTML+CSS+JS, 약 144KB) |
| `RESUME.md` | ✅ 이력서 (간결 버전, 1페이지 분량) |
| `CAREER.md` | ✅ 경력기술서 (프로젝트별 상세 수치·기여도·성과) |
| `PROFILE.md` | 구 버전 (이력서+경력기술서 혼합, 참고용) |
| `FEEDBACK.md` | 이 인수인계 파일 |

---

## ✅ 완료된 피드백 반영 내역

국민취업제도 담당자 피드백 기준:

### 1. 이름 색상 — ✅ 완료 (1차, 2026-04-24)
- 히어로 섹션 이름을 흰색(`#ffffff`)으로 고정
- CSS: `h1.hero-name em { color: #ffffff; font-style: normal; }`

### 2. 가독성 향상 (회색/작은 글씨) — ✅ 완료 (1차, 2026-04-24)
- `--muted` 색상: `#c4b8e0` → `#d4cce8` (더 밝게)
- `--dim` 색상: `#8a7aaa` → `#a898c8` (더 밝게)
- 각종 소문자 폰트 사이즈 1~2px 상향 조정

### 3. 킥 메시지 강화 — ✅ 완료 (1차, 2026-04-24)
- 히어로 섹션 kick-banner 강화
- 문구: "QA가 느리다는 말이 싫어서, 자동화로 속도를 증명했습니다."

### 4. 이력서와 경력기술서 내용 차별화 — ✅ 완료 (2차, 2026-04-24)
- **RESUME.md** 신규 생성: 간결한 이력서 (경력 표 + 핵심 역량 + 주요 성과 요약)
- **CAREER.md** 신규 생성: 경력기술서 (회사별 담당 업무 상세, 구체적 수치, 성과 기술)
- 차이점: 이력서는 "무엇을 했다" 요약 / 경력기술서는 "어떻게 했고, 어떤 결과를 냈다" 상세 기술

---

## 🚧 남은 작업 / 개선 가능 항목

### 선택 작업 (있으면 좋음)
1. **index.html 포트폴리오 추가 킥 강화**
   - 히어로 섹션에서 "QA + AI 자동화 둘 다 할 수 있는 사람"이라는 색깔을 더 강하게
   - 예: 첫 화면에 핵심 메시지 배너를 더 눈에 띄게

2. **모바일 가독성 점검**
   - 글씨 크기, 여백이 모바일에서도 잘 보이는지 추가 점검

3. **섹션 간 차별화 강조**
   - 각 섹션 intro 한 줄이 좀 더 임팩트 있게

---

## 🗂️ 파일 구조

```
qa-portfolio/
├── index.html          ← 메인 포트폴리오 (단일 HTML, 144KB)
├── RESUME.md           ← ✅ 이력서 (간결)
├── CAREER.md           ← ✅ 경력기술서 (상세)
├── PROFILE.md          ← 구 버전 (혼합형, 참고용)
├── FEEDBACK.md         ← 이 인수인계 파일
├── README.md
├── docs/               ← QA 문서 28개
├── screenshots/        ← Notion, Slack, Jira 스크린샷
├── playwright-tests/   ← E2E spec 12개
└── .github/workflows/  ← Actions 2개
```

---

## 🎨 CSS 변수 현황 (index.html :root)

```css
--bg: #08060f
--bg2: #0d0a18
--bg3: #110d1f
--purple: #a855f7
--purple2: #7c3aed
--purple3: #c084fc
--text: #f0eaff
--muted: #d4cce8   ← 2026-04-24 밝게 수정됨
--dim: #a898c8     ← 2026-04-24 밝게 수정됨
```

---

## 💡 작업 시 주의사항

1. **index.html은 단일 파일** — HTML + CSS + JS 전부 한 파일에 있음 (144KB)
2. **GitHub Pages 자동 배포** — main 브랜치에 push하면 자동 반영됨
3. **SHA 필요** — `github:create_or_update_file`로 기존 파일 수정 시 SHA 값 필요
   - SHA 확인: `github:get_file_contents`로 파일 가져오면 sha 필드에 있음
4. **큰 파일 주의** — index.html이 144KB라서 `push_files`로 한 번에 처리하는 게 안정적
5. **인코딩** — 한글 포함 파일은 push_files 사용 시 유니코드 이스케이프 처리 필요

---

## 📝 성기현 님의 QA 핵심 강점 (킥 메시지 소재)

- 6년 9개월 QA 경력 (삼성전자 파트너 4.3년 포함)
- Claude MCP 5개 실제 연동 — 코드 0줄
- TC 145건+ 자동 생성
- 두플: QA Part Leader (전략 수립, 팀 리딩, 릴리즈 게이트 기준 수립)
- IMS Mobility: Cypress E2E 자동화 도입, 결제 QA 에스컬레이션 주도
- 모비프렌: IoT SmartThings 50+ 디바이스, AI Bixby 음성 명령 검증

**킥 포인트**: QA 엔지니어이면서 AI 자동화도 직접 구현 — 둘 다 할 수 있는 사람
