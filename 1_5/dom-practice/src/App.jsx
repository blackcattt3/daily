import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [randomColor, setRandomColor] = useState('');

  const inputRef = useRef(null);

  const colorChip = [
    {id:0, color:'red'},
    {id:1, color:'blue'},
    {id:2, color:'purple'}
  ]
  const colorMap = colorChip.reduce((acc, cur) => {
    acc[cur.id] = cur.color;
    return acc;
  }, {});

  console.log(colorMap)

  const randomId = ()=>{
    // let rand = Math.floor(Math.random()*colorChip.length)
    // console.log(rand);
    // setRandomColor(colorMap[rand])
    // console.log(randomColor);
    
    // 색깔 중복 방지
    let rand;
    do{
      rand = Math.floor(Math.random()*colorChip.length);
    }while(colorChip[rand].color === randomColor);
    setRandomColor(colorChip[rand].color);
  }

  const handleSearchClick = ()=>{
    if(!isOpen){
      setIsOpen(true);
      return;
    }

    if(keyword.trim() === ''){
      setIsOpen(false);
      return;
    }
    console.log(keyword);
  }

  // const randomId = ()=>{
  //   let rand = Math.floor(Math.random()*3)
  //   console.log(rand);s
  //   setRandomColor(colorChip[rand].color)
  //   console.log(randomColor);
  // }

  // input 열리면 자동 focus
  // useEffect(()=>{
  //   if(isOpen)
  // }, [isOpen])

  return (
    <div>
      <div className='search-section'>
        {isOpen &&
          <input placeholder='검색어를 입력하세요'
            onChange={(e)=>setKeyword(e.target.value)}
            ref={inputRef}
            value={keyword}/>
        }
        <button onClick={()=>handleSearchClick()}>{isOpen?'입력':'검색'}</button>
      </div>

      <div>
        <div className='box' style={{backgroundColor:randomColor}}></div>
        <button onClick={randomId}>색변경</button>
      </div>
      
    </div>
  )
}

export default App

// classList.toggle 이용 가능
// useState 이용해서 css명 valid/invalid로 제어 가능

// 버튼 누를때마다 랜덤하게 색 변경.