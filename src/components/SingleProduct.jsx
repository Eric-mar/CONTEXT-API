import React from 'react'
import './styles.css'

function SingleProduct({prod}) {

  return (
    <div className='products'>
    <img src={prod.image} alt={prod.name} />
    <div className='productsDesc'>
        <span style={{fontWeight: 700}}>{prod.name}</span>
        <span > ${prod.price }</span>
    </div>
    </div>
  )
}

export default SingleProduct