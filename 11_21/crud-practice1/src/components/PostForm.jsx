import React, {useState} from 'react'

const PostForm = ({posts, addPost}) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!title.trim() || !content.trim()){
            alert('제목 또는 내용을 입력해주세요')
        } else{
            addPost(title, content)
            setTitle('')
            setContent('')
        }
        
    }

    // console.log(posts[0])
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}
    style={{display:'flex',
            flexDirection:'column',
            width: '200px',
            gap: '10px'}}>
        <input
            type='text'
            placeholder='제목'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}/>
        <textarea
            type='text'
            placeholder='내용'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
        />
        <button type='submit'>저장하기</button>
    </form>
  )
}

export default PostForm
