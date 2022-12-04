import React from 'react'
import './Top_product_sliders_style.css'
import img1 from '../../assets/products/clothes-1.jpg'
import img2 from '../../assets/products/clothes-2.jpg'
import img3 from '../../assets/products/clothes-3.jpg'
import img4 from '../../assets/products/shirt-1.jpg'
import img5 from '../../assets/products/jacket-5.jpg'
import img6 from '../../assets/products/jacket-2.jpg'
import img7 from '../../assets/products/jacket-4.jpg'
import img8 from '../../assets/products/jacket-6.jpg'

function New_arrivals() {
    const product_left_data = [
        {
            src: img1,
            name: 'Relaxed Short Full Sleeve T-shirt',
            type: 'Clothes',
            price: '45.00',
        },
        {
            src: img2,
            name: 'Girls Pink Embro Design Top',
            type: 'Clothes',
            price: '61.00',
        },
        {
            src: img3,
            name: 'Black Floral Wrap Midi Skirt',
            type: 'Clothes',
            price: '76.00',
        },
        {
            src: img4,
            name: 'Pure Garment Dyed Cotton Shirt',
            type: 'Mens Fashion',
            price: '68.00',
        },
    ];

    const product_right_data = [
        {
            src: img5,
            name: 'Men Yarn Fleece Full-zip Jacket',
            type: 'Winter Wear',
            price: '89.00',
        },
        {
            src: img6,
            name: 'Mens Winter Leather Jacket',
            type: 'Winter Wear',
            price: '45.00',
        },
        {
            src: img7,
            name: 'Mens Winter Leather Jacket',
            type: 'Winter Wear',
            price: '45.00',
        },
        {
            src: img8,
            name: 'Men Yarn Fleece Full-zip Jacket',
            type: 'Winter Wear',
            price: '95.00',
        },
    ];

    return (
        <div className='new_arrivals_container top_product_slider'>
            <div className="header">
                <p>New Arrivals</p>
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

export default New_arrivals