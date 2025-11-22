import React, {useState} from 'react'

const PostForm = ({addPost}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title.trim() || !content.trim()) return;
        addPost(title, content)
        setTitle('')
        setContent('')
    }

  return (
    <form onSubmit={(e)=>handleSubmit(e)}
        style={{
        gap:'10px',
        width: '200px',
        display:'flex',
        flexDirection:'column'}}>
        <input
            type='text'
            placeholder='제목'
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}/>
        <textarea
            type='text'
            placeholder='내용'
            value={content}
            onChange={(e)=>{setContent(e.target.value)}}/>
        <button type='submit'>저장하기</button>
    </form>
  )
}

export default PostForm
