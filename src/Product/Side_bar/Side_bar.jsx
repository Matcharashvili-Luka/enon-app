import React from 'react'
import './Side_bar_style.css'
import Categories from './Categories'
import Best_sellers from './Best_sellers'


function Side_bar() {
    return (
        <div className='side_bar_container mobile_hidden'>
            <Categories />
            <Best_sellers />
        </div>
    )
}

export default Side_bar