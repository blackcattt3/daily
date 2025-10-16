import React from 'react'
import { Navigate } from 'react-router-dom'
import DetailPage from '../page/DetailPage'

const PrivateRoute = ({authenticate}) => {
  return authenticate==true?<DetailPage/>:<Navigate to='/login'/>
}

export default PrivateRoute
