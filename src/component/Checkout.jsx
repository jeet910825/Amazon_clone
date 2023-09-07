import React from 'react'
import './Checkout.css'
import ShopingCartItem from './ShopingCartItem'

function Checkout() {
  return (
    <div className='checkout'>
      <div className='shopingCart'>
        <h1>Shoping Cart</h1><hr></hr>
        <ShopingCartItem />
        <ShopingCartItem />
      </div>
      <div className='subtotal_section'>
        <div className='subtotal'>
          <p>Sub total amout</p>
          <p>$50</p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
