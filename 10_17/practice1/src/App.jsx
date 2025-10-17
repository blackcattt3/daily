import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './page/HomePage'
import DetailPage from './page/DetailPage'
import Login from './page/Login'
import PrivateRoute from './route/PrivateRoute'
import NavBar from './component/NavBar'
import MyPage from './page/MyPage'
import PrivateRouteMyPage from './route/PrivateRouteMyPage'

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{
    //localStorage.setItem('auth', 'true');   // ✅ 로그인 상태 저장
    const savedAuth = localStorage.getItem('auth');
    if(savedAuth === 'true'){
      setAuthenticate(true);
    }
  },[])

  const product = [
    'A',
    'B',
    'C',
    'D',
    'E'
  ]
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<HomePage product={product} authenticate={authenticate}/>}/>
        <Route path='/detail/:id' element={<PrivateRoute product={product} authenticate={authenticate}/>}/>
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path='/mypage' element={<PrivateRouteMyPage authenticate={authenticate}/>}/>
      </Routes>
    </div>
  )
}

export default App
