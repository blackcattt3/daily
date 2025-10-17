import React from 'react'
import DetailPage from '../page/DetailPage'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({authenticate, product}) => {
    const location = useLocation();

  return authenticate == true?<DetailPage product={product}/>
  :<Navigate to='/login' state={{from: location}}/>
}

export default PrivateRoute

// 로그인했다가 성공하면 원래 가려던 페이지로 돌아오는 방법
// 리다이렉트 할때 지금 페이지의 위치정보(location)을 같이 넘겨야 한다. state={{from: location}}