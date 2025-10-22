import React from 'react'
import './First.css'
import { useState, useEffect, useRef } from 'react'

const First = () => {
    const [isClick, setIsClick] = useState(false);
    const stateRef = useRef(null);

    const swipeScroll = ()=>{
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior:'smooth'
        })
    }

    const handleScroll = ()=>{
        const scrollY = window.scrollY;
        if( isClick && scrollY  > window.innerHeight * 0.3){
            setIsClick(false);
        }   
    }

    const refColorChange = (e)=>{
        console.log(e.target);
        if(isClick && stateRef.current && !stateRef.current.contains(e.target)){
            setIsClick(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        // console.log(isClick);
        return ()=>window.removeEventListener('scroll', handleScroll);
    },[isClick])

    useEffect(()=>{
        window.addEventListener('click', refColorChange)
    },[isClick])

  return (
    <div className='first'>
        <div className='first-items'>
            <div ref={stateRef} className={`box ${isClick? "pink":""}`} onClick={()=>{setIsClick(!isClick)}}></div>
            <div className='swipe' onClick={swipeScroll}>swipe</div>
        </div>
    </div>
  )
}

export default First

// 버튼을 누른다
// scrollY를 window.innerHeigh * 0.9 로 이동시킨다.

// prevY를 기억. prevY = scrollY로 계속 업데이트.
// 박스 색깔 초기화 하게 만들기.
// 박스색깔이 핑크색일때 스크롤 내렸다 다시 올리면 박스색깔 다시 베이지 색으로. isClick이 풀리게 하면 될듯.

// ref가 포함되어 있는 요소 바깥쪽을 눌렀을때 isClick이 false로 변함.