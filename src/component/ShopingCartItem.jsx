import React from 'react';
import './ShopingCartItems.css'
import { useStateValue } from './State Provider/stateProvider';

function ShopingCartItem({id,title,imag,amount}) {
  const [state,dispatch]=useStateValue();
  const removeItemFormBasket=()=>{
    dispatch({
      type:'REMOVE_FROM_BASKET',
      id:id
    })
  }
  return (
    <div className='cartProducts'>
      <div className='cartProduct_info'>
        <p>{title}</p>
      </div>
      <img src={imag} alt='imgae' />
      <div className='cartProduct_price'>
        <h3>$ {amount}</h3>
        <button className='removeFromCart' onClick={removeItemFormBasket}>remove item</button>
      </div>
    </div>
  )
}

export default ShopingCartItem
