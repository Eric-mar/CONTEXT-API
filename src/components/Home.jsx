import React, { useState } from 'react'
import {faker} from '@faker-js/faker'
import SingleProduct from './SingleProduct';

function Home() {
    
     const ProductArray = [...Array(20)].map(() => ({
            id : faker.string.uuid(),
            price: faker.commerce.price(),
            name: faker.commerce.productName(),
            image: faker.image.url()


}))
const [products]= useState(ProductArray)
        console.log(ProductArray);
  return (
    <div className='productContainer'>
   {products.map((prod=>(
    
   <SingleProduct prod={ prod} key={prod.id} />

    
   )))}
    </div>
  )
}

export default Home