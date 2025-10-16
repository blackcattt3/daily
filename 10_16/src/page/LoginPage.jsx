import React from 'react'
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const LoginPage = ({setAuthenticate}) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const location = useLocation();

    const navigate = useNavigate()

    const login = async (e)=>{
        e.preventDefault();
        console.log(id, password);
        try{
            await handleSubmit();
            setAuthenticate(true);
            console.log('로그인 성공!')
            navigate('/')
        } catch(err){
            setError(err.message);
            console.log(err.message);
        }

    }

    const handleSubmit = ()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let shouldError = id != "admin" || password != "1234"
                if(shouldError){
                    reject(new Error('회원정보가 맞지 않습니다.'))
                } else{
                    resolve();
                }
            }, 1000);
        })
    }

    
  return (
    <div>
        <form onSubmit={login}>
            <input type="text" placeholder='id' onChange={e=>setId(e.target.value)}/>
            <input type="password" placeholder='password' onChange={e=>setPassword(e.target.value)}/>
            <button type="submit">Go</button>
        </form>
    </div>
  )
}

export default LoginPage
