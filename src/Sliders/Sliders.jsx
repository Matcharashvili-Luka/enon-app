import React from 'react';
import './Sliders_style.css';
import Main_slider from './Main_slider';
import Product_slider from './Product_slider';

function Sliders() {
  return (
    <div className='sliders_container'>
        <Main_slider />
        <Product_slider />
    </div>
  )
}

export default Sliders