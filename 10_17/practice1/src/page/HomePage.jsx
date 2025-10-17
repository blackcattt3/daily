import React from 'react'
import {useNavigate} from 'react-router-dom'

const HomePage = ({product, authenticate}) => {
    const navigate = useNavigate();
    console.log(product);
    const goToDetail = (index)=>{
        navigate(`/detail/${index}`)
    }
  return (
    <div>
        <div className='home'>
            <h1>Homepage</h1>
        </div>
      {product.map((item, index)=>(
        <div key={index} onClick={()=>goToDetail(index)}>상품{item}</div>
      ))}
    </div>
  )
}

export default HomePage
