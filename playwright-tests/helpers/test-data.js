/**
 * Test Data Factory
 * MCP 포트폴리오 - 테스트 데이터 중앙 관리
 */

const TestUsers = {
  valid: {
    email: 'testuser@example.com',
    password: 'TestPass123!',
    name: '테스트유저'
  },
  admin: {
    email: 'admin@example.com',
    password: 'AdminPass456!',
    name: '관리자'
  },
  invalid: {
    wrongPassword: { email: 'testuser@example.com', password: 'WrongPass' },
    notExist: { email: 'notexist@example.com', password: 'AnyPass123' },
    emptyEmail: { email: '', password: 'TestPass123!' },
    emptyAll: { email: '', password: '' }
  }
};

const TestCards = {
  valid: '4242424242424242',       // Stripe 테스트 카드
  declined: '4000000000000002',    // 거절 카드
  insufficient: '4000000000009995', // 잔액 부족
  expired: '4000000000000069'      // 만료 카드
};

const SearchKeywords = {
  valid: ['노트북', 'notebook', 'phone', '스마트폰'],
  noResult: ['zzz_not_exist_xyz', '존재하지않는상품123'],
  edge: ['<script>alert(1)</script>', "admin'--", 'a', ' ']
};

const TestProducts = {
  standard: { id: 1, name: '테스트 노트북', price: 1000000 },
  premium: { id: 2, name: '프리미엄 스마트폰', price: 2000000 },
  outOfStock: { id: 99, name: '품절 상품' }
};

module.exports = { TestUsers, TestCards, SearchKeywords, TestProducts };
