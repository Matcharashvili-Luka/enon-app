import React from 'react'
import Header_bottom_mobile from './Header_bottom_mobile'
import Header_top_mobile from './Header_top_mobile'

function Header_mobile() {
  return (
    <div className='pc_hidden'>
        <Header_top_mobile />
        <Header_bottom_mobile />
    </div>
  )
}

export default Header_mobile