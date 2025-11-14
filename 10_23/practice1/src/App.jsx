import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FadeInSection from './hook/FadeInSection'
import { useInView } from 'react-intersection-observer'

function App() {
  
  const [bgcolor, setBgColor] = useState('black')
  const [activeIndex, setActiveIndex] = useState(0);

  const list = ['첫번째','두번째','세번째','네번째']
  const refs = list.map(()=>useInView({
    threshold:0.5
  }));
  // console.log(refs);

  useEffect(()=>{
    const index = refs.findIndex(([_, inView])=>inView)
    if(index !== -1){
      setActiveIndex(index);
    }
    console.log(activeIndex)
  },[...refs.map(([_, inView])=>inView), activeIndex])

  useEffect(()=>{
    if(activeIndex % 2 == 0){
      setBgColor('black')
    } else{
      setBgColor('white')
    }
  },[activeIndex])

  return (
    <div className='app' style={{backgroundColor : bgcolor}}>
      {list.map((item, index)=>{
        const [ref] = refs[index]
        // console.log('ref', ref)
        return <div ref={ref}>
          <FadeInSection><h1>{item}</h1></FadeInSection>
          </div>
      })}
      {/* <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection>
      <FadeInSection><h1>요소</h1></FadeInSection> */}
    </div>
  )
}

export default App


