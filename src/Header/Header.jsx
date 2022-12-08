import React from 'react';
import Header_mobile from './Header_mobile/Header_mobile';
import Header_pc from './Header_pc/Header_pc';

function Header({ set_open_category_menu }) {
  return (
    <div>
        <Header_mobile 
          set_open_category_menu={set_open_category_menu}
        />
        <Header_pc />
    </div>
  )
}

export default Header