// @ts-check
const { test, expect } = require('@playwright/test');

/**
 * Cart & Checkout E2E Test Suite
 * MCP Portfolio - kihyunqa
 * Covers: TC-CART-001 ~ TC-CART-010
 */

test.describe('🛒 Cart & Checkout Flow', () => {

  test('TC-CART-001: 상품 장바구니 추가', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('1');
  });

  test('TC-CART-002: 장바구니 페이지 이동 및 상품 확인', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.cart_item')).toBeVisible();
  });

  test('TC-CART-003: 장바구니에서 상품 제거', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="remove-sauce-labs-backpack"]');
    await expect(page.locator('.cart_item')).not.toBeVisible();
  });

  test('TC-CART-004: 결제 프로세스 1단계 진행', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await expect(page).toHaveURL(/checkout-step-one/);
  });

  test('TC-CART-005: 결제 정보 입력 및 2단계 진행', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'QA');
    await page.fill('[data-test="lastName"]', 'Tester');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await expect(page).toHaveURL(/checkout-step-two/);
  });

  test('TC-CART-006: 주문 완료 화면 확인', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'QA');
    await page.fill('[data-test="lastName"]', 'Tester');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await expect(page.locator('.complete-header')).toContainText('Thank you');
  });

  test('TC-CART-007: 여러 상품 담기', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');
    const badge = page.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('2');
  });

  test('TC-CART-008: 상품 상세 페이지 이동', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('.inventory_item_name >> nth=0');
    await expect(page).toHaveURL(/inventory-item/);
  });

  test('TC-CART-009: 쇼핑 계속하기 버튼 동작', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="continue-shopping"]');
    await expect(page).toHaveURL(/inventory/);
  });

  test('TC-CART-010: 스크린샷 - 주문 완료 화면', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');
    await page.click('.shopping_cart_link');
    await page.click('[data-test="checkout"]');
    await page.fill('[data-test="firstName"]', 'QA');
    await page.fill('[data-test="lastName"]', 'Tester');
    await page.fill('[data-test="postalCode"]', '12345');
    await page.click('[data-test="continue"]');
    await page.click('[data-test="finish"]');
    await page.screenshot({ path: 'screenshots/checkout-complete.png', fullPage: true });
  });
});
