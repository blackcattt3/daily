import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/Form'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Form setInputValue={setInputValue} inputValue={inputValue}/>
    </div>
  )
}

export default App
