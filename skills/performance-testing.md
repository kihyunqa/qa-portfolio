# 평가: 성능 테스틅 (Performance Testing)

## ?심 역량

- **Lighthouse** 점수 분석 (LCP, FID, CLS, TTFB)
- **Web Vitals** 기준 평가
- **Playwright** 성능 측정 스크립트
- 로드 테스트, 스트레스 테스트 시나리오 구성

## 성능 기준

| 지표 | 좋음 | 개선필요 | 불량 |
|------|-------|----------|------|
| LCP (Largest Contentful Paint) | < 2.5s | 2.5~4s | > 4s |
| FID (First Input Delay) | < 100ms | 100~300ms | > 300ms |
| CLS (Cumulative Layout Shift) | < 0.1 | 0.1~0.25 | > 0.25 |
| TTFB (Time to First Byte) | < 600ms | 600ms~1.8s | > 1.8s |
| API 응답 시간 | < 200ms | 200~500ms | > 500ms |

## 실무 적용 사례

- IMS Mobility: Cypress로 페이지 로드 시간 센서 자동화
- 후속 브라우저 커싱 활용 여부 QA
- MCP: `playwright-tests/performance.spec.js`로 자동 측정
