import React from 'react'
import '../styles/header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'

const Header = () => {
    return (
        <div className='header'>
           <div className="logoContainer">
               <img src={punkLogo} alt="cryptopunk logo" className='punkLogo'/>
           </div>
        </div>
    )
}

export default Header
