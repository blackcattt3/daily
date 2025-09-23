import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from './component/Box'

const choice = {
    rock:{
      name:"Rock",
      img:"https://store.clickhole.com/cdn/shop/files/Untitleddesign_6.png?v=1693423886"
    },
    scissors:{
      name:"Scissors",
      img:"https://m.media-amazon.com/images/I/51QtmdQD-sL._UF894,1000_QL80_.jpg"    },
    paper:{
      name:"Paper",
      img:"https://m.media-amazon.com/images/I/61OorFhm6SL._UF894,1000_QL80_.jpg"
    }
  }

function App() {

  const [userChoice, setUserChoice] = useState(null);

  const play = (userSelect)=>{
    // setUserChoice
    console.log(userSelect);
    setUserChoice(choice[userSelect]);
  }

  return (
    <div className='wrapper'>
      <div className='main'>
        <Box title="You" item={userChoice}/>
        <Box title="Computer"/>
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
