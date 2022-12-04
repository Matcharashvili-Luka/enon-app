import React from 'react'
import './Top_product_sliders_style.css'
import New_arrivals from './New_arrivals'
import Top_rated from './Top_rated'
import Trending from './Trending'

function Top_product_sliders() {
  return (
    <div className='top_product_sliders_container'>
        <New_arrivals />
        <Trending />
        <Top_rated />
    </div>
  )
}

export default Top_product_sliders