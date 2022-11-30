import React from 'react'
import Header_pc_middle_section from './Header_pc_middle_section'
import Header_pc_navbar_section from './Header_pc_navbar_section'
import Header_pc_top_section from './Header_pc_top_section'

function Header_pc() {
  return (
    <div className='header_pc_container mobile_hidden'>
      <Header_pc_top_section />
      <Header_pc_middle_section />
      <Header_pc_navbar_section />
    </div>
  )
}

export default Header_pc