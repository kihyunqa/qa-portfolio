# CHANGELOG

## v37.0.0 — 2026-04-07

### STEP 119 완료 — TC 섹션 행 확장 8행 → 20행

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | `#tcBody` 행 8개 → 20개로 확장 | ✅ |
| 해피패스 | 8건 (AUTH, CART, PAY, NOTIF, CICD, ACCESS) | ✅ |
| 네거티브 | 7건 (검색 빈 결과, 세션 만료, API 타임아웃, 잔액 부족, 만료 JWT, XSS) | ✅ |
| 엣지케이스 | 5건 (소수점 오차, SQL 패턴, 모바일 뷰포트, 저속 네트워크, 부하) | ✅ |
| TC 분류 통계 바 | `// TC 분류 현황` 헤더 배지 추가 (해피패스 8건·네거티브 7건·엣지케이스 5건) | ✅ |
| CSS `.tc-stat-bar` | TC 섹션 상단 분류 비율 표시 스타일 추가 | ✅ |

#### 추가된 TC 목록 (12건)
```
SEARCH-N-001  네거티브  검색 결과 0건 빈 상태 표시
AUTH-N-008    네거티브  세션 만료 후 보호 페이지 접근
MOB-E-001     엣지케이스 모바일 320px 뷰포트 레이아웃 검증
API-N-010     네거티브  API 응답 타임아웃 (30s 초과)
PAY-HP-001    해피패스  정상 카드로 결제 완료
PAY-N-005     네거티브  잔액 부족 카드 결제 시도
NOTIF-E-003   엣지케이스 저속 네트워크(3G) 알림 중복 발송
SEC-N-002     네거티브  만료된 JWT 토큰으로 API 호출
ACCESS-HP-001 해피패스  키보드만으로 전체 폼 입력 및 제출
SEARCH-N-004  네거티브  XSS 패턴 검색어 입력
CART-HP-003   해피패스  장바구니 수량 변경 후 합계 갱신
PERF-E-001    엣지케이스 동시 100개 요청 부하 테스트
```

#### 변경된 SHA
- **index.html**: `bb34a83ef80dff2af84f2be4e84b6f7dd3cdeedf` (STEP 119)
- **CHANGELOG.md**: 이 커밋 후 새 SHA

---

## v36.0.0 — 2026-04-07

### STEP 117 완료 — Hero 섹션 Canvas 파티클 배경 효과 추가

#### 작업 내용

| 항목 | 변경 내용 | 상태 |
|------|-----------|------|
| `index.html` | Hero 섹션 내 `<canvas id="hero-canvas">` 추가 (`.hero-bg-grid` 바로 뒤) | ✅ |
| CSS `#hero-canvas` | `position:absolute;inset:0;pointer-events:none;z-index:0;opacity:.7` | ✅ |
| JS `initHeroParticles()` | Canvas API 80개 파티클, 60fps rAF 루프 | ✅ |
| 파티클 종류 | 코어 점 + 글로우 RadialGradient 혼합 (72% 확률로 글로우) | ✅ |
| 색상 팔레트 | --purple / --purple2 / --purple3 / --text 4색 | ✅ |
| 알파 펄스 | 각 파티클 개별 alphaMin~alphaMax 랜덤 펄스 | ✅ |
| 이동 방향 | 위쪽(-vy) + 좌우 미세 drift, 경계 순환 | ✅ |
| IntersectionObserver | Hero 섹션 뷰포트 밖 나가면 animLoop 일시 정지 (성능 최적화) | ✅ |
| 모바일 대응 | `@media(max-width:900px)` → `#hero-canvas{display:none}` | ✅ |

---

## v35.0.0 — 2026-04-07

### STEP 115 완료 — 커밋 히스토리 시각화 카드 추가

---

## v34.0.0 — 2026-04-07

### STEP 113 완료 — Hero 타이핑 효과 + TC 필터 버튼 복원

---

## v33.0.0 — 2026-04-07

### STEP 110~111 완료 — QA 스킬 레이더 차트 시각화

---

## v32.0.0 — 2026-04-07

### STEP 106~107 완료 — dot-nav 우측 고정 버그 완전 해결

---

## v31.0.0 — 2026-04-07

### STEP 103 완료 — TC 섹션 stat bar 추가

---

## v30.0.0 — 2026-04-07

### STEP 101 완료 — 우측 사이드 점 네비게이션 추가

---

## v29.0.0 — 2026-04-06

### STEP 100 완료 — 섹션 간 divider 강화

---

## v28.0.0 — 2026-04-06

### STEP 97 완료 — TC 테이블 필터 버튼 추가 (최초)

---

## v27.0.0 — 2026-04-06

### STEP 96 완료 — 버그 스토리 인라인 카드 섹션 추가

---

*이전 버전 이력은 git log 참고*
