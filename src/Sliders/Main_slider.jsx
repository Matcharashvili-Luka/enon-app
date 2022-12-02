import React from 'react';
import './Main_slider_style.css';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

function Main_slider(){
  return (
    <div className='main_slider_container'>
        <div className="main_slider_element" >
            <img src={ banner1 } />
            <div className='text_info'>
                <p className="trending_items">Trending Item</p>
                <div className="dark_text_info">
                    <p>WOMEN'S</p>
                    <p>LATEST</p>
                    <p>FASHION SALE</p>
                </div>
                <p className="price_tag_info">
                    starting at <span>$20.00</span>
                </p>
                <button className="shop_now_btn">SHOP NOW</button>
            </div>
        </div>

        <div className="main_slider_element" >
            <img src={ banner2 } />
            <div className='text_info'>
                <p className="trending_items">Trending Item</p>
                <div className="dark_text_info">
                    <p>WOMEN'S</p>
                    <p>LATEST</p>
                    <p>FASHION SALE</p>
                </div>
                <p className="price_tag_info">
                    starting at <span>$20.00</span>
                </p>
                <button className="shop_now_btn">SHOP NOW</button>
            </div>
        </div>

        <div className="main_slider_element third_main_slider_element" >
            <img src={ banner3 } />
            <div className='text_info'>
                <p className="trending_items">Trending Item</p>
                <div className="dark_text_info">
                    <p>WOMEN'S</p>
                    <p>LATEST</p>
                    <p>FASHION SALE</p>
                </div>
                <p className="price_tag_info">
                    starting at <span>$20.00</span>
                </p>
                <button className="shop_now_btn">SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Main_slider