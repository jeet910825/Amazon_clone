import React from 'react'
import './Checkout.css'
import ShopingCartItem from './ShopingCartItem'
import { useStateValue } from './State Provider/stateProvider'

function Checkout() {
  const [state,dispatch]=useStateValue();
  console.log(state.basket)
  return (
    <div className='checkout'>
      <div className='shopingCart'>
        <h1>Shoping Cart</h1><hr></hr>
          {state.basket.map(e=>{
            return <ShopingCartItem key={e.id} id={e.id} title={e.title} imag={e.imag} amount={e.amount} />
          })}
      </div>
      <div className='subtotal_section'>
        <div className='subtotal'>
          <p>Sub total amout : </p>
          <p><b>$ {state.basket?.reduce((acc,cur)=>acc+cur.amount,0)} </b></p>
        </div>
      </div>
    </div>
  )
}

export default Checkout
