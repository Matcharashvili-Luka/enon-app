import React from 'react'
import './Product_slider_style.css'
import dress from '../assets/icons/dress.svg'
import coat from '../assets/icons/coat.svg'
import glasses from '../assets/icons/glasses.svg'
import shorts from '../assets/icons/shorts.svg'
import tee from '../assets/icons/tee.svg'
import jacket from '../assets/icons/jacket.svg'
import watch from '../assets/icons/watch.svg'
import hat from '../assets/icons/hat.svg'

const product_slider_data = [
    {
        src: dress,
        text: 'DRESS & FROCK',
        qtn: 52,
    },
    {
        src: coat,
        text: 'WINTER WEAR',
        qtn: 37,
    },
    {
        src: glasses,
        text: 'GLASSES & LENS',
        qtn: 69,
    },
    {
        src: shorts,
        text: 'SHORTS & JEANS',
        qtn: 78,
    },
    {
        src: tee,
        text: 'T-SHIRT',
        qtn: 35,
    },
    {
        src: jacket,
        text: 'JACKET',
        qtn: 15,
    },
    {
        src: watch,
        text: 'WATCH',
        qtn: 27,
    },
    {
        src: hat,
        text: 'HAT & CAPS',
        qtn: 39,
    }
];

function Product_slider() {
  return (
    <div className='product_slider_container'>
        {product_slider_data.map((product) => {
            return(
                <div 
                    key={product.text}
                    className='product_slider_element' 
                    id={product.src === hat ? 'last_element' : product.src === dress ? 'first_element' : ''}
                >
                    <div className="image">
                        <img src={product.src} alt="" width='40' />
                    </div>
                    <div className="text">
                        <p>{product.text}</p>
                        <p className='sub_text'>Show All</p>
                    </div>
                    <div className="quantity">
                        <p>({product.qtn})</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Product_slider