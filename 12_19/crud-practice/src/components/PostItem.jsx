import React from 'react'

const PostItem = ({post, deletePost, updatePost, setEditingId, setEditingTitle, setEditingContent,
    editingId, editingTitle, editingContent
}) => {
  return (
    <div className='card-wrapper'>
        {editingId == post.id? <input value={editingTitle} onChange={(e)=>setEditingTitle(e.target.value)}/>
        :<h4>{post.title}</h4>}
        {editingId == post.id? <textarea value={editingContent} onChange={(e)=>setEditingContent(e.target.value)}/>:<h4>{post.content}</h4>}
      <div>
        <button onClick={()=>deletePost(post.id)}>삭제</button>
        {editingId == post.id? <button onClick={()=>updatePost(post.id)}>완료</button>
        :<button onClick={()=>setEditingId(post.id)}>수정</button>}
      </div>
      
    </div>
  )
}

export default PostItem
