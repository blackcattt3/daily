import React from 'react'
import PostItem from './PostItem'

const PostList = ({deletePost, posts, updatePost, editingId, setEditingId, setEditingTitle, setEditingContent, editingTitle, editingContent}) => {
  return (
    <div>
        {posts.map((post)=>(
            <PostItem post={post} deletePost={deletePost} updatePost={updatePost}
            editingId={editingId} setEditingId={setEditingId} setEditingTitle={setEditingTitle} setEditingContent={setEditingContent}
            editingTitle={editingTitle} editingContent={editingContent}/>
        ))}
    </div>
  )
}

export default PostList
