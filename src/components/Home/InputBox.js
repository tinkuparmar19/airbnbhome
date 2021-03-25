import React from 'react'
import './InputBox.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

function InputBox(props) {
    const {result} = props
    return (
        <div className='search'>
            {
                result.map(data => {
                    return (
                        <div className='search_container'>
                            <label>{data.label}</label>
                            <input src={data.place} placeholder={data.place}/>
                        </div>
                    )
                })
            }
            <FontAwesomeIcon icon={faSearch} className='search_icon'/>
        </div>
    )
}

export default InputBox
