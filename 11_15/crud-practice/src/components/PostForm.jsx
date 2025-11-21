import React, { useState } from 'react'

const PostForm = ({addPost}) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e)=>{
        // 페이지 새로고침 막음. form태그니까!
        e.preventDefault();

        // trim : 스페이스, 탭, 줄바꿈을 양쪽끝에서만 제거해줌.
        // 사용자가 빈칸만 입력하는걸 막기 위해서!
        if(!title.trim() || !content.trim()) return;

        addPost(title, content);
        setTitle('');
        setContent('');
    }



  return (
    <form onSubmit={handleSubmit} style={{ marginBottom:'20px'}}>
        <input
            type='text'
            placeholder='제목'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{ display: "block", marginBottom:'10px', width:'200px'}}
        />
        <textarea
            type='text'
            placeholder='내용'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            style={{display: 'block', marginBottom:'10px', width:'200px', height:'80px'}}
        />
        <button type='submit'>작성하기</button>
    </form>
  )
}

export default PostForm
