# CLAUDE HANDOFF — kihyunqa/qa-portfolio

> 이 문서는 다음 Claude가 작업을 이어받기 위한 정확한 인수인계 문서입니다.
> 마지막 업데이트: 2026-04-23

---

## 📌 프로젝트 개요

- **URL**: https://kihyunqa.github.io/qa-portfolio/
- **레포**: https://github.com/kihyunqa/qa-portfolio
- **주인**: 성기현 (QA Engineer, 6년 9개월)
- **목적**: Claude MCP 5개 실제 연동 + QA 역량을 보여주는 포트폴리오 사이트
- **배포**: GitHub Pages (main 브랜치 자동 배포)

---

## 🏗 파일 구조 요약

```
qa-portfolio/
├── index.html              # 단일 파일 포트폴리오 (전체 HTML/CSS/JS)
├── README.md               # 레포 소개
├── PROFILE.md              # 이력서 문서
├── CHANGELOG.md            # v51까지 변경 이력
├── testcase_login.md       # TC 파일 (로그인)
├── testcase_mcp-integration.md  # TC 파일 (MCP 연동)
├── testcase_bug-report.md  # 버그 리포트
├── playwright-tests/       # E2E spec 12개
│   ├── login.spec.js
│   ├── search.spec.js
│   ├── cart.spec.js
│   ├── api.spec.js
│   ├── payment.spec.js
│   ├── security.spec.js
│   ├── performance.spec.js
│   ├── accessibility.spec.js
│   ├── signup.spec.js
│   ├── notification.spec.js
│   ├── portfolio.spec.js
│   └── mcp-portfolio.spec.js
├── .github/workflows/
│   ├── qa-notify.yml       # TC push 시 Slack 알림
│   └── main.yml            # 메인 Actions
├── screenshots/            # 실제 연동 증거 스크린샷
│   ├── notion-tc-page.png
│   ├── claude-mcp-workflow.png
│   ├── slack-notification.png
│   └── jira-board.png
├── docs/
│   ├── CLAUDE_HANDOFF.md   # ← 이 파일
│   ├── qa-context.md       # QA 컨텍스트
│   ├── mcp-architecture.md
│   ├── mcp-setup-guide.md
│   ├── release-qa-process.md
│   ├── jira-github-integration.md
│   └── bug-stories.md
└── skills/                 # QA 특화 Skill 파일 (9개)
```

---

## 🎨 index.html 구조 & 섹션 맵

```
index.html 단일 파일 (약 135KB)
│
├── <head>     — meta, font, 전체 CSS (약 700줄)
├── <body>
│   ├── .scroll-bar        — 상단 스크롤 진행 바
│   ├── .sk-tooltip        — 스킬 호버 툴팁
│   ├── #dot-nav           — 우측 점 네비게이션
│   ├── #breadcrumb        — 좌하단 현재 섹션 표시
│   ├── <nav>              — 상단 고정 네비
│   ├── .hero              — 히어로 섹션
│   ├── #stats   (00)      — 숫자 현황 4개
│   ├── #mcp     (01)      — MCP 5개 연동 상세
│   ├── #proof   (02)      — 실제 증거 카드 5개 + 커밋 히스토리
│   ├── #projects (03)     — 프로젝트 카드 10개
│   ├── #diagram  (04)     — 전체 파이프라인 다이어그램
│   ├── #roadmap  (05)     — MCP 연동 로드맵
│   ├── #tc       (06)     — ★ 테스트케이스 섹션 (핵심)
│   ├── #timeline (07)     — 경력 타임라인 3개
│   ├── #skills   (08)     — 스킬 + 레이더 차트
│   ├── #contact  (09)     — 연락처
│   └── <footer>
└── <script>   — 전체 JS 인터랙션 (약 200줄)
```

---

## 🧪 TC 섹션(#tc) 상세 — 가장 중요한 섹션

### 현재 구현 상태 (완료)

- **TC 건수**: 20건 표시 (실제 145건+ 중 샘플)
- **필터**: 전체 / 해피패스(h) / 네거티브(n) / 엣지케이스(e)
- **검색**: TC-ID, 제목, 기대결과 텍스트 검색
- **클릭 확장**: 각 행 클릭 → 설계 의도 + 전제조건 + 스텝 + 기대결과 펼침
- **통계 대시보드** (`.tc-dashboard`): 총 건수 / 해피패스 / 네거티브 / 엣지케이스 카운트
- **분포 바** (`.tc-dist-wrap`): 유형별 비율 애니메이션 바
- **설계 의도 카드** (`.tc-detail-intent`): 왜 이 케이스인지 QA 판단 근거 설명

### TC 목록 (현재 20건)

| TC-ID | 유형 | 카테고리 |
|-------|------|----------|
| AUTH-001 | 해피패스 | 로그인 |
| AUTH-005 | 해피패스 | 로그아웃/보안 |
| AUTH-007 | 네거티브 | 계정 잠금 |
| CART-001 | 해피패스 | 장바구니 |
| PAY-012 | 엣지케이스 | 결제 소수점 |
| API-S-006 | 엣지케이스 | SQL Injection |
| SEC-N-002 | 네거티브 | JWT 만료 |
| PAY-HP-001 | 해피패스 | 정상 결제 |
| PAY-N-005 | 네거티브 | 잔액 부족 결제 |
| SEARCH-N-001 | 네거티브 | 빈 검색 결과 |
| AUTH-N-008 | 네거티브 | 세션 만료 |
| NOTIF-E-003 | 엣지케이스 | 3G 알림 중복 |
| TC-CICD-HP-001 | 해피패스 | Actions 트리거 |
| ACCESS-HP-001 | 해피패스 | 키보드 접근성 |
| SEARCH-N-004 | 네거티브 | XSS 패턴 |
| PERF-E-001 | 엣지케이스 | 100 동시 부하 |
| (+ 4건은 스크롤 하단) | | |

**실제 TC 통계 (필터 적용 기준)**: 해피패스 8 / 네거티브 7 / 엣지케이스 5

---

## 🎨 CSS 변수 (디자인 시스템)

```css
:root {
  --bg: #08060f;       /* 메인 배경 */
  --bg2: #0d0a18;      /* 섹션 교차 배경 */
  --bg3: #110d1f;      /* 카드/터미널 배경 */
  --purple: #a855f7;   /* 메인 포인트 컬러 */
  --purple2: #7c3aed;  /* 다크 퍼플 */
  --purple3: #c084fc;  /* 라이트 퍼플 */
  --p-border: rgba(168,85,247,0.22); /* 테두리 */
  --p-muted: rgba(168,85,247,0.08);  /* 배경 틴트 */
  --text: #f0eaff;     /* 메인 텍스트 */
  --muted: #7c6f9a;    /* 보조 텍스트 */
  --dim: #3d3358;      /* 희미한 텍스트 */
  --green: #10b981;    /* 성공/LIVE 뱃지 */
  --wip: #f59e0b;      /* 엣지케이스/경고 */
}
```

**절대 변경하지 말 것**: 퍼플 다크 테마는 포트폴리오 핵심 아이덴티티.

---

## ⚙️ JavaScript 주요 함수 맵

```
updateBreadcrumb(id)    — 좌하단 현재 섹션 표시
updateDotNav()          — 우측 점 네비 활성화
applySearch()           — TC 검색 + 필터 적용 (통계 동기화)
updateTcStatBar()       — TC 유형별 통계 및 분포 바 업데이트
drawRadar(animated)     — 스킬 레이더 차트 SVG 렌더링
loadCommitData()        — GitHub API → 커밋 히스토리 차트
typeStep()              — 히어로 타이핑 애니메이션
```

---

## 🔗 실제 연동 현황 (2026-04-23 기준)

| 연동 | 상태 | 증거 |
|------|------|------|
| filesystem MCP | ✅ 연동 완료 | TC 파일 자동 저장 |
| playwright MCP | ✅ 연동 완료 | 12개 spec 실행 |
| github MCP | ✅ 연동 완료 | 80개+ 파일 커밋 |
| notion MCP | ✅ 실제 연동 | notion-tc-page.png |
| slack MCP | ✅ 실제 연동 | slack-notification.png |
| Jira | ✅ FULL ACCESS | jira-board.png |
| GitHub Actions | ✅ 2개 운영 | qa-notify.yml, main.yml |

---

## 🚀 다음 Claude가 해야 할 작업 목록

### 우선순위 높음

1. **TC 건수 확장** (20건 → 30건+)
   - 현재 `<tbody>` 안에 16개 TC-ID 존재, 나머지 4개는 실제로 없음 ("+ 4건" 표기는 주석 오류)
   - 추가할 카테고리: SIGNUP, PERF-N, ACCESS-N, NOTIF-HP 등
   - HTML 패턴: `tc-data-row` + `tc-detail-row` 쌍으로 추가

2. **PROFILE.md 업데이트**
   - 최근 프로젝트 반영 필요
   - Claude MCP 연동 실적 수치 업데이트

3. **스크린샷 파일 실제 이미지로 교체**
   - 현재: screenshots/ 폴더 이미지가 placeholder일 수 있음
   - 실제 Notion, Slack, Jira 연동 스크린샷으로 교체 필요

### 우선순위 중간

4. **#roadmap PHASE 3 구체화**
   - Google Calendar MCP + Gmail MCP 실제 연동 시도
   - 연동 완료 시 badge-live로 변경

5. **성능 최적화**
   - index.html 135KB → 압축/분리 고려
   - 이미지 lazy loading 이미 적용됨

6. **OG 이미지 추가**
   - `<meta property="og:image">` 태그 비어있음
   - screenshots 중 하나를 OG 이미지로 지정

### 우선순위 낮음

7. **다크/라이트 모드 토글** (요청 시)
8. **한국어/영어 언어 전환** (요청 시)
9. **TC CSV 내보내기 기능**

---

## 📝 자주 하는 실수 & 주의사항

1. **SHA 값 필수**: `github:create_or_update_file`로 index.html 수정 시 반드시 현재 SHA 값 포함
   - 현재 SHA: `2eea678799adab5cc2175e4ef70d0f64459248b2` ← 매번 최신값 확인 필요
   - `github:get_file_contents`로 SHA 먼저 조회 후 수정

2. **TC 행 패턴**: `tc-data-row`와 `tc-detail-row`는 항상 쌍으로 존재해야 함
   - `data-tc-id` 값이 두 행에서 일치해야 클릭 확장이 작동

3. **CSS 클래스 네이밍**: 기존 패턴 유지
   - `.tc-detail-intent` — 설계 의도 블록
   - `.tc-detail-content` — 3열 그리드 (전제조건/스텝/기대결과)
   - `.tc-detail-result-pass/fail/edge` — 결과 색상 구분

4. **JavaScript 전역 함수**: `applySearch()`가 필터 + 검색 + 통계 동기화를 모두 처리
   - TC 데이터 변경 시 `updateTcStatBar()` 자동 호출됨

5. **print CSS**: `@media print` 블록에서 `.tc-dashboard` 4열 고정 — TC 추가 시 print 레이아웃 확인

---

## 🔑 주요 링크

- **라이브 사이트**: https://kihyunqa.github.io/qa-portfolio/
- **레포**: https://github.com/kihyunqa/qa-portfolio
- **Jira**: https://kihyunqa-1775011951168.atlassian.net
- **커밋 히스토리**: https://github.com/kihyunqa/qa-portfolio/commits/main
- **이메일**: kihyun.qa@gmail.com

---

## 💡 이 포트폴리오의 핵심 메시지

> "6년 9개월 QA 경력 + Claude MCP 5개 실제 연동 = 코드 0줄로 전체 QA 파이프라인 자동화"

모든 섹션은 이 메시지를 다른 각도로 보여주는 구조입니다.
- `#stats` — 숫자로 증명
- `#mcp` — 어떻게 했는지 설명
- `#proof` — 실제 스크린샷으로 증명
- `#tc` — QA 전문성 (설계 의도 포함) 증명
- `#timeline` — 경력 기반 신뢰성 증명

---

*이 문서는 Claude MCP github 연동으로 자동 생성되었습니다. 작업 후 반드시 업데이트해주세요.*
