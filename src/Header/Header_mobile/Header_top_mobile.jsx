import React from 'react';

function Header_top_mobile() {
  return (
    <div className='header_top_mobile_container'>
        <div className="shipping_sale">
            <p>FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
        </div>
        <div className="logo">
            <label>Enon</label>
        </div>
        <div className="search_bar">
            <input 
                type="text" 
                placeholder='Enter your product name...'
            />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default Header_top_mobile