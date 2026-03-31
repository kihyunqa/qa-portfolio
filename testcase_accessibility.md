# ♿ 접근성 테스트 케이스

> QA Portfolio - kihyunqa | Accessibility TC 전체

## 테스트 케이스 (TC-A11Y-001 ~ 020)

| TC ID | 항목 | 점검 방법 | 예상 결과 | 표준 |
|-------|------|---------|----------|------|
| TC-A11Y-001 | html lang 속성 | `<html lang="ko">` | 속성 존재 | WCAG 3.1.1 |
| TC-A11Y-002 | 이미지 alt 속성 | `<img alt="...">` | 설명 텍스트 | WCAG 1.1.1 |
| TC-A11Y-003 | 레이블-입력 연결 | `for-id` 연결 | 레이블 표시 | WCAG 1.3.1 |
| TC-A11Y-004 | Tab 키보드 | Tab 순서 네비 | 순서 있는 포커스 | WCAG 2.4.3 |
| TC-A11Y-005 | 포커스 표시 | outline 지우지 않음 | outline 표시 | WCAG 2.4.7 |
| TC-A11Y-006 | 페이지 title 태그 | `<title>` 존재 | 제목 있음 | WCAG 2.4.2 |
| TC-A11Y-007 | viewport meta | 영역 확대 가능 | user-scalable=no 불가 | WCAG 1.4.4 |
| TC-A11Y-008 | 콘트라스트 비율 | 텍스트/배경 | 4.5:1 이상 | WCAG 1.4.3 |
| TC-A11Y-009 | 버튼 role | `role="button"` | 적절한 role | WCAG 4.1.2 |
| TC-A11Y-010 | 오류 메시지 | 폼 실패 시 | 텍스트로 안내 | WCAG 3.3.1 |
| TC-A11Y-011 | 스크린리더 | VoiceOver/NVDA | 인식 정상 | WCAG 4.1.3 |
| TC-A11Y-012 | 동영상 자막 | 영상 콘텐츠 | 자막 제공 | WCAG 1.2.2 |
| TC-A11Y-013 | 링크 명칭 | `href` 텍스트 | 의미 있는 텍스트 | WCAG 2.4.4 |
| TC-A11Y-014 | 실시간 알림 | 상태 변경 | aria-live 안내 | WCAG 4.1.3 |
| TC-A11Y-015 | 모달 포커스 | ESC키 닫기 | 포커스 복구 | WCAG 2.1.2 |
| TC-A11Y-016 | 자동 재생 가능 | 잠시 중지 버튼 | 제어 가능 | WCAG 2.2.2 |
| TC-A11Y-017 | 표 접근성 | `scope` 속성 | 헤더 연결 | WCAG 1.3.1 |
| TC-A11Y-018 | 스킵 내비게이션 | 빠른 링크 | 포커스 제공 | WCAG 2.4.1 |
| TC-A11Y-019 | 터치 요소 | 44x44px 최소 | 클릭 영역 | WCAG 2.5.5 |
| TC-A11Y-020 | 작은 텍스트 | 200% 확대 | 레이아웃 무너짐 없음 | WCAG 1.4.4 |

**접근성 TC 직접 구현 파일**: `playwright-tests/accessibility.spec.js`  
**기준**: WCAG 2.1 Level AA
