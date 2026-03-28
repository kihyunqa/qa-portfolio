# E2E 자동화 시나리오 — 로그인 플로우

> 생성: playwright MCP (Claude 자동화)  
> 대상: 로그인 페이지  

---

## 시나리오 01 · 정상 로그인 플로우

```
[STEP 1] playwright: navigate → https://example.com/login
         ✓ 페이지 로딩 완료

[STEP 2] playwright: fill → input[name=email] → "test@example.com"
         ✓ 이메일 입력 완료

[STEP 3] playwright: fill → input[name=password] → "password123"
         ✓ 비밀번호 입력 완료

[STEP 4] playwright: click → button[type=submit]
         ✓ 로그인 버튼 클릭

[STEP 5] playwright: screenshot → login-success.png
         ✓ 스크린샷 저장

[RESULT] 메인 화면으로 이동 확인 ✅
```

---

## 시나리오 02 · 비밀번호 5회 실패 → 계정 잠금

```
[STEP 1-5] 잘못된 비밀번호 5회 반복 입력
           playwright: fill → click (×5)

[STEP 6]   playwright: screenshot → account-locked.png
           ✓ 계정 잠금 메시지 확인

[RESULT]   "계정이 잠겼습니다" 메시지 표시 ✅
```

---

## 시나리오 03 · SQL Injection 차단

```
[STEP 1] playwright: fill → input[name=email] → "' OR 1=1 --"
[STEP 2] playwright: fill → input[name=password] → "anything"
[STEP 3] playwright: click → button[type=submit]
[STEP 4] playwright: screenshot → sql-injection-blocked.png

[RESULT] 에러 처리 확인 ✅ (SQL 실행 없음)
```

---

*Claude Desktop + playwright MCP로 자동 생성된 시나리오입니다.*
