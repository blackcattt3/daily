import React, {useState} from 'react'
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';


const Board = () => {
   
    const [posts, setPosts] = useState([]);

    const addPost = (title, content)=>{
        const newPost = {
            id : Date.now(),
            title,
            content
        }
        setPosts([...posts, newPost])
    }

    // addPost('테스트', '테스트입니다'); -> 치명적 오류. state값이 바뀌면 리렌더링.. 무한렌더링
    // console.log(posts)

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>
            post.id !== id
        ))
    }

  return (
    <div>
      <h1>게시판 입니다!</h1>
      <PostForm addPost={addPost} posts={posts}/>
      <PostList posts={posts} deletePost={deletePost}/>
    </div>
  )
}

export default Board
