import React from 'react'
import './Category.css'

function Category(props) {
    const {image, description} = props.result
    return (
        <div className='category'>
            <img src={image} alt={description} className='category_image'/>
            <p className='category_description'>{description}</p>
        </div>
    )
}

export default Category
