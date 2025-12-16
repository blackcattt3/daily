import React from 'react'
import PostItem from './PostItem'

const PostList = ({updatePost, deletePost, posts, editingTitle, editingContent, editingId,
                    setEditingTitle, setEditingContent, setEditingId
}) => {
  return (
    <div>
      {posts.map((post)=>(
        <PostItem updatePost={updatePost} deletePost={deletePost} post={post}
            editingTitle={editingTitle} editingContent={editingContent} editingId={editingId}
            setEditingId={setEditingId} setEditingTitle={setEditingTitle} setEditingContent={setEditingContent}/>
      ))}
    </div>
  )
}

export default PostList
