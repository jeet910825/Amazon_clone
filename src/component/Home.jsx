import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div>
      <div className='home_container'>
        <img  className="home_image" src={require("../img/banner.jpg")} alt='banner' />
      </div>
      <div className='home_row'>
        <Product id="123" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
        <Product id="12" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
      </div>
      <div className='home_row'>
      <Product id="1" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
      <Product id="124" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
      <Product id="125" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
      </div>
      <div className='home_row'>
      <Product id="126" title="this is the book" imag='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg'/>
      </div>
    </div>
  )
}

export default Home
