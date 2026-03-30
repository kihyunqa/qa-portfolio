# 테스트케이스: CI/CD 파이프라인 & GitHub Actions

> Claude MCP github 실제 연동 기반 TC  
> 생성일: 2026-03-30 | 버전: v1.0

---

## 해륌패스 TC (8건)

| TC-ID | 제목 | 실행 조건 | 기대 결과 | 우선순위 |
|-------|------|---------|---------|----------|
| TC-CICD-HP-001 | 코드 push 시 Actions 자동 트리거 | main 브랜치에 push | workflow run 생성 확인 | P1 |
| TC-CICD-HP-002 | testcase_*.md push 시 Slack 알림 | TC 파일 업로드 | 새-채널에 알림 수신 | P1 |
| TC-CICD-HP-003 | Actions 로그 정상 출력 | 성공 실행 후 | 출력 로그에서 pass 확인 | P1 |
| TC-CICD-HP-004 | Secrets 정상 주입 | SLACK_BOT_TOKEN 설정 후 실행 | 토큰 노출 없이 인증 | P1 |
| TC-CICD-HP-005 | 여러 단계 순차 실행 | steps 다수 정의 | 순서대로 전부 통과 | P2 |
| TC-CICD-HP-006 | ubuntu-latest 런너 | runs-on 확인 | 정상적인 리눅스 환경 | P2 |
| TC-CICD-HP-007 | Actions 이력 확인 | GitHub UI 에서 Actions 탭 | 설행 이력 및 상태 표시 | P2 |
| TC-CICD-HP-008 | 재실행 (re-run) 기능 | 실패한 작업 재실행 | 성공적으로 재실행 | P2 |

---

## 네거티브 TC (7건)

| TC-ID | 제목 | 실행 조건 | 기대 결과 | 우선순위 |
|-------|------|---------|---------|----------|
| TC-CICD-NG-001 | Secret 누락시 Actions 실패 | SLACK_BOT_TOKEN 미설정 | 구체적 에러 메시지로 실패 | P1 |
| TC-CICD-NG-002 | 잘못된 YAML 문법 | 수동으로 오타 YAML | 구문 에러로 workflow 거부 | P1 |
| TC-CICD-NG-003 | 트리거 조건 불일치 | non-testcase 파일 push | 알림 발송 안 됨 | P2 |
| TC-CICD-NG-004 | 존재하지 않는 Action 버전 | 제거된 v1.25 사용 | 버전 에러 반환 | P2 |
| TC-CICD-NG-005 | 심시 타임아웃 | 네트워크 단절 시 | 연결 시간 초과 후 실패 처리 | P2 |
| TC-CICD-NG-006 | 권한 부족 레포 | workflow 스코프 없는 토큰 | 퍼미션 에러 | P1 |
| TC-CICD-NG-007 | 유효하지 않은 커밋 SHA | 제외된 커밋 hash | 체크아웃 실패 | P2 |

---

## 엣지케이스 TC (5건)

| TC-ID | 제목 | 실행 조건 | 기대 결과 | 우선순위 |
|-------|------|---------|---------|----------|
| TC-CICD-EC-001 | 동시 push 충돌 | 동시에 2명 push | 두 작업 모두 트리거 | P2 |
| TC-CICD-EC-002 | 매우 큼 파일 push | 100MB 파일 업로드 | GitHub 제한 오류 확인 | P3 |
| TC-CICD-EC-003 | 보호된 브랜치에 push | 직접 push 차단 | PR 통한 병합 요청 | P2 |
| TC-CICD-EC-004 | 동시 여러 Actions | 동시에 3개 workflow 실행 | 병렬 실행 확인 | P3 |
| TC-CICD-EC-005 | cron 스케줄링 | 정시 다일리 실행 | 새벧 자동 트리거 | P3 |

---

**TC 총계: 20건** | 해피패스 8 + 네거티브 7 + 엣지케이스 5
