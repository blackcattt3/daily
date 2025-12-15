import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'

const Board = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (title, content)=>{
        const newPost = {
            id: Date.now(),
            title,
            content
            // 객채 프로퍼티 축약 문법
        };
        setPosts([...posts, newPost]);
    }

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>{
            return post.id !== id
        }))
    }

  return (
    <div>
      <h3>📌 게시판</h3>
      {/* 입력 양식 */}
      <PostForm addPost={addPost}/>
      {/* 글 목록 보여주기 */}
      <PostList deletePost={deletePost} posts={posts}/>
    </div>
  )
}

export default Board
