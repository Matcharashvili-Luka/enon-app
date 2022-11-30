import React from 'react';
import Header_mobile from './Header_mobile/Header_mobile';
import Header_pc from './Header_pc/Header_pc';

function Header() {
  return (
    <div>
        <Header_mobile />
        <Header_pc />
    </div>
  )
}

export default Header