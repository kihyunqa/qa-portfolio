/**
 * Page Object Model (POM) - 공통 헬퍼
 * MCP 포트폴리오 - Playwright 자동화 구조화
 */

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#password');
    this.submitBtn = page.locator('button[type="submit"]');
    this.errorMsg = page.locator('.error-message, .login-error');
  }

  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitBtn.click();
  }

  async loginAsTestUser() {
    await this.login('testuser@example.com', 'TestPass123!');
    await this.page.waitForURL('**/dashboard');
  }
}

class SearchPage {
  constructor(page) {
    this.page = page;
    this.searchInput = page.locator('#search-input, input[type="search"]');
    this.searchBtn = page.locator('#search-btn, button[type="submit"]');
    this.results = page.locator('.search-results');
    this.noResults = page.locator('.no-results');
  }

  async goto() {
    await this.page.goto('/search');
  }

  async search(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchBtn.click();
    await this.page.waitForSelector('.search-results, .no-results, .loading', { state: 'visible' });
  }
}

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart-item');
    this.totalPrice = page.locator('.total-price');
    this.checkoutBtn = page.locator('#checkout-btn, a[href*="checkout"]');
    this.emptyMsg = page.locator('.cart-empty');
  }

  async goto() {
    await this.page.goto('/cart');
  }

  async getItemCount() {
    return await this.cartItems.count();
  }

  async getTotalPrice() {
    return await this.totalPrice.textContent();
  }
}

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.cardNumber = page.locator('#card-number');
    this.cardExpiry = page.locator('#card-expiry');
    this.cardCvc = page.locator('#card-cvc');
    this.cardName = page.locator('#card-name');
    this.shippingAddress = page.locator('#shipping-address');
    this.placeOrderBtn = page.locator('#place-order');
    this.couponInput = page.locator('#coupon-code');
    this.applyCouponBtn = page.locator('#apply-coupon');
  }

  async goto() {
    await this.page.goto('/checkout');
  }

  async fillPaymentInfo({
    cardNum = '4242424242424242',
    expiry = '12/28',
    cvc = '123',
    name = 'Test User',
    address = '123 Test St, Seoul'
  } = {}) {
    await this.cardNumber.fill(cardNum);
    await this.cardExpiry.fill(expiry);
    await this.cardCvc.fill(cvc);
    await this.cardName.fill(name);
    await this.shippingAddress.fill(address);
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
    await this.page.waitForURL('**/order-confirmation', { timeout: 15000 });
  }
}

module.exports = { LoginPage, SearchPage, CartPage, CheckoutPage };
