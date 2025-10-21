import React from 'react'
import './Box.css'
import { useEffect, useState, useRef } from 'react'

const Box = () => {
    const [isClick, setIsClick] = useState(false);
    const [smallBoxClick, setSmallBoxClick] = useState(false)
    const boxRef = useRef(null)

    useEffect(()=>{
        const outSideClick = (e)=>{
            // e.current가 button 내에 있는지 없는지 판단할것.
            if(isClick && boxRef.current && boxRef.current.contains(e.target)){
                setIsClick(false);
                console.log(boxRef.current) // 내가 ref로 연결해둔 특정 요소
                console.log(e.target)       // 지금 실제로 클릭된 요소
        }}

        if(isClick){
            document.addEventListener('click', outSideClick)
            console.log("해제준비")
        }
        return ()=>{
            document.removeEventListener('click', outSideClick)
            console.log("이벤트 제거")
        }
    },[isClick])


  return (
    <div>
        <div className={`box ${isClick? "purple":""}`} onClick={(e)=>{e.stopPropagation();setIsClick(!isClick)}}></div>
        <div ref={boxRef} className='button'>A</div>

        <div className={`small-box ${smallBoxClick?"smallColor":""}`}></div>
        <button onClick={()=>{setSmallBoxClick(!smallBoxClick)}}>change</button>
    </div>
    
  )
}

export default Box
