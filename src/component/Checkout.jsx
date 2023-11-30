import React from 'react'
import './Checkout.css'
import ShopingCartItem from './ShopingCartItem'
import { useStateValue } from './State Provider/stateProvider'
import { useNavigate } from 'react-router-dom'

function Checkout() {
  const history = useNavigate();
  const [state]=useStateValue();
  return (
    <div className='checkout'>
      <div className='shopingCart'>
        {state?.users?.email ? <h3 className='user-details'> Hello, {state.users.email}</h3>:""}
        <h1>Shoping Cart</h1><hr></hr>
        {state.basket.map(e=>{
            return <ShopingCartItem key={e.id} id={e.id} title={e.title} imag={e.imag} amount={e.amount} />
          })}
      </div>
      <div className='subtotal_section'>
        <div className='subtotal'>
          <p >Subtotal ({state.basket.length} items)</p>
          <p><b style={{fontSize:"larger"}}>$ {state.basket?.reduce((acc,cur)=>acc+cur.amount,0)} </b></p>
          <button className='checkout_button' style={{padding:"2px"}} onClick={()=>{
            history('/payment')
          }}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Checkout
