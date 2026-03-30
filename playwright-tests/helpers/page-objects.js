// page-objects.js — Page Object Model 헬퍼 | Claude MCP 자동 생성
class LoginPage {
  constructor(page) { this.page = page; }
  async goto() { await this.page.goto('/login'); }
  async login(email, password) {
    await this.page.fill('#email', email);
    await this.page.fill('#password', password);
    await this.page.click('button[type=submit]');
  }
  async getErrorMessage() { return this.page.locator('.error-message').textContent(); }
}

class CartPage {
  constructor(page) { this.page = page; }
  async goto() { await this.page.goto('/cart'); }
  async addItem(productId) { await this.page.click(`[data-product-id='${productId}'] .add-to-cart`); }
  async getCartCount() { return parseInt(await this.page.locator('.cart-count').textContent()); }
  async checkout() { await this.page.click('.checkout-btn'); }
}

class SearchPage {
  constructor(page) { this.page = page; }
  async search(query) {
    await this.page.fill('#search-input', query);
    await this.page.press('#search-input', 'Enter');
  }
  async getResultCount() { return parseInt(await this.page.locator('.result-count').textContent()); }
  async applyFilter(filterName, value) {
    await this.page.selectOption(`[data-filter='${filterName}']`, value);
  }
}

module.exports = { LoginPage, CartPage, SearchPage };
