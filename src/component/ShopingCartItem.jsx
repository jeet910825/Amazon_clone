import React from 'react';
import './ShopingCartItems.css'

function ShopingCartItem() {
  return (
    <div className='cartProducts'>
      <div className='cartProduct_info'>
        <p>name of the product</p>
      </div>
      <img src='https://th.bing.com/th/id/OIP.bpJTixcJ9eRwEFjKsApJ8QHaEo?pid=ImgDet&rs=1' alt='imgae' />
      <div className='cartProduct_price'>
        <h3>90 $</h3>
      </div>
    </div>
  )
}

export default ShopingCartItem
