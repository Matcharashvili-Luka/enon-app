import React from 'react';
import './Header_top&middle_style.css';

function Header_pc_top_section() {
  return (
    <div className='header_pc_top_section'>
        <div className='social_icons'>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="shipping_sale">
            <p>FREE SHIPPING THIS WEEK ORDER OVER - $55</p>
        </div>
        <div className="select_container">
            <select name="language" id="language">
                <option value="english">English</option>
                <option value="spanish">Spnanish</option>
                <option value="german">German</option>
            </select>
            <select name="currency" id="currency">
                <option value="usd">$ USD</option>
                <option value="euro">€ EURO</option>
                <option value="yen">¥ Yen</option>
            </select>
        </div>
    </div>
  )
}

export default Header_pc_top_section