import React,{useState} from 'react'

const PostForm = ({addPost}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addPost(title, content);
        setTitle('');
        setContent('');
    }

  return (
    <form style={{display:'block', flexDirection:'column', width: '200px'}}>
        <input
            placeholder='제목'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            style={{marginBottom:'10px'}}/>
        <textarea
            placeholder='내용'
            value={content}
            onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={handleSubmit}>저장</button>
    </form>
  )
}

export default PostForm
