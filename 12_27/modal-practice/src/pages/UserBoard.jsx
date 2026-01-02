import React,{useState} from 'react'
import UserList from '../components/UserList';

const UserBoard = ({setDetailUser, users, detailUser}) => {

  return (
    <div className='userboard'>
        <h3>📌 User List</h3>
      <UserList users={users} setDetailUser={setDetailUser} detailUser={detailUser}/>
    </div>
  )
}

export default UserBoard
