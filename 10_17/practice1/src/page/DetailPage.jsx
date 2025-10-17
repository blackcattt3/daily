import React from 'react'
import {useParams, useLocation} from 'react-router-dom'

const DetailPage = ({product}) => {
    const {id} = useParams();
    const item = product[id]
    const location = useLocation();

    console.log(location);
    console.log(location.pathname);

  return (
    <div>
      <h1>DetailPage{id}</h1>
      <p>상품명: {item}</p>
      <p>상품 ID: {id}</p>
    </div>
  )
}

export default DetailPage
