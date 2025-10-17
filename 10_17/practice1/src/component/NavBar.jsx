import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useEffect } from 'react'

const NavBar = ({authenticate, setAuthenticate}) => {
    const navigate = useNavigate()
    const logout = ()=>{
        console.log("로그아웃");
        navigate('/', {replace:true}); // ✅ 바로 홈으로 이동

        setTimeout(() => {
        setAuthenticate(false);
        localStorage.removeItem('auth');
    }, 10);
    }

  return (
    <div>
        <div onClick={()=>navigate('/mypage')}>마이페이지</div>
        {authenticate ? (
            <div onClick={logout}>로그아웃</div>
        ) : (
            <div onClick={()=>navigate('/login')}>로그인</div>
        ) }
        <div onClick={()=>navigate('/')}>홈</div>
    </div>
  )
}

export default NavBar

