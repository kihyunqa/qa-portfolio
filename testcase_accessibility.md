# ♿ Accessibility (A11y) Test Cases

> MCP Portfolio - kihyunqa | 접근성 테스트 케이스

| TC ID | 테스트 시나리오 | ?라스 표준 | 예상 결과 | 상태 |
|-------|---------------|---------|----------|------|
| TC-A11Y-001 | `lang` 속성 존재 | WCAG 2.1 A | 유효한 lang 값 | ✅ PASS |
| TC-A11Y-002 | 이미지 alt 텍스트 | WCAG 2.1 A | alt 속성 존재 | ✅ PASS |
| TC-A11Y-003 | input-label 연결 | WCAG 2.1 A | label for 연결 | ✅ PASS |
| TC-A11Y-004 | Tab 키보드 네비게이션 | WCAG 2.1 AA | 포커스 이동 | ✅ PASS |
| TC-A11Y-005 | 버튼 role 속성 | WCAG 2.1 A | type=submit | ✅ PASS |
| TC-A11Y-006 | 페이지 `<title>` 존재 | WCAG 2.1 A | 비어있지 않음 | ✅ PASS |
| TC-A11Y-007 | viewport meta 태그 | WCAG 2.1 AA | content 속성 존재 | ✅ PASS |
| TC-A11Y-008 | 접근성 기준 스크린샷 | - | 스크린샷 저장 | ✅ PASS |
| TC-A11Y-009 | 색상 대비율 | WCAG 2.1 AA | 4.5:1 이상 | ✅ PASS |
| TC-A11Y-010 | 포커스 가시성 | WCAG 2.1 AA | outline 표시 | ✅ PASS |

**실행 스펙:** `playwright-tests/accessibility.spec.js`  
**PASS율: 10/10 (100%)**
