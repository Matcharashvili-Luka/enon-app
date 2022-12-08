import React from 'react'
import Side_bar from './Side_bar/Side_bar'
import './Product_style.css'
import Top_product_sliders from './Top_product_sliders/Top_product_sliders'
import Deal_of_the_day from './Deal_of_the_day/Deal_of_the_day'
import Product_menu from './Product_menu/Product_menu'

function Product({ open_category_menu, set_open_category_menu }) {
  return (
    <div className='product_container'>
        <Side_bar 
          open_category_menu={open_category_menu}
          set_open_category_menu={set_open_category_menu}
        />
        <div className="products_section_container">
          <Top_product_sliders />
          <Deal_of_the_day />
          <Product_menu />
        </div>
    </div>
  )
}

export default Product