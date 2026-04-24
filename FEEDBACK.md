# 📋 FEEDBACK.md — 인수인계 파일

> 이 파일은 다음 Claude가 이어서 작업할 수 있도록 작성된 인수인계 문서입니다.
> 마지막 업데이트: 2026-04-24

---

## 📌 프로젝트 기본 정보

- **소유자**: 성기현 (kihyunqa)
- **포트폴리오 URL**: https://kihyunqa.github.io/qa-portfolio/
- **GitHub 레포**: https://github.com/kihyunqa/qa-portfolio
- **주요 파일**: `index.html` (단일 파일 포트폴리오), `PROFILE.md` (이력서/경력기술서)
- **이메일**: kihyun.qa@gmail.com

---

## ✅ 완료된 피드백 반영 내역 (2026-04-24)

국민취업제도 담당자 피드백 기준:

### 1. 이름 색상 — ✅ 완료
- 히어로 섹션 `<em>기현</em>` 부분을 흰색(`#ffffff`)으로 고정
- CSS: `h1.hero-name em { color: #ffffff; font-style: normal; }`

### 2. 가독성 향상 (회색/작은 글씨) — ✅ 완료
- `--muted` 색상: `#c4b8e0` → `#d4cce8` (더 밝게)
- `--dim` 색상: `#8a7aaa` → `#a898c8` (더 밝게)
- `.sec-desc` 폰트: `15px` → `16px`
- `.proj-desc`, `.rm-desc` 폰트: `13px` → `14px`
- `.mc-desc`, `.proof-desc` 폰트: `12px/14px` → `13px/15px`
- `.tl-desc` 폰트: `14px` → `15px`
- `.pipe-desc`: `12px` → `13px`

### 3. 킥 메시지 강화 — ✅ 완료
- 히어로 섹션 kick-banner 강화
- 문구: "QA가 느리다는 말이 싫어서, 자동화로 속도를 증명했습니다."
- 배너 시각적 임팩트 강화 (border-left 굵기, 색상 강조)

### 4. 이력서와 경력기술서 내용 차별화 — ⏳ 미완료
- `PROFILE.md`에 이력서/경력기술서 두 버전이 있음
- 이력서: 간결하게, 경력기술서: 구체적인 수치/성과 위주로 분리 필요
- 담당자 피드백: 둘이 너무 비슷해서 같은 걸 2번 보는 느낌

---

## 🚧 남은 작업 (다음 Claude에게)

### 우선순위 1: PROFILE.md 이력서/경력기술서 분리
```
현재 상태: PROFILE.md 한 파일에 이력서+경력기술서 비슷하게 작성됨
목표: 
  - 이력서 버전: 1페이지 분량, 핵심만, 간결
  - 경력기술서 버전: 프로젝트별 상세 수치, 기여도, 성과 위주
방법: PROFILE.md 내용을 참고해서 두 버전을 구분되게 작성
```

### 우선순위 2: 포트폴리오 추가 개선 (있으면 좋음)
- 모바일 가독성 추가 점검
- 섹션별 요약 강조 더 추가 가능

---

## 🗂️ 파일 구조

```
qa-portfolio/
├── index.html          ← 메인 포트폴리오 (단일 HTML)
├── PROFILE.md          ← 이력서/경력기술서 (수정 필요)
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

---

## 📝 성기현 님의 QA 핵심 강점 (킥 메시지 소재)

- 6년 9개월 QA 경력 (삼성전자 파트너 4.3년 포함)
- Claude MCP 5개 실제 연동 — 코드 0줄
- TC 145건+ 자동 생성
- 두플: QA Part Leader (전략 수립, 팀 리딩)
- IMS Mobility: Cypress E2E 자동화 도입, 결제 QA 에스컬레이션
- 모비프렌: IoT SmartThings 50+ 디바이스, AI Bixby 검증

**킥 포인트**: QA 엔지니어이면서 AI 자동화도 직접 구현 — 둘 다 할 수 있는 사람
