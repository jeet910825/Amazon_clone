import React from 'react'
import './Product.css'
import { useStateValue } from './State Provider/stateProvider'


function Product({id,title,imag,amount}) {
  const [state,dispatch]=useStateValue();
  const addtobasket=()=>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        imag:imag,
        amount:amount
      }
    })
    alert("Product added")
  }
  return (
    <div className='product_detail'>
     <div className='product_info'>
        <p>{title}</p>
     </div>
     
     <img alt='' src={imag} />
     <p className='price'>$ {amount}</p>
     <button className='addToCart' onClick={addtobasket}> add to cart</button>
      
    </div>
  )
}

export default Product
