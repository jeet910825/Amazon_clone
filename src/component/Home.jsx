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
        <Product id="123" title="iQOO Neo 7 Pro 5G (Dark Storm, 8GB RAM, 128GB Storage) | Snapdragon® 8+ Gen 1 | Independent Gaming Chip | Flagship 50MP OIS Camera | AG Glass Design" imag='https://m.media-amazon.com/images/I/611rQWZa5rL._SX679_.jpg' amount={19999}/>
        <Product id="12" title="LG 185 L 5 Star Inverter Direct-Cool Single Door Refrigerator (GL-D201ABPU, Blue Plumeria, Fast Ice Making, Base stand with drawer)" imag='https://m.media-amazon.com/images/I/61Fc4qfedbL._SX522_.jpg' amount={12490}/>
      </div>
      <div className='home_row'>
      <Product id="124" title="LG 80 cm (32 inches) HD Ready Smart LED TV 32LM563BPTC (Dark Iron Gray)" imag='https://m.media-amazon.com/images/I/71kuqRw8L5L._AC_UY327_FMwebp_QL65_.jpg'amount={13490} />
      <Product id="125" title="NB NOIZZYBOX Retro XXL 4 Band Radio Wireless Bluetooth Speaker with Remote and Equalizer (Gold)" imag='https://m.media-amazon.com/images/I/71OIT13ojLL._AC_UY327_FMwebp_QL65_.jpg'amount={3699} />
      <Product id="1" title="Campus Men's First Running Shoes" imag='https://m.media-amazon.com/images/I/71vjWEPCfsL._SY500_.jpg' amount={1599} />
      </div>
      <div className='home_row'>
      <Product id="126" title="Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN (Black)" imag='https://m.media-amazon.com/images/I/819Lw2PE8tL._AC_UY327_FMwebp_QL65_.jpg' amount={9750}/>
      </div>
    </div>
  )
}

export default Home
