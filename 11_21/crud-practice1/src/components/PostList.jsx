import React from 'react'
import PostItem from './PostItem'


const PostList = ({posts, deletePost}) => {
  return (
    <div>
        {posts.length === 0 && <p>게시물이 없습니다</p>}

      {posts.map((item)=>(
        <div>
            <PostItem item={item} deletePost={deletePost}/>
        </div>
        
      ))}
    </div>
  )
}

export default PostList
