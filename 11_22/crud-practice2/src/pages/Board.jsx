import React, {useState} from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'

const Board = () => {
    const [posts, setPosts] = useState([])

    const addPost = (title, content)=>{
        const newPost = {
            id: Date.now(),
            title,
            content
        }
        setPosts([...posts, newPost])
    }

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>(post.id !== id)))
    }

  return (
    <div>
        <h1>게시판</h1>
      <PostForm addPost={addPost}/>
      <PostList posts={posts} deletePost={deletePost}/>
    </div>
  )
}

export default Board
