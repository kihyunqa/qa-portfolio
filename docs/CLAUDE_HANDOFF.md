# CLAUDE HANDOFF — 다음 Claude를 위한 인수인계 문서

> 작성일: 2026-04-23  
> 작성자: Claude Sonnet 4.6 (이전 세션)

---

## 1. 이 포트폴리오는 무엇인가

**성기현(kihyunqa)** 의 QA 포트폴리오. 6년 9개월 QA 경력 위에 Claude MCP 자동화를 실제 연동한 결과물을 GitHub Pages로 배포 중.

- **라이브 URL**: https://kihyunqa.github.io/qa-portfolio/
- **레포**: https://github.com/kihyunqa/qa-portfolio
- **메인 파일**: `index.html` (단일 HTML 파일, 12만 자 이상)

---

## 2. 현재 상태 (마지막 커밋 기준)

### 완료된 작업
- [x] 섹션 구성: 00 숫자현황 → 01 MCP → 02 증거 → 03 프로젝트 → 04 파이프라인 → 05 로드맵 → **06 TC** → 07 경력 → 08 스킬 → 연락
- [x] TC 섹션에 **통계 대시보드** 추가 (4개 카드 + 분포 바)
- [x] TC 각 행 클릭 시 **설계 의도 해설** 펼침 ("왜 이 케이스인가")
- [x] MCP 5개 실제 연동: filesystem / playwright / github / notion / slack
- [x] Jira 연동: GitHub for Atlassian FULL ACCESS
- [x] GitHub Actions 2개 운영: qa-notify.yml / main.yml
- [x] Playwright spec 12개 (playwright-tests/ 디렉토리)
- [x] docs/ 28개 문서
- [x] CHANGELOG v51 수준

### TC 섹션 구조 (중요)
```
<!-- 대시보드 -->
.tc-dashboard (4열 그리드: 총건수 / 해피패스 / 네거티브 / 엣지케이스)

<!-- 분포 바 -->
.tc-dist-wrap (3개 바: hp / ng / eg)

<!-- 기존 필터 + 검색 -->
.tc-stat-bar → .tc-search-wrap → .tc-filter → .tc-row-hint

<!-- 테이블 -->
<table class="tc-table">
  각 TC: .tc-data-row → .tc-detail-row 쌍
  .tc-detail-row 내부 구조:
    1. .tc-detail-intent (설계 의도 — 새로 추가된 부분)
    2. .tc-detail-content (3열: 전제조건 / 스텝 / 기대결과)
```

### 현재 TC 목록 (20건 표시)
| ID | 유형 | 제목 |
|---|---|---|
| AUTH-001 | 해피패스 | 유효한 자격증명으로 로그인 |
| AUTH-005 | 해피패스 | 로그아웃 + 토큰 무효화 |
| AUTH-007 | 네거티브 | 5회 로그인 실패 계정 잠금 |
| CART-001 | 해피패스 | 상품 장바구니 추가 |
| PAY-012 | 엣지케이스 | 다중 상품 + 할인 소수점 오차 |
| API-S-006 | 엣지케이스 | 특수문자 / SQL 패턴 검색 |
| SEC-N-002 | 네거티브 | 만료 JWT 토큰 API 호출 |
| PAY-HP-001 | 해피패스 | 정상 카드 결제 완료 |
| PAY-N-005 | 네거티브 | 잔액 부족 카드 결제 |
| SEARCH-N-001 | 네거티브 | 검색 결과 0건 빈 상태 |
| AUTH-N-008 | 네거티브 | 세션 만료 후 보호 페이지 |
| NOTIF-E-003 | 엣지케이스 | 3G 환경 알림 중복 발송 |
| TC-CICD-HP-001 | 해피패스 | TC push → Actions 자동 트리거 |
| ACCESS-HP-001 | 해피패스 | 키보드만으로 폼 입력 |
| SEARCH-N-004 | 네거티브 | XSS 패턴 검색어 입력 |
| PERF-E-001 | 엣지케이스 | 동시 100개 요청 부하 테스트 |

---

## 3. 기술 스택 (index.html)

- **순수 HTML/CSS/JS** — 빌드 도구 없음, 외부 라이브러리 없음 (DM Mono 폰트 제외)
- CSS 변수 기반 다크테마 (`--bg`, `--purple`, `--green` 등)
- IntersectionObserver로 reveal 애니메이션
- GitHub API 연동 (commitCard — 실시간 커밋 수)
- 인라인 SVG 레이더 차트 (JS로 동적 생성)
- TC 필터 + 검색: `applySearch()` 함수로 통합 처리

---

## 4. 수정할 때 주의사항

### index.html 수정
1. **파일이 크다** (~12만 자). GitHub MCP `create_or_update_file` 호출 시 SHA 값 필요.
2. SHA 확인: `github:get_file_contents` → `sha` 필드
3. TC를 추가할 때: `tc-data-row` + `tc-detail-row` 쌍으로 추가. `data-tc-id`와 `data-for` 값 일치 필수.
4. 설계 의도 블록 구조:
```html
<div class="tc-detail-intent">
  <div class="tc-detail-intent-label">// 설계 의도 — 왜 이 케이스인가</div>
  <div class="tc-detail-intent-text">의도 설명...</div>
</div>
```
5. JS `updateTcStatBar()` 함수가 대시보드 + 분포 바 + 상태 바를 모두 동기화함.

### GitHub 커밋 방법
```
github:get_file_contents (owner:kihyunqa, repo:qa-portfolio, path:index.html)
→ sha 값 복사
github:create_or_update_file (sha 포함, content는 base64)
```
또는 `github:push_files` (sha 불필요, 다중 파일 가능)

---

## 5. 다음 할 일 후보 (우선순위 순)

### 🔴 높음
- [ ] **TC 건수 확장**: 현재 16건 → 30건 이상으로 확대 (카테고리별 추가)
- [ ] **스크린샷 실제 이미지 교체**: proof 섹션의 이미지들이 아직 누락 상태일 수 있음
- [ ] **PROFILE.md 이력서 최신화**: 경력 종료일, 현재 상태 업데이트

### 🟡 중간
- [ ] **TC 카테고리 추가**: 현재 AUTH/CART/PAY/API/SEC/SEARCH/NOTIF/CICD/ACCESS/PERF → 모바일, 다국어(i18n) 추가
- [ ] **로드맵 PHASE 3 진행**: Google Calendar MCP, Gmail MCP 실제 연동 시도
- [ ] **qa-context.md 작성**: 원래 계획이었던 인수인계 문서 (이 파일과 별개로 QA 맥락 문서)

### 🟢 낮음
- [ ] **다크/라이트 모드 토글 버튼** 추가
- [ ] **TC 통계 Chart.js 도입** (현재 순수 CSS 바)
- [ ] **다국어 지원** (영문 버전)

---

## 6. 레포 파일 구조 요약

```
kihyunqa/qa-portfolio/
├── index.html              ← 메인 포트폴리오 (이 파일이 전부)
├── README.md
├── PROFILE.md              ← 이력서
├── CHANGELOG.md
├── testcase_login.md
├── testcase_bug-report.md
├── testcase_mcp-integration.md
├── playwright-tests/       ← 12개 spec
│   ├── login.spec.js
│   ├── search.spec.js
│   └── ... (10개 더)
├── screenshots/            ← 증거 스크린샷
│   ├── notion-tc-page.png
│   ├── slack-notification.png
│   ├── jira-board.png
│   └── claude-mcp-workflow.png
├── docs/                   ← 28개 문서
│   ├── CLAUDE_HANDOFF.md   ← 이 파일
│   ├── qa-context.md       ← (작성 예정)
│   ├── bug-stories.md
│   ├── mcp-architecture.md
│   ├── mcp-setup-guide.md
│   ├── release-qa-process.md
│   └── ...
├── skills/                 ← Claude Skill 파일들
└── .github/workflows/
    ├── main.yml
    └── qa-notify.yml
```

---

## 7. 연락처 / 실제 연동 계정 정보

- **이메일**: kihyun.qa@gmail.com
- **GitHub**: https://github.com/kihyunqa
- **Jira**: https://kihyunqa-1775011951168.atlassian.net
- **Slack 채널**: 새-채널 (claude-mcp 봇)
- **GitHub Pages**: https://kihyunqa.github.io/qa-portfolio/

---

## 8. 이전 세션에서 한 작업 요약

이번 세션(2026-04-23)에서 수행한 변경사항:

1. **TC 통계 대시보드 추가**
   - 4개 수치 카드: 총 TC 건수 / 해피패스 / 네거티브 / 엣지케이스
   - 3개 분포 바: 유형별 비율을 시각화
   - 필터/검색 연동으로 실시간 업데이트

2. **TC 설계 의도 해설 추가**
   - 각 TC를 클릭하면 "왜 이 케이스인가" 패널 표시
   - 보라색 좌측 보더로 강조 (.tc-detail-intent)
   - 모든 16개 TC에 의도 텍스트 작성 완료

3. **이 인수인계 문서 작성** (docs/CLAUDE_HANDOFF.md)

---

*다음 Claude에게: 위 정보를 바탕으로 바로 이어받을 수 있습니다. 파일 수정 전 반드시 `github:get_file_contents`로 최신 SHA를 확인하세요.*
