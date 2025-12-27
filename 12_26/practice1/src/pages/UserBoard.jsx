import React,{useState} from 'react'
import UserList from '../components/UserList'

const UserBoard = () => {
    const users = [
        { id: 1, name: "Jaehee", age: 27, city: "Seoul", role: "admin" },
        { id: 2, name: "Min", age: 24, city: "Busan", role: "user" },
        { id: 3, name: "Soo", age: 30, city: "Seoul", role: "user" },
        { id: 4, name: "Yuna", age: 22, city: "Incheon", role: "user" }
    ];
    
    const [selectedDetail, setSelectedDetail] = useState(null);

  return (
    <div>
      <h2>📌 user list</h2>
      <UserList users={users} setSelectedDetail={setSelectedDetail}/>

      {selectedDetail &&
        <div>
            
        </div>}
    </div>
  )
}

export default UserBoard
