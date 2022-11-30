import React, { useState } from 'react';
import './Header_bottom_style.css';

function Header_bottom_mobile() {
    const[open_menu, set_open_menu] = useState(false);
    const[detailed_menu_obj, set_detailed_menu_obj] = useState({
        'men': false,
        'women': false,
        'jewelry': false,
        'perfume': false,
    });

    const detailed_menu = {
        'men': false,
        'women': false,
        'jewelry': false,
        'perfume': false,
    };

    const open_detailed_menu = (current) => {
        let clicking_on_same_element = false;
        if(detailed_menu_obj[current] == true){
            clicking_on_same_element = true;
            console.log('opa');
        }

        if(!clicking_on_same_element) detailed_menu[current] = true;

        set_detailed_menu_obj(detailed_menu);
    }

    return (
        <div className='header_bottom_mobile_container'>
            <div className='bottom_bar_container'>
                <div className="icons">
                    <div onClick={() => set_open_menu(true)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="bag">
                        <i className="fa-solid fa-bag-shopping"></i>
                        <div className='count'>
                            <p>0</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className='heart'>
                        <i className="fa-regular fa-heart"></i>
                        <div className='count'>
                            <p>0</p>
                        </div>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle"></i>
                    </div>
                </div>
            </div>

            <div 
                className="menu_container" 
                id={open_menu ? 'open_menu_actived' : 'open_menu_deactivated'}
                style={{ boxShadow: open_menu && `100px 0px 320px rgba(0, 0, 0, .5)` }}
            >
                <div className="menu_header">
                    <p>Menu</p>
                    <i 
                        className="fa-solid fa-xmark"
                        onClick={() => set_open_menu(false)}
                    ></i>
                </div>
                <ul>
                    <li className='one_click_link'>
                        <a href="#">Home</a>    
                    </li>

                    <li>
                        <div className='header' onClick={() => open_detailed_menu('men')}>
                            <a href="#">Men's</a>
                            <p className={detailed_menu_obj['men'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_menu_obj['men'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                        <div 
                            className="mens_detailed detailed"
                            id={detailed_menu_obj['men'] ? 'active_detailed_menu' : 'deactive_detailed_menu'}
                        >
                            <ul>
                                <li><a>Shirt</a></li>
                                <li><a>Shorts & Jeans</a></li>
                                <li><a>Safety Shoes</a></li>
                                <li><a>Wallet</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className='header' onClick={() => open_detailed_menu('women')}>
                            <a href="#">Women's</a>
                            <p className={detailed_menu_obj['women'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_menu_obj['women'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                        <div 
                            className="women_detailed detailed"
                            id={detailed_menu_obj['women'] ? 'active_detailed_menu' : 'deactive_detailed_menu'}
                        >
                            <ul>
                                <li><a>Dress & Frock</a></li>
                                <li><a>Earrings</a></li>
                                <li><a>Necklace</a></li>
                                <li><a>Makeup kit</a></li>
                            </ul>
                        </div>
                    </li>

                    <li>
                        <div className='header' onClick={() => open_detailed_menu('jewelry')}>
                            <a href="#">Jewelry</a>
                            <p className={detailed_menu_obj['jewelry'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_menu_obj['jewelry'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                        <div 
                            className="jewelry_detailed detailed"
                            id={detailed_menu_obj['jewelry'] ? 'active_detailed_menu' : 'deactive_detailed_menu'}
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
                        <div className='header' onClick={() => open_detailed_menu('perfume')}>
                            <a href="#">Perfume</a>
                            <p className={detailed_menu_obj['perfume'] ? 'hidden_plus' : 'shown_plus'}>+</p>
                            <p className={detailed_menu_obj['perfume'] ? 'shown_minus' : 'hidden_minus'}>-</p>
                        </div>
                        <div 
                            className="parfume_detailed detailed"
                            id={detailed_menu_obj['perfume'] ? 'active_detailed_menu' : 'deactive_detailed_menu'}
                        >
                            <ul>
                                <li><a>Clothes Perfume</a></li>
                                <li><a>Deodorant</a></li>
                                <li><a>Flower Fragrance</a></li>
                                <li><a>Air Freshener</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className='one_click_link'>
                        <a href="#">Blog</a>
                    </li>

                    <li className='one_click_link'>
                        <a href="#">Hot Offers</a>
                    </li>

                    <li className='header_bottom_mobile_select_container language_select_container'>
                        <a href="#">Language</a>
                        <select name="language" id="language" className='header_bottom_mobile_select'>
                            <option value="eng">English</option>
                            <option value="Spn">Spnanish</option>
                            <option value="ger">German</option>
                        </select>
                    </li>

                    <li className='header_bottom_mobile_select_container'>
                        <a href="#">Currency</a>
                        <select name="currency" id="currency" className='header_bottom_mobile_select'>
                            <option value="dollar">$ USD</option>
                            <option value="Euro">€ EUR</option>
                            <option value="ger">¥ Yen</option>
                        </select>
                    </li>

                    <li className='header_bottom_mobile_social_icons_container'>
                        <div className='social_icons'>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-linkedin"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header_bottom_mobile