import React from 'react'
import { Data } from './Products.js'
import './Product_menu_style.css'

function Product_menu() {
    const return_yellow_stars = (qtn) => {
        let arr = [];
        for(let i = 1; i <= qtn; i++){
            arr.push(<i className="fa-solid fa-star yellow_star" key={i}></i>);
        }
        return arr;
    }

    const return_gray_stars = (qtn) => {
        let arr = [];
        for(let i = 1; i <= qtn; i++){
            arr.push(<i className="fa-solid fa-star gray_star" key={i}></i>);
        }
        return arr;
    }

  return (
    <div className='products_container'>
        <div className='header'>
            <p>Products</p>
        </div>
        <div className='product_menu_container'>
            {Data.map((element) => {
                return(
                    <div className='single_product_container' key={element.id}>
                        <div className="image">
                            <img src={element.img1} alt="" className="product_image_one" />
                            <img src={element.img2} alt="" className="product_image_two" />
                        </div>
                        <div className="name">
                            <p className="type">{element.type}</p>
                        </div>
                        <div className="text">
                            <p className="name">{element.name}</p>
                            <div className="stars">
                                {return_yellow_stars(element.stars)}
                                {return_gray_stars(5-element.stars)}
                            </div>
                            <div className="price">
                                <p>${element.is_sale ? element.Price * 0.8 : element.Price}</p>
                                <p className='no_discount_price'>{element.is_sale && `$${element.Price}`}</p>
                            </div>
                        </div>
                        <div 
                            className="sale_top"
                            style={{ display: `${element.is_sale ? 'block' : 'none'}`}}
                        >
                            <p>SALE</p>
                        </div>
                        <div className="single_product_side_bar">
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-solid fa-bag-shopping"></i>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Product_menu