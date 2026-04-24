# 성기현 · 경력기술서

📧 kihyun.qa@gmail.com · 🐙 github.com/kihyunqa · 🔗 kihyunqa.github.io/qa-portfolio

---

## 두플 — QA 파트장

**2024.11 ~ 2025.02 · 3개월 · 반도체 공정 시뮬레이션 스타트업**

### 담당 업무

**QA 전략 수립 및 팀 리딩**
- 릴리즈 사이클별 테스트 범위 정의, 우선순위 기반 TC 설계 프로세스 확립
- TC 리뷰 주도 및 버그 심각도 판단 기준(P1~P3) 팀 내 공유
- 릴리즈 QA 게이트 기준 수립 → P1 버그 누락 0건 달성
- 스타트업 구조 변화로 3개월 후 팀 해체

### 성과
- QA Part Leader로 승격 후 팀 TC 커버리지 전반 향상
- 릴리즈 게이트 기준 최초 수립 — 릴리즈 전 치명 버그 사전 차단 체계 구축

---

## IMS Mobility — QA 대리

**2022.03 ~ 2024.02 · 2년 · 모빌리티 플랫폼 (모바일앱/웹/백오피스)**

### 담당 업무

**Cypress E2E 자동화 도입**
- 반복 회귀 테스트를 수동 → Cypress 자동화로 전환, CI 파이프라인 연동
- 로그인·검색·결제·알림 핵심 플로우 E2E 스크립트 작성

**결제 QA 전담**
- PG사 연동 결제 시나리오 전 케이스 커버 (정상·실패·취소·환불·부분결제)
- 결제 금액 소수점 오차 발견 → 심각도 P1 에스컬레이션 주도 → 릴리즈 전 수정 완료

**API 검증 (Swagger 기반)**
- Swagger 문서 기반 REST API 30+ 엔드포인트 검증
- GET/POST/PUT/PATCH/DELETE 전 메서드 + 인증 토큰 검증 포함

**모바일앱 / 웹 / 백오피스 QA**
- 신규 기능 TC 설계 및 회귀 테스트 수행
- 버그 리포트 작성 (재현 경로·환경·스크린샷·심각도 포함)

### 성과
- Cypress 자동화 도입으로 회귀 테스트 시간 단축
- 결제 오차 P1 에스컬레이션 → 출시 전 수정 완료, 고객 민원 사전 방지
- API 30+ 엔드포인트 전 구간 커버

---

## 모비프렌 (삼성전자 파트너) — QA 주임

**2017.09 ~ 2022.01 · 4년 4개월 · 삼성전자 파트너사**

### 담당 업무

**IoT SmartThings 검증**
- 50+ 디바이스 연동 시나리오 설계 및 검증
- Wi-Fi · BLE · Z-Wave 프로토콜 호환성 테스트
- 신규 디바이스 온보딩 QA 프로세스 표준화

**AI Bixby 음성 명령 검증**
- 음성 인식률, 명령 시나리오 흐름, 엣지케이스 대규모 검증
- 언어별(한국어/영어) 인식 정확도 비교 테스트
- 실사용 환경(소음·거리·억양 변형) 엣지케이스 시나리오 설계

**삼성 모바일앱 QA**
- Galaxy 플래그십 전 모델 회귀 테스트 수행
- OS 업데이트 기준 기능 검증 및 호환성 테스트

### 성과
- SmartThings 50+ 디바이스 연동 QA 전 구간 담당
- Bixby AI 음성 명령 엣지케이스 체계적 설계 — 인식 오류 유형 분류 기준 수립
- 삼성전자 파트너사 4년 4개월 근무 — Galaxy 주요 라인업 QA 전 참여

---

## Claude MCP 자동화 포트폴리오 (현재 구축 중)

**2025 ~ 현재 · 개인 프로젝트**

### 구현 내용

**MCP 5개 실제 연동 (코드 0줄)**
- filesystem MCP: TC 파일 자동 생성·저장·읽기
- playwright MCP: E2E 브라우저 테스트 자동 실행, 스크린샷 캡처
- github MCP: 레포 커밋·PR·파일 업로드 대화로 처리
- notion MCP: TC 결과 Notion 페이지 자동 문서화 (실제 연동 확인)
- slack MCP: QA 완료 알림 Slack 채널 자동 발송 (실제 연동 확인)

**TC 자동생성 파이프라인**
- 기능 명세 입력 → Claude가 해피패스·네거티브·엣지케이스 자동 생성
- 현재 TC 145건+ 누적 (로그인·결제·보안·검색·API·접근성·성능 전 카테고리)

**Playwright E2E 12개 spec**
- login / search / cart / api / payment / security / signup / notification / performance / accessibility / portfolio 등
- GitHub Actions 2개 운영 (TC push → Slack 자동 알림 파이프라인)

**Jira 연동**
- GitHub for Atlassian 연동 → 커밋 메시지 기반 Jira 이슈 자동 트래킹

### 성과
- TC 생성부터 Slack 알림까지 7단계 파이프라인 대화 한 번으로 실행
- 코드 0줄, MCP 자동화만으로 QA 전 공정 구현 증명

---

*총 경력: 6년 9개월 · 포트폴리오: https://kihyunqa.github.io/qa-portfolio*
