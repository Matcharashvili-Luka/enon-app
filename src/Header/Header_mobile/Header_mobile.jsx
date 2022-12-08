import React from 'react'
import Header_bottom_mobile from './Header_bottom_mobile'
import Header_top_mobile from './Header_top_mobile'

function Header_mobile({ set_open_category_menu }) {
  return (
    <div className='pc_hidden'>
        <Header_top_mobile />
        <Header_bottom_mobile 
          set_open_category_menu={set_open_category_menu}
        />
    </div>
  )
}

export default Header_mobile