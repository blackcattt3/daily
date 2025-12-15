import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostCard from './components/PostCard'

function App() {

  const [newPost, setNewPost] = useState({})
  const [posts, setPosts] = useState([]);

  // useEffect(()=>{
  //   console.log(posts)
  // }, [posts])

  

  return (
    <div>
      <h3>기록하기</h3>
      <div className='input-area'>
        <div className='input-wrapper'>
          {/* <input placeholder='제목을 입력하세요'/> */}
          <input placeholder='내용을 입력하세요' onChange={(e)=>setNewPost(e.target.value)}/>
        </div>
        <button onClick={()=>setPosts([...posts, newPost])}>저장</button>
      </div>
      {posts.map((post, id)=>(
        <PostCard post={post} id={id}/>
      ))}
    </div>
  )
}

export default App

// 입력
// 삭제

// newPost = {id, content}