import React, {useState} from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList';

const Board = () => {
    const [posts, setPosts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');
    const [editingContent, setEditingContent] = useState('');

    const addPost = (title, content)=>{
        const newPost = {
            id: Date.now(),
            title,
            content
        }

        setPosts([...posts, newPost]);
    }

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>{
            return post.id != id
        }))
    }
 
    const updatePost = (id)=>{
        setEditingId(id)
        setPosts(posts.map((post)=>(
            post.id === id?
            {
                id:post.id,
                title:editingTitle,
                content:editingContent
            }:post
        )))
        setEditingId(null);
    }

  return (
    <div>
      <h3>📌 게시판</h3>
      <PostForm addPost={addPost} posts={posts}/>
      <PostList deletePost={deletePost} posts={posts} updatePost={updatePost}
        editingTitle={editingTitle} editingContent={editingContent} editingId={editingId}
        setEditingId={setEditingId} setEditingTitle={setEditingTitle} setEditingContent={setEditingContent}/>
    </div>
  )
}

export default Board

// 값을 직접 교체하지 말것
// 불변성의 원리 생각할것
// 객체를 새로 만들것