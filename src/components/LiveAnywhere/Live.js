import React from 'react'
import './Live.css'
import Category from './Category'

function Live() {
    const data = [
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            description: 'Entire Homes',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            description: 'Unique Stays',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            description: 'Cottages',
        },
        {
            image: 'https://cdn.pixabay.com/photo/2018/05/09/01/00/greece-3384386__340.jpg',
            description: 'Pets allowed',
        },
    ]
    return (
        <div className='live'>
            <h1 className='heading'>Live Anywhere</h1>
            <div className='live_category'>
                {
                    data.map(result => {
                        return <Category result={result} key={result}/>
                    })
                }
            </div>
        </div>
    )
}

export default Live
