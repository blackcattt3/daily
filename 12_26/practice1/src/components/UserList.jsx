import React,{useState} from 'react'

const UserList = ({users, setSelectedDetail}) => {

    const goToDetail = ()=>{

    }

  return (
    <div>
      {users.map((user)=>(
        <div className='user-list' onClick={()=>setSelectedDetail(user.id)}>
            <h3>{user.name}</h3>
        </div>
      ))}
    </div>
  )
}

export default UserList
