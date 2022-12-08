import React from 'react'
import './Deal_of_the_day_style.css'
import deal1 from '../../assets/products/shampoo.jpg'
import deal2 from '../../assets/products/jewellery-1.jpg'

function Deal_of_the_day() {
    return (
        <div className='deal_of_the_day_container'>
            <div className="header">
                <p>Deal Of The Day</p>
            </div>
            <div className="actual_deal gray_scrollbar">
                <div className="first_deal">
                    <div className="image">
                        <img src={deal1} alt="" />
                    </div>
                    <div className="text">
                        <h3>SHAMPOO, CONDITIONER & FACEWASH PACKS</h3>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ut corrupti amet error aliquid fugit iste illum labore veniam necessitatibus.</p>
                        <div className="price_tag">
                            <div className="new_price">
                                <p>$149.99</p>
                            </div>
                            <div className="old_price">
                                <p>$199.99</p>
                            </div>
                        </div>
                        <button>ADD TO CART</button>
                        <div className="running_line_text">
                            <p>Already Sold: 20</p>
                            <p className='available_qtn'>Available: 40</p>
                        </div>
                        <div className="running_line">
                            <div 
                                className='line'
                                style={{ width: `${(20/40)*100}%`}}
                            ></div>
                        </div>
                        <p className='hurry_up'>HURRY UP! OFFER ENDS SOON!</p>
                        <p className="free_shipping">Plus free shipping</p>
                    </div>
                </div>
                <div className="second_deal">
                    <div className="image">
                        <img src={deal2} alt="" />
                    </div>
                    <div className="text">
                        <h3>ROSE GOLD DIAMOND EARRING</h3>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ut corrupti amet error aliquid fugit iste illum labore veniam necessitatibus.</p>
                        <div className="price_tag">
                            <div className="new_price">
                                <p>$1499.99</p>
                            </div>
                            <div className="old_price">
                                <p>$1999.99</p>
                            </div>
                        </div>
                        <button>ADD TO CART</button>
                        <div className="running_line_text">
                            <p>Already Sold: 15</p>
                            <p className='available_qtn'>Available: 20</p>
                        </div>
                        <div className="running_line">
                            <div 
                                className='line'
                                style={{ width: `${(15/20)*100}%`}}
                            ></div>
                        </div>
                        <p className='hurry_up'>HURRY UP! OFFER ENDS SOON!</p>
                        <p className="free_shipping">Plus free shipping</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deal_of_the_day