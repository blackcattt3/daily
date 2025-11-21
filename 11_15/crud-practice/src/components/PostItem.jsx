import React from 'react'

const PostItem = ({post, deletePost}) => {
    // 게시글 보여주기! (하나의 컴포넌트)
  return (
    <div
        style={{
            border: '1px solid #ddd',
            padding: "10px",
            marginBottom : "10px",
            borderRadius: '5px',
            width: '250px'
        }}
    >
        <h3>{post.title}</h3>
        <p>{post.content}</p>

        <button
            onClick={()=>deletePost(post.id)}
            style={{ marginTop:'10px', color:'red'}}
        >삭제</button>
      
    </div>
  )
}

export default PostItem

// 읽기 UI + 버튼 클릭만 담당