import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import NavBar from './component/NavBar'
import HomePage from './page/HomePage'
import DetailPage from './page/DetailPage'
import LoginPage from './page/LoginPage'
import { Suspense } from 'react'
import PrivateRoute from './route/PrivateRoute'

function App() {
  
  const [authenticate, setAuthenticate] = useState(false)

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/detail" element={<PrivateRoute authenticate={authenticate}/>}/>
        <Route path="/login" element={<LoginPage setAuthenticate={setAuthenticate}/>}/>
      </Routes>
    </div>
  )
}

export default App

// useNavigate, <Navigate> 차이 완전 정복!
// useNavigate는 리액트 훅, Navigate는 컴포넌트 이다.
// Navigate : 컴포넌트 이므로 바로 리턴으로 반환할 수 있다. 조건부렌더링 등에 사용.
// useNavigate : 함수 내에서 사용한다. 특정 행동이 실행됐을때 실행된다. 