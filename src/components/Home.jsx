import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct';
faker.seed(100)

function Home({cart,setCart}) {
    
     const ProductArray = [...Array(10)].map(() => ({
            id : faker.string.uuid(),
            price: faker.commerce.price(),
            name: faker.commerce.productName(),
            image: faker.image.url()


}))

const [products]= useState(ProductArray)

  return (
    <>
    <div className='productContainer'>
   {products.map((prod=>(
    
   <SingleProduct prod={ prod} key={prod.id}  cart={cart} setCart={setCart} />

    
   )))}
    </div>
    </>
  )
}

export default Home