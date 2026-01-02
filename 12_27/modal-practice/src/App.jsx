import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserBoard from './pages/UserBoard';

function App() {

   const [detailUser, setDetailUser] = useState(null);

   const users = [
        { id: 1, name: "Jaehee", age: 27, city: "Seoul", role: "admin" },
        { id: 2, name: "Min", age: 24, city: "Busan", role: "user" },
        { id: 3, name: "Soo", age: 30, city: "Seoul", role: "user" },
        { id: 4, name: "Yuna", age: 22, city: "Incheon", role: "user" }
    ];

    const handleClick = (e)=>{

    }

  return (
    <div>
      <UserBoard users={users} detailUser={detailUser} setDetailUser={setDetailUser}/>

      {detailUser &&
        <div className='overlay' onClick={()=>setDetailUser(null)}>
          <div className='modal' onClick={(e)=>e.stopPropagation()}>
            <h4>{detailUser.name}</h4>
            <p>{detailUser.id}</p>
          </div>
        </div>
        }
    </div>
  )
}

export default App
