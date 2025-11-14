import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion'
import StaggerList from './components/StaggerList'

function App() {

  return (
    <div style={{height:"150vh", paddingTop:'200px'}}>
      {/* <motion.div
        className='trigger-box'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: false, amount: 1}}
        >
          <motion.div
            variants={{
              hidden: {opacity: 0, y: 50},
              visible: {opacity: 1, y:0, transition: { duration: 0.9, delay: 0}}
            }}
          >Hello!</motion.div>
      </motion.div> */}
      <StaggerList/>
    </div>
    
  )
}

export default App
