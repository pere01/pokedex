import React from 'react'
import './styles/headerPoke.css'
import '/public/home/logo.png'

const HeaderPoke = () => {
    return (
        <header className='header'>
            <img className='img-header' src="/home/logo.png" alt="" />
            <div className='header__black'>
                <div className='header__circle'>
                </div>
            </div>
        </header>
    )
}

export default HeaderPoke