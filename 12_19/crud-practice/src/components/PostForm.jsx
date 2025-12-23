import React,{useState} from 'react'

const PostForm = ({addPost}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!title.trim() || !content.trim()){
            return;
        } else{
            addPost(title, content);
            setTitle('');
            setContent('');
        }
    }

  return (
    <form  onSubmit={handleSubmit} style={{width: '200px'}}>
        <div style={{display:"flex", flexDirection:"column", gap:"10px", marginBottom:"10px"}}>
            <input placeholder='제목' value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <textarea placeholder='내용' value={content} onChange={(e)=>setContent(e.target.value)}/>
        </div>
        <button type='submit'>저장</button>
    </form>
  )
}

export default PostForm
