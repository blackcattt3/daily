import React from 'react'

const PostItem = ({updatePost, deletePost, editingTitle, editingContent, post, editingId, setEditingTitle, setEditingContent, setEditingId}) => {
  return (
    <div className='card-wrapper'>
      {editingId==post.id?
      <input
        value={editingTitle}
        onChange={(e)=>setEditingTitle(e.target.value)}
        />:<p>{post.title}</p>}

      {editingId==post.id?
      <input
        value={editingContent}
        onChange={(e)=>setEditingContent(e.target.value)}
        />:<p>{post.content}</p>}

      <button onClick={()=>deletePost(post.id)}>삭제</button>
      {editingId==post.id?<button onClick={()=>updatePost(post.id)}>완료</button>:
      <button onClick={()=>{setEditingId(post.id)}}>수정</button>}
      
    </div>
  )
}

export default PostItem

