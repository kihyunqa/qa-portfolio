# 🚀 Performance Testing Skills

> 성능 테스트 역량 및 실제 적용 사례

---

## 핵심 성능 지표

| 지표 | 목표값 | 측정 방법 |
|------|--------|-----------|
| LCP (Largest Contentful Paint) | < 2.5s | Lighthouse, Playwright |
| FID (First Input Delay) | < 100ms | Web Vitals |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| API 응답 시간 | < 500ms | Playwright request |
| TTI (Time to Interactive) | < 3.8s | Lighthouse |

---

## 사용 도구

- **Playwright** — 실제 브라우저 성능 측정 (`performance.timing`)
- **Lighthouse** — 종합 성능 점수
- **Chrome DevTools** — 네트워크 워터폴 분석
- **k6** — API 부하 테스트

---

## 실제 테스트 예시

```javascript
// Playwright로 페이지 로드 시간 측정
test('페이지 로드 2.5초 이내', async ({ page }) => {
  const start = Date.now();
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  const loadTime = Date.now() - start;
  expect(loadTime).toBeLessThan(2500);
});
```

---

## 성능 개선 경험

- IMS Mobility: API 응답 시간 800ms → 320ms 개선 (인덱스 최적화 제안)
- 두플: 메인 페이지 LCP 4.2s → 2.1s 개선 (이미지 최적화 제안)
