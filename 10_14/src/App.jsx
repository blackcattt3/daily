import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './component/LoginForm'
import { use } from 'react'
import { useEffect } from 'react'

function App() {

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("idle");


  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(id, password)

    setError(null);
    setStatus("loading");
    try{
       await submitForm(id, password);
      setStatus("success");
      console.log("login success");
    } catch(err) {
      setStatus("error");
      setError(err.message)
      console.log(err.message);
    }
  }

  const submitForm = (id, password)=>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        let shouldError = id !== "admin" || password !== "1234";
        if (shouldError){
          reject(new Error('Login fail'));
        } else{
          resolve();
        }
      }, 1000)
    })
  }


  return (
    <div>
      <LoginForm handleSubmit={handleSubmit} setId={setId} setPassword={setPassword} error={error}/>
    </div>
  )
}

export default App
