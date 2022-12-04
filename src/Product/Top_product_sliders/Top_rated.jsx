import React from 'react'
import './Top_product_sliders_style.css'
import img1 from '../../assets/products/watch-3.jpg'
import img2 from '../../assets/products/jewellery-3.jpg'
import img3 from '../../assets/products/perfume.jpg'
import img4 from '../../assets/products/belt.jpg'
import img5 from '../../assets/products/jewellery-2.jpg'
import img6 from '../../assets/products/watch-1.jpg'
import img7 from '../../assets/products/shampoo.jpg'
import img8 from '../../assets/products/jewellery-1.jpg'

function Top_rated() {
    const product_left_data = [
        {
            src: img1,
            name: 'Pocket Warch Leather Pounch',
            type: 'Watches',
            price: '50.00',
        },
        {
            src: img2,
            name: 'Silver Deer Heart Necklace',
            type: 'Jewellery',
            price: '84.00',
        },
        {
            src: img3,
            name: 'Titan 100 Ml Womens Perfume',
            type: 'Perfume',
            price: '42.00',
        },
        {
            src: img4,
            name: 'Mens Leather Brown Belt',
            type: 'Mens Fashion',
            price: '24.00',
        },
    ];

    const product_right_data = [
        {
            src: img5,
            name: 'Platinium Zircon Classic Ring',
            type: 'Jewellery',
            price: '62.00',
        },
        {
            src: img6,
            name: 'Smart Warch Vital Plus',
            type: 'Watches',
            price: '56.00',
        },
        {
            src: img7,
            name: 'Shampoo Conditioner Packs',
            type: 'Cosmetics',
            price: '20.00',
        },
        {
            src: img8,
            name: 'Rose Gold Peacock Earrings',
            type: 'Jewellery',
            price: '25.00',
        },
    ];

    return (
        <div className='new_arrivals_container top_product_slider'>
            <div className="header">
                <p>Top Rated</p>
            </div>
            <div className="products gray_scrollbar">
                <div className="left_side">
                    {product_left_data.map((product) => {
                        return (
                            <div className="single_new_arrival_product">
                                <div className="image">
                                    <img src={product.src} alt="" />
                                </div>
                                <div className="text">
                                    <p className='single_new_arrival_product_name'>{product.name}</p>
                                    <p className='single_new_arrival_product_type'>{product.type}</p>
                                    <p className='single_new_arrival_product_price'>${product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="right_side">
                    {product_right_data.map((product) => {
                        return (
                            <div className="single_new_arrival_product">
                                <div className="image">
                                    <img src={product.src} alt="" />
                                </div>
                                <div className="text">
                                    <p className='single_new_arrival_product_name'>{product.name}</p>
                                    <p className='single_new_arrival_product_type'>{product.type}</p>
                                    <p className='single_new_arrival_product_price'>${product.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Top_rated