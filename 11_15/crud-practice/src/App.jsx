import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './pages/Board'

function App() {
  // console.log(Date)
  return (
    <div>
      <Board/>
    </div>
  )
}

export default App


// 리액트 기반 todo 리스트 만들기
// all, not done, done . 탭이 눌릴때마다 state 변경,
// 상태기반.. 근데 어떤걸 기준으로 잡아야하지..?
// 리스트에 객체를 push

// state는 하나로 관리(글목록)
// 글 목록 보기 (Read)
// 글 작성(Create)
// 글 삭제(Delete)