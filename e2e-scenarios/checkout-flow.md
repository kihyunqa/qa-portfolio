# E2E Scenario: 컴플리트 주문 플로우 (Full Checkout Flow)

## 시나리오 개요

- **시나리오 ID**: E2E-004
- **제목**: 로그인 → 상품 검색 → 장바구니 → 결제 전체 플로우
- **주요 기능**: 실제 사용자 시나리오 전체 커버
- **MCP 도구**: Playwright
- **작성일**: 2026-03-30

## 테스트 단계 (Given-When-Then)

```gherkin
Feature: 컴플리트 쿠포주리

  Scenario: 전체 구매 플로우 성공
    Given 사용자가 로그인된 상태다
    When 검색창에 "노트북" 입력
    And 검색 결과에서 첫 번째 상품 클릭
    And "장바구니 담기" 버튼 클릭
    And "주문하기" 버튼 클릭
    And 카드 정보 입력
    And 배송 주소 입력
    And "결제하기" 클릭
    Then 주문 완료 페이지 로드
    And 주문번호 표시
    And 확인 이메일 발송
```

## 단계별 스크린샷 위치

1. `/login` - 로그인 페이지
2. `/search?q=notebook` - 검색 결과
3. `/products/123` - 상품 상세
4. `/cart` - 장바구니 확인
5. `/checkout` - 결제 페이지
6. `/order-confirmation` - 주문 완료

## 현재 테스트 결과

| TC ID | 시나리오 | 상태 |
|-------|----------|------|
| E2E-004-01 | 정상 구매 플로우 | ✅ Pass |
| E2E-004-02 | 쿠폰 적용 후 구매 | ✅ Pass |
| E2E-004-03 | 장바구니 수정 후 구매 | ✅ Pass |
| E2E-004-04 | 결제 실패 시 재시도 | ✅ Pass |
