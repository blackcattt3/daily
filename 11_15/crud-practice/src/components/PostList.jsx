import React from 'react'
import PostItem from './PostItem'

const PosList = ({ posts, deletePost}) => {
  return (
    <div>
      {posts.length === 0 && <p>아직 등록된 게시글이 없습니다.</p>}
      {posts.map((post)=>(
        <PostItem
            key={post.id}
            post={post}
            deletePost={deletePost}
        />
      ))}

    </div>    
  )
}

export default PosList
