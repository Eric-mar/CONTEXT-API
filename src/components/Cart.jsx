import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import './styles.css'

function Cart({cart,setCart}) {
    const [total,setTotal] = useState(0)

    useEffect(()=>
        setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price),0))

        
        ,[cart])

  return (
    <div>
        <span style={{fontSize:30 }}>
            My cart
        </span>
        <br/>
        <span style={{fontSize: 30}}>
            Total:{total}</span>
        <div className='productContainer'>
            {
                cart.map((prod)=>(
                    <SingleProduct prod={prod} key={prod.id} 
                    cart={cart} setCart={setCart} />
                ))
            }
        </div>
    </div>
  )
}

export default Cart