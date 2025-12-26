import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const users = [
    { id: 1, name: "Jaehee", age: 27, city: "Seoul", role: "admin" },
    { id: 2, name: "Min", age: 24, city: "Busan", role: "user" },
    { id: 3, name: "Soo", age: 30, city: "Seoul", role: "user" },
    { id: 4, name: "Yuna", age: 22, city: "Incheon", role: "user" }
  ];

  const selectedUser = users.find((item)=>item.id===3);
  console.log(selectedUser);

  return (
    <div>
      {/* <div>
        {users.map((user)=>(
          <div>
            {user.name} ({user.age}세) - {user.role}
          </div>
          // `${user.name} (${user.age}세) - ${user.role}`
        ))}
      </div>
      <div>
        {users.filter((user)=>user.city === "Seoul")
          .map((item)=>(
            <div>{item.name}</div>
          ))
        }
      </div>
      <div>
        {users.filter((item)=>(item.age >= 27))
          .map((item)=>(
            <div>{item.name}</div>
          ))
        }
      </div> */}
      {/* <div>
        <h2>{selectedUser.name}</h2>
        <p>나이 : {selectedUser.age}</p>
        <p>나이 : {selectedUser.city}</p>
      </div> */}
      
    </div>
  )
}

export default App
