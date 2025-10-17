import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailPage = () => {
    const {id} = useParams();
    const location = useLocation();
  return (
    <div>
      <h1>Detail page</h1>
    </div>
  )
}

export default DetailPage
