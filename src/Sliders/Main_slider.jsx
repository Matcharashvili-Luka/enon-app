import React from 'react';
import './Main_slider_style.css';
import banner1 from '../assets/banner-1.jpg';
import banner2 from '../assets/banner-2.jpg';
import banner3 from '../assets/banner-3.jpg';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";

function Main_slider(){
  return (
    <div className='main_slider_container'>    
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={false}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            autoplay={{ 
                delay: 3000,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide>
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
                            starting at <span>$19.99</span>
                        </p>
                        <button className="shop_now_btn">SHOP NOW</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main_slider_element" >
                    <img src={ banner2 } />
                    <div className='text_info'>
                        <p className="trending_items">Trending Accessories</p>
                        <div className="dark_text_info">
                            <p>MODERN</p>
                            <p>SUNGLASSES</p>
                        </div>
                        <p className="price_tag_info">
                            starting at <span>$14.99</span>
                        </p>
                        <button className="shop_now_btn">SHOP NOW</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="main_slider_element third_main_slider_element" >
                    <img src={ banner3 } />
                    <div className='text_info'>
                        <p className="trending_items">Sale Offer</p>
                        <div className="dark_text_info">
                            <p>NEW FASHION</p>
                            <p>SUMMER SALE</p>
                        </div>
                        <p className="price_tag_info">
                            starting at <span>$29.99</span>
                        </p>
                        <button className="shop_now_btn">SHOP NOW</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Main_slider