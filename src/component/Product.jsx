import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product_detail'>
     <div className='product_info'>
        <p>The toy of america</p>
     </div>
     
     <img alt='' src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg' />
     <button> add to cart</button>
      
    </div>
  )
}

export default Product
