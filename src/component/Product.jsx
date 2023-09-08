import React from 'react'
import './Product.css'

function Product({id,title,imag}) {
  console.log(id)
  return (
    <div className='product_detail'>
     <div className='product_info'>
        <p>{title}</p>
     </div>
     
     <img alt='' src={imag} />
     <button> add to cart</button>
      
    </div>
  )
}

export default Product
