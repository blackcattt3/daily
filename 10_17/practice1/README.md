📦 src  
 ┣ 📂 component          # 공통 컴포넌트  
 ┃ ┗ 📜 NavBar.jsx       # 네비게이션바 (로그인/로그아웃, 페이지 이동)  
 ┣ 📂 page               # 주요 페이지 컴포넌트  
 ┃ ┣ 📜 HomePage.jsx     # 홈 화면  
 ┃ ┣ 📜 Login.jsx        # 로그인 페이지  
 ┃ ┣ 📜 MyPage.jsx       # 마이페이지 (PrivateRoute 필요)  
 ┃ ┗ 📜 DetailPage.jsx   # 상품 상세페이지 (PrivateRoute 필요)  
 ┣ 📂 route              # 보호 라우트 관리  
 ┃ ┣ 📜 PrivateRoute.jsx  
 ┃ ┗ 📜 PrivateRouteMyPage.jsx  
 ┣ 📜 App.jsx            # 전체 라우팅 + 상태관리 (authenticate)  
 ┣ 📜 main.jsx           # 루트 엔트리 (BrowserRouter 설정)  
 ┗ 📜 App.css / index.css  



🚀 주요 기능  
⭐️ PrivateRoute를 이용하여 로그인한 상태에서만 마이페이지와 상품 디테일페이지 접근 가능  
⭐️ 로그아웃 시 즉시 홈으로 이동  
⭐️ localStorage로 로그인 정보 유지 및 복원  
⭐️ 로그인 필요 페이지 진입 시 → 로그인 후 원래 페이지로 복귀  


❤️‍🔥문제 해결 : 로그아웃 시 페이지 이동 타이밍 버그  
로그인 상태에서 로그아웃 시, 홈으로 리다이렉트시키려 했지만 현재 페이지(예: 마이페이지)에 그대로 남아 PrivateRoute가 로그인 페이지로 리다이렉트됨.  

첨에 이렇게 했었는데

`navigate('/', {replace:true}); // ✅ 바로 홈으로 이동
setAuthenticate(false);
localStorage.removeItem('auth');`

원하는대로 안됌.  
원인: setAuthenticate(false)가 너무 빨리 실행되어 PrivateRoute가 먼저 반응함.  

⚙️ 해결 방법 -> setTimeout을 설정해서
👉 navigate('/')로 먼저 페이지 이동 완료
👉 그 다음에 authenticate(false)로 상태 업데이트

`navigate('/', { replace: true }); // 1️⃣ 공개 페이지로 이동
  setTimeout(() => {
    setAuthenticate(false);         // 2️⃣ 상태 변경 (한 템포 뒤)
    localStorage.removeItem('auth');
}, 10);`  

이렇게 했더니 된다!!  

🧠 원인 분석  
리액트의 setState는 비동기적으로 동작하기 때문에 navigate()와 setAuthenticate()가 거의 동시에 실행되면 렌더링 사이클 중 PrivateRoute가 먼저 감지 → 로그인 페이지로 이동하는 현상이 발생함.  즉, 페이지이동 하기도 전에 navigate('/') 보다 PrivateRoute가 먼저 실행된다.  

따라서 setTimeout으로 렌더링 순서를 명시적으로 제어해 navigate가 먼저 실행된 뒤 setAuthenticate(false); 를 실행해 상태 변경이 반영되도록 함.  


💡 배운 점  
✓ 상태 업데이트(setState)는 비동기적 → 렌더링 타이밍과의 충돌을 항상 고려해야 함.  
✓ 라우팅 로직(navigate)과 인증 상태(authenticate)가 동시에 변할 때는 순서를 명확히 지정해야 안정적인 UX를 제공할 수 있음.  
✓ 작은 타이밍 차이도 SPA 구조에선 큰 영향으로 이어질 수 있다.  
