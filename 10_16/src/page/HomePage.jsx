import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const goToLogin = ()=>{
        navigate('/login')
    }
  return (
    <div>
        <div className='top'>
            <h1>HomePage</h1>
            <div onClick={goToLogin} className='login-btn'>로그인</div>
        </div>
        <button onClick={()=>navigate('/detail')}>go to detail</button>
    </div>
  )
}

export default HomePage

// go to detail 눌렀을때 로그인 되어있으면 detail로 이동. 아니면 로그인으로 이동
// 로그인 후 원래 있던 페이지로 이동하기
