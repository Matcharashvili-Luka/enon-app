import React, { useState } from 'react'
import './Side_bar_style.css'
import Categories from './Categories'
import Best_sellers from './Best_sellers'


function Side_bar({ open_category_menu, set_open_category_menu }) {
    return (
        <div 
            className='side_bar_container' 
            id={open_category_menu ? 'open_category_menu' : 'close_category_menu'}
            style={{ boxShadow: open_category_menu && `100px 0px 320px rgba(0, 0, 0, .5)` }}
        >
            <i className="fa-solid fa-xmark" onClick={() => set_open_category_menu(false)}></i>
            <Categories />
            <Best_sellers />
        </div>
    )
}

export default Side_bar