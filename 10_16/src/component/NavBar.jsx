import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()

  return (
    <div className='header'>
      <div className='header-icon' onClick={()=>navigate('/')}></div>
    </div>
  )
}

export default NavBar
