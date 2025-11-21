import React, { useState } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'

const Board = () => {
    const [posts, setPosts] = useState([]);

    // Create (글 추가)
    const addPost = (title, content)=>{
        const newPost = {
            id : Date.now(),
            title,
            content
        };
        setPosts([...posts, newPost]);
        // 리액트에서 리스트에 추가할때 push 절대 노노.
        // 새로운 참조주소를 계속 생성해줘야한다.(불변성 원리)
    }

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>post.id !== id));
        // 사실상 얘는 진짜 지우는게 아니라 지우고싶은 아이디랑 다른애들만 filter로 추출해서
        // posts에 다시 담는 구조.
    }


  return (
    <div style={{ padding: '20px'}}>
      <h1>📌 게시판</h1>
      <PostForm addPost={addPost}/>
      <PostList posts={posts} deletePost={deletePost}/>
    </div>
  )
}

export default Board

// 글 목록 저장, 글 추가, 글 삭제, 자식들에게 props 넘기기.
