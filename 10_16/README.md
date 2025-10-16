<h3>useNavigate, Navigate 완전 정복!</h3>

💻 홈페이지<br>
⎿ 로그인 페이지<br>
⎿ 디테일 페이지<br>

<br>
📁 폴더 구조<br>
src/<br>
⎿ App.jsx                  → 전체 라우팅과 인증 상태 관리<br>
⎿ App.css                  → 전역 스타일<br>
⎿ main.jsx                 → 리액트 엔트리 포인트<br>
<br>
⎿ route/<br>
   ⎿ PrivateRoute.jsx       → 로그인 여부 확인 (문지기 역할)<br><br>

⎿ components/<br>
   ⎿ NavBar.jsx             → 상단 네비게이션바<br>

⎿ page/
   ⎿ HomePage.jsx           → 홈페이지<br>
   ⎿ LoginPage.jsx          → 로그인 페이지<br>
   ⎿ DetailPage.jsx         → 디테일 페이지<br>



✅ 기본화면은 홈페이지<br>
✅ 버튼을 눌러 디테일 페이지로 이동 가능<br>
✅ 위의 경우 로그인이 되어있을 경우만 디테일 페이지로 이동가능. <br>
✅ 로그인 탭 눌러서 로그인 페이지로 이동 가능<br>

⭐️ PrivateRoute 활용을 위해 `<Navigate to=''>` 를 이용하여 authenticate의 true/false 유무를 판단하여 true 일 경우만 디테일 페이지로 이동이 가능하게 한다. 로그인 안되어있다면 바로 로그인 페이지로 이동.<br>
⭐️ PrivateRoute는 일종의 문지기 역할.<br>
`<Route path="/detail" element={<PrivateRoute authenticate={authenticate}/>}/>` 로 기본경로를 /detail로 잡아놓고 PrivateRoute를 거치게 해 여기서 조건부 렌더링을 활용하여 로그인이 안되어있을 경우 `<Navigate to='/login'>` 로 인해 경로를 아예 로그인 페이지로 돌려버린다. 조건이 맞다면 경로는 그대로 유지, 그제서야 DetailPage 컴포넌트 렌더.


| 개선 항목           | 제안                                                       |
| --------------- | -------------------------------------------------------- |
| 🔹 **로그인 유지**   | `localStorage.setItem('auth', true)` 저장 → 새로고침해도 로그인 유지  |
| 🔹 **리다이렉트 개선** | `useLocation()`으로 로그인 전 페이지 기억 → 로그인 후 거기로 돌아가기          |
| 🔹 **회원가입 확장**  | `json-server`로 `POST /users` 요청 → 가입된 유저만 로그인 가능하게       |
| 🔹 **에러 UI 표시** | `error && <p style={{color:'red'}}>{error}</p>` 같은 표시 추가 |
