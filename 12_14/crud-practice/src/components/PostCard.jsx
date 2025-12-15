import React from 'react'
import './PostCard.css'

const PostCard = ({post, id}) => {

    const deletePost = (id)=>{

  }

  return (
    <div className='card-wrapper'>
      <h3>{post}</h3>
      <div className='button-area'>
        <button>수정</button>
        <button onClick={()=>{console.log(id)}}>삭제</button>
      </div>
    </div>
  )
}

export default PostCard

// slice로 하면 불변성의 원리가 깨지지않나,, 어떤 원리로 하더라..?