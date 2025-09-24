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

  const [userChoice, setUserChoice] = useState(null)

  const play = (userSelect)=>{
    setUserChoice(choice[userSelect]);
  }

  return (
    <div className='wrapper'>
      <div className="main">
        <Box title="You" item={userChoice}/>
        <Box title="Computer"/>
      </div>
      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>

  )
}

export default App
