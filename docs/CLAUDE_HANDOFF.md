# CLAUDE HANDOFF — 인수인계 문서

> **다음 Claude에게**: 이 문서를 먼저 읽고 시작하세요. 현재 포트폴리오 상태와 완료/미완료 작업, 코드 구조가 정확히 기록되어 있습니다.

---

## 📋 프로젝트 개요

- **소유자**: 성기현 (kihyun.qa@gmail.com)
- **레포**: https://github.com/kihyunqa/qa-portfolio
- **라이브 URL**: https://kihyunqa.github.io/qa-portfolio/
- **마지막 업데이트**: 2026-04-23
- **작업 방식**: GitHub MCP (github:push_files, github:create_or_update_file)로 모든 파일 관리

---

## ✅ 현재 완료된 것 (건드리지 말 것)

### index.html 구조 (섹션 순서)
```
00 · 숫자 현황        (id=stats)
01 · MCP 자동화       (id=mcp)
02 · 실제 증거        (id=proof)
03 · 프로젝트         (id=projects)
04 · 파이프라인       (id=diagram)
05 · 로드맵           (id=roadmap)
06 · 테스트케이스     (id=tc)
07 · 경력 타임라인    (id=timeline)
08 · 스킬             (id=skills)
09 · 연락             (id=contact)
```

### TC 섹션 (id=tc) — 현재 포함된 기능
- ✅ **TC 통계 대시보드** (`.tc-dashboard`) — 총 TC 건수 / 해피패스 / 네거티브 / 엣지케이스 4칸
- ✅ **TC 유형 분포 바** (`.tc-dist-wrap`) — 해피패스/네거티브/엣지케이스 가로 바
- ✅ **설계 의도** — 각 TC 클릭 시 `.tc-detail-intent` 블록으로 "왜 이 케이스인가" 표시
- ✅ **필터 버튼** (전체 / 해피패스 / 네거티브 / 엣지케이스)
- ✅ **검색 기능** (TC-ID, 제목, 기대결과로 실시간 검색)
- ✅ **클릭 확장** (각 행 클릭 → 전제조건 / 테스트스텝 / 기대결과 상세 펼침)
- ✅ **stat bar** — 현재 표시 중인 건수 실시간 갱신

### TC 목록 (현재 20건 표시)
| TC-ID | 구분 | 우선순위 |
|---|---|---|
| AUTH-001 | 해피패스 | P1 |
| AUTH-005 | 해피패스 | P1 |
| AUTH-007 | 네거티브 | P1 |
| CART-001 | 해피패스 | P1 |
| PAY-012 | 엣지케이스 | P1 |
| API-S-006 | 엣지케이스 | P1 |
| SEC-N-002 | 네거티브 | P1 |
| PAY-HP-001 | 해피패스 | P1 |
| PAY-N-005 | 네거티브 | P1 |
| SEARCH-N-001 | 네거티브 | P2 |
| AUTH-N-008 | 네거티브 | P1 |
| NOTIF-E-003 | 엣지케이스 | P2 |
| TC-CICD-HP-001 | 해피패스 | P1 |
| ACCESS-HP-001 | 해피패스 | P2 |
| SEARCH-N-004 | 네거티브 | P1 |
| PERF-E-001 | 엣지케이스 | P2 |

*(실제 tbody에는 20개 행 존재. 위는 주요 TC만 나열)*

### 그 외 완료 사항
- ✅ MCP 5개 연동 (filesystem / playwright / github / notion / slack)
- ✅ Jira 연동 (GitHub for Atlassian)
- ✅ GitHub Actions 2개 운영 (qa-notify.yml / main.yml)
- ✅ Playwright 12 spec
- ✅ TC 145건+ 자동 생성
- ✅ docs/ 28개 문서
- ✅ 레이더 차트, 스킬 툴팁, 타임라인 확장, 커밋 히스토리 위젯
- ✅ 프린트 스타일 (@media print)
- ✅ 반응형 (@media max-width: 900px)
- ✅ 도트 네비게이션 (#dot-nav)
- ✅ 브레드크럼 (#breadcrumb)

---

## 🎯 다음 스텝 — 우선순위 순

### STEP A: TC 섹션 — "전체 펼치기 / 접기" 버튼 추가 ⭐ 권장
현재 각 TC를 개별 클릭해야만 확장됨. "전체 펼치기" 버튼을 추가하면 면접관이 한눈에 볼 수 있음.

```html
<!-- tc-row-hint 위에 삽입 -->
<div class="tc-bulk-actions reveal">
  <button id="tcExpandAll" class="tc-filter-btn">▼ 전체 펼치기</button>
  <button id="tcCollapseAll" class="tc-filter-btn">▲ 전체 접기</button>
</div>
```

JS (스크립트 맨 끝에 추가):
```javascript
document.getElementById('tcExpandAll')?.addEventListener('click', () => {
  document.querySelectorAll('.tc-data-row').forEach(row => {
    if (row.style.display === 'none') return;
    const tcId = row.dataset.tcId;
    const dr = document.querySelector(`.tc-detail-row[data-for="${tcId}"]`);
    const di = dr?.querySelector('.tc-detail-inner');
    const icon = row.querySelector('.tc-expand-icon');
    if (!dr || !di || row.classList.contains('tc-expanded')) return;
    row.classList.add('tc-expanded');
    dr.classList.add('tc-detail-visible');
    dr.style.display = '';
    icon.textContent = '▲';
    requestAnimationFrame(() => requestAnimationFrame(() => di.classList.add('tc-detail-open')));
  });
});
document.getElementById('tcCollapseAll')?.addEventListener('click', () => {
  document.querySelectorAll('.tc-data-row.tc-expanded').forEach(row => {
    const tcId = row.dataset.tcId;
    const dr = document.querySelector(`.tc-detail-row[data-for="${tcId}"]`);
    const di = dr?.querySelector('.tc-detail-inner');
    const icon = row.querySelector('.tc-expand-icon');
    row.classList.remove('tc-expanded');
    if (di) di.classList.remove('tc-detail-open');
    if (icon) icon.textContent = '▼';
    setTimeout(() => { if (dr) { dr.classList.remove('tc-detail-visible'); dr.style.display = 'none'; } }, 320);
  });
});
```

---

### STEP B: TC 섹션 — P1/P2 카테고리별 그룹 헤더 추가
현재 TC가 한 덩어리로 나열됨. P1 그룹 / P2 그룹으로 시각적으로 구분하면 구조가 명확해짐.

```html
<!-- TC 테이블 tbody 내, P1 TC 첫 번째 행 앞에 삽입 -->
<tr class="tc-group-row" data-group="p1">
  <td colspan="5" style="padding:8px 12px;background:rgba(239,68,68,.08);font-family:var(--mono);font-size:9px;color:#f87171;letter-spacing:.15em;border-bottom:1px solid rgba(239,68,68,.2)">// P1 — CRITICAL · 서비스 핵심 경로</td>
</tr>
```

---

### STEP C: Meta 태그 og:image 추가
현재 og:image가 없어 SNS 공유 시 미리보기 이미지가 없음.

```html
<!-- <head> 안에 추가 -->
<meta property="og:image" content="https://raw.githubusercontent.com/kihyunqa/qa-portfolio/main/screenshots/claude-mcp-workflow.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://raw.githubusercontent.com/kihyunqa/qa-portfolio/main/screenshots/claude-mcp-workflow.png">
```

---

### STEP D: 경력 타임라인에 두플 종료일 명확화
현재 두플 기간: `2024.11 — 2025.02` (3개월). 재직 이유, 짧은 기간에 대한 컨텍스트가 없음.

```html
<!-- 두플 tl-desc 교체 -->
<div class="tl-desc">QA Part Leader. 스타트업 구조 변화로 3개월 후 팀 해체. 재직 중 QA 전략·릴리즈 프로세스 전면 수립.</div>
```

---

### STEP E: PHASE 3 로드맵 구체화
현재 PHASE 3가 `opacity:.6`으로 흐릿. 계획 날짜와 구체적인 MCP 이름 추가.

---

## 🔧 코드 수정 방법

### index.html 수정 원칙
1. **반드시 `github:get_file_contents`로 현재 SHA를 먼저 가져올 것**
2. `github:create_or_update_file` 사용 시 `sha` 파라미터에 현재 SHA 필수
3. 파일이 134KB 이상이므로 전체 교체 시 전체 content를 그대로 넘겨야 함
4. 부분 수정은 불가 — 전체 HTML을 넘겨야 GitHub API가 정상 처리함

```javascript
// SHA 가져오기
const meta = await github.getFileContents({ owner:'kihyunqa', repo:'qa-portfolio', path:'index.html', branch:'main' });
const currentSha = meta.sha;

// 수정 후 업로드
await github.createOrUpdateFile({
  owner:'kihyunqa', repo:'qa-portfolio', path:'index.html', branch:'main',
  message:'feat: TC 전체 펼치기 버튼 추가',
  content: btoa(unescape(encodeURIComponent(newHtmlContent))),
  sha: currentSha
});
```

> ⚠️ `content`는 base64 인코딩된 문자열이어야 함. Claude.ai 내 MCP는 자동으로 처리하므로 문자열 그대로 넘겨도 됨.

---

## 📁 레포 구조 요약

```
qa-portfolio/
├── index.html              # 메인 포트폴리오 (134KB)
├── README.md               # 레포 소개
├── PROFILE.md              # 이력서
├── CHANGELOG.md            # 전체 변경 이력 (v51+)
├── docs/                   # 28개 문서
│   ├── CLAUDE_HANDOFF.md   # 이 파일 (인수인계)
│   ├── bug-stories.md      # 버그 스토리
│   ├── mcp-architecture.md # MCP 아키텍처
│   └── ...                 # 기타 26개
├── playwright-tests/       # E2E spec 12개
├── screenshots/            # 실제 연동 증거 스크린샷
│   ├── notion-tc-page.png
│   ├── claude-mcp-workflow.png
│   ├── slack-notification.png
│   └── jira-board.png
├── testcase_*.md           # TC 파일들 (145건+)
└── .github/workflows/      # Actions 2개
    ├── qa-notify.yml
    └── main.yml
```

---

## ⚡ 빠른 시작 체크리스트

새 Claude가 작업 시작할 때 순서:

1. `github:get_file_contents` → `index.html` 현재 SHA 확인
2. 이 `CLAUDE_HANDOFF.md`의 STEP A~E 중 사용자가 원하는 것 확인
3. 수정할 HTML 준비 (전체 파일)
4. `github:create_or_update_file` 또는 `github:push_files`로 커밋
5. 이 `CLAUDE_HANDOFF.md`를 수정된 내용으로 업데이트

---

## 🔑 주요 URL

| 항목 | URL |
|---|---|
| 포트폴리오 라이브 | https://kihyunqa.github.io/qa-portfolio/ |
| GitHub 레포 | https://github.com/kihyunqa/qa-portfolio |
| Jira | https://kihyunqa-1775011951168.atlassian.net |
| 이메일 | kihyun.qa@gmail.com |

---

*최종 업데이트: 2026-04-23 by Claude Sonnet 4.6*
