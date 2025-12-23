import React,{useState} from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'



const Board = () => {
    const [posts, setPosts] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editingTitle, setEditingTitle] = useState('');
    const [editingContent, setEditingContent] = useState('');

    const addPost = (title, content)=>{
        const newPost = {
            id:Date.now(),
            title,
            content
        }
        setPosts([...posts, newPost])
        console.log(posts)
    }

    const deletePost = (id)=>{
        setPosts(posts.filter((post)=>post.id !== id))
    }

    const updatePost = (id)=>{
        setPosts(posts.map((post)=>(
            editingId === id?
            {
                id,
                title: editingTitle,
                content: editingContent
            }:post
        )))
        setEditingId(null);
    }

  return (
    <div>
      <h3>📌 게시판</h3>
      <PostForm addPost={addPost}/>
      <PostList deletePost={deletePost} posts={posts} updatePost={updatePost}
      setEditingId={setEditingId} setEditingTitle={setEditingTitle} setEditingContent={setEditingContent}
      editingId={editingId} editingTitle={editingTitle} editingContent={editingContent}/>
    </div>
  )
}

export default Board
