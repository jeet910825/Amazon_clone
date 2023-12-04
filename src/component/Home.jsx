import React from 'react';
import './Home.css';
import Product from './Product';
import Carousel from "react-bootstrap/Carousel";
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";
import image4 from "../img/4.jpg";
import image5 from "../img/5.jpg";


function Home() {
  return (
    <div>
      <div className='home_container'>
      <Carousel className="carousel">
        <Carousel.Item interval={2500}>
          <img src={image1} alt="image" className="banner-image" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={image2} alt="image" className="banner-image" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={image3} alt="image" className="banner-image" />
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <img src={image4} alt="image" className="banner-image" />
        </Carousel.Item>
        <Carousel.Item interval>
          <img src={image5} alt="image" className="banner-image" />
        </Carousel.Item>
      </Carousel>
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
