import React, {useState} from 'react'
import dress from '../../assets/icons/dress.svg'
import shoes from '../../assets/icons/shoes.svg'
import jewelry from '../../assets/icons/jewelry.svg'
import perfume from '../../assets/icons/perfume.svg'
import cosmetics from '../../assets/icons/cosmetics.svg'
import glasses from '../../assets/icons/glasses.svg'
import bag from '../../assets/icons/bag.svg'

function Categories() {
    const[detailed_category_obj, set_detailed_category_obj] = useState({
        'clothes': false,
        'footwear': false,
        'jewelry': false,
        'perfume': false,
        'cosmetics': false,
        'glasses': false,
        'bags': false,
    });

    let detailed_categories = {
        'clothes': false,
        'footwear': false,
        'jewelry': false,
        'perfume': false,
        'cosmetics': false,
        'glasses': false,
        'bags': false,
    };

    const open_detailed_categories = (current) => {
        let clicking_on_same_element = false;
        if(detailed_category_obj[current] == true){
            clicking_on_same_element = true;
        }

        if(!clicking_on_same_element) detailed_categories[current] = true;

        set_detailed_category_obj(detailed_categories);
    }

    return (
        <div className="categories">
            <div className="categories_header">
                <p>CATEGORY</p>
            </div>

            <ul>
                <li>
                    <div className='header' onClick={() => open_detailed_categories('clothes')} >
                        <div className="left_side">
                            <img src={dress} alt="" />
                            <p>Clothes</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['clothes'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['clothes'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="clothes_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['clothes'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Shirt</a></li>
                            <li><a>Shorts & Jeans</a></li>
                            <li><a>Jacket</a></li>
                            <li><a>Dress & Frock</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('footwear')} >
                        <div className="left_side">
                            <img src={shoes} alt="" />
                            <p>Footwear</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['footwear'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['footwear'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="footwear_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['footwear'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Sports</a></li>
                            <li><a>Formal</a></li>
                            <li><a>Casual</a></li>
                            <li><a>Safety Shoes</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('jewelry')} >
                        <div className="left_side">
                            <img src={jewelry} alt="" />
                            <p>Jewelry</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['jewelry'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['jewelry'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="jewelry_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['jewelry'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Earrings</a></li>
                            <li><a>Couple Rings</a></li>
                            <li><a>Necklace</a></li>
                            <li><a>Braclets</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('cosmetics')} >
                        <div className="left_side">
                            <img src={cosmetics} alt="" />
                            <p>Cosmetics</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['cosmetics'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['cosmetics'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="cosmetics_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['cosmetics'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Shampoo</a></li>
                            <li><a>Sunscreen</a></li>
                            <li><a>Body Wash</a></li>
                            <li><a>Makeup Kit</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('glasses')} >
                        <div className="left_side">
                            <img src={glasses} alt="" />
                            <p>Glasses</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['glasses'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['glasses'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="glasses_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['glasses'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Sunglasses</a></li>
                            <li><a>Lenses</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('bags')} >
                        <div className="left_side">
                            <img src={bag} alt="" />
                            <p>Bags</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['bags'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['bags'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="bags_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['bags'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Shopping Bag</a></li>
                            <li><a>Gym Backpack</a></li>
                            <li><a>Purse</a></li>
                            <li><a>Wallet</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div className='header' onClick={() => open_detailed_categories('perfume')} >
                        <div className="left_side">
                            <img src={perfume} alt="" />
                            <p>Perfume</p>
                        </div>
                        <div className="right_side">
                            <p className={detailed_category_obj['perfume'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_category_obj['perfume'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                    </div>
                    <div
                        className="parfume_detailed_sidebar detailed_sidebar"
                        id={detailed_category_obj['perfume'] ? 'active_detailed_category' : 'deactive_detailed_category'}
                    >
                        <ul>
                            <li><a>Clothes Perfume</a></li>
                            <li><a>Deodorant</a></li>
                            <li><a>Flower Fragrance</a></li>
                            <li><a>Air Freshener</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Categories