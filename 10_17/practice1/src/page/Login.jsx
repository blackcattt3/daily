import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
    
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(error){
            alert(error)
        }
    },[error])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    // console.log('state', location.state)
    // console.log("from", from)

    const login = (e)=>{
        e.preventDefault();
        console.log(id, password)
        if(id == 'admin' && password == '1234'){
            setAuthenticate(true);
            localStorage.setItem('auth', 'true');   // ✅ 로그인 상태 저장
            navigate(from, {replace:true});
//             근데 대부분 로그인 성공 후에 뒤로가기 하면
//              다시 로그인창 나오는 건 UX적으로 별로잖아?
//             → 현재 로그인 페이지를 히스토리 스택에서 교체함.
//              즉, “뒤로가기”를 눌러도 로그인 페이지로 돌아가지 않게 됨.
            console.log('로그인 성공')
        } else{
            setError('아이디 또는 비밀번호가 틀렸습니다');
            // console.log(error);
            // alert('아이디 또는 비밀번호가 틀렸습니다');
        }
    }

  return (
    <div>
      <form onSubmit={login}>
        <input type="text" placeholder='id' onChange={(e)=>setId(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Go</button>
      </form>
    </div>
  )
}

export default Login
