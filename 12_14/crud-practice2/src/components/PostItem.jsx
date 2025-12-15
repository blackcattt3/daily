import React from 'react'

const PostItem = ({post, deletePost, key}) => {
  return (
    <div className='item-wrapper'>
        <div>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <button onClick={()=>deletePost(post.id)}>삭제</button>
        </div>
    </div>
  )
}

export default PostItem
