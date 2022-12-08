import React from 'react'
import './Side_bar_style.css'
import bs_1 from '../../assets/products/1.jpg'
import bs_2 from '../../assets/products/2.jpg'
import bs_3 from '../../assets/products/3.jpg'
import bs_4 from '../../assets/products/4.jpg'

function Best_sellers() {
    const best_seller_data = [
        {
            id: 1,
            img: bs_1,
            text: 'Baby Fabric Shoes',
            oldPrice: '5.00',
            newPrice: '4.00',
            rating: 5,
        },
        {
            id: 2,
            img: bs_2,
            text: "Men's Hoodie T-shirt",
            oldPrice: '17.00',
            newPrice: '13.00',
            rating: 5,
        },
        {
            id: 3,
            img: bs_4,
            text: 'Woolen Hat',
            oldPrice: '15.00',
            newPrice: '12.00',
            rating: 4,
        },
        {
            id: 4,
            img: bs_3,
            text: 'Girls T-shirt',
            oldPrice: '12.00',
            newPrice: '9.00',
            rating: 4,
        },
    ];

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
    <div className='best_sellers_container'>
        <div className="header">
            <p>BEST SELLERS</p>
        </div>
        <div className="products">
            {best_seller_data.map((element) => {
                return(
                    <div className="best_seller_element" key={element.id}>
                        <div className="image">
                            <img src={element.img} alt="" />
                        </div>
                        <div className="text">
                            <p className='name'>{element.text}</p>
                            <div className="stars">
                                {return_yellow_stars(element.rating).map((star) => star)}
                                {return_gray_stars(5 - element.rating).map((star) => star)}
                            </div>
                            <div className="price">
                                <p className='old_price'>${element.oldPrice}</p>
                                <p className='new_price'>${element.newPrice}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Best_sellers