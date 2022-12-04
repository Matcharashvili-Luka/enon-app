import React from 'react'
import Side_bar from './Side_bar/Side_bar'
import './Product_style.css'
import Top_product_sliders from './Top_product_sliders/Top_product_sliders'

function Product() {
  return (
    <div className='product_container'>
        <Side_bar />
        <div className="products_section_container">
          <Top_product_sliders />
        </div>
    </div>
  )
}

export default Product