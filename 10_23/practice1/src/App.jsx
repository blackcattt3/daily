import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FadeInSection from './hook/FadeInSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection>
    </div>
  )
}

export default App
