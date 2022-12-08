import React from 'react'
import './Top_product_sliders_style.css'
import img1 from '../../assets/products/sports-1.jpg'
import img2 from '../../assets/products/sports-2.jpg'
import img3 from '../../assets/products/party-wear-1.jpg'
import img4 from '../../assets/products/sports-3.jpg'
import img5 from '../../assets/products/sports-6.jpg'
import img6 from '../../assets/products/shoe-3.jpg'
import img7 from '../../assets/products/shoe-1.jpg'
import img8 from '../../assets/products/shoe-2.jpg'

function Trending() {
    const product_left_data = [
        {
            id: 1,
            src: img1,
            name: 'Running & Trekking Shoes - White',
            type: 'Sports',
            price: '49.00',
        },
        {
            id: 2,
            src: img2,
            name: 'Running & Trekking Shoes - Black',
            type: 'Sports',
            price: '79.00',
        },
        {
            id: 3,
            src: img3,
            name: 'Womens Party Wear Shoes',
            type: 'Party Wear',
            price: '94.00',
        },
        {
            id: 4,
            src: img4,
            name: 'Sports Claw Shoes',
            type: 'Sports',
            price: '54.00',
        },
    ];

    const product_right_data = [
        {
            id: 5,
            src: img5,
            name: 'Air Trekking Shoes',
            type: 'Sports',
            price: '52.00',
        },
        {
            id: 6,
            src: img6,
            name: 'Mens Boot With Suede Detail',
            type: 'Boots',
            price: '45.00',
        },
        {
            id: 7,
            src: img7,
            name: 'Mens Leather Formal Wear Shoes',
            type: 'Formal',
            price: '94.00',
        },
        {
            id: 8,
            src: img8,
            name: 'Casual Mens Brown Shoes',
            type: 'Casual',
            price: '50.00',
        },
    ];

    return (
        <div className='trending_container top_product_slider'>
            <div className="header">
                <p>Trending</p>
            </div>
            <div className="products gray_scrollbar">
                <div className="left_side">
                    {product_left_data.map((product) => {
                        return (
                            <div className="single_new_arrival_product" key={product.id}>
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
                            <div className="single_new_arrival_product" key={product.name}>
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

export default Trending