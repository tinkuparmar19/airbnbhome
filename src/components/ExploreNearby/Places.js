import React from 'react'
import './Places.css'

function Places(props) {
    const {image, place, distance} = props.result
    return (
        <div className='place'>
            <img src={image} alt={place} className='place_image'/>
            <div className='place_description'>
                <span className='place_name'>{place}</span>
                <span className='place_distance'>{distance}</span>
            </div>
        </div>
    )
}

export default Places
