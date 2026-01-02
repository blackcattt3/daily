import React from 'react'

const UserItem = ({user, setDetailUser}) => {
  return (
    <div className='user-item' onClick={()=>{setDetailUser(user)}}>
      <h4>{user.name}</h4>
    </div>
  )
}

export default UserItem
