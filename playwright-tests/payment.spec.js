const { test, expect } = require('@playwright/test');

/**
 * Payment Flow E2E Tests
 * MCP 포트폴리오 - 결제 플로우 자동화 테스트
 */

test.describe('Payment Flow', () => {
  test.beforeEach(async ({ page }) => {
    // 로그인 선행
    await page.goto('/login');
    await page.fill('#email', 'testuser@example.com');
    await page.fill('#password', 'TestPass123!');
    await page.click('button[type="submit"]');
    await page.waitForURL('**/dashboard');

    // 장바구니에 상품 추가
    await page.goto('/products/1');
    await page.click('#add-to-cart');
    await page.waitForSelector('.cart-badge');
  });

  test('TC-PAY-001: 주문 컨펄이지 로드', async ({ page }) => {
    await page.goto('/checkout');
    await expect(page).toHaveURL(/checkout/);
    await expect(page.locator('.order-summary')).toBeVisible();
    await expect(page.locator('.cart-item')).toHaveCount(1);
  });

  test('TC-PAY-002: 유효한 카드로 결제 성공', async ({ page }) => {
    await page.goto('/checkout');
    await page.fill('#card-number', '4242424242424242');
    await page.fill('#card-expiry', '12/28');
    await page.fill('#card-cvc', '123');
    await page.fill('#card-name', 'Test User');
    await page.fill('#shipping-address', '123 Test St, Seoul');
    await page.click('#place-order');
    await page.waitForURL('**/order-confirmation', { timeout: 15000 });
    await expect(page.locator('.order-success')).toBeVisible();
    await expect(page.locator('.order-number')).toBeVisible();
  });

  test('TC-PAY-003: 만료된 카드 거절 처리', async ({ page }) => {
    await page.goto('/checkout');
    await page.fill('#card-number', '4000000000000002'); // 테스트용 거절 카드
    await page.fill('#card-expiry', '12/28');
    await page.fill('#card-cvc', '123');
    await page.fill('#card-name', 'Test User');
    await page.click('#place-order');
    await expect(page.locator('.error-message')).toBeVisible();
    await expect(page.locator('.error-message')).toContainText('쭴소');
  });

  test('TC-PAY-004: 장바구니 결제 후 비우기', async ({ page }) => {
    await page.goto('/checkout');
    await page.fill('#card-number', '4242424242424242');
    await page.fill('#card-expiry', '12/28');
    await page.fill('#card-cvc', '123');
    await page.fill('#card-name', 'Test User');
    await page.click('#place-order');
    await page.waitForURL('**/order-confirmation', { timeout: 15000 });
    // 장바구니가 비어있는지 확인
    await page.goto('/cart');
    await expect(page.locator('.cart-empty')).toBeVisible();
  });

  test('TC-PAY-005: 할인 쿠폰 적용', async ({ page }) => {
    await page.goto('/checkout');
    const priceBeforeLocator = page.locator('.total-price');
    const priceBefore = await priceBeforeLocator.textContent();
    await page.fill('#coupon-code', 'TESTDISCOUNT10');
    await page.click('#apply-coupon');
    await page.waitForSelector('.discount-applied');
    const priceAfter = await priceBeforeLocator.textContent();
    expect(priceBefore).not.toEqual(priceAfter);
    await expect(page.locator('.discount-badge')).toBeVisible();
  });

  test('TC-PAY-006: 필수 주문자 정보 유효성 검사', async ({ page }) => {
    await page.goto('/checkout');
    // 주소 없이 주문 시도
    await page.fill('#card-number', '4242424242424242');
    await page.fill('#card-expiry', '12/28');
    await page.fill('#card-cvc', '123');
    await page.click('#place-order');
    await expect(page.locator('#shipping-address:invalid')).toBeVisible();
  });
});
