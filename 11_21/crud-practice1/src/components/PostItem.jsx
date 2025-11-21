import React from 'react'

const PostItem = ({item, deletePost}) => {
  return (
    <div>
        <h3>{item.title}</h3>
        <p>{item.content}</p>
        <button onClick={()=>deletePost(item.id)}>삭제</button>
    </div>
  )
}

export default PostItem
