import React, {useState} from 'react'

const PostForm = ({addPost}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!title.trim() || !content.trim()){
            return;
        }

        addPost(title, content);
        setTitle('');
        setContent('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            placeholder='제목을 입력하세요'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{display:"block", marginBottom:"10px", width:"200px"}}/>
        <textarea
            type='text'
            placeholder='내용을 입력하세요'
            value={content}
            onChange={(e)=>setContent(e.target.value)}
            style={{display:"block", marginBottom:"10px", width: "200px", height: "80px"}}/>
        <button type='submit'>저장</button>
    </form>
  )
}

export default PostForm
