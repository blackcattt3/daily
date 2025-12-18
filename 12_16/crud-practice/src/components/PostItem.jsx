import React,{useState} from 'react'

const PostItem = ({deletePost, post, updatePost, editingId, setEditingId, setEditingTitle, setEditingContent,
    editingTitle, editingContent
}) => {



  return (
    <div className='post-wrapper'>
        {editingId === post.id?
        <input value={editingTitle}
        onChange={(e)=>setEditingTitle(e.target.value)}/>:<h4>{post.title}</h4>}
        {editingId === post.id?
        <input value={editingContent}
        onChange={(e)=>setEditingContent(e.target.value)}/>:<p>{post.content}</p>    }
      <button onClick={()=>deletePost(post.id)}>삭제</button>
      {editingId === post.id? <button onClick={()=>updatePost(post.id)}>완료</button>:<button onClick={()=>setEditingId(post.id)}>수정</button>}
    </div>
  )
}

export default PostItem
