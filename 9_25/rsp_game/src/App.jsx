import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box.jsx'

const choice = {
  rock:{
    name: "rock",
    img: "https://img.freepik.com/free-psd/grey-boulder-rock-isolated-transparent-background_632498-25568.jpg?semt=ais_hybrid&w=740&q=80"
  },
  scissors:{
    name: "scissors",
    img: "https://cdn.imweb.me/thumbnail/20250207/18277569e0bff.jpg"
  },
  paper:{
    name: "paper",
    img: "https://i.namu.wiki/i/HZUMLJivyd1QwdPZfAO8OB2kRCdjbZCnS2o5m5mKCtj9ZSZtULRv9eSLQtbMLoVyRzyw0H8XSGIeb8QIVude1A.webp"
  }
}

function App() {
  
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [judge, setJudge] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = (userChoice)=>{

    setUserSelect(choice[userChoice]);
    const computerChoice = randomItem();
    setComputerSelect(computerChoice);

    const result = judgement(choice[userChoice], computerChoice);
    setJudge(result);

    let newUserScore = userScore;
    let newComputerScore = computerScore;

    if(result === "win"){
      newUserScore++;
      setUserScore(newUserScore);
    } else if(result === "lose"){
      newComputerScore++;
      setComputerScore(newComputerScore);
    }
    
    if(newUserScore == 5 || newComputerScore == 5){
      console.log("game Over")
    }

  }

  const randomItem = ()=>{
    const itemArray = Object.keys(choice);
    const index = Math.floor(Math.random()*3);
    const item = itemArray[index];
    // itemArray[index] -> rock, paper...
    return choice[item]
  }

  const judgement = (user, computer)=>{
    if(user.name === computer.name){
      return "tie";
    } else if(user.name === "scissors") return computer.name === "paper"?"win":"lose";
      else if(user.name === "rock") return computer.name === "scissors"?"win":"lose";
      else if(user.name === "paper") return computer.name === "rock"?"win":"lose";
  }
  

  return (
    <div className='wrapper'>
      <div className='main'>
        {userScore}:{computerScore}
      </div>
      <div className='main'>
        <Box title="You" item={userSelect} result={judge}/>
        <Box title="Computer" item={computerSelect} result={judge}/>
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
