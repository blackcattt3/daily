import React from 'react'
import MyPage from '../page/MyPage'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRouteMyPage = ({authenticate}) => {
    const location = useLocation();
  return authenticate==true? <MyPage/>:<Navigate to='/login' state={{from: location}}/>
}

export default PrivateRouteMyPage
