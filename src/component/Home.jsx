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
        <Product />
        <Product />
      </div>
      <div className='home_row'>
        <Product />
        <Product />
        <Product />
        
      </div>
      <div className='home_row'>
        <Product ></Product>
      </div>
    </div>
  )
}

export default Home
