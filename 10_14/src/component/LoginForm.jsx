import React from 'react'

const LoginForm = ({handleSubmit, setId, setPassword, error}) => {
  return (
    <div>
        <form>
            <input className="id" onChange={e => setId(e.target.value)}/>
            <input  className="password" onChange={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>enter</button>    
        </form>
        {error && <p>{error}</p>}
    </div>
    
  )
}

export default LoginForm
