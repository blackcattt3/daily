import React from 'react'

const PostItem = ({post, deletePost}) => {
  return (
    <div>
      <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button onClick={()=>{deletePost(post.id)}}>삭제</button>
    </div>
  )
}

export default PostItem
