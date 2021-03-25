import React, { useState } from 'react'
import './Home.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faGlobe, faSearch, faUserCircle} from '@fortawesome/free-solid-svg-icons'
import InputBox from './InputBox'

function Home() {
    const places = [
        {
            label: 'Location',
            place: 'Where'
        },
        {
            label: 'Check in',
            place: 'Add dates'
        },
        {
            label: 'Check out',
            place: 'Add dates'
        },
        {
            label: 'Guests',
            place: 'Add guests'
        },
    ]

    const exp = [
        {
            label: 'Location',
            place: 'Where are you going?'
        },
        {
            label: 'Date',
            place: 'when you want to go?'
        },
    ]

    const [first, setFirst] = useState(0)

    return (
        <div className='home'>
            <div className='navbar'>
                <h1 className='logo'>airbnb</h1>
                <div className='btw_links'>
                    <span className={first===0 ? 'active btw_link': 'btw_link'} onClick={() => setFirst(0)}>Places to Stay</span>
                    <span className={first===1 ? 'active btw_link': 'btw_link'} onClick={() => setFirst(1)}>Experiences</span>
                    <span className={first===2 ? 'active btw_link': 'btw_link'} onClick={() => setFirst(2)}>Online Experiences</span>
                </div>
                <div className='end_links'>
                    <span className='end_link'>Become a Host</span>
                    <span className='end_link'><FontAwesomeIcon icon={faGlobe}/></span>
                    <span className='end_link menu'>
                        <FontAwesomeIcon icon={faBars}/>
                        <FontAwesomeIcon icon={faUserCircle} className='icon'/>
                    </span>
                </div>
                <div className='input_less'>
                    <input type='text' className='input_less' placeholder=''start your search/>
                    <FontAwesomeIcon icon={faSearch} className='search_icon_input'/>
                </div>
            </div>
            {
                first===0 ? <InputBox result={places}/> : (first===1 ? <InputBox result={exp}/> : '')
            }
            <img src='https://cdn.pixabay.com/photo/2018/06/10/13/41/rice-3466518_960_720.jpg' alt='home'/>
            <h1 className='home_des'>Made possible by Hosts</h1>
        </div>
    )
}

export default Home
