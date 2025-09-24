import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from "./component/Box.jsx"

const choice = {
  scissors:{
    name:"scissors",
    img:"https://www.rapiddeliveryservices.in/uploads/webp/scisso_42831-.webp"
  },
  rock:{
    name:"rock",
    img:"https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886"
  },
  paper:{
    name:"paper",
    img:"https://m.media-amazon.com/images/I/61OorFhm6SL._UF894,1000_QL80_.jpg"
  }
}



function App() {

  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [judge, setJudge] = useState("");

  const play = (userSelect)=>{
    setUserChoice(choice[userSelect])
    let computerSelect = randomItem()
    setComputerChoice(computerSelect)
    // console.log("user", "com", userChoice, computerChoice);
    // setJudge(judgement(userChoice, computerChoice));
    setJudge(judgement(choice[userSelect], computerSelect));
    console.log("computerSelect", computerSelect)
  }

  const randomItem = ()=>{
    const itemArray = Object.keys(choice);
    const index = Math.floor(Math.random()*3);    // 0~2
    const final = itemArray[index];
    return choice[final];
  }

  const judgement = (user, computer)=>{
    // console.log("user", "computer",user, computer)
    if(user.name === computer.name){
      return "tie";
    }
      else if(user.name === "scissors") return computer.name === "paper"? "win":"lose";
      else if(user.name === "rock") return computer.name === "scissors"? "win":"lose";
      else if(user.name === "paper") return computer.name === "rock"? "win":"lose";
    
  }

  return (
    <div className='wrapper'>
      <div className='main'>
        <Box title="You" item={userChoice} result={judge}/>
        <Box title="Computer" item={computerChoice} result={judge}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>

  )
}

export default App

// 컴퓨터 랜덤 아이템 선택, 이미지 보이게 하기
// judge 함수
// 이기고 짐에 따라 박스 border 색깔 변하게 하기.



// onClick 에서 C 대문자
// onClick 에서 ()=>{함수명}
// props.result에 user와 computer에 서로 다른 값 보이게 하기