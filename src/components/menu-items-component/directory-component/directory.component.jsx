
import React from 'react'

import  MenuItems  from "../menu-item.component";

import './directory.style.scss'

class Directory extends React.Component{
    constructor(){
        super()

        this.state ={
            section: [
                {
                  title: 'Hats',
                  imageUrl: 'http://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop'
                },

                {
                    title: 'Jackets',
                    imageUrl: 'http://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },

                {
                    title: 'Sneakers',
                    imageUrl: 'http://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },

                {
                    title: 'Women',
                    imageUrl: 'http://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },

                {
                    title: 'Men',
                    imageUrl: 'http://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }

            ]
        }

    }

    render(){
        return(
            <div className='directory-menu'>
                {
                    this.state.section.map(({title, imageUrl, id, size, linkUrl}) => (
                       <MenuItems key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;
