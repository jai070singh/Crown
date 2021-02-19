import React from 'react'

import { withRouter } from "react-router-dom";

import './menu-item.style.scss'

const MenuItems = ({title, imageUrl, size, history, linkUrl, match }) => (

    <div className={`${size} menu-items`}>
        <div className= 'background-image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >

        </div>
    <div className='content'>
        <h1 className='title'  onClick={() => history.push(`${match.url}${linkUrl}`)}>{title}</h1>
        <span className='subtitle'>Shop Now</span>
    </div>
</div>
)

export default withRouter(MenuItems);