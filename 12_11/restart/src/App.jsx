import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard'

function App() {
  const keyWordList = [
    {
      word: "딸기",
      type: "과일"
    },
    {
      word: "오이",
      type: "채소"
    },
    {
      word: "참외",
      type: "과일"
    }
  ]

  return (
    <div className='main'>
      {keyWordList.map((item, id)=>(
        <ProfileCard item={item} id={id}/>
      ))}
    </div>
  )
}

export default App