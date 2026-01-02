import React from 'react'
import UserItem from './UserItem'

const UserList = ({users, detailUser, setDetailUser}) => {
  return (
    <div>
      {users.map((user)=>(
        <div>
            <UserItem user={user} setDetailUser={setDetailUser}/>
        </div>
      ))}
    </div>
  )
}

export default UserList
