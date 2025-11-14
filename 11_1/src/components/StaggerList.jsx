import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden : {opacity: 0},
    visible :{
      opacity : 1,
      transition:{
        staggerChildren: 0.2,
        delayChildren: 0.1,
      }
    }
};

const item={
    hidden: {opacity:0, y:50},
    visible: {opacity:1, y:0 }
};

const StaggerList = () => {
    const list = ["React", "Hooks", "Framer Motion", "UI Anim"];

  return (
    <div className='test'>
        <motion.ul
        variants={container}
        initial="hidden"
        whileInView='visible'
        viewport={{once:false, amount:1}}
        style={{listStyle:'none', padding: 0}}
    >
        {list.map((text, i)=>(
            <motion.li
                key={i}
                variants={item}
                style={{ marginBottom:'10px', fontSize:'20px', fontWeight:600}}
            >
                {text}
            </motion.li>
        ))}
        </motion.ul>
    </div>
    
  )
}

export default StaggerList
