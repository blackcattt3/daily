import React from 'react'

const Button = ({item, word, setAnswer, checkValue}) => {
    
    
  return (
    <div>
      <button onClick={(e)=>{console.log(`word:${word}`); checkValue()}}>입력</button>
    </div>
  )
}

export default Button


