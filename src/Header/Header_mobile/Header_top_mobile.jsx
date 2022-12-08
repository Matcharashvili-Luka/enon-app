import React from 'react';
import './Header_top_mobile.css';

function Header_top_mobile() {
  return (
    <div className='header_top_mobile_container'>
        <div className='first_row'>
            <div className="shipping_sale">
                <p>FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
            </div>
            <div className="header_top_mobile_select_container">
                <select name="language" id="language" className='header_bottom_mobile_select'>
                    <option value="eng">English</option>
                    <option value="Spn">Spnanish</option>
                    <option value="ger">German</option>
                </select>
                <select name="currency" id="currency" className='header_bottom_mobile_select'>
                    <option value="dollar">$ USD</option>
                    <option value="Euro">€ EUR</option>
                    <option value="ger">¥ Yen</option>
                </select>
            </div>
        </div>
        <div className='second_row'>
            <div className="logo">
                <label>Enon</label>
            </div>
            <div className="search_bar">
                <input 
                    type="text" 
                    placeholder='Enter your product name...'
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </div>
  )
}

export default Header_top_mobile