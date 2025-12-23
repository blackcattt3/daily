import React from 'react'
import PostItem from './PostItem'

const PostList = ({deletePost, posts, updatePost, setEditingId, setEditingTitle, setEditingContent,
    editingId, editingTitle, editingContent
}) => {
  return (
    <div>
      {posts.map((post)=>(
        <PostItem post={post} deletePost={deletePost} updatePost={updatePost}
        setEditingId={setEditingId} setEditingTitle={setEditingTitle} setEditingContent={setEditingContent}
        editingId={editingId} editingTitle={editingTitle} editingContent={editingContent}/>
      ))}
    </div>
  )
}

export default PostList
