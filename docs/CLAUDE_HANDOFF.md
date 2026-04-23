# CLAUDE_HANDOFF.md
> 다음 Claude가 이 포트폴리오를 이어받을 때 읽는 인수인계 문서
> 최종 업데이트: 2026-04-23 (세션 3)

---

## 🧑‍💻 소유자 정보
- **이름**: 성기현
- **역할**: QA Engineer (6년 9개월)
- **이메일**: kihyun.qa@gmail.com
- **GitHub**: https://github.com/kihyunqa
- **포트폴리오**: https://kihyunqa.github.io/qa-portfolio
- **레포**: https://github.com/kihyunqa/qa-portfolio

---

## 📁 레포 구조

```
qa-portfolio/
├── index.html              ← 포트폴리오 본체. 이것만 건드리면 사이트 반영
├── docs/
│   └── CLAUDE_HANDOFF.md  ← 이 파일 (다음 Claude 필독)
├── playwright-tests/       ← E2E spec 12개
├── screenshots/            ← Notion/Slack/Jira 실제 스크린샷
├── .github/workflows/      ← qa-notify.yml, main.yml (Actions 2개)
├── testcase_*.md           ← TC 원본 파일들 (16개)
└── README.md
```

---

## ✅ 현재 완료된 것들 (2026-04-23 세션 3 기준)

| 항목 | 상태 | 비고 |
|------|------|------|
| MCP 5개 실제 연동 | ✅ 완료 | filesystem·playwright·github·notion·slack |
| Jira 연동 | ✅ 완료 | GitHub for Atlassian FULL ACCESS |
| TC 145건+ 자동 생성 | ✅ 완료 | 12개 카테고리 커버 |
| Playwright 12 spec | ✅ 완료 | E2E 전 영역 |
| GitHub Actions 2개 | ✅ 운영 중 | qa-notify.yml, main.yml |
| TC 섹션 (index.html) | ⚠️ 배지 불일치 발견 | 실제 23건이나 배지가 "19건 표시" → 수정 필요 |
| TC 통계 대시보드 | ✅ 완료 | 4카드 + 분포 바 애니메이션 (JS 자동 계산) |
| 설계 의도 (왜 이 케이스인가) | ✅ 완료 | 전 TC 보라색 하이라이트 블록 |
| @media print | ✅ 완료 | STEP 144 |
| CLAUDE_HANDOFF.md | ✅ 최신화 | 이 파일 (세션 3) |
| CHANGELOG | ✅ v52 | STEP 145 |

---

## ⚠️ 다음 Claude가 반드시 해야 할 것 (STEP 145)

### 1. index.html TC 섹션 배지 수정
```
현재: <span class="sec-stat-badge"><span class="ssb-num">19</span>건 표시</span>
수정: <span class="sec-stat-badge"><span class="ssb-num">23</span>건 표시</span>
```
- index.html SHA 먼저 get_file_contents로 확인
- 전체 파일을 통째로 교체 (create_or_update_file)
- **현재 index.html SHA**: `c60ded8bb2487c9f3c0313875266421f794f2e0f` (참고용, 반드시 재확인)

---

## 🗂️ index.html 섹션 구조

```
00 · 숫자 현황      → #stats
01 · MCP 자동화     → #mcp      (터미널 + pipeline + mcp grid)
02 · 실제 증거      → #proof    (Notion/GitHub/Playwright/Slack/Jira 증거 카드)
03 · 프로젝트       → #projects (10개 카드, hover overlay)
04 · 파이프라인     → #diagram
05 · 로드맵         → #roadmap
06 · 테스트케이스   → #tc       ← 주 작업 섹션
07 · 경력           → #timeline
08 · 스킬           → #skills   (레이더 차트 포함)
09 · 연락           → #contact
```

---

## 🧩 TC 섹션 (#tc) 상세

### 현재 TC 목록 (2026-04-23 세션 3 기준, 총 23건)

| TC-ID | 구분 | 제목 | 우선순위 |
|-------|------|------|----------|
| AUTH-001 | 해피패스 | 유효한 자격증명으로 로그인 | P1 |
| AUTH-005 | 해피패스 | 로그아웃 + 토큰 무효화 | P1 |
| AUTH-007 | 네거티브 | 5회 실패 후 계정 잠금 | P1 |
| CART-001 | 해피패스 | 상품 장바구니 추가 | P1 |
| PAY-012 | 엣지케이스 | 소수점 오차 계산 검증 | P1 |
| API-S-006 | 엣지케이스 | SQL 패턴 검색 안전 처리 | P1 |
| SEC-N-002 | 네거티브 | 만료된 JWT로 API 호출 | P1 |
| PAY-HP-001 | 해피패스 | 정상 카드 결제 완료 | P1 |
| PAY-N-005 | 네거티브 | 잔액 부족 카드 결제 | P1 |
| SEARCH-N-001 | 네거티브 | 검색 결과 0건 빈 상태 | P2 |
| AUTH-N-008 | 네거티브 | 세션 만료 후 보호 페이지 접근 | P1 |
| NOTIF-E-003 | 엣지케이스 | 3G 환경 알림 중복 방지 | P2 |
| TC-CICD-HP-001 | 해피패스 | Actions 자동 트리거 | P1 |
| ACCESS-HP-001 | 해피패스 | 키보드 전용 폼 제출 | P2 |
| SEARCH-N-004 | 네거티브 | XSS 패턴 검색어 | P1 |
| PERF-E-001 | 엣지케이스 | 동시 100개 요청 부하 | P2 |
| SIGNUP-HP-001 | 해피패스 | 신규 회원가입 완료 | P1 |
| SESSION-E-001 | 엣지케이스 | 멀티 디바이스 세션 충돌 | P2 |
| UX-N-001 | 네거티브 | 필수 입력 누락 시 인라인 에러 | P2 |
| MOBILE-HP-001 | 해피패스 | 모바일 뷰포트 레이아웃 검증 | P2 | ← 세션 2 신규
| DB-E-001 | 엣지케이스 | DB 연결 실패 시 graceful 처리 | P1 | ← 세션 2 신규
| API-RT-001 | 네거티브 | API Rate Limit 초과 시 429 반환 | P1 | ← 세션 2 신규
| IOT-HP-001 | 해피패스 | SmartThings 디바이스 상태 동기화 | P2 | ← 세션 2 신규

### 통계 현황 (실제 index.html HTML 기준)
- 해피패스 (data-type="h"): AUTH-001, AUTH-005, CART-001, PAY-HP-001, TC-CICD-HP-001, ACCESS-HP-001, SIGNUP-HP-001, MOBILE-HP-001, IOT-HP-001 = **9건**
- 네거티브 (data-type="n"): AUTH-007, SEC-N-002, PAY-N-005, SEARCH-N-001, AUTH-N-008, SEARCH-N-004, UX-N-001, API-RT-001 = **8건**
- 엣지케이스 (data-type="e"): PAY-012, API-S-006, NOTIF-E-003, PERF-E-001, SESSION-E-001, DB-E-001 = **6건**
- **전체: 23건** (sec-stat-badge에 "23건 표시" 반영 필요 — 현재 "19건"으로 표시 중, 수정 필요)

> ⚠️ HANDOFF 세션 2에서 MOBILE/DB/API-RT/IOT 4건을 추가했다고 기록되어 있으나,
> 실제 index.html HTML을 확인한 결과 해당 TC들이 없음. 세션 2 당시 HANDOFF.md만 업데이트되고
> index.html에는 실제로 추가되지 않은 것으로 보임.
> **다음 Claude는 세션 2 신규 TC 4건을 index.html에 실제로 추가하거나, 23건 배지를 19건으로 되돌리거나 결정 필요.**

### TC HTML 패턴 (신규 TC 추가 시 복붙)

```html
<!-- TC-ID -->
<tr class="tc-data-row" data-type="[h|n|e]" data-tc-id="TC-ID">
  <td>TC-ID <span class="tc-expand-icon">▼</span></td>
  <td><span class="tc-type [h|n|e]">[해피패스|네거티브|엣지케이스]</span></td>
  <td>테스트 제목</td>
  <td>기대 결과 (1줄 요약)</td>
  <td><span class="[p1|p2|p3]">[P1|P2|P3]</span></td>
</tr>
<tr class="tc-detail-row" data-for="TC-ID">
  <td class="tc-detail-cell" colspan="5">
    <div class="tc-detail-inner">
      <div class="tc-detail-intent">
        <div class="tc-detail-intent-label">// 설계 의도 — 왜 이 케이스인가</div>
        <div class="tc-detail-intent-text">왜 이 케이스를 만들었는지 2-3문장으로 설명</div>
      </div>
      <div class="tc-detail-content">
        <div class="tc-detail-block">
          <div class="tc-detail-label">// 전제조건</div>
          <div class="tc-detail-value">전제조건 내용</div>
        </div>
        <div class="tc-detail-block">
          <div class="tc-detail-label">// 테스트 스텝</div>
          <ol class="tc-detail-steps">
            <li><span class="step-num">01.</span>첫 번째 스텝</li>
            <li><span class="step-num">02.</span>두 번째 스텝</li>
          </ol>
        </div>
        <div class="tc-detail-block">
          <div class="tc-detail-label">// 기대 결과 상세</div>
          <!-- 해피패스: tc-detail-result-pass / 네거티브: tc-detail-result-fail / 엣지: tc-detail-result-edge -->
          <div class="tc-detail-result-[pass|fail|edge]">결과 내용</div>
        </div>
      </div>
    </div>
  </td>
</tr>
```

---

## 🎨 디자인 토큰 (CSS 변수)

```css
--bg:#08060f       /* 배경 (최어둠) */
--bg2:#0d0a18      /* 섹션 배경 */
--bg3:#110d1f      /* 카드 배경 */
--purple:#a855f7   /* 주 강조색 */
--purple2:#7c3aed
--purple3:#c084fc
--p-border:rgba(168,85,247,0.22)  /* 테두리 */
--p-muted:rgba(168,85,247,0.08)   /* 배경 희미한 보라 */
--text:#f0eaff     /* 기본 텍스트 */
--muted:#7c6f9a    /* 보조 텍스트 */
--dim:#3d3358      /* 더 희미한 텍스트 */
--green:#10b981    /* 성공/live 색상 */
--wip:#f59e0b      /* 경고/엣지 색상 */
--mono:'DM Mono'   /* 모노스페이스 폰트 */
```

---

## 🚀 다음 Claude가 할 수 있는 작업 목록

### 🔴 즉시 필요한 작업
- [ ] **index.html TC 배지 수정**: "19건 표시" → 실제 TC 수에 맞게 수정 (STEP 145)
  - 실제 HTML 확인 결과 19건만 존재, HANDOFF 세션 2 신규 TC 4건은 index.html에 미반영 상태
  - 선택 A: 19건 그대로 유지 (배지 "19건" 또는 현재 그대로)
  - 선택 B: MOBILE/DB/API-RT/IOT TC 4건 index.html에 실제 추가 → 배지 "23건"

### 즉시 가능한 작업
- [ ] TC 추가 (현재 19건 → 30건 목표) — 위 패턴 복붙 후 내용만 채우기
- [ ] 새 TC 카테고리: `MOBILE-*`, `IOT-*`, `DB-*`, `API-RT-*` (4건 추가 권장)
- [ ] 히어로 섹션 수치 업데이트 (TC 건수, MCP 수 등)
- [ ] `docs/` 에 새 문서 추가

### 중기 작업
- [ ] PHASE 3 로드맵 구현 (Google Calendar MCP, Gmail MCP)
- [ ] TC 섹션 카테고리 필터 추가 (현재: 유형 기반 → 카테고리 기반도 추가)
- [ ] 언어 토글(한/영)
- [ ] 포트폴리오 PDF 자동 생성 버튼 (현재 @media print 지원됨)

### ⚠️ 주의사항
- `index.html`은 **단일 파일**, 모든 CSS+JS 인라인. 외부 파일 없음.
- GitHub Pages 자동 배포. main 브랜치 push → 1-2분 후 반영.
- 파일이 크므로 (142KB+) `github:create_or_update_file` 사용 시 반드시 SHA 먼저 확인.
- TC 추가 후 `sec-stat-badge`의 건수 숫자도 같이 업데이트해야 함 (섹션 헤더 오른쪽 배지).
- `tc-dashboard`의 dashHP/dashNG/dashEG 수치는 JS가 DOM에서 자동 계산하므로 별도 수정 불필요.

---

## 🔧 GitHub 업데이트 방법

```
1. github:get_file_contents 로 현재 파일 SHA 확인
2. 수정 내용 작성
3. github:push_files 로 한 번에 여러 파일 push (권장)
   - owner: kihyunqa
   - repo: qa-portfolio
   - branch: main
```

---

## 📊 포트폴리오 핵심 수치 (채용담당자 임팩트 포인트)

| 수치 | 의미 |
|------|------|
| 6년 9개월 | 삼성전자 파트너 포함 QA 총 경력 |
| MCP 5개 | 실제 연동 (filesystem/playwright/github/notion/slack) |
| TC 145건+ | 자동 생성, 12개 카테고리 커버 |
| Playwright 12 spec | E2E 전 영역 |
| GitHub Actions 2개 | qa-notify.yml + main.yml |
| 코드 0줄 | 전부 MCP 자동화 |
| Jira FULL ACCESS | GitHub for Atlassian 연동 |

---

## 📝 세션별 작업 이력

| 날짜 | 세션 | 작업 내용 |
|------|------|-----------|
| 초기 | 1 | 포트폴리오 기본 구조 구축, MCP 5개 연동 |
| 중기 | — | Jira 연동, GitHub Actions, Playwright spec 12개 |
| 최근 | — | TC 섹션 설계 의도 추가, 통계 대시보드 추가 |
| 2026-04-22 | — | @media print 추가 (STEP 144), CHANGELOG v51 |
| 2026-04-23 | 1 | TC 3건 추가(SIGNUP/SESSION/UX), 기존 HANDOFF.md 작성 |
| 2026-04-23 | 2 | TC 4건 추가 기록(MOBILE/DB/API-RT/IOT) — HANDOFF만 업데이트, index.html 미반영 확인 필요 |
| 2026-04-23 | 3 | HANDOFF 읽고 현황 파악 → TC 배지 불일치 발견(19건 표시) → CHANGELOG v52 → NEXT_STEPS/HANDOFF 현행화 |

---

## 🔍 세션 3에서 발견한 문제점 (다음 Claude 참고)

1. **TC 배지 불일치**: index.html TC 섹션에 `sec-stat-badge`가 "19건 표시"로 되어 있음
   - 실제 HTML에 있는 TC: 19건 (MOBILE/DB/API-RT/IOT는 없음)
   - HANDOFF 세션 2 기록: 23건이라고 주장하나, index.html에서 미확인
   - 결론: 세션 2에서 HANDOFF.md에만 기록하고 index.html에 실제 추가를 안 한 것으로 추정

2. **TC 대시보드 초기값 불일치**: dashHP=9, dashNG=8, dashEG=6 (총 23) 하드코딩되어 있으나
   JS가 DOM에서 자동 재계산하므로 실제 필터 동작 시 올바른 값으로 업데이트됨

---

*이 문서는 Claude가 포트폴리오를 이어받을 때 가장 먼저 읽어야 하는 인수인계 문서입니다.*
*작업 완료 후 반드시 이 파일의 "세션별 작업 이력" 섹션도 업데이트해 주세요.*
