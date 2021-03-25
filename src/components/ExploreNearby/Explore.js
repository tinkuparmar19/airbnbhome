import React from 'react'
import './Explore.css'
import Places from './Places'

function Explore() {
    const data = [
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'jaipur',
            distance: '15-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'udaipur',
            distance: '30-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'kota',
            distance: '40-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'pushkar',
            distance: '1-hour drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'jaipur',
            distance: '15-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'udaipur',
            distance: '30-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'kota',
            distance: '40-minute drive'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            place: 'pushkar',
            distance: '1-hour drive'
        },
    ]
    return (
        <div className='explore'>
            <h1 className='heading'>Explore nearby</h1>
            <div className='places'>
                {
                    data.map(result => {
                        return <Places result={result} key={result}/>
                    })
                }
            </div>
        </div>
    )
}

export default Explore
