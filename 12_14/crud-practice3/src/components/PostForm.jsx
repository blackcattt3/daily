import React,{useState, useEffect} from 'react'

const PostForm = ({addPost, posts}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        addPost(title, content);
        setTitle('');
        setContent('');
    }

  return (
    <form>
      <input
        placeholder='제목'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
      <textarea
        placeholder='내용'
        value={content}
        onChange={(e)=>setContent(e.target.value)}/>
      <button onClick={handleSubmit}>저장</button>
    </form>
  )
}

export default PostForm
