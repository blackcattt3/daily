import React from 'react'
import { useRef } from 'react';


// useState 이용해서 input value 출력하기
// 상태 기반 제어 컴포넌트
// const Form = ({setInputValue, inputValue}) => {
//     const print = ()=>{
//         console.log(inputValue);
//     }
//   return (
//     <div>
//       <input type="text" onChange={(e)=>setInputValue(e.target.value)}/>
//       <button onClick={print}>go</button>
//     </div>
//   )
// }

// export default Form


// useRef 이용해서 input value 출력하기
// DO 직접 참조(비제어 컴포넌트)
const Form = ({setInputValue, inputValue}) => {

    const inputRef = useRef()
    const print = ()=>{
        console.log(inputRef.current.value);
    }

  return (
    <div>
        <input type="text" ref={inputRef}/>
        <button onClick={print}>Go</button>
    </div>
  )
}

export default Form