import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, deletePost}) => {
  return (
    <div>
        {posts.length === 0 && <p>게시글이 없습니다.</p>}
        {posts.map((post)=>(
            <div>
                <PostItem post={post} deletePost={deletePost}/>
            </div>
        ))}
    </div>
  )
}

export default PostList
