import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First/First'
import Second from './components/Second/Second'

function App() {

  const [bgColor, setBgColor] = useState('black');
  const checkScroll = ()=>{
    const scrollY = window.scrollY;

    if( scrollY > window.innerHeight * 0.6){
      setBgColor('white');
    } else{
      setBgColor('black')
    }
    // console.log('bgcolor', bgColor)
    // console.log(window.innerHeight);    // 812   화면 총 길이.(페이지 여러개면 더 늘어남)
    // console.log("window.screenY",window.screenY)           // 88
    // console.log(scrollY);
  }
  useEffect(()=>{
    // checkScroll()
    window.addEventListener('scroll', checkScroll);
    // return ()=> window.removeEventListener("scroll", checkScroll);
  },[])

  return (
    <div className='app' style={{backgroundColor: `${bgColor}`}}>
      <First/>
      <Second/>
    </div>
  )
}

export default App

// 배경화면 스크롤 시 60 이상으로 내려가면 배경색 바뀜.(검정 -> 흰색)
// swipe 누르면 스크롤 아래로 내려감
// 위쪽 페이지 가운데 박스, 색깔 베이지색. 누르면 배경색 보라색으로 변함.
// 박스 바깥 배경 누르면 다시 원래 색으로 돌아옴.

// useRef 써서 input값 읽어오기